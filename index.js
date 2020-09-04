import { NativeModules } from 'react-native'
const { RNRegulaDocumentReader } = NativeModules

// Classes

class ScenarioClass {
    constructor() {
        this.RGLDocReaderOrientation = {
            GLDocReaderOrientationRotate: 0,
            RGLDocReaderOrientationPortrait: 1,
            RGLDocReaderOrientationLandscape: 2
        }
        this.RGLDocReaderFrame = {
            RGLDocReaderFrameScenarioDefault: 0,
            RGLDocReaderFrameMax: 1,
            RGLDocReaderFrameNone: 2,
            RGLDocReaderFrameDocument: 3
        }
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ScenarioClass();
        result.name = jsonObject["name"]
        result.caption = jsonObject["caption"]
        result.description = jsonObject["description"]
        result.uvTorch = jsonObject["uvTorch"]
        result.frame = jsonObject["frame"]
        result.frameKWHLandscape = jsonObject["frameKWHLandscape"]
        result.frameKWHPortrait = jsonObject["frameKWHPortrait"]
        result.barcodeExt = jsonObject["barcodeExt"]
        result.faceExt = jsonObject["faceExt"]
        result.multiPageOff = jsonObject["multiPageOff"]
        result.frameOrientation = jsonObject["frameOrientation"]
        result.seriesProcessMode = jsonObject["seriesProcessMode"]
        result.frameKWHLandscape = jsonObject["frameKWHLandscape"]
        result.frameKWHPortrait = jsonObject["frameKWHPortrait"]
        result.frameKWHDoublePageSpreadPortrait = jsonObject["frameKWHDoublePageSpreadPortrait"]
        result.frameKWHDoublePageSpreadLandscape = jsonObject["frameKWHDoublePageSpreadLandscape"]
        return result
    }
}

class FieldRect {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const rect = new FieldRect();
        rect.bottom = jsonObject["bottom"]
        rect.top = jsonObject["top"]
        rect.left = jsonObject["left"]
        rect.right = jsonObject["right"]
        return rect
    }
}

class DocumentReaderGraphicField {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const field = new DocumentReaderGraphicField();
        field.sourceType = jsonObject["sourceType"]
        field.fieldType = jsonObject["fieldType"]
        field.fieldName = jsonObject["fieldName"]
        field.lightType = jsonObject["lightType"]
        field.lightName = jsonObject["lightName"]
        field.fieldRect = FieldRect.fromJson(jsonObject["fieldRect"])
        field.value = jsonObject["value"]
        field.width = jsonObject["width"]
        field.height = jsonObject["height"]
        field.pageIndex = jsonObject["pageIndex"]
        return field
    }
}

class DocumentReaderGraphicResult {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderGraphicResult();
        result.fields = []
        if (jsonObject["fields"] != null)
            for (const i in jsonObject["fields"])
                result.fields.push(DocumentReaderGraphicField.fromJson(jsonObject["fields"][i]))
        return result
    }
}

class Rect {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Rect();
        result.left = jsonObject["left"]
        result.right = jsonObject["right"]
        result.top = jsonObject["top"]
        result.bottom = jsonObject["bottom"]
        return result
    }
}

class DocumentReaderValue {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderValue();
        result.pageIndex = jsonObject["pageIndex"]
        result.sourceType = jsonObject["sourceType"]
        result.value = jsonObject["value"]
        result.originalValue = jsonObject["originalValue"]
        result.boundRect = Rect.fromJson(jsonObject["boundRect"])
        result.validity = jsonObject["validity"]
        result.comparison = {}
        if (jsonObject["comparison"] != null)
            for (const i in jsonObject["comparison"])
                result.comparison[i] = jsonObject["comparison"][i]
        return result
    }
}

class DocumentReaderTextField {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderTextField();
        result.fieldType = jsonObject["fieldType"]
        result.lcid = jsonObject["lcid"]
        result.lcidName = jsonObject["lcidName"]
        result.fieldName = jsonObject["fieldName"]
        result.status = jsonObject["status"]
        result.value = DocumentReaderValue.fromJson(jsonObject["value"])
        result.values = []
        if (jsonObject["values"] != null)
            for (const i in jsonObject["values"])
                result.values.push(DocumentReaderValue.fromJson(jsonObject["values"][i]))
        return result
    }
}

class DocumentReaderTextResult {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderTextResult();
        result.status = jsonObject["status"]
        result.fields = []
        if (jsonObject["fields"] != null)
            for (const i in jsonObject["fields"])
                result.fields.push(DocumentReaderTextField.fromJson(jsonObject["fields"][i]))
        return result
    }
}

class Coordinate {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Coordinate();
        result.x = jsonObject["x"]
        result.y = jsonObject["y"]
        return result
    }
}

class ElementPosition {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ElementPosition();
        result.docFormat = jsonObject["docFormat"]
        result.width = jsonObject["width"]
        result.height = jsonObject["height"]
        result.angle = jsonObject["angle"]
        result.dpi = jsonObject["dpi"]
        result.pageIndex = jsonObject["pageIndex"]
        result.inverse = jsonObject["inverse"]
        result.perspectiveTr = jsonObject["perspectiveTr"]
        result.objArea = jsonObject["objArea"]
        result.objIntAngleDev = jsonObject["objIntAngleDev"]
        result.resultStatus = jsonObject["resultStatus"]
        result.center = Coordinate.fromJson(jsonObject["center"])
        result.leftTop = Coordinate.fromJson(jsonObject["leftTop"])
        result.leftBottom = Coordinate.fromJson(jsonObject["leftBottom"])
        result.rightTop = Coordinate.fromJson(jsonObject["rightTop"])
        result.rightBottom = Coordinate.fromJson(jsonObject["rightBottom"])
        return result
    }
}

class ImageQuality {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ImageQuality();
        result.featureType = jsonObject["featureType"]
        result.result = jsonObject["result"]
        result.type = jsonObject["type"]
        return result
    }
}

class ImageQualityGroup {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ImageQualityGroup();
        result.count = jsonObject["count"]
        result.result = jsonObject["result"]
        result.imageQualityList = []
        if (jsonObject["imageQualityList"] != null)
            for (const i in jsonObject["imageQualityList"])
                result.imageQualityList.push(ImageQuality.fromJson(jsonObject["imageQualityList"][i]))
        return result
    }
}

class DocumentReaderDocumentType {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderDocumentType();
        result.pageIndex = jsonObject["pageIndex"]
        result.name = jsonObject["name"]
        result.documentID = jsonObject["documentID"]
        result.ICAOCode = jsonObject["ICAOCode"]
        result.dType = jsonObject["dType"]
        result.FDSID = []
        result.dFormat = jsonObject["dFormat"]
        result.dMRZ = jsonObject["dMRZ"]
        result.dDescription = jsonObject["dDescription"]
        result.dYear = jsonObject["dYear"]
        result.dCountryName = jsonObject["dCountryName"]
        result.FDSID = []
        if (jsonObject["FDSID"] != null)
            for (const i in jsonObject["FDSID"])
                result.FDSID.push(jsonObject["FDSID"][i])
        return result
    }
}

class DocumentReaderJsonResultGroup {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderJsonResultGroup();
        result.resultType = jsonObject["resultType"]
        result.lightType = jsonObject["lightType"]
        result.pageIdx = jsonObject["pageIdx"]
        result.jsonResult = jsonObject["jsonResult"]
        return result
    }
}

class DocumentReaderJsonResult {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderJsonResult();
        result.results = []
        if (jsonObject["results"] != null)
            for (const i in jsonObject["results"])
                result.results.push(DocumentReaderJsonResultGroup.fromJson(jsonObject["results"][i]))
        return result
    }
}

class DocumentReaderNotification {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderNotification();
        result.code = jsonObject["code"]
        result.value = jsonObject["value"]
        result.number = jsonObject["number"]
        return result
    }
}

class AccessControlProcedureType {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new AccessControlProcedureType();
        result.activeOptionIdx = jsonObject["activeOptionIdx"]
        result.status = jsonObject["status"]
        result.type = jsonObject["type"]
        result.notifications = []
        if (jsonObject["notifications"] != null)
            for (const i in jsonObject["notifications"])
                result.notifications.push(jsonObject["notifications"][i])
        return result
    }
}

class FileData {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FileData();
        result.data = jsonObject["data"]
        result.length = jsonObject["length"]
        result.status = jsonObject["status"]
        result.type = jsonObject["type"]
        return result
    }
}

class CertificateData {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new CertificateData();
        result.data = jsonObject["data"]
        result.length = jsonObject["length"]
        return result
    }
}

class SecurityObjectCertificates {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new SecurityObjectCertificates();
        result.securityObject = CertificateData.fromJson(jsonObject["securityObject"])
        return result
    }
}

class File {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new File();
        result.fileData = FileData.fromJson(jsonObject["fileData"])
        result.fileID = jsonObject["fileID"]
        result.pAStatus = jsonObject["pAStatus"]
        result.readingStatus = jsonObject["readingStatus"]
        result.readingTime = jsonObject["readingTime"]
        result.retypesult = jsonObject["type"]
        result.certificates = SecurityObjectCertificates.fromJson(jsonObject["certificates"])
        result.notifications = []
        result.docFieldsText = []
        result.docFieldsGraphics = []
        result.docFieldsOriginals = []
        if (jsonObject["notifications"] != null)
            for (const i in jsonObject["notifications"])
                result.notifications.push(jsonObject["notifications"][i])
        if (jsonObject["docFieldsText"] != null)
            for (const i in jsonObject["docFieldsText"])
                result.docFieldsText.push(jsonObject["docFieldsText"][i])
        if (jsonObject["docFieldsGraphics"] != null)
            for (const i in jsonObject["docFieldsGraphics"])
                result.docFieldsGraphics.push(jsonObject["docFieldsGraphics"][i])
        if (jsonObject["docFieldsOriginals"] != null)
            for (const i in jsonObject["docFieldsOriginals"])
                result.docFieldsOriginals.push(jsonObject["docFieldsOriginals"][i])
        return result
    }
}

class Application {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Application();
        result.applicationID = jsonObject["applicationID"]
        result.dataHashAlgorithm = jsonObject["dataHashAlgorithm"]
        result.status = jsonObject["status"]
        result.type = jsonObject["type"]
        result.unicodeVersion = jsonObject["unicodeVersion"]
        result.version = jsonObject["version"]
        result.files = []
        if (jsonObject["files"] != null)
            for (const i in jsonObject["files"])
                result.files.push(File.fromJson(jsonObject["files"][i]))
        return result
    }
}

class Value {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Value();
        result.data = jsonObject["data"]
        result.length = jsonObject["length"]
        result.status = jsonObject["status"]
        result.type = jsonObject["type"]
        result.format = jsonObject["format"]
        return result
    }
}

class Attribute {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Attribute();
        result.type = jsonObject["type"]
        result.value = Value.fromJson(jsonObject["value"])
        return result
    }
}

class Authority {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Authority();
        result.data = jsonObject["data"]
        result.friendlyName = Value.fromJson(jsonObject["friendlyName"])
        result.attributes = []
        if (jsonObject["attributes"] != null)
            for (const i in jsonObject["attributes"])
                result.attributes.push(Attribute.fromJson(jsonObject["attributes"][i]))
        return result
    }
}

class Extension {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Extension();
        result.data = jsonObject["data"]
        result.type = jsonObject["type"]
        return result
    }
}

class Validity {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Validity();
        result.notAfter = Value.fromJson(jsonObject["notAfter"])
        result.notBefore = Value.fromJson(jsonObject["notBefore"])
        return result
    }
}

class CertificateChain {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new CertificateChain();
        result.fileName = Value.fromJson(jsonObject["fileName"])
        result.issuer = Authority.fromJson(jsonObject["issuer"])
        result.origin = jsonObject["origin"]
        result.paStatus = jsonObject["paStatus"]
        result.serialNumber = jsonObject["serialNumber"]
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"]
        result.subject = Authority.fromJson(jsonObject["subject"])
        result.subjectPKAlgorithm = jsonObject["subjectPKAlgorithm"]
        result.type = jsonObject["type"]
        result.validity = Validity.fromJson(jsonObject["validity"])
        result.version = jsonObject["version"]
        result.extensions = []
        result.notifications = []
        if (jsonObject["extensions"] != null)
            for (const i in jsonObject["extensions"])
                result.extensions.push(Extension.fromJson(jsonObject["extensions"][i]))
        if (jsonObject["notifications"] != null)
            for (const i in jsonObject["notifications"])
                result.notifications.push(jsonObject["notifications"][i])
        return result
    }
}

class SignerInfo {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new SignerInfo();
        result.dataToHash = jsonObject["dataToHash"]
        result.digestAlgorithm = jsonObject["digestAlgorithm"]
        result.paStatus = jsonObject["paStatus"]
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"]
        result.version = jsonObject["version"]
        result.issuer = Authority.fromJson(jsonObject["issuer"])
        result.serialNumber = Value.fromJson(jsonObject["serialNumber"])
        result.signature = Value.fromJson(jsonObject["signature"])
        result.subjectKeyIdentifier = Value.fromJson(jsonObject["subjectKeyIdentifier"])
        result.signedAttributes = []
        result.certificateChain = []
        result.notifications = []
        if (jsonObject["signedAttributes"] != null)
            for (const i in jsonObject["signedAttributes"])
                result.signedAttributes.push(Extension.fromJson(jsonObject["signedAttributes"][i]))
        if (jsonObject["certificateChain"] != null)
            for (const i in jsonObject["certificateChain"])
                result.certificateChain.push(CertificateChain.fromJson(jsonObject["certificateChain"][i]))
        if (jsonObject["notifications"] != null)
            for (const i in jsonObject["notifications"])
                result.notifications.push(jsonObject["notifications"][i])
        return result
    }
}

class SecurityObject {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new SecurityObject();
        result.fileReference = jsonObject["fileReference"]
        result.objectType = jsonObject["objectType"]
        result.version = jsonObject["version"]
        result.signerInfos = []
        result.notifications = []
        if (jsonObject["signerInfos"] != null)
            for (const i in jsonObject["signerInfos"])
                result.signerInfos.push(SignerInfo.fromJson(jsonObject["signerInfos"][i]))
        if (jsonObject["notifications"] != null)
            for (const i in jsonObject["notifications"])
                result.notifications.push(jsonObject["notifications"][i])
        return result
    }
}

class CardProperties {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new CardProperties();
        result.aTQA = jsonObject["aTQA"]
        result.aTQB = jsonObject["aTQB"]
        result.aTR = jsonObject["aTR"]
        result.baudrate1 = jsonObject["baudrate1"]
        result.baudrate2 = jsonObject["baudrate2"]
        result.bitRateR = jsonObject["bitRateR"]
        result.bitRateS = jsonObject["bitRateS"]
        result.chipTypeA = jsonObject["chipTypeA"]
        result.mifareMemory = jsonObject["mifareMemory"]
        result.rfidType = jsonObject["rfidType"]
        result.sAK = jsonObject["sAK"]
        result.support4 = jsonObject["support4"]
        result.supportMifare = jsonObject["supportMifare"]
        result.uID = jsonObject["uID"]
        return result
    }
}

class RFIDSessionData {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new RFIDSessionData();
        result.cardProperties = CardProperties.fromJson(jsonObject["result"])
        result.totalBytesReceived = jsonObject["totalBytesReceived"]
        result.totalBytesSent = jsonObject["totalBytesSent"]
        result.status = jsonObject["status"]
        result.extLeSupport = jsonObject["extLeSupport"]
        result.processTime = jsonObject["processTime"]
        result.sessionDataStatus = jsonObject["sessionDataStatus"]
        result.accessControls = []
        result.applications = []
        result.securityObjects = []
        if (jsonObject["accessControls"] != null)
            for (const i in jsonObject["accessControls"])
                result.accessControls.push(AccessControlProcedureType.fromJson(jsonObject["accessControls"][i]))
        if (jsonObject["applications"] != null)
            for (const i in jsonObject["applications"])
                result.applications.push(Application.fromJson(jsonObject["applications"][i]))
        if (jsonObject["securityObjects"] != null)
            for (const i in jsonObject["securityObjects"])
                result.securityObjects.push(SecurityObject.fromJson(jsonObject["securityObjects"][i]))
        return result
    }
}

class DocumentReaderBarcodeResult {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderBarcodeResult();
        result.fields = []
        if (jsonObject["fields"] != null)
            for (const i in jsonObject["fields"])
                result.fields.push(DocumentReaderBarcodeField.fromJson(jsonObject["fields"][i]))
        return result
    }
}

class DocumentReaderBarcodeField {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderBarcodeField();
        result.barcodeType = jsonObject["barcodeType"]
        result.status = jsonObject["status"]
        result.pdf417Info = jsonObject["pdf417Info"]
        result.data = jsonObject["data"]
        result.pageIndex = jsonObject["pageIndex"]
        return result
    }
}

class DocumentReaderAuthenticityResult {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderAuthenticityResult();
        result.status = jsonObject["status"]
        result.checks = []
        if (jsonObject["checks"] != null)
            for (const i in jsonObject["checks"])
                result.checks.push(DocumentReaderAuthenticityCheck.fromJson(jsonObject["checks"][i]))
        return result
    }
}

class DocumentReaderAuthenticityCheck {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderAuthenticityCheck();
        result.type = jsonObject["type"]
        result.typeName = jsonObject["typeName"]
        result.status = jsonObject["status"]
        result.pageIndex = jsonObject["pageIndex"]
        result.elements = []
        if (jsonObject["elements"] != null)
            for (const i in jsonObject["elements"])
                result.elements.push(DocumentReaderAuthenticityElement.fromJson(jsonObject["elements"][i]))
        return result
    }
}

class DocumentReaderAuthenticityElement {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderAuthenticityElement();
        result.status = jsonObject["status"]
        result.elementType = jsonObject["elementType"]
        result.elementTypeName = jsonObject["elementTypeName"]
        result.elementDiagnose = jsonObject["elementDiagnose"]
        result.elementDiagnoseName = jsonObject["elementDiagnoseName"]

        return result
    }
}

class DocumentReaderCompletion {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DocumentReaderCompletion();
        result.action = jsonObject["action"]
        result.results = DocumentReaderResults.fromJson(jsonObject["results"])
        result.error = Throwable.fromJson(jsonObject["error"])

        return result
    }
}

class Throwable {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Throwable();
        result.localizedMessage = jsonObject["localizedMessage"]
        result.message = jsonObject["message"]
        result.toString = jsonObject["toString"]
        result.code = jsonObject["code"]
        result.domain = jsonObject["domain"]
        result.stackTrace = []
        if (jsonObject["stackTrace"] != null)
            for (const i in jsonObject["stackTrace"])
                result.stackTrace.push(StackTraceElement.fromJson(jsonObject["stackTrace"][i]))

        return result
    }
}

class StackTraceElement {
    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new StackTraceElement();
        result.className = jsonObject["className"]
        result.fileName = jsonObject["fileName"]
        result.lineNumber = jsonObject["lineNumber"]
        result.methodName = jsonObject["methodName"]
        result.isNativeMethod = jsonObject["isNativeMethod"]
        result.toString = jsonObject["toString"]

        return result
    }
}

class DocumentReaderResults {
    getTextFieldValueByType(fieldType, lcid = 0, source = -1, original = false) {
        if (this.textResult != null) {
            const field = this.findByTypeAndLcid(fieldType, lcid);
            if (field != null) {
                const value = this.findBySource(field, source);
                if (value != null) {
                    if (original)
                        return value.originalValue
                    return value.value
                }
            }
            return null
        }
    }

    getTextFieldStatusByType(fieldType, lcid = 0) {
        if (this.textResult != null) {
            const field = this.findByTypeAndLcid(fieldType, lcid);
            if (field != null)
                return field.status
        }

        return 0
    }

    getGraphicFieldImageByType(fieldType, source = -1, pageIndex = -1, light = -1) {
        if (this.graphicResult != null) {
            const foundFields = [];
            for (let field in this.graphicResult.fields) {
                field = this.graphicResult.fields[field]
                if (field.fieldType === fieldType)
                    foundFields.push(field)
            }

            if (source !== -1)
                for (const index in foundFields)
                    if (foundFields[index].sourceType !== source)
                        foundFields.splice(index, 1)

            if (light !== -1)
                for (const index in foundFields)
                    if (foundFields[index].light !== light)
                        foundFields.splice(index, 1)

            if (pageIndex !== -1)
                for (const index in foundFields)
                    if (foundFields[index].pageIndex !== pageIndex)
                        foundFields.splice(index, 1)

            if (foundFields.length > 0)
                return foundFields[0].value
        }
        return null
    }

    getQualityResult(imageQualityCheckType, securityFeature = -1) {
        let resultSum = 2;
        if (this.imageQuality != null) {
            for (const index in this.imageQuality.imageQualityList) {
                const field = this.imageQuality.imageQualityList[index];
                if (field.type === imageQualityCheckType) {
                    if (securityFeature === -1) {
                        if (field.result === 0) {
                            resultSum = 0
                            break
                        }

                        if (field.result === 1)
                            resultSum = field.result
                    } else if (field.featureType === securityFeature) {
                        resultSum = field.result
                        break
                    }
                }
            }
        }

        return resultSum
    }

    findByTypeAndLcid(type, lcid) {
        let field;
        const foundFields = [];

        for (field in this.textResult.fields) {
            field = this.textResult.fields[field]
            if (field.fieldType === type)
                foundFields.push(field)
        }

        if (foundFields.length <= 0)
            return null

        let foundField = null;

        for (field in foundFields) {
            field = foundFields[field]
            if (lcid === 0) {
                foundField = field
                if (field.lcid === lcid)
                    break
            } else if (field.lcid === lcid)
                return field
        }

        return foundField
    }

    findBySource(field, sourceType) {
        let value;
        if (sourceType === -1) {
            const mrzVal = this.findBySource(field, 3);
            if (mrzVal != null)
                return mrzVal
            value = this.findBySource(field, 18)
            if (value != null)
                return value
            const visualVal = this.findBySource(field, 17);
            return visualVal != null ? visualVal : null
        }
        for (let item in field.values) {
            item = field.values[item]
            if (item.sourceType === sourceType)
                return item
        }

        return null

    }

    clone() {
        return DocumentReaderResults.fromJson(this)
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const results = new DocumentReaderResults();
        results.chipPage = jsonObject["chipPage"]
        results.overallResult = jsonObject["overallResult"]
        results.processingFinished = jsonObject["processingFinished"]
        results.morePagesAvailable = jsonObject["morePagesAvailable"]
        results.rfidResult = jsonObject["rfidResult"]
        results.highResolution = jsonObject["highResolution"]
        results.graphicResult = DocumentReaderGraphicResult.fromJson(jsonObject["graphicResult"])
        results.textResult = DocumentReaderTextResult.fromJson(jsonObject["textResult"])
        results.documentPosition = ElementPosition.fromJson(jsonObject["documentPosition"])
        results.barcodePosition = ElementPosition.fromJson(jsonObject["barcodePosition"])
        results.mrzPosition = ElementPosition.fromJson(jsonObject["mrzPosition"])
        results.imageQuality = ImageQualityGroup.fromJson(jsonObject["imageQuality"])
        results.jsonResult = DocumentReaderJsonResult.fromJson(jsonObject["jsonResult"])
        results.documentReaderNotification = DocumentReaderNotification.fromJson(jsonObject["documentReaderNotification"])
        results.rfidSessionData = RFIDSessionData.fromJson(jsonObject["rfidSessionData"])
        results.authenticityResult = DocumentReaderAuthenticityResult.fromJson(jsonObject["authenticityResult"])
        results.barcodeResult = DocumentReaderBarcodeResult.fromJson(jsonObject["barcodeResult"])
        results.documentType = []
        if (jsonObject["documentType"] != null)
            for (const index in jsonObject["documentType"])
                results.documentType.push(DocumentReaderDocumentType.fromJson(jsonObject["documentType"][index]))

        return results
    }
}

// Enum

const BarcodeResult = {
    NO_ERR: 0,
    NULL_PTR_ERR: -6001,
    BAD_ARG_ERR: -6002,
    SIZE_ERR: -6003,
    RANGE_ERR: -6004,
    INTERNAL_ERR: -6005,
    TRY_EXCEPT_ERR: -6006,
    BAR_CODE_NOT_FOUND: -6008,
    BAR_CODE_DECODE_ERR: -6010,
    NO_USER_DLL_FOUND: -6019,
    NO_IPP_DLL_FOUND: -6020,
    IPP_EXEC_ERR: -6024,
    IPP_TRY_EXCEPT_ERR: -6025,
    BARCODE_ERROR_INPUT_PARAM: -11001,
    BARCODE_ERROR_FINIT: -11006,
    BARCODE_ERROR_NOT_LOAD_IP_DECODED_LL: -11012,
    BARCODE_ERROR_INNER_PROBLEM: -11100,
    BARCODE_ERROR_DECODE_1D_BAD_DECODE: -11200,
    BARCODE_ERROR_FIND_ROW_OR_COLUMN: -11201,
    BARCODE_ERROR_FIND_3X8_2D_X: -11202,
    BARCODE_ERROR_FIND_3X8_2D_Y: -11203,
    BARCODE_ERROR_2D_UGOL_MAX: -11204,
    BARCODE_ERROR_INDEFINITELY_DECODED: -11210,
    BARCODE_ERROR_DLL_NOT_INIT: -11300,
    BARCODE_ERROR_IP_DECODE_DLL_Try_Except: -11400,
    IPDECODE_ERROR_LARGEERRORS: -4503,
    IPDECODE_ERROR_FAULTCOLUMNS: -4504,
    IPDECODE_ERROR_FAULTROWS: -4505,
    IPDECODE_ERROR_INCORRECT_ERROR_LEVEL: -4511,
    IPDECODE_ERROR_LOADING_DEV_TABLE: -4512,
}

const BarcodeType = {
    UNKNOWN: 0,
    BCT_CODE128: 1,
    CODE39: 2,
    EAN8: 3,
    ITF: 4,
    PDF417: 5,
    STF: 6,
    MTF: 7,
    IATA: 8,
    CODABAR: 9,
    UPCA: 10,
    CODE93: 11,
    UPCE: 12,
    EAN13: 13,
    QRCODE: 14,
    AZTEC: 15,
    DATAMATRIX: 16,
    ALL_1D: 17,
}

const CameraTypes = {
    FRONT: "front",
    BACK: "back",
}

const diDocType = {
    dtNotDefined: 0,
    dtPassport: 11,
    dtIdentityCard: 12,
    dtDiplomaticPassport: 13,
    dtServicePassport: 14,
    dtSeamansIdentityDocument: 15,
    dtIdentityCardforResidence: 16,
    dtTraveldocument: 17,
    dtOther: 99,
    dtVisaID2: 29,
    dtVisaID3: 30,
    dtRegistrationCertificate: 31,
    dtNationalIdentityCard: 20,
    dtSocialIdentityCard: 21,
    dtAliensIdentityCard: 22,
    dtPrivilegedIdentityCard: 23,
    dtResidencePermitIdentityCard: 24,
    dtOriginCard: 25,
    dtEmergencyPassport: 26,
    dtAliensPassport: 27,
    dtAlternativeIdentityCard: 28,
    dtAuthorizationCard: 32,
    dtBeginnerPermit: 33,
    dtBorderCrossingCard: 34,
    dtChauffeurLicense: 35,
    dtChauffeurLicenseUnder18: 36,
    dtChauffeurLicenseUnder21: 37,
    dtCommercialDrivingLicense: 38,
    dtCommercialDrivingLicenseIndtuctionalPermit: 39,
    dtCommercialDrivingLicenseUnder18: 40,
    dtCommercialDrivingLicenseUnder21: 41,
    dtCommercialIndtuctionPermit: 42,
    dtCommercialNewPermit: 43,
    dtConcealedCarryLicense: 44,
    dtConcealedFirearmPermit: 45,
    dtConditionalDrivingLicense: 46,
    dtDepartmentOfVeteransAffairsIdentityCard: 47,
    dtDiplomaticDrivingLicense: 48,
    dtDrivingLicense: 49,
    dtDrivingLicenseIndtuctionalPermit: 50,
    dtDrivingLicenseIndtuctionalPermitUnder18: 51,
    dtDrivingLicenseIndtuctionalPermitUnder21: 52,
    dtDrivingLicenseLearnersPermit: 53,
    dtDrivingLicenseLearnersPermitUnder18: 54,
    dtDrivingLicenseLearnersPermitUnder21: 55,
    dtDrivingLicenseNovice: 56,
    dtDrivingLicenseNoviceUnder18: 57,
    dtDrivingLicenseNoviceUnder21: 58,
    dtDrivingLicenseRegisteredOffender: 59,
    dtDrivingLicenseRedtictedUnder18: 60,
    dtDrivingLicenseRedtictedUnder21: 61,
    dtDrivingLicenseTemporaryVisitor: 62,
    dtDrivingLicenseTemporaryVisitorUnder18: 63,
    dtDrivingLicenseTemporaryVisitorUnder21: 64,
    dtDrivingLicenseUnder18: 65,
    dtDrivingLicenseUnder21: 66,
    dtEmploymentDrivingPermit: 67,
    dtEnhancedChauffeurLicense: 68,
    dtEnhancedChauffeurLicenseUnder18: 69,
    dtEnhancedChauffeurLicenseUnder21: 70,
    dtEnhancedCommercialDrivingLicense: 71,
    dtEnhancedDrivingLicense: 72,
    dtEnhancedDrivingLicenseUnder18: 73,
    dtEnhancedDrivingLicenseUnder21: 74,
    dtEnhancedIdentityCard: 75,
    dtEnhancedIdentityCardUnder18: 76,
    dtEnhancedIdentityCardUnder21: 77,
    dtEnhancedOperatorsLicense: 78,
    dtFirearmsPermit: 79,
    dtFullProvisionalLicense: 80,
    dtFullProvisionalLicenseUnder18: 81,
    dtFullProvisionalLicenseUnder21: 82,
    dtGenevaConventionsIdentityCard: 83,
    dtGraduatedDrivingLicenseUnder18: 84,
    dtGraduatedDrivingLicenseUnder21: 85,
    dtGraduatedIndtuctionPermitUnder18: 86,
    dtGraduatedIndtuctionPermitUnder21: 87,
    dtGraduatedLicenseUnder18: 88,
    dtGraduatedLicenseUnder21: 89,
    dtHandgunCarryPermit: 90,
    dtIdentityAndPrivilegeCard: 91,
    dtIdentityCardMobilityImpaired: 92,
    dtIdentityCardRegisteredOffender: 93,
    dtIdentityCardTemporaryVisitor: 94,
    dtIdentityCardTemporaryVisitorUnder18: 95,
    dtIdentityCardTemporaryVisitorUnder21: 96,
    dtIdentityCardUnder18: 97,
    dtIdentityCardUnder21: 98,
    dtIgnitionInterlockPermit: 100,
    dtImmigrantVisa: 101,
    dtIndtuctionPermit: 102,
    dtIndtuctionPermitUnder18: 103,
    dtIndtuctionPermitUnder21: 104,
    dtInterimDrivingLicense: 105,
    dtInterimIdentityCard: 106,
    dtIntermediateDrivingLicense: 107,
    dtIntermediateDrivingLicenseUnder18: 108,
    dtIntermediateDrivingLicenseUnder21: 109,
    dtJuniorDrivingLicense: 110,
    dtLearnerIndtuctionalPermit: 111,
    dtLearnerLicense: 112,
    dtLearnerLicenseUnder18: 113,
    dtLearnerLicenseUnder21: 114,
    dtLearnerPermit: 115,
    dtLearnerPermitUnder18: 116,
    dtLearnerPermitUnder21: 117,
    dtLimitedLicense: 118,
    dtLimitedPermit: 119,
    dtLimitedTermDrivingLicense: 120,
    dtLimitedTermIdentityCard: 121,
    dtLiquorIdentityCard: 122,
    dtNewPermit: 123,
    dtNewPermitUnder18: 124,
    dtNewPermitUnder21: 125,
    dtNonUsCitizenDrivingLicense: 126,
    dtOccupationalDrivingLicense: 127,
    dtOneidaTribeOfIndiansIdentityCard: 128,
    dtOperatorLicense: 129,
    dtOperatorLicenseUnder18: 130,
    dtOperatorLicenseUnder21: 131,
    dtPermanentDrivingLicense: 132,
    dtPermitToReEnter: 133,
    dtProbationaryAutoLicense: 134,
    dtProbationaryDrivingLicenseUnder18: 135,
    dtProbationaryDrivingLicenseUnder21: 136,
    dtProbationaryVehicleSalespersonLicense: 137,
    dtProvisionalDrivingLicense: 138,
    dtProvisionalDrivingLicenseUnder18: 139,
    dtProvisionalDrivingLicenseUnder21: 140,
    dtProvisionalLicense: 141,
    dtProvisionalLicenseUnder18: 142,
    dtProvisionalLicenseUnder21: 143,
    dtPublicPassengerChauffeurLicense: 144,
    dtRacingAndGamingComissionCard: 145,
    dtRefugeeTravelDocument: 146,
    dtRenewalPermit: 147,
    dtRedtictedCommercialDrivingLicense: 148,
    dtRedtictedDrivingLicense: 149,
    dtRedtictedPermit: 150,
    dtSeasonalPermit: 151,
    dtSeasonalResidentIdentityCard: 152,
    dtSeniorCitizenIdentityCard: 153,
    dtSexOffender: 154,
    dtSocialSecurityCard: 155,
    dtTemporaryDrivingLicense: 156,
    dtTemporaryDrivingLicenseUnder18: 157,
    dtTemporaryDrivingLicenseUnder21: 158,
    dtTemporaryIdentityCard: 159,
    dtTemporaryIndtuctionPermitIdentityCard: 160,
    dtTemporaryIndtuctionPermitIdentityCardUnder18: 161,
    dtTemporaryIndtuctionPermitIdentityCardUnder21: 162,
    dtTemporaryVisitorDrivingLicense: 163,
    dtTemporaryVisitorDrivingLicenseUnder18: 164,
    dtTemporaryVisitorDrivingLicenseUnder21: 165,
    dtUniformedServicesIdentityCard: 166,
    dtVehicleSalespersonLicense: 167,
    dtWorkerIdentificationCredential: 168,
    dtCommercialDrivingLicenseNovice: 169,
    dtCommercialDrivingLicenseNoviceUnder18: 170,
    dtCommercialDrivingLicenseNoviceUnder21: 171,
    dtPassportCard: 172,
    dtPermanentResidentCard: 173,
    dtPersonalIdentificationVerification: 174,
    dtTemporaryOperatorLicense: 175,
    dtDrivingLicenseUnder19: 176,
    dtIdentityCardUnder19: 177,
    dtVisa: 178,
    dtTemporaryPassport: 179,
    dtVotingCard: 180,
    dtHealthCard: 181,
    dtCertificateOfCitizenship: 182,
    dtAddressCard: 183,
    dtAirportImmigrationCard: 184,
    dtAlienRegidtationCard: 185,
    dtAPEHCard: 186,
    dtCoupontoDrivingLicense: 187,
    dtCrewMemberCertificate: 188,
    dtDocumentForReturn: 189,
    dtECard: 190,
    dtEmploymentCard: 191,
    dtHKSARImmigrationForm: 192,
    dtImmigrantcard: 193,
    dtLabourCard: 194,
    dtLaissezPasser: 195,
    dtLawyerIdentityCertificate: 196,
    dtLicenseCard: 197,
    dtPassportStateless: 198,
    dtPassportChild: 199,
    dtPassportConsular: 200,
    dtPassportDiplomaticService: 201,
    dtPassportOfficial: 202,
    dtPassportProvisional: 203,
    dtPassportSpecial: 204,
    dtPermissiontotheLocalBorderTraffic: 205,
    dtSEDESOLCard: 207,
    dtSocialCard: 208,
    dtTBCard: 209,
    dtVehiclePassport: 210,
    dtWDocument: 211,
    dtDiplomaticIdentityCard: 212,
    dtConsularIdentityCard: 213,
    dtIncomeTaxCard: 214,
    dtResidencePermit: 215,
    dtDocumentOfIdentity: 216,
    dtBorderCrossingPermit: 217,
    dtPassportLimitedValidity: 218,
    dtSIMCard: 219,
    dtTaxCard: 220,
    dtCompanyCard: 221,
    dtDomesticPassport: 222,
    dtIdentityCertificate: 223,
    dtResidentIdCard: 224,
    dtArmedForcesIdentityCard: 225,
    dtProfessionalCard: 226,
    dtRegistrationStamp: 227,
    dtDriverCard: 228,
    dtDriverTrainingCertificate: 229,
    dtQualificationDrivingLicense: 230,
    dtMembershipCard: 231,
    dtPublicVehicleDriverAuthorityCard: 232,
    dtMarineLicense: 233,
    dtTemporaryLearnerDrivingLicense: 234,
    dtTemporaryCommercialDrivingLicense: 235,
    dtInterimInstructionalPermit: 236,
    dtCertificateOfCompetency: 237,
    dtCertificateOfProficiency: 238,
}

const DocFormat = {
    ID1: 0,
    ID2: 1,
    ID3: 2,
    ID3_x2: 5,
    CUSTOM: 1000,
    FLEXIBLE: 1002,
}

const DocReaderAction = {
    COMPLETE: 1,
    PROCESS: 0,
    CANCEL: 2,
    ERROR: 3,
    NOTIFICATION: 5,
    PROCESS_WHITE_UV_IMAGES: 6,
    MORE_PAGES_AVAILABLE: 8,
    RFID_COMPLETE: 9,
    RFID_ERROR: 10,
    RFID_CANCEL: 11,
    RFID_SESSION_RESTARTED: 12,
    RFID_NOTIFICATION_CONNECTING: 20,
    RFID_NOTIFICATION_SEARCHING_TAG: 21,
    RFID_NOTIFICATION_START_READING: 22,
    RFID_NOTIFICATION_NOTIFICATION: 23,
}

const DocReaderFrame = {
    MAX: "max",
    SCENARIO_DEFAULT: "id1",
    NONE: "none",
    DOCUMENT: "document",
}

const DocReaderOrientation = {
    ROTATE: 0,
    PORTRAIT: 1,
    LANDSCAPE: 2,
}

const eCheckDiagnose = {
    UNKNOWN: 0,
    PASS: 1,
    INVALID_INPUT_DATA: 2,
    INTERNAL_ERROR: 3,
    EXCEPTION_IN_MODULE: 4,
    UNCERTAIN_VERIFICATION: 5,
    NECESSARY_IMAGE_NOT_FOUND: 7,
    PHOTO_SIDES_NOT_FOUND: 8,
    INVALID_CHECKSUM: 10,
    SYNTAX_ERROR: 11,
    LOGIC_ERROR: 12,
    SOURCES_COMPARISON_ERROR: 13,
    FIELDS_COMPARISON_LOGIC_ERROR: 14,
    INVALID_FIELD_FORMAT: 15,
    TRUE_LUMINISCENCE_ERROR: 20,
    FALSE_LUMINISCENCE_ERROR: 21,
    FIXED_PATTERN_ERROR: 22,
    LOW_CONTRAST_IN_IR_LIGHT: 23,
    INCORRECT_BACKGROUND_LIGHT: 24,
    BACKGROUND_COMPARISON_ERROR: 25,
    INCORRECT_TEXT_COLOR: 26,
    PHOTO_FALSE_LUMINISCENCE: 27,
    TOO_MUCH_SHIFT: 28,
    FIBERS_NOT_FOUND: 30,
    TOO_MANY_OBJECTS: 31,
    SPECKS_IN_UV: 33,
    TOO_LOW_RESOLUTION: 34,
    INVISIBLE_ELEMENT_PRESENT: 40,
    VISIBLE_ELEMENT_ABSENT: 41,
    ELEMENT_SHOULD_BE_COLORED: 42,
    ELEMENT_SHOULD_BE_GRAYSCALE: 43,
    UV_DULL_PAPER_MRZ: 50,
    FALSE_LUMINISCENCE_IN_MRZ: 51,
    UV_DULL_PAPER_PHOTO: 52,
    UV_DULL_PAPER_BLANK: 53,
    UV_DULL_PAPER_ERROR: 54,
    FALSE_LUMINISCENCE_IN_BLANK: 55,
    BAD_AREA_IN_AXIAL: 60,
    FALSE_IPI_PARAMETERS: 65,
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: 80,
    OVI_IR_INVISIBLE: 90,
    OVI_INSUFFICIENT_AREA: 91,
    OVI_COLOR_INVARIABLE: 92,
    OVI_BAD_COLOR_FRONT: 93,
    OVI_BAD_COLOR_SIDE: 94,
    OVI_WIDE_COLOR_SPREAD: 95,
    OVI_BAD_COLOR_PERCENT: 96,
    HOLOGRAM_ELEMENT_ABSENT: 100,
    HOLOGRAM_SIDE_TOP_IMAGES_ABSENT: 101,
    HOLOGRAM_ELEMENT_PRESENT: 102,
    PHOTO_PATTERN_INTERRUPTED: 110,
    PHOTO_PATTERN_SHIFTED: 111,
    PHOTO_PATTERN_DIFFERENT_COLORS: 112,
    PHOTO_PATTERN_IR_VISIBLE: 113,
    PHOTO_PATTERN_NOT_INTERSECT: 114,
    PHOTO_SIZE_IS_WRONG: 115,
    PHOTO_PATTERN_INVALID_COLOR: 116,
    PHOTO_PATTERN_SHIFTED_VERT: 117,
    PHOTO_PATTERN_PATTERN_NOT_FOUND: 118,
    PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS: 119,
    PHOTO_IS_NOT_RECTANGLE: 120,
    PHOTO_CORNERS_IS_WRONG: 121,
    DOCUMENT_IS_CANCELLING: 122,
    TEXT_COLOR_SHOULD_BE_BLUE: 130,
    TEXT_COLOR_SHOULD_BE_GREEN: 131,
    TEXT_COLOR_SHOULD_BE_RED: 132,
    TEXT_SHOULD_BE_BLACK: 133,
    BARCODE_WAS_READ_WITH_ERRORS: 140,
    BARCODE_DATA_FORMAT_ERROR: 141,
    BARCODE_SIZE_PARAMS_ERROR: 142,
    NOT_ALL_BARCODES_READ: 143,
    PORTRAIT_COMPARISON_PORTRAITS_DIFFER: 150,
    PORTRAIT_COMPARISON_NO_SERVICE_REPLY: 151,
    PORTRAIT_COMPARISON_SERVICE_ERROR: 152,
    PPORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: 153,
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO: 154,
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: 155,
}

const eCheckResult = {
    CH_CHECK_ERROR: 0,
    CH_CHECK_OK: 1,
    CH_CHECK_WAS_NOT_DONE: 2,
}

const eGraphicFieldType = {
    GF_PORTRAIT: 201,
    GF_FINGERPR: 202,
    GF_EYE: 203,
    GF_SIGNATURE: 204,
    GF_BAR_CODE: 205,
    GF_PROOF_OF_CITIZENSHIP: 206,
    GF_DOCUMENT_IMAGE: 207,
    GF_COLOR_DYNAMIC: 209,
    GF_GHOST_PORTRAIT: 210,
    GF_STAMP: 211,
    GF_PORTRAIT_OF_CHILD: 212,
    GF_OTHER: 250,
    GF_FINGER_LEFT_THUMB: 300,
    GF_FINGER_LEFT_INDEX: 301,
    GF_FINGER_LEFT_MIDDLE: 302,
    GF_FINGER_LEFT_RING: 303,
    GF_FINGER_LEFT_LITTLE: 304,
    GF_FINGER_RIGHT_THUMB: 305,
    GF_FINGER_RIGHT_INDEX: 306,
    GF_FINGER_RIGHT_MIDDLE: 307,
    GF_FINGER_RIGHT_RING: 308,
    GF_FINGER_RIGHT_LITTLE: 309,

    getTranslation: function (value) {
        switch (value) {
            case this.GF_PORTRAIT:
                return "Portrait"
            case this.GF_FINGERPR:
                return "Fingerprint"
            case this.GF_EYE:
                return "Iris"
            case this.GF_SIGNATURE:
                return "Signature"
            case this.GF_BAR_CODE:
                return "Barcode"
            case this.GF_PROOF_OF_CITIZENSHIP:
                return "Proof of citizenship"
            case this.GF_DOCUMENT_IMAGE:
                return "Document image"
            case this.GF_COLOR_DYNAMIC:
                return "Color dynamic"
            case this.GF_GHOST_PORTRAIT:
                return "Ghost portrait"
            case this.GF_STAMP:
                return "Stamp"
            case this.GF_PORTRAIT_OF_CHILD:
                return "Portrait of child"
            case this.GF_OTHER:
                return "Other"
            case this.GF_FINGER_LEFT_THUMB:
                return "Left thumb"
            case this.GF_FINGER_LEFT_INDEX:
                return "Left index finger"
            case this.GF_FINGER_LEFT_MIDDLE:
                return "Left middle finger"
            case this.GF_FINGER_LEFT_RING:
                return "Left ring finger"
            case this.GF_FINGER_LEFT_LITTLE:
                return "Left little finger"
            case this.GF_FINGER_RIGHT_THUMB:
                return "Right thumb"
            case this.GF_FINGER_RIGHT_INDEX:
                return "Right index finger"
            case this.GF_FINGER_RIGHT_MIDDLE:
                return "Right middle finger"
            case this.GF_FINGER_RIGHT_RING:
                return "Right ring finger"
            case this.GF_FINGER_RIGHT_LITTLE:
                return "Right little finger"
            default:
                return value
        }
    }
}

const eImageQualityCheckType = {
    IQC_IMAGE_GLARES: 0,
    IQC_IMAGE_FOCUS: 1,
    IQC_IMAGE_RESOLUTION: 2,
}

const eProcessGLCommands = {
    ePC_ProcMgr_SetLicense: 12100,
    ePC_ProcMgr_Process: 12101,
    ePC_ProcMgr_ProcessAsync: 12102,
    ePC_ProcMgr_Init: 12103,
    ePC_ProcMgr_ProcessImage: 12104,
    ePC_ProcMgr_StartNewDocument: 12105,
    ePC_ProcMgr_StartNewPage: 12106,
    ePC_ProcMgr_Unload: 12107,
    ePC_ProcMgr_CheckDatabase: 12109,
    ePC_ProcMgr_ComparePortraits: 12111,
}

const eRequestCommand = {
    eReqCmd_RFid_SendData: 100,
    eReqCmd_RFid_Notify: 101,
    eReqCmd_RFid_GetDataForScenario: 102,
    eReqCmd_Torch_GetUVFoto: 200,
    eReqCmd_InternetSend: 300,
}

const eRFID_AccessControl_ProcedureType = {
    ACPT_UNDEFINED: 0,
    ACPT_BAC: 1,
    ACPT_PACE: 2,
    ACPT_CA: 3,
    ACPT_TA: 4,
    ACPT_AA: 5,
    ACPT_RI: 6,
    ACPT_CARD_INFO: 10,
}

const eRFID_AuthenticationProcedureType = {
    aptUndefined: 0,
    aptStandard: 1,
    aptAdvanced: 2,
    aptGeneral: 3,
}

const eRFID_BaudRate = {
    rfbr_106: 1,
    rfbr_212: 2,
    rfbr_424: 4,
    rfbr_848: 8,
}

const eRFID_CertificateType = {
    CT_UNDEFINED: 0,
    CT_CSCA: 1,
    CT_CSCA_LINK: 2,
    CT_DS: 3,
    CT_MLS: 4,
    CT_DLS: 5,
}

const eRFID_DataFile_Type = {
    DFT_UNSPECIFIED: 0,
    DFT_PASSPORT_DG1: 1,
    DFT_PASSPORT_DG2: 2,
    DFT_PASSPORT_DG3: 3,
    DFT_PASSPORT_DG4: 4,
    DFT_PASSPORT_DG5: 5,
    DFT_PASSPORT_DG6: 6,
    DFT_PASSPORT_DG7: 7,
    DFT_PASSPORT_DG8: 8,
    DFT_PASSPORT_DG9: 9,
    DFT_PASSPORT_DG10: 10,
    DFT_PASSPORT_DG11: 11,
    DFT_PASSPORT_DG12: 12,
    DFT_PASSPORT_DG13: 13,
    DFT_PASSPORT_DG14: 14,
    DFT_PASSPORT_DG15: 15,
    DFT_PASSPORT_DG16: 16,
    DFT_PASSPORT_DG17: 17,
    DFT_PASSPORT_DG18: 18,
    DFT_PASSPORT_DG19: 19,
    DFT_PASSPORT_DG20: 20,
    DFT_PASSPORT_SOD: 21,
    DFT_PASSPORT_CVCA: 22,
    DFT_PASSPORT_COM: 23,
    DFT_ID_DG1: 101,
    DFT_ID_DG2: 102,
    DFT_ID_DG3: 103,
    DFT_ID_DG4: 104,
    DFT_ID_DG5: 105,
    DFT_ID_DG6: 106,
    DFT_ID_DG7: 107,
    DFT_ID_DG8: 108,
    DFT_ID_DG9: 109,
    DFT_ID_DG10: 110,
    DFT_ID_DG11: 111,
    DFT_ID_DG12: 112,
    DFT_ID_DG13: 113,
    DFT_ID_DG14: 114,
    DFT_ID_DG15: 115,
    DFT_ID_DG16: 116,
    DFT_ID_DG17: 117,
    DFT_ID_DG18: 118,
    DFT_ID_DG19: 119,
    DFT_ID_DG20: 120,
    DFT_ID_DG21: 121,
    DFT_DL_COM: 150,
    DFT_DL_DG1: 151,
    DFT_DL_DG2: 152,
    DFT_DL_DG3: 153,
    DFT_DL_DG4: 154,
    DFT_DL_DG5: 155,
    DFT_DL_DG6: 156,
    DFT_DL_DG7: 157,
    DFT_DL_DG8: 158,
    DFT_DL_DG9: 159,
    DFT_DL_DG10: 160,
    DFT_DL_DG11: 161,
    DFT_DL_DG12: 162,
    DFT_DL_DG13: 163,
    DFT_DL_DG14: 164,
    DFT_DL_SOD: 165,
    DFT_DL_CE: 166,
    DFT_PACE_CARDACCESS: 200,
    DFT_PACE_CARDSECURITY: 201,
    DFT_PACE_CHIPSECURITY: 202,
    DFT_MIFARE_DATA: 300,
    DFT_MIFARE_VALIDITY: 301,
    DFT_AUTHENTICITYV2: 302,
    DFT_ATR: 400,
    DFT_ESIGN_PK: 500,
    DFT_ESIGN_SIGNEDDATA: 501,
    DFT_CERTIFICATE: 600,
    DFT_MASTERLIST: 601,
    DFT_DEFECTLIST: 602,
    DFT_DEVIATIONLIST: 603,
    DFT_APP_DIRECTORY: 700,
    DFT_SESSION: 701,
    DFT_LOGDATA: 702,
    DFT_USERDEFINED: 1000,

    getTranslation: function (value) {
        switch (value) {
            case this.DFT_MIFARE_DATA:
                return "MIFARE data"
            case this.DFT_PASSPORT_COM:
                return "EF.COM"
            case this.DFT_DL_COM:
                return "EF.COM"
            case this.DFT_PASSPORT_DG1:
                return "Machine Readable Zone (DG1)"
            case this.DFT_ID_DG1:
                return "Document type" + " (DG1)"
            case this.DFT_DL_DG1:
                return "Text data elements (DG1)"
            case this.DFT_PASSPORT_DG2:
                return "Biometry - Facial data (DG2)"
            case this.DFT_ID_DG2:
                return "Issuing state" + " (DG2)"
            case this.DFT_DL_DG2:
                return "License holder information (DG2)"
            case this.DFT_PASSPORT_DG3:
                return "Biometry - Fingerprint(s) (DG3)"
            case this.DFT_ID_DG3:
                return "Date of expiry" + " (DG3)"
            case this.DFT_DL_DG3:
                return "Issuing authority details (DG3)"
            case this.DFT_PASSPORT_DG4:
                return "Biometry - Iris Data (DG4)"
            case this.DFT_ID_DG4:
                return "Given name" + " (DG4)"
            case this.DFT_DL_DG4:
                return "Portrait image (DG4)"
            case this.DFT_PASSPORT_DG5:
                return "Portrait(s) (DG5)"
            case this.DFT_ID_DG5:
                return "Surname/given name at birth" + " (DG5)"
            case this.DFT_DL_DG5:
                return "Signature / usual mark image (DG5)"
            case this.DFT_PASSPORT_DG6:
                return "not defined (DG6)"
            case this.DFT_ID_DG6:
                return "Pseudonym" + " (DG6)"
            case this.DFT_DL_DG6:
                return "Biometry - Facial data (DG6)"
            case this.DFT_PASSPORT_DG7:
                return "Signature / usual mark image (DG7)"
            case this.DFT_ID_DG7:
                return "Academic title" + " (DG7)"
            case this.DFT_DL_DG7:
                return "Biometry - Fingerprint(s) (DG7)"
            case this.DFT_PASSPORT_DG8:
                return "not defined (DG8)"
            case this.DFT_ID_DG8:
                return "Date of birth" + " (DG8)"
            case this.DFT_DL_DG8:
                return "Biometry - Iris Data (DG8)"
            case this.DFT_PASSPORT_DG9:
                return "not defined (DG9)"
            case this.DFT_ID_DG9:
                return "Place of birth" + " (DG9)"
            case this.DFT_DL_DG9:
                return "Biometry - Other (DG9)"
            case this.DFT_PASSPORT_DG10:
                return "not defined (DG10)"
            case this.DFT_ID_DG10:
                return "Nationality" + " (DG10)"
            case this.DFT_DL_DG10:
                return "not defined (DG10)"
            case this.DFT_PASSPORT_DG11:
                return "Additional personal detail(s) (DG11)"
            case this.DFT_ID_DG11:
                return "Sex" + " (DG11)"
            case this.DFT_DL_DG11:
                return "Optional domestic data (DG11)"
            case this.DFT_PASSPORT_DG12:
                return "Additional document details (DG12)"
            case this.DFT_ID_DG12:
                return "Optional details" + " (DG12)"
            case this.DFT_DL_DG12:
                return "Non-match alert (DG12)"
            case this.DFT_PASSPORT_DG13:
                return "Optional detail(s) (DG13)"
            case this.DFT_ID_DG13:
                return "Undefined" + " (DG13)"
            case this.DFT_DL_DG13:
                return "Active Authentication info (DG13)"
            case this.DFT_PASSPORT_DG14:
                return "EAC info (DG14)"
            case this.DFT_ID_DG14:
                return "Undefined" + " (DG14)"
            case this.DFT_DL_DG14:
                return "EAC info (DG14)"
            case this.DFT_PASSPORT_DG15:
                return "Active Authentication info (DG15)"
            case this.DFT_ID_DG15:
                return "Undefined" + " (DG15)"
            case this.DFT_PASSPORT_DG16:
                return "Person(s) to notify (DG16)"
            case this.DFT_ID_DG16:
                return "Undefined" + " (DG16)"
            case this.DFT_PASSPORT_DG17:
                return "DG17"
            case this.DFT_ID_DG17:
                return "Place of registration" + " (DG17)"
            case this.DFT_PASSPORT_DG18:
                return "DG18"
            case this.DFT_ID_DG18:
                return "Place of registration" + " (DG18)"
            case this.DFT_PASSPORT_DG19:
                return "DG19"
            case this.DFT_ID_DG19:
                return "Residence permit 1" + " (DG19)"
            case this.DFT_PASSPORT_DG20:
                return "DG20"
            case this.DFT_ID_DG20:
                return "Residence permit 2" + " (DG20)"
            case this.DFT_ID_DG21:
                return "Optional details" + " (DG21)"
            case this.DFT_PASSPORT_SOD:
                return "EF.SOD"
            case this.DFT_DL_SOD:
                return "EF.SOD"
            case this.DFT_PASSPORT_CVCA:
                return "EF.CVCA"
            case this.DFT_MIFARE_VALIDITY:
                return "MIFARE validity"
            case this.DFT_PACE_CARDACCESS:
                return "EF.CardAccess"
            case this.DFT_PACE_CARDSECURITY:
                return "EF.CardSecurity"
            case this.DFT_PACE_CHIPSECURITY:
                return "EF.ChipSecurity"
            case this.DFT_CERTIFICATE:
                return "Certificate"
            case this.DFT_APP_DIRECTORY:
                return "App direсtory"
            default:
                return value
        }
    }
}

const eRFID_NotificationAndErrorCodes = {
    RFID_NOTIFICATION_ERROR: 65536,
    RFID_NOTIFICATION_DOCUMENT_READY: 65537,
    RFID_NOTIFICATION_READ_PROTOCOL4: 65539,
    RFID_NOTIFICATION_READ_PROTOCOL3: 65546,
    RFID_NOTIFICATION_PROGRESS: 65547,
    RFID_NOTIFICATION_TA_STEP: 65550,
    RFID_NOTIFICATION_SM_REQUIRED: 65551,
    RFID_NOTIFICATION_ISO_ERROR: 69632,
    RFID_NOTIFICATION_PA_REQUEST: 77824,
    RFID_NOTIFICATION_SM_ESTABLISHED: 81935,
    RFID_NOTIFICATION_PCSC_READER_DISCONNECTED: 131072,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGED: 131073,
    RFID_NOTIFICATION_PCSC_BYTES_RECEIVED: 131074,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_TIME: 131075,
    RFID_NOTIFICATION_PCSC_DATA_RECEIVED: 131076,
    RFID_NOTIFICATION_PCSC_BYTES_SENT: 131077,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_SPEED: 131078,
    RFID_NOTIFICATION_PCSC_TOTAL_PROCESS_TIME: 131079,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGING: 131080,
    RFID_NOTIFICATION_PCSC_EXT_LENGTH_SUPPORT: 131088,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN: 131089,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN_ITEM: 131090,
    RFID_NOTIFICATION_SCENARIO: 131104,
    RFID_NOTIFICATION_PCSC_READING_DATAGROUP: 196608,
    RFID_NOTIFICATION_PCSC_FILE_NOT_FOUND: 262144,
    RFID_NOTIFICATION_PCSC_END_OF_FILE: 327680,
    RFID_NOTIFICATION_PCSC_FILE_ACCESS_DENIED: 393216,
    RFID_NOTIFICATION_PCSC_APPLICATION_SELECTED: 458752,
    RFID_NOTIFICATION_AC_PROCEDURE_START: 524288,
    RFID_NOTIFICATION_AC_PROCEDURE_FINISH: 589824,
    RFID_NOTIFICATION_PA_SECURITY_OBJECT_CHECK: 655360,
    RFID_NOTIFICATION_PA_FILE_CHECK: 720896,
    RFID_NOTIFICATION_PCSC_UPDATING_DATAGROUP: 786432,
    RFID_NOTIFICATION_AUXILIARY_DATA_VALIDATION: 851968,
    RFID_NOTIFICATION_RI_SECTOR_ID: 917504,
    RFID_NOTIFICATION_BIOMETRICS_EMPTY_PLACEHOLDER: 983040,
    RFID_ERROR_NO_ERROR: 1,
    RFID_ERROR_ALREADY_DONE: 2,
    RFID_LAYER6_FILE_EOF1: -2147458430,
    RFID_LAYER6_PWD_DEACTIVATED: -2147458429,
    RFID_LAYER6_PWD_BLOCKED: -2147458112,
    RFID_LAYER6_PWD_SUSPENDED: -2147458111,
    RFID_LAYER6_PWD_BLOCKED_2: -2147456637,
    RFID_LAYER6_PWD_DEACTIVATED_2: -2147456636,
    RFID_LAYER6_PWD_SUSPENDED_2: -2147456635,
    RFID_LAYER6_MSE_SET_AT_FAILURE: -2046819578,
    RFID_LAYER6_INCORRECT_PARAMS: -2147456384,
    RFID_LAYER6_FILE_NOT_FOUND: -2147456382,
    RFID_LAYER6_NO_REFERENCE_DATA: -2147456376,
    RFID_LAYER6_FILE_EOF2: -2147456256,
    RFID_Error_GraphManager: -2147418112,
    RFID_ERROR_NO_CHIP_DETECTED: -2147418111,
    RFID_ERROR_NOT_AVAILABLE: -2147418110,
    RFID_ERROR_INVALID_PARAMETER: -2147418108,
    RFID_ERROR_NOT_INITIALIZED: -2147418107,
    RFID_Error_NotEnoughMemory: -2147418106,
    RFID_ERROR_INVALID_DIRECTORY: -2147418104,
    RFID_ERROR_UNKNOWN_COMMAND: -2147418103,
    RFID_ERROR_FILE_IO_ERROR: -2147418102,
    RFID_ERROR_BUSY: -2147418101,
    RFID_ERROR_OLD_FIRMWARE: -2147418100,
    RFID_ERROR_PCSC_FAILED: -2147352576,
    RFID_ERROR_PCSC_READER_NOT_AVAILABLE: -2147352575,
    RFID_ERROR_PCSC_CANT_CONNECT_CARD: -2147352574,
    RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED: -2147352573,
    RFID_ERROR_PCSC_OPERATION_CANCELLED: -2147352572,
    RFID_ERROR_PCSC_CARD_IS_BUSY: -2147352571,
    RFID_ERROR_PCSC_FAILED_S_CARD: -2147352570,
    RFID_ERROR_PCSC_EXT_LE_FAILED: -2147352560,
    RFID_LAYER6_PWD_FAILED: -2146409536,
    RFID_ERROR_NOT_PERFORMED: -2097152000,
    RFID_ERROR_SESSION_IS_CLOSED: -2097151999,
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: -2097151998,
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: -2097151984,
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: -2097151983,
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: -2097151982,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: -2097151981,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNSUPPORTED: -2097151980,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET: -2097151979,
    RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE: -2097151978,
    RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE: -2097151977,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE: -2097151976,
    RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED: -2097151975,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA: -2097151974,
    RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET: -2097151973,
    RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED: -2097151972,
    RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE: -2097151968,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM: -2097151967,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE: -2097151966,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS: -2097151965,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA: -2097151964,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA: -2097151963,
    RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA: -2097151962,
    RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED: -2097151961,
    RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED: -2097151960,
    RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED: -2097151959,
    RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED: -2097151958,
    RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED: -2097151952,
    RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED: -2097151951,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY: -2097151936,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH: -2097151935,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID: -2097151934,
    RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION: -2097151920,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET: -2097151919,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED: -2097151918,
    RFID_ERROR_SESSION_INCORRECT_DATA: -2097151904,
    RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA: -2097086464,
    RFID_ERROR_SESSION_FILE_INCORRECT_DATA: -2097020928,
    RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA: -2096955392,
    RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA: -2096889856,
    RFID_ERROR_SESSION_FILE_WRONG_TAG: -2096824320,
    RFID_ERROR_SESSION_FILE_CANT_USE_DATA: -2096758784,
    RFID_ERROR_SESSION_FILE_CANT_READ_DATA: -2096693248,
    RFID_ERROR_SESSION_FILE_ACCESS_DENIED: -2096627712,
    RFID_LAYER6_SECURITY_MANAGER: -2046820352,
    RFID_LAYER6_APP_SELECTION_FAILURE: -2046820351,
    RFID_LAYER6_MUTUAL_AUTH_MAC_FAIL: -2046820096,
    RFID_LAYER6_MUTUAL_AUTH_ENC_FAIL: -2046820095,
    RFID_LAYER6_MUTUAL_AUTH_FAILURE: -2046820094,
    RFID_LAYER6_SM_DO8E_MISSING: -2046819840,
    RFID_LAYER6_SM_DO87_MISSING: -2046819839,
    RFID_LAYER6_SM_DO99_MISSING: -2046819838,
    RFID_LAYER6_SM_MAC_INCORRECT: -2046819837,
    RFID_LAYER6_SM_DO87_INCORRECT: -2046819836,
    RFID_LAYER6_NON_TLV_RESPONSE_DATA: -2046819584,
    RFID_LAYER6_WRONG_RND_ICC_LENGTH: -2046819583,
    RFID_LAYER6_INT_AUTH_FAILURE: -2046819582,
    RFID_LAYER6_MSE_SET_KAT_FAILURE: -2046819581,
    RFID_LAYER6_MSE_SET_DST_FAILURE: -2046819580,
    RFID_LAYER6_PSO_CERTIFICATE_FAILURE: -2046819579,
    RFID_LAYER6_GET_CHALLENGE_FAILURE: -2046819577,
    RFID_LAYER6_EXT_AUTH_FAILURE: -2046819576,
    RFID_LAYER6_GENERAL_AUTH_FAILURE: -2046819575,
    RFID_ERROR_FAILED: -1,

    getTranslation: function (value) {
        switch (value) {
            case this.RFID_ERROR_NO_ERROR:
                return "OK"
            case -2147483647:
                return "Error - ASN: Incorrect data"
            case -2147483646:
                return "Error - ASN: Not enough data"
            case -2147483645:
                return "Error - ASN: Contents unexpected data"
            case -2147483640:
                return "Error - ASN Signed data: Incorrect data"
            case -2147483639:
                return "Error - ASN Signed data: Encap contents incorrect data"
            case -2147483638:
                return "Error - ASN Signed data: Version incorrect data"
            case -2147483631:
                return "Error - ASN Signed data: Digest algorithms incorrect data"
            case -2147483629:
                return "Error - ASN LDS object: Incorrect data"
            case -2147483628:
                return "Error - ASN LDS object: Version incorrect data"
            case -2147483627:
                return "Error - ASN LDS object: Digest algorithm incorrect data"
            case -2147483626:
                return "Error - ASN LDS object: DG hashes incorrect data"
            case -2147483630:
                return "Error - ASN LDS object: Version info incorrect data"
            case -2147483625:
                return "Error - ASN Certificate: Incorrect data"
            case -2147483624:
                return "Error - ASN Certificate: Version incorrect data"
            case -2147483623:
                return "Error - ASN Certificate: SN incorrect data"
            case -2147483622:
                return "Error - ASN Certificate: Signature incorrect data"
            case -2147483621:
                return "Error - ASN Certificate: Issuer incorrect data"
            case -2147483620:
                return "Error - ASN Certificate: Validity incorrect data"
            case -2147483619:
                return "Error - ASN Certificate: Subject incorrect data"
            case -2147483618:
                return "Error - ASN Certificate: Subject PK incorrect data"
            case -2147483617:
                return "Error - ASN Certificate: Extensions incorrect data"
            case -2147483616:
                return "Error - ASN Signer info: Incorrect data"
            case -2147483615:
                return "Error - ASN Signer info: Version incorrect data"
            case -2147483614:
                return "Error - ASN Signer info: SID incorrect data"
            case -2147483613:
                return "Error - ASN Signer info: Digest algorithms incorrect data"
            case -2147483612:
                return "Error - ASN Signer info: Signed attributes incorrect data"
            case -2147483611:
                return "Error - ASN Signer info: Sign algorithms incorrect data"
            case -2147483610:
                return "Error - ASN Signer info: Signature incorrect data"
            case -2147483609:
                return "Error - ASN Signer info: Unsigned attributes incorrect data"
            case -2147483600:
                return "Error - ICAO LDS object: Unsupported digest algorithm"
            case -2147483599:
                return "Error - ICAO Signed data: Signer infos empty"
            case -2147483598:
                return "Error - ICAO Signer info: Unsupported digest algorithm"
            case -2147483597:
                return "Error - ICAO Signer info: Unsupported signature algorithm"
            case -2147483596:
                return "Error - ICAO Signer info: Message digest error"
            case -2147483594:
                return "Error - ICAO Signer info: Signed attributes missed"
            case -2147483595:
                return "Error - Auth: Signer info cant find certificate"
            case -2147483568:
                return "Error - Auth: Error"
            case -2147483567:
                return "Error - Auth: Unsupported signature algorithm"
            case -2147483566:
                return "Error - Auth: Unsupported public key algorithm"
            case -2147483565:
                return "Error - Auth: Messed algorithms"
            case -2147483564:
                return "Error - Auth: Public key data invalid"
            case -2147483563:
                return "Error - Auth: Algorithm parameters data invalid"
            case -2147483562:
                return "Error - Auth: Signature data invalid"
            case -2147483561:
                return "Error - Auth: Unsupported digest algorithm"
            case -2147483560:
                return "Error - Auth: Signature data incorrect"
            case -2147483559:
                return "Error - Auth: Algorithm parameters not defined"
            case -2147483558:
                return "Error - Auth: Signature check failed"
            case -2147483536:
                return "Error - DG: Wrong Tag"
            case -2130706400:
                return "Error - PACE: Info Not Available"
            case -2130706399:
                return "Error - PACE: Symmetric Cypher Cannot Initialize"
            case -2130706398:
                return "Error - PACE: Key Agreement Cannot Initialize"
            case -2130706397:
                return "Error - PACE: Ephemeral Keys Cannot Create"
            case -2130706396:
                return "Error - PACE: Mapping Cannot Decode Nonce"
            case -2130706395:
                return "Error - PACE: Shared Secret Cannot Create"
            case -2130706394:
                return "Error - PACE: Domain Params Unsupported Format"
            case -2130706393:
                return "Error - PACE: Ephemeral Keys Incorrect"
            case -2130706392:
                return "Error - PACE: Mapping Ephemeral Keys Incorrect"
            case -2130706391:
                return "Error - PACE: Mapping Cannot Perform"
            case -2130706390:
                return "Error - PACE: Non Matching Auth Tokens"
            case -2130706384:
                return "Error - CA: Cannot Find Public Key"
            case -2130706383:
                return "Error - CA: Cannot Find Info"
            case -2130706382:
                return "Error - CA: Incorrect Version"
            case -2130706381:
                return "Error - CA: Cannot Find Domain Parameters"
            case -2130706380:
                return "Error - CA: Key Agreement Cannot Initialize"
            case -2130706379:
                return "Error - CA: Public Key Unsupported Algorithm"
            case -2130706378:
                return "Error - CA: Ephemeral Keys Cannot Create"
            case -2130706377:
                return "Error - CA: Shared Secret Cannot Create"
            case -2130706376:
                return "Error - CA: Non Matching Auth Tokens"
            case -2130706368:
                return "Error - TA: Incorrect Version"
            case -2130706367:
                return "Error - TA: Cannot Build Certificate Chain"
            case -2130706366:
                return "Error - TA: Cannot Find IS Private Key"
            case -2130706365:
                return "Error - TA: Public Key Unsupported Algorithm"
            case -2130706364:
                return "Error - TA: Signature Building Error"
            case -2130706363:
                return "Error - TA: Invalid Key Algorithm Parameters"
            case -2130706352:
                return "Error - AA: Public Key Unsupported Algorithm"
            case -2130706351:
                return "Error - AA: Public Key Incorrect Data"
            case -2130706350:
                return "Error - AA: Public Key Incorrect Parameters"
            case -2130706349:
                return "Error - AA: Public Key Undefined Parameters"
            case -2130706348:
                return "Error - AA: Signature Incorrect Data"
            case -2130706347:
                return "Error - AA: Unsupported recovery scheme"
            case -2130706346:
                return "Error - AA: Incorrect Trailer"
            case -2130706345:
                return "Error - AA: Unsupported Digest Algorithm"
            case -2130706320:
                return "Error - RI: Sector Key Cannot Find"
            case -2130706319:
                return "Error - RI: Sector Key Incorrect Data"
            case -2130706318:
                return "Error - RI: Sector Key Incomplete Data"
            case -2130706336:
                return "Error - CV Certificate: Missing mandatory data PK"
            case -2130706334:
                return "Error - CV Certificate: Public key unsupported"
            case -2130706333:
                return "Error - CV Certificate: CHAT unsupported terminal type"
            case -2130706332:
                return "Error - CV Certificate: Private key unsupported"
            case -2130706331:
                return "Error - CV Certificate: Private key invalid params"
            case -2130706080:
                return "Error - CV Certificate: Incorrect data"
            case -2130706079:
                return "Error - CV Certificate: CPI incorrect data"
            case -2130706078:
                return "Error - CV Certificate: CAR incorrect data"
            case -2130706077:
                return "Error - CV Certificate: Public key incorrect data"
            case -2130706076:
                return "Error - CV Certificate: CHR incorrect data"
            case -2130706075:
                return "Error - CV Certificate: CHAT incorrect data"
            case -2130706074:
                return "Error - CV Certificate: Valid from incorrect data"
            case -2130706073:
                return "Error - CV Certificate: Valid to incorrect data"
            case -2130706072:
                return "Error - CV Certificate: Extensions incorrect data"
            case -2130706071:
                return "Error - CV Certificate: Private key incorrect  data"
            case -2130706070:
                return "Error - CV Certificate: Private key missing"
            case -1879048191:
                return "Notification - ASN certificate: Incorrect version"
            case -1879048190:
                return "Notification - ASN certificate: Non matching signature algorithm"
            case -1879048189:
                return "Notification - ASN certificate: Incorrect time coding"
            case -1879048188:
                return "Notification - ASN certificate: Incorrect use of generalized time"
            case -1879048187:
                return "Notification - ASN certificate: Empty issuer"
            case -1879048186:
                return "Notification - ASN certificate: Empty subject"
            case -1879048184:
                return "Notification - ASN certificate: Unsupported critical extension"
            case -1879048178:
                return "Notification - ASN certificate: Forced default CSCA role"
            case -1879048177:
                return "Notification - ASN certificate: Forced Default DS role"
            case -1879048176:
                return "Notification - ASN certificate: Incorrect issuer subject DS"
            case -1879048169:
                return "Notification - ASN certificate: Duplicating extensions"
            case -1879047680:
                return "Notification - ICAO certificate: Version missed"
            case -1879047679:
                return "Notification - ICAO certificate: Version incorrect"
            case -1879047678:
                return "Notification - ICAO certificate: Issuer country missed"
            case -1879047677:
                return "Notification - ICAO certificate: Issuer common name missed"
            case -1879047676:
                return "Notification - ICAO certificate: Issuer country non compliant"
            case -1879047675:
                return "Notification - ICAO certificate: Subject country missed"
            case -1879047674:
                return "Notification - ICAO certificate: Subject common name missed"
            case -1879047673:
                return "Notification - ICAO certificate: Subject country non compliant"
            case -1879047672:
                return "Notification - ICAO certificate: Using non compliant data"
            case -1879047671:
                return "Notification - ICAO certificate: Unsupported signature algorithm"
            case -1879047670:
                return "Notification - ICAO certificate: Unsupported public key algorithm"
            case -1879047669:
                return "Notification - ICAO certificate: Missed extensions"
            case -1879047668:
                return "Notification - ICAO certificate: Validity"
            case -1879047667:
                return "Notification - ICAO certificate extension: Using non compliant data"
            case -1879047666:
                return "Notification - ICAO certificate extension: Key usage missed"
            case -1879047665:
                return "Notification - ICAO certificate extension: Key usage not critical"
            case -1879047664:
                return "Notification - ICAO certificate extension: Ext key usage incorrect data"
            case -1879047663:
                return "Notification - ICAO certificate extension: Basic constraints missed"
            case -1879047662:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 1"
            case -1879047661:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 2"
            case -1879047660:
                return "Notification - ICAO certificate extension: Basic constraints not critical"
            case -1879047659:
                return "Notification - ICAO certificate extension: Basic constraints incorrect data"
            case -1879047658:
                return "Notification - ICAO certificate extension: Basic constraints path LenC missed"
            case -1879047657:
                return "Notification - ICAO certificate extension: Basic constraints path LenC incorrect"
            case -1879047656:
                return "Notification - ICAO certificate extension: Ext key usage not critical"
            case -1879047655:
                return "Notification - ICAO certificate extension: Ext key usage incorrect usage"
            case -1879047654:
                return "Notification - ICAO certificate extension: Ext key usage incorrect data"
            case -1879047653:
                return "Notification - ICAO certificate extension Auth key: ID missed"
            case -1879047652:
                return "Notification - ICAO certificate extension Auth key: Incorrect data"
            case -1879047651:
                return "Notification - ICAO certificate extension Auth key: Key ID missed"
            case -1879047650:
                return "Notification - ICAO certificate extension: Subject key ID missed"
            case -1879047649:
                return "Notification - ICAO certificate extension: Subject key ID incorrect data"
            case -1879047648:
                return "Notification - ICAO certificate extension: Private key UP missed"
            case -1879047647:
                return "Notification - ICAO certificate extension: Private key UP incorrect data"
            case -1879047646:
                return "Notification - ICAO certificate extension: Private key UP empty"
            case -1879047645:
                return "Notification - ICAO certificate extension: Subject alt name missed"
            case -1879047644:
                return "Notification - ICAO certificate extension: Subject alt name incorrect data"
            case -1879047643:
                return "Notification - ICAO certificate extension: Subject alt name empty"
            case -1879047642:
                return "Notification - ICAO certificate extension: Subject alt name non compliant"
            case -1879047639:
                return "Notification - ICAO certificate extension: Subject alt name DN empty"
            case -1879047638:
                return "Notification - ICAO certificate extension: Subject alt name DN incorrect"
            case -1879047637:
                return "Notification - ICAO certificate extension: Subject alt name DN non compliant"
            case -1879047636:
                return "Notification - ICAO certificate extension: Issuer alt name missed"
            case -1879047635:
                return "Notification - ICAO certificate extension: Issuer alt name incorrect data"
            case -1879047634:
                return "Notification - ICAO certificate extension: Issuer alt name empty"
            case -1879047633:
                return "Notification - ICAO certificate extension: Issuer alt name non compliant"
            case -1879047630:
                return "Notification - ICAO certificate extension: Issuer alt name DN empty"
            case -1879047629:
                return "Notification - ICAO certificate extension: Issuer alt name DN incorrect"
            case -1879047628:
                return "Notification - ICAO certificate extension: Issuer alt name DN non compliant"
            case -1879047627:
                return "Notification - ICAO certificate extension Doc type list: Missed"
            case -1879047626:
                return "Notification - ICAO certificate extension Doc type list: Incorrect data"
            case -1879047625:
                return "Notification - ICAO certificate extension Doc type list: Version"
            case -1879047624:
                return "Notification - ICAO certificate extension Doc type list: Doc types"
            case -1879047623:
                return "Notification - ICAO certificate extension Doc type list: Doc types empty"
            case -1879047622:
                return "Notification - ICAO certificate extension: Dert policies incorrect data"
            case -1879047621:
                return "Notification - ICAO certificate extension: Cert policies empty"
            case -1879047620:
                return "Notification - ICAO certificate extension: Cert policies policy ID missed"
            case -1879047619:
                return "Notification - ICAO certificate extension: CRL dist point missed"
            case -1879047618:
                return "Notification - ICAO certificate extension: CRL dist point incorrect data"
            case -1879047617:
                return "Notification - ICAO certificate extension: CRL dist point empty"
            case -1879047616:
                return "Notification - ICAO certificate extension: CRL dist point point missed"
            case -1879048160:
                return "Notification - ICAO COM: LDS version incorrect"
            case -1879048159:
                return "Notification - ICAO COM: LDS version missing"
            case -1879048158:
                return "Notification - ICAO COM: Unicode version incorrect"
            case -1879048157:
                return "Notification - ICAO COM: Unicode version missing"
            case -1879048156:
                return "Notification - ICAO COM: DGPM incorrect"
            case -1879048155:
                return "Notification - ICAO COM: DGPM missing"
            case -1879048154:
                return "Notification - ICAO COM: DGPM unexpected"
            case -1879048144:
                return "Notification - ICAO application: LDS version unsupported"
            case -1879048143:
                return "Notification - ICAO application: Unicode version unsupported"
            case -1879048142:
                return "Notification - ICAO application: LDS version inconsistent"
            case -1879048141:
                return "Notification - ICAO application: Unicode version inconsistent"
            case -1879047936:
                return "Notification - ASN signed data: OID incorrect"
            case -1879047776:
                return "Notification - ASN signed data: Version incorrect"
            case -1879047935:
                return "Notification - ICAO signed data: Version incorrect"
            case -1879047934:
                return "Notification - ICAO signed data: Digest algorithms empty"
            case -1879047933:
                return "Notification - ICAO signed data: Digest algorithms unsupported"
            case -1879047927:
                return "Notification - ICAO signed data: Signer infos multiple entries"
            case -1879047760:
                return "Notification - ICAO signed data: Certificates missed"
            case -1879047759:
                return "Notification - ICAO signed data: Certificates empty"
            case -1879047758:
                return "Notification - ICAO signed data: CRLs incorrect usage"
            case -1879047932:
                return "Notification - ICAO LDS object: Incorrect content OID"
            case -1879047931:
                return "Notification - ICAO LDS object: DG number incorrect"
            case -1879047930:
                return "Notification - ICAO LDS object: DG hash missing"
            case -1879047929:
                return "Notification - ICAO LDS object: DG hash extra"
            case -1879047928:
                return "Notification - ICAO LDS object: Version incorrect"
            case -1879047744:
                return "Notification - ICAO master list: Version incorrect"
            case -1879047926:
                return "Notification - ASN signer info: Version incorrect"
            case -1879047925:
                return "Notification - ASN signer info: SID incorrect choice"
            case -1879047924:
                return "Notification - ASN signer info: SID digest algorithm not listed"
            case -1879047923:
                return "Notification - ASN signer info: Message digest attr missing"
            case -1879047922:
                return "Notification - ASN signer info: Message digest attr data"
            case -1879047921:
                return "Notification - ASN signer info: Message digest attr value"
            case -1879047920:
                return "Notification - ASN signer info: Content type attr missing"
            case -1879047919:
                return "Notification - ASN signer info: Content type attr data"
            case -1879047918:
                return "Notification - ASN signer info: Content type attr value"
            case -1879047909:
                return "Notification - ASN signer info: Signing time attr missing"
            case -1879047908:
                return "Notification - ASN signer info: Signing time attr data"
            case -1879047907:
                return "Notification - ASN signer info: Signing time attr value"
            case -1879047915:
                return "Notification - Auth signer info: Certificate validity"
            case -1879047914:
                return "Notification - Auth signer info: Certificate root is not trusted"
            case -1879047913:
                return "Notification - Auth signer info: Certificate cant find CSCA"
            case -1879047912:
                return "Notification - Auth signer info: Certificate revoked"
            case -1879047911:
                return "Notification - Auth signer info: Certificate signature invalid"
            case -1879047910:
                return "Notification: Unsupported image format"
            case 139272:
                return "Notification - MRZ: Document type unknown"
            case 139273:
                return "Notification - MRZ: Issuing state syntax error"
            case 139274:
                return "Notification - MRZ: Name is void"
            case 139277:
                return "Notification - MRZ: Number incorrect checksum"
            case 139278:
                return "Notification - MRZ: Nationality syntax error"
            case 139279:
                return "Notification - MRZ: DOB syntax error"
            case 139280:
                return "Notification - MRZ: DOB error"
            case 139281:
                return "Notification - MRZ: DOB incorrect checksum"
            case 139282:
                return "Notification - MRZ: Sex incorrect"
            case 139283:
                return "Notification - MRZ: DOE syntax error"
            case 139284:
                return "Notification - MRZ: DOE error"
            case 139285:
                return "Notification - MRZ: DOE incorrect checksum"
            case 139286:
                return "Notification - MRZ: Optional data incorrect checksum"
            case 139287:
                return "Notification - MRZ: Incorrect checksum"
            case 139288:
                return "Notification - MRZ: Incorrect"
            case -1878982656:
                return "Notification - Biometrics: Format owner missing"
            case -1878917120:
                return "Notification - Biometrics: Format owner incorrect"
            case -1878851584:
                return "Notification - Biometrics: Format type missing"
            case -1878786048:
                return "Notification - Biometrics: Format type incorrect"
            case -1878720512:
                return "Notification - Biometrics: Type incorrect"
            case -1878654976:
                return "Notification - Biometrics: Subtype missing"
            case -1878589440:
                return "Notification - Biometrics: Subtype incorrect"
            case -1878523904:
                return "Notification - Biometrics: BDB image missing"
            case -1878458368:
                return "Notification - Biometrics: BDB format ID incorrect"
            case -1878392832:
                return "Notification - Biometrics: BDB version incorrect "
            case -1878327296:
                return "Notification - Biometrics: BDB data length incorrect"
            case -1877999616:
                return "Notification - Biometrics: BDB Data Gender"
            case -1877934080:
                return "Notification - Biometrics: BDB Data Eye Color"
            case -1877868544:
                return "Notification - Biometrics: BDB Data Hair Color"
            case -1877803008:
                return "Notification - Biometrics: BDB Data Pose Angle Yaw"
            case -1877737472:
                return "Notification - Biometrics: BDB Data Pose Angle Pitch"
            case -1877671936:
                return "Notification - Biometrics: BDB Data Pose Angle Roll"
            case -1877606400:
                return "Notification - Biometrics: BDB Data Pose Angle U Yaw"
            case -1877540864:
                return "Notification - Biometrics: BDB Data Pose Angle U Pitch"
            case -1877475328:
                return "Notification - Biometrics: BDB Data Pose Angle U Roll"
            case -1877409792:
                return "Notification - Biometrics: BDB Data Face Image Type"
            case -1877344256:
                return "Notification - Biometrics: BDB Data Image Data Type"
            case -1862270976:
                return "Notification - SI: PACE Info Unsupported Std Parameters"
            case -1862270975:
                return "Notification - SI: PACE Info Deprecated Version"
            case -1862270974:
                return "Notification - SI: PACE Domain Params Using Std Ref"
            case -1862270973:
                return "Notification - SI: PACE Domain Params Unsupported Algorithm"
            case -1862270972:
                return "Notification - SI: CA Info Incorrect Version"
            case -1862270971:
                return "Notification - SI: CA PublicKey Unsupported Algorithm"
            case -1862270970:
                return "Notification - SI: CA Domain Params Unsupported Algorithm"
            case -1862270969:
                return "Notification - SI: TA Info Incorrect Version"
            case -1862270968:
                return "Notification - SI: TA Info File ID For Version 2"
            case -1862270967:
                return "Notification - SI: eID Security Unsupported Digest Algorithm"
            case -1862270966:
                return "Notification - SI: RI info incorrect version"
            case -1862270965:
                return "Notification - SI: RI domain params unsupported algorithm"
            case -1862270964:
                return "Notification - SI: AA info incorrect version"
            case -1862270963:
                return "Notification - SI: AA info unsupported algorithm"
            case -1862270962:
                return "Notification - SI: AA info inconsistent algorithm reference"
            case -1862270720:
                return "Notification - SI: PACE Info Not Available"
            case -1862270719:
                return "Notification - SI: PACE Info No Std Parameters"
            case -1862270718:
                return "Notification - SI: PACE Info No Matching Domain Params"
            case -1862270717:
                return "Notification - SI: CA Info Not Available"
            case -1862270716:
                return "Notification - SI: CA Domain Params No Required Option"
            case -1862270715:
                return "Notification - SI: CA Domain Params Not Available"
            case -1862270714:
                return "Notification - SI: CA Anonymous Infos"
            case -1862270713:
                return "Notification - SI: CA Info No Matching Domain Params"
            case -1862270712:
                return "Notification - SI: CA Info No Matching Public Key"
            case -1862270711:
                return "Notification - SI: CA Incorrect Infos Quantity"
            case -1862270710:
                return "Notification - SI: TA Info Not Available"
            case -1862270709:
                return "Notification - SI: Card Info Locator Multiple Entries"
            case -1862270708:
                return "Notification - SI: eID Security Info Multiple Entries"
            case -1862270707:
                return "Notification - SI: Privileged TI Multiple Entries"
            case -1862270706:
                return "Notification - SI: Privileged TI Incorrect Usage"
            case -1862270705:
                return "Notification - SI: RI domain params multiple entries"
            case -1862270704:
                return "Notification - SI: Storage PACE Info Non Consistan"
            case -1862270463:
                return "Notification - CV Certificate: Profile incorrect version"
            case -1862270462:
                return "Notification - CV Certificate: Validity"
            case -1862270461:
                return "Notification - CV Certificate: Non CVCA domain parameters"
            case -1862270460:
                return "Notification - CV Certificate: Private key incorrect version"
            case -1862270208:
                return "Notification - TA: PACE static binding used"
            case -1845493483:
                return "Notification - Auth ML signer info: Certificate validity"
            case -1845493482:
                return "Notification - Auth ML signer info: Certificate root is not trusted"
            case -1845493481:
                return "Notification - Auth ML signer info: Certificate cant find CSCA"
            case -1845493480:
                return "Notification - Auth ML signer info: Certificate revoked"
            case -1845493479:
                return "Notification - Auth ML signer info: Certificate signature invalid"
            case this.RFID_ERROR_ALREADY_DONE:
                return "RFID: Requested operation is already done"
            case this.RFID_ERROR_FAILED:
                return "RFID: Failed"
            case this.RFID_Error_GraphManager:
                return "RFID: Creation or connection to Graph Manager COM server failed"
            case this.RFID_ERROR_NO_CHIP_DETECTED:
                return "RFID: No chip is detected"
            case this.RFID_ERROR_NOT_AVAILABLE:
                return "RFID: Unavailable"
            case this.RFID_ERROR_INVALID_PARAMETER:
                return "RFID: Invalid parameter in ExecuteCommand() call found"
            case this.RFID_ERROR_NOT_INITIALIZED:
                return "RFID: Device is uninitialized"
            case this.RFID_Error_NotEnoughMemory:
                return "RFID: Out of memory"
            case this.RFID_ERROR_INVALID_DIRECTORY:
                return "RFID: Invalid directory"
            case this.RFID_ERROR_UNKNOWN_COMMAND:
                return "RFID: Unknown command"
            case this.RFID_ERROR_FILE_IO_ERROR:
                return "RFID File: IO Error"
            case this.RFID_ERROR_BUSY:
                return "RFID: RFID is Busy"
            case -2147418100:
                return "RFID: Firmware need to be updated with newer version"
            case -2147352576:
                return "PCSC: Failed"
            case -2147352575:
                return "PCSC: Reader is unavailable"
            case -2147352574:
                return "PCSC: Card cannot be connected"
            case -2147352573:
                return "PCSC: Card is not connected"
            case -2147352572:
                return "PCSC: Operation is cancelled"
            case -2147352571:
                return "PCSC: Card Is Busy"
            case -2147352570:
                return "PCSC: Failed Smart Card"
            case -2147352560:
                return "PCSC: ExtLe Failed"
            case -2046820352:
                return "LAYER6: Secure Messaging was not activated"
            case -2046820351:
                return "LAYER6: ISO7816_A_03 \"Application selection failure\""
            case -2046820096:
                return "LAYER6: ISO7816_B_01 \"Mutual authentication MAC failure\""
            case -2046820095:
                return "LAYER6: ISO7816_B_02 \"Mutual authentication encryption failure\""
            case -2046820094:
                return "LAYER6: ISO7816_B_03 \"Mutual authentication failure\""
            case -2046819840:
                return "LAYER6: SM failure – MAC missing"
            case -2046819839:
                return "LAYER6: SM failure – cryptogram missing"
            case -2046819838:
                return "LAYER6: SM failure – secured status bytes missing"
            case -2046819837:
                return "LAYER6: SM failure – incorrect MAC"
            case -2046819836:
                return "LAYER6: SM failure – incorrect cryptogram"
            case -2046819584:
                return "LAYER6: Not TLV response data"
            case -2046819583:
                return "LAYER6: Wrong data length (APDU_INS_GET_CHALLENGE)"
            case -2046819582:
                return "LAYER6: APDU_INS_INTERNAL_AUTHENTICATE failure"
            case -2046819581:
                return "LAYER6: MSE:Set KAT failure"
            case -2046819580:
                return "LAYER6: MSE:Set DST failure"
            case -2046819579:
                return "LAYER6: PSO CERTIFICATE failure"
            case -2046819578:
                return "LAYER6: MSE:Set AT failure"
            case -2046819577:
                return "LAYER6: GET CHALLENGE failure"
            case -2046819576:
                return "LAYER6: APDU_INS_EXTERNAL_AUTHENTICATE (External Authentication) failure"
            case -2046819575:
                return "LAYER6: General Authenticity Failure"
            case -2147456382:
                return "LAYER6: File selection failure / file not found"
            case -2147458430:
                return "LAYER6: Reading beyond EOF / Unexpected EOF "
            case -2147456256:
                return "LAYER6: Reading beyond EOF / Unexpected EOF "
            case -2147456384:
                return "LAYER6: Incorrect Params"
            case -2147456376:
                return "LAYER6: No Reference Data"
            case -2147458111:
                return "LAYER6: PWD Suspended"
            case -2147458112:
                return "LAYER6: PWD Blocked"
            case -2147458429:
                return "LAYER6: PWD Deactivatted"
            case -2147456637:
                return "LAYER6: PWD Blocked 2"
            case -2147456636:
                return "LAYER6: PWD Deactivated 2"
            case -2147456635:
                return "LAYER6: PWD Suspended 2"
            case -2146409536:
                return "LAYER6: PWD Failed"
            case -2097152000:
                return "RFID: Not Performed"
            case -2097151999:
                return "RFID: Session Is Closed"
            case -2097151998:
                return "RFID: Terminal Unsupported Operation"
            case -2097151984:
                return "RFID: Terminal Type Unknown"
            case -2097151983:
                return "RFID: Terminal Type Bad Certificate"
            case -2097151982:
                return "RFID: Terminal Type Not Set"
            case -2097151981:
                return "RFID: Procedure Type Unknown"
            case -2097151980:
                return "RFID: Procedure Type Unsupported"
            case -2097151979:
                return "RFID: Procedure Type Not Set"
            case -2097151978:
                return "RFID: Access Key Unknown Type"
            case -2097151977:
                return "RFID: Access Key Unsupported SM Type"
            case -2097151976:
                return "RFID: Access Key Incorrect SM Type"
            case -2097151975:
                return "RFID: Access Key Restricted"
            case -2097151974:
                return "RFID: Access Key Incorrect Data"
            case -2097151973:
                return "RFID: Access Key Not Set"
            case -2097151972:
                return "RFID: Pwd Management Not Authorized"
            case -2097151968:
                return "RFID: Access Control UnknownType"
            case -2097151967:
                return "RFID: Requires SM"
            case -2097151966:
                return "RFID: Requires PACE"
            case -2097151965:
                return "RFID: Requires CA Keys"
            case -2097151964:
                return "RFID: Requires TA"
            case -2097151963:
                return "RFID: Requires CA"
            case -2097151962:
                return "RFID: Incorrect Option CA"
            case -2097151961:
                return "RFID: CA Failed"
            case -2097151960:
                return "RFID: TA Failed"
            case -2097151959:
                return "RFID: AA Failed"
            case -2097151958:
                return "RFID: RI Failed"
            case -2097151952:
                return "RFID: SO Signature Check Failed"
            case -2097151951:
                return "RFID: Hash Check Failed"
            case -2097151936:
                return "RFID: Invalid Aux Data Date Of Expiry"
            case -2097151935:
                return "RFID: Invalid Aux Data Date Of Birth"
            case -2097151934:
                return "RFID: Invalid Aux Data Community ID"
            case -2097151920:
                return "RFID: eSign Requires App Selection"
            case -2097151919:
                return "RFID: eSign PIN Not Set"
            case -2097151918:
                return "RFID: eSign PIN Not Verified"
            case -2097151904:
                return "RFID: Incorrect data"
            case -2097086464:
                return "RFID File: Not Enough Data"
            case -2097020928:
                return "RFID File: Incorrect Data"
            case -2096955392:
                return "RFID File: Unexpected Data"
            case -2096889856:
                return "RFID File: Contents Unexpected Data"
            case -2096824320:
                return "RFID File: Wrong Tag"
            case -2096758784:
                return "RFID File: Cannot Use Data"
            case -2096693248:
                return "RFID File: Cannot Read Data"
            case this.RFID_ERROR_SESSION_FILE_ACCESS_DENIED:
                return "RFID File: Access Denied"
            default:
                return value
        }
    }
}

const eRFID_Password_Type = {
    PPT_UNKNOWN: 0,
    PPT_MRZ: 1,
    PPT_CAN: 2,
    PPT_PIN: 3,
    PPT_PUK: 4,
    PPT_PIN_ESIGN: 5,
    PPT_SAI: 6,
}

const eRFID_SDK_ProfilerType = {
    SPT_DOC_9303_EDITION_2006: 0x00000001,
    SPT_DOC_9303_LDS_PKI_MAINTENANCE: 0x00000002,
}

const eRFID_TerminalType = {
    TET_UNDEFINED: 0,
    TET_INSPECTION_SYSTEM: 1,
    TET_AUTHENTICATION_TERMINAL: 2,
    TET_SIGNATURE_TERMINAL: 3,
    TET_UNAUTHENTICATED_TERMINAL: 4,
}

const eRPRM_Authenticity = {
    NONE: 0,
    UV_LUMINESCENCE: 1,
    IR_B900: 2,
    IMAGE_PATTERN: 4,
    AXIAL_PROTECTION: 8,
    UV_FIBERS: 16,
    IR_VISIBILITY: 32,
    OCR_SECURITY_TEXT: 64,
    IPI: 128,
    PHOTO_EMBED_TYPE: 512,
    HOLOGRAMS: 4096,
    PHOTO_AREA: 8192,
    PORTRAIT_COMPARISON: 32768,
    BARCODE_FORMAT_CHECK: 65536,
    KINEGRAM: 131072,
    HOLOGRAMS_DETECTION: 524288,
}

const eRPRM_FieldVerificationResult = {
    RCF_DISABLED: 0,
    RCF_VERIFIED: 1,
    RCF_NOT_VERIFIED: 2,
    RCF_COMPARE_TRUE: 3,
    RCF_COMPARE_FALSE: 4,
}

const eRPRM_Lights = {
    NONE: 0,
    RPRM_LIGHT_UV: 128,
    RPRM_LIGHT_WHITE_FULL: 6,

    getTranslation: function (value) {
        switch (value) {
            case this.RPRM_LIGHT_UV:
                return "UV"
            case this.RPRM_LIGHT_WHITE_FULL:
                return "Visible light"
            default:
                return value
        }
    }
}

const eRPRM_ResultType = {
    NONE: -1,
    RPRM_RESULT_TYPE_EMPTY: 0,
    RPRM_RESULT_TYPE_RAW_IMAGE: 1,
    RPRM_RESULT_TYPE_FILE_IMAGE: 2,
    RPRM_RESULT_TYPE_MRZ_OCR_EXTENDED: 3,
    RPRM_RESULT_TYPE_BARCODES: 5,
    RPRM_RESULT_TYPE_GRAPHICS: 6,
    RPRM_RESULT_TYPE_MRZ_TEST_QUALITY: 7,
    RPRM_RESULT_TYPE_DOCUMENT_TYPES_CANDIDATES: 8,
    RPRM_RESULT_TYPE_CHOSEN_DOCUMENT_TYPE_CANDIDATE: 9,
    RPRM_RESULT_TYPE_DOCUMENTS_INFO_LIST: 10,
    RPRM_RESULT_TYPE_OCR_LEXICAL_ANALYZE: 15,
    RPRM_RESULT_TYPE_RAW_UNCROPPED_IMAGE: 16,
    RPRM_RESULT_TYPE_VISUAL_OCR_EXTENDED: 17,
    RPRM_RESULT_TYPE_BAR_CODES_TEXT_DATA: 18,
    RPRM_RESULT_TYPE_BAR_CODES_IMAGE_DATA: 19,
    RPRM_RESULT_TYPE_AUTHENTICITY: 20,
    RPRM_RESULT_TYPE_EOS_IMAGE: 23,
    RPRM_RESULT_TYPE_BAYER_IMAGE: 24,
    RPRM_RESULT_TYPE_MAGNETIC_STRIPE: 25,
    RPRM_RESULT_TYPE_MAGNETIC_STRIPE_TEXT_DATA: 26,
    RPRM_RESULT_TYPE_FIELD_FILE_IMAGE: 27,
    RPRM_RESULT_TYPE_DATABASE_CHECK: 28,
    RPRM_RESULT_TYPE_FINGERPRINT_TEMPLATE_ISO: 29,
    RPRM_RESULT_TYPE_INPUT_IMAGE_QUALITY: 30,
    RPRM_RESULT_TYPE_DOCUMENT_POSITION: 85,
    RPRM_RESULT_TYPE_CUSTOM: 100,
    RFID_RESULT_TYPE_RFID_RAW_DATA: 101,
    RFID_RESULT_TYPE_RFID_TEXT_DATA: 102,
    RFID_RESULT_TYPE_RFID_IMAGE_DATA: 103,
    RFID_RESULT_TYPE_RFID_BINARY_DATA: 104,
    RFID_RESULT_TYPE_RFID_ORIGINAL_GRAPHICS: 105,
}

const eRPRM_ResultType_Internal = {
    RPRM_RESULT_TYPE_INTERNAL_PHOTO_POSITION: 99,
    RPRM_RESULT_TYPE_INTERNAL_MAIN_DOCUMENT_INFO: 98,
    RPRM_RESULT_TYPE_INTERNAL_FACE_DETECTION: 97,
    RPRM_RESULT_TYPE_INTERNAL_L1_STYLE_RESULTS: 96,
    RPRM_RESULT_TYPE_INTERNAL_DOC_FORMAT: 95,
    RPRM_RESULT_TYPE_INTERNAL_DOC_FORMAT_ROTATED: 94,
    RPRM_RESULT_TYPE_INTERNAL_DOC_PRE_ORIENTATION_FACE: 93,
    RPRM_RESULT_TYPE_INTERNAL_BSI_XML: 92,
    RPRM_RESULT_TYPE_INTERNAL_COLOR_CALIBRATION_INFO: 91,
    RPRM_RESULT_TYPE_INTERNAL_DIST_CALIBRATION_INFO: 90,
    RPRM_RESULT_TYPE_INTERNAL_DOCS_LIST: 89,
    RPRM_RESULT_TYPE_INTERNAL_VISA_BOUNDS: 88,
    RPRM_RESULT_TYPE_INTERNAL_MRZ_DETECTOR: 87,
    RPRM_RESULT_TYPE_INTERNAL_DOCUMENT_POSITION: 86,
    RPRM_RESULT_TYPE_INTERNAL_BOUNDS_RESULT: 85,
    RPRM_RESULT_TYPE_INTERNAL_ORIENTATION: 84,
    RPRM_RESULT_TYPE_INTERNAL_PRE_ORIENTATION: 83,
    RPRM_RESULT_TYPE_INTERNAL_DEVICE_TYPE: 82,
    RPRM_RESULT_TYPE_INTERNAL_TEXT_DOC_INFO: 81,
    RPRM_RESULT_TYPE_INTERNAL_GRAPHICS_DOC_INFO: 80,
    RPRM_RESULT_TYPE_INTERNAL_BARCODE_DOC_INFO: 79,
    RPRM_RESULT_TYPE_INTERNAL_SOURCE_IMAGES_INFO: 78,
    RPRM_RESULT_TYPE_INTERNAL_REQUIRED_OCR_FIELDS: 77,
    RPRM_RESULT_TYPE_INTERNAL_LEX_ANALYSIS_DEPTH: 76,
    RPRM_RESULT_TYPE_INTERNAL_ORIGINAL_RESOLUTION_PPM: 75,
    RPRM_RESULT_TYPE_INTERNAL_BOUNDS_LOCATION_PARAMS: 74,
    RPRM_RESULT_TYPE_INTERNAL_BSI_XML_V2: 73,
    RPRM_RESULT_TYPE_INTERNAL_CANDIDATE_INFO: 72,
    RPRM_RESULT_TYPE_INTERNAL_SAMPLE_PATH: 71,
    RPRM_RESULT_TYPE_INTERNAL_BIND_RESULT: 70,
    RPRM_RESULT_TYPE_INTERNAL_SAVE_DEBUG_INFO: 69,
    RPRM_RESULT_TYPE_INTERNAL_DOCUMENT_JSON_DESC: 68,
    RPRM_RESULT_TYPE_INTERNAL_BIND_LAYERS_LIST_DESC: 67,
    RPRM_RESULT_TYPE_INTERNAL_MRZ_IMAGE: 66,
    RPRM_RESULT_TYPE_INTERNAL_RAW_CALIBRATE_IMAGES: 65,
    RPRM_RESULT_TYPE_INTERNAL_BYTE_ARRAY: 64,
    RPRM_RESULT_TYPE_INTERNAL_DOCUMENT_JSON: 63,
    RPRM_RESULT_TYPE_INTERNAL_BARCODE_POSITION: 62,
    RPRM_RESULT_TYPE_INTERNAL_MRZ_POSITION: 61,
}

const eRPRM_SecurityFeatureType = {
    NONE: -1,
    SECURITY_FEATURE_TYPE_BLANK: 0,
    SECURITY_FEATURE_TYPE_FILL: 1,
    SECURITY_FEATURE_TYPE_PHOTO: 2,
    SECURITY_FEATURE_TYPE_MRZ: 3,
    SECURITY_FEATURE_TYPE_FALSE_LUMINESCENCE: 4,
    SECURITY_FEATURE_TYPE_HOLO_SIMPLE: 5,
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_STATIC: 6,
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_MULTI_STATIC: 7,
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_DINAMIC: 8,
    SECURITY_FEATURE_TYPE_PATTERN_NOT_INTERRUPTED: 9,
    SECURITY_FEATURE_TYPE_PATTERN_NOT_SHIFTED: 10,
    SECURITY_FEATURE_TYPE_PATTERN_SAME_COLORS: 11,
    SECURITY_FEATURE_TYPE_PATTERN_IR_INVISIBLE: 12,
    SECURITY_FEATURE_TYPE_PHOTO_SIZE_CHECK: 13,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_GHOST: 14,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_RFID: 15,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_VISUAL: 16,
    SECURITY_FEATURE_TYPE_BARCODE: 17,
    SECURITY_FEATURE_TYPE_PATTERN_DIFFERENT_LINES_THICKNESS: 18,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_CAMERA: 19,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFID_VS_CAMERA: 20,
    SECURITY_FEATURE_TYPE_GHOST_PHOTO: 21,
    SECURITY_FEATURE_TYPE_CLEAR_GHOST_PHOTO: 22,
    SECURITY_FEATURE_TYPE_INVISIBLE_OBJECT: 23,
    SECURITY_FEATURE_TYPE_LOW_CONTRAST_OBJECT: 24,
    SECURITY_FEATURE_TYPE_PHOTO_COLOR: 25,
    SECURITY_FEATURE_TYPE_PHOTO_SHAPE: 26,
    SECURITY_FEATURE_TYPE_PHOTO_CORNERS: 27,
    DOCUMENT_CANCELLING_DETECTOR: 28,
}

const eSignManagementAction = {
    smaUndefined: 0,
    smaCreatePIN: 1,
    smaChangePIN: 2,
    smaUnblockPIN: 3,
    smaTerminatePIN: 4,
    smaGenerateKeys: 5,
    smaTerminateKeys: 6,
    smaSignData: 7,
}

const eVisualFieldType = {
    FT_DOCUMENT_CLASS_CODE: 0,
    FT_ISSUING_STATE_CODE: 1,
    FT_DOCUMENT_NUMBER: 2,
    FT_DATE_OF_EXPIRY: 3,
    FT_DATE_OF_ISSUE: 4,
    FT_DATE_OF_BIRTH: 5,
    FT_PLACE_OF_BIRTH: 6,
    FT_PERSONAL_NUMBER: 7,
    FT_SURNAME: 8,
    FT_GIVEN_NAMES: 9,
    FT_MOTHERS_NAME: 10,
    FT_NATIONALITY: 11,
    FT_SEX: 12,
    FT_HEIGHT: 13,
    FT_WEIGHT: 14,
    FT_EYES_COLOR: 15,
    FT_HAIR_COLOR: 16,
    FT_ADDRESS: 17,
    FT_DONOR: 18,
    FT_SOCIAL_SECURITY_NUMBER: 19,
    FT_DL_CLASS: 20,
    FT_DL_ENDORSED: 21,
    FT_DL_RESTRICTION_CODE: 22,
    FT_DL_UNDER_21_DATE: 23,
    FT_AUTHORITY: 24,
    FT_SURNAME_AND_GIVEN_NAMES: 25,
    FT_NATIONALITY_CODE: 26,
    FT_PASSPORT_NUMBER: 27,
    FT_INVITATION_NUMBER: 28,
    FT_VISA_ID: 29,
    FT_VISA_CLASS: 30,
    FT_VISA_SUB_CLASS: 31,
    FT_MRZ_STRING_1: 32,
    FT_MRZ_STRING_2: 33,
    FT_MRZ_STRING_3: 34,
    FT_MRZ_TYPE: 35,
    FT_OPTIONAL_DATA: 36,
    FT_DOCUMENT_CLASS_NAME: 37,
    FT_ISSUING_STATE_NAME: 38,
    FT_PLACE_OF_ISSUE: 39,
    FT_DOCUMENT_NUMBER_CHECKSUM: 40,
    FT_DATE_OF_BIRTH_CHECKSUM: 41,
    FT_DATE_OF_EXPIRY_CHECKSUM: 42,
    FT_PERSONAL_NUMBER_CHECKSUM: 43,
    FT_FINAL_CHECKSUM: 44,
    FT_PASSPORT_NUMBER_CHECKSUM: 45,
    FT_INVITATION_NUMBER_CHECKSUM: 46,
    FT_VISA_ID_CHECKSUM: 47,
    FT_SURNAME_AND_GIVEN_NAMES_CHECKSUM: 48,
    FT_VISA_VALID_UNTIL_CHECKSUM: 49,
    FT_OTHER: 50,
    FT_MRZ_STRINGS: 51,
    FT_NAME_SUFFIX: 52,
    FT_NAME_PREFIX: 53,
    FT_DATE_OF_ISSUE_CHECKSUM: 54,
    FT_DATE_OF_ISSUE_CHECK_DIGIT: 55,
    FT_DOCUMENT_SERIES: 56,
    FT_REG_CERT_REG_NUMBER: 57,
    FT_REG_CERT_CAR_MODEL: 58,
    FT_REG_CERT_CAR_COLOR: 59,
    FT_REG_CERT_BODY_NUMBER: 60,
    FT_REG_CERT_CAR_TYPE: 61,
    FT_REG_CERT_MAX_WEIGHT: 62,
    FT_REG_CERT_WEIGHT: 63,
    FT_ADDRESS_AREA: 64,
    FT_ADDRESS_STATE: 65,
    FT_ADDRESS_BUILDING: 66,
    FT_ADDRESS_HOUSE: 67,
    FT_ADDRESS_FLAT: 68,
    FT_PLACE_OF_REGISTRATION: 69,
    FT_DATE_OF_REGISTRATION: 70,
    FT_RESIDENT_FROM: 71,
    FT_RESIDENT_UNTIL: 72,
    FT_AUTHORITY_CODE: 73,
    FT_PLACE_OF_BIRTH_AREA: 74,
    FT_PLACE_OF_BIRTH_STATE_CODE: 75,
    FT_ADDRESS_STREET: 76,
    FT_ADDRESS_CITY: 77,
    FT_ADDRESS_JURISDICTION_CODE: 78,
    FT_ADDRESS_POSTAL_CODE: 79,
    FT_DOCUMENT_NUMBER_CHECK_DIGIT: 80,
    FT_DATE_OF_BIRTH_CHECK_DIGIT: 81,
    FT_DATE_OF_EXPIRY_CHECK_DIGIT: 82,
    FT_PERSONAL_NUMBER_CHECK_DIGIT: 83,
    FT_FINAL_CHECK_DIGIT: 84,
    FT_PASSPORT_NUMBER_CHECK_DIGIT: 85,
    FT_INVITATION_NUMBER_CHECK_DIGIT: 86,
    FT_VISA_ID_CHECK_DIGIT: 87,
    FT_SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT: 88,
    FT_VISA_VALID_UNTIL_CHECK_DIGIT: 89,
    FT_PERMIT_DL_CLASS: 90,
    FT_PERMIT_DATE_OF_EXPIRY: 91,
    FT_PERMIT_IDENTIFIER: 92,
    FT_PERMIT_DATE_OF_ISSUE: 93,
    FT_PERMIT_RESTRICTION_CODE: 94,
    FT_PERMIT_ENDORSED: 95,
    FT_ISSUE_TIMESTAMP: 96,
    FT_NUMBER_OF_DUPLICATES: 97,
    FT_MEDICAL_INDICATOR_CODES: 98,
    FT_NON_RESIDENT_INDICATOR: 99,
    FT_VISA_TYPE: 100,
    FT_VISA_VALID_FROM: 101,
    FT_VISA_VALID_UNTIL: 102,
    FT_DURATION_OF_STAY: 103,
    FT_NUMBER_OF_ENTRIES: 104,
    FT_DAY: 105,
    FT_MONTH: 106,
    FT_YEAR: 107,
    FT_UNIQUE_CUSTOMER_IDENTIFIER: 108,
    FT_COMMERCIAL_VEHICLE_CODES: 109,
    FT_AKA_DATE_OF_BIRTH: 110,
    FT_AKA_SOCIAL_SECURITY_NUMBER: 111,
    FT_AKA_SURNAME: 112,
    FT_AKA_GIVEN_NAMES: 113,
    FT_AKA_NAME_SUFFIX: 114,
    FT_AKA_NAME_PREFIX: 115,
    FT_MAILING_ADDRESS_STREET: 116,
    FT_MAILING_ADDRESS_CITY: 117,
    FT_MAILING_ADDRESS_JURISDICTION_CODE: 118,
    FT_MAILING_ADDRESS_POSTAL_CODE: 119,
    FT_AUDIT_INFORMATION: 120,
    FT_INVENTORY_NUMBER: 121,
    FT_RACE_ETHNICITY: 122,
    FT_JURISDICTION_VEHICLE_CLASS: 123,
    FT_JURISDICTION_ENDORSEMENT_CODE: 124,
    FT_JURISDICTION_RESTRICTION_CODE: 125,
    FT_FAMILY_NAME: 126,
    FT_GIVEN_NAMES_RUS: 127,
    FT_VISA_ID_RUS: 128,
    FT_FATHERS_NAME: 129,
    FT_FATHERS_NAME_RUS: 130,
    FT_SURNAME_AND_GIVEN_NAMES_RUS: 131,
    FT_PLACE_OF_BIRTH_RUS: 132,
    FT_AUTHORITY_RUS: 133,
    FT_ISSUING_STATE_CODE_NUMERIC: 134,
    FT_NATIONALITY_CODE_NUMERIC: 135,
    FT_ENGINE_POWER: 136,
    FT_ENGINE_VOLUME: 137,
    FT_CHASSIS_NUMBER: 138,
    FT_ENGINE_NUMBER: 139,
    FT_ENGINE_MODEL: 140,
    FT_VEHICLE_CATEGORY: 141,
    FT_IDENTITY_CARD_NUMBER: 142,
    FT_CONTROL_NO: 143,
    FT_PARRENTS_GIVEN_NAMES: 144,
    FT_SECOND_SURNAME: 145,
    FT_MIDDLE_NAME: 146,
    FT_REG_CERT_VIN: 147,
    FT_REG_CERT_VIN_CHECK_DIGIT: 148,
    FT_REG_CERT_VIN_CHECKSUM: 149,
    FT_LINE_1_CHECK_DIGIT: 150,
    FT_LINE_2_CHECK_DIGIT: 151,
    FT_LINE_3_CHECK_DIGIT: 152,
    FT_LINE_1_CHECKSUM: 153,
    FT_LINE_2_CHECKSUM: 154,
    FT_LINE_3_CHECKSUM: 155,
    FT_REG_CERT_REG_NUMBER_CHECK_DIGIT: 156,
    FT_REG_CERT_REG_NUMBER_CHECKSUM: 157,
    FT_REG_CERT_VEHICLE_ITS_CODE: 158,
    FT_CARD_ACCESS_NUMBER: 159,
    FT_MARITAL_STATUS: 160,
    FT_COMPANY_NAME: 161,
    FT_SPECIAL_NOTES: 162,
    FT_SURNAME_OF_SPOSE: 163,
    FT_TRACKING_NUMBER: 164,
    FT_BOOKLET_NUMBER: 165,
    FT_CHILDREN: 166,
    FT_COPY: 167,
    FT_SERIAL_NUMBER: 168,
    FT_DOSSIER_NUMBER: 169,
    FT_AKA_SURNAME_AND_GIVEN_NAMES: 170,
    FT_TERRITORIAL_VALIDITY: 171,
    FT_MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS: 172,
    FT_DL_CDL_RESTRICTION_CODE: 173,
    FT_DL_UNDER_18_DATE: 174,
    FT_DL_RECORD_CREATED: 175,
    FT_DL_DUPLICATE_DATE: 176,
    FT_DL_ISS_TYPE: 177,
    FT_MILITARY_BOOK_NUMBER: 178,
    FT_DESTINATION: 179,
    FT_BLOOD_GROUP: 180,
    FT_SEQUENCE_NUMBER: 181,
    FT_REG_CERT_BODY_TYPE: 182,
    FT_REG_CERT_CAR_MARK: 183,
    FT_TRANSACTION_NUMBER: 184,
    FT_AGE: 185,
    FT_FOLIO_NUMBER: 186,
    FT_VOTER_KEY: 187,
    FT_ADDRESS_MUNICIPALITY: 188,
    FT_ADDRESS_LOCATION: 189,
    FT_SECTION: 190,
    FT_OCR_NUMBER: 191,
    FT_FEDERAL_ELECTIONS: 192,
    FT_REFERENCE_NUMBER: 193,
    FT_OPTIONAL_DATA_CHECKSUM: 194,
    FT_OPTIONAL_DATA_CHECK_DIGIT: 195,
    FT_VISA_NUMBER: 196,
    FT_VISA_NUMBER_CHECKSUM: 197,
    FT_VISA_NUMBER_CHECK_DIGIT: 198,
    FT_VOTER: 199,
    FT_PREVIOUS_TYPE: 200,
    FT_FIELD_FROM_MRZ: 220,
    FT_CURRENT_DATE: 221,
    FT_STATUS_DATE_OF_EXPIRY: 251,
    FT_BANKNOTE_NUMBER: 252,
    FT_CSC_CODE: 253,
    FT_ARTISTIC_NAME: 254,
    FT_ACADEMIC_TITLE: 255,
    FT_ADDRESS_COUNTRY: 256,
    FT_ADDRESS_ZIPCODE: 257,
    FT_E_ID_RESIDENCE_PERMIT_1: 258,
    FT_E_ID_RESIDENCE_PERMIT_2: 259,
    FT_E_ID_PLACE_OF_BIRTH_STREET: 260,
    FT_E_ID_PLACE_OF_BIRTH_CITY: 261,
    FT_E_ID_PLACE_OF_BIRTH_STATE: 262,
    FT_E_ID_PLACE_OF_BIRTH_COUNTRY: 263,
    FT_E_ID_PLACE_OF_BIRTH_ZIPCODE: 264,
    FT_CDL_CLASS: 265,
    FT_DL_UNDER_19_DATE: 266,
    FT_WEIGHT_POUNDS: 267,
    FT_LIMITED_DURATION_DOCUMENT_INDICATOR: 268,
    FT_ENDORSEMENT_EXPIRATION_DATE: 269,
    FT_REVISION_DATE: 270,
    FT_COMPLIANCE_TYPE: 271,
    FT_FAMILY_NAME_TRUNCATION: 272,
    FT_FIRST_NAME_TRUNCATION: 273,
    FT_MIDDLE_NAME_TRUNCATION: 274,
    FT_EXAM_DATE: 275,
    FT_ORGANIZATION: 276,
    FT_DEPARTMENT: 277,
    FT_PAY_GRADE: 278,
    FT_RANK: 279,
    FT_BENEFITS_NUMBER: 280,
    FT_SPONSOR_SERVICE: 281,
    FT_SPONSOR_STATUS: 282,
    FT_SPONSOR: 283,
    FT_RELATIONSHIP: 284,
    FT_USCIS: 285,
    FT_CATEGORY: 286,
    FT_CONDITIONS: 287,
    FT_IDENTIFIER: 288,
    FT_CONFIGURATION: 289,
    FT_DISCRETIONARY_DATA: 290,
    FT_LINE_1_OPTIONAL_DATA: 291,
    FT_LINE_2_OPTIONAL_DATA: 292,
    FT_LINE_3_OPTIONAL_DATA: 293,
    FT_EQV_CODE: 294,
    FT_ALT_CODE: 295,
    FT_BINARY_CODE: 296,
    FT_PSEUDO_CODE: 297,
    FT_FEE: 298,
    FT_STAMP_NUMBER: 299,
    FT_SBH_SECURITYOPTIONS: 300,
    FT_SBH_INTEGRITYOPTIONS: 301,
    FT_DATE_OF_CREATION: 302,
    FT_VALIDITY_PERIOD: 303,
    FT_PATRON_HEADER_VERSION: 304,
    FT_BDB_TYPE: 305,
    FT_BIOMETRIC_TYPE: 306,
    FT_BIOMETRIC_SUBTYPE: 307,
    FT_BIOMETRIC_PRODUCTID: 308,
    FT_BIOMETRIC_FORMAT_OWNER: 309,
    FT_BIOMETRIC_FORMAT_TYPE: 310,
    FT_PHONE: 311,
    FT_PROFESSION: 312,
    FT_TITLE: 313,
    FT_PERSONAL_SUMMARY: 314,
    FT_OTHER_VALID_ID: 315,
    FT_CUSTODY_INFO: 316,
    FT_OTHER_NAME: 317,
    FT_OBSERVATIONS: 318,
    FT_TAX: 319,
    FT_DATE_OF_PERSONALIZATION: 320,
    FT_PERSONALIZATION_SN: 321,
    FT_OTHERPERSON_NAME: 322,
    FT_PERSONTONOTIFY_DATE_OF_RECORD: 323,
    FT_PERSONTONOTIFY_NAME: 324,
    FT_PERSONTONOTIFY_PHONE: 325,
    FT_PERSONTONOTIFY_ADDRESS: 326,
    FT_DS_CERTIFICATE_ISSUER: 327,
    FT_DS_CERTIFICATE_SUBJECT: 328,
    FT_DS_CERTIFICATE_VALIDFROM: 329,
    FT_DS_CERTIFICATE_VALIDTO: 330,
    FT_VRC_DATAOBJECT_ENTRY: 331,
    FT_TYPE_APPROVAL_NUMBER: 332,
    FT_ADMINISTRATIVE_NUMBER: 333,
    FT_DOCUMENT_DISCRIMINATOR: 334,
    FT_DATA_DISCRIMINATOR: 335,
    FT_ISO_ISSUER_ID_NUMBER: 336,
    FT_GNIB_NUMBER: 340,
    FT_DEPT_NUMBER: 341,
    FT_TELEX_CODE: 342,
    FT_ALLERGIES: 343,
    FT_SP_CODE: 344,
    FT_COURT_CODE: 345,
    FT_CTY: 346,
    FT_SPONSOR_SSN: 347,
    FT_DO_D_NUMBER: 348,
    FT_MC_NOVICE_DATE: 349,
    FT_DUF_NUMBER: 350,
    FT_AGY: 351,
    FT_PNR_CODE: 352,
    FT_FROM_AIRPORT_CODE: 353,
    FT_TO_AIRPORT_CODE: 354,
    FT_FLIGHT_NUMBER: 355,
    FT_DATE_OF_FLIGHT: 356,
    FT_SEAT_NUMBER: 357,
    FT_DATE_OF_ISSUE_BOARDING_PASS: 358,
    FT_CCW_UNTIL: 359,
    FT_REFERENCE_NUMBER_CHECKSUM: 360,
    FT_REFERENCE_NUMBER_CHECK_DIGIT: 361,
    FT_ROOM_NUMBER: 362,
    FT_RELIGION: 363,
    FT_REMAINDER_TERM: 364,
    FT_ELECTRONIC_TICKET_INDICATOR: 365,
    FT_COMPARTMENT_CODE: 366,
    FT_CHECK_IN_SEQUENCE_NUMBER: 367,
    FT_AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER: 368,
    FT_AIRLINE_NUMERIC_CODE: 369,
    FT_TICKET_NUMBER: 370,
    FT_FREQUENT_FLYER_AIRLINE_DESIGNATOR: 371,
    FT_FREQUENT_FLYER_NUMBER: 372,
    FT_FREE_BAGGAGE_ALLOWANCE: 373,
    FT_PDF_417_CODEC: 374,
    FT_IDENTITY_CARD_NUMBER_CHECKSUM: 375,
    FT_IDENTITY_CARD_NUMBER_CHECK_DIGIT: 376,
    FT_VETERAN: 377,
    FT_DL_CLASS_CODE_A_1_FROM: 378,
    FT_DL_CLASS_CODE_A_1_TO: 379,
    FT_DL_CLASS_CODE_A_1_NOTES: 380,
    FT_DL_CLASS_CODE_A_FROM: 381,
    FT_DL_CLASS_CODE_A_TO: 382,
    FT_DL_CLASS_CODE_A_NOTES: 383,
    FT_DL_CLASS_CODE_B_FROM: 384,
    FT_DL_CLASS_CODE_B_TO: 385,
    FT_DL_CLASS_CODE_B_NOTES: 386,
    FT_DL_CLASS_CODE_C_1_FROM: 387,
    FT_DL_CLASS_CODE_C_1_TO: 388,
    FT_DL_CLASS_CODE_C_1_NOTES: 389,
    FT_DL_CLASS_CODE_C_FROM: 390,
    FT_DL_CLASS_CODE_C_TO: 391,
    FT_DL_CLASS_CODE_C_NOTES: 392,
    FT_DL_CLASS_CODE_D_1_FROM: 393,
    FT_DL_CLASS_CODE_D_1_TO: 394,
    FT_DL_CLASS_CODE_D_1_NOTES: 395,
    FT_DL_CLASS_CODE_D_FROM: 396,
    FT_DL_CLASS_CODE_D_TO: 397,
    FT_DL_CLASS_CODE_D_NOTES: 398,
    FT_DL_CLASS_CODE_BE_FROM: 399,
    FT_DL_CLASS_CODE_BE_TO: 400,
    FT_DL_CLASS_CODE_BE_NOTES: 401,
    FT_DL_CLASS_CODE_C_1_E_FROM: 402,
    FT_DL_CLASS_CODE_C_1_E_TO: 403,
    FT_DL_CLASS_CODE_C_1_E_NOTES: 404,
    FT_DL_CLASS_CODE_CE_FROM: 405,
    FT_DL_CLASS_CODE_CE_TO: 406,
    FT_DL_CLASS_CODE_CE_NOTES: 407,
    FT_DL_CLASS_CODE_D_1_E_FROM: 408,
    FT_DL_CLASS_CODE_D_1_E_TO: 409,
    FT_DL_CLASS_CODE_D_1_E_NOTES: 410,
    FT_DL_CLASS_CODE_DE_FROM: 411,
    FT_DL_CLASS_CODE_DE_TO: 412,
    FT_DL_CLASS_CODE_DE_NOTES: 413,
    FT_DL_CLASS_CODE_M_FROM: 414,
    FT_DL_CLASS_CODE_M_TO: 415,
    FT_DL_CLASS_CODE_M_NOTES: 416,
    FT_DL_CLASS_CODE_L_FROM: 417,
    FT_DL_CLASS_CODE_L_TO: 418,
    FT_DL_CLASS_CODE_L_NOTES: 419,
    FT_DL_CLASS_CODE_T_FROM: 420,
    FT_DL_CLASS_CODE_T_TO: 421,
    FT_DL_CLASS_CODE_T_NOTES: 422,
    FT_DL_CLASS_CODE_AM_FROM: 423,
    FT_DL_CLASS_CODE_AM_TO: 424,
    FT_DL_CLASS_CODE_AM_NOTES: 425,
    FT_DL_CLASS_CODE_A_2_FROM: 426,
    FT_DL_CLASS_CODE_A_2_TO: 427,
    FT_DL_CLASS_CODE_A_2_NOTES: 428,
    FT_DL_CLASS_CODE_B_1_FROM: 429,
    FT_DL_CLASS_CODE_B_1_TO: 430,
    FT_DL_CLASS_CODE_B_1_NOTES: 431,
    FT_SURNAME_AT_BIRTH: 432,
    FT_CIVIL_STATUS: 433,
    FT_NUMBER_OF_SEATS: 434,
    FT_NUMBER_OF_STANDING_PLACES: 435,
    FT_MAX_SPEED: 436,
    FT_FUEL_TYPE: 437,
    FT_EC_ENVIRONMENTAL_TYPE: 438,
    FT_POWER_WEIGHT_RATIO: 439,
    FT_MAX_MASS_OF_TRAILER_BRAKED: 440,
    FT_MAX_MASS_OF_TRAILER_UNBRAKED: 441,
    FT_TRANSMISSION_TYPE: 442,
    FT_TRAILER_HITCH: 443,
    FT_ACCOMPANIED_BY: 444,
    FT_POLICE_DISTRICT: 445,
    FT_FIRST_ISSUE_DATE: 446,
    FT_PAYLOAD_CAPACITY: 447,
    FT_NUMBER_OF_AXELS: 448,
    FT_PERMISSIBLE_AXLE_LOAD: 449,
    FT_PRECINCT: 450,
    FT_INVITED_BY: 451,
    FT_PURPOSE_OF_ENTRY: 452,
    FT_SKIN_COLOR: 453,
    FT_COMPLEXION: 454,
    FT_AIRPORT_FROM: 455,
    FT_AIRPORT_TO: 456,
    FT_AIRLINE_NAME: 457,
    FT_AIRLINE_NAME_FREQUENT_FLYER: 458,
    FT_LICENSE_NUMBER: 459,
    FT_IN_TANKS: 460,
    FT_EXEPT_IN_TANKS: 461,
    FT_FAST_TRACK: 462,
    FT_OWNER: 463,
    FT_MRZ_STRINGS_ICAO_RFID: 464,
    FT_NUMBER_OF_CARD_ISSUANCE: 465,
    FT_NUMBER_OF_CARD_ISSUANCE_CHECKSUM: 466,
    FT_NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT: 467,
    FT_CENTURY_DATE_OF_BIRTH: 468,
    FT_DL_CLASSCODE_A3_FROM: 469,
    FT_DL_CLASSCODE_A3_TO: 470,
    FT_DL_CLASSCODE_A3_NOTES: 471,
    FT_DL_CLASSCODE_C2_FROM: 472,
    FT_DL_CLASSCODE_C2_TO: 473,
    FT_DL_CLASSCODE_C2_NOTES: 474,
    FT_DL_CLASSCODE_B2_FROM: 475,
    FT_DL_CLASSCODE_B2_TO: 476,
    FT_DL_CLASSCODE_B2_NOTES: 477,
    FT_DL_CLASSCODE_D2_FROM: 478,
    FT_DL_CLASSCODE_D2_TO: 479,
    FT_DL_CLASSCODE_D2_NOTES: 480,
    FT_DL_CLASSCODE_B2E_FROM: 481,
    FT_DL_CLASSCODE_B2E_TO: 482,
    FT_DL_CLASSCODE_B2E_NOTES: 483,
    FT_DL_CLASSCODE_G_FROM: 484,
    FT_DL_CLASSCODE_G_TO: 485,
    FT_DL_CLASSCODE_G_NOTES: 486,
    FT_DL_CLASSCODE_J_FROM: 487,
    FT_DL_CLASSCODE_J_TO: 488,
    FT_DL_CLASSCODE_J_NOTES: 489,
    FT_DL_CLASSCODE_LC_FROM: 490,
    FT_DL_CLASSCODE_LC_TO: 491,
    FT_DLC_LASSCODE_LC_NOTES: 492,
    FT_BANKCARDNUMBER: 493,
    FT_BANKCARDVALIDTHRU: 494,
    FT_TAX_NUMBER: 495,
    FT_HEALTH_NUMBER: 496,
    FT_GRANDFATHERNAME: 497,
    FT_SELECTEE_INDICATOR: 498,
    FT_MOTHER_SURNAME: 499,
    FT_MOTHER_GIVENNAME: 500,
    FT_FATHER_SURNAME: 501,
    FT_FATHER_GIVENNAME: 502,
    FT_MOTHER_DATEOFBIRTH: 503,
    FT_FATHER_DATEOFBIRTH: 504,
    FT_MOTHER_PERSONALNUMBER: 505,
    FT_FATHER_PERSONALNUMBER: 506,
    FT_MOTHER_PLACEOFBIRTH: 507,
    FT_FATHER_PLACEOFBIRTH: 508,
    FT_MOTHER_COUNTRYOFBIRTH: 509,
    FT_FATHER_COUNTRYOFBIRTH: 510,
    FT_DATE_FIRST_RENEWAL: 511,
    FT_DATE_SECOND_RENEWAL: 512,
    FT_PLACE_OF_EXAMINATION: 513,
    FT_APPLICATION_NUMBER: 514,
    FT_VOUCHER_NUMBER: 515,
    FT_AUTHORIZATION_NUMBER: 516,
    FT_FACULTY: 517,
    FT_FORM_OF_EDUCATION: 518,
    FT_DNI_NUMBER: 519,
    FT_RETIREMENT_NUMBER: 520,
    FT_PROFESSIONAL_ID_NUMBER: 521,
    FT_AGE_AT_ISSUE: 522,
    FT_YEARS_SINCE_ISSUE: 523,
    FT_DLCLASSCODE_BTP_FROM: 524,
    FT_DLCLASSCODE_BTP_NOTES: 525,
    FT_DLCLASSCODE_BTP_TO: 526,
    FT_DLCLASSCODE_C3_FROM: 527,
    FT_DLCLASSCODE_C3_NOTES: 528,
    FT_DLCLASSCODE_C3_TO: 529,
    FT_DLCLASSCODE_E_FROM: 530,
    FT_DLCLASSCODE_E_NOTES: 531,
    FT_DLCLASSCODE_E_TO: 532,
    FT_DLCLASSCODE_F_FROM: 533,
    FT_DLCLASSCODE_F_NOTES: 534,
    FT_DLCLASSCODE_F_TO: 535,
    FT_DLCLASSCODE_FA_FROM: 536,
    FT_DLCLASSCODE_FA_NOTES: 537,
    FT_DLCLASSCODE_FA_TO: 538,
    FT_DLCLASSCODE_FA1_FROM: 539,
    FT_DLCLASSCODE_FA1_NOTES: 540,
    FT_DLCLASSCODE_FA1_TO: 541,
    FT_DLCLASSCODE_FB_FROM: 542,
    FT_DLCLASSCODE_FB_NOTES: 543,
    FT_DLCLASSCODE_FB_TO: 544,
    FT_DLCLASSCODE_G1_FROM: 545,
    FT_DLCLASSCODE_G1_NOTES: 546,
    FT_DLCLASSCODE_G1_TO: 547,
    FT_DLCLASSCODE_H_FROM: 548,
    FT_DLCLASSCODE_H_NOTES: 549,
    FT_DLCLASSCODE_H_TO: 550,
    FT_DLCLASSCODE_I_FROM: 551,
    FT_DLCLASSCODE_I_NOTES: 552,
    FT_DLCLASSCODE_I_TO: 553,
    FT_DLCLASSCODE_K_FROM: 554,
    FT_DLCLASSCODE_K_NOTES: 555,
    FT_DLCLASSCODE_K_TO: 556,
    FT_DLCLASSCODE_LK_FROM: 557,
    FT_DLCLASSCODE_LK_NOTES: 558,
    FT_DLCLASSCODE_LK_TO: 559,
    FT_DLCLASSCODE_N_FROM: 560,
    FT_DLCLASSCODE_N_NOTES: 561,
    FT_DLCLASSCODE_N_TO: 562,
    FT_DLCLASSCODE_S_FROM: 563,
    FT_DLCLASSCODE_S_NOTES: 564,
    FT_DLCLASSCODE_S_TO: 565,
    FT_DLCLASSCODE_TB_FROM: 566,
    FT_DLCLASSCODE_TB_NOTES: 567,
    FT_DLCLASSCODE_TB_TO: 568,
    FT_DLCLASSCODE_TM_FROM: 569,
    FT_DLCLASSCODE_TM_NOTES: 570,
    FT_DLCLASSCODE_TM_TO: 571,
    FT_DLCLASSCODE_TR_FROM: 572,
    FT_DLCLASSCODE_TR_NOTES: 573,
    FT_DLCLASSCODE_TR_TO: 574,
    FT_DLCLASSCODE_TV_FROM: 575,
    FT_DLCLASSCODE_TV_NOTES: 576,
    FT_DLCLASSCODE_TV_TO: 577,
    FT_DLCLASSCODE_V_FROM: 578,
    FT_DLCLASSCODE_V_NOTES: 579,
    FT_DLCLASSCODE_V_TO: 580,
    FT_DLCLASSCODE_W_FROM: 581,
    FT_DLCLASSCODE_W_NOTES: 582,
    FT_DLCLASSCODE_W_TO: 583,

    getTranslation: function (value) {
        switch (value) {
            case this.FT_DOCUMENT_CLASS_CODE:
                return "Document class code"
            case this.FT_ISSUING_STATE_CODE:
                return "Issuing state code"
            case this.FT_DOCUMENT_NUMBER:
                return "Document #"
            case this.FT_DATE_OF_EXPIRY:
                return "Date of expiry"
            case this.FT_DATE_OF_ISSUE:
                return "Date of issue"
            case this.FT_DATE_OF_BIRTH:
                return "Date of birth"
            case this.FT_PLACE_OF_BIRTH:
                return "Place of birth"
            case this.FT_PERSONAL_NUMBER:
                return "Personal #"
            case this.FT_SURNAME:
                return "Surname"
            case this.FT_GIVEN_NAMES:
                return "Given name"
            case this.FT_MOTHERS_NAME:
                return "Mother\'s name"
            case this.FT_NATIONALITY:
                return "Nationality"
            case this.FT_SEX:
                return "Sex"
            case this.FT_HEIGHT:
                return "Height"
            case this.FT_WEIGHT:
                return "Weight"
            case this.FT_EYES_COLOR:
                return "Eye color"
            case this.FT_HAIR_COLOR:
                return "Hair сolor"
            case this.FT_ADDRESS:
                return "Address"
            case this.FT_DONOR:
                return "Donor"
            case this.FT_SOCIAL_SECURITY_NUMBER:
                return "Social insurance number"
            case this.FT_DL_CLASS:
                return "DL class"
            case this.FT_DL_ENDORSED:
                return "DL Endorsed"
            case this.FT_DL_RESTRICTION_CODE:
                return "DL Restriction Code"
            case this.FT_DL_UNDER_21_DATE:
                return "Date of 21th birthday"
            case this.FT_AUTHORITY:
                return "Issuing authority"
            case this.FT_SURNAME_AND_GIVEN_NAMES:
                return "Surname and given names"
            case this.FT_NATIONALITY_CODE:
                return "Nationality code"
            case this.FT_PASSPORT_NUMBER:
                return "Passport #"
            case this.FT_INVITATION_NUMBER:
                return "Invitation number"
            case this.FT_VISA_ID:
                return "Visa ID"
            case this.FT_VISA_CLASS:
                return "Visa Class"
            case this.FT_VISA_SUB_CLASS:
                return "Visa subclass"
            case this.FT_MRZ_STRING_1:
                return "MRZ line 1"
            case this.FT_MRZ_STRING_2:
                return "MRZ line 2"
            case this.FT_MRZ_STRING_3:
                return "MRZ line 3"
            case this.FT_MRZ_TYPE:
                return "MRZ Type"
            case this.FT_OPTIONAL_DATA:
                return "Optional data"
            case this.FT_DOCUMENT_CLASS_NAME:
                return "Document сlass"
            case this.FT_ISSUING_STATE_NAME:
                return "Issuing state"
            case this.FT_PLACE_OF_ISSUE:
                return "Place of issue"
            case this.FT_DOCUMENT_NUMBER_CHECKSUM:
                return "Checksum for document number"
            case this.FT_DATE_OF_BIRTH_CHECKSUM:
                return "Checksum for date of birth"
            case this.FT_DATE_OF_EXPIRY_CHECKSUM:
                return "Checksum for date of expiry"
            case this.FT_PERSONAL_NUMBER_CHECKSUM:
                return "Checksum for personal #"
            case this.FT_FINAL_CHECKSUM:
                return "Final checksum"
            case this.FT_PASSPORT_NUMBER_CHECKSUM:
                return "Checksum for Passport #"
            case this.FT_INVITATION_NUMBER_CHECKSUM:
                return "Checksum for invitation number"
            case this.FT_VISA_ID_CHECKSUM:
                return "Checksum for visa ID"
            case this.FT_SURNAME_AND_GIVEN_NAMES_CHECKSUM:
                return "Checksum for surname and given names"
            case this.FT_VISA_VALID_UNTIL_CHECKSUM:
                return "Checksum for visa expiry date"
            case this.FT_OTHER:
                return "Other"
            case this.FT_MRZ_STRINGS:
                return "MRZ lines"
            case this.FT_NAME_SUFFIX:
                return "Name suffix"
            case this.FT_NAME_PREFIX:
                return "Name prefix"
            case this.FT_DATE_OF_ISSUE_CHECKSUM:
                return "Checksum for date of issue"
            case this.FT_DATE_OF_ISSUE_CHECK_DIGIT:
                return "Check digit for date of issue"
            case this.FT_DOCUMENT_SERIES:
                return "Document series"
            case this.FT_REG_CERT_REG_NUMBER:
                return "Registration number"
            case this.FT_REG_CERT_CAR_MODEL:
                return "Vehicle model"
            case this.FT_REG_CERT_CAR_COLOR:
                return "Vehicle color"
            case this.FT_REG_CERT_BODY_NUMBER:
                return "Body number"
            case this.FT_REG_CERT_CAR_TYPE:
                return "Vehicle type"
            case this.FT_REG_CERT_MAX_WEIGHT:
                return "Max permissible weight"
            case this.FT_REG_CERT_WEIGHT:
                return "Unladen mass"
            case this.FT_ADDRESS_AREA:
                return "Area"
            case this.FT_ADDRESS_STATE:
                return "State"
            case this.FT_ADDRESS_BUILDING:
                return "Unit"
            case this.FT_ADDRESS_HOUSE:
                return "Building"
            case this.FT_ADDRESS_FLAT:
                return "Apartment"
            case this.FT_PLACE_OF_REGISTRATION:
                return "Place of registration"
            case this.FT_DATE_OF_REGISTRATION:
                return "Date of registration"
            case this.FT_RESIDENT_FROM:
                return "Resident from"
            case this.FT_RESIDENT_UNTIL:
                return "Resident until"
            case this.FT_AUTHORITY_CODE:
                return "Issuing authority code"
            case this.FT_PLACE_OF_BIRTH_AREA:
                return "Area of birthplace"
            case this.FT_PLACE_OF_BIRTH_STATE_CODE:
                return "State code of birthplace"
            case this.FT_ADDRESS_STREET:
                return "Street"
            case this.FT_ADDRESS_CITY:
                return "City"
            case this.FT_ADDRESS_JURISDICTION_CODE:
                return "Jurisdiction code"
            case this.FT_ADDRESS_POSTAL_CODE:
                return "Postal code"
            case this.FT_DOCUMENT_NUMBER_CHECK_DIGIT:
                return "Check digit for document number"
            case this.FT_DATE_OF_BIRTH_CHECK_DIGIT:
                return "Check digit for date of birth"
            case this.FT_DATE_OF_EXPIRY_CHECK_DIGIT:
                return "Check digit for date of expiry"
            case this.FT_PERSONAL_NUMBER_CHECK_DIGIT:
                return "Check digit for personal #"
            case this.FT_FINAL_CHECK_DIGIT:
                return "Final check digit"
            case this.FT_PASSPORT_NUMBER_CHECK_DIGIT:
                return "Check digit for Passport #"
            case this.FT_INVITATION_NUMBER_CHECK_DIGIT:
                return "Check digit for invitaiton number"
            case this.FT_VISA_ID_CHECK_DIGIT:
                return "Check digit for visa ID"
            case this.FT_SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT:
                return "Check digit for surname and given names"
            case this.FT_VISA_VALID_UNTIL_CHECK_DIGIT:
                return "Check digit for visa expiry date"
            case this.FT_PERMIT_DL_CLASS:
                return "Permit сlass"
            case this.FT_PERMIT_DATE_OF_EXPIRY:
                return "Permit expiry date"
            case this.FT_PERMIT_IDENTIFIER:
                return "Permit identifier"
            case this.FT_PERMIT_DATE_OF_ISSUE:
                return "Permit issue date"
            case this.FT_PERMIT_RESTRICTION_CODE:
                return "Permit restriction code"
            case this.FT_PERMIT_ENDORSED:
                return "Permit endorsement code"
            case this.FT_ISSUE_TIMESTAMP:
                return "Issue time"
            case this.FT_NUMBER_OF_DUPLICATES:
                return "Number of duplicates"
            case this.FT_MEDICAL_INDICATOR_CODES:
                return "Medical indicator/code"
            case this.FT_NON_RESIDENT_INDICATOR:
                return "Non-resident indicator"
            case this.FT_VISA_TYPE:
                return "Visa type"
            case this.FT_VISA_VALID_FROM:
                return "Visa valid from"
            case this.FT_VISA_VALID_UNTIL:
                return "Visa valid until"
            case this.FT_DURATION_OF_STAY:
                return "Duration of stay"
            case this.FT_NUMBER_OF_ENTRIES:
                return "Number of entries"
            case this.FT_DAY:
                return "Day"
            case this.FT_MONTH:
                return "Month"
            case this.FT_YEAR:
                return "Year"
            case this.FT_UNIQUE_CUSTOMER_IDENTIFIER:
                return "Unique сustomer identifier"
            case this.FT_COMMERCIAL_VEHICLE_CODES:
                return "Commercial vehicle code"
            case this.FT_AKA_DATE_OF_BIRTH:
                return "AKA Date of birth"
            case this.FT_AKA_SOCIAL_SECURITY_NUMBER:
                return "AKA Social Insurance Number"
            case this.FT_AKA_SURNAME:
                return "AKA Surname"
            case this.FT_AKA_GIVEN_NAMES:
                return "AKA Given name"
            case this.FT_AKA_NAME_SUFFIX:
                return "AKA Name suffix"
            case this.FT_AKA_NAME_PREFIX:
                return "AKA Name prefix"
            case this.FT_MAILING_ADDRESS_STREET:
                return "Mailing address - street"
            case this.FT_MAILING_ADDRESS_CITY:
                return "Mailing address - city"
            case this.FT_MAILING_ADDRESS_JURISDICTION_CODE:
                return "Mailing address - jurisdiction code"
            case this.FT_MAILING_ADDRESS_POSTAL_CODE:
                return "Mailing address - postal code"
            case this.FT_AUDIT_INFORMATION:
                return "Number for validation"
            case this.FT_INVENTORY_NUMBER:
                return "Inventory number"
            case this.FT_RACE_ETHNICITY:
                return "Race/ethnicity"
            case this.FT_JURISDICTION_VEHICLE_CLASS:
                return "Jurisdiction vehicle class"
            case this.FT_JURISDICTION_ENDORSEMENT_CODE:
                return "Jurisdiction endorsement code"
            case this.FT_JURISDICTION_RESTRICTION_CODE:
                return "Jurisdiction restriction code"
            case this.FT_FAMILY_NAME:
                return "Surname/given name at birth"
            case this.FT_GIVEN_NAMES_RUS:
                return "Given name (National)"
            case this.FT_VISA_ID_RUS:
                return "Visa ID (National)"
            case this.FT_FATHERS_NAME:
                return "Father\'s name"
            case this.FT_FATHERS_NAME_RUS:
                return "Father\'s name (National)"
            case this.FT_SURNAME_AND_GIVEN_NAMES_RUS:
                return "Surname and given names (National)"
            case this.FT_PLACE_OF_BIRTH_RUS:
                return "Place of birth (National)"
            case this.FT_AUTHORITY_RUS:
                return "Issuing authority (National)"
            case this.FT_ISSUING_STATE_CODE_NUMERIC:
                return "Numeric issuing state code"
            case this.FT_NATIONALITY_CODE_NUMERIC:
                return "Numeric nationality code"
            case this.FT_ENGINE_POWER:
                return "Engine power"
            case this.FT_ENGINE_VOLUME:
                return "Engine volume"
            case this.FT_CHASSIS_NUMBER:
                return "Chassis number"
            case this.FT_ENGINE_NUMBER:
                return "Engine number"
            case this.FT_ENGINE_MODEL:
                return "Engine model"
            case this.FT_VEHICLE_CATEGORY:
                return "Vehicle category"
            case this.FT_IDENTITY_CARD_NUMBER:
                return "Identity card number"
            case this.FT_CONTROL_NO:
                return "Control #"
            case this.FT_PARRENTS_GIVEN_NAMES:
                return "Parents\' given names"
            case this.FT_SECOND_SURNAME:
                return "Second surname"
            case this.FT_MIDDLE_NAME:
                return "Middle name"
            case this.FT_REG_CERT_VIN:
                return "Vehicle identification number"
            case this.FT_REG_CERT_VIN_CHECK_DIGIT:
                return "Check digit for VIN"
            case this.FT_REG_CERT_VIN_CHECKSUM:
                return "Checksum for VIN"
            case this.FT_LINE_1_CHECK_DIGIT:
                return "Check digit for line 1"
            case this.FT_LINE_2_CHECK_DIGIT:
                return "Check digit for line 2"
            case this.FT_LINE_3_CHECK_DIGIT:
                return "Check digit for line 3"
            case this.FT_LINE_1_CHECKSUM:
                return "Checksum for line 1"
            case this.FT_LINE_2_CHECKSUM:
                return "Checksum for line 2"
            case this.FT_LINE_3_CHECKSUM:
                return "Checksum for line 3"
            case this.FT_REG_CERT_REG_NUMBER_CHECK_DIGIT:
                return "Check digit for registration number"
            case this.FT_REG_CERT_REG_NUMBER_CHECKSUM:
                return "Checksum for registration number"
            case this.FT_REG_CERT_VEHICLE_ITS_CODE:
                return "Vehicle ITS code"
            case this.FT_CARD_ACCESS_NUMBER:
                return "Card access number"
            case this.FT_MARITAL_STATUS:
                return "Marital status"
            case this.FT_COMPANY_NAME:
                return "Company name"
            case this.FT_SPECIAL_NOTES:
                return "Special notes"
            case this.FT_SURNAME_OF_SPOSE:
                return "Spouse\'s surname"
            case this.FT_TRACKING_NUMBER:
                return "Tracking number"
            case this.FT_BOOKLET_NUMBER:
                return "Booklet number"
            case this.FT_CHILDREN:
                return "Children"
            case this.FT_COPY:
                return "Copy"
            case this.FT_SERIAL_NUMBER:
                return "Serial number"
            case this.FT_DOSSIER_NUMBER:
                return "Dossier number"
            case this.FT_AKA_SURNAME_AND_GIVEN_NAMES:
                return "AKA Full name"
            case this.FT_TERRITORIAL_VALIDITY:
                return "Territorial validity"
            case this.FT_MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS:
                return "MRZ lines with correct checksums"
            case this.FT_DL_CDL_RESTRICTION_CODE:
                return "CDL Restriction Code"
            case this.FT_DL_UNDER_18_DATE:
                return "Date of 18th birthday"
            case this.FT_DL_RECORD_CREATED:
                return "Record created"
            case this.FT_DL_DUPLICATE_DATE:
                return "Duplicate date"
            case this.FT_DL_ISS_TYPE:
                return "Iss. Type"
            case this.FT_MILITARY_BOOK_NUMBER:
                return "Military book number"
            case this.FT_DESTINATION:
                return "Destination"
            case this.FT_BLOOD_GROUP:
                return "Blood group"
            case this.FT_SEQUENCE_NUMBER:
                return "Sequence number"
            case this.FT_REG_CERT_BODY_TYPE:
                return "Body type"
            case this.FT_REG_CERT_CAR_MARK:
                return "Vehicle make"
            case this.FT_TRANSACTION_NUMBER:
                return "Transaction number"
            case this.FT_AGE:
                return "Age"
            case this.FT_FOLIO_NUMBER:
                return "Folio number"
            case this.FT_VOTER_KEY:
                return "Voter Key"
            case this.FT_ADDRESS_MUNICIPALITY:
                return "Municipality"
            case this.FT_ADDRESS_LOCATION:
                return "Location"
            case this.FT_SECTION:
                return "Section"
            case this.FT_OCR_NUMBER:
                return "OCR number"
            case this.FT_FEDERAL_ELECTIONS:
                return "Federal elections"
            case this.FT_REFERENCE_NUMBER:
                return "Unique number"
            case this.FT_OPTIONAL_DATA_CHECKSUM:
                return "Checksum for optional data"
            case this.FT_OPTIONAL_DATA_CHECK_DIGIT:
                return "Check digit for optional data"
            case this.FT_VISA_NUMBER:
                return "Visa Number"
            case this.FT_VISA_NUMBER_CHECKSUM:
                return "Checksum for visa number"
            case this.FT_VISA_NUMBER_CHECK_DIGIT:
                return "Check digit for visa number"
            case this.FT_VOTER:
                return "Voter"
            case this.FT_PREVIOUS_TYPE:
                return "Type/number of the previous document"
            case this.FT_FIELD_FROM_MRZ:
                return "Field from MRZ"
            case this.FT_CURRENT_DATE:
                return "Current date"
            case this.FT_STATUS_DATE_OF_EXPIRY:
                return "Status Expiry Date"
            case this.FT_BANKNOTE_NUMBER:
                return "Banknote number"
            case this.FT_CSC_CODE:
                return "CSC Code"
            case this.FT_ARTISTIC_NAME:
                return "Pseudonym"
            case this.FT_ACADEMIC_TITLE:
                return "Academic title"
            case this.FT_ADDRESS_COUNTRY:
                return "Country"
            case this.FT_ADDRESS_ZIPCODE:
                return "ZIP code"
            case this.FT_E_ID_RESIDENCE_PERMIT_1:
                return "Residence permit 1"
            case this.FT_E_ID_RESIDENCE_PERMIT_2:
                return "Residence permit 2"
            case this.FT_E_ID_PLACE_OF_BIRTH_STREET:
                return "Place Of Birth: Street"
            case this.FT_E_ID_PLACE_OF_BIRTH_CITY:
                return "Place Of Birth: City"
            case this.FT_E_ID_PLACE_OF_BIRTH_STATE:
                return "Place Of Birth: State"
            case this.FT_E_ID_PLACE_OF_BIRTH_COUNTRY:
                return "Place Of Birth: Country"
            case this.FT_E_ID_PLACE_OF_BIRTH_ZIPCODE:
                return "Place Of Birth: Postal code"
            case this.FT_CDL_CLASS:
                return "CDL Class"
            case this.FT_DL_UNDER_19_DATE:
                return "Date of 19th birthday"
            case this.FT_WEIGHT_POUNDS:
                return "Weight (pound)"
            case this.FT_LIMITED_DURATION_DOCUMENT_INDICATOR:
                return "Indicator of document limited duration"
            case this.FT_ENDORSEMENT_EXPIRATION_DATE:
                return "Endorsement expiration date"
            case this.FT_REVISION_DATE:
                return "Revision date"
            case this.FT_COMPLIANCE_TYPE:
                return "Compliance type"
            case this.FT_FAMILY_NAME_TRUNCATION:
                return "Truncated surname/given name at birth"
            case this.FT_FIRST_NAME_TRUNCATION:
                return "First name truncation"
            case this.FT_MIDDLE_NAME_TRUNCATION:
                return "Middle name truncation"
            case this.FT_EXAM_DATE:
                return "Exam date"
            case this.FT_ORGANIZATION:
                return "Organization"
            case this.FT_DEPARTMENT:
                return "Department"
            case this.FT_PAY_GRADE:
                return "Pay grade"
            case this.FT_RANK:
                return "Rank"
            case this.FT_BENEFITS_NUMBER:
                return "Benefits number"
            case this.FT_SPONSOR_SERVICE:
                return "Sponsor service"
            case this.FT_SPONSOR_STATUS:
                return "Sponsor status"
            case this.FT_SPONSOR:
                return "Sponsor"
            case this.FT_RELATIONSHIP:
                return "Relationship"
            case this.FT_USCIS:
                return "USCIS"
            case this.FT_CATEGORY:
                return "Category"
            case this.FT_CONDITIONS:
                return "Conditions"
            case this.FT_IDENTIFIER:
                return "Identifier"
            case this.FT_CONFIGURATION:
                return "Configuration"
            case this.FT_DISCRETIONARY_DATA:
                return "Discretionary data"
            case this.FT_LINE_1_OPTIONAL_DATA:
                return "Optional data from line 1"
            case this.FT_LINE_2_OPTIONAL_DATA:
                return "Optional data from line 2"
            case this.FT_LINE_3_OPTIONAL_DATA:
                return "Optional data from line 3"
            case this.FT_EQV_CODE:
                return "EQV Code"
            case this.FT_ALT_CODE:
                return "ALT Code"
            case this.FT_BINARY_CODE:
                return "Binary code"
            case this.FT_PSEUDO_CODE:
                return "Pseudocode"
            case this.FT_FEE:
                return "Fee"
            case this.FT_STAMP_NUMBER:
                return "Stamp number"
            case this.FT_GNIB_NUMBER:
                return "GNIB Number"
            case this.FT_DEPT_NUMBER:
                return "Department number"
            case this.FT_TELEX_CODE:
                return "Telegraph code"
            case this.FT_ALLERGIES:
                return "Allergies"
            case this.FT_SP_CODE:
                return "SP code"
            case this.FT_COURT_CODE:
                return "Court code"
            case this.FT_CTY:
                return "County"
            case this.FT_SPONSOR_SSN:
                return "Sponsor SSN"
            case this.FT_DO_D_NUMBER:
                return "DoD number"
            case this.FT_MC_NOVICE_DATE:
                return "Expiry date of Motorcycle Novice status"
            case this.FT_DUF_NUMBER:
                return "DUF Number"
            case this.FT_AGY:
                return "AGY"
            case this.FT_PNR_CODE:
                return "PNR code"
            case this.FT_FROM_AIRPORT_CODE:
                return "Code of the airport of departure"
            case this.FT_TO_AIRPORT_CODE:
                return "Code of the airport of arrival"
            case this.FT_FLIGHT_NUMBER:
                return "Flight number"
            case this.FT_DATE_OF_FLIGHT:
                return "Date of flight"
            case this.FT_SEAT_NUMBER:
                return "Seat number"
            case this.FT_DATE_OF_ISSUE_BOARDING_PASS:
                return "Date of boarding pass issue"
            case this.FT_CCW_UNTIL:
                return "CCW Until"
            case this.FT_REFERENCE_NUMBER_CHECKSUM:
                return "Unique number checksum"
            case this.FT_REFERENCE_NUMBER_CHECK_DIGIT:
                return "Unique number check digit"
            case this.FT_ROOM_NUMBER:
                return "Room number"
            case this.FT_RELIGION:
                return "Religion"
            case this.FT_REMAINDER_TERM:
                return "Months to expire"
            case this.FT_ELECTRONIC_TICKET_INDICATOR:
                return "Electronic ticket indicator"
            case this.FT_COMPARTMENT_CODE:
                return "Compartment code"
            case this.FT_CHECK_IN_SEQUENCE_NUMBER:
                return "Check-in sequence number"
            case this.FT_AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER:
                return "Airline designator of boarding pass issuer"
            case this.FT_AIRLINE_NUMERIC_CODE:
                return "Airline numeric code"
            case this.FT_TICKET_NUMBER:
                return "Ticket number"
            case this.FT_FREQUENT_FLYER_AIRLINE_DESIGNATOR:
                return "Frequent Flyer airline designator"
            case this.FT_FREQUENT_FLYER_NUMBER:
                return "Frequent flyer number"
            case this.FT_FREE_BAGGAGE_ALLOWANCE:
                return "Free baggage allowance"
            case this.FT_PDF_417_CODEC:
                return "PDF417 codec"
            case this.FT_IDENTITY_CARD_NUMBER_CHECKSUM:
                return "Checksum for identity card number"
            case this.FT_IDENTITY_CARD_NUMBER_CHECK_DIGIT:
                return "Check digit for identity card number"
            case this.FT_VETERAN:
                return "Veteran"
            case this.FT_DL_CLASS_CODE_A_1_FROM:
                return "DL class code A1 from"
            case this.FT_DL_CLASS_CODE_A_1_TO:
                return "DL class code A1 to"
            case this.FT_DL_CLASS_CODE_A_1_NOTES:
                return "DL class code A1 notes"
            case this.FT_DL_CLASS_CODE_A_FROM:
                return "DL class code A from"
            case this.FT_DL_CLASS_CODE_A_TO:
                return "DL class code A to"
            case this.FT_DL_CLASS_CODE_A_NOTES:
                return "DL class code A notes"
            case this.FT_DL_CLASS_CODE_B_FROM:
                return "DL class code B from"
            case this.FT_DL_CLASS_CODE_B_TO:
                return "DL class code B to"
            case this.FT_DL_CLASS_CODE_B_NOTES:
                return "DL class code B notes"
            case this.FT_DL_CLASS_CODE_C_1_FROM:
                return "DL class code C1 from"
            case this.FT_DL_CLASS_CODE_C_1_TO:
                return "DL class code C1 to"
            case this.FT_DL_CLASS_CODE_C_1_NOTES:
                return "DL class code C1 notes"
            case this.FT_DL_CLASS_CODE_C_FROM:
                return "DL class code C from"
            case this.FT_DL_CLASS_CODE_C_TO:
                return "DL class code C to"
            case this.FT_DL_CLASS_CODE_C_NOTES:
                return "DL class code C notes"
            case this.FT_DL_CLASS_CODE_D_1_FROM:
                return "DL class code D1 from"
            case this.FT_DL_CLASS_CODE_D_1_TO:
                return "DL class code D1 to"
            case this.FT_DL_CLASS_CODE_D_1_NOTES:
                return "DL class code D1 notes"
            case this.FT_DL_CLASS_CODE_D_FROM:
                return "DL class code D from"
            case this.FT_DL_CLASS_CODE_D_TO:
                return "DL class code D to"
            case this.FT_DL_CLASS_CODE_D_NOTES:
                return "DL class code D notes"
            case this.FT_DL_CLASS_CODE_BE_FROM:
                return "DL class code BE from"
            case this.FT_DL_CLASS_CODE_BE_TO:
                return "DL class code BE to"
            case this.FT_DL_CLASS_CODE_BE_NOTES:
                return "DL class code BE notes"
            case this.FT_DL_CLASS_CODE_C_1_E_FROM:
                return "DL class code C1E from"
            case this.FT_DL_CLASS_CODE_C_1_E_TO:
                return "DL class code C1E to"
            case this.FT_DL_CLASS_CODE_C_1_E_NOTES:
                return "DL class code C1E notes"
            case this.FT_DL_CLASS_CODE_CE_FROM:
                return "DL class code CE from"
            case this.FT_DL_CLASS_CODE_CE_TO:
                return "DL class code CE to"
            case this.FT_DL_CLASS_CODE_CE_NOTES:
                return "DL class code CE notes"
            case this.FT_DL_CLASS_CODE_D_1_E_FROM:
                return "DL class code D1E from"
            case this.FT_DL_CLASS_CODE_D_1_E_TO:
                return "DL class code D1E to"
            case this.FT_DL_CLASS_CODE_D_1_E_NOTES:
                return "DL class code D1E notes"
            case this.FT_DL_CLASS_CODE_DE_FROM:
                return "DL class code DE from"
            case this.FT_DL_CLASS_CODE_DE_TO:
                return "DL class code DE to"
            case this.FT_DL_CLASS_CODE_DE_NOTES:
                return "DL class code DE notes"
            case this.FT_DL_CLASS_CODE_M_FROM:
                return "DL class code M from"
            case this.FT_DL_CLASS_CODE_M_TO:
                return "DL class code M to"
            case this.FT_DL_CLASS_CODE_M_NOTES:
                return "DL class code M notes"
            case this.FT_DL_CLASS_CODE_L_FROM:
                return "DL class code L from"
            case this.FT_DL_CLASS_CODE_L_TO:
                return "DL class code L to"
            case this.FT_DL_CLASS_CODE_L_NOTES:
                return "DL class code L Notes"
            case this.FT_DL_CLASS_CODE_T_FROM:
                return "DL class code T from"
            case this.FT_DL_CLASS_CODE_T_TO:
                return "DL class code T to"
            case this.FT_DL_CLASS_CODE_T_NOTES:
                return "DL class code T notes"
            case this.FT_DL_CLASS_CODE_AM_FROM:
                return "DL class code AM from"
            case this.FT_DL_CLASS_CODE_AM_TO:
                return "DL class code AM to"
            case this.FT_DL_CLASS_CODE_AM_NOTES:
                return "DL class code AM notes"
            case this.FT_DL_CLASS_CODE_A_2_FROM:
                return "DL class code A2 from"
            case this.FT_DL_CLASS_CODE_A_2_TO:
                return "DL class code A2 to"
            case this.FT_DL_CLASS_CODE_A_2_NOTES:
                return "DL class code A2 notes"
            case this.FT_DL_CLASS_CODE_B_1_FROM:
                return "DL class code B1 from"
            case this.FT_DL_CLASS_CODE_B_1_TO:
                return "DL class code B1 to"
            case this.FT_DL_CLASS_CODE_B_1_NOTES:
                return "DL class code B1 notes"
            case this.FT_SURNAME_AT_BIRTH:
                return "Surname at birth"
            case this.FT_CIVIL_STATUS:
                return "Civil status"
            case this.FT_NUMBER_OF_SEATS:
                return "Number of seats"
            case this.FT_NUMBER_OF_STANDING_PLACES:
                return "Number of standing places"
            case this.FT_MAX_SPEED:
                return "Max speed"
            case this.FT_FUEL_TYPE:
                return "Fuel type"
            case this.FT_EC_ENVIRONMENTAL_TYPE:
                return "Vehicle environmental type"
            case this.FT_POWER_WEIGHT_RATIO:
                return "Power–to–weight ratio"
            case this.FT_MAX_MASS_OF_TRAILER_BRAKED:
                return "Max mass of trailer (braked)"
            case this.FT_MAX_MASS_OF_TRAILER_UNBRAKED:
                return "Max mass of trailer (unbraked)"
            case this.FT_TRANSMISSION_TYPE:
                return "Transmission type"
            case this.FT_TRAILER_HITCH:
                return "Trailer hitch"
            case this.FT_ACCOMPANIED_BY:
                return "Accompanied by"
            case this.FT_POLICE_DISTRICT:
                return "Police district"
            case this.FT_FIRST_ISSUE_DATE:
                return "First issue date"
            case this.FT_PAYLOAD_CAPACITY:
                return "Payload capacity"
            case this.FT_NUMBER_OF_AXELS:
                return "Number of axels"
            case this.FT_PERMISSIBLE_AXLE_LOAD:
                return "Permissible axle load"
            case this.FT_PRECINCT:
                return "Precinct"
            case this.FT_INVITED_BY:
                return "Invited by"
            case this.FT_PURPOSE_OF_ENTRY:
                return "Purpose of entry"
            case this.FT_SKIN_COLOR:
                return "Skin color"
            case this.FT_COMPLEXION:
                return "Complexion"
            case this.FT_AIRPORT_FROM:
                return "Airport of departure"
            case this.FT_AIRPORT_TO:
                return "Airport of arrival"
            case this.FT_AIRLINE_NAME:
                return "Airline name"
            case this.FT_AIRLINE_NAME_FREQUENT_FLYER:
                return "Airline loyalty program for frequent flyers"
            case this.FT_LICENSE_NUMBER:
                return "License number"
            case this.FT_IN_TANKS:
                return "In tanks"
            case this.FT_EXEPT_IN_TANKS:
                return "Except in tanks"
            case this.FT_FAST_TRACK:
                return "Fast Track service"
            case this.FT_OWNER:
                return "Owner"
            case this.FT_MRZ_STRINGS_ICAO_RFID:
                return "MRZ lines from ICAO RFID"
            case this.FT_NUMBER_OF_CARD_ISSUANCE:
                return "Number of card issuances"
            case this.FT_NUMBER_OF_CARD_ISSUANCE_CHECKSUM:
                return "Сhecksum for number of card issuances"
            case this.FT_NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT:
                return "Сheck digit for number of card issuances"
            case this.FT_CENTURY_DATE_OF_BIRTH:
                return "Century of birth"
            case this.FT_DL_CLASSCODE_A3_FROM:
                return "DL class code A3 from"
            case this.FT_DL_CLASSCODE_A3_TO:
                return "DL class code A3 to"
            case this.FT_DL_CLASSCODE_A3_NOTES:
                return "DL class code A3 notes"
            case this.FT_DL_CLASSCODE_C2_FROM:
                return "DL class code C2 from"
            case this.FT_DL_CLASSCODE_C2_TO:
                return "DL class code C2 to"
            case this.FT_DL_CLASSCODE_C2_NOTES:
                return "DL class code C2 notes"
            case this.FT_DL_CLASSCODE_B2_FROM:
                return "DL class code B2 from"
            case this.FT_DL_CLASSCODE_B2_TO:
                return "DL class code B2 to"
            case this.FT_DL_CLASSCODE_B2_NOTES:
                return "DL class code B2 notes"
            case this.FT_DL_CLASSCODE_D2_FROM:
                return "DL class code D2 from"
            case this.FT_DL_CLASSCODE_D2_TO:
                return "DL class code D2 to"
            case this.FT_DL_CLASSCODE_D2_NOTES:
                return "DL class code D2 notes"
            case this.FT_DL_CLASSCODE_B2E_FROM:
                return "DL class code B2E from"
            case this.FT_DL_CLASSCODE_B2E_TO:
                return "DL class code B2E to"
            case this.FT_DL_CLASSCODE_B2E_NOTES:
                return "DL class code B2E notes"
            case this.FT_DL_CLASSCODE_G_FROM:
                return "DL class code G from"
            case this.FT_DL_CLASSCODE_G_TO:
                return "DL class code G to"
            case this.FT_DL_CLASSCODE_G_NOTES:
                return "DL class code G notes"
            case this.FT_DL_CLASSCODE_J_FROM:
                return "DL class code J from"
            case this.FT_DL_CLASSCODE_J_TO:
                return "DL class code J to"
            case this.FT_DL_CLASSCODE_J_NOTES:
                return "DL class code J notes"
            case this.FT_DL_CLASSCODE_LC_FROM:
                return "DL class code LC from"
            case this.FT_DL_CLASSCODE_LC_TO:
                return "DL class code LC to"
            case this.FT_DLC_LASSCODE_LC_NOTES:
                return "DL class code LC notes"
            case this.FT_BANKCARDNUMBER:
                return "Bank card number"
            case this.FT_BANKCARDVALIDTHRU:
                return "Bank card validity"
            case this.FT_TAX_NUMBER:
                return "Tax number"
            case this.FT_SBH_SECURITYOPTIONS:
                return "SBH security options"
            case this.FT_SBH_INTEGRITYOPTIONS:
                return "SBH integrity options"
            case this.FT_DATE_OF_CREATION:
                return "Creation date"
            case this.FT_VALIDITY_PERIOD:
                return "Validity period"
            case this.FT_PATRON_HEADER_VERSION:
                return "Patron header version"
            case this.FT_BDB_TYPE:
                return "BDB type"
            case this.FT_BIOMETRIC_TYPE:
                return "Biometric type"
            case this.FT_BIOMETRIC_SUBTYPE:
                return "Biometric subtype"
            case this.FT_BIOMETRIC_PRODUCTID:
                return "Biometric product ID"
            case this.FT_BIOMETRIC_FORMAT_OWNER:
                return "Biometric format owner"
            case this.FT_BIOMETRIC_FORMAT_TYPE:
                return "Biometric format type"
            case this.FT_PHONE:
                return "Phone"
            case this.FT_PROFESSION:
                return "Profession"
            case this.FT_TITLE:
                return "Position"
            case this.FT_PERSONAL_SUMMARY:
                return "Personal data summary"
            case this.FT_OTHER_VALID_ID:
                return "Other valid IDs"
            case this.FT_CUSTODY_INFO:
                return "Custody info"
            case this.FT_OTHER_NAME:
                return "Other name"
            case this.FT_OBSERVATIONS:
                return "Observations"
            case this.FT_TAX:
                return "Tax"
            case this.FT_DATE_OF_PERSONALIZATION:
                return "Personalization date"
            case this.FT_PERSONALIZATION_SN:
                return "Serial number of personalization"
            case this.FT_OTHERPERSON_NAME:
                return "Other person, name"
            case this.FT_PERSONTONOTIFY_DATE_OF_RECORD:
                return "Notify person: Date of record"
            case this.FT_PERSONTONOTIFY_NAME:
                return "Notify person: Name"
            case this.FT_PERSONTONOTIFY_PHONE:
                return "Notify person: Phone"
            case this.FT_PERSONTONOTIFY_ADDRESS:
                return "Notify person: Address"
            case this.FT_DS_CERTIFICATE_ISSUER:
                return "DS Certificate Issuer"
            case this.FT_DS_CERTIFICATE_SUBJECT:
                return "DS Certificate Subject"
            case this.FT_DS_CERTIFICATE_VALIDFROM:
                return "DS Certificate Valid From"
            case this.FT_DS_CERTIFICATE_VALIDTO:
                return "DS Certificate Valid To"
            case this.FT_VRC_DATAOBJECT_ENTRY:
                return "Vehicle data from the DG1 data group"
            case this.FT_GRANDFATHERNAME:
                return "Grandfather\'s name"
            case this.FT_HEALTH_NUMBER:
                return "Health insurance number"
            case this.FT_TYPE_APPROVAL_NUMBER:
                return "Type approval number"
            case this.FT_ADMINISTRATIVE_NUMBER:
                return "Administrative number"
            case this.FT_DOCUMENT_DISCRIMINATOR:
                return "Document discriminator"
            case this.FT_DATA_DISCRIMINATOR:
                return "Data discriminator"
            case this.FT_ISO_ISSUER_ID_NUMBER:
                return "ISO issuer ID number"
            case this.FT_SELECTEE_INDICATOR:
                return "Selectee indicator"
            case this.FT_MOTHER_SURNAME:
                return "Mother\'s surname"
            case this.FT_MOTHER_GIVENNAME:
                return "Mother\'s given name"
            case this.FT_FATHER_SURNAME:
                return "Father\'s surname"
            case this.FT_FATHER_GIVENNAME:
                return "Father\'s given name"
            case this.FT_MOTHER_DATEOFBIRTH:
                return "Mother\'s date of birth"
            case this.FT_FATHER_DATEOFBIRTH:
                return "Father\'s date of birth"
            case this.FT_MOTHER_PERSONALNUMBER:
                return "Mother\'s personal #"
            case this.FT_FATHER_PERSONALNUMBER:
                return "Father\'s personal #"
            case this.FT_MOTHER_PLACEOFBIRTH:
                return "Mother\'s place of birth"
            case this.FT_FATHER_PLACEOFBIRTH:
                return "Father\'s place of birth"
            case this.FT_MOTHER_COUNTRYOFBIRTH:
                return "Mother\'s country of birth"
            case this.FT_FATHER_COUNTRYOFBIRTH:
                return "Father\'s country of birth"
            case this.FT_DATE_FIRST_RENEWAL:
                return "Date of first renewal"
            case this.FT_DATE_SECOND_RENEWAL:
                return "Date of second renewal"
            case this.FT_PLACE_OF_EXAMINATION:
                return "Place of examination"
            case this.FT_APPLICATION_NUMBER:
                return "Application number"
            case this.FT_VOUCHER_NUMBER:
                return "Voucher number"
            case this.FT_AUTHORIZATION_NUMBER:
                return "Authorization number"
            case this.FT_FACULTY:
                return "Faculty"
            case this.FT_FORM_OF_EDUCATION:
                return "Form of education"
            case this.FT_DNI_NUMBER:
                return "DNI number"
            case this.FT_RETIREMENT_NUMBER:
                return "Retirement number"
            case this.FT_PROFESSIONAL_ID_NUMBER:
                return "Professional ID number"
            case this.FT_AGE_AT_ISSUE:
                return "Age at issue"
            case this.FT_YEARS_SINCE_ISSUE:
                return "Years since issue"
            case this.FT_DLCLASSCODE_BTP_FROM:
                return "DL class code BTP from"
            case this.FT_DLCLASSCODE_BTP_NOTES:
                return "DL class code BTP notes"
            case this.FT_DLCLASSCODE_BTP_TO:
                return "DL class code BTP to"
            case this.FT_DLCLASSCODE_C3_FROM:
                return "DL class code C3 from"
            case this.FT_DLCLASSCODE_C3_NOTES:
                return "DL class code C3 notes"
            case this.FT_DLCLASSCODE_C3_TO:
                return "DL class code C3 to"
            case this.FT_DLCLASSCODE_E_FROM:
                return "DL class code E from"
            case this.FT_DLCLASSCODE_E_NOTES:
                return "DL class code E notes"
            case this.FT_DLCLASSCODE_E_TO:
                return "DL class code E to"
            case this.FT_DLCLASSCODE_F_FROM:
                return "DL class code F from"
            case this.FT_DLCLASSCODE_F_NOTES:
                return "DL class code F notes"
            case this.FT_DLCLASSCODE_F_TO:
                return "DL class code F to"
            case this.FT_DLCLASSCODE_FA_FROM:
                return "DL class code FA from"
            case this.FT_DLCLASSCODE_FA_NOTES:
                return "DL class code FA notes"
            case this.FT_DLCLASSCODE_FA_TO:
                return "DL class code FA to"
            case this.FT_DLCLASSCODE_FA1_FROM:
                return "DL class code FA1 from"
            case this.FT_DLCLASSCODE_FA1_NOTES:
                return "DL class code FA1 notes"
            case this.FT_DLCLASSCODE_FA1_TO:
                return "DL class code FA1 to"
            case this.FT_DLCLASSCODE_FB_FROM:
                return "DL class code FB from"
            case this.FT_DLCLASSCODE_FB_NOTES:
                return "DL class code FB notes"
            case this.FT_DLCLASSCODE_FB_TO:
                return "DL class code FB to"
            case this.FT_DLCLASSCODE_G1_FROM:
                return "DL class code G1 from"
            case this.FT_DLCLASSCODE_G1_NOTES:
                return "DL class code G1 notes"
            case this.FT_DLCLASSCODE_G1_TO:
                return "DL class code G1 to"
            case this.FT_DLCLASSCODE_H_FROM:
                return "DL class code H from"
            case this.FT_DLCLASSCODE_H_NOTES:
                return "DL class code H notes"
            case this.FT_DLCLASSCODE_H_TO:
                return "DL class code H to"
            case this.FT_DLCLASSCODE_I_FROM:
                return "DL class code I from"
            case this.FT_DLCLASSCODE_I_NOTES:
                return "DL class code I notes"
            case this.FT_DLCLASSCODE_I_TO:
                return "DL class code I to"
            case this.FT_DLCLASSCODE_K_FROM:
                return "DL class code K from"
            case this.FT_DLCLASSCODE_K_NOTES:
                return "DL class code K notes"
            case this.FT_DLCLASSCODE_K_TO:
                return "DL class code K to"
            case this.FT_DLCLASSCODE_LK_FROM:
                return "DL class code LK from"
            case this.FT_DLCLASSCODE_LK_NOTES:
                return "DL class code LK Notes"
            case this.FT_DLCLASSCODE_LK_TO:
                return "DL class code LK to"
            case this.FT_DLCLASSCODE_N_FROM:
                return "DL class code N from"
            case this.FT_DLCLASSCODE_N_NOTES:
                return "DL class code N notes"
            case this.FT_DLCLASSCODE_N_TO:
                return "DL class code N to"
            case this.FT_DLCLASSCODE_S_FROM:
                return "DL class code S from"
            case this.FT_DLCLASSCODE_S_NOTES:
                return "DL class code S notes"
            case this.FT_DLCLASSCODE_S_TO:
                return "DL class code S to"
            case this.FT_DLCLASSCODE_TB_FROM:
                return "DL class code TB from"
            case this.FT_DLCLASSCODE_TB_NOTES:
                return "DL class code TB notes"
            case this.FT_DLCLASSCODE_TB_TO:
                return "DL class code TB to"
            case this.FT_DLCLASSCODE_TM_FROM:
                return "DL class code TM from"
            case this.FT_DLCLASSCODE_TM_NOTES:
                return "DL class code TM notes"
            case this.FT_DLCLASSCODE_TM_TO:
                return "DL class code TM to"
            case this.FT_DLCLASSCODE_TR_FROM:
                return "DL class code TR from"
            case this.FT_DLCLASSCODE_TR_NOTES:
                return "DL class code TR notes"
            case this.FT_DLCLASSCODE_TR_TO:
                return "DL class code TR to"
            case this.FT_DLCLASSCODE_TV_FROM:
                return "DL class code TV from"
            case this.FT_DLCLASSCODE_TV_NOTES:
                return "DL class code TV notes"
            case this.FT_DLCLASSCODE_TV_TO:
                return "DL class code TV to"
            case this.FT_DLCLASSCODE_V_FROM:
                return "DL class code V from"
            case this.FT_DLCLASSCODE_V_NOTES:
                return "DL class code V notes"
            case this.FT_DLCLASSCODE_V_TO:
                return "DL class code V to"
            case this.FT_DLCLASSCODE_W_FROM:
                return "DL class code W from"
            case this.FT_DLCLASSCODE_W_NOTES:
                return "DL class code W notes"
            case this.FT_DLCLASSCODE_W_TO:
                return "DL class code W to"
            default:
                return value
        }
    }
}

const FrameShapeType = {
    LINE: 0,
    CORNER: 1,
}

const LCID = {
    LATIN: 0,
    AFRIKAANS: 1078,
    ALBANIAN: 1052,
    ARABIC_ALGERIA: 5121,
    ARABIC_BAHRAIN: 15361,
    ARABIC_EGYPT: 3073,
    ARABIC_IRAQ: 2049,
    ARABIC_JORDAN: 11265,
    ARABIC_KUWAIT: 13313,
    ARABIC_LEBANON: 12289,
    ARABIC_LIBYA: 4097,
    ARABIC_MOROCCO: 6145,
    ARABIC_OMAN: 8193,
    ARABIC_QATAR: 16385,
    ARABIC_SAUDI_ARABIA: 1025,
    ARABIC_SYRIA: 10241,
    ARABIC_TUNISIA: 7169,
    ARABIC_UAE: 14337,
    ARABIC_YEMEN: 9217,
    ARABIC_ARMENIAN: 1067,
    AZERI_CYRILIC: 2092,
    AZERI_LATIN: 1068,
    BASQUE: 1069,
    BELARUSIAN: 1059,
    BULGARIAN: 1026,
    CATALAN: 1027,
    CHINESE_HONGKONG_SAR: 3076,
    CHINESE_MACAO_SAR: 5124,
    CHINESE: 2052,
    CHINESE_SINGAPORE: 4100,
    CHINESE_TAIWAN: 1028,
    CROATIAN: 1050,
    CZECH: 1029,
    DANISH: 1030,
    DIVEHI: 1125,
    DUTCH_BELGIUM: 2067,
    DUTCH_NETHERLANDS: 1043,
    ENGLISH_AUSTRALIA: 3081,
    ENGLISH_BELIZE: 10249,
    ENGLISH_CANADA: 4105,
    ENGLISH_CARRIBEAN: 9225,
    ENGLISH_IRELAND: 6153,
    ENGLISH_JAMAICA: 8201,
    ENGLISH_NEW_ZEALAND: 5129,
    ENGLISH_PHILIPPINES: 13321,
    ENGLISH_SOUTH_AFRICA: 7177,
    ENGLISH_TRINIDAD: 11273,
    ENGLISH_UK: 2057,
    ENGLISH_US: 1033,
    ENGLISH_ZIMBABWE: 12297,
    ESTONIAN: 1061,
    FAEROESE: 1080,
    FARSI: 1065,
    FINNISH: 1035,
    FRENCH_BELGIUM: 2060,
    FRENCH_CANADA: 3084,
    FRENCH_FRANCE: 1036,
    FRENCH_LUXEMBOURG: 5132,
    FRENCH_MONACO: 6156,
    FRENCH_SWITZERLAND: 4108,
    FYRO_MACEDONIAN: 1071,
    GALICIAN: 1110,
    GEORGIAN: 1079,
    GERMAN_AUSTRIA: 3079,
    GERMAN_GERMANY: 1031,
    GERMAN_LIECHTENSTEIN: 5127,
    GERMAN_LUXEMBOURG: 4103,
    GERMAN_SWITZERLAND: 2055,
    GREEK: 1032,
    GUJARATI: 1095,
    HEBREW: 1037,
    HINDI_INDIA: 1081,
    HUNGARIAN: 1038,
    ICELANDIC: 1039,
    INDONESIAN: 1057,
    ITALIAN_ITALY: 1040,
    ITALIAN_SWITZERLAND: 2064,
    JAPANESE: 1041,
    KANNADA: 1099,
    KAZAKH: 1087,
    KONKANI: 1111,
    KOREAN: 1042,
    KYRGYZ_CYRILICK: 1088,
    LATVIAN: 1062,
    LITHUANIAN: 1063,
    MALAY_MALAYSIA: 1086,
    MALAY_BRUNEI_DARUSSALAM: 2110,
    MARATHI: 1102,
    MONGOLIAN_CYRILIC: 1104,
    NORWEGIAN_BOKMAL: 1044,
    NORWEGIAN_NYORSK: 2068,
    POLISH: 1045,
    PORTUGUESE_BRAZIL: 1046,
    PORTUGUESE_PORTUGAL: 2070,
    PUNJABI: 1094,
    RHAETO_ROMANIC: 1047,
    ROMANIAN: 1048,
    RUSSIAN: 1049,
    SANSKRIT: 1103,
    SERBIAN_CYRILIC: 3098,
    SERBIAN_LATIN: 2074,
    SLOVAK: 1051,
    SLOVENIAN: 1060,
    SPANISH_ARGENTINA: 11274,
    SPANISH_BOLIVIA: 16394,
    SPANISH_CHILE: 13322,
    SPANICH_COLOMBIA: 9226,
    SPANISH_COSTA_RICA: 5130,
    SPANISH_DOMINICAN_REPUBLIC: 7178,
    SPANISH_ECUADOR: 12298,
    SPANISH_EL_SALVADOR: 17418,
    SPANISH_GUATEMALA: 4106,
    SPANISH_HONDURAS: 18442,
    SPANISH_MEXICO: 2058,
    SPANISH_NICARAGUA: 19466,
    SPANISH_PANAMA: 6154,
    SPANISH_PARAGUAY: 15370,
    SPANISH_PERU: 10250,
    SPANISH_PUERTO_RICO: 20490,
    SPANISH_TRADITIONAL_SORT: 1034,
    SPANISH_INTERNATIONAL_SORT: 3082,
    SPANISH_URUGUAY: 14346,
    SPANISH_VENEZUELA: 8202,
    SWAHILI: 1089,
    SWEDISH: 1053,
    SWEDISH_FINLAND: 2077,
    SYRIAC: 1114,
    TAMIL: 1097,
    TATAR: 1092,
    TELUGU: 1098,
    THAI_THAILAND: 1054,
    TURKISH: 1055,
    TAJIK_CYRILLIC: 1064,
    TURKMEN: 1090,
    UKRAINIAN: 1058,
    URDU: 1056,
    UZBEK_CYRILIC: 2115,
    UZBEK_LATIN: 1091,
    VIETNAMESE: 1066,
    CTC_SIMPLIFIED: 50001,
    CTC_TRADITIONAL: 50002,

    getTranslation: function (value) {
        switch (value) {
            case this.LATIN:
                return "Latin"
            case this.AFRIKAANS:
                return "Afrikaans"
            case this.ALBANIAN:
                return "Albanian"
            case this.ARABIC_ALGERIA:
                return "Arabic (Algeria)"
            case this.ARABIC_BAHRAIN:
                return "Arabic (Bahrain)"
            case this.ARABIC_EGYPT:
                return "Arabic (Egypt)"
            case this.ARABIC_IRAQ:
                return "Arabic (Iraq)"
            case this.ARABIC_JORDAN:
                return "Arabic (Jordan)"
            case this.ARABIC_KUWAIT:
                return "Arabic (Kuwait)"
            case this.ARABIC_LEBANON:
                return "Arabic (Lebanon)"
            case this.ARABIC_LIBYA:
                return "Arabic (Libya)"
            case this.ARABIC_MOROCCO:
                return "Arabic (Morocco)"
            case this.ARABIC_OMAN:
                return "Arabic (Oman)"
            case this.ARABIC_QATAR:
                return "Arabic (Qatar)"
            case this.ARABIC_SAUDI_ARABIA:
                return "Arabic (Saudi Arabia)"
            case this.ARABIC_SYRIA:
                return "Arabic (Syria)"
            case this.ARABIC_TUNISIA:
                return "Arabic (Tunisia)"
            case this.ARABIC_UAE:
                return "Arabic (U.A.E.)"
            case this.ARABIC_YEMEN:
                return "Arabic (Yemen)"
            case this.ARABIC_ARMENIAN:
                return "Armenian"
            case this.AZERI_CYRILIC:
                return "Azeri (Cyrillic)"
            case this.AZERI_LATIN:
                return "Azeri (Latin)"
            case this.BASQUE:
                return "Basque"
            case this.BELARUSIAN:
                return "Belarusian"
            case this.BULGARIAN:
                return "Bulgarian"
            case this.CATALAN:
                return "Catalan"
            case this.CHINESE_HONGKONG_SAR:
                return "Chinese (HongKong S.A.R.)"
            case this.CHINESE_MACAO_SAR:
                return "Chinese (Macao S.A.R.)"
            case this.CHINESE:
                return "Chinese"
            case this.CHINESE_SINGAPORE:
                return "Chinese (Singapore)"
            case this.CHINESE_TAIWAN:
                return "Chinese (Taiwan)"
            case this.CROATIAN:
                return "Croatian"
            case this.CZECH:
                return "Czech"
            case this.DANISH:
                return "Danish"
            case this.DIVEHI:
                return "Divehi"
            case this.DUTCH_BELGIUM:
                return "Dutch (Belgium)"
            case this.DUTCH_NETHERLANDS:
                return "Dutch (Netherlands)"
            case this.ENGLISH_AUSTRALIA:
                return "English (Australia)"
            case this.ENGLISH_BELIZE:
                return "English (Belize)"
            case this.ENGLISH_CANADA:
                return "English (Canada)"
            case this.ENGLISH_CARRIBEAN:
                return "English (Caribbean)"
            case this.ENGLISH_IRELAND:
                return "English (Ireland)"
            case this.ENGLISH_JAMAICA:
                return "English (Jamaica)"
            case this.ENGLISH_NEW_ZEALAND:
                return "English (New Zealand)"
            case this.ENGLISH_PHILIPPINES:
                return "English (Philippines)"
            case this.ENGLISH_SOUTH_AFRICA:
                return "English (South Africa)"
            case this.ENGLISH_TRINIDAD:
                return "English (Trinidad)"
            case this.ENGLISH_UK:
                return "English (United Kingdom)"
            case this.ENGLISH_US:
                return "English (United States)"
            case this.ENGLISH_ZIMBABWE:
                return "English (Zimbabwe)"
            case this.ESTONIAN:
                return "Estonian"
            case this.FAEROESE:
                return "Faeroese"
            case this.FARSI:
                return "Farsi"
            case this.FINNISH:
                return "Finnish"
            case this.FRENCH_BELGIUM:
                return "French (Belgium)"
            case this.FRENCH_CANADA:
                return "French (Canada)"
            case this.FRENCH_FRANCE:
                return "French (France)"
            case this.FRENCH_LUXEMBOURG:
                return "French (Luxembourg)"
            case this.FRENCH_MONACO:
                return "French (Monaco)"
            case this.FRENCH_SWITZERLAND:
                return "French (Switzerland)"
            case this.GALICIAN:
                return "Galician"
            case this.GEORGIAN:
                return "Georgian"
            case this.GERMAN_AUSTRIA:
                return "German (Austria)"
            case this.GERMAN_GERMANY:
                return "German (Germany)"
            case this.GERMAN_LIECHTENSTEIN:
                return "German (Liechtenstein)"
            case this.GERMAN_LUXEMBOURG:
                return "German (Luxembourg)"
            case this.GERMAN_SWITZERLAND:
                return "German (Switzerland)"
            case this.GREEK:
                return "Greek"
            case this.GUJARATI:
                return "Gujarati"
            case this.HEBREW:
                return "Hebrew"
            case this.HINDI_INDIA:
                return "Hindi (India)"
            case this.HUNGARIAN:
                return "Hungarian"
            case this.ICELANDIC:
                return "Icelandic"
            case this.INDONESIAN:
                return "Indonesian"
            case this.ITALIAN_ITALY:
                return "Italian (Italy)"
            case this.ITALIAN_SWITZERLAND:
                return "Italian (Switzerland)"
            case this.JAPANESE:
                return "Japanese"
            case this.KANNADA:
                return "Kannada"
            case this.KAZAKH:
                return "Kazakh"
            case this.KONKANI:
                return "Konkani"
            case this.KOREAN:
                return "Korean"
            case this.KYRGYZ_CYRILICK:
                return "Kyrgyz (Cyrillic)"
            case this.LATVIAN:
                return "Latvian"
            case this.LITHUANIAN:
                return "Lithuanian"
            case this.FYRO_MACEDONIAN:
                return "FYRO Macedonian"
            case this.MALAY_MALAYSIA:
                return "Malay (Malaysia)"
            case this.MALAY_BRUNEI_DARUSSALAM:
                return "Malay (Brunei Darussalam)"
            case this.MARATHI:
                return "Marathi"
            case this.MONGOLIAN_CYRILIC:
                return "Mongolian (Cyrillic)"
            case this.NORWEGIAN_BOKMAL:
                return "Norwegian (Bokmal)"
            case this.NORWEGIAN_NYORSK:
                return "Norwegian (Nynorsk)"
            case this.POLISH:
                return "Polish"
            case this.PORTUGUESE_BRAZIL:
                return "Portuguese (Brazil)"
            case this.PORTUGUESE_PORTUGAL:
                return "Portuguese (Portugal)"
            case this.PUNJABI:
                return "Punjabi"
            case this.RHAETO_ROMANIC:
                return "Rhaeto-Romanic"
            case this.ROMANIAN:
                return "Romanian"
            case this.RUSSIAN:
                return "Russian"
            case this.SANSKRIT:
                return "Sanskrit"
            case this.SERBIAN_CYRILIC:
                return "Serbian (Cyrillic)"
            case this.SERBIAN_LATIN:
                return "Serbian (Latin)"
            case this.SLOVAK:
                return "Slovak"
            case this.SLOVENIAN:
                return "Slovenian"
            case this.SPANISH_ARGENTINA:
                return "Spanish (Argentina)"
            case this.SPANISH_BOLIVIA:
                return "Spanish (Bolivia)"
            case this.SPANISH_CHILE:
                return "Spanish (Chile)"
            case this.SPANICH_COLOMBIA:
                return "Spanish (Colombia)"
            case this.SPANISH_COSTA_RICA:
                return "Spanish (Costa Rica)"
            case this.SPANISH_DOMINICAN_REPUBLIC:
                return "Spanish (Dominican Republic)"
            case this.SPANISH_ECUADOR:
                return "Spanish (Ecuador)"
            case this.SPANISH_EL_SALVADOR:
                return "Spanish (El Salvador)"
            case this.SPANISH_GUATEMALA:
                return "Spanish (Guatemala)"
            case this.SPANISH_HONDURAS:
                return "Spanish (Honduras)"
            case this.SPANISH_MEXICO:
                return "Spanish (Mexico)"
            case this.SPANISH_NICARAGUA:
                return "Spanish (Nicaragua)"
            case this.SPANISH_PANAMA:
                return "Spanish (Panama)"
            case this.SPANISH_PARAGUAY:
                return "Spanish (Paraguay)"
            case this.SPANISH_PERU:
                return "Spanish (Peru)"
            case this.SPANISH_PUERTO_RICO:
                return "Spanish (Puerto Rico)"
            case this.SPANISH_TRADITIONAL_SORT:
                return "Spanish (Traditional Sort)"
            case this.SPANISH_INTERNATIONAL_SORT:
                return "Spanish (International Sort)"
            case this.SPANISH_URUGUAY:
                return "Spanish (Uruguay)"
            case this.SPANISH_VENEZUELA:
                return "Spanish (Venezuela)"
            case this.SWAHILI:
                return "Swahili"
            case this.SWEDISH:
                return "Swedish"
            case this.SWEDISH_FINLAND:
                return "Swedish (Finland)"
            case this.SYRIAC:
                return "Syriac"
            case this.TAMIL:
                return "Tamil"
            case this.TATAR:
                return "Tatar"
            case this.TELUGU:
                return "Telugu"
            case this.THAI_THAILAND:
                return "Thai (Thailand)"
            case this.TURKISH:
                return "Turkish"
            case this.TAJIK_CYRILLIC:
                return "Tajik (Cyrillic)"
            case this.TURKMEN:
                return "Turkmen"
            case this.UKRAINIAN:
                return "Ukrainian"
            case this.URDU:
                return "Urdu"
            case this.UZBEK_CYRILIC:
                return "Uzbek (Cyrillic)"
            case this.UZBEK_LATIN:
                return "Uzbek (Latin)"
            case this.VIETNAMESE:
                return "Vietnamese"
            case this.CTC_SIMPLIFIED:
                return "CTC Simplified"
            case this.CTC_TRADITIONAL:
                return "CTC Traditional"
            default:
                return value
        }
    }
}

const PKDResourceType = {
    CERTIFICATE_PA: 0,
    CERTIFICATE_TA: 1,
    LDIF: 2,
    CRL: 3,
    ML: 4,
    DEFL: 5,
    DEVL: 6,
    BL: 7,

    getType: function (value) {
        switch (value) {
            case "pa":
                return this.CERTIFICATE_PA
            case "ta":
                return this.CERTIFICATE_TA
            case "ldif":
                return this.LDIF
            case "crl":
                return this.CRL
            case "ml":
                return this.ML
            case "defl":
                return this.DEFL
            case "devl":
                return this.DEVL
            case "bl":
                return this.BL
            default:
                return this.CERTIFICATE_PA
        }
    }
}

const RGLMeasureSystem = {
    METRIC: 0,
    IMPERIAL: 1,
}

const Scenario = {
    SCENARIO_MRZ: "Mrz",
    SCENARIO_BARCODE: "Barcode",
    SCENARIO_LOCATE: "Locate",
    SCENARIO_OCR: "Ocr",
    SCENARIO_DOCTYPE: "DocType",
    SCENARIO_MRZ_OR_BARCODE: "MrzOrBarcode",
    SCENARIO_MRZ_OR_LOCATE: "MrzOrLocate",
    SCENARIO_MRZ_AND_LOCATE: "MrzAndLocate",
    SCENARIO_MRZ_OR_OCR: "MrzOrOcr",
    SCENARIO_MRZ_OR_BARCODE_OR_OCR: "MrzOrBarcodeOrOcr",
    SCENARIO_LOCATE_VISUAL_AND_MRZ_OR_OCR: "LocateVisual_And_MrzOrOcr",
    SCENARIO_FULL_PROCESS: "FullProcess",
    SCENARIO_FULL_AUTH: "FullAuth",
    SCENARIO_ID3RUS: "Id3Rus",
    SCENARIO_RUS_STAMP: "RusStamp",
    SCENARIO_OCR_FREE: "OcrFree",
    SCENARIO_CREDIT_CARD: "CreditCard",
    SCENARIO_CAPTURE: "Capture",
}

const FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3
}

const LineCap = {
    Butt: 0,
    Round: 1,
    Square: 2,
}

const UIInterfaceOrientationMask = {
    Portrait: 0,
    LandscapeLeft: 1,
    LandscapeRight: 2,
    PortraitUpsideDown: 3,
    Landscape: 4,
    All: 5,
    AllButUpsideDown: 6,
}

const AVCaptureSessionPreset = {
    Low: 0,
    Medium: 1,
    High: 2,
    Photo: 3,
    InputPriority: 4,
    QHD960x540: 5,
    Hd1280x720: 6,
    Hd1920x1080: 7,
    Hd4K3840x2160: 8,
    IFrame960x540: 9,
    IFrame1280x720: 10,
    Qvga320x240: 11,
    Vga640x480: 12,
    Cif352x288: 13,
}

const AVCaptureDevicePosition = {
    Front: 0,
    Back: 1,
    Unspecified: 2,
}

const UIViewContentMode = {
    ScaleToFill: 0,
    ScaleAspectFit: 1,
    ScaleAspectFill: 2,
    Redraw: 3,
    Center: 4,
    Top: 5,
    Bottom: 6,
    Left: 7,
    Right: 8,
    TopLeft: 9,
    TopRight: 10,
    BottomLeft: 11,
    BottomRight: 12,
}

const Enum = {
   BarcodeResult: BarcodeResult,
   BarcodeType: BarcodeType,
   CameraTypes: CameraTypes,
   diDocType: diDocType,
   DocFormat: DocFormat,
   DocReaderAction: DocReaderAction,
   DocReaderFrame: DocReaderFrame,
   DocReaderOrientation: DocReaderOrientation,
   eCheckDiagnose: eCheckDiagnose,
   eCheckResult: eCheckResult,
   eGraphicFieldType: eGraphicFieldType,
   eImageQualityCheckType: eImageQualityCheckType,
   eProcessGLCommands: eProcessGLCommands,
   eRequestCommand: eRequestCommand,
   eRFID_AccessControl_ProcedureType: eRFID_AccessControl_ProcedureType,
   eRFID_AuthenticationProcedureType: eRFID_AuthenticationProcedureType,
   eRFID_BaudRate: eRFID_BaudRate,
   eRFID_CertificateType: eRFID_CertificateType,
   eRFID_DataFile_Type: eRFID_DataFile_Type,
   eRFID_NotificationAndErrorCodes: eRFID_NotificationAndErrorCodes,
   eRFID_Password_Type: eRFID_Password_Type,
   eRFID_SDK_ProfilerType: eRFID_SDK_ProfilerType,
   eRFID_TerminalType: eRFID_TerminalType,
   eRPRM_Authenticity: eRPRM_Authenticity,
   eRPRM_FieldVerificationResult: eRPRM_FieldVerificationResult,
   eRPRM_Lights: eRPRM_Lights,
   eRPRM_ResultType: eRPRM_ResultType,
   eRPRM_ResultType_Internal: eRPRM_ResultType_Internal,
   eRPRM_SecurityFeatureType: eRPRM_SecurityFeatureType,
   eSignManagementAction: eSignManagementAction,
   eVisualFieldType: eVisualFieldType,
   FrameShapeType: FrameShapeType,
   LCID: LCID,
   PKDResourceType: PKDResourceType,
   RGLMeasureSystem: RGLMeasureSystem,
   Scenario: Scenario,
   FontStyle: FontStyle,
   LineCap: LineCap,
   UIInterfaceOrientationMask: UIInterfaceOrientationMask,
   AVCaptureSessionPreset: AVCaptureSessionPreset,
   AVCaptureDevicePosition: AVCaptureDevicePosition,
   UIViewContentMode: UIViewContentMode,
}

const DocumentReader = {}

DocumentReader.getAPIVersion = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getAPIVersion", [], successCallback, errorCallback)
DocumentReader.getAvailableScenarios = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getAvailableScenarios", [], successCallback, errorCallback)
DocumentReader.isRFIDAvailableForUse = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "isRFIDAvailableForUse", [], successCallback, errorCallback)
DocumentReader.getCoreMode = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getCoreMode", [], successCallback, errorCallback)
DocumentReader.getCoreVersion = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getCoreVersion", [], successCallback, errorCallback)
DocumentReader.getDatabaseDate = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getDatabaseDate", [], successCallback, errorCallback)
DocumentReader.getDatabaseID = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getDatabaseID", [], successCallback, errorCallback)
DocumentReader.getDatabaseVersion = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getDatabaseVersion", [], successCallback, errorCallback)
DocumentReader.getDocumentReaderIsReady = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getDocumentReaderIsReady", [], successCallback, errorCallback)
DocumentReader.getDocumentReaderStatus = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getDocumentReaderStatus", [], successCallback, errorCallback)
DocumentReader.getDatabaseCountriesNumber = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getDatabaseCountriesNumber", [], successCallback, errorCallback)
DocumentReader.getDatabaseDocumentsNumber = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getDatabaseDocumentsNumber", [], successCallback, errorCallback)
DocumentReader.selectedScenario = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "selectedScenario", [], successCallback, errorCallback)
DocumentReader.getSessionLogFolder = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getSessionLogFolder", [], successCallback, errorCallback)
DocumentReader.getDatabaseDescription = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getDatabaseDescription", [], successCallback, errorCallback)
DocumentReader.showScanner = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "showScanner", [], successCallback, errorCallback)
DocumentReader.startNewPage = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "startNewPage", [], successCallback, errorCallback)
DocumentReader.startNewSession = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "startNewSession", [], successCallback, errorCallback)
DocumentReader.startRFIDReader = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "startRFIDReader", [], successCallback, errorCallback)
DocumentReader.stopRFIDReader = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "stopRFIDReader", [], successCallback, errorCallback)
DocumentReader.stopScanner = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "stopScanner", [], successCallback, errorCallback)
DocumentReader.deinitializeReader = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "deinitializeReader", [], successCallback, errorCallback)
DocumentReader.isAuthenticatorAvailableForUse = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "isAuthenticatorAvailableForUse", [], successCallback, errorCallback)
DocumentReader.getConfig = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getConfig", [], successCallback, errorCallback)
DocumentReader.getRfidScenario = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getRfidScenario", [], successCallback, errorCallback)
DocumentReader.getLicenseExpiryDate = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getLicenseExpiryDate", [], successCallback, errorCallback)
DocumentReader.getLicenseCountryFilter = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getLicenseCountryFilter", [], successCallback, errorCallback)
DocumentReader.licenseIsRfidAvailable = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "licenseIsRfidAvailable", [], successCallback, errorCallback)
DocumentReader.getCameraSessionIsPaused = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getCameraSessionIsPaused", [], successCallback, errorCallback)
DocumentReader.removeDatabase = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "removeDatabase", [], successCallback, errorCallback)
DocumentReader.cancelDBUpdate = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "cancelDBUpdate", [], successCallback, errorCallback)
DocumentReader.resetConfiguration = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "resetConfiguration", [], successCallback, errorCallback)
DocumentReader.clearPKDCertificates = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "clearPKDCertificates", [], successCallback, errorCallback)
DocumentReader.readRFID = (successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "readRFID", [], successCallback, errorCallback)
DocumentReader.setEnableCoreLogs = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "setEnableCoreLogs", [arg0], successCallback, errorCallback)
DocumentReader.addPKDCertificates = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "addPKDCertificates", [arg0], successCallback, errorCallback)
DocumentReader.setCameraSessionIsPaused = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "setCameraSessionIsPaused", [arg0], successCallback, errorCallback)
DocumentReader.getScenario = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "getScenario", [arg0], successCallback, errorCallback)
DocumentReader.recognizeImages = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "recognizeImages", [arg0], successCallback, errorCallback)
DocumentReader.showScannerWithCameraID = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "showScannerWithCameraID", [arg0], successCallback, errorCallback)
DocumentReader.runAutoUpdate = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "runAutoUpdate", [arg0], successCallback, errorCallback)
DocumentReader.setConfig = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "setConfig", [arg0], successCallback, errorCallback)
DocumentReader.setRfidScenario = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "setRfidScenario", [arg0], successCallback, errorCallback)
DocumentReader.initializeReader = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "initializeReader", [arg0], successCallback, errorCallback)
DocumentReader.prepareDatabase = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "prepareDatabase", [arg0], successCallback, errorCallback)
DocumentReader.recognizeImage = (arg0, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "recognizeImage", [arg0], successCallback, errorCallback)
DocumentReader.recognizeImageFrame = (arg0, arg1, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "recognizeImageFrame", [arg0, arg1], successCallback, errorCallback)
DocumentReader.recognizeImageWithOpts = (arg0, arg1, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "recognizeImageWithOpts", [arg0, arg1], successCallback, errorCallback)
DocumentReader.recognizeVideoFrame = (arg0, arg1, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "recognizeVideoFrame", [arg0, arg1], successCallback, errorCallback)
DocumentReader.showScannerWithCameraIDAndOpts = (arg0, arg1, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "showScannerWithCameraIDAndOpts", [arg0, arg1], successCallback, errorCallback)
DocumentReader.recognizeImageWithImageInputParams = (arg0, arg1, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "recognizeImageWithImageInputParams", [arg0, arg1], successCallback, errorCallback)
DocumentReader.recognizeImageWithCameraMode = (arg0, arg1, successCallback, errorCallback) => RNRegulaDocumentReader.exec("DocumentReader", "recognizeImageWithCameraMode", [arg0, arg1], successCallback, errorCallback)

DocumentReader.DocumentReaderResults = DocumentReaderResults
DocumentReader.Enum = Enum
DocumentReader.Scenario = ScenarioClass
DocumentReader.DocumentReaderCompletion = DocumentReaderCompletion

export default { DocumentReader, RNRegulaDocumentReader }