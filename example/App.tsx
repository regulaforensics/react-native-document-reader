import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, NativeEventEmitter, Platform, TouchableOpacity, Image, Button } from 'react-native';
import DocumentReader, { Enum, DocumentReaderCompletion, DocumentReaderScenario, RNRegulaDocumentReader, DocumentReaderResults, DocumentReaderNotification } from '@regulaforensics/react-native-document-reader-api'
import * as RNFS from 'react-native-fs'
import RadioGroup from 'react-native-radio-buttons-group'
import { CheckBox } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import * as Progress from 'react-native-progress'

var isReadingRfid = false;

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
  constructor(props: {} | Readonly<{}>) {
    super(props)
    Icon.loadFont();

    var eventManager = new NativeEventEmitter(RNRegulaDocumentReader)
    eventManager.addListener('prepareDatabaseProgressChangeEvent', e => this.setState({ fullName: "Downloading database: " + e["msg"] + "%" }))
    eventManager.addListener('completionEvent', (e) => this.handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(e["msg"]))!))
    eventManager.addListener('rfidNotificationCompletionEvent', e => console.log("rfidNotificationCompletionEvent: " + e["msg"]))
    eventManager.addListener('paCertificateCompletionEvent', e => console.log("paCertificateCompletionEvent: " + e["msg"]))
    eventManager.addListener('onCustomButtonTappedEvent', e => console.log("onCustomButtonTappedEvent: " + e["msg"]))

    DocumentReader.prepareDatabase("Full", (respond) => {
      console.log(respond)
      var licPath = Platform.OS === 'ios' ? (RNFS.MainBundlePath + "/regula.license") : "regula.license"
      var readFile = Platform.OS === 'ios' ? RNFS.readFile : RNFS.readFileAssets
      readFile(licPath, 'base64').then((res) => {
        this.setState({ fullName: "Initializing..." })
        DocumentReader.initializeReader({
          license: res,
          delayedNNLoad: true
        }, (respond) => {
          console.log(respond)
          DocumentReader.isRFIDAvailableForUse((canRfid) => {
            if (canRfid) {
              this.setState({ canRfid: true, rfidUIHeader: "Reading RFID", rfidDescription: "Place your phone on top of the NFC tag", rfidUIHeaderColor: "black" })
              this.setState({ canRfidTitle: '' })
            }
          }, error => console.log(error))
          DocumentReader.getAvailableScenarios((jstring) => {
            var scenarios = JSON.parse(jstring)
            var items = []
            for (var i in scenarios) {
              var scenario = DocumentReaderScenario.fromJson(typeof scenarios[i] === "string" ? JSON.parse(scenarios[i]) : scenarios[i])!.name
              items.push({
                label: scenario,
                id: scenario
              })
            }
            this.setState({ radioButtons: items })
            this.setState({ selectedScenario: this.state.radioButtons[0]['id'] })

            DocumentReader.getDocumentReaderIsReady((isReady) => {
              if (isReady) {
                this.setState({ fullName: "Ready" })
                DocumentReader.setRfidDelegate(Enum.RFIDDelegate.NO_PA, (_r) => { }, error => console.log(error))
              } else
                this.setState({ fullName: "Failed" })
            }, error => console.log(error))
          }, error => console.log(error))
        }, error => console.log(error))
      })
    }, error => console.log(error))

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
    console.log("DocReaderAction: " + completion.action)
    if (this.state.isReadingRfidCustomUi && (completion.action === Enum.DocReaderAction.CANCEL || completion.action === Enum.DocReaderAction.ERROR))
      this.hideRfidUI()
    if (this.state.isReadingRfidCustomUi && completion.action === Enum.DocReaderAction.NOTIFICATION)
      this.updateRfidUI(completion.results!.documentReaderNotification!)
    if (completion.action === Enum.DocReaderAction.COMPLETE)
      if (this.state.isReadingRfidCustomUi)
        if (completion.results!.rfidResult !== 1)
          this.restartRfidUI()
        else {
          this.hideRfidUI()
          this.displayResults(completion.results!)
        }
      else
        this.handleResults(completion.results!)
    if (completion.action === Enum.DocReaderAction.TIMEOUT)
      this.handleResults(completion.results!)
  }

  showRfidUI() {
    // show animation
    this.setState({ isReadingRfidCustomUi: true })
  }

  hideRfidUI() {
    // show animation
    this.restartRfidUI()
    this.setState({ isReadingRfidCustomUi: false, rfidUIHeader: "Reading RFID", rfidUIHeaderColor: "black" })
  }

  restartRfidUI() {
    this.setState({ rfidUIHeaderColor: "red", rfidUIHeader: "Failed!", rfidDescription: "Place your phone on top of the NFC tag", rfidProgress: -1 })
  }

  updateRfidUI(notification: DocumentReaderNotification) {
    if (notification.code === Enum.eRFID_NotificationCodes.RFID_NOTIFICATION_PCSC_READING_DATAGROUP)
      this.setState({ rfidDescription: Enum.eRFID_DataFile_Type.getTranslation(notification.dataFileType!) })
    this.setState({ rfidUIHeader: "Reading RFID", rfidUIHeaderColor: "black" })
    if (notification.value != null)
      this.setState({ rfidProgress: notification.value / 100 })
    if (Platform.OS === 'ios')
      DocumentReader.setRfidSessionStatus(this.state.rfidDescription + "\n" + notification.value + "%", e => { }, e => { })
  }

  clearResults() {
    this.setState({ fullName: "Ready", docFront: require('./images/id.png'), portrait: require('./images/portrait.png') })
  }

  displayResults(results: DocumentReaderResults) {
    if (results == null) return

    results.textFieldValueByType(Enum.eVisualFieldType.FT_SURNAME_AND_GIVEN_NAMES, (value) => {
      this.setState({ fullName: value })
    }, error => console.log(error))

    results.graphicFieldImageByType(Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE, (value) => {
      if (value != null && value != "")
        this.setState({ docFront: { uri: "data:image/png;base64," + value } })
    }, error => console.log(error))

    results.graphicFieldImageByType(Enum.eGraphicFieldType.GF_PORTRAIT, (value) => {
      if (value != null && value != "")
        this.setState({ portrait: { uri: "data:image/png;base64," + value } })
    }, error => console.log(error))
  }

  customRFID() {
    this.showRfidUI()
    DocumentReader.readRFID(_e => { }, _e => { })
  }

  usualRFID() {
    isReadingRfid = true
    DocumentReader.startRFIDReader(_e => { }, _e => { })
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
        {(this.state.isReadingRfidCustomUi) && <View style={styles.container}>
          <Text style={{ paddingBottom: 30, fontSize: 23, color: this.state.rfidUIHeaderColor }}>{this.state.rfidUIHeader}</Text>
          <Text style={{ paddingBottom: 50, fontSize: 20, color: "black" }}>{this.state.rfidDescription}</Text>
          <Progress.Bar width={200} useNativeDriver={true} color="#4285F4" progress={this.state.rfidProgress} />
          <TouchableOpacity style={styles.cancelButton} onPress={() => { this.hideRfidUI() }}>
            <Text style={{ fontSize: 20, color: "black" }}>X</Text>
          </TouchableOpacity>
        </View>
        }
        {!this.state.isReadingRfidCustomUi && <View style={styles.container}>
          <Text /><Text />
          <Text style={{
            top: 1,
            left: 1,
            padding: 30,
            fontSize: 20,
            color: "black"
          }}>
            {this.state.fullName}
          </Text>
          <View style={{ flexDirection: "row", padding: 5 }}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text style={{
                top: 1,
                right: 1,
                padding: 5,
                color: "black"
              }}>
                Portrait
              </Text>
              <Image
                style={{
                  height: 150,
                  width: 150,
                }}
                source={this.state.portrait}
                resizeMode="contain"
              />
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", padding: 5 }}>
              <Text style={{
                top: 1,
                right: 1,
                padding: 5,
                color: "black"
              }}>
                Document image
              </Text>
              <Image
                style={{
                  height: 150,
                  width: 200,
                }}
                source={this.state.docFront}
                resizeMode="contain"
              />
            </View>
          </View>

          <ScrollView style={{ padding: 5, alignSelf: 'center' }} showsVerticalScrollIndicator={false}>
            <RadioGroup containerStyle={styles.radio}
              radioButtons={this.state.radioButtons}
              onPress={
                (selectedID) => {
                  this.setState({ selectedScenario: selectedID })
                }
              }
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
            <Button color="#4285F4"
              onPress={() => {
                this.clearResults()
                DocumentReader.setConfig({
                  functionality: {
                    videoCaptureMotionControl: true,
                    showCaptureButton: true
                  },
                  customization: {
                    showResultStatusMessages: true,
                    showStatusMessages: true
                  },
                  processParams: {
                    scenario: this.state.selectedScenario,
                    doRfid: this.state.doRfid,
                  },
                }, e => { }, error => console.log(error))

                DocumentReader.showScanner(_s => { }, e => console.log(e))
              }}
              title="Scan document"
            />
            <Text style={{ padding: 5 }}></Text>
            <Button color="#4285F4"
              onPress={() => {
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
                  DocumentReader.setConfig({
                    functionality: {
                      videoCaptureMotionControl: true,
                      showCaptureButton: true
                    },
                    customization: {
                      showResultStatusMessages: true,
                      showStatusMessages: true
                    },
                    processParams: {
                      scenario: this.state.selectedScenario,
                      doRfid: this.state.doRfid,
                    },
                  }, e => { }, error => console.log(error))

                  var images = []

                  for (var i = 0; i < response!.length; i++) {
                    images.push(response![i].base64!)
                  }
                  this.setState({ fullName: "PROCESSING..." })
                  DocumentReader.recognizeImages(images, _s => { }, e => console.log(e))
                })
              }}
              title="     Scan image     "
            />
          </View>
        </View>
        }
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
  radio: {
    alignItems: 'flex-start'
  },
  cancelButton: {
    position: 'absolute',
    bottom: 0,
    right: 20
  }
})
