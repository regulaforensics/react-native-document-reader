import DocumentReader

// MARK: - Config

public extension DocReader.BaseReaderConfig {
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        if let prop = it["databasePath"] as? String { self.databasePath = prop }
        if let prop = it["licenseUpdateTimeout"] as? NSNumber { self.licenseUpdateTimeout = prop }
        if let prop = it["licenseUpdate"] as? Bool { self.licenseUpdateCheck = prop }
        if let prop = it["delayedNNLoad"] as? Bool { self.isDelayedNNLoadEnabled = prop }
        return self
    }
}

public extension DocReader.Config {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        guard let license = Data.decode(it["license"]) else { return nil }
        return Self(license: license).update(it)
    }
    func encode() -> [String: Any?] {
        return [
            "license": self.licenseData.encode(),
            "databasePath": self.databasePath,
            "licenseUpdateTimeout": self.licenseUpdateTimeout,
            "licenseUpdate": self.licenseUpdateCheck,
            "delayedNNLoad": self.isDelayedNNLoadEnabled,
        ]
    }
}

extension DocReader.BleConfig {
    static func decode(_ it: [String: Any], _ bluetooth: Bluetooth) -> DocReader.BleConfig {
        return DocReader.BleConfig(bluetooth: bluetooth).update(it)
    }
}

public extension DocReader.FinalizeConfig {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.defaultParams()
        if let prop = it["rawImages"] as? Bool { result.rawImages = prop }
        if let prop = it["video"] as? Bool { result.video = prop }
        if let prop = it["rfidSession"] as? Bool { result.rfidSession = prop }
        if let prop = it["mdlSession"] as? Bool { result.mdlSession = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "rawImages": self.rawImages,
            "video": self.video,
            "rfidSession": self.rfidSession,
            "mdlSession": self.mdlSession,
        ]
    }
}

public extension DocReader.OnlineProcessingConfig {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self(mode: DocReader.OnlineProcessingMode(rawValue: it["mode"] as! Int)!)
        if let prop = it["url"] as? String { result.serviceURL = prop }
        if let prop = it["processParams"] { result.processParams = ProcessParams.decode(prop) }
        if let prop = it["imageFormat"] { result.imageFormat = DocReader.OnlineProcessingImageFormat(rawValue: prop as! Int)! }
        if let prop = it["imageCompressionQuality"] { result.imageCompressionQuality = prop as! CGFloat }
        if let prop = it["requestHeaders"] as? [String: String] {
            let delegate = IURLRequestInterceptingDelegate(prop)
            result.requestInterceptingDelegate = delegate
            objc_setAssociatedObject(result, &headersDelegateKey, delegate, .OBJC_ASSOCIATION_RETAIN_NONATOMIC)
        }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "mode": self.mode.rawValue,
            "url": self.serviceURL,
            "processParams": self.processParams?.encode(),
            "imageFormat": self.imageFormat.rawValue,
            "imageCompressionQuality": self.imageCompressionQuality,
        ]
    }
}

public extension DocReader.RecognizeConfig {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        // Multiple init variants: scenario/onlineProcessingConfig/scenario+onlineProcessingConfig
        let result: Self
        if let scenario = it["scenario"] as? String {
            result = Self(scenario: scenario)
            if let prop = it["onlineProcessingConfig"] { result.onlineProcessingConfig = DocReader.OnlineProcessingConfig.decode(prop) }
        } else {
            result = Self(onlineProcessingConfig: DocReader.OnlineProcessingConfig.decode(it["onlineProcessingConfig"])!)
        }
        if let prop = it["livePortrait"] { result.livePortrait = UIImage.decode(prop) }
        if let prop = it["extPortrait"] { result.extPortrait = UIImage.decode(prop) }
        if let prop = it["oneShotIdentification"] as? Bool { result.oneShotIdentification = prop }
        if let prop = it["dtc"] { result.dtc = Data.decode(prop) }
        if let prop = it["image"] { result.image = UIImage.decode(prop) }
        if let prop = it["data"] { result.imageData = Data.decode(prop) }
        if let prop = it["images"] { result.images = (prop as? [Any])?.compactMap(UIImage.decode) }
        if let prop = it["dataList"] { result.imageDataArray = (prop as? [Any])?.compactMap(Data.decode) }
        if let prop = it["imageInputData"] { result.imageInputs = (prop as? [Any])?.compactMap(DocReader.ImageInput.decode) }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "scenario": self.scenario,
            "onlineProcessingConfig": self.onlineProcessingConfig?.encode(),
            "livePortrait": self.livePortrait?.encode(),
            "extPortrait": self.extPortrait?.encode(),
            "oneShotIdentification": self.oneShotIdentification,
            "dtc": self.dtc?.encode(),
            "image": self.image?.encode(),
            "data": self.imageData?.encode(),
            "images": self.images?.map { $0.encode() },
            "dataList": self.imageDataArray?.map { $0.encode() },
            "imageInputData": self.imageInputs?.map { $0.encode() },
        ]
    }
}

public extension DocReader.ImageInput {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        guard let image = UIImage.decode(it["image"]) else { return nil }
        return Self(image: image,
                    light: GraphicFieldLight(rawValue: it["light"] as? Int ?? 6)!,
                    pageIndex: it["pageIndex"] as? Int ?? 0)
    }
    func encode() -> [String: Any?] {
        return [
            "pageIndex": self.pageIndex,
            "light": self.lightType.rawValue,
            "image": self.image.encode(),
        ]
    }
}

public extension DocReader.ScannerConfig {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        // Multiple init variants: scenario/onlineProcessingConfig/scenario+onlineProcessingConfig
        let result: Self
        if let scenario = it["scenario"] as? String {
            result = Self(scenario: scenario)
            if let prop = it["onlineProcessingConfig"] { result.onlineProcessingConfig = DocReader.OnlineProcessingConfig.decode(prop) }
        } else {
            result = Self(onlineProcessingConfig: DocReader.OnlineProcessingConfig.decode(it["onlineProcessingConfig"])!)
        }
        if let prop = it["livePortrait"] { result.livePortrait = UIImage.decode(prop) }
        if let prop = it["extPortrait"] { result.extPortrait = UIImage.decode(prop) }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "scenario": self.scenario,
            "onlineProcessingConfig": self.onlineProcessingConfig?.encode(),
            "livePortrait": self.livePortrait?.encode(),
            "extPortrait": self.extPortrait?.encode(),
        ]
    }
}

// MARK: - Info

public extension NSError {
    static func decode(_ it: Any?) -> NSError? {
        guard let it = it as? [String: Any] else { return nil }
        return NSError(domain: RGLDocumentReaderDomain, code: it["code"] as! Int,
                       userInfo: [NSLocalizedDescriptionKey: it["message"] as! String])
    }
}

public extension Scenario {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self()
        result.setValue(it["name"] as? String, forKey: "identifier")
        result.setValue(it["frameKWHLandscape"] as? Double, forKey: "frameKWHLandscape")
        result.setValue(it["frameKWHPortrait"] as? Double, forKey: "frameKWHPortrait")
        result.setValue(it["frameKWHDoublePageSpreadPortrait"] as? Double, forKey: "frameKWHDoublePageSpreadPortrait")
        result.setValue(it["frameKWHDoublePageSpreadLandscape"] as? Double, forKey: "frameKWHDoublePageSpreadLandscape")
        result.setValue(it["description"] as? String, forKey: "scenarioDescription")
        result.setValue(it["faceExt"] as? Bool, forKey: "faceExt")
        result.setValue(it["multiPageOff"] as? Bool, forKey: "multiPageOff")
        result.setValue(it["seriesProcessMode"] as? Bool, forKey: "seriesProcessMode")
        result.setValue(it["caption"] as? String, forKey: "caption")
        result.setValue(it["uvTorch"] as? Bool, forKey: "uvTorch")
        result.setValue(it["frameOrientation"] as Any?, forKey: "frameOrientation")
        result.setValue(it["manualCrop"] as? Bool, forKey: "manualCrop")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "name": self.identifier,
            "frameKWHLandscape": self.frameKWHLandscape,
            "frameKWHPortrait": self.frameKWHPortrait,
            "frameKWHDoublePageSpreadPortrait": self.frameKWHDoublePageSpreadPortrait,
            "frameKWHDoublePageSpreadLandscape": self.frameKWHDoublePageSpreadLandscape,
            "description": self.scenarioDescription,
            "faceExt": self.faceExt,
            "multiPageOff": self.multiPageOff,
            "seriesProcessMode": self.seriesProcessMode,
            "caption": self.caption,
            "uvTorch": self.uvTorch,
            "frameOrientation": self.frameOrientation.rawValue,
            "manualCrop": self.manualCrop,
        ]
    }
}

public extension DocReaderVersion {
    func encode() -> [String: Any?] {
        return [
            "api": self.api,
            "core": self.core,
            "coreMode": self.coreMode,
            "database": self.database.encode(),
        ]
    }
}

public extension DocReaderDocumentsDatabase {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["databaseID"] as? String, forKey: "databaseID")
        result.setValue(it["version"] as? String, forKey: "version")
        result.setValue(it["date"] as? String, forKey: "date")
        result.setValue(it["databaseDescription"] as? String, forKey: "databaseDescription")
        result.setValue(it["countriesNumber"] as? Int, forKey: "countriesNumber")
        result.setValue(it["documentsNumber"] as? Int, forKey: "documentsNumber")
        result.setValue(it["size"] as? NSNumber, forKey: "size")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "databaseID": self.databaseID,
            "version": self.version,
            "date": self.date,
            "databaseDescription": self.databaseDescription,
            "countriesNumber": self.countriesNumber,
            "documentsNumber": self.documentsNumber,
            "size": self.size,
        ]
    }
}

public extension License {
    func encode() -> [String: Any?] {
        let formatter = DateFormatter()
        formatter.dateStyle = .short
        formatter.timeStyle = .none
        return [
            "expiryDate": self.expiryDate.map { formatter.string(from: $0) },
            "countryFilter": self.countryFilter,
            "isRfidAvailable": self.isRfidAvailable,
        ]
    }
}

// MARK: - MDL

public extension DocReader.DataRetrieval {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self(deviceRetrieval: eMDLDeviceRetrieval(rawValue: it["deviceRetrieval"] as! Int)!)
        if let prop = it["docRequestPreset"] as? Int {
            result.setDocRequestPreset(eMDLDocRequestPreset(rawValue: prop)!, intentToRetain: eMDLIntentToRetain(rawValue: it["intentToRetain"] as! Int)!)
        }
        result.requests = (it["requests"] as? [Any])?.compactMap(DocReader.DocumentRequestMDL.decode) ?? []
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "deviceRetrieval": self.value(forKey: "deviceRetrieval"),
            "docRequestPreset": self.value(forKey: "docRequestPreset"),
            "intentToRetain": self.value(forKey: "intentToRetain"),
            "requests": self.requests.map { $0.encode() },
        ]
    }
}

public extension DocReader.DeviceEngagement {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self()
        if let prop = it["deviceRetrievalMethods"] { result.deviceRetrievalMethods = (prop as? [Any])?.compactMap(DocReader.DeviceRetrievalMethod.decode) }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "deviceRetrievalMethods": self.deviceRetrievalMethods?.map { $0.encode() },
        ]
    }
}

public extension DocReader.DeviceRetrievalMethod {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        if let prop = it["type"] { result.type = eMDLDeviceRetrieval(rawValue: prop as! Int)! }
        if let prop = it["version"] as? NSNumber { result.version = prop }
        if let prop = it["cmdMaxLength"] as? NSNumber { result.cmdMaxLength = prop }
        if let prop = it["respMaxLength"] as? NSNumber { result.respMaxLength = prop }
        if let prop = it["clientModeSupport"] as? NSNumber { result.clientModeSupport = prop }
        if let prop = it["clientModeUUID"] as? String { result.clientModeUUID = prop }
        if let prop = it["serverModeSupport"] as? NSNumber { result.serverModeSupport = prop }
        if let prop = it["serverModeUUID"] as? String { result.serverModeUUID = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "type": self.type.rawValue,
            "version": self.version,
            "cmdMaxLength": self.cmdMaxLength,
            "respMaxLength": self.respMaxLength,
            "clientModeSupport": self.clientModeSupport,
            "clientModeUUID": self.clientModeUUID,
            "serverModeSupport": self.serverModeSupport,
            "serverModeUUID": self.serverModeUUID,
        ]
    }
}

public extension DocReader.DocumentRequestMDL {
    static func decode(_ it: Any?) -> DocReader.DocumentRequestMDL? {
        guard let it = it as? [String: Any] else { return nil }
        // Multiple init variants: mDL/generic document
        let docType = it["docType"] as! String
        if docType == "org.iso.18013.5.1.mDL" { return DocReader.DocumentRequest18013MDL.decode2(it) }
        let result = DocReader.DocumentRequestMDL(docType: docType)
        result.setValue((it["namespaces"] as? [Any])?.compactMap(DocReader.NameSpaceMDL.decode) ?? [], forKey: "nameSpaces")
        return result
    }
    func encode() -> [String: Any?] {
        if let it = self as? DocReader.DocumentRequest18013MDL { return it.encode2() }
        return [
            "docType": self.value(forKey: "docType"),
            "namespaces": (self.value(forKey: "nameSpaces") as? [DocReader.NameSpaceMDL])?.map { $0.encode() },
        ]
    }
}

public extension DocReader.DocumentRequest18013MDL {
    static func decode2(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self()
        if let prop = it["docType"] { result.setValue(prop, forKey: "docType") }
        if let prop = it["namespaces"] as? [Any] {
            result.setValue(prop.compactMap(DocReader.NameSpaceMDL.decode), forKey: "nameSpaces")
        }
        if let prop = it["familyName"] { result.familyName = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["givenName"] { result.givenName = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["birthDate"] { result.birthDate = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["issueDate"] { result.issueDate = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["expiryDate"] { result.expiryDate = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["issuingCountry"] { result.issuingCountry = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["issuingAuthority"] { result.issuingAuthority = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["documentNumber"] { result.documentNumber = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["portrait"] { result.portrait = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["drivingPrivileges"] { result.drivingPrivileges = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["unDistinguishingSign"] { result.unDistinguishingSign = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["administrativeNumber"] { result.administrativeNumber = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["sex"] { result.sex = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["height"] { result.height = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["weight"] { result.weight = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["eyeColour"] { result.eyeColour = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["hairColour"] { result.hairColour = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["birthPlace"] { result.birthPlace = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["residentAddress"] { result.residentAddress = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["portraitCaptureDate"] { result.portraitCaptureDate = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["ageInYears"] { result.ageInYears = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["ageBirthYear"] { result.ageBirthYear = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["ageOver18"] { result.ageOver18 = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["issuingJurisdiction"] { result.issuingJurisdiction = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["nationality"] { result.nationality = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["residentCity"] { result.residentCity = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["residentState"] { result.residentState = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["residentPostalCode"] { result.residentPostalCode = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["residentCountry"] { result.residentCountry = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["biometricTemplateFace"] { result.biometricTemplateFace = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["biometricTemplateIris"] { result.biometricTemplateIris = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["biometricTemplateFinger"] { result.biometricTemplateFinger = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["biometricTemplateSignatureSign"] { result.biometricTemplateSignatureSign = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["familyNameNationalCharacter"] { result.familyNameNationalCharacter = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["givenNameNationalCharacter"] { result.givenNameNationalCharacter = eMDLIntentToRetain(rawValue: prop as! Int)! }
        if let prop = it["signatureUsualMark"] { result.signatureUsualMark = eMDLIntentToRetain(rawValue: prop as! Int)! }
        return result
    }
    func encode2() -> [String: Any?] {
        return [
            "docType": self.value(forKey: "docType"),
            "namespaces": (self.value(forKey: "nameSpaces") as? [DocReader.NameSpaceMDL])?.map { $0.encode() },
            "familyName": self.familyName.encode(),
            "givenName": self.givenName.encode(),
            "birthDate": self.birthDate.encode(),
            "issueDate": self.issueDate.encode(),
            "expiryDate": self.expiryDate.encode(),
            "issuingCountry": self.issuingCountry.encode(),
            "issuingAuthority": self.issuingAuthority.encode(),
            "documentNumber": self.documentNumber.encode(),
            "portrait": self.portrait.encode(),
            "drivingPrivileges": self.drivingPrivileges.encode(),
            "unDistinguishingSign": self.unDistinguishingSign.encode(),
            "administrativeNumber": self.administrativeNumber.encode(),
            "sex": self.sex.encode(),
            "height": self.height.encode(),
            "weight": self.weight.encode(),
            "eyeColour": self.eyeColour.encode(),
            "hairColour": self.hairColour.encode(),
            "birthPlace": self.birthPlace.encode(),
            "residentAddress": self.residentAddress.encode(),
            "portraitCaptureDate": self.portraitCaptureDate.encode(),
            "ageInYears": self.ageInYears.encode(),
            "ageBirthYear": self.ageBirthYear.encode(),
            "ageOver18": self.ageOver18.encode(),
            "issuingJurisdiction": self.issuingJurisdiction.encode(),
            "nationality": self.nationality.encode(),
            "residentCity": self.residentCity.encode(),
            "residentState": self.residentState.encode(),
            "residentPostalCode": self.residentPostalCode.encode(),
            "residentCountry": self.residentCountry.encode(),
            "biometricTemplateFace": self.biometricTemplateFace.encode(),
            "biometricTemplateIris": self.biometricTemplateIris.encode(),
            "biometricTemplateFinger": self.biometricTemplateFinger.encode(),
            "biometricTemplateSignatureSign": self.biometricTemplateSignatureSign.encode(),
            "familyNameNationalCharacter": self.familyNameNationalCharacter.encode(),
            "givenNameNationalCharacter": self.givenNameNationalCharacter.encode(),
            "signatureUsualMark": self.signatureUsualMark.encode(),
        ]
    }
}

public extension DocReader.NameSpaceMDL {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self(name: it["name"] as! String)
        for (key, value) in it["map"] as! [String: Int] {
            result.addField(key, intentToRetain: eMDLIntentToRetain(rawValue: value)!)
        }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "name": self.name,
            "map": self.value(forKey: "jsonDict"),
        ]
    }
}

// MARK: - Params

public extension RGLBackendProcessingConfig {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self()
        if let prop = it["url"] as? String { result.url = prop }
        if let prop = it["httpHeaders"] { result.httpHeaders = prop as? [AnyHashable: Any] }
        if let prop = it["rfidServerSideChipVerification"] as? NSNumber { result.rfidServerSideChipVerification = prop }
        if let prop = it["mdlVerification"] as? NSNumber { result.mDLVerification = prop }
        if let prop = it["timeoutConnection"] as? NSNumber { result.timeoutConnection = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "url": self.url,
            "httpHeaders": self.httpHeaders,
            "rfidServerSideChipVerification": self.rfidServerSideChipVerification,
            "mdlVerification": self.mDLVerification,
            "timeoutConnection": self.timeoutConnection,
        ]
    }
}

public extension DocReader.Bsi {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self()
        if let prop = it["generateResult"] as? NSNumber { result.generateResult = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "generateResult": self.generateResult,
        ]
    }
}

public extension FaceAPIParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.default()
        if let prop = it["url"] as? String { result.url = prop }
        if let prop = it["mode"] as? String { result.mode = prop }
        if let prop = it["searchParams"] { result.searchParams = RGLFaceAPISearchParams.decode(prop) }
        if let prop = it["threshold"] as? NSNumber { result.threshold = prop }
        if let prop = it["serviceTimeout"] as? NSNumber { result.serviceTimeout = prop }
        if let prop = it["proxy"] as? String { result.proxy = prop }
        if let prop = it["proxyPassword"] as? String { result.proxyPassword = prop }
        if let prop = it["proxyType"] as? NSNumber { result.proxyType = prop }
        if let prop = it["livenessTransactionId"] as? String { result.livenessTransactionId = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "url": self.url,
            "mode": self.mode,
            "searchParams": self.searchParams?.encode(),
            "threshold": self.threshold,
            "serviceTimeout": self.serviceTimeout,
            "proxy": self.proxy,
            "proxyPassword": self.proxyPassword,
            "proxyType": self.proxyType,
            "livenessTransactionId": self.livenessTransactionId,
        ]
    }
}

public extension RGLFaceAPISearchParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self()
        if let prop = it["limit"] as? NSNumber { result.limit = prop }
        if let prop = it["threshold"] as? NSNumber { result.threshold = prop }
        if let prop = it["groupIds"] as? [String] { result.groupIDs = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "limit": self.limit,
            "threshold": self.threshold,
            "groupIds": self.groupIDs,
        ]
    }
}

public extension ImageQA.GlaresCheckParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self()
        if let prop = it["imgMarginPart"] as? NSNumber { result.imgMarginPart = prop }
        if let prop = it["maxGlaringPart"] as? NSNumber { result.maxGlaringPart = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "imgMarginPart": self.imgMarginPart,
            "maxGlaringPart": self.maxGlaringPart,
        ]
    }
}

public extension ImageQA.OcclusionCheckParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self()
        if let prop = it["maxOcclusionPart"] as? NSNumber { result.maxOcclusionPart = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "maxOcclusionPart": self.maxOcclusionPart,
        ]
    }
}

public extension RFIDParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self()
        if let prop = it["paIgnoreNotificationCodes"] as? [NSNumber] { result.paIgnoreNotificationCodes = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "paIgnoreNotificationCodes": self.paIgnoreNotificationCodes,
        ]
    }
}

// MARK: - Results

public extension DocumentReaderDocumentType {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["name"] as? String, forKey: "name")
        result.setValue(it["documentID"] as? Int, forKey: "documentID")
        result.setValue(it["ICAOCode"] as? String, forKey: "ICAOCode")
        result.setValue(it["FDSID"] as? [NSNumber], forKey: "FDSID")
        result.setValue(it["dType"] as Any?, forKey: "dType")
        result.setValue(it["dFormat"] as Any?, forKey: "dFormat")
        result.setValue(it["dMRZ"] as? Bool, forKey: "dMRZ")
        result.setValue(it["isDeprecated"] as? Bool, forKey: "isDeprecated")
        result.setValue(it["dDescription"] as? String, forKey: "dDescription")
        result.setValue(it["dYear"] as? String, forKey: "dYear")
        result.setValue(it["dCountryName"] as? String, forKey: "dCountryName")
        result.setValue(it["pageIndex"] as? Int, forKey: "pageIndex")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "name": self.name,
            "documentID": self.documentID,
            "ICAOCode": self.icaoCode,
            "FDSID": self.fdsid,
            "dType": self.dType.rawValue,
            "dFormat": self.dFormat.rawValue,
            "dMRZ": self.dMRZ,
            "isDeprecated": self.isDeprecated,
            "dDescription": self.dDescription,
            "dYear": self.dYear,
            "dCountryName": self.dCountryName,
            "pageIndex": self.pageIndex,
        ]
    }
}

public extension Position {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(NSValue(cgSize: CGSize(width: it["width"] as! CGFloat, height: it["height"] as! CGFloat)), forKey: "size")
        result.setValue(it["angle"] as? Double, forKey: "angle")
        result.setValue(CGPoint.decode(it["center"]), forKey: "center")
        result.setValue(CGPoint.decode(it["leftTop"]), forKey: "leftTop")
        result.setValue(CGPoint.decode(it["leftBottom"]), forKey: "leftBottom")
        result.setValue(CGPoint.decode(it["rightTop"]), forKey: "rightTop")
        result.setValue(CGPoint.decode(it["rightBottom"]), forKey: "rightBottom")
        result.setValue(it["perspectiveTr"] as? Double, forKey: "perspectiveTr")
        result.setValue(it["objArea"] as? Double, forKey: "objArea")
        result.setValue(it["objIntAngleDev"] as? Double, forKey: "objIntAngleDev")
        result.setValue(it["resultStatus"] as Any?, forKey: "resultStatus")
        result.setValue(it["docFormat"] as Any?, forKey: "docFormat")
        result.setValue(it["pageIndex"] as? Int, forKey: "pageIndex")
        result.setValue(it["dpi"] as? Int, forKey: "dpi")
        result.setValue(it["inverse"] as? Int, forKey: "inverse")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "width": self.size.width,
            "height": self.size.height,
            "angle": self.angle,
            "center": self.center.encode(),
            "leftTop": self.leftTop.encode(),
            "leftBottom": self.leftBottom.encode(),
            "rightTop": self.rightTop.encode(),
            "rightBottom": self.rightBottom.encode(),
            "perspectiveTr": self.perspectiveTr,
            "objArea": self.objArea,
            "objIntAngleDev": self.objIntAngleDev,
            "resultStatus": self.resultStatus.rawValue,
            "docFormat": self.docFormat.rawValue,
            "pageIndex": self.pageIndex,
            "dpi": self.dpi,
            "inverse": self.inverse,
        ]
    }
}

public extension DocumentReaderResults {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue((it["documentType"] as? [Any])?.compactMap(DocumentReaderDocumentType.decode), forKey: "documentType")
        result.setValue(DocumentReaderTextResult.decode(it["textResult"]), forKey: "textResult")
        result.setValue(DocumentReaderGraphicResult.decode(it["graphicResult"]), forKey: "graphicResult")
        result.setValue((it["documentPosition"] as? [Any])?.compactMap(DocumentPosition.decode), forKey: "documentPosition")
        result.setValue((it["barcodePosition"] as? [Any])?.compactMap(BarcodePosition.decode), forKey: "barcodePosition")
        result.setValue((it["mrzPosition"] as? [Any])?.compactMap(MrzPosition.decode), forKey: "mrzPosition")
        result.setValue((it["imageQuality"] as? [Any])?.compactMap(ImageQualityGroup.decode), forKey: "imageQualityGroup")
        result.setValue(DocumentReaderAuthenticityResult.decode(it["authenticityResult"]), forKey: "authenticityResults")
        result.setValue(RFIDSessionData.decode(it["rfidSessionData"]), forKey: "rfidSessionData")
        result.setValue(it["chipPage"] as? Int, forKey: "chipPage")
        result.setValue(DocumentReaderBarcodeResult.decode(it["barcodeResult"]), forKey: "barcodeResult")
        result.setValue(it["processingFinishedStatus"] as Any?, forKey: "processingFinishedStatus")
        result.setValue(it["morePagesAvailable"] as? Int, forKey: "morePagesAvailable")
        result.setValue(it["elapsedTime"] as? Int, forKey: "elapsedTime")
        result.setValue(it["elapsedTimeRFID"] as? Int, forKey: "elapsedTimeRFID")
        result.setValue(it["rawResult"] as? String, forKey: "rawResult")
        result.setValue(it["bsiTr03135Results"] as? String, forKey: "bsiTr03135Results")
        result.setValue(DocumentReaderResults.Status.decode(it["status"]), forKey: "status")
        result.setValue(VDSNCData.decode(it["vdsncData"]), forKey: "vdsncData")
        result.setValue(VDSData.decode(it["vdsData"]), forKey: "vdsData")
        result.setValue(Data.decode(it["dtcData"]), forKey: "dtcData")
        result.setValue(RGLTransactionInfo.decode(it["transactionInfo"]), forKey: "transactionInfo")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "documentType": self.documentType?.map { $0.encode() },
            "textResult": self.textResult.encode(),
            "graphicResult": self.graphicResult.encode(),
            "documentPosition": self.documentPosition?.map { $0.encode() },
            "barcodePosition": self.barcodePosition?.map { $0.encode() },
            "mrzPosition": self.mrzPosition?.map { $0.encode() },
            "imageQuality": self.imageQualityGroup?.map { $0.encode() },
            "authenticityResult": self.authenticityResults?.encode(),
            "rfidSessionData": self.rfidSessionData?.encode(),
            "chipPage": self.chipPage,
            "barcodeResult": self.barcodeResult.encode(),
            "processingFinishedStatus": self.processingFinishedStatus.rawValue,
            "morePagesAvailable": self.morePagesAvailable,
            "elapsedTime": self.elapsedTime,
            "elapsedTimeRFID": self.elapsedTimeRFID,
            "rawResult": self.rawResult,
            "bsiTr03135Results": self.bsiTr03135Results,
            "status": self.status.encode(),
            "vdsncData": self.vdsncData?.encode(),
            "vdsData": self.vdsData?.encode(),
            "dtcData": self.dtcData?.encode(),
            "transactionInfo": self.transactionInfo?.encode(),
        ]
    }
}

public extension RGLTransactionInfo {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["transactionId"] as? String, forKey: "transactionId")
        result.setValue(it["tag"] as? String, forKey: "tag")
        result.setValue(it["sessionLogFolder"] as? String, forKey: "sessionLogFolder")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "transactionId": self.transactionId,
            "tag": self.tag,
            "sessionLogFolder": self.sessionLogFolder,
        ]
    }
}

// MARK: - Results / Authenticity

public extension AuthenticityCheck {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["type"] as Any?, forKey: "type")
        result.setValue(it["status"] as Any?, forKey: "status")
        result.setValue((it["elements"] as? [Any])?.compactMap(AuthenticityElement.decode), forKey: "elements")
        result.setValue(it["pageIndex"] as? Int, forKey: "pageIndex")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "type": self.type.rawValue,
            "typeName": self.typeName,
            "status": self.status.rawValue,
            "elements": self.elements?.map { $0.encode() },
            "pageIndex": self.pageIndex,
        ]
    }
}

public extension AuthenticityElement {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["status"] as Any?, forKey: "status")
        result.setValue(it["elementType"] as Any?, forKey: "elementType")
        result.setValue(it["elementDiagnose"] as Any?, forKey: "elementDiagnose")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "status": self.status.rawValue,
            "elementType": self.elementType.rawValue,
            "elementTypeName": self.elementTypeName,
            "elementDiagnose": self.elementDiagnose.rawValue,
            "elementDiagnoseName": self.elementDiagnoseName,
        ]
    }
}

public extension DocumentReaderAuthenticityResult {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["status"] as Any?, forKey: "security")
        result.setValue((it["checks"] as? [Any])?.compactMap(AuthenticityCheck.decode), forKey: "checks")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "status": self.status.rawValue,
            "checks": self.checks?.map { $0.encode() },
        ]
    }
}

// MARK: - Results / Barcode

public extension DocumentReaderBarcodeField {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["barcodeType"] as Any?, forKey: "barcodeType")
        result.setValue(it["status"] as Any?, forKey: "status")
        result.setValue(PDF417Info.decode(it["pdf417Info"]), forKey: "pdf417Info")
        result.setValue(Data.decode(it["data"]), forKey: "data")
        result.setValue(it["pageIndex"] as? Int, forKey: "pageIndex")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "barcodeType": self.barcodeType.rawValue,
            "status": self.status.rawValue,
            "pdf417Info": self.pdf417Info?.encode(),
            "data": self.data.encode(),
            "pageIndex": self.pageIndex,
        ]
    }
}

public extension DocumentReaderBarcodeResult {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue((it["fields"] as? [Any])?.compactMap(DocumentReaderBarcodeField.decode), forKey: "fields")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "fields": self.fields?.map { $0.encode() },
        ]
    }
}

public extension PDF417Info {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["errorLevel"] as? Int, forKey: "errorLevel")
        result.setValue(it["columns"] as? Int, forKey: "columns")
        result.setValue(it["rows"] as? Int, forKey: "rows")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "errorLevel": self.errorLevel,
            "columns": self.columns,
            "rows": self.rows,
        ]
    }
}

// MARK: - Results / Image Quality

public extension ImageQuality {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(ImageQualityCheckType.decode(it["type"]).rawValue, forKey: "type")
        result.setValue(it["result"] as Any?, forKey: "result")
        result.setValue(it["featureType"] as Any?, forKey: "featureType")
        result.setValue((it["boundRects"] as? [Any])?.map { NSValue(cgRect: CGRect.decode($0)) }, forKey: "boundRects")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "type": ImageQualityCheckType(rawValue: self.type as String).encode(),
            "result": self.result.rawValue,
            "featureType": self.featureType.rawValue,
            "boundRects": self.boundRects.compactMap { $0.cgRectValue.encode() },
        ]
    }
}

public extension ImageQualityGroup {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["count"] as? Int, forKey: "count")
        result.setValue(it["result"] as Any?, forKey: "result")
        result.setValue((it["imageQualityList"] as? [Any])?.compactMap(ImageQuality.decode), forKey: "imageQualityList")
        result.setValue(it["pageIndex"] as? Int, forKey: "pageIndex")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "count": self.count,
            "result": self.result.rawValue,
            "imageQualityList": self.imageQualityList.map { $0.encode() },
            "pageIndex": self.pageIndex,
        ]
    }
}

// MARK: - Results / RFID

public extension AccessControlProcedureType {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["activeOptionIdx"] as? Int, forKey: "activeOptionIdx")
        result.setValue(it["notifications"] as? [NSNumber], forKey: "notifications")
        result.setValue(it["status"] as Any?, forKey: "status")
        result.setValue(it["type"] as Any?, forKey: "type")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "activeOptionIdx": self.activeOptionIdx,
            "notifications": self.notifications,
            "status": self.status.rawValue,
            "type": self.type.rawValue,
        ]
    }
}

public extension Application {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["applicationID"] as? String, forKey: "applicationID")
        result.setValue(it["dataHashAlgorithm"] as? String, forKey: "dataHashAlgorithm")
        result.setValue((it["files"] as? [Any])?.compactMap(File.decode), forKey: "files")
        result.setValue(it["type"] as Any?, forKey: "type")
        result.setValue(it["status"] as Any?, forKey: "status")
        result.setValue(it["unicodeVersion"] as? String, forKey: "unicodeVersion")
        result.setValue(it["version"] as? String, forKey: "version")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "applicationID": self.applicationID,
            "dataHashAlgorithm": self.dataHashAlgorithm,
            "files": self.files.map { $0.encode() },
            "type": self.type.rawValue,
            "status": self.status.rawValue,
            "unicodeVersion": self.unicodeVersion,
            "version": self.version,
        ]
    }
}

public extension Attribute {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["type"] as? String, forKey: "type")
        result.setValue(RFIDValue.decode(it["value"]), forKey: "value")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "type": self.type,
            "value": self.value.encode(),
        ]
    }
}

public extension Authority {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue((it["attributes"] as? [Any])?.compactMap(Attribute.decode), forKey: "attributes")
        result.setValue(it["data"] as? String, forKey: "data")
        result.setValue(RFIDValue.decode(it["friendlyName"]), forKey: "friendlyName")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "attributes": self.attributes.map { $0.encode() },
            "data": self.data,
            "friendlyName": self.friendlyName.encode(),
        ]
    }
}

public extension CardProperties {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["aTQA"] as? Int, forKey: "aTQA")
        result.setValue(it["aTQB"] as? String, forKey: "aTQB")
        result.setValue(it["aTR"] as? String, forKey: "aTR")
        result.setValue(it["baudrate1"] as? String, forKey: "baudrate1")
        result.setValue(it["baudrate2"] as? String, forKey: "baudrate2")
        result.setValue(it["bitRateR"] as? Int, forKey: "bitRateR")
        result.setValue(it["bitRateS"] as? Int, forKey: "bitRateS")
        result.setValue(it["chipTypeA"] as? Int, forKey: "chipTypeA")
        result.setValue(it["mifareMemory"] as? Int, forKey: "mifareMemory")
        result.setValue(it["rfidType"] as? Int, forKey: "rfidType")
        result.setValue(it["sAK"] as? Int, forKey: "sAK")
        result.setValue(it["support4"] as? Bool, forKey: "support4")
        result.setValue(it["supportMifare"] as? Bool, forKey: "supportMifare")
        result.setValue(it["uID"] as? String, forKey: "uID")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "aTQA": self.aTQA,
            "aTQB": self.aTQB,
            "aTR": self.aTR,
            "baudrate1": self.baudrate1,
            "baudrate2": self.baudrate2,
            "bitRateR": self.bitRateR,
            "bitRateS": self.bitRateS,
            "chipTypeA": self.chipTypeA,
            "mifareMemory": self.mifareMemory,
            "rfidType": self.rfidType,
            "sAK": self.sAK,
            "support4": self.support4,
            "supportMifare": self.supportMifare,
            "uID": self.uID,
        ]
    }
}

public extension CertificateChain {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue((it["extensions"] as? [Any])?.compactMap(Extension.decode), forKey: "extensions")
        result.setValue(RFIDValue.decode(it["fileName"]), forKey: "fileName")
        result.setValue(Authority.decode(it["issuer"]), forKey: "issuer")
        result.setValue(it["notifications"] as? [NSNumber], forKey: "notifications")
        result.setValue(it["origin"] as? Int, forKey: "origin")
        result.setValue(it["paStatus"] as? Double, forKey: "paStatus")
        result.setValue(it["serialNumber"] as? String, forKey: "serialNumber")
        result.setValue(it["signatureAlgorithm"] as? String, forKey: "signatureAlgorithm")
        result.setValue(Authority.decode(it["subject"]), forKey: "subject")
        result.setValue(it["subjectPKAlgorithm"] as? String, forKey: "subjectPKAlgorithm")
        result.setValue(it["type"] as Any?, forKey: "type")
        result.setValue(Validity.decode(it["validity"]), forKey: "validity")
        result.setValue(it["version"] as? Int, forKey: "version")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "extensions": self.extensions.map { $0.encode() },
            "fileName": self.fileName.encode(),
            "issuer": self.issuer.encode(),
            "notifications": self.notifications,
            "origin": self.origin,
            "paStatus": self.paStatus,
            "serialNumber": self.serialNumber,
            "signatureAlgorithm": self.signatureAlgorithm,
            "subject": self.subject.encode(),
            "subjectPKAlgorithm": self.subjectPKAlgorithm,
            "type": self.type.rawValue,
            "validity": self.validity.encode(),
            "version": self.version,
        ]
    }
}

public extension CertificateData {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["data"] as? String, forKey: "data")
        result.setValue(it["length"] as? Int, forKey: "length")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "data": self.data,
            "length": self.length,
        ]
    }
}

public extension DataField {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["data"] as? String, forKey: "data")
        result.setValue(it["fieldType"] as? Int, forKey: "fieldType")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "data": self.data,
            "fieldType": self.fieldType,
        ]
    }
}

public extension Extension {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["data"] as? String, forKey: "data")
        result.setValue(it["type"] as? String, forKey: "type")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "data": self.data,
            "type": self.type,
        ]
    }
}

public extension File {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(FileData.decode(it["fileData"]), forKey: "fileData")
        result.setValue(it["fileID"] as? String, forKey: "fileID")
        result.setValue(it["notifications"] as? [NSNumber], forKey: "notifications")
        result.setValue(it["pAStatus"] as Any?, forKey: "pAStatus")
        result.setValue(it["readingStatus"] as Any?, forKey: "readingStatus")
        result.setValue(it["readingTime"] as? Int, forKey: "readingTime")
        result.setValue(it["type"] as Any?, forKey: "type")
        result.setValue(it["typeName"] as? String, forKey: "typeName")
        result.setValue(it["docFieldsText"] as? [NSNumber], forKey: "docFieldsText")
        result.setValue(it["docFieldsGraphics"] as? [NSNumber], forKey: "docFieldsGraphics")
        result.setValue(it["docFieldsOriginals"] as? [NSNumber], forKey: "docFieldsOriginals")
        result.setValue(SecurityObjectCertificates.decode(it["certificates"]), forKey: "certificates")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "fileData": self.fileData.encode(),
            "fileID": self.fileID,
            "notifications": self.notifications,
            "pAStatus": self.pAStatus.rawValue,
            "readingStatus": self.readingStatus.rawValue,
            "readingTime": self.readingTime,
            "type": self.type.rawValue,
            "typeName": self.typeName,
            "docFieldsText": self.docFieldsText,
            "docFieldsGraphics": self.docFieldsGraphics,
            "docFieldsOriginals": self.docFieldsOriginals,
            "certificates": self.certificates.encode(),
        ]
    }
}

public extension FileData {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["data"] as? String, forKey: "data")
        result.setValue(it["length"] as? Int, forKey: "length")
        result.setValue(it["status"] as? Double, forKey: "status")
        result.setValue(it["type"] as? Int, forKey: "type")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "data": self.data,
            "length": self.length,
            "status": self.status,
            "type": self.type,
        ]
    }
}

public extension RFIDSessionData {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue((it["accessControls"] as? [Any])?.compactMap(AccessControlProcedureType.decode), forKey: "accessControls")
        result.setValue((it["applications"] as? [Any])?.compactMap(Application.decode), forKey: "applications")
        result.setValue((it["securityObjects"] as? [Any])?.compactMap(SecurityObject.decode), forKey: "securityObjects")
        result.setValue(CardProperties.decode(it["cardProperties"]), forKey: "cardProperties")
        result.setValue(it["totalBytesReceived"] as? Int, forKey: "totalBytesReceived")
        result.setValue(it["totalBytesSent"] as? Int, forKey: "totalBytesSent")
        result.setValue(it["status"] as Any?, forKey: "status")
        result.setValue(it["extLeSupport"] as Any?, forKey: "extLeSupport")
        result.setValue(it["processTime"] as? Double, forKey: "processTime")
        result.setValue(it["dataGroups"] as? [NSNumber], forKey: "dataGroups")
        result.setValue((it["dataFields"] as? [Any])?.compactMap(DataField.decode), forKey: "dataFields")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "accessControls": self.accessControls.map { $0.encode() },
            "applications": self.applications.map { $0.encode() },
            "securityObjects": self.securityObjects.map { $0.encode() },
            "cardProperties": self.cardProperties.encode(),
            "totalBytesReceived": self.totalBytesReceived,
            "totalBytesSent": self.totalBytesSent,
            "status": self.status.rawValue,
            "extLeSupport": self.extLeSupport.rawValue,
            "processTime": self.processTime,
            "dataGroups": self.dataGroups,
            "dataFields": self.dataFields.map { $0.encode() },
        ]
    }
}

public extension Validity {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(RFIDValue.decode(it["notAfter"]), forKey: "notAfter")
        result.setValue(RFIDValue.decode(it["notBefore"]), forKey: "notBefore")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "notAfter": self.notAfter.encode(),
            "notBefore": self.notBefore.encode(),
        ]
    }
}

public extension RFIDValue {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["data"] as? String, forKey: "data")
        result.setValue(it["length"] as? Int, forKey: "length")
        result.setValue(it["status"] as? Double, forKey: "status")
        result.setValue(it["type"] as? Int, forKey: "type")
        result.setValue(it["format"] as? String, forKey: "format")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            // TODO: revert it back to self.data after the NSNull crash is fixed in SDK(most likely in 9.11)
            // Crash was after reading RFID, when encoding the results, because of NSNull value of nonnull property RFIDValue.data.
            "data": self.value(forKey: "data"),
            "length": self.length,
            "status": self.status,
            "type": self.type,
            "format": self.format,
        ]
    }
}

public extension SecurityObject {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["fileReference"] as? Int, forKey: "fileReference")
        result.setValue(it["objectType"] as? String, forKey: "objectType")
        result.setValue(it["version"] as? Int, forKey: "version")
        result.setValue((it["signerInfos"] as? [Any])?.compactMap(SignerInfo.decode), forKey: "signerInfos")
        result.setValue(it["notifications"] as? [NSNumber], forKey: "notifications")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "fileReference": self.fileReference,
            "objectType": self.objectType,
            "version": self.version,
            "signerInfos": self.signerInfos.map { $0.encode() },
            "notifications": self.notifications,
        ]
    }
}

public extension SecurityObjectCertificates {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(CertificateData.decode(it["securityObject"]), forKey: "securityObject")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "securityObject": self.securityObject.encode(),
        ]
    }
}

public extension SignerInfo {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["dataToHash"] as? String, forKey: "dataToHash")
        result.setValue(it["digestAlgorithm"] as? String, forKey: "digestAlgorithm")
        result.setValue(it["paStatus"] as? Double, forKey: "paStatus")
        result.setValue(it["signatureAlgorithm"] as? String, forKey: "signatureAlgorithm")
        result.setValue(it["version"] as? Int, forKey: "version")
        result.setValue(Authority.decode(it["issuer"]), forKey: "issuer")
        result.setValue(RFIDValue.decode(it["serialNumber"]), forKey: "serialNumber")
        result.setValue(RFIDValue.decode(it["signature"]), forKey: "signature")
        result.setValue((it["signedAttributes"] as? [Any])?.compactMap(Extension.decode), forKey: "signedAttributes")
        result.setValue(RFIDValue.decode(it["subjectKeyIdentifier"]), forKey: "subjectKeyIdentifier")
        result.setValue((it["certificateChain"] as? [Any])?.compactMap(CertificateChain.decode), forKey: "certificateChain")
        result.setValue(it["notifications"] as? [NSNumber], forKey: "notifications")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "dataToHash": self.dataToHash,
            "digestAlgorithm": self.digestAlgorithm,
            "paStatus": self.paStatus,
            "signatureAlgorithm": self.signatureAlgorithm,
            "version": self.version,
            "issuer": self.issuer.encode(),
            "serialNumber": self.serialNumber.encode(),
            "signature": self.signature.encode(),
            "signedAttributes": self.signedAttributes.map { $0.encode() },
            "subjectKeyIdentifier": self.subjectKeyIdentifier.encode(),
            "certificateChain": self.certificateChain.map { $0.encode() },
            "notifications": self.notifications,
        ]
    }
}

// MARK: - Results / Status

public extension DetailsAge {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return perform("detailsAgeWithJSON:".selector(), with: it).takeUnretainedValue() as? Self
    }
    func encode() -> [String: Any?] {
        return [
            "threshold": self.threshold,
            "overThreshold": self.overThreshold.rawValue,
            "over18": self.over18.rawValue,
            "over21": self.over21.rawValue,
            "over25": self.over25.rawValue,
            "over65": self.over65.rawValue,
        ]
    }
}

public extension OpticalStatus {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return perform("opticalStatusWithJSON:".selector(), with: it).takeUnretainedValue() as? Self
    }
    func encode() -> [String: Any?] {
        return [
            "overallStatus": self.overallStatus.rawValue,
            "mrz": self.mrz.rawValue,
            "text": self.text.rawValue,
            "docType": self.docType.rawValue,
            "security": self.security.rawValue,
            "imageQA": self.imageQA.rawValue,
            "expiry": self.expiry.rawValue,
            "vds": self.vds.rawValue,
            "pagesCount": self.pagesCount,
        ]
    }
}

public extension DocumentReaderResults.Status {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        var json = it
        if var rfid = it["detailsRFID"] as? [String: Any] {
            rfid["AA"] = rfid["aa"]
            rfid["BAC"] = rfid["bac"]
            rfid["CA"] = rfid["ca"]
            rfid["PA"] = rfid["pa"]
            rfid["PACE"] = rfid["pace"]
            rfid["TA"] = rfid["ta"]
            json["detailsRFID"] = rfid
        }
        return perform("resultsStatusWithJSON:".selector(), with: json).takeUnretainedValue() as? Self
    }
    func encode() -> [String: Any?] {
        return [
            "overallStatus": self.overallStatus.rawValue,
            "optical": self.optical.rawValue,
            "detailsOptical": self.detailsOptical.encode(),
            "rfid": self.rfid.rawValue,
            "detailsRFID": self.detailsRFID.encode(),
            "portrait": self.portrait.rawValue,
            "stopList": self.stopList.rawValue,
            "mDL": self.mDL.rawValue,
            "age": self.age.rawValue,
            "captureProcessIntegrity": self.captureProcessIntegrity.rawValue,
            "detailsAge": self.detailsAge.encode(),
        ]
    }
}

public extension RFIDSessionDataStatus {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        var json = it
        json["AA"] = it["aa"]
        json["BAC"] = it["bac"]
        json["CA"] = it["ca"]
        json["PA"] = it["pa"]
        json["PACE"] = it["pace"]
        json["TA"] = it["ta"]
        return perform("rfidStatusWithJSON:".selector(), with: json).takeUnretainedValue() as? Self
    }
    func encode() -> [String: Any?] {
        return [
            "aa": self.aa.rawValue,
            "bac": self.bac.rawValue,
            "ca": self.ca.rawValue,
            "pa": self.pa.rawValue,
            "pace": self.pace.rawValue,
            "ta": self.ta.rawValue,
            "overallStatus": self.overallStatus.rawValue,
        ]
    }
}

// MARK: - Results / Visible Digital Seals

public extension BytesData {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        var json = it
        json["Data"] = it["data"]
        json["Length"] = it["length"]
        json["Status"] = it["status"]
        json["Type"] = it["type"]
        return perform("bytesDataWithJSON:".selector(), with: json).takeUnretainedValue() as? Self
    }
    func encode() -> [String: Any?] {
        return [
            "data": self.data,
            "length": self.length,
            "status": self.status,
            "type": self.type,
        ]
    }
}

public extension RGLDocFeature {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["type"] as? NSNumber, forKey: "type")
        result.setValue(BytesData.decode(it["data"]), forKey: "data")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "type": self.type,
            "data": self.data?.encode(),
        ]
    }
}

public extension VDSData {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let alloc = Self.allocate()
        let sel = "initWithType:docType:featureRef:version:certificate:issuingCountry:docIssueDate:signature:signatureDate:signer:certificateChain:docFeatures:notifications:".selector()
        return privateInit(alloc, sel, (@convention(c)(
            Any, Selector,
            Int, Int, Int, Int, Any?, Any?, Any?, Any?, Any?, Any?, Any?, Any?, Any?) -> Unmanaged<AnyObject>?).self, { f in f(
                alloc, sel,
                it["type"] as! Int, it["docType"] as! Int, it["featureRef"] as! Int, it["version"] as! Int,
                it["certificate"], it["issuingCountry"], it["docIssueDate"], BytesData.decode(it["signature"]),
                it["signatureDate"], it["signer"],
                (it["certificateChain"] as? [Any])?.compactMap(CertificateChain.decode) ?? [],
                (it["docFeatures"] as? [Any])?.compactMap(RGLDocFeature.decode) ?? [],
                it["notifications"]
            )})
    }
    func encode() -> [String: Any?] {
        return [
            "type": self.type,
            "docType": self.docType,
            "featureRef": self.featureRef,
            "version": self.version,
            "certificate": self.certificate,
            "issuingCountry": self.issuingCountry,
            "docIssueDate": self.docIssueDate,
            "signature": self.signature?.encode(),
            "signatureDate": self.signatureDate,
            "signer": self.signer,
            "certificateChain": self.certificateChain.map { $0.encode() },
            "docFeatures": self.docFeatures.map { $0.encode() },
            "notifications": self.notifications,
        ]
    }
}

public extension VDSNCData {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let alloc = Self.allocate()
        let sel = "initWithType:version:issuingCountry:message:signatureAlgorithm:signature:certificate:certificateChain:notifications:".selector()
        return privateInit(alloc, sel, (@convention(c)(
            Any, Selector,
            Any?, Int, Any?, Any?, Any?, Any?, Any?, Any?, Any?) -> Unmanaged<AnyObject>?).self, { f in f(
                alloc, sel,
                it["type"], it["version"] as! Int, it["issuingCountry"], it["message"], it["signatureAlgorithm"],
                BytesData.decode(it["signature"]), BytesData.decode(it["certificate"]),
                (it["certificateChain"] as? [Any])?.compactMap(CertificateChain.decode) ?? [],
                it["notifications"]
            )})
    }
    func encode() -> [String: Any?] {
        return [
            "type": self.type,
            "version": self.version,
            "issuingCountry": self.issuingCountry,
            "message": self.message,
            "signatureAlgorithm": self.signatureAlgorithm,
            "signature": self.signature?.encode(),
            "certificate": self.certificate?.encode(),
            "certificateChain": self.certificateChain.map { $0.encode() },
            "notifications": self.notifications,
        ]
    }
}

// MARK: - Results / Visual Results

public extension DocumentReaderComparison {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["sourceTypeLeft"] as Any?, forKey: "sourceTypeLeft")
        result.setValue(it["sourceTypeRight"] as Any?, forKey: "sourceTypeRight")
        result.setValue(it["status"] as Any?, forKey: "status")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "sourceTypeLeft": self.sourceTypeLeft.rawValue,
            "sourceTypeRight": self.sourceTypeRight.rawValue,
            "status": self.status.rawValue,
        ]
    }
}

public extension DocumentReaderGraphicField {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["sourceType"] as Any?, forKey: "sourceType")
        result.setValue(it["fieldType"] as Any?, forKey: "fieldType")
        result.setValue(it["fieldName"] as? String, forKey: "fieldName")
        result.setValue(CGRect.decode(it["fieldRect"]), forKey: "boundRect")
        result.setValue(UIImage.decode(it["value"]), forKey: "value")
        result.setValue(it["light"] as Any?, forKey: "lightType")
        result.setValue(it["lightName"] as? String, forKey: "lightName")
        result.setValue(it["pageIndex"] as? Int, forKey: "pageIndex")
        result.setValue(it["originalPageIndex"] as? Int, forKey: "originalPageIndex")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "sourceType": self.sourceType.rawValue,
            "fieldType": self.fieldType.rawValue,
            "fieldName": self.fieldName,
            "fieldRect": self.boundRect.encode(),
            "value": self.value.encode(),
            "light": self.lightType.rawValue,
            "lightName": self.lightName,
            "pageIndex": self.pageIndex,
            "originalPageIndex": self.originalPageIndex,
        ]
    }
}

public extension DocumentReaderGraphicResult {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue((it["fields"] as? [Any])?.compactMap(DocumentReaderGraphicField.decode), forKey: "fields")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "fields": self.fields.map { $0.encode() },
        ]
    }
}

public extension DocumentReaderRfidOrigin {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["dg"] as? Int, forKey: "dg")
        result.setValue(it["dgTag"] as? Int, forKey: "dgTag")
        result.setValue(it["entryView"] as? Int, forKey: "entryView")
        result.setValue(it["tagEntry"] as? Int, forKey: "tagEntry")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "dg": self.dg,
            "dgTag": self.dgTag,
            "entryView": self.entryView,
            "tagEntry": self.tagEntry,
        ]
    }
}

public extension DocumentReaderSymbol {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["code"] as? Int, forKey: "code")
        result.setValue(CGRect.decode(it["rect"]), forKey: "rect")
        result.setValue(it["probability"] as? Int, forKey: "probability")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "code": self.code,
            "rect": self.rect.encode(),
            "probability": self.probability,
        ]
    }
}

public extension DocumentReaderTextField {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["fieldType"] as Any?, forKey: "fieldType")
        result.setValue(it["fieldName"] as? String, forKey: "fieldName")
        result.setValue(it["lcid"] as Any?, forKey: "lcid")
        result.setValue((it["values"] as? [Any])?.compactMap(DocumentReaderValue.decode), forKey: "values")
        result.setValue(it["status"] as Any?, forKey: "status")
        result.setValue(it["comparisonStatus"] as Any?, forKey: "comparisonStatus")
        result.setValue(it["validityStatus"] as Any?, forKey: "validityStatus")
        result.setValue(it["value"] as? String, forKey: "value")
        result.setValue((it["comparisonList"] as? [Any])?.compactMap(DocumentReaderComparison.decode), forKey: "comparisonList")
        result.setValue((it["validityList"] as? [Any])?.compactMap(DocumentReaderValidity.decode), forKey: "validityList")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "fieldType": self.fieldType.rawValue,
            "fieldName": self.fieldName,
            "lcid": self.lcid.rawValue,
            "lcidName": self.lcidName,
            "values": self.values.map { $0.encode() },
            "status": self.status.rawValue,
            "comparisonStatus": self.comparisonStatus.rawValue,
            "validityStatus": self.validityStatus.rawValue,
            "value": self.value,
            "getValue": self.getValue()?.encode(),
            "comparisonList": self.comparisonList.map { $0.encode() },
            "validityList": self.validityList.map { $0.encode() },
        ]
    }
}

public extension DocumentReaderTextResult {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue((it["fields"] as? [Any])?.compactMap(DocumentReaderTextField.decode), forKey: "fields")
        result.setValue(it["status"] as Any?, forKey: "status")
        result.setValue(it["comparisonStatus"] as Any?, forKey: "comparisonStatus")
        result.setValue(it["validityStatus"] as Any?, forKey: "validityStatus")
        result.setValue((it["availableSourceList"] as? [Any])?.compactMap(DocumentReaderTextSource.decode), forKey: "availableSourceList")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "fields": self.fields.map { $0.encode() },
            "status": self.status.rawValue,
            "comparisonStatus": self.comparisonStatus.rawValue,
            "validityStatus": self.validityStatus.rawValue,
            "availableSourceList": self.availableSourceList.map { $0.encode() },
        ]
    }
}

public extension DocumentReaderTextSource {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["sourceType"] as Any?, forKey: "sourceType")
        result.setValue(it["source"] as? String, forKey: "source")
        result.setValue(it["validityStatus"] as Any?, forKey: "validityStatus")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "sourceType": self.sourceType.rawValue,
            "source": self.value(forKey: "source"),
            "validityStatus": self.validityStatus.rawValue,
        ]
    }
}

public extension DocumentReaderValidity {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["sourceType"] as Any?, forKey: "sourceType")
        result.setValue(it["status"] as Any?, forKey: "status")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "sourceType": self.sourceType.rawValue,
            "status": self.status.rawValue,
        ]
    }
}

public extension DocumentReaderValue {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["sourceType"] as Any?, forKey: "sourceType")
        result.setValue(it["value"] as? String, forKey: "value")
        result.setValue(it["originalValue"] as? String, forKey: "originalValue")
        result.setValue(CGRect.decode(it["boundRect"]), forKey: "boundRect")
        result.setValue(it["pageIndex"] as? Int, forKey: "pageIndex")
        result.setValue(it["probability"] as? Int, forKey: "probability")
        result.setValue((it["originalSymbols"] as? [Any])?.compactMap(DocumentReaderSymbol.decode), forKey: "originalSymbols")
        result.setValue(DocumentReaderRfidOrigin.decode(it["rfidOrigin"]), forKey: "rfidOrigin")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "sourceType": self.sourceType.rawValue,
            "value": self.value,
            "originalValue": self.originalValue,
            "boundRect": self.boundRect.encode(),
            "pageIndex": self.pageIndex,
            "probability": self.probability,
            "originalSymbols": self.originalSymbols.map { $0.encode() },
            "rfidOrigin": self.rfidOrigin?.encode(),
        ]
    }
}

// MARK: - RFID

public extension RGLRFIDAccessControlCA {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        if let prop = it["version"] { result.version = Int(prop as! String)! }
        if let prop = it["scheme"] as? String { result.scheme = prop }
        if let prop = it["keyAlgorithm"] as? String { result.keyAlgorithm = prop }
        if let prop = it["chipIndividual"] as? Bool { result.chipIndividual = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "version": String(self.version),
            "scheme": self.scheme,
            "keyAlgorithm": self.keyAlgorithm,
            "chipIndividual": self.chipIndividual,
        ]
    }
}

public extension PAAttribute {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(it["value"] as? String, forKey: "value")
        result.setValue(it["type"] as? String, forKey: "type")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "value": self.value,
            "type": self.type,
        ]
    }
}

public extension PAResourcesIssuer {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(Data.decode(it["data"]), forKey: "data")
        result.setValue(it["friendlyName"] as? String, forKey: "friendlyName")
        result.setValue((it["attributes"] as? [Any])?.compactMap(PAAttribute.decode), forKey: "attributes")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "data": self.data?.encode(),
            "friendlyName": self.friendlyName,
            "attributes": self.attributes?.map { $0.encode() },
        ]
    }
}

public extension RGLRFIDAccessControlPACE {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        if let prop = it["version"] { result.version = Int(prop as! String)! }
        if let prop = it["stdDomainParams"] as? String { result.stdDomainParams = prop }
        if let prop = it["keyAlgorithm"] as? String { result.keyAlgorithm = prop }
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "version": String(self.version),
            "stdDomainParams": self.stdDomainParams,
            "keyAlgorithm": self.keyAlgorithm,
        ]
    }
}

public extension PKDCertificate {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self(binaryData: Data.decode(it["binaryData"])!,
                    resourceType: PKDResourceType(rawValue: it["resourceType"] as? Int ?? 0)!,
                    privateKey: Data.decode(it["privateKey"]))
    }
    func encode() -> [String: Any?] {
        return [
            "resourceType": self.resourceType.rawValue,
            "binaryData": self.binaryData.encode(),
            "privateKey": self.privateKey?.encode(),
        ]
    }
}

public extension RFIDNotify {
    func encode() -> [String: Any?] {
        return [
            "notificationCode": self.code.rawValue & 0xFFFF0000,
            "dataFileType": self.attachment,
            "progress": Int(self.value),
        ]
    }
}

public extension TAChallenge {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        let result = Self.emptyInit() as Self
        result.setValue(Data.decode(it["data"]), forKey: "data")
        result.setValue(it["auxPCD"] as? String, forKey: "auxPCD")
        result.setValue(it["challengePICC"] as? String, forKey: "challengePICC")
        result.setValue(it["hashPK"] as? String, forKey: "hashPK")
        result.setValue(it["idPICC"] as? String, forKey: "idPICC")
        return result
    }
    func encode() -> [String: Any?] {
        return [
            "data": self.data.encode(),
            "auxPCD": self.auxPCD,
            "challengePICC": self.challengePICC,
            "hashPK": self.hashPK,
            "idPICC": self.idPICC,
        ]
    }
}

public extension TCCParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self(serviceTAURLString: it["serviceUrlTA"] as? String,
                    servicePAURLString: it["serviceUrlPA"] as? String,
                    pfxCertURLString: it["pfxCertUrl"] as? String,
                    pfxCertData: Data.decode(it["pfxCert"]),
                    pfxPassPhrase: it["pfxPassPhrase"] as? String)
    }
    func encode() -> [String: Any?] {
        return [
            "serviceUrlTA": self.serviceTAURLString,
            "serviceUrlPA": self.servicePAURLString,
            "pfxCertUrl": self.pfxCertURLString,
            "pfxPassPhrase": self.pfxPassPhrase,
            "pfxCert": self.pfxCertData?.encode(),
        ]
    }
}
