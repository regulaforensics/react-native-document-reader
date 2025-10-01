import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, NativeEventEmitter, Platform, TouchableOpacity, Image, Button } from 'react-native'
import DocumentReader, { Enum, DocumentReaderCompletion, DocumentReaderScenario, RNRegulaDocumentReader, DocumentReaderResults, DocumentReaderNotification, ScannerConfig, RecognizeConfig, DocReaderConfig, Functionality } from '@regulaforensics/react-native-document-reader-api'
import * as RNFS from 'react-native-fs'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group'
import { CheckBox } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome'
import { launchImageLibrary } from 'react-native-image-picker'
import * as Progress from 'react-native-progress'

var isReadingRfid = false

interface IProps {
}

interface IState {
  fullName: string | undefined
  doRfid: boolean
  isReadingRfidCustomUi: boolean
  rfidUIHeader: string
  rfidUIHeaderColor: string
  rfidDescription: string
  rfidProgress: number
  canRfid: boolean
  canRfidTitle: string
  radioButtons: any
  selectedScenario: string
  portrait: any
  docFront: any
}

export default class App extends React.Component<IProps, IState> {
  onInitialized() {
    this.setState({ fullName: "Ready" })

    var functionality = new Functionality()
    functionality.showCaptureButton = true
    DocumentReader.setFunctionality(functionality, _ => { }, _ => { })
  }

  constructor(props: {} | Readonly<{}>) {
    super(props)
    Icon.loadFont()

    var eventManager = new NativeEventEmitter(RNRegulaDocumentReader)
    eventManager.addListener('completion', (e) => this.handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(e["msg"]))!))
    eventManager.addListener('rfidOnProgressCompletion', e => this.updateRfidUI(DocumentReaderNotification.fromJson(JSON.parse(e["msg"]))!))

    var licPath = Platform.OS === 'ios' ? (RNFS.MainBundlePath + "/regula.license") : "regula.license"
    var readFile = Platform.OS === 'ios' ? RNFS.readFile : RNFS.readFileAssets
    readFile(licPath, 'base64').then((res) => {
      this.setState({ fullName: "Initializing..." })
      var config = new DocReaderConfig()
      config.license = res
      config.delayedNNLoad = true
      DocumentReader.initializeReader(config, (response) => {
        if (!JSON.parse(response)["success"]) {
          console.log(response)
          return
        }
        console.log("Init complete")
        DocumentReader.getIsRFIDAvailableForUse((canRfid) => {
          if (canRfid) {
            this.setState({ canRfid: true, rfidUIHeader: "Reading RFID", rfidDescription: "Place your phone on top of the NFC tag", rfidUIHeaderColor: "black" })
            this.setState({ canRfidTitle: '' })
          }
        }, error => console.log(error))
        DocumentReader.getAvailableScenarios((jstring) => {
          var scenarios = JSON.parse(jstring)
          var items: RadioButtonProps[] = []
          for (var i in scenarios) {
            var scenario = DocumentReaderScenario.fromJson(typeof scenarios[i] === "string" ? JSON.parse(scenarios[i]) : scenarios[i])!.name!
            items.push({ label: scenario, id: scenario })
          }
          this.setState({ radioButtons: items })
          this.setState({ selectedScenario: this.state.radioButtons[0]['id'] })
        }, error => console.log(error))
        this.onInitialized()
      }, error => console.log(error))
    })

    this.state = {
      fullName: "Please wait...",
      doRfid: false,
      isReadingRfidCustomUi: false,
      rfidUIHeader: "",
      rfidUIHeaderColor: "black",
      rfidDescription: "",
      rfidProgress: -1,
      canRfid: false,
      canRfidTitle: "(unavailable)",
      radioButtons: [{ label: 'Loading', id: "0" }],
      selectedScenario: "",
      portrait: require('./images/portrait.png'),
      docFront: require('./images/id.png')
    }
  }

  handleCompletion(completion: DocumentReaderCompletion) {
    if (this.state.isReadingRfidCustomUi) {
      if (completion.action == Enum.DocReaderAction.ERROR) this.restartRfidUI()
      if (this.actionSuccess(completion.action!) || this.actionError(completion.action!)) {
        this.hideRfidUI()
        this.displayResults(completion.results!)
      }
    } else if (this.actionSuccess(completion.action!) || this.actionError(completion.action!))
      this.handleResults(completion.results!)
  }

  actionSuccess(action: number) {
    if (action == Enum.DocReaderAction.COMPLETE || action == Enum.DocReaderAction.TIMEOUT) return true
    return false
  }

  actionError(action: number) {
    if (action == Enum.DocReaderAction.CANCEL || action == Enum.DocReaderAction.ERROR) return true
    return false
  }

  showRfidUI() {
    // show animation
    this.setState({ isReadingRfidCustomUi: true })
  }

  hideRfidUI() {
    // show animation
    DocumentReader.stopRFIDReader(_ => { }, _ => { });
    this.restartRfidUI()
    this.setState({ isReadingRfidCustomUi: false, rfidUIHeader: "Reading RFID", rfidUIHeaderColor: "black" })
  }

  restartRfidUI() {
    this.setState({ rfidUIHeaderColor: "red", rfidUIHeader: "Failed!", rfidDescription: "Place your phone on top of the NFC tag", rfidProgress: -1 })
  }

  updateRfidUI(notification: DocumentReaderNotification) {
    if (notification.notificationCode === Enum.eRFID_NotificationCodes.RFID_NOTIFICATION_PCSC_READING_DATAGROUP)
      this.setState({ rfidDescription: "ERFIDDataFileType: " + notification.dataFileType })
    this.setState({ rfidUIHeader: "Reading RFID", rfidUIHeaderColor: "black" })
    if (notification.progress != null)
      this.setState({ rfidProgress: notification.progress / 100 })
    if (Platform.OS === 'ios')
      DocumentReader.setRfidSessionStatus(this.state.rfidDescription + "\n" + notification.progress + "%", e => { }, e => { })
  }

  clearResults() {
    this.setState({ fullName: "Ready", docFront: require('./images/id.png'), portrait: require('./images/portrait.png') })
  }

  scan() {
    this.clearResults()
    var config = new ScannerConfig()
    config.scenario = this.state.selectedScenario
    DocumentReader.startScanner(config, _ => { }, e => console.log(e))
  }

  recognize() {
    launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      selectionLimit: 10
    }, r => {
      if (r.errorCode != null) {
        console.log("error code: " + r.errorCode)
        console.log("error message: " + r.errorMessage)
        this.setState({ fullName: r.errorMessage })
        return
      }
      if (r.didCancel) return
      this.clearResults()
      this.setState({ fullName: "COPYING IMAGE..." })
      var response = r.assets

      var images: any = []

      for (var i = 0; i < response!.length; i++) {
        images.push(response![i].base64!)
      }
      this.setState({ fullName: "PROCESSING..." })

      var config = new RecognizeConfig()
      config.scenario = this.state.selectedScenario
      config.images = images
      DocumentReader.recognize(config, _ => { }, e => console.log(e))
    })
  }

  displayResults(results: DocumentReaderResults) {
    if (results == null) return

    results.textFieldValueByType(Enum.eVisualFieldType.FT_SURNAME_AND_GIVEN_NAMES, (value: string | undefined) => {
      this.setState({ fullName: value })
    }, (error: string) => console.log(error))

    results.graphicFieldImageByType(Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE, (value: string | undefined) => {
      if (value != null && value != "")
        this.setState({ docFront: { uri: "data:image/png;base64," + value } })
    }, (error: string) => console.log(error))

    results.graphicFieldImageByType(Enum.eGraphicFieldType.GF_PORTRAIT, (value: string | undefined) => {
      if (value != null && value != "")
        this.setState({ portrait: { uri: "data:image/png;base64," + value } })
    }, (error: string) => console.log(error))

    results.graphicFieldImageByTypeSource(Enum.eGraphicFieldType.GF_PORTRAIT, Enum.eRPRM_ResultType.RFID_RESULT_TYPE_RFID_IMAGE_DATA, (value: string | undefined) => {
      if (value != null && value != "")
        this.setState({ portrait: { uri: "data:image/png;base64," + value } })
    }, (error: string) => console.log(error))
  }

  customRFID() {
    this.showRfidUI()
    DocumentReader.readRFID(false, false, false, _ => { }, _ => { })
  }

  usualRFID() {
    isReadingRfid = true
    DocumentReader.startRFIDReader(false, false, false, _ => { }, _ => { })
  }

  handleResults(results: DocumentReaderResults) {
    if (this.state.doRfid && !isReadingRfid && results != null && results.chipPage != 0) {
      // this.customRFID()
      this.usualRFID()
    } else {
      isReadingRfid = false
      this.displayResults(results)
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {!this.state.isReadingRfidCustomUi && <View style={styles.container}>
          <Text style={styles.title}>{this.state.fullName}</Text>

          <View style={{ flexDirection: "row", padding: 5 }}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text style={styles.imageLabel}>Portrait</Text>
              <Image style={{ height: 150, width: 150 }} source={this.state.portrait} resizeMode="contain" />
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", padding: 5 }}>
              <Text style={styles.imageLabel}>Document image</Text>
              <Image style={{ height: 150, width: 200 }} source={this.state.docFront} resizeMode="contain" />
            </View>
          </View>

          <ScrollView style={{ padding: 5, alignSelf: 'center' }} showsVerticalScrollIndicator={false}>
            <RadioGroup
              containerStyle={{ alignItems: 'flex-start' }}
              radioButtons={this.state.radioButtons}
              onPress={(selectedID) => { this.setState({ selectedScenario: selectedID }) }}
              selectedId={this.state.selectedScenario}
            />
          </ScrollView>

          <View style={{ flexDirection: 'row', padding: 5 }}>
            <CheckBox
              containerStyle={{ backgroundColor: '#F5FCFF' }}
              checked={this.state.doRfid}
              title={'Process rfid reading' + this.state.canRfidTitle}
              onPress={() => {
                if (this.state.canRfid) {
                  this.setState({ doRfid: !this.state.doRfid })
                }
              }} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Button color="#4285F4" title="Scan document" onPress={() => this.scan()} />
            <Text style={{ padding: 5 }}></Text>
            <Button color="#4285F4" title="Scan image" onPress={() => this.recognize()} />
          </View>
        </View>}

        {(this.state.isReadingRfidCustomUi) && <View style={styles.container}>
          <Text style={{ paddingBottom: 30, fontSize: 23, color: this.state.rfidUIHeaderColor }}>{this.state.rfidUIHeader}</Text>
          <Text style={{ paddingBottom: 50, fontSize: 20 }}>{this.state.rfidDescription}</Text>
          <Progress.Bar style={{ marginBottom: 30 }} width={200} useNativeDriver={true} color="#4285F4" progress={this.state.rfidProgress} />
          <TouchableOpacity style={styles.cancelButton} onPress={() => { this.hideRfidUI() }}>
            <Text style={{ fontSize: 20 }}>X</Text>
          </TouchableOpacity>
        </View>}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 12,
  },
  cancelButton: {
    position: 'absolute',
    bottom: 0,
    right: 20
  },
  imageLabel: {
    top: 1,
    right: 1,
    padding: 5
  },
  title: {
    top: 1,
    left: 1,
    padding: 30,
    fontSize: 20
  }
})