import UIKit
import AVFoundation
import DocumentReader

// MARK: - ImageQA

public extension ImageQA {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        for (k, v) in it {
            switch k {
            case("dpiThreshold"): self.dpiThreshold = v as? NSNumber
            case("angleThreshold"): self.angleThreshold = v as? NSNumber
            case("focusCheck"): self.focusCheck = v as? NSNumber
            case("glaresCheck"): self.glaresCheck = v as? NSNumber
            case("colornessCheck"): self.colornessCheck = v as? NSNumber
            case("screenCapture"): self.screenCapture = v as? NSNumber
            case("expectedPass"): self.expectedPass = (v as! [Int]).map { ImageQualityCheckType.decode($0) }
            case("documentPositionIndent"): self.documentPositionIndent = v as? NSNumber
            case("glaresCheckParams"): self.glaresCheckParams = ImageQA.GlaresCheckParams.decode(v)
            case("brightnessThreshold"): self.brightnessThreshold = v as? NSNumber
            case("occlusionCheck"): self.occlusionCheck = v as? NSNumber
            case("occlusionCheckParams"): self.occlusionCheckParams = ImageQA.OcclusionCheckParams.decode(v)
            default: break
            }
        }
        return self
    }
    func encode() -> [String: Any?] {
        return [
            "dpiThreshold": self.dpiThreshold,
            "angleThreshold": self.angleThreshold,
            "focusCheck": self.focusCheck,
            "glaresCheck": self.glaresCheck,
            "colornessCheck": self.colornessCheck,
            "screenCapture": self.screenCapture,
            "expectedPass": self.expectedPass?.map { $0.encode() },
            "documentPositionIndent": self.documentPositionIndent,
            "glaresCheckParams": self.glaresCheckParams?.encode(),
            "brightnessThreshold": self.brightnessThreshold,
            "occlusionCheck": self.occlusionCheck,
            "occlusionCheckParams": self.occlusionCheckParams?.encode(),
        ]
    }
}

// MARK: - Authenticity

public extension AuthenticityParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self.default().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        for (k, v) in it {
            switch k {
            case("useLivenessCheck"): self.useLivenessCheck = v as? NSNumber
            case("checkUVLuminiscence"): self.checkUVLuminiscence = v as? NSNumber
            case("checkIRB900"): self.checkIRB900 = v as? NSNumber
            case("checkImagePatterns"): self.checkImagePatterns = v as? NSNumber
            case("checkFibers"): self.checkFibers = v as? NSNumber
            case("checkExtMRZ"): self.checkExtMRZ = v as? NSNumber
            case("checkExtOCR"): self.checkExtOCR = v as? NSNumber
            case("checkAxial"): self.checkAxial = v as? NSNumber
            case("checkBarcodeFormat"): self.checkBarcodeFormat = v as? NSNumber
            case("checkIRVisibility"): self.checkIRVisibility = v as? NSNumber
            case("checkIPI"): self.checkIPI = v as? NSNumber
            case("checkPhotoEmbedding"): self.checkPhotoEmbedding = v as? NSNumber
            case("checkPhotoComparison"): self.checkPhotoComparison = v as? NSNumber
            case("checkLetterScreen"): self.checkLetterScreen = v as? NSNumber
            case("checkSecurityText"): self.checkSecurityText = v as? NSNumber
            case("checkProperties"): self.checkProperties = v as? NSNumber
            case("livenessParams"): self.livenessParams = (self.livenessParams ?? LivenessParams.default()).update(v as! [String: Any])
            case("propertiesParams"): self.propertiesParams = (self.propertiesParams ?? AuthenticityPropertiesParams.default()).update(v as! [String: Any])
            default: break
            }
        }
        return self
    }
    func encode() -> [String: Any?] {
        return [
            "useLivenessCheck": self.useLivenessCheck,
            "checkUVLuminiscence": self.checkUVLuminiscence,
            "checkIRB900": self.checkIRB900,
            "checkImagePatterns": self.checkImagePatterns,
            "checkFibers": self.checkFibers,
            "checkExtMRZ": self.checkExtMRZ,
            "checkExtOCR": self.checkExtOCR,
            "checkAxial": self.checkAxial,
            "checkBarcodeFormat": self.checkBarcodeFormat,
            "checkIRVisibility": self.checkIRVisibility,
            "checkIPI": self.checkIPI,
            "checkPhotoEmbedding": self.checkPhotoEmbedding,
            "checkPhotoComparison": self.checkPhotoComparison,
            "checkLetterScreen": self.checkLetterScreen,
            "checkSecurityText": self.checkSecurityText,
            "checkProperties": self.checkProperties,
            "livenessParams": self.livenessParams?.encode(),
            "propertiesParams": self.propertiesParams?.encode(),
        ]
    }
}

public extension LivenessParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self.default().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        for (k, v) in it {
            switch k {
            case("checkOVI"): self.checkOVI = v as? NSNumber
            case("checkMLI"): self.checkMLI = v as? NSNumber
            case("checkHolo"): self.checkHolo = v as? NSNumber
            case("checkED"): self.checkED = v as? NSNumber
            case("checkBlackAndWhiteCopy"): self.checkBlackAndWhiteCopy = v as? NSNumber
            case("checkDynaprint"): self.checkDynaprint = v as? NSNumber
            case("checkGeometry"): self.checkGeometry = v as? NSNumber
            case("checkBarcodeBackground"): self.checkBarcodeBackground = v as? NSNumber
            default: break
            }
        }
        return self
    }
    func encode() -> [String: Any?] {
        return [
            "checkOVI": self.checkOVI,
            "checkMLI": self.checkMLI,
            "checkHolo": self.checkHolo,
            "checkED": self.checkED,
            "checkBlackAndWhiteCopy": self.checkBlackAndWhiteCopy,
            "checkDynaprint": self.checkDynaprint,
            "checkGeometry": self.checkGeometry,
            "checkBarcodeBackground": self.checkBarcodeBackground,
        ]
    }
}

public extension AuthenticityPropertiesParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self.default().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        for (k, v) in it {
            switch k {
            case("checkHoldersSignature"): self.checkHoldersSignature = v as? NSNumber
            case("checkDocumentDamage"): self.checkDocumentDamage = v as? NSNumber
            default: break
            }
        }
        return self
    }
    func encode() -> [String: Any?] {
        return [
            "checkHoldersSignature": self.checkHoldersSignature,
            "checkDocumentDamage": self.checkDocumentDamage,
        ]
    }
}

public extension DTCDataGroup {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        for (k, v) in it {
            switch k {
            case("DG17"): self.dG17 = v as! Bool
            case("DG18"): self.dG18 = v as! Bool
            case("DG22"): self.dG22 = v as! Bool
            case("DG23"): self.dG23 = v as! Bool
            case("DG24"): self.dG24 = v as! Bool
            default: break
            }
        }
        return self
    }
    func encode() -> [String: Any?] {
        return [
            "DG17": self.dG17,
            "DG18": self.dG18,
            "DG22": self.dG22,
            "DG23": self.dG23,
            "DG24": self.dG24,
        ]
    }
}

// MARK: - RFID

public extension RFIDScenario {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        for (k, v) in it {
            switch k {
            case("paceStaticBinding"): self.paceStaticBinding = v as! Bool
            case("onlineTA"): self.onlineTA = v as! Bool
            case("writeEid"): self.writeEid = v as! Bool
            case("universalAccessRights"): self.universalAccessRights = v as! Bool
            case("authorizedRestrictedIdentification"): self.authorizedRestrictedIdentification = v as! Bool
            case("auxVerificationCommunityID"): self.auxVerificationCommunityID = v as! Bool
            case("auxVerificationDateOfBirth"): self.auxVerificationDateOfBirth = v as! Bool
            case("skipAA"): self.skipAA = v as! Bool
            case("strictProcessing"): self.strictProcessing = v as! Bool
            case("pkdDSCertPriority"): self.pkdDSCertPriority = v as! Bool
            case("pkdUseExternalCSCA"): self.pkdUseExternalCSCA = v as! Bool
            case("trustedPKD"): self.trustedPKD = v as! Bool
            case("passiveAuth"): self.passiveAuth = v as! Bool
            case("useSFI"): self.useSFI = v as! Bool
            case("readEPassport"): self.readEPassport = v as! Bool
            case("readEID"): self.readEID = v as! Bool
            case("readEDL"): self.readEDL = v as! Bool
            case("authorizedSTSignature"): self.authorizedSTSignature = v as! Bool
            case("authorizedSTQSignature"): self.authorizedSTQSignature = v as! Bool
            case("authorizedWriteDG17"): self.authorizedWriteDG17 = v as! Bool
            case("authorizedWriteDG18"): self.authorizedWriteDG18 = v as! Bool
            case("authorizedWriteDG19"): self.authorizedWriteDG19 = v as! Bool
            case("authorizedWriteDG20"): self.authorizedWriteDG20 = v as! Bool
            case("authorizedWriteDG21"): self.authorizedWriteDG21 = v as! Bool
            case("authorizedVerifyAge"): self.authorizedVerifyAge = v as! Bool
            case("authorizedVerifyCommunityID"): self.authorizedVerifyCommunityID = v as! Bool
            case("authorizedPrivilegedTerminal"): self.authorizedPrivilegedTerminal = v as! Bool
            case("authorizedCANAllowed"): self.authorizedCANAllowed = v as! Bool
            case("authorizedPINManagement"): self.authorizedPINManagment = v as! Bool
            case("authorizedInstallCert"): self.authorizedInstallCert = v as! Bool
            case("authorizedInstallQCert"): self.authorizedInstallQCert = v as! Bool
            case("applyAmendments"): self.applyAmendments = v as! Bool
            case("autoSettings"): self.autoSettings = v as! Bool
            case("proceedReadingAlways"): self.proceedReadingAlways = v as! Bool
            case("readDTC"): self.readDTC = v as! Bool
            case("mrzStrictCheck"): self.mrzStrictCheck = v as? NSNumber
            case("loadCRLFromRemote"): self.loadCRLFromRemote = v as! Bool
            case("independentSODStatus"): self.independentSODStatus = v as? NSNumber
            case("readUser"): self.readUser = v as? NSNumber
            case("signManagementAction"): self.signManagementAction = ESignManagementAction(rawValue: v as! Int)!
            case("readingBuffer"): self.readingBuffer = RFIDReadingBufferSize(rawValue: v as! Int)!
            case("onlineTAToSignDataType"): self.onlineTAToSignDataType = v as! Int32
            case("profilerType"): self.profilerType = RFIDSdkProfilerType(rawValue: v as! UInt32)
            case("authProcType"): self.authProcType = RFIDAuthenticationProcedureType(rawValue: v as! Int)!
            case("baseSMProcedure"): self.baseSMProcedure = RFIDAccessControlProcedureType(rawValue: v as! Int)!
            case("pacePasswordType"): self.pacePasswordType = RFIDPasswordType(rawValue: v as! Int)!
            case("terminalType"): self.terminalType = RFIDTerminalType(rawValue: v as! Int)!
            case("defaultReadingBufferSize"): self.defaultReadingBufferSize = v as! Int32
            case("password"): self.password = v as! String
            case("pkdPA"): self.pkdPA = v as! String
            case("pkdEAC"): self.pkdEAC = v as! String
            case("mrz"): self.mrz = v as! String
            case("eSignPINDefault"): self.eSignPINDefault = v as! String
            case("eSignPINNewValue"): self.eSignPINNewValue = v as! String
            case("cardAccess"): self.cardAccess = v as? String
            case("mrzHash"): self.mrzHash = v as! String
            case("documentNumber"): self.documentNumber = v as? String
            case("dateOfBirth"): self.dateOfBirth = v as? String
            case("dateOfExpiry"): self.dateOfExpiry = v as? String
            case("defaultUserPIN"): self.defaultUserPIN = v as? String
            case("eDLDataGroups"): self.eDLDataGroups.update(v as! [String: Any])
            case("ePassportDataGroups"): self.ePassportDataGroups.update(v as! [String: Any])
            case("eIDDataGroups"): self.eIDDataGroups.update(v as! [String: Any])
            case("dtcDataGroups"): self.dtcDataGroups.update(v as! [String: Any])
            default: break
            }
        }
        return self
    }
    func encode() -> [String: Any?] {
        return [
            "paceStaticBinding": self.paceStaticBinding,
            "onlineTA": self.onlineTA,
            "writeEid": self.writeEid,
            "universalAccessRights": self.universalAccessRights,
            "authorizedRestrictedIdentification": self.authorizedRestrictedIdentification,
            "auxVerificationCommunityID": self.auxVerificationCommunityID,
            "auxVerificationDateOfBirth": self.auxVerificationDateOfBirth,
            "skipAA": self.skipAA,
            "strictProcessing": self.strictProcessing,
            "pkdDSCertPriority": self.pkdDSCertPriority,
            "pkdUseExternalCSCA": self.pkdUseExternalCSCA,
            "trustedPKD": self.trustedPKD,
            "passiveAuth": self.passiveAuth,
            "useSFI": self.useSFI,
            "readEPassport": self.readEPassport,
            "readEID": self.readEID,
            "readEDL": self.readEDL,
            "authorizedSTSignature": self.authorizedSTSignature,
            "authorizedSTQSignature": self.authorizedSTQSignature,
            "authorizedWriteDG17": self.authorizedWriteDG17,
            "authorizedWriteDG18": self.authorizedWriteDG18,
            "authorizedWriteDG19": self.authorizedWriteDG19,
            "authorizedWriteDG20": self.authorizedWriteDG20,
            "authorizedWriteDG21": self.authorizedWriteDG21,
            "authorizedVerifyAge": self.authorizedVerifyAge,
            "authorizedVerifyCommunityID": self.authorizedVerifyCommunityID,
            "authorizedPrivilegedTerminal": self.authorizedPrivilegedTerminal,
            "authorizedCANAllowed": self.authorizedCANAllowed,
            "authorizedPINManagement": self.authorizedPINManagment,
            "authorizedInstallCert": self.authorizedInstallCert,
            "authorizedInstallQCert": self.authorizedInstallQCert,
            "applyAmendments": self.applyAmendments,
            "autoSettings": self.autoSettings,
            "proceedReadingAlways": self.proceedReadingAlways,
            "readDTC": self.readDTC,
            "mrzStrictCheck": self.mrzStrictCheck,
            "loadCRLFromRemote": self.loadCRLFromRemote,
            "independentSODStatus": self.independentSODStatus,
            "readUser": self.readUser,
            "signManagementAction": self.signManagementAction.rawValue,
            "readingBuffer": self.readingBuffer.rawValue,
            "onlineTAToSignDataType": self.onlineTAToSignDataType,
            "profilerType": self.profilerType.rawValue,
            "authProcType": self.authProcType.rawValue,
            "baseSMProcedure": self.baseSMProcedure.rawValue,
            "pacePasswordType": self.pacePasswordType.rawValue,
            "terminalType": self.terminalType.rawValue,
            "defaultReadingBufferSize": self.defaultReadingBufferSize,
            "password": self.password,
            "pkdPA": self.pkdPA,
            "pkdEAC": self.pkdEAC,
            "mrz": self.mrz,
            "eSignPINDefault": self.eSignPINDefault,
            "eSignPINNewValue": self.eSignPINNewValue,
            "cardAccess": self.cardAccess,
            "mrzHash": self.mrzHash,
            "documentNumber": self.documentNumber,
            "dateOfBirth": self.dateOfBirth,
            "dateOfExpiry": self.dateOfExpiry,
            "defaultUserPIN": self.defaultUserPIN,
            "eDLDataGroups": self.eDLDataGroups.encode(),
            "ePassportDataGroups": self.ePassportDataGroups.encode(),
            "eIDDataGroups": self.eIDDataGroups.encode(),
            "dtcDataGroups": self.dtcDataGroups.encode(),
        ]
    }
}

// MARK: - Customization

public extension Customization {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        for (k, v) in it {
            switch k {
            case("theme"): self.theme = CustomizationTheme(rawValue: v as! Int)!
            case("showStatusMessages"): self.showStatusMessages = v as! Bool
            case("showResultStatusMessages"): self.showResultStatusMessages = v as! Bool
            case("showHelpAnimation"): self.showHelpAnimation = v as! Bool
            case("showNextPageAnimation"): self.showNextPageAnimation = v as! Bool
            case("showBackgroundMask"): self.showBackgroundMask = v as! Bool
            case("cameraFrameBorderWidth"): self.cameraFrameBorderWidth = v as! CGFloat
            case("cameraFrameLineLength"): self.cameraFrameLineLength = v as! CGFloat
            case("cameraFrameShapeType"): self.cameraFrameShapeType = CameraFrameShapeType(rawValue: v as! Int)!
            case("cameraFrameOffsetWidth"): self.cameraFrameOffsetWidth = v as! CGFloat
            case("nextPageAnimationStartDelay"): self.nextPageAnimationStartDelay = v as! TimeInterval
            case("nextPageAnimationEndDelay"): self.nextPageAnimationEndDelay = v as! TimeInterval
            case("status"): self.status = v as? String
            case("resultStatus"): self.resultStatus = v as? String
            case("multipageButtonText"): self.multipageButtonText = v as? String
            case("cameraFrameDefaultColor"): self.cameraFrameDefaultColor = UIColor.decode(v)!
            case("cameraFrameActiveColor"): self.cameraFrameActiveColor = UIColor.decode(v)!
            case("statusTextColor"): self.statusTextColor = UIColor.decode(v)
            case("resultStatusTextColor"): self.resultStatusTextColor = UIColor.decode(v)!
            case("resultStatusBackgroundColor"): self.resultStatusBackgroundColor = UIColor.decode(v)
            case("multipageButtonBackgroundColor"): self.multipageButtonBackgroundColor = UIColor.decode(v)
            case("tintColor"): self.tintColor = UIColor.decode(v)!
            case("activityIndicatorColor"): self.activityIndicatorColor = UIColor.decode(v)
            case("statusBackgroundColor"): self.statusBackgroundColor = UIColor.decode(v)
            case("cameraPreviewBackgroundColor"): self.cameraPreviewBackgroundColor = UIColor.decode(v)
            case("backgroundMaskColor"): self.backgroundMaskColor = UIColor.decode(v)
            case("multipageButtonTextColor"): self.multipageButtonTextColor = UIColor.decode(v)
            case("statusPositionMultiplier"): self.statusPositionMultiplier = v as! CGFloat
            case("resultStatusPositionMultiplier"): self.resultStatusPositionMultiplier = v as! CGFloat
            case("backgroundMaskAlpha"): self.backgroundMaskAlpha = v as! CGFloat
            case("toolbarSize"): self.toolbarSize = v as! CGFloat
            case("customStatusPositionMultiplier"): self.customStatusPositionMultiplier = v as! CGFloat
            case("cameraFrameVerticalPositionMultiplier"): self.cameraFrameVerticalPositionMultiplier = v as! CGFloat
            case("cameraFrameLandscapeAspectRatio"): self.cameraFrameLandscapeAspectRatio = v as! CGFloat
            case("cameraFramePortraitAspectRatio"): self.cameraFramePortraitAspectRatio = v as! CGFloat
            case("cameraFrameCornerRadius"): self.cameraFrameCornerRadius = v as! CGFloat
            case("livenessAnimationPositionMultiplier"): self.livenessAnimationPositionMultiplier = v as! CGFloat
            case("activityIndicatorPortraitPositionMultiplier"): self.activityIndicatorPortraitPositionMultiplier = v as! CGFloat
            case("activityIndicatorLandscapePositionMultiplier"): self.activityIndicatorLandscapePositionMultiplier = v as! CGFloat
            case("cameraPreviewVerticalPositionMultiplier"): self.previewLayerPositionMultiplier = v as! CGFloat
            case("multipageButtonPositionMultiplier"): self.multipageButtonPositionMultiplier = v as! CGFloat
            case("multipageAnimationFrontImage"): self.multipageAnimationFrontImage = UIImage.decode(v)
            case("multipageAnimationBackImage"): self.multipageAnimationBackImage = UIImage.decode(v)
            case("borderBackgroundImage"): self.borderBackgroundImage = UIImage.decode(v)
            case("helpAnimationImage"): self.helpAnimationImage = UIImage.decode(v)
            case("closeButtonImage"): self.closeButtonImage = UIImage.decode(v)
            case("captureButtonImage"): self.captureButtonImage = UIImage.decode(v)
            case("changeFrameButtonCollapseImage"): self.changeFrameButtonCollapseImage = UIImage.decode(v)
            case("changeFrameButtonExpandImage"): self.changeFrameButtonExpandImage = UIImage.decode(v)
            case("cameraSwitchButtonImage"): self.cameraSwitchButtonImage = UIImage.decode(v)
            case("torchButtonOnImage"): self.torchButtonOnImage = UIImage.decode(v)
            case("torchButtonOffImage"): self.torchButtonOffImage = UIImage.decode(v)
            case("livenessAnimationImage"): self.livenessAnimationImage = UIImage.decode(v)
            case("multipageButtonImage"): self.multipageButtonImage = UIImage.decode(v)
            case("statusTextFont"): self.setValue(UIFont.decode(v), forKey: "statusTextFont")
            case("resultStatusTextFont"): self.setValue(UIFont.decode(v), forKey: "resultStatusTextFont")
            case("multipageButtonTextFont"): self.multipageButtonTextFont = UIFont.decode(v)
            case("customLabelStatus"): self.customLabelStatus = NSAttributedString(string: v as! String)
            case("cameraFrameLineCap"): self.cameraFrameLineCap = CGLineCap(rawValue: v as! Int32)!
            case("uiCustomizationLayer"): self.customUILayerJSON = v as? [AnyHashable: Any]
            case("helpAnimationImageContentMode"): self.helpAnimationImageContentMode = UIView.ContentMode(rawValue: v as! Int)!
            case("multipageAnimationFrontImageContentMode"): self.multipageAnimationFrontImageContentMode = UIView.ContentMode(rawValue: v as! Int)!
            case("multipageAnimationBackImageContentMode"): self.multipageAnimationBackImageContentMode = UIView.ContentMode(rawValue: v as! Int)!
            case("livenessAnimationImageContentMode"): self.livenessAnimationImageContentMode = UIView.ContentMode(rawValue: v as! Int)!
            case("borderBackgroundImageContentMode"): self.borderBackgroundImageContentMode = UIView.ContentMode(rawValue: v as! Int)!
            case("colors"):
                let dict = self.uiConfiguration!.value(forKey: "colors") as! NSMutableDictionary
                for (k, v) in v as! [String: Any] {
                    if let key = DocReader.CustomizationColor.fromDartKey(k) { dict[key.rawValue] = UIColor.decode(v) }
                }
            case("fonts"):
                let dict = self.uiConfiguration!.value(forKey: "fonts") as! NSMutableDictionary
                for (k, v) in v as! [String: Any] {
                    if let key = DocReader.CustomizationFont.fromDartKey(k) { dict[key.rawValue] = UIFont.decode(v) }
                }
            case("images"):
                let dict = self.uiConfiguration!.value(forKey: "images") as! NSMutableDictionary
                for (k, v) in v as! [String: Any] {
                    if let key = DocReader.CustomizationImage.fromDartKey(k) { dict[key.rawValue] = UIImage.decode(v) }
                }
            case("timings"):
                let dict = self.uiConfiguration!.value(forKey: "timings") as! NSMutableDictionary
                for (k, v) in v as! [String: Any] {
                    if let key = DocReader.CustomizationTiming.fromDartKey(k) { dict[key.rawValue] = v }
                }
            case("contentModes"):
                let dict = self.uiConfiguration!.value(forKey: "contentModes") as! NSMutableDictionary
                for (k, v) in v as! [String: Any] {
                    if let key = DocReader.CustomizationContentMode.fromDartKey(k) { dict[key.rawValue] = v }
                }
            default: break
            }
        }
        return self
    }
    func encode() -> [String: Any?] {
        let contentModes = self.uiConfiguration?.value(forKey: "contentModes") as? NSDictionary
        let timings = self.uiConfiguration?.value(forKey: "timings") as? NSDictionary
        let images = self.uiConfiguration?.value(forKey: "images") as? NSDictionary
        let fonts = self.uiConfiguration?.value(forKey: "fonts") as? NSDictionary
        let colors = self.uiConfiguration?.value(forKey: "colors") as? NSDictionary
        return [
            "theme": self.theme.rawValue,
            "showStatusMessages": self.showStatusMessages,
            "showResultStatusMessages": self.showResultStatusMessages,
            "showHelpAnimation": self.showHelpAnimation,
            "showNextPageAnimation": self.showNextPageAnimation,
            "showBackgroundMask": self.showBackgroundMask,
            "cameraFrameBorderWidth": self.cameraFrameBorderWidth,
            "cameraFrameLineLength": self.cameraFrameLineLength,
            "cameraFrameShapeType": self.cameraFrameShapeType.rawValue,
            "cameraFrameOffsetWidth": self.cameraFrameOffsetWidth,
            "nextPageAnimationStartDelay": self.nextPageAnimationStartDelay,
            "nextPageAnimationEndDelay": self.nextPageAnimationEndDelay,
            "status": self.status,
            "resultStatus": self.resultStatus,
            "multipageButtonText": self.multipageButtonText,
            "cameraFrameDefaultColor": self.cameraFrameDefaultColor.encode(),
            "cameraFrameActiveColor": self.cameraFrameActiveColor.encode(),
            "statusTextColor": self.statusTextColor?.encode(),
            "resultStatusTextColor": self.resultStatusTextColor.encode(),
            "resultStatusBackgroundColor": self.resultStatusBackgroundColor?.encode(),
            "multipageButtonBackgroundColor": self.multipageButtonBackgroundColor?.encode(),
            "tintColor": self.tintColor.encode(),
            "activityIndicatorColor": self.activityIndicatorColor?.encode(),
            "statusBackgroundColor": self.statusBackgroundColor?.encode(),
            "cameraPreviewBackgroundColor": self.cameraPreviewBackgroundColor?.encode(),
            "backgroundMaskColor": self.backgroundMaskColor?.encode(),
            "multipageButtonTextColor": self.multipageButtonTextColor?.encode(),
            "statusPositionMultiplier": self.statusPositionMultiplier,
            "resultStatusPositionMultiplier": self.resultStatusPositionMultiplier,
            "backgroundMaskAlpha": self.backgroundMaskAlpha,
            "toolbarSize": self.toolbarSize,
            "customStatusPositionMultiplier": self.customStatusPositionMultiplier,
            "cameraFrameVerticalPositionMultiplier": self.cameraFrameVerticalPositionMultiplier,
            "cameraFrameLandscapeAspectRatio": self.cameraFrameLandscapeAspectRatio,
            "cameraFramePortraitAspectRatio": self.cameraFramePortraitAspectRatio,
            "cameraFrameCornerRadius": self.cameraFrameCornerRadius,
            "livenessAnimationPositionMultiplier": self.livenessAnimationPositionMultiplier,
            "activityIndicatorPortraitPositionMultiplier": self.activityIndicatorPortraitPositionMultiplier,
            "activityIndicatorLandscapePositionMultiplier": self.activityIndicatorLandscapePositionMultiplier,
            "cameraPreviewVerticalPositionMultiplier": self.previewLayerPositionMultiplier,
            "multipageButtonPositionMultiplier": self.multipageButtonPositionMultiplier,
            "multipageAnimationFrontImage": self.multipageAnimationFrontImage?.encode(),
            "multipageAnimationBackImage": self.multipageAnimationBackImage?.encode(),
            "borderBackgroundImage": self.borderBackgroundImage?.encode(),
            "helpAnimationImage": self.helpAnimationImage?.encode(),
            "closeButtonImage": self.closeButtonImage?.encode(),
            "captureButtonImage": self.captureButtonImage?.encode(),
            "changeFrameButtonCollapseImage": self.changeFrameButtonCollapseImage?.encode(),
            "changeFrameButtonExpandImage": self.changeFrameButtonExpandImage?.encode(),
            "cameraSwitchButtonImage": self.cameraSwitchButtonImage?.encode(),
            "torchButtonOnImage": self.torchButtonOnImage?.encode(),
            "torchButtonOffImage": self.torchButtonOffImage?.encode(),
            "livenessAnimationImage": self.livenessAnimationImage?.encode(),
            "multipageButtonImage": self.multipageButtonImage?.encode(),
            "statusTextFont": self.statusTextFont.encode(),
            "resultStatusTextFont": self.resultStatusTextFont.encode(),
            "multipageButtonTextFont": self.multipageButtonTextFont?.encode(),
            "customLabelStatus": self.customLabelStatus?.string,
            "cameraFrameLineCap": self.cameraFrameLineCap.rawValue,
            "uiCustomizationLayer": self.customUILayerJSON,
            "helpAnimationImageContentMode": self.helpAnimationImageContentMode.rawValue,
            "multipageAnimationFrontImageContentMode": self.multipageAnimationFrontImageContentMode.rawValue,
            "multipageAnimationBackImageContentMode": self.multipageAnimationBackImageContentMode.rawValue,
            "livenessAnimationImageContentMode": self.livenessAnimationImageContentMode.rawValue,
            "borderBackgroundImageContentMode": self.borderBackgroundImageContentMode.rawValue,
            "colors": [
                "rfidProcessingScreenBackground": (colors?[DocReader.CustomizationColor.rfidProcessingScreenBackground.rawValue] as? UIColor)?.encode(),
                "rfidProcessingScreenHintLabelText": (colors?[DocReader.CustomizationColor.rfidProcessingScreenHintLabelText.rawValue] as? UIColor)?.encode(),
                "rfidProcessingScreenHintLabelBackground": (colors?[DocReader.CustomizationColor.rfidProcessingScreenHintLabelBackground.rawValue] as? UIColor)?.encode(),
                "rfidProcessingScreenProgressLabelText": (colors?[DocReader.CustomizationColor.rfidProcessingScreenProgressLabelText.rawValue] as? UIColor)?.encode(),
                "rfidProcessingScreenProgressBar": (colors?[DocReader.CustomizationColor.rfidProcessingScreenProgressBar.rawValue] as? UIColor)?.encode(),
                "rfidProcessingScreenProgressBarBackground": (colors?[DocReader.CustomizationColor.rfidProcessingScreenProgressBarBackground.rawValue] as? UIColor)?.encode(),
                "rfidProcessingScreenResultLabelText": (colors?[DocReader.CustomizationColor.rfidProcessingScreenResultLabelText.rawValue] as? UIColor)?.encode(),
                "rfidProcessingScreenLoadingBar": (colors?[DocReader.CustomizationColor.rfidProcessingScreenLoadingBar.rawValue] as? UIColor)?.encode(),
                "mdlProcessingScreenBackground": (colors?[DocReader.CustomizationColor.mdlProcessingScreenBackground.rawValue] as? UIColor)?.encode(),
                "mdlProcessingScreenHintLabelText": (colors?[DocReader.CustomizationColor.mdlProcessingScreenHintLabelText.rawValue] as? UIColor)?.encode(),
                "mdlProcessingScreenHintLabelBackground": (colors?[DocReader.CustomizationColor.mdlProcessingScreenHintLabelBackground.rawValue] as? UIColor)?.encode(),
                "mdlProcessingScreenProgressLabelText": (colors?[DocReader.CustomizationColor.mdlProcessingScreenProgressLabelText.rawValue] as? UIColor)?.encode(),
                "mdlProcessingScreenResultLabelText": (colors?[DocReader.CustomizationColor.mdlProcessingScreenResultLabelText.rawValue] as? UIColor)?.encode(),
                "mdlProcessingScreenLoadingBar": (colors?[DocReader.CustomizationColor.mdlProcessingScreenLoadingBar.rawValue] as? UIColor)?.encode(),
                "nextPageIdCardFront": (colors?[DocReader.CustomizationColor.nextPageIdCardFront.rawValue] as? UIColor)?.encode(),
                "nextPageIdCardBack": (colors?[DocReader.CustomizationColor.nextPageIdCardBack.rawValue] as? UIColor)?.encode(),
                "nextPagePassportShift": (colors?[DocReader.CustomizationColor.nextPagePassportShift.rawValue] as? UIColor)?.encode(),
                "nextPagePassportFlip": (colors?[DocReader.CustomizationColor.nextPagePassportFlip.rawValue] as? UIColor)?.encode()
            ],
            "fonts": [
                "rfidProcessingScreenHintLabel": (fonts?[DocReader.CustomizationFont.rfidProcessingScreenHintLabel.rawValue] as? UIFont)?.encode(),
                "rfidProcessingScreenProgressLabel": (fonts?[DocReader.CustomizationFont.rfidProcessingScreenProgressLabel.rawValue] as? UIFont)?.encode(),
                "rfidProcessingScreenResultLabel": (fonts?[DocReader.CustomizationFont.rfidProcessingScreenResultLabel.rawValue] as? UIFont)?.encode(),
                "mdlProcessingScreenHintLabel": (fonts?[DocReader.CustomizationFont.mdlProcessingScreenHintLabel.rawValue] as? UIFont)?.encode(),
                "mdlProcessingScreenProgressLabel": (fonts?[DocReader.CustomizationFont.mdlProcessingScreenProgressLabel.rawValue] as? UIFont)?.encode(),
                "mdlProcessingScreenResultLabel": (fonts?[DocReader.CustomizationFont.mdlProcessingScreenResultLabel.rawValue] as? UIFont)?.encode()
            ],
            "images": [
                "helpAnimation": (images?[DocReader.CustomizationImage.helpAnimation.rawValue] as? UIImage)?.encode(),
                "livenessAnimation": (images?[DocReader.CustomizationImage.livenessAnimation.rawValue] as? UIImage)?.encode(),
                "borderBackground": (images?[DocReader.CustomizationImage.borderBackground.rawValue] as? UIImage)?.encode(),
                "torchButtonOn": (images?[DocReader.CustomizationImage.torchButtonOn.rawValue] as? UIImage)?.encode(),
                "torchButtonOff": (images?[DocReader.CustomizationImage.torchButtonOff.rawValue] as? UIImage)?.encode(),
                "captureButton": (images?[DocReader.CustomizationImage.captureButton.rawValue] as? UIImage)?.encode(),
                "switchButton": (images?[DocReader.CustomizationImage.switchButton.rawValue] as? UIImage)?.encode(),
                "closeButton": (images?[DocReader.CustomizationImage.closeButton.rawValue] as? UIImage)?.encode(),
                "multipageButton": (images?[DocReader.CustomizationImage.multipageButton.rawValue] as? UIImage)?.encode(),
                "rfidProcessingScreenFailureImage": (images?[DocReader.CustomizationImage.rfidProcessingScreenFailure.rawValue] as? UIImage)?.encode(),
                "mdlProcessingScreenFailureImage": (images?[DocReader.CustomizationImage.mdlProcessingScreenFailure.rawValue] as? UIImage)?.encode(),
                "nextPageIdCardFront": (images?[DocReader.CustomizationImage.nextPageIdCardFront.rawValue] as? UIImage)?.encode(),
                "nextPageIdCardBack": (images?[DocReader.CustomizationImage.nextPageIdCardBack.rawValue] as? UIImage)?.encode(),
                "nextPagePassportShift": (images?[DocReader.CustomizationImage.nextPagePassportShift.rawValue] as? UIImage)?.encode(),
                "nextPagePassportFlipStart": (images?[DocReader.CustomizationImage.nextPagePassportFlipStart.rawValue] as? UIImage)?.encode(),
                "nextPagePassportFlipClean": (images?[DocReader.CustomizationImage.nextPagePassportFlipClean.rawValue] as? UIImage)?.encode(),
                "nextPagePassportFlipTop": (images?[DocReader.CustomizationImage.nextPagePassportFlipTop.rawValue] as? UIImage)?.encode(),
                "nextPagePassportFlipBottom": (images?[DocReader.CustomizationImage.nextPagePassportFlipBottom.rawValue] as? UIImage)?.encode()
            ],
            "timings": [
                "nextPageIdCardStartDelay": timings?[DocReader.CustomizationTiming.nextPageIdCardStartDelay.rawValue],
                "nextPageIdCardEndDelay": timings?[DocReader.CustomizationTiming.nextPageIdCardEndDelay.rawValue],
                "nextPagePassportShiftStartDelay": timings?[DocReader.CustomizationTiming.nextPagePassportShiftStartDelay.rawValue],
                "nextPagePassportShiftEndDelay": timings?[DocReader.CustomizationTiming.nextPagePassportShiftEndDelay.rawValue],
                "nextPagePassportFlipStartDelay": timings?[DocReader.CustomizationTiming.nextPagePassportFlipStartDelay.rawValue],
                "nextPagePassportFlipEndDelay": timings?[DocReader.CustomizationTiming.nextPagePassportFlipEndDelay.rawValue]
            ],
            "contentModes": [
                "nextPageIdCardFront": contentModes?[DocReader.CustomizationContentMode.nextPageIdCardFront.rawValue],
                "nextPageIdCardBack": contentModes?[DocReader.CustomizationContentMode.nextPageIdCardBack.rawValue]
            ],
        ]
    }
}

// MARK: - Functionality

public extension Functionality {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        for (k, v) in it {
            switch k {
            case("showTorchButton"): self.showTorchButton = v as! Bool
            case("showCloseButton"): self.showCloseButton = v as! Bool
            case("videoCaptureMotionControl"): self.videoCaptureMotionControl = v as! Bool
            case("showCaptureButton"): self.showCaptureButton = v as! Bool
            case("showChangeFrameButton"): self.showChangeFrameButton = v as! Bool
            case("showSkipNextPageButton"): self.showSkipNextPageButton = v as! Bool
            case("useAuthenticator"): self.isUseAuthenticator = v as! Bool
            case("skipFocusingFrames"): self.skipFocusingFrames = v as! Bool
            case("showCameraSwitchButton"): self.showCameraSwitchButton = v as! Bool
            case("displayMetadata"): self.showMetadataInfo = v as! Bool
            case("isZoomEnabled"): self.isZoomEnabled = v as! Bool
            case("recordScanningProcess"): self.recordScanningProcess = v as! Bool
            case("manualMultipageMode"): self.manualMultipageMode = v as! Bool
            case("singleResult"): self.singleResult = v as! Bool
            case("torchTurnedOn"): self.torchTurnedOn = v as! Bool
            case("preventScreenRecording"): self.preventScreenRecording = v as! Bool
            case("homeIndicatorAutoHide"): self.homeIndicatorAutoHide = v as! Bool
            case("showCaptureButtonDelayFromDetect"): self.showCaptureButtonDelayFromDetect = v as! TimeInterval
            case("showCaptureButtonDelayFromStart"): self.showCaptureButtonDelayFromStart = v as! TimeInterval
            case("forcePagesCount"): self.forcePagesCount = v as? NSNumber
            case("orientation"): self.orientation = UIInterfaceOrientationMask.decode(v)
            case("captureMode"): self.captureMode = CaptureMode(rawValue: v as! Int)!
            case("cameraPositionIOS"): self.cameraPosition = AVCaptureDevice.Position(rawValue: v as! Int)!
            case("cameraFrame"): self.cameraFrame = DocReaderFrame.decode(v)
            case("btDeviceName"): self.btDeviceName = v as? String
            case("zoomFactor"): self.zoomFactor = v as! CGFloat
            case("mdlTimeout"): self.mDLTimeout = v as! TimeInterval
            case("videoSessionPreset"): self.videoSessionPreset = AVCaptureSession.Preset.decode(v)
            case("videoOutputSettings"): self.videoOutputSettings = v as? [String: Any]
            default: break
            }
        }
        return self
    }
    func encode() -> [String: Any?] {
        return [
            "showTorchButton": self.showTorchButton,
            "showCloseButton": self.showCloseButton,
            "videoCaptureMotionControl": self.videoCaptureMotionControl,
            "showCaptureButton": self.showCaptureButton,
            "showChangeFrameButton": self.showChangeFrameButton,
            "showSkipNextPageButton": self.showSkipNextPageButton,
            "useAuthenticator": self.isUseAuthenticator,
            "skipFocusingFrames": self.skipFocusingFrames,
            "showCameraSwitchButton": self.showCameraSwitchButton,
            "displayMetadata": self.showMetadataInfo,
            "isZoomEnabled": self.isZoomEnabled,
            "recordScanningProcess": self.recordScanningProcess,
            "manualMultipageMode": self.manualMultipageMode,
            "singleResult": self.singleResult,
            "torchTurnedOn": self.torchTurnedOn,
            "preventScreenRecording": self.preventScreenRecording,
            "homeIndicatorAutoHide": self.homeIndicatorAutoHide,
            "showCaptureButtonDelayFromDetect": self.showCaptureButtonDelayFromDetect,
            "showCaptureButtonDelayFromStart": self.showCaptureButtonDelayFromStart,
            "forcePagesCount": self.forcePagesCount,
            "orientation": self.orientation.encode(),
            "captureMode": self.captureMode.rawValue,
            "cameraPositionIOS": self.cameraPosition.rawValue,
            "cameraFrame": self.cameraFrame.encode(),
            "btDeviceName": self.btDeviceName,
            "zoomFactor": self.zoomFactor,
            "mdlTimeout": self.mDLTimeout,
            "videoSessionPreset": self.videoSessionPreset?.encode(),
            "videoOutputSettings": self.videoOutputSettings,
        ]
    }
}

// MARK: - ProcessParams

public extension ProcessParams {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        for (k, v) in it {
            switch k {
            case("multipageProcessing"): self.multipageProcessing = v as? NSNumber
            case("logs"): self.logs = v as? NSNumber
            case("debugSaveImages"): self.debugSaveImages = v as? NSNumber
            case("debugSaveLogs"): self.debugSaveLogs = v as? NSNumber
            case("returnUncroppedImage"): self.returnUncroppedImage = v as? NSNumber
            case("debugSaveCroppedImages"): self.debugSaveCroppedImages = v as? NSNumber
            case("disableFocusingCheck"): self.disableFocusingCheck = v as? NSNumber
            case("debugSaveRFIDSession"): self.debugSaveRFIDSession = v as? NSNumber
            case("doublePageSpread"): self.doublePageSpread = v as? NSNumber
            case("manualCrop"): self.manualCrop = v as? NSNumber
            case("integralImage"): self.integralImage = v as? NSNumber
            case("returnCroppedBarcode"): self.returnCroppedBarcode = v as? NSNumber
            case("checkRequiredTextFields"): self.checkRequiredTextFields = v as? NSNumber
            case("depersonalizeLog"): self.depersonalizeLog = v as? NSNumber
            case("generateDoublePageSpreadImage"): self.generateDoublePageSpreadImage = v as? NSNumber
            case("alreadyCropped"): self.alreadyCropped = v as? NSNumber
            case("matchTextFieldMask"): self.matchTextFieldMask = v as? NSNumber
            case("updateOCRValidityByGlare"): self.updateOCRValidityByGlare = v as? NSNumber
            case("noGraphics"): self.noGraphics = v as? NSNumber
            case("multiDocOnImage"): self.multiDocOnImage = v as? NSNumber
            case("parseBarcodes"): self.parseBarcodes = v as? NSNumber
            case("shouldReturnPackageForReprocess"): self.shouldReturnPackageForReprocess = v as? NSNumber
            case("disablePerforationOCR"): self.disablePerforationOCR = v as? NSNumber
            case("respectImageQuality"): self.respectImageQuality = v as? NSNumber
            case("strictImageQuality"): self.strictImageQuality = v as? NSNumber
            case("splitNames"): self.splitNames = v as? NSNumber
            case("doDetectCan"): self.doDetectCan = v as? NSNumber
            case("useFaceApi"): self.useFaceApi = v as? NSNumber
            case("useAuthenticityCheck"): self.useAuthenticityCheck = v as? NSNumber
            case("checkHologram"): self.checkHologram = v as? NSNumber
            case("generateNumericCodes"): self.generateNumericCodes = v as? NSNumber
            case("strictBarcodeDigitalSignatureCheck"): self.strictBarcodeDigitalSignatureCheck = v as? NSNumber
            case("selectLongestNames"): self.selectLongestNames = v as? NSNumber
            case("generateDTCVC"): self.generateDTCVC = v as? NSNumber
            case("strictDLCategoryExpiry"): self.strictDLCategoryExpiry = v as? NSNumber
            case("generateAlpha2Codes"): self.generateAlpha2Codes = v as? NSNumber
            case("disableAuthResolutionFilter"): self.disableAuthResolutionFilter = v as? NSNumber
            case("strictSecurityChecks"): self.strictSecurityChecks = v as? NSNumber
            case("returnTransliteratedFields"): self.returnTransliteratedFields = v as? NSNumber
            case("checkCaptureProcessIntegrity"): self.checkCaptureProcessIntegrity = v as? NSNumber
            case("strictExpiryDate"): self.strictExpiryDate = v as? NSNumber
            case("debugSaveBinarySession"): self.debugSaveBinarySession = v as? NSNumber
            case("checkVDS"): self.checkVDS = v as? NSNumber
            case("strictAgeCheck"): self.strictAgeCheck = v as? NSNumber
            case("measureSystem"): self.measureSystem = MeasureSystem(rawValue: v as! Int)!
            case("barcodeParserType"): self.barcodeParserType = v as? NSNumber
            case("perspectiveAngle"): self.perspectiveAngle = v as? NSNumber
            case("minDPI"): self.minDPI = v as? NSNumber
            case("imageDpiOutMax"): self.imageDpiOutMax = v as? NSNumber
            case("forceDocID"): self.forceDocID = v as? NSNumber
            case("forceDocFormat"): self.forceDocFormat = v as? NSNumber
            case("shiftExpiryDate"): self.shiftExpiryDate = v as? NSNumber
            case("minimalHolderAge"): self.minimalHolderAge = v as? NSNumber
            case("imageOutputMaxHeight"): self.imageOutputMaxHeight = v as? NSNumber
            case("imageOutputMaxWidth"): self.imageOutputMaxWidth = v as? NSNumber
            case("processAuth"): self.processAuth = v as? NSNumber
            case("convertCase"): self.convertCase = TextProcessing.decode(v)
            case("logLevel"): self.logLevel = (v as? String).map { RGLLogLevel(rawValue: $0) }
            case("mrzDetectMode"): self.mrzDetectMode = v as? NSNumber
            case("pdfPagesLimit"): self.pdfPagesLimit = v as? NSNumber
            case("dateFormat"): self.dateFormat = v as! String
            case("scenario"): self.scenario = v as? String
            case("captureButtonScenario"): self.captureButtonScenario = v as? String
            case("timeout"): self.timeout = v as? NSNumber
            case("timeoutFromFirstDetect"): self.timeoutFromFirstDetect = v as? NSNumber
            case("timeoutFromFirstDocType"): self.timeoutFromFirstDocType = v as? NSNumber
            case("documentAreaMin"): self.documentAreaMin = v as? NSNumber
            case("timeoutLiveness"): self.timeoutLiveness = v as? NSNumber
            case("documentIDList"): self.documentIDList = v as? [NSNumber]
            case("barcodeTypes"): self.barcodeTypes = v as? [NSNumber]
            case("fieldTypesFilter"): self.fieldTypesFilter = v as? [NSNumber]
            case("documentGroupFilter"): self.documentGroupFilter = v as? [NSNumber]
            case("lcidIgnoreFilter"): self.lcidIgnoreFilter = v as? [NSNumber]
            case("lcidFilter"): self.lcidFilter = v as? [NSNumber]
            case("fieldTypesIgnoreFilter"): self.fieldTypesIgnoreFilter = v as? [NSNumber]
            case("mrzFormatsFilter"): self.setValue(v, forKey: "mrzFormatsFilter")
            case("resultTypeOutput"): self.resultTypeOutput = v as? [NSNumber]
            case("imageQA"): self.imageQA.update(v as! [String: Any])
            case("authenticityParams"): self.authenticityParams = (self.authenticityParams ?? AuthenticityParams.default()).update(v as! [String: Any])
            case("rfidParams"): self.rfidParams = RFIDParams.decode(v)
            case("faceApiParams"): self.faceApiParams = FaceAPIParams.decode(v)
            case("backendProcessingConfig"): self.backendProcessingConfig = RGLBackendProcessingConfig.decode(v)
            case("bsiTr03135"): self.bsiTr03135 = DocReader.Bsi.decode(v)
            case("customParams"): self.customParams = v as? [AnyHashable: Any]
            default: break
            }
        }
        return self
    }
    func encode() -> [String: Any?] {
        return [
            "multipageProcessing": self.multipageProcessing,
            "logs": self.logs,
            "debugSaveImages": self.debugSaveImages,
            "debugSaveLogs": self.debugSaveLogs,
            "returnUncroppedImage": self.returnUncroppedImage,
            "debugSaveCroppedImages": self.debugSaveCroppedImages,
            "disableFocusingCheck": self.disableFocusingCheck,
            "debugSaveRFIDSession": self.debugSaveRFIDSession,
            "doublePageSpread": self.doublePageSpread,
            "manualCrop": self.manualCrop,
            "integralImage": self.integralImage,
            "returnCroppedBarcode": self.returnCroppedBarcode,
            "checkRequiredTextFields": self.checkRequiredTextFields,
            "depersonalizeLog": self.depersonalizeLog,
            "generateDoublePageSpreadImage": self.generateDoublePageSpreadImage,
            "alreadyCropped": self.alreadyCropped,
            "matchTextFieldMask": self.matchTextFieldMask,
            "updateOCRValidityByGlare": self.updateOCRValidityByGlare,
            "noGraphics": self.noGraphics,
            "multiDocOnImage": self.multiDocOnImage,
            "parseBarcodes": self.parseBarcodes,
            "shouldReturnPackageForReprocess": self.shouldReturnPackageForReprocess,
            "disablePerforationOCR": self.disablePerforationOCR,
            "respectImageQuality": self.respectImageQuality,
            "strictImageQuality": self.strictImageQuality,
            "splitNames": self.splitNames,
            "doDetectCan": self.doDetectCan,
            "useFaceApi": self.useFaceApi,
            "useAuthenticityCheck": self.useAuthenticityCheck,
            "checkHologram": self.checkHologram,
            "generateNumericCodes": self.generateNumericCodes,
            "strictBarcodeDigitalSignatureCheck": self.strictBarcodeDigitalSignatureCheck,
            "selectLongestNames": self.selectLongestNames,
            "generateDTCVC": self.generateDTCVC,
            "strictDLCategoryExpiry": self.strictDLCategoryExpiry,
            "generateAlpha2Codes": self.generateAlpha2Codes,
            "disableAuthResolutionFilter": self.disableAuthResolutionFilter,
            "strictSecurityChecks": self.strictSecurityChecks,
            "returnTransliteratedFields": self.returnTransliteratedFields,
            "checkCaptureProcessIntegrity": self.checkCaptureProcessIntegrity,
            "strictExpiryDate": self.strictExpiryDate,
            "debugSaveBinarySession": self.debugSaveBinarySession,
            "checkVDS": self.checkVDS,
            "strictAgeCheck": self.strictAgeCheck,
            "measureSystem": self.measureSystem.rawValue,
            "barcodeParserType": self.barcodeParserType,
            "perspectiveAngle": self.perspectiveAngle,
            "minDPI": self.minDPI,
            "imageDpiOutMax": self.imageDpiOutMax,
            "forceDocID": self.forceDocID,
            "forceDocFormat": self.forceDocFormat,
            "shiftExpiryDate": self.shiftExpiryDate,
            "minimalHolderAge": self.minimalHolderAge,
            "imageOutputMaxHeight": self.imageOutputMaxHeight,
            "imageOutputMaxWidth": self.imageOutputMaxWidth,
            "processAuth": self.processAuth,
            "convertCase": self.convertCase?.encode(),
            "logLevel": self.logLevel?.rawValue,
            "mrzDetectMode": self.mrzDetectMode,
            "pdfPagesLimit": self.pdfPagesLimit,
            "dateFormat": self.dateFormat,
            "scenario": self.scenario,
            "captureButtonScenario": self.captureButtonScenario,
            "timeout": self.timeout,
            "timeoutFromFirstDetect": self.timeoutFromFirstDetect,
            "timeoutFromFirstDocType": self.timeoutFromFirstDocType,
            "documentAreaMin": self.documentAreaMin,
            "timeoutLiveness": self.timeoutLiveness,
            "documentIDList": self.documentIDList,
            "barcodeTypes": self.barcodeTypes,
            "fieldTypesFilter": self.fieldTypesFilter,
            "documentGroupFilter": self.documentGroupFilter,
            "lcidIgnoreFilter": self.lcidIgnoreFilter,
            "lcidFilter": self.lcidFilter,
            "fieldTypesIgnoreFilter": self.fieldTypesIgnoreFilter,
            "mrzFormatsFilter": self.value(forKey: "mrzFormatsFilter"),
            "resultTypeOutput": self.resultTypeOutput,
            "imageQA": self.imageQA.encode(),
            "authenticityParams": self.authenticityParams?.encode(),
            "rfidParams": self.rfidParams?.encode(),
            "faceApiParams": self.faceApiParams?.encode(),
            "backendProcessingConfig": self.backendProcessingConfig?.encode(),
            "bsiTr03135": self.bsiTr03135?.encode(),
            "customParams": self.customParams,
        ]
    }
}

// MARK: - DataGroups

public extension DataGroup {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self().update(it)
    }
    @discardableResult
    func update(_ it: [String: Any]) -> Self {
        let count = self is eIDDataGroup ? 21 : self is ePassportDataGroup ? 16 : 14
        for index in 1...count {
            if let prop = it["DG\(index)"] as? Bool { self.setValue(prop, forKey: "dG\(index)") }
        }
        return self
    }
    func encode() -> [String: Any?] {
        var result: [String: Any?] = [:]
        let count = self is eIDDataGroup ? 21 : self is ePassportDataGroup ? 16 : 14
        for index in 1...count { result["DG\(index)"] = self.value(forKey: "dG\(index)") }
        return result
    }
}

// MARK: - Converting

extension UIColor {
    // Create from a hex integer; supports #RGB, #ARGB, #RRGGBB, #AARRGGBB semantics
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? Int else { return nil }
        var hex = String(UInt32(truncatingIfNeeded: it), radix: 16, uppercase: true)
        // If length is 5 or 7, pad a leading 0 to restore a lost leading nibble
        if hex.count == 5 || hex.count == 7 { hex = "0" + hex }
        
        let a, r, g, b: CGFloat
        switch hex.count {
        case 3: // RGB
            a = 1.0
            r = Self.component(from: hex, start: 0, length: 1)
            g = Self.component(from: hex, start: 1, length: 1)
            b = Self.component(from: hex, start: 2, length: 1)
        case 4: // ARGB
            a = Self.component(from: hex, start: 0, length: 1)
            r = Self.component(from: hex, start: 1, length: 1)
            g = Self.component(from: hex, start: 2, length: 1)
            b = Self.component(from: hex, start: 3, length: 1)
        case 6: // RRGGBB
            a = 1.0
            r = Self.component(from: hex, start: 0, length: 2)
            g = Self.component(from: hex, start: 2, length: 2)
            b = Self.component(from: hex, start: 4, length: 2)
        case 8: // AARRGGBB
            a = Self.component(from: hex, start: 0, length: 2)
            r = Self.component(from: hex, start: 2, length: 2)
            g = Self.component(from: hex, start: 4, length: 2)
            b = Self.component(from: hex, start: 6, length: 2)
        default:
            assertionFailure("Invalid color value: #\(hex). Expected #RGB, #ARGB, #RRGGBB, or #AARRGGBB")
            return nil
        }
        return Self(red: r, green: g, blue: b, alpha: a)
    }
    
    // AARRGGBB integer representation as Int
    func encode() -> Int {
        var r: CGFloat = 0, g: CGFloat = 0, b: CGFloat = 0, a: CGFloat = 0
        if !getRed(&r, green: &g, blue: &b, alpha: &a) {
            if let comps = cgColor.components {
                if comps.count == 2 { r = comps[0]; g = comps[0]; b = comps[0]; a = comps[1] }
                else if comps.count >= 4 { r = comps[0]; g = comps[1]; b = comps[2]; a = comps[3] }
            }
        }
        let aa = UInt32(lroundf(Float(a * 255)))
        let rr = UInt32(lroundf(Float(r * 255)))
        let gg = UInt32(lroundf(Float(g * 255)))
        let bb = UInt32(lroundf(Float(b * 255)))
        let composed: UInt32 = (aa << 24) | (rr << 16) | (gg << 8) | bb
        return Int(truncatingIfNeeded: composed)
    }
    
    private static func component(from hex: String, start: Int, length: Int) -> CGFloat {
        let startIdx = hex.index(hex.startIndex, offsetBy: start)
        let endIdx = hex.index(startIdx, offsetBy: length)
        let substr = String(hex[startIdx..<endIdx])
        let full = (length == 2) ? substr : substr + substr
        let value = UInt32(full, radix: 16) ?? 0
        return CGFloat(value) / 255.0
    }
}

extension UIFont {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any] else { return nil }
        return Self(name: it["name"] as! String,
                    size: it["size"] as! CGFloat)
    }
    func encode() -> [String: Any?] {
        return ["name": self.fontName, "size": self.pointSize]
    }
}

extension DocReaderFrame {
    static func decode(_ it: Any?) -> Self {
        switch it as? String {
        case "id1": return .scenarioDefault
        case "max": return .max
        case "document": return .document
        default: return .none
        }
    }
    func encode() -> String {
        switch self {
        case .scenarioDefault: return "id1"
        case .max: return "max"
        case .document: return "document"
        default: return "none"
        }
    }
}

extension UIInterfaceOrientationMask {
    static func decode(_ it: Any?) -> Self {
        switch it as? Int {
        case 0: return .all
        case 2: return .landscape
        case 3: return .landscapeLeft
        case 4: return .landscapeRight
        default: return .portrait
        }
    }
    func encode() -> Int {
        switch self {
        case .portrait: return 1
        case .landscape: return 2
        case .landscapeLeft: return 3
        case .landscapeRight: return 4
        default: return 0
        }
    }
}

extension AVCaptureSession.Preset {
    static func decode(_ it: Any?) -> Self {
        switch it as? Int {
        case 0: return .low
        case 1: return .medium
        case 2: return .high
        case 3: return .photo
        case 4: return .inputPriority
        case 6: return .hd1280x720
        case 8: return .hd4K3840x2160
        case 9: return .iFrame960x540
        case 10: return .iFrame1280x720
        case 12: return .vga640x480
        case 13: return .cif352x288
        default: return .hd1920x1080
        }
    }
    func encode() -> Int {
        switch self {
        case .medium: return 1
        case .high: return 2
        case .photo: return 3
        case .inputPriority: return 4
        case .hd1280x720: return 6
        case .hd1920x1080: return 7
        case .hd4K3840x2160: return 8
        case .iFrame960x540: return 9
        case .iFrame1280x720: return 10
        case .vga640x480: return 12
        case .cif352x288: return 13
        default: return 0
        }
    }
}

extension TextProcessing {
    static func decode(_ it: Any?) -> TextProcessing {
        switch it as? Int {
        case 1: return .uppercase()
        case 2: return .lowercase()
        case 3: return .capital()
        default: return .noChange()
        }
    }
    func encode() -> Any? {
        return self.value(forKey: "rawValue")
    }
}

extension ImageQualityCheckType {
    static func decode(_ it: Any?) -> Self {
        switch it as? Int {
        case 1: return .imageFocus
        case 2: return .imageResolution
        case 3: return .imageColorness
        case 4: return .imagePerspective
        case 5: return .imageBounds
        case 6: return .screenCapture
        case 7: return .portrait
        case 8: return .handwritten
        case 9: return .brightness
        case 10: return .occlusion
        default: return .imageGlares
        }
    }
    func encode() -> Int {
        switch self {
        case .imageFocus: return 1
        case .imageResolution: return 2
        case .imageColorness: return 3
        case .imagePerspective: return 4
        case .imageBounds: return 5
        case .screenCapture: return 6
        case .portrait: return 7
        case .handwritten: return 8
        case .brightness: return 9
        case .occlusion: return 10
        default: return 0
        }
    }
}

extension DocReader.CustomizationColor {
    static func fromDartKey(_ key: String) -> Self? {
        switch key {
        case "rfidProcessingScreenBackground": return .rfidProcessingScreenBackground
        case "rfidProcessingScreenHintLabelText": return .rfidProcessingScreenHintLabelText
        case "rfidProcessingScreenHintLabelBackground": return .rfidProcessingScreenHintLabelBackground
        case "rfidProcessingScreenProgressLabelText": return .rfidProcessingScreenProgressLabelText
        case "rfidProcessingScreenProgressBar": return .rfidProcessingScreenProgressBar
        case "rfidProcessingScreenProgressBarBackground": return .rfidProcessingScreenProgressBarBackground
        case "rfidProcessingScreenResultLabelText": return .rfidProcessingScreenResultLabelText
        case "rfidProcessingScreenLoadingBar": return .rfidProcessingScreenLoadingBar
        case "mdlProcessingScreenBackground": return .mdlProcessingScreenBackground
        case "mdlProcessingScreenHintLabelText": return .mdlProcessingScreenHintLabelText
        case "mdlProcessingScreenHintLabelBackground": return .mdlProcessingScreenHintLabelBackground
        case "mdlProcessingScreenProgressLabelText": return .mdlProcessingScreenProgressLabelText
        case "mdlProcessingScreenResultLabelText": return .mdlProcessingScreenResultLabelText
        case "mdlProcessingScreenLoadingBar": return .mdlProcessingScreenLoadingBar
        case "nextPageIdCardFront": return .nextPageIdCardFront
        case "nextPageIdCardBack": return .nextPageIdCardBack
        case "nextPagePassportShift": return .nextPagePassportShift
        case "nextPagePassportFlip": return .nextPagePassportFlip
        default: return nil
        }
    }
}

extension DocReader.CustomizationFont {
    static func fromDartKey(_ key: String) -> Self? {
        switch key {
        case "rfidProcessingScreenHintLabel": return .rfidProcessingScreenHintLabel
        case "rfidProcessingScreenProgressLabel": return .rfidProcessingScreenProgressLabel
        case "rfidProcessingScreenResultLabel": return .rfidProcessingScreenResultLabel
        case "mdlProcessingScreenHintLabel": return .mdlProcessingScreenHintLabel
        case "mdlProcessingScreenProgressLabel": return .mdlProcessingScreenProgressLabel
        case "mdlProcessingScreenResultLabel": return .mdlProcessingScreenResultLabel
        default: return nil
        }
    }
}

extension DocReader.CustomizationImage {
    static func fromDartKey(_ key: String) -> Self? {
        switch key {
        case "helpAnimation": return .helpAnimation
        case "livenessAnimation": return .livenessAnimation
        case "borderBackground": return .borderBackground
        case "torchButtonOn": return .torchButtonOn
        case "torchButtonOff": return .torchButtonOff
        case "captureButton": return .captureButton
        case "switchButton": return .switchButton
        case "closeButton": return .closeButton
        case "multipageButton": return .multipageButton
        case "rfidProcessingScreenFailureImage": return .rfidProcessingScreenFailure
        case "mdlProcessingScreenFailureImage": return .mdlProcessingScreenFailure
        case "nextPageIdCardFront": return .nextPageIdCardFront
        case "nextPageIdCardBack": return .nextPageIdCardBack
        case "nextPagePassportShift": return .nextPagePassportShift
        case "nextPagePassportFlipStart": return .nextPagePassportFlipStart
        case "nextPagePassportFlipClean": return .nextPagePassportFlipClean
        case "nextPagePassportFlipTop": return .nextPagePassportFlipTop
        case "nextPagePassportFlipBottom": return .nextPagePassportFlipBottom
        default: return nil
        }
    }
}

extension DocReader.CustomizationTiming {
    static func fromDartKey(_ key: String) -> Self? {
        switch key {
        case "nextPageIdCardStartDelay": return .nextPageIdCardStartDelay
        case "nextPageIdCardEndDelay": return .nextPageIdCardEndDelay
        case "nextPagePassportShiftStartDelay": return .nextPagePassportShiftStartDelay
        case "nextPagePassportShiftEndDelay": return .nextPagePassportShiftEndDelay
        case "nextPagePassportFlipStartDelay": return .nextPagePassportFlipStartDelay
        case "nextPagePassportFlipEndDelay": return .nextPagePassportFlipEndDelay
        default: return nil
        }
    }
}

extension DocReader.CustomizationContentMode {
    static func fromDartKey(_ key: String) -> Self? {
        switch key {
        case "nextPageIdCardFront": return .nextPageIdCardFront
        case "nextPageIdCardBack": return .nextPageIdCardBack
        default: return nil
        }
    }
}
