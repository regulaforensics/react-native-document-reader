import DocumentReader

let docReader = DocReader.shared

let completionEvent = "completion"
let databaseProgressEvent = "database_progress"
let rfidOnProgressEvent = "rfidOnProgressCompletion"
let rfidOnChipDetectedEvent = "rfidOnChipDetectedEvent"
let rfidOnRetryReadChipEvent = "rfidOnRetryReadChipEvent"
let paCertificateCompletionEvent = "pa_certificate_completion"
let taCertificateCompletionEvent = "ta_certificate_completion"
let taSignatureCompletionEvent = "ta_signature_completion"
let aaChallengeCompletionEvent = "aaChallengeCompletionEvent"
let paceProtocolCompletionEvent = "paceProtocolCompletionEvent"
let caProtocolCompletionEvent = "caProtocolCompletionEvent"
let videoEncoderCompletionEvent = "video_encoder_completion"
let onCustomButtonTappedEvent = "onCustomButtonTappedEvent"

func methodCall(_ method: String, _ callback: @escaping Callback) {
    switch method {
    case("getDocumentReaderIsReady"): callback(docReader.isDocumentReaderIsReady)
    case("getDocumentReaderStatus"): callback(docReader.documentReaderStatus)
    case("getRfidSessionStatus"): callback(docReader.rfidSessionStatus)
    case("setRfidSessionStatus"): docReader.rfidSessionStatus = argsNullable(0)
    case("getTag"): callback(docReader.tag)
    case("setTag"): docReader.tag = argsNullable(0)
    case("getTenant"): callback(docReader.tenant)
    case("setTenant"): docReader.tenant = argsNullable(0)
    case("getEnv"): callback(docReader.env)
    case("setEnv"): docReader.env = argsNullable(0)
    case("getLocale"): callback(docReader.languageLocaleCode)
    case("setLocale"): docReader.languageLocaleCode = argsNullable(0)
    case("getFunctionality"): callback(docReader.functionality.encode())
    case("setFunctionality"): docReader.functionality.update(args(0))
    case("getProcessParams"): callback(docReader.processParams.encode())
    case("setProcessParams"): docReader.processParams.update(args(0))
    case("getCustomization"): callback(docReader.customization.encode())
    case("setCustomization"): docReader.customization.update(args(0))
    case("getRfidScenario"): callback(docReader.rfidScenario.encode())
    case("setRfidScenario"): docReader.rfidScenario.update(args(0))
    case("resetConfiguration"):
        docReader.functionality = Functionality()
        docReader.processParams = ProcessParams()
        docReader.customization = Customization()
        docReader.rfidScenario = RFIDScenario()
        docReader.functionality.recordScanningProcessDelegate = recordScanningProcessDelegate
        docReader.customization.actionDelegate = actionDelegate
    case("initialize"), ("initializeReader"), ("initializeReaderWithBleDeviceConfig"):
        let config = args(0) as [String: Any]
        docReader.initializeReader(
            config: config["useBleDevice"] as? Bool == true || method == "initializeReaderWithBleDeviceConfig"
                ? DocReader.BleConfig.decode(config, bluetooth)
                : DocReader.Config.decode(config)!,
            completion: { success, error in
                if success {
                    docReader.rfidDelegate = rfidDelegate
                    docReader.functionality.recordScanningProcessDelegate = recordScanningProcessDelegate
                    docReader.customization.actionDelegate = actionDelegate
                }
                callback(generateSuccessCompletion(success, error))
            })
    case("deinitializeReader"): docReader.deinitializeReader()
    case("prepareDatabase"):
        docReader.databaseFetchDelegate = databaseFetchDelegate
        docReader.prepareDatabase(databaseID: args(0), progressHandler: nil, completion: { callback(generateSuccessCompletion($0, $1)) })
    case("runAutoUpdate"):
        docReader.databaseFetchDelegate = databaseFetchDelegate
        docReader.runAutoUpdate(databaseID: args(0), progressHandler: nil, completion: { callback(generateSuccessCompletion($0, $1)) })
    case("removeDatabase"): docReader.removeDatabase { success, _ in callback(success) }
    case("cancelDBUpdate"): docReader.cancelDBUpdate(); callback(true)
    case("checkDatabaseUpdate"): docReader.checkDatabaseUpdate(databaseID: args(0), completion: { callback($0?.encode()) })
    case("scan"), ("startScanner"): let config = DocReader.ScannerConfig.decode(args(0))!
        withPresenter { docReader.startScanner(presenter: $0, config: config, completion: completion) }
    case("recognize"): let config = DocReader.RecognizeConfig.decode(args(0))!
        withPresenter { docReader.recognizeImage(fromPresenter: $0, config: config, completion: completion) }
    case("startNewPage"): docReader.startNewPage()
    case("stopScanner"): DispatchQueue.main.async { docReader.stopScanner(nil) }
    case("startRFIDReader"):
        rfidReaderRequest = args(0)
        withPresenter { docReader.startRFIDReader(fromPresenter: $0, completion: completion) }
    case("readRFID"):
        rfidReaderRequest = args(0)
        docReader.readRFID({ _, notification in
            if let notification { sendEvent(rfidOnProgressEvent, notification.encode()) }
        }, completion: { action, results, error, _ in
            sendEvent(completionEvent, generateCompletion(action.encode(), results, error))
        })
    case("stopRFIDReader"): docReader.stopRFIDReader(nil)
    case("providePACertificates"): paCertificateCompletion?((argsNullable(0) as [Any]?)?.compactMap(PKDCertificate.decode))
    case("provideTACertificates"): taCertificateCompletion?((argsNullable(0) as [Any]?)?.compactMap(PKDCertificate.decode))
    case("provideTASignature"): taSignatureCompletion?(Data.decode(argsNullable(0)))
    case("provideAAChallenge"): aaChallengeCompletion?(argsNullable(0))
    case("selectPACEProtocol"): paceProtocolCompletion?(RGLRFIDAccessControlPACE.decode(argsNullable(0)))
    case("selectCAProtocol"): caProtocolCompletion?(RGLRFIDAccessControlCA.decode(argsNullable(0)))
    case("setTCCParams"): docReader.setTCCParams(TCCParams.decode(args(0))!, completion: { callback(generateSuccessCompletion($0, $1)) })
    case("addPKDCertificates"): docReader.addPKDCertificates(certificates: (args(0) as [Any]).compactMap(PKDCertificate.decode))
    case("clearPKDCertificates"): docReader.clearPKDCertificates()
    case("startNewSession"): docReader.startNewSession()
    case("connectBluetoothDevice"):
        if bluetooth.state == .connected {
            print("REGULA: Bluetooth device already connected, returning false")
            callback(false)
            return
        }
        bluetooth.delegate = bluetoothDelegate
        bluetoothCallback = callback
        bluetooth.connect(withDeviceName: args(0))
    case("startReadMDl"):
        let type = eMDLDeviceEngagement(rawValue: args(0))!
        let retrieval = DocReader.DataRetrieval.decode(args(1))!
        withPresenter { docReader.startReadMDL(fromPresenter: $0, engagementType: type, dataRetrieval: retrieval,
            completion: { callback(generateCompletion($0.encode(), $1, $2)) }) }
    case("startEngageDevice"): let type = eMDLDeviceEngagement(rawValue: args(0))!
        withPresenter { docReader.startEngageDevice(fromPresenter: $0, type: type,
            completion: { callback(generateDeviceEngagementCompletion($0, $1)) }) }
    case("engageDeviceNFC"):
        withPresenter { docReader.engageDeviceNFC($0, completion: { callback(generateDeviceEngagementCompletion($0, $1)) }) }
    case("engageDeviceData"): docReader.engageDeviceData(args(0), completion: { callback(generateDeviceEngagementCompletion($0, $1)) })
    case("startRetrieveData"): docReader.startRetrieveData(
        DocReader.DeviceEngagement.decode(args(1))!, dataRetrieval: DocReader.DataRetrieval.decode(args(0))!,
        completion: { callback(generateCompletion($0.encode(), $1, $2)) })
    case("retrieveDataNFC"): docReader.retrieveDataNFC(DocReader.DataRetrieval.decode(args(0))!,
        completion: { callback(generateCompletion($0.encode(), $1, $2)) })
    case("retrieveDataBLE"): docReader.retrieveDataBLE(
        DocReader.DeviceEngagement.decode(args(1))!, dataRetrieval: DocReader.DataRetrieval.decode(args(0))!,
        completion: { callback(generateCompletion($0.encode(), $1, $2)) })
    case("setLocalizationDictionary"): let localization = argsNullable(0) as [String: String?]?
        docReader.localizationHandler = { localization?[$0] ?? nil }
    case("getLicense"): callback(docReader.license?.encode())
    case("getAvailableScenarios"): callback(docReader.availableScenarios.map { $0.encode() })
    case("getIsRFIDAvailableForUse"): callback(docReader.isRFIDAvailableForUse)
    case("isAuthenticatorRFIDAvailableForUse"): callback(docReader.isAuthenticatorRFIDAvailableForUse)
    case("isAuthenticatorAvailableForUse"): callback(docReader.isAuthenticatorAvailableForUse)
    case("getDocReaderVersion"): callback(docReader.version?.encode())
    case("getDocReaderDocumentsDatabase"): callback(docReader.version?.database.encode())
    case("finalizePackage"): docReader.finalizePackage(completion: { callback(generateFinalizePackageCompletion($0.encode(), $1, $2)) })
    case("finalizePackageWithFinalizeConfig"): docReader.finalizePackage(
        with: DocReader.FinalizeConfig.decode(args(0))!,
        completion: { callback(generateFinalizePackageCompletion($0.encode(), $1, $2)) })
    case("endBackendTransaction"): docReader.endBackendTransaction()
    case("textFieldValueByType"): callback(DocumentReaderResults(rawJSON: args(0)).getTextFieldValueByType(fieldType: FieldType(rawValue: args(1))!))
    case("textFieldValueByTypeLcid"): callback(DocumentReaderResults(rawJSON: args(0)).getTextFieldValueByType(fieldType: FieldType(rawValue: args(1))!, lcid: LCID(rawValue: args(2))!))
    case("textFieldValueByTypeSource"): callback(DocumentReaderResults(rawJSON: args(0)).getTextFieldValueByType(fieldType: FieldType(rawValue: args(1))!, source: ResultType(rawValue: args(2))!))
    case("textFieldValueByTypeLcidSource"): callback(DocumentReaderResults(rawJSON: args(0)).getTextFieldValueByType(fieldType: FieldType(rawValue: args(1))!, lcid: LCID(rawValue: args(2))!, source: ResultType(rawValue: args(3))!))
    case("textFieldValueByTypeSourceOriginal"): callback(DocumentReaderResults(rawJSON: args(0)).getTextFieldValueByType(fieldType: FieldType(rawValue: args(1))!, source: ResultType(rawValue: args(2))!, original: args(3)))
    case("textFieldValueByTypeLcidSourceOriginal"): callback(DocumentReaderResults(rawJSON: args(0)).getTextFieldValueByType(fieldType: FieldType(rawValue: args(1))!, lcid: LCID(rawValue: args(2))!, source: ResultType(rawValue: args(3))!, original: args(4)))
    case("textFieldByType"): callback(DocumentReaderResults(rawJSON: args(0)).getTextFieldByType(fieldType: FieldType(rawValue: args(1))!)?.encode())
    case("textFieldByTypeLcid"): callback(DocumentReaderResults(rawJSON: args(0)).getTextFieldByType(fieldType: FieldType(rawValue: args(1))!, lcid: LCID(rawValue: args(2))!)?.encode())
    case("graphicFieldByTypeSource"): callback(DocumentReaderResults(rawJSON: args(0)).getGraphicFieldByType(fieldType: GraphicFieldType(rawValue: args(1))!, source: ResultType(rawValue: args(2))!)?.encode())
    case("graphicFieldByTypeSourcePageIndex"): callback(DocumentReaderResults(rawJSON: args(0)).getGraphicFieldByType(fieldType: GraphicFieldType(rawValue: args(1))!, source: ResultType(rawValue: args(2))!, pageIndex: args(3))?.encode())
    case("graphicFieldByTypeSourcePageIndexLight"): callback(DocumentReaderResults(rawJSON: args(0)).getGraphicFieldByType(fieldType: GraphicFieldType(rawValue: args(1))!, source: ResultType(rawValue: args(2))!, pageIndex: args(3), light: GraphicFieldLight(rawValue: args(4))!)?.encode())
    case("graphicFieldImageByType"): callback(DocumentReaderResults(rawJSON: args(0)).getGraphicFieldImageByType(fieldType: GraphicFieldType(rawValue: args(1))!)?.encode())
    case("graphicFieldImageByTypeSource"): callback(DocumentReaderResults(rawJSON: args(0)).getGraphicFieldImageByType(fieldType: GraphicFieldType(rawValue: args(1))!, source: ResultType(rawValue: args(2))!)?.encode())
    case("graphicFieldImageByTypeSourcePageIndex"): callback(DocumentReaderResults(rawJSON: args(0)).getGraphicFieldImageByType(fieldType: GraphicFieldType(rawValue: args(1))!, source: ResultType(rawValue: args(2))!, pageIndex: args(3))?.encode())
    case("graphicFieldImageByTypeSourcePageIndexLight"): callback(DocumentReaderResults(rawJSON: args(0)).getGraphicFieldImageByType(fieldType: GraphicFieldType(rawValue: args(1))!, source: ResultType(rawValue: args(2))!, pageIndex: args(3), light: GraphicFieldLight(rawValue: args(4))!)?.encode())
    case("containers"): callback(DocumentReaderResults(rawJSON: args(0)).getContainers(byResultTypes: args(1)))
    case("encryptedContainers"): callback(DocumentReaderResults(rawJSON: args(0)).getEncryptedContainers())
    case("getTranslation"):
        let value = args(1) as Int
        if value == -1 { callback("Unknown"); return }
        switch args(0) as String {
        case("RFIDErrorCodes"): callback(RFIDErrorCodes(rawValue: UInt32(value))!.stringValue)
        case("LDSParsingErrorCodes"): callback(eLDS_ParsingErrorCodes(rawValue: UInt(value))!.stringValue)
        case("LDSParsingNotificationCodes"): callback(eLDS_ParsingNotificationCodes(rawValue: UInt(value))!.stringValue)
        case("ImageQualityCheckType"): callback(ImageQualityCheckType.decode(value).stringValue)
        case("RFIDDataFileType"): callback(RFIDDataFileType(rawValue: UInt32(value))!.stringValue)
        case("VisualFieldType"): callback(FieldType(rawValue: value)!.stringValue)
        case("LCID"): callback(DocumentReaderTextField.lcidName(LCID(rawValue: value)!))
        default: break
        }
    default: break
    }
}

let completion: DocumentReaderCompletion = { action, results, error in
    sendEvent(completionEvent, generateCompletion(action.encode(), results, error))
}

// MARK: - Delegates

var headersDelegateKey: UInt8 = 0
class IURLRequestInterceptingDelegate: NSObject, DocReader.URLRequestInterceptingDelegate {
    let headers: [String: String]
    init(_ headers: [String: String]) {
        self.headers = headers
    }
    func interceptorPrepare(_ request: URLRequest) -> URLRequest? {
        var req = request
        for (key, value) in headers {
            req.addValue(value, forHTTPHeaderField: key)
        }
        return req
    }
}

let databaseFetchDelegate = IDocReaderDatabaseFetchDelegate()
class IDocReaderDatabaseFetchDelegate: NSObject, RGLDocReaderDatabaseFetchDelegate {
    func onProgressChanged(_ downloadedBytes: NSNumber, totalBytes: NSNumber) {
        sendEvent(databaseProgressEvent, [
            "downloadedBytes": downloadedBytes,
            "totalBytes": totalBytes,
            "progress": totalBytes.doubleValue > 0 ? Int(downloadedBytes.doubleValue / totalBytes.doubleValue * 100) : 0,
        ])
    }
}

let actionDelegate = ICustomizationActionDelegate()
class ICustomizationActionDelegate: NSObject, DocReader.CustomizationActionDelegate {
    func onCustomButtonTapped(withTag tag: Int) {
        sendEvent(onCustomButtonTappedEvent, tag)
    }
}

let recordScanningProcessDelegate = IRecordScanningProcessDelegate()
class IRecordScanningProcessDelegate: NSObject, RecordScanningProcessDelegate {
    func didFinishRecording(toFile fileURL: URL) {
        sendEvent(videoEncoderCompletionEvent, fileURL.absoluteString)
    }
    func didFailWithError(_ error: Error) { }
}

let bluetooth = Bluetooth()
let bluetoothDelegate = IBluetoothDelegate()
var bluetoothCallback: Callback?
class IBluetoothDelegate: NSObject, RGLBluetoothDelegate {
    func didChangeConnectionState(_ bluetooth: Bluetooth, state: BluetoothConnectionState) {
        switch state {
        case .none: connectionFailed()
        case .searching: perform(#selector(connectionFailed), with: nil, afterDelay: 7)
        case .connected:
            NSObject.cancelPreviousPerformRequests(withTarget: self)
            let callback = bluetoothCallback
            bluetoothCallback = nil
            callback?(true)
        default: break
        }
    }
    @objc func connectionFailed() {
        NSObject.cancelPreviousPerformRequests(withTarget: self)
        guard let callback = bluetoothCallback else { return }
        bluetoothCallback = nil
        bluetooth.stopSearchDevices()
        bluetooth.disconnect()
        callback(false)
    }
}

var rfidReaderRequest: [String: Any] = [:]
var paCertificateCompletion: (([PKDCertificate]?) -> Void)?
var taCertificateCompletion: (([PKDCertificate]?) -> Void)?
var taSignatureCompletion: ((Data?) -> Void)?
var aaChallengeCompletion: ((String?) -> Void)?
var paceProtocolCompletion: ((RGLRFIDAccessControlPACE?) -> Void)?
var caProtocolCompletion: ((RGLRFIDAccessControlCA?) -> Void)?

let rfidDelegate = IDocReaderRFIDDelegate()
class IDocReaderRFIDDelegate: NSObject, RGLDocReaderRFIDDelegate {
    // The SDK accepts nil callback results despite its nonnull annotations.
    @objc(onRequestPACertificatesWithSerial:issuer:callback:)
    func onRequestPACertificates(withSerial serialNumber: Data, issuer: PAResourcesIssuer, callback: @escaping ([PKDCertificate]?) -> Void) {
        if rfidReaderRequest["paCertificates"] as? Bool == true {
            paCertificateCompletion = callback
            sendEvent(paCertificateCompletionEvent, ["serialNumber": serialNumber.encode(), "issuer": issuer.encode()])
        } else {
            paCertificateCompletion = nil
            callback(nil)
        }
    }
    @objc(onRequestTACertificatesWithKey:callback:)
    func onRequestTACertificates(withKey keyCAR: String, callback: @escaping ([PKDCertificate]?) -> Void) {
        if rfidReaderRequest["taCertificates"] as? Bool == true {
            taCertificateCompletion = callback
            sendEvent(taCertificateCompletionEvent, keyCAR)
        } else {
            taCertificateCompletion = nil
            callback(nil)
        }
    }
    @objc(onRequestTASignatureWithChallenge:callback:)
    func onRequestTASignature(with challenge: TAChallenge, callback: @escaping (Data?) -> Void) {
        if rfidReaderRequest["taSignature"] as? Bool == true {
            taSignatureCompletion = callback
            sendEvent(taSignatureCompletionEvent, challenge.encode())
        } else {
            taSignatureCompletion = nil
            callback(nil)
        }
    }
    func onRequestAAChallenge(challenge: String, callback: @escaping (String?) -> Void) {
        if rfidReaderRequest["aaChallenge"] as? Bool == true {
            aaChallengeCompletion = callback
            sendEvent(aaChallengeCompletionEvent, challenge)
        } else {
            aaChallengeCompletion = nil
            callback(nil)
        }
    }
    @objc(onRequestPACEProtocolWithOptions:callback:)
    func onRequestPACEProtocol(options protocols: [RGLRFIDAccessControlPACE], callback: @escaping (RGLRFIDAccessControlPACE?) -> Void) {
        if rfidReaderRequest["paceProtocol"] as? Bool == true {
            paceProtocolCompletion = callback
            sendEvent(paceProtocolCompletionEvent, protocols.map { $0.encode() })
        } else {
            paceProtocolCompletion = nil
            callback(nil)
        }
    }
    @objc(onRequestCAProtocolWithOptions:callback:)
    func onRequestCAProtocol(options protocols: [RGLRFIDAccessControlCA], callback: @escaping (RGLRFIDAccessControlCA?) -> Void) {
        if rfidReaderRequest["caProtocol"] as? Bool == true {
            caProtocolCompletion = callback
            sendEvent(caProtocolCompletionEvent, protocols.map { $0.encode() })
        } else {
            caProtocolCompletion = nil
            callback(nil)
        }
    }
    func didChipConnected() {
        sendEvent(rfidOnChipDetectedEvent)
    }
    func didReceivedError(_ errorCode: RFIDErrorCodes) {
        sendEvent(rfidOnRetryReadChipEvent, ["code": errorCode.rawValue])
    }
}
