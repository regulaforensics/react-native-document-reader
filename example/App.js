import React, { Component } from 'react'
import { StyleSheet, View, Button, Text, Image, ScrollView, NativeEventEmitter, Platform, TouchableOpacity } from 'react-native'
import DocumentReader, { Enum, DocumentReaderCompletion, DocumentReaderScenario, RNRegulaDocumentReader } from '@regulaforensics/react-native-document-reader-beta'
import * as RNFS from 'react-native-fs'
import RadioGroup from 'react-native-radio-buttons-group'
import { launchImageLibrary } from 'react-native-image-picker';
import * as Progress from 'react-native-progress'
import CheckBox from 'react-native-check-box'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['new NativeEventEmitter']);
const eventManager = new NativeEventEmitter(RNRegulaDocumentReader)

var licPath = Platform.OS === 'ios' ? (RNFS.MainBundlePath + "/regula.license") : "regula.license"
var certDir = Platform.OS === 'ios' ? (RNFS.MainBundlePath + "/certificates") : "certificates"
var readDir = Platform.OS === 'ios' ? RNFS.readDir : RNFS.readDirAssets
var readFile = Platform.OS === 'ios' ? RNFS.readFile : RNFS.readFileAssets

var isReadingRfid = false;

async function addCertificates() {
  var certificates = []
  var items = await readDir(certDir, 'base64')

  for (var i in items) {
    var item = items[i]
    if (item.isFile()) {
      var findExt = item.name.split('.')
      var pkdResourceType = 0
      if (findExt.length > 0)
        pkdResourceType = Enum.PKDResourceType.getType(findExt[findExt.length - 1].toLowerCase())

      var file = await readFile(item.path, 'base64')
      certificates.push({
        'binaryData': file,
        'resourceType': pkdResourceType
      })
    }
  }
  DocumentReader.addPKDCertificates(certificates, s => {
    console.log("certificates added")
  }, e => console.log(e))
}

export default class App extends Component {
  constructor(props) {
    super(props)
    eventManager.addListener('prepareDatabaseProgressChangeEvent', e => this.setState({ fullName: "Downloading database: " + e["msg"] + "%" }))
    eventManager.addListener('completionEvent', e => this.handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(e["msg"]))))
    eventManager.addListener('rfidNotificationCompletionEvent', e => console.log("rfidNotificationCompletionEvent: " + e["msg"]))
    eventManager.addListener('paCertificateCompletionEvent', e => console.log("paCertificateCompletionEvent: " + e["msg"]))
    DocumentReader.prepareDatabase("Full", (respond) => {
      console.log(respond)
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
            var scenariosTemp = JSON.parse(jstring)
            var scenariosL = []
            for (var i in scenariosTemp) {
              scenariosL.push({
                label: DocumentReaderScenario.fromJson(typeof scenariosTemp[i] === "string" ? JSON.parse(scenariosTemp[i]) : scenariosTemp[i]).name,
                id: i
              })
            }
            this.setState({ scenarios: scenariosL })
            this.setState({ selectedScenario: this.state.scenarios[0]['label'] })
            this.setState({ radio: null })
            this.setState({
              radio: < RadioGroup containerStyle={styles.radio}
                radioButtons={this.state.scenarios}
                onPress={
                  (data) => {
                    var selectedItem
                    for (var index in data)
                      if (data[index]['selected'])
                        selectedItem = data[index]['label']
                    this.setState({ selectedScenario: selectedItem })
                  }
                }
              />
            })
            DocumentReader.getDocumentReaderIsReady((isReady) => {
              if (isReady) {
                this.setState({ fullName: "Ready" })
                DocumentReader.setRfidDelegate(Enum.RFIDDelegate.NO_PA, (r) => { }, error => console.log(error))
                // addCertificates()
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
      canRfid: false,
      canRfidTitle: '(unavailable)',
      scenarios: [],
      selectedScenario: "",
      portrait: require('./images/portrait.png'),
      docFront: require('./images/id.png'),
      radio: < RadioGroup containerStyle={styles.radio}
        radioButtons={
          [{ label: 'Loading', id: 0 }]}
        onPress={null}
      />
    }
  }

  handleCompletion(completion) {
    if (this.state.isReadingRfidCustomUi && (completion.action === Enum.DocReaderAction.CANCEL || completion.action === Enum.DocReaderAction.ERROR))
      this.hideRfidUI()
    if (this.state.isReadingRfidCustomUi && completion.action === Enum.DocReaderAction.NOTIFICATION)
      this.updateRfidUI(completion.results.documentReaderNotification)
    if (completion.action === Enum.DocReaderAction.COMPLETE)
      if (this.state.isReadingRfidCustomUi)
        if (completion.results.rfidResult !== 1)
          this.restartRfidUI()
        else {
          this.hideRfidUI()
          this.displayResults(completion.results)
        }
      else
        this.handleResults(completion.results)
    if (completion.action === Enum.DocReaderAction.TIMEOUT)
      this.handleResults(completion.results)
    if (completion.action === Enum.DocReaderAction.CANCEL || completion.action === Enum.DocReaderAction.ERROR)
      isReadingRfid = false
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

  updateRfidUI(results) {
    if (results.code === Enum.eRFID_NotificationCodes.RFID_NOTIFICATION_PCSC_READING_DATAGROUP)
      this.setState({ rfidDescription: Enum.eRFID_DataFile_Type.getTranslation(results.number) })
    this.setState({ rfidUIHeader: "Reading RFID", rfidUIHeaderColor: "black", rfidProgress: results.value / 100 })
    if (Platform.OS === 'ios')
      DocumentReader.setRfidSessionStatus(this.state.rfidDescription + "\n" + results.value + "%", e => { }, e => { })
  }

  clearResults() {
    this.setState({ fullName: "Ready", docFront: require('./images/id.png'), portrait: require('./images/portrait.png') })
  }

  displayResults(results) {
    if(results == null) return
    this.setState({ fullName: results.getTextFieldValueByType({ fieldType: Enum.eVisualFieldType.FT_SURNAME_AND_GIVEN_NAMES }) })
    if (results.getGraphicFieldImageByType({ fieldType: Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE }) != null)
      this.setState({ docFront: { uri: "data:image/png;base64," + results.getGraphicFieldImageByType({ fieldType: Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE }) } })
    if (results.getGraphicFieldImageByType({ fieldType: Enum.eGraphicFieldType.GF_PORTRAIT }) != null)
      this.setState({ portrait: { uri: "data:image/png;base64," + results.getGraphicFieldImageByType({ fieldType: Enum.eGraphicFieldType.GF_PORTRAIT }) } })
  }

  customRFID() {
    this.showRfidUI()
    DocumentReader.readRFID(e => { }, e => { })
  }

  usualRFID() {
    isReadingRfid = true
    DocumentReader.startRFIDReader(e => { }, e => { })
  }

  handleResults(results) {
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
      <View style={styles.container}>
        {(this.state.isReadingRfidCustomUi && Platform.OS === 'android') && <View style={styles.container}>
          <Text style={{ paddingBottom: 30, fontSize: 23, color: this.state.rfidUIHeaderColor }}>{this.state.rfidUIHeader}</Text>
          <Text style={{ paddingBottom: 50, fontSize: 20 }}>{this.state.rfidDescription}</Text>
          <Progress.Bar width={200} useNativeDriver={true} color="#4285F4" progress={this.state.rfidProgress} />
          <TouchableOpacity style={styles.cancelButton} onPress={() => { this.hideRfidUI() }}>
            <Text style={{ fontSize: 20 }}>X</Text>
          </TouchableOpacity>
        </View>
        }
        {!this.state.isReadingRfidCustomUi && <View style={styles.container}>
        <Text/><Text/>
          <Text style={{
            top: 1,
            left: 1,
            padding: 30,
            fontSize: 20,
          }}>
            {this.state.fullName}
          </Text>
          <View style={{ flexDirection: "row", padding: 5 }}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text style={{
                top: 1,
                right: 1,
                padding: 5,
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
            {this.state.radio}
          </ScrollView>

          <View style={{ flexDirection: 'row', padding: 5 }}>
            <CheckBox
              isChecked={this.state.doRfid}
              onClick={() => {
                if (this.state.canRfid) {
                  this.setState({ doRfid: !this.state.doRfid })
                }
              }}
              disabled={!this.state.canRfid}
            />
            <Text
              style={{ padding: 5 }}
              onPress={() => {
                if (this.state.canRfid) {
                  this.setState({ doRfid: !this.state.doRfid })
                }
              }}>
              {'Process rfid reading' + this.state.canRfidTitle}
            </Text>
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

                DocumentReader.showScanner(s => { }, e => console.log(e))
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

                  for (var i = 0; i < response.length; i++) {
                    images.push(response[i].base64)
                  }
                  this.setState({ fullName: "PROCESSING..." })
                  DocumentReader.recognizeImages(images, s => { }, e => console.log(e))
                })
              }}
              title="     Scan image     "
            />
          </View>
        </View>
        }
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  cancelButton: {
    position: 'absolute',
    bottom: 0,
    right: 20
  }
})
