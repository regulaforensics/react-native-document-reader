import { NativeModules } from 'react-native'
export const { RNRegulaDocumentReader } = NativeModules

export class DocumentReaderScenario {
    name?: string
    caption?: string
    description?: string

    static fromJson(jsonObject?: any): DocumentReaderScenario {
        if (jsonObject == null) return null
        const result = new DocumentReaderScenario

        result.name = jsonObject["name"]
        result.caption = jsonObject["caption"]
        result.description = jsonObject["description"]

        return result
    }
}

export class CoreDetailedScenario {
    uvTorch?: boolean
    frameOrientation?: number
    faceExt?: boolean
    multiPageOff?: number
    seriesProcessMode?: boolean
    frameKWHLandscape?: number
    frameKWHPortrait?: number
    frameKWHDoublePageSpreadPortrait?: number
    frameKWHDoublePageSpreadLandscape?: number
    name?: string
    caption?: string
    description?: string
    manualCrop?: boolean

    static fromJson(jsonObject?: any): CoreDetailedScenario {
        if (jsonObject == null) return null
        const result = new CoreDetailedScenario

        result.uvTorch = jsonObject["uvTorch"]
        result.frameOrientation = jsonObject["frameOrientation"]
        result.faceExt = jsonObject["faceExt"]
        result.multiPageOff = jsonObject["multiPageOff"]
        result.seriesProcessMode = jsonObject["seriesProcessMode"]
        result.frameKWHLandscape = jsonObject["frameKWHLandscape"]
        result.frameKWHPortrait = jsonObject["frameKWHPortrait"]
        result.frameKWHDoublePageSpreadPortrait = jsonObject["frameKWHDoublePageSpreadPortrait"]
        result.frameKWHDoublePageSpreadLandscape = jsonObject["frameKWHDoublePageSpreadLandscape"]
        result.name = jsonObject["name"]
        result.caption = jsonObject["caption"]
        result.description = jsonObject["description"]
        result.manualCrop = jsonObject["manualCrop"]

        return result
    }
}

export class FaceMetaData {
    ID?: number
    rollAngle?: number
    bounds?: Bounds

    static fromJson(jsonObject?: any): FaceMetaData {
        if (jsonObject == null) return null
        const result = new FaceMetaData

        result.ID = jsonObject["ID"]
        result.rollAngle = jsonObject["rollAngle"]
        result.bounds = Bounds.fromJson(jsonObject["bounds"])

        return result
    }
}

export class Bounds {
    x?: number
    y?: number
    width?: number
    height?: number

    static fromJson(jsonObject?: any): Bounds {
        if (jsonObject == null) return null
        const result = new Bounds

        result.x = jsonObject["x"]
        result.y = jsonObject["y"]
        result.width = jsonObject["width"]
        result.height = jsonObject["height"]

        return result
    }
}

export class Rect {
    bottom?: number
    top?: number
    left?: number
    right?: number

    static fromJson(jsonObject?: any): Rect {
        if (jsonObject == null) return null
        const result = new Rect

        result.bottom = jsonObject["bottom"]
        result.top = jsonObject["top"]
        result.left = jsonObject["left"]
        result.right = jsonObject["right"]

        return result
    }
}

export class DocReaderFieldRect {
    bottom?: number
    top?: number
    left?: number
    right?: number

    static fromJson(jsonObject?: any): DocReaderFieldRect {
        if (jsonObject == null) return null
        const result = new DocReaderFieldRect

        result.bottom = jsonObject["bottom"]
        result.top = jsonObject["top"]
        result.left = jsonObject["left"]
        result.right = jsonObject["right"]

        return result
    }
}

export class DocumentReaderGraphicField {
    sourceType?: number
    fieldType?: number
    lightType?: number
    pageIndex?: number
    fieldName?: string
    lightName?: string
    value?: string
    fieldRect?: DocReaderFieldRect

    static fromJson(jsonObject?: any): DocumentReaderGraphicField {
        if (jsonObject == null) return null
        const result = new DocumentReaderGraphicField

        result.sourceType = jsonObject["sourceType"]
        result.fieldType = jsonObject["fieldType"]
        result.lightType = jsonObject["lightType"]
        result.pageIndex = jsonObject["pageIndex"]
        result.fieldName = jsonObject["fieldName"]
        result.lightName = jsonObject["lightName"]
        result.value = jsonObject["value"]
        result.fieldRect = DocReaderFieldRect.fromJson(jsonObject["fieldRect"])

        return result
    }
}

export class DocumentReaderGraphicResult {
    fields?: DocumentReaderGraphicField[]

    static fromJson(jsonObject?: any): DocumentReaderGraphicResult {
        if (jsonObject == null) return null
        const result = new DocumentReaderGraphicResult

        result.fields = []
        if (jsonObject["fields"] != null) {
            for (const i in jsonObject["fields"]) {
                result.fields.push(DocumentReaderGraphicField.fromJson(jsonObject["fields"][i]))
            }
        }

        return result
    }
}

export class DocumentReaderValue {
    pageIndex?: number
    sourceType?: number
    validity?: number
    probability?: number
    value?: string
    originalValue?: string
    boundRect?: Rect
    comparison?: Record<number, number>

    static fromJson(jsonObject?: any): DocumentReaderValue {
        if (jsonObject == null) return null
        const result = new DocumentReaderValue

        result.pageIndex = jsonObject["pageIndex"]
        result.sourceType = jsonObject["sourceType"]
        result.validity = jsonObject["validity"]
        result.probability = jsonObject["probability"]
        result.value = jsonObject["value"]
        result.originalValue = jsonObject["originalValue"]
        result.boundRect = Rect.fromJson(jsonObject["boundRect"])
        result.comparison = {}
        if (jsonObject["comparison"] != null) {
            for (const i in jsonObject["comparison"]) {
                result.comparison[i as unknown as number] = jsonObject["comparison"][i]
            }
        }

        return result
    }
}

export class DocumentReaderTextField {
    fieldType?: number
    lcid?: number
    status?: number
    lcidName?: string
    fieldName?: string
    value?: DocumentReaderValue
    values?: DocumentReaderValue[]

    static fromJson(jsonObject?: any): DocumentReaderTextField {
        if (jsonObject == null) return null
        const result = new DocumentReaderTextField

        result.fieldType = jsonObject["fieldType"]
        result.lcid = jsonObject["lcid"]
        result.status = jsonObject["status"]
        result.lcidName = jsonObject["lcidName"]
        result.fieldName = jsonObject["fieldName"]
        result.value = DocumentReaderValue.fromJson(jsonObject["value"])
        result.values = []
        if (jsonObject["values"] != null) {
            for (const i in jsonObject["values"]) {
                result.values.push(DocumentReaderValue.fromJson(jsonObject["values"][i]))
            }
        }

        return result
    }
}

export class DocumentReaderTextResult {
    status?: number
    fields?: DocumentReaderTextField[]

    static fromJson(jsonObject?: any): DocumentReaderTextResult {
        if (jsonObject == null) return null
        const result = new DocumentReaderTextResult

        result.status = jsonObject["status"]
        result.fields = []
        if (jsonObject["fields"] != null) {
            for (const i in jsonObject["fields"]) {
                result.fields.push(DocumentReaderTextField.fromJson(jsonObject["fields"][i]))
            }
        }

        return result
    }
}

export class Coordinate {
    x?: number
    y?: number

    static fromJson(jsonObject?: any): Coordinate {
        if (jsonObject == null) return null
        const result = new Coordinate

        result.x = jsonObject["x"]
        result.y = jsonObject["y"]

        return result
    }
}

export class ElementPosition {
    docFormat?: number
    width?: number
    height?: number
    dpi?: number
    pageIndex?: number
    inverse?: number
    perspectiveTr?: number
    objArea?: number
    objIntAngleDev?: number
    resultStatus?: number
    angle?: number
    center?: Coordinate
    leftTop?: Coordinate
    leftBottom?: Coordinate
    rightTop?: Coordinate
    rightBottom?: Coordinate

    static fromJson(jsonObject?: any): ElementPosition {
        if (jsonObject == null) return null
        const result = new ElementPosition

        result.docFormat = jsonObject["docFormat"]
        result.width = jsonObject["width"]
        result.height = jsonObject["height"]
        result.dpi = jsonObject["dpi"]
        result.pageIndex = jsonObject["pageIndex"]
        result.inverse = jsonObject["inverse"]
        result.perspectiveTr = jsonObject["perspectiveTr"]
        result.objArea = jsonObject["objArea"]
        result.objIntAngleDev = jsonObject["objIntAngleDev"]
        result.resultStatus = jsonObject["resultStatus"]
        result.angle = jsonObject["angle"]
        result.center = Coordinate.fromJson(jsonObject["center"])
        result.leftTop = Coordinate.fromJson(jsonObject["leftTop"])
        result.leftBottom = Coordinate.fromJson(jsonObject["leftBottom"])
        result.rightTop = Coordinate.fromJson(jsonObject["rightTop"])
        result.rightBottom = Coordinate.fromJson(jsonObject["rightBottom"])

        return result
    }
}

export class ImageQuality {
    featureType?: number
    result?: number
    type?: number

    static fromJson(jsonObject?: any): ImageQuality {
        if (jsonObject == null) return null
        const result = new ImageQuality

        result.featureType = jsonObject["featureType"]
        result.result = jsonObject["result"]
        result.type = jsonObject["type"]

        return result
    }
}

export class ImageQualityGroup {
    count?: number
    result?: number
    imageQualityList?: ImageQuality[]
    pageIndex?: number

    static fromJson(jsonObject?: any): ImageQualityGroup {
        if (jsonObject == null) return null
        const result = new ImageQualityGroup

        result.count = jsonObject["count"]
        result.result = jsonObject["result"]
        result.imageQualityList = []
        if (jsonObject["imageQualityList"] != null) {
            for (const i in jsonObject["imageQualityList"]) {
                result.imageQualityList.push(ImageQuality.fromJson(jsonObject["imageQualityList"][i]))
            }
        }
        result.pageIndex = jsonObject["pageIndex"]

        return result
    }
}

export class DocumentReaderDocumentType {
    pageIndex?: number
    documentID?: number
    dType?: number
    dFormat?: number
    dMRZ?: boolean
    name?: string
    ICAOCode?: string
    dDescription?: string
    dYear?: string
    dCountryName?: string
    FDSID?: number[]

    static fromJson(jsonObject?: any): DocumentReaderDocumentType {
        if (jsonObject == null) return null
        const result = new DocumentReaderDocumentType

        result.pageIndex = jsonObject["pageIndex"]
        result.documentID = jsonObject["documentID"]
        result.dType = jsonObject["dType"]
        result.dFormat = jsonObject["dFormat"]
        result.dMRZ = jsonObject["dMRZ"]
        result.name = jsonObject["name"]
        result.ICAOCode = jsonObject["ICAOCode"]
        result.dDescription = jsonObject["dDescription"]
        result.dYear = jsonObject["dYear"]
        result.dCountryName = jsonObject["dCountryName"]
        result.FDSID = []
        if (jsonObject["FDSID"] != null) {
            for (const i in jsonObject["FDSID"]) {
                result.FDSID.push(jsonObject["FDSID"][i])
            }
        }

        return result
    }
}

export class DocumentReaderNotification {
    code?: number
    attachment?: number
    value?: number

    static fromJson(jsonObject?: any): DocumentReaderNotification {
        if (jsonObject == null) return null
        const result = new DocumentReaderNotification

        result.code = jsonObject["code"]
        result.attachment = jsonObject["attachment"]
        result.value = jsonObject["value"]

        return result
    }
}

export class AccessControlProcedureType {
    activeOptionIdx?: number
    type?: number
    status?: number
    notifications?: number[]

    static fromJson(jsonObject?: any): AccessControlProcedureType {
        if (jsonObject == null) return null
        const result = new AccessControlProcedureType

        result.activeOptionIdx = jsonObject["activeOptionIdx"]
        result.type = jsonObject["type"]
        result.status = jsonObject["status"]
        result.notifications = []
        if (jsonObject["notifications"] != null) {
            for (const i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i])
            }
        }

        return result
    }
}

export class FileData {
    length?: number
    type?: number
    status?: number
    data?: string

    static fromJson(jsonObject?: any): FileData {
        if (jsonObject == null) return null
        const result = new FileData

        result.length = jsonObject["length"]
        result.type = jsonObject["type"]
        result.status = jsonObject["status"]
        result.data = jsonObject["data"]

        return result
    }
}

export class CertificateData {
    length?: number
    data?: string

    static fromJson(jsonObject?: any): CertificateData {
        if (jsonObject == null) return null
        const result = new CertificateData

        result.length = jsonObject["length"]
        result.data = jsonObject["data"]

        return result
    }
}

export class SecurityObjectCertificates {
    securityObject?: CertificateData

    static fromJson(jsonObject?: any): SecurityObjectCertificates {
        if (jsonObject == null) return null
        const result = new SecurityObjectCertificates

        result.securityObject = CertificateData.fromJson(jsonObject["securityObject"])

        return result
    }
}

export class File {
    readingTime?: number
    type?: number
    pAStatus?: number
    readingStatus?: number
    fileID?: string
    fileData?: FileData
    certificates?: SecurityObjectCertificates
    docFieldsText?: number[]
    docFieldsGraphics?: number[]
    docFieldsOriginals?: number[]
    notifications?: number[]

    static fromJson(jsonObject?: any): File {
        if (jsonObject == null) return null
        const result = new File

        result.readingTime = jsonObject["readingTime"]
        result.type = jsonObject["type"]
        result.pAStatus = jsonObject["pAStatus"]
        result.readingStatus = jsonObject["readingStatus"]
        result.fileID = jsonObject["fileID"]
        result.fileData = FileData.fromJson(jsonObject["fileData"])
        result.certificates = SecurityObjectCertificates.fromJson(jsonObject["certificates"])
        result.docFieldsText = []
        if (jsonObject["docFieldsText"] != null) {
            for (const i in jsonObject["docFieldsText"]) {
                result.docFieldsText.push(jsonObject["docFieldsText"][i])
            }
        }
        result.docFieldsGraphics = []
        if (jsonObject["docFieldsGraphics"] != null) {
            for (const i in jsonObject["docFieldsGraphics"]) {
                result.docFieldsGraphics.push(jsonObject["docFieldsGraphics"][i])
            }
        }
        result.docFieldsOriginals = []
        if (jsonObject["docFieldsOriginals"] != null) {
            for (const i in jsonObject["docFieldsOriginals"]) {
                result.docFieldsOriginals.push(jsonObject["docFieldsOriginals"][i])
            }
        }
        result.notifications = []
        if (jsonObject["notifications"] != null) {
            for (const i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i])
            }
        }

        return result
    }
}

export class Application {
    type?: number
    status?: number
    applicationID?: string
    dataHashAlgorithm?: string
    unicodeVersion?: string
    version?: string
    files?: File[]

    static fromJson(jsonObject?: any): Application {
        if (jsonObject == null) return null
        const result = new Application

        result.type = jsonObject["type"]
        result.status = jsonObject["status"]
        result.applicationID = jsonObject["applicationID"]
        result.dataHashAlgorithm = jsonObject["dataHashAlgorithm"]
        result.unicodeVersion = jsonObject["unicodeVersion"]
        result.version = jsonObject["version"]
        result.files = []
        if (jsonObject["files"] != null) {
            for (const i in jsonObject["files"]) {
                result.files.push(File.fromJson(jsonObject["files"][i]))
            }
        }

        return result
    }
}

export class Value {
    length?: number
    type?: number
    status?: number
    data?: string
    format?: string

    static fromJson(jsonObject?: any): Value {
        if (jsonObject == null) return null
        const result = new Value

        result.length = jsonObject["length"]
        result.type = jsonObject["type"]
        result.status = jsonObject["status"]
        result.data = jsonObject["data"]
        result.format = jsonObject["format"]

        return result
    }
}

export class Attribute {
    type?: string
    value?: Value

    static fromJson(jsonObject?: any): Attribute {
        if (jsonObject == null) return null
        const result = new Attribute

        result.type = jsonObject["type"]
        result.value = Value.fromJson(jsonObject["value"])

        return result
    }
}

export class Authority {
    data?: string
    friendlyName?: Value
    attributes?: Attribute[]

    static fromJson(jsonObject?: any): Authority {
        if (jsonObject == null) return null
        const result = new Authority

        result.data = jsonObject["data"]
        result.friendlyName = Value.fromJson(jsonObject["friendlyName"])
        result.attributes = []
        if (jsonObject["attributes"] != null) {
            for (const i in jsonObject["attributes"]) {
                result.attributes.push(Attribute.fromJson(jsonObject["attributes"][i]))
            }
        }

        return result
    }
}

export class Extension {
    data?: string
    type?: string

    static fromJson(jsonObject?: any): Extension {
        if (jsonObject == null) return null
        const result = new Extension

        result.data = jsonObject["data"]
        result.type = jsonObject["type"]

        return result
    }
}

export class Validity {
    notAfter?: Value
    notBefore?: Value

    static fromJson(jsonObject?: any): Validity {
        if (jsonObject == null) return null
        const result = new Validity

        result.notAfter = Value.fromJson(jsonObject["notAfter"])
        result.notBefore = Value.fromJson(jsonObject["notBefore"])

        return result
    }
}

export class CertificateChain {
    origin?: number
    type?: number
    version?: number
    paStatus?: number
    serialNumber?: string
    signatureAlgorithm?: string
    subjectPKAlgorithm?: string
    fileName?: Value
    validity?: Validity
    issuer?: Authority
    subject?: Authority
    notifications?: number[]
    extensions?: Extension[]

    static fromJson(jsonObject?: any): CertificateChain {
        if (jsonObject == null) return null
        const result = new CertificateChain

        result.origin = jsonObject["origin"]
        result.type = jsonObject["type"]
        result.version = jsonObject["version"]
        result.paStatus = jsonObject["paStatus"]
        result.serialNumber = jsonObject["serialNumber"]
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"]
        result.subjectPKAlgorithm = jsonObject["subjectPKAlgorithm"]
        result.fileName = Value.fromJson(jsonObject["fileName"])
        result.validity = Validity.fromJson(jsonObject["validity"])
        result.issuer = Authority.fromJson(jsonObject["issuer"])
        result.subject = Authority.fromJson(jsonObject["subject"])
        result.notifications = []
        if (jsonObject["notifications"] != null) {
            for (const i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i])
            }
        }
        result.extensions = []
        if (jsonObject["extensions"] != null) {
            for (const i in jsonObject["extensions"]) {
                result.extensions.push(Extension.fromJson(jsonObject["extensions"][i]))
            }
        }

        return result
    }
}

export class SignerInfo {
    version?: number
    paStatus?: number
    dataToHash?: string
    digestAlgorithm?: string
    signatureAlgorithm?: string
    serialNumber?: Value
    signature?: Value
    subjectKeyIdentifier?: Value
    issuer?: Authority
    notifications?: number[]
    signedAttributes?: Extension[]
    certificateChain?: CertificateChain[]

    static fromJson(jsonObject?: any): SignerInfo {
        if (jsonObject == null) return null
        const result = new SignerInfo

        result.version = jsonObject["version"]
        result.paStatus = jsonObject["paStatus"]
        result.dataToHash = jsonObject["dataToHash"]
        result.digestAlgorithm = jsonObject["digestAlgorithm"]
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"]
        result.serialNumber = Value.fromJson(jsonObject["serialNumber"])
        result.signature = Value.fromJson(jsonObject["signature"])
        result.subjectKeyIdentifier = Value.fromJson(jsonObject["subjectKeyIdentifier"])
        result.issuer = Authority.fromJson(jsonObject["issuer"])
        result.notifications = []
        if (jsonObject["notifications"] != null) {
            for (const i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i])
            }
        }
        result.signedAttributes = []
        if (jsonObject["signedAttributes"] != null) {
            for (const i in jsonObject["signedAttributes"]) {
                result.signedAttributes.push(Extension.fromJson(jsonObject["signedAttributes"][i]))
            }
        }
        result.certificateChain = []
        if (jsonObject["certificateChain"] != null) {
            for (const i in jsonObject["certificateChain"]) {
                result.certificateChain.push(CertificateChain.fromJson(jsonObject["certificateChain"][i]))
            }
        }

        return result
    }
}

export class SecurityObject {
    fileReference?: number
    version?: number
    objectType?: string
    notifications?: number[]
    signerInfos?: SignerInfo[]

    static fromJson(jsonObject?: any): SecurityObject {
        if (jsonObject == null) return null
        const result = new SecurityObject

        result.fileReference = jsonObject["fileReference"]
        result.version = jsonObject["version"]
        result.objectType = jsonObject["objectType"]
        result.notifications = []
        if (jsonObject["notifications"] != null) {
            for (const i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i])
            }
        }
        result.signerInfos = []
        if (jsonObject["signerInfos"] != null) {
            for (const i in jsonObject["signerInfos"]) {
                result.signerInfos.push(SignerInfo.fromJson(jsonObject["signerInfos"][i]))
            }
        }

        return result
    }
}

export class CardProperties {
    aTQA?: number
    bitRateR?: number
    bitRateS?: number
    chipTypeA?: number
    mifareMemory?: number
    rfidType?: number
    sAK?: number
    support4?: boolean
    supportMifare?: boolean
    aTQB?: string
    aTR?: string
    baudrate1?: string
    baudrate2?: string
    uID?: string

    static fromJson(jsonObject?: any): CardProperties {
        if (jsonObject == null) return null
        const result = new CardProperties

        result.aTQA = jsonObject["aTQA"]
        result.bitRateR = jsonObject["bitRateR"]
        result.bitRateS = jsonObject["bitRateS"]
        result.chipTypeA = jsonObject["chipTypeA"]
        result.mifareMemory = jsonObject["mifareMemory"]
        result.rfidType = jsonObject["rfidType"]
        result.sAK = jsonObject["sAK"]
        result.support4 = jsonObject["support4"]
        result.supportMifare = jsonObject["supportMifare"]
        result.aTQB = jsonObject["aTQB"]
        result.aTR = jsonObject["aTR"]
        result.baudrate1 = jsonObject["baudrate1"]
        result.baudrate2 = jsonObject["baudrate2"]
        result.uID = jsonObject["uID"]

        return result
    }
}

export class RFIDSessionData {
    totalBytesReceived?: number
    totalBytesSent?: number
    status?: number
    extLeSupport?: number
    processTime?: number
    cardProperties?: CardProperties
    sessionDataStatus?: RFIDSessionDataStatus
    accessControls?: AccessControlProcedureType[]
    applications?: Application[]
    securityObjects?: SecurityObject[]

    static fromJson(jsonObject?: any): RFIDSessionData {
        if (jsonObject == null) return null
        const result = new RFIDSessionData

        result.totalBytesReceived = jsonObject["totalBytesReceived"]
        result.totalBytesSent = jsonObject["totalBytesSent"]
        result.status = jsonObject["status"]
        result.extLeSupport = jsonObject["extLeSupport"]
        result.processTime = jsonObject["processTime"]
        result.cardProperties = CardProperties.fromJson(jsonObject["cardProperties"])
        result.sessionDataStatus = RFIDSessionDataStatus.fromJson(jsonObject["sessionDataStatus"])
        result.accessControls = []
        if (jsonObject["accessControls"] != null) {
            for (const i in jsonObject["accessControls"]) {
                result.accessControls.push(AccessControlProcedureType.fromJson(jsonObject["accessControls"][i]))
            }
        }
        result.applications = []
        if (jsonObject["applications"] != null) {
            for (const i in jsonObject["applications"]) {
                result.applications.push(Application.fromJson(jsonObject["applications"][i]))
            }
        }
        result.securityObjects = []
        if (jsonObject["securityObjects"] != null) {
            for (const i in jsonObject["securityObjects"]) {
                result.securityObjects.push(SecurityObject.fromJson(jsonObject["securityObjects"][i]))
            }
        }

        return result
    }
}

export class DocumentReaderAuthenticityCheck {
    type?: number
    status?: number
    typeName?: string
    pageIndex?: number
    elements?: DocumentReaderAuthenticityElement[]

    static fromJson(jsonObject?: any): DocumentReaderAuthenticityCheck {
        if (jsonObject == null) return null
        const result = new DocumentReaderAuthenticityCheck

        result.type = jsonObject["type"]
        result.status = jsonObject["status"]
        result.typeName = jsonObject["typeName"]
        result.pageIndex = jsonObject["pageIndex"]
        result.elements = []
        if (jsonObject["elements"] != null) {
            for (const i in jsonObject["elements"]) {
                result.elements.push(DocumentReaderAuthenticityElement.fromJson(jsonObject["elements"][i]))
            }
        }

        return result
    }
}

export class PDF417Info {
    errorLevel?: number
    columns?: number
    rows?: number

    static fromJson(jsonObject?: any): PDF417Info {
        if (jsonObject == null) return null
        const result = new PDF417Info

        result.errorLevel = jsonObject["errorLevel"]
        result.columns = jsonObject["columns"]
        result.rows = jsonObject["rows"]

        return result
    }
}

export class RFIDSessionDataStatus {
    AA?: number
    BAC?: number
    CA?: number
    PA?: number
    PACE?: number
    TA?: number
    overallStatus?: number

    static fromJson(jsonObject?: any): RFIDSessionDataStatus {
        if (jsonObject == null) return null
        const result = new RFIDSessionDataStatus

        result.AA = jsonObject["AA"]
        result.BAC = jsonObject["BAC"]
        result.CA = jsonObject["CA"]
        result.PA = jsonObject["PA"]
        result.PACE = jsonObject["PACE"]
        result.TA = jsonObject["TA"]
        result.overallStatus = jsonObject["overallStatus"]

        return result
    }
}

export class DocumentReaderBarcodeResult {
    fields?: DocumentReaderBarcodeField[]

    static fromJson(jsonObject?: any): DocumentReaderBarcodeResult {
        if (jsonObject == null) return null
        const result = new DocumentReaderBarcodeResult

        result.fields = []
        if (jsonObject["fields"] != null) {
            for (const i in jsonObject["fields"]) {
                result.fields.push(DocumentReaderBarcodeField.fromJson(jsonObject["fields"][i]))
            }
        }

        return result
    }
}

export class DocumentReaderBarcodeField {
    barcodeType?: number
    status?: number
    pageIndex?: number
    pdf417Info?: PDF417Info
    data?: any[]

    static fromJson(jsonObject?: any): DocumentReaderBarcodeField {
        if (jsonObject == null) return null
        const result = new DocumentReaderBarcodeField

        result.barcodeType = jsonObject["barcodeType"]
        result.status = jsonObject["status"]
        result.pageIndex = jsonObject["pageIndex"]
        result.pdf417Info = PDF417Info.fromJson(jsonObject["pdf417Info"])
        result.data = []
        if (jsonObject["data"] != null) {
            for (const i in jsonObject["data"]) {
                result.data.push(jsonObject["data"][i])
            }
        }

        return result
    }
}

export class DocumentReaderAuthenticityResult {
    status?: number
    checks?: DocumentReaderAuthenticityCheck[]

    static fromJson(jsonObject?: any): DocumentReaderAuthenticityResult {
        if (jsonObject == null) return null
        const result = new DocumentReaderAuthenticityResult

        result.status = jsonObject["status"]
        result.checks = []
        if (jsonObject["checks"] != null) {
            for (const i in jsonObject["checks"]) {
                result.checks.push(DocumentReaderAuthenticityCheck.fromJson(jsonObject["checks"][i]))
            }
        }

        return result
    }
}

export class DocumentReaderAuthenticityElement {
    status?: number
    elementType?: number
    elementDiagnose?: number
    elementTypeName?: string
    elementDiagnoseName?: string

    static fromJson(jsonObject?: any): DocumentReaderAuthenticityElement {
        if (jsonObject == null) return null
        const result = new DocumentReaderAuthenticityElement

        result.status = jsonObject["status"]
        result.elementType = jsonObject["elementType"]
        result.elementDiagnose = jsonObject["elementDiagnose"]
        result.elementTypeName = jsonObject["elementTypeName"]
        result.elementDiagnoseName = jsonObject["elementDiagnoseName"]

        return result
    }
}

export class DocumentReaderCompletion {
    action?: number
    results?: DocumentReaderResults
    error?: DocumentReaderException

    static fromJson(jsonObject?: any): DocumentReaderCompletion {
        if (jsonObject == null) return null
        const result = new DocumentReaderCompletion

        result.action = jsonObject["action"]
        result.results = DocumentReaderResults.fromJson(jsonObject["results"])
        result.error = DocumentReaderException.fromJson(jsonObject["error"])

        return result
    }
}

export class RfidNotificationCompletion {
    notification?: number
    value?: number

    static fromJson(jsonObject?: any): RfidNotificationCompletion {
        if (jsonObject == null) return null
        const result = new RfidNotificationCompletion

        result.notification = jsonObject["notification"]
        result.value = jsonObject["value"]

        return result
    }
}

export class DocumentReaderException {
    errorCode?: number
    localizedMessage?: string
    message?: string
    string?: string
    stackTrace?: StackTraceElement[]

    static fromJson(jsonObject?: any): DocumentReaderException {
        if (jsonObject == null) return null
        const result = new DocumentReaderException

        result.errorCode = jsonObject["errorCode"]
        result.localizedMessage = jsonObject["localizedMessage"]
        result.message = jsonObject["message"]
        result.string = jsonObject["string"]
        result.stackTrace = []
        if (jsonObject["stackTrace"] != null) {
            for (const i in jsonObject["stackTrace"]) {
                result.stackTrace.push(StackTraceElement.fromJson(jsonObject["stackTrace"][i]))
            }
        }

        return result
    }
}

export class Throwable {
    localizedMessage?: string
    message?: string
    string?: string
    stackTrace?: StackTraceElement[]

    static fromJson(jsonObject?: any): Throwable {
        if (jsonObject == null) return null
        const result = new Throwable

        result.localizedMessage = jsonObject["localizedMessage"]
        result.message = jsonObject["message"]
        result.string = jsonObject["string"]
        result.stackTrace = []
        if (jsonObject["stackTrace"] != null) {
            for (const i in jsonObject["stackTrace"]) {
                result.stackTrace.push(StackTraceElement.fromJson(jsonObject["stackTrace"][i]))
            }
        }

        return result
    }
}

export class StackTraceElement {
    lineNumber?: number
    isNativeMethod?: boolean
    className?: string
    fileName?: string
    methodName?: string
    string?: string

    static fromJson(jsonObject?: any): StackTraceElement {
        if (jsonObject == null) return null
        const result = new StackTraceElement

        result.lineNumber = jsonObject["lineNumber"]
        result.isNativeMethod = jsonObject["isNativeMethod"]
        result.className = jsonObject["className"]
        result.fileName = jsonObject["fileName"]
        result.methodName = jsonObject["methodName"]
        result.string = jsonObject["string"]

        return result
    }
}

export class PKDCertificate {
    binaryData?: string
    resourceType?: number
    privateKey?: string

    static fromJson(jsonObject?: any): PKDCertificate {
        if (jsonObject == null) return null
        const result = new PKDCertificate

        result.binaryData = jsonObject["binaryData"]
        result.resourceType = jsonObject["resourceType"]
        result.privateKey = jsonObject["privateKey"]

        return result
    }
}

export class ImageInputParam {
    width?: number
    height?: number
    type?: number

    static fromJson(jsonObject?: any): ImageInputParam {
        if (jsonObject == null) return null
        const result = new ImageInputParam

        result.width = jsonObject["width"]
        result.height = jsonObject["height"]
        result.type = jsonObject["type"]

        return result
    }
}

export class PAResourcesIssuer {
    data?: any[]
    friendlyName?: string
    attributes?: PAAttribute[]

    static fromJson(jsonObject?: any): PAResourcesIssuer {
        if (jsonObject == null) return null
        const result = new PAResourcesIssuer

        result.data = []
        if (jsonObject["data"] != null) {
            for (const i in jsonObject["data"]) {
                result.data.push(jsonObject["data"][i])
            }
        }
        result.friendlyName = jsonObject["friendlyName"]
        result.attributes = []
        if (jsonObject["attributes"] != null) {
            for (const i in jsonObject["attributes"]) {
                result.attributes.push(PAAttribute.fromJson(jsonObject["attributes"][i]))
            }
        }

        return result
    }
}

export class PAAttribute {
    type?: string
    value?: string

    static fromJson(jsonObject?: any): PAAttribute {
        if (jsonObject == null) return null
        const result = new PAAttribute

        result.type = jsonObject["type"]
        result.value = jsonObject["value"]

        return result
    }
}

export class TAChallenge {
    data?: any[]
    auxPCD?: string
    challengePICC?: string
    hashPK?: string
    idPICC?: string

    static fromJson(jsonObject?: any): TAChallenge {
        if (jsonObject == null) return null
        const result = new TAChallenge

        result.data = []
        if (jsonObject["data"] != null) {
            for (const i in jsonObject["data"]) {
                result.data.push(jsonObject["data"][i])
            }
        }
        result.auxPCD = jsonObject["auxPCD"]
        result.challengePICC = jsonObject["challengePICC"]
        result.hashPK = jsonObject["hashPK"]
        result.idPICC = jsonObject["idPICC"]

        return result
    }
}

export class DocumentReaderResultsStatus {
    overallStatus?: number
    optical?: number
    detailsOptical?: DetailsOptical
    rfid?: number
    detailsRFID?: DetailsRFID
    portrait?: number
    stopList?: number

    static fromJson(jsonObject?: any): DocumentReaderResultsStatus {
        if (jsonObject == null) return null
        const result = new DocumentReaderResultsStatus

        result.overallStatus = jsonObject["overallStatus"]
        result.optical = jsonObject["optical"]
        result.detailsOptical = DetailsOptical.fromJson(jsonObject["detailsOptical"])
        result.rfid = jsonObject["rfid"]
        result.detailsRFID = DetailsRFID.fromJson(jsonObject["detailsRFID"])
        result.portrait = jsonObject["portrait"]
        result.stopList = jsonObject["stopList"]

        return result
    }
}

export class DetailsOptical {
    overallStatus?: number
    mrz?: number
    text?: number
    docType?: number
    security?: number
    imageQA?: number
    expiry?: number
    vds?: number
    pagesCount?: number

    static fromJson(jsonObject?: any): DetailsOptical {
        if (jsonObject == null) return null
        const result = new DetailsOptical

        result.overallStatus = jsonObject["overallStatus"]
        result.mrz = jsonObject["mrz"]
        result.text = jsonObject["text"]
        result.docType = jsonObject["docType"]
        result.security = jsonObject["security"]
        result.imageQA = jsonObject["imageQA"]
        result.expiry = jsonObject["expiry"]
        result.vds = jsonObject["vds"]
        result.pagesCount = jsonObject["pagesCount"]

        return result
    }
}

export class DetailsRFID {
    pa?: number
    ca?: number
    aa?: number
    ta?: number
    bac?: number
    pace?: number
    overallStatus?: number

    static fromJson(jsonObject?: any): DetailsRFID {
        if (jsonObject == null) return null
        const result = new DetailsRFID

        result.pa = jsonObject["pa"]
        result.ca = jsonObject["ca"]
        result.aa = jsonObject["aa"]
        result.ta = jsonObject["ta"]
        result.bac = jsonObject["bac"]
        result.pace = jsonObject["pace"]
        result.overallStatus = jsonObject["overallStatus"]

        return result
    }
}

export class VDSNCData {
    type?: string
    version?: number
    issuingCountry?: string
    message?: any
    signatureAlgorithm?: string
    signature?: BytesData
    certificate?: BytesData
    certificateChain?: CertificateChain[]
    notifications?: number[]

    static fromJson(jsonObject?: any): VDSNCData {
        if (jsonObject == null) return null
        const result = new VDSNCData

        result.type = jsonObject["type"]
        result.version = jsonObject["version"]
        result.issuingCountry = jsonObject["issuingCountry"]
        result.message = jsonObject["message"]
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"]
        result.signature = BytesData.fromJson(jsonObject["signature"])
        result.certificate = BytesData.fromJson(jsonObject["certificate"])
        result.certificateChain = []
        if (jsonObject["certificateChain"] != null) {
            for (const i in jsonObject["certificateChain"]) {
                result.certificateChain.push(CertificateChain.fromJson(jsonObject["certificateChain"][i]))
            }
        }
        result.notifications = []
        if (jsonObject["notifications"] != null) {
            for (const i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i])
            }
        }

        return result
    }
}

export class BytesData {
    data?: string
    length?: number
    status?: number
    type?: number

    static fromJson(jsonObject?: any): BytesData {
        if (jsonObject == null) return null
        const result = new BytesData

        result.data = jsonObject["data"]
        result.length = jsonObject["length"]
        result.status = jsonObject["status"]
        result.type = jsonObject["type"]

        return result
    }
}

export class DocumentReaderUvFiberElement {
    rectArray?: DocReaderFieldRect[]
    rectCount?: number
    expectedCount?: number
    width?: number[]
    length?: number[]
    area?: number[]
    colorValues?: number[]
    status?: number
    elementType?: number
    elementDiagnose?: number
    elementTypeName?: string
    elementDiagnoseName?: string

    static fromJson(jsonObject?: any): DocumentReaderUvFiberElement {
        if (jsonObject == null) return null
        const result = new DocumentReaderUvFiberElement

        result.rectArray = []
        if (jsonObject["rectArray"] != null) {
            for (const i in jsonObject["rectArray"]) {
                result.rectArray.push(DocReaderFieldRect.fromJson(jsonObject["rectArray"][i]))
            }
        }
        result.rectCount = jsonObject["rectCount"]
        result.expectedCount = jsonObject["expectedCount"]
        result.width = []
        if (jsonObject["width"] != null) {
            for (const i in jsonObject["width"]) {
                result.width.push(jsonObject["width"][i])
            }
        }
        result.length = []
        if (jsonObject["length"] != null) {
            for (const i in jsonObject["length"]) {
                result.length.push(jsonObject["length"][i])
            }
        }
        result.area = []
        if (jsonObject["area"] != null) {
            for (const i in jsonObject["area"]) {
                result.area.push(jsonObject["area"][i])
            }
        }
        result.colorValues = []
        if (jsonObject["colorValues"] != null) {
            for (const i in jsonObject["colorValues"]) {
                result.colorValues.push(jsonObject["colorValues"][i])
            }
        }
        result.status = jsonObject["status"]
        result.elementType = jsonObject["elementType"]
        result.elementDiagnose = jsonObject["elementDiagnose"]
        result.elementTypeName = jsonObject["elementTypeName"]
        result.elementDiagnoseName = jsonObject["elementDiagnoseName"]

        return result
    }
}

export class ImageInputData {
    pageIndex?: number
    light?: number
    type?: number
    width?: number
    height?: number
    bitmap?: string
    imgBytes?: any[]

    static fromJson(jsonObject?: any): ImageInputData {
        if (jsonObject == null) return null
        const result = new ImageInputData

        result.pageIndex = jsonObject["pageIndex"]
        result.light = jsonObject["light"]
        result.type = jsonObject["type"]
        result.width = jsonObject["width"]
        result.height = jsonObject["height"]
        result.bitmap = jsonObject["bitmap"]
        result.imgBytes = []
        if (jsonObject["imgBytes"] != null) {
            for (const i in jsonObject["imgBytes"]) {
                result.imgBytes.push(jsonObject["imgBytes"][i])
            }
        }

        return result
    }
}

export class DocumentReaderResults {
    chipPage?: number
    overallResult?: number
    processingFinishedStatus?: number
    elapsedTime?: number
    elapsedTimeRFID?: number
    morePagesAvailable?: number
    rfidResult?: number
    highResolution?: boolean
    graphicResult?: DocumentReaderGraphicResult
    textResult?: DocumentReaderTextResult
    documentPosition?: ElementPosition[]
    barcodePosition?: ElementPosition[]
    mrzPosition?: ElementPosition[]
    imageQuality?: ImageQualityGroup[]
    rawResult?: string
    documentReaderNotification?: DocumentReaderNotification
    rfidSessionData?: RFIDSessionData
    authenticityResult?: DocumentReaderAuthenticityResult
    barcodeResult?: DocumentReaderBarcodeResult
    documentType?: DocumentReaderDocumentType[]
    status?: DocumentReaderResultsStatus
    vdsncData?: VDSNCData
    getTextFieldValueByType?({ fieldType, lcid = 0, source = -1, original = false }: { fieldType: number, lcid?: number, source?: number, original?: boolean }): string {
        if (this.textResult == null)
            return null
        const field = this.findByTypeAndLcid(fieldType, lcid)
        if (field == null)
            return null
        const value = this.findBySource(field, source)
        if (value == null)
            return null
        return original ? value.originalValue : value.value
    }

    getTextFieldStatusByType(fieldType: number, lcid?: number): number {
        if (this.textResult == null)
            return 0
        const field = this.findByTypeAndLcid(fieldType, lcid)
        return field != null ? field.status : 0
    }

    getGraphicFieldImageByType?({ fieldType, source = -1, light = -1, pageIndex = -1 }: { fieldType: number, source?: number, light?: number, pageIndex?: number }): string {
        if (this.graphicResult == null)
            return null
        const foundFields = []

        for (const field of this.graphicResult.fields)
            if (field.fieldType === fieldType)
                foundFields.push(field)
        if (source !== -1)
            for (let i = 0; i < foundFields.length; i++)
                if (foundFields[i].sourceType !== source)
                    foundFields.splice(i, 1)
        if (light !== -1)
            for (let i = 0; i < foundFields.length; i++)
                if (foundFields[i].lightType !== light)
                    foundFields.splice(i, 1)
        if (pageIndex !== -1)
            for (let i = 0; i < foundFields.length; i++)
                if (foundFields[i].pageIndex !== pageIndex)
                    foundFields.splice(i, 1)

        return foundFields.length > 0 ? foundFields[0].value : null
    }

    getQualityResult({ imageQualityCheckType, securityFeature = -1, pageIndex = 0 }: { imageQualityCheckType: number, securityFeature?: number, pageIndex?: number }): number {
        let resultSum = 2
        if (this.imageQuality == null)
            return resultSum

        let imageQualityGroup

        for (const iq of this.imageQuality)
            if (iq != null && iq.pageIndex == pageIndex)
                imageQualityGroup = iq
        if (imageQualityGroup == null)
            return resultSum

        for (const field of imageQualityGroup.imageQualityList)
            if (field.type === imageQualityCheckType)
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

        return resultSum
    }

    findByTypeAndLcid?(type: number, lcid: number): DocumentReaderTextField {
        let field
        const foundFields = []

        for (field of this.textResult.fields)
            if (field.fieldType === type)
                foundFields.push(field)
        if (foundFields.length <= 0)
            return null

        let foundField = null

        for (field of foundFields)
            if (lcid === 0) {
                foundField = field
                if (field.lcid === lcid)
                    break
            } else if (field.lcid === lcid)
                return field

        return foundField
    }

    findBySource(field: DocumentReaderTextField, sourceType: number): DocumentReaderValue {
        let value
        if (sourceType === -1) {
            const mrzVal = this.findBySource(field, 3)
            if (mrzVal != null)
                return mrzVal
            value = this.findBySource(field, 18)
            if (value != null)
                return value
            const visualVal = this.findBySource(field, 17)
            return visualVal != null ? visualVal : null
        }
        for (const item of field.values)
            if (item.sourceType === sourceType)
                return item

        return null
    }

    static fromJson(jsonObject?: any): DocumentReaderResults {
        if (jsonObject == null) return null
        const result = new DocumentReaderResults

        result.chipPage = jsonObject["chipPage"]
        result.overallResult = jsonObject["overallResult"]
        result.processingFinishedStatus = jsonObject["processingFinishedStatus"]
        result.elapsedTime = jsonObject["elapsedTime"]
        result.elapsedTimeRFID = jsonObject["elapsedTimeRFID"]
        result.morePagesAvailable = jsonObject["morePagesAvailable"]
        result.rfidResult = jsonObject["rfidResult"]
        result.highResolution = jsonObject["highResolution"]
        result.graphicResult = DocumentReaderGraphicResult.fromJson(jsonObject["graphicResult"])
        result.textResult = DocumentReaderTextResult.fromJson(jsonObject["textResult"])
        result.documentPosition = []
        if (jsonObject["documentPosition"] != null) {
            for (const i in jsonObject["documentPosition"]) {
                result.documentPosition.push(ElementPosition.fromJson(jsonObject["documentPosition"][i]))
            }
        }
        result.barcodePosition = []
        if (jsonObject["barcodePosition"] != null) {
            for (const i in jsonObject["barcodePosition"]) {
                result.barcodePosition.push(ElementPosition.fromJson(jsonObject["barcodePosition"][i]))
            }
        }
        result.mrzPosition = []
        if (jsonObject["mrzPosition"] != null) {
            for (const i in jsonObject["mrzPosition"]) {
                result.mrzPosition.push(ElementPosition.fromJson(jsonObject["mrzPosition"][i]))
            }
        }
        result.imageQuality = []
        if (jsonObject["imageQuality"] != null) {
            for (const i in jsonObject["imageQuality"]) {
                result.imageQuality.push(ImageQualityGroup.fromJson(jsonObject["imageQuality"][i]))
            }
        }
        result.rawResult = jsonObject["rawResult"]
        result.documentReaderNotification = DocumentReaderNotification.fromJson(jsonObject["documentReaderNotification"])
        result.rfidSessionData = RFIDSessionData.fromJson(jsonObject["rfidSessionData"])
        result.authenticityResult = DocumentReaderAuthenticityResult.fromJson(jsonObject["authenticityResult"])
        result.barcodeResult = DocumentReaderBarcodeResult.fromJson(jsonObject["barcodeResult"])
        result.documentType = []
        if (jsonObject["documentType"] != null) {
            for (const i in jsonObject["documentType"]) {
                result.documentType.push(DocumentReaderDocumentType.fromJson(jsonObject["documentType"][i]))
            }
        }
        result.status = DocumentReaderResultsStatus.fromJson(jsonObject["status"])
        result.vdsncData = VDSNCData.fromJson(jsonObject["vdsncData"])

        return result
    }
}

export const BarcodeResult = {
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

export const BarcodeType = {
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
    CODE11: 18,
}

export const CameraMode = {
    AUTO: 0,
    CAMERA1: 1,
    CAMERA2: 2,
}

export const CameraTypes = {
    FRONT: "front",
    BACK: "back",
}

export const CaptureMode = {
    AUTO: 0,
    CAPTURE_VIDEO: 1,
    CAPTURE_FRAME: 2,
}

export const diDocType = {
    dtNotDefined: 0,
    dtPassport: 11,
    dtIdentityCard: 12,
    dtDiplomaticPassport: 13,
    dtServicePassport: 14,
    dtSeamanIdentityDocument: 15,
    dtIdentityCardForResidence: 16,
    dtTravelDocument: 17,
    dtOther: 99,
    dtVisaID2: 29,
    dtVisaID3: 30,
    dtRegistrationCertificate: 206,
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
    dtCommercialDrivingLicenseInstructionalPermit: 39,
    dtCommercialDrivingLicenseUnder18: 40,
    dtCommercialDrivingLicenseUnder21: 41,
    dtCommercialInstructionPermit: 42,
    dtCommercialNewPermit: 43,
    dtConcealedCarryLicense: 44,
    dtConcealedFirearmPermit: 45,
    dtConditionalDrivingLicense: 46,
    dtDepartmentOfVeteransAffairsIdentityCard: 47,
    dtDiplomaticDrivingLicense: 48,
    dtDrivingLicense: 49,
    dtDrivingLicenseInstructionalPermit: 50,
    dtDrivingLicenseInstructionalPermitUnder18: 51,
    dtDrivingLicenseInstructionalPermitUnder21: 52,
    dtDrivingLicenseLearnersPermit: 53,
    dtDrivingLicenseLearnersPermitUnder18: 54,
    dtDrivingLicenseLearnersPermitUnder21: 55,
    dtDrivingLicenseNovice: 56,
    dtDrivingLicenseNoviceUnder18: 57,
    dtDrivingLicenseNoviceUnder21: 58,
    dtDrivingLicenseRegisteredOffender: 59,
    dtDrivingLicenseRestrictedUnder18: 60,
    dtDrivingLicenseRestrictedUnder21: 61,
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
    dtGraduatedInstructionPermitUnder18: 86,
    dtGraduatedInstructionPermitUnder21: 87,
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
    dtInstructionPermit: 102,
    dtInstructionPermitUnder18: 103,
    dtInstructionPermitUnder21: 104,
    dtInterimDrivingLicense: 105,
    dtInterimIdentityCard: 106,
    dtIntermediateDrivingLicense: 107,
    dtIntermediateDrivingLicenseUnder18: 108,
    dtIntermediateDrivingLicenseUnder21: 109,
    dtJuniorDrivingLicense: 110,
    dtLearnerInstructionalPermit: 111,
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
    dtRestrictedCommercialDrivingLicense: 148,
    dtRestrictedDrivingLicense: 149,
    dtRestrictedPermit: 150,
    dtSeasonalPermit: 151,
    dtSeasonalResidentIdentityCard: 152,
    dtSeniorCitizenIdentityCard: 153,
    dtSexOffender: 154,
    dtSocialSecurityCard: 155,
    dtTemporaryDrivingLicense: 156,
    dtTemporaryDrivingLicenseUnder18: 157,
    dtTemporaryDrivingLicenseUnder21: 158,
    dtTemporaryIdentityCard: 159,
    dtTemporaryInstructionPermitIdentityCard: 160,
    dtTemporaryInstructionPermitIdentityCardUnder18: 161,
    dtTemporaryInstructionPermitIdentityCardUnder21: 162,
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
    dtAlienRegistrationCard: 185,
    dtAPEHCard: 186,
    dtCouponToDrivingLicense: 187,
    dtCrewMemberCertificate: 188,
    dtDocumentForReturn: 189,
    dtECard: 190,
    dtEmploymentCard: 191,
    dtHKSARImmigrationForm: 192,
    dtImmigrantCard: 193,
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
    dtPermissionToTheLocalBorderTraffic: 205,
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
    dtTradeLicense: 239,
    dtPassportPage: 240,
    dtInvoice: 241,
    dtPassengerLocatorForm: 242,
}

export const DocFormat = {
    ID1: 0,
    ID2: 1,
    ID3: 2,
    ID3_x2: 5,
    CUSTOM: 1000,
    FLEXIBLE: 1002,
}

export const DocReaderAction = {
    COMPLETE: 1,
    PROCESS: 0,
    CANCEL: 2,
    ERROR: 3,
    NOTIFICATION: 5,
    PROCESS_WHITE_UV_IMAGES: 6,
    PROCESS_WHITE_FLASHLIGHT: 7,
    MORE_PAGES_AVAILABLE: 8,
    PROCESS_IR_FRAME: 9,
    TIMEOUT: 10,
}

export const DocReaderFrame = {
    MAX: "max",
    SCENARIO_DEFAULT: "id1",
    NONE: "none",
    DOCUMENT: "document",
}

export const DocReaderOrientation = {
    ALL: 0,
    PORTRAIT: 1,
    LANDSCAPE: 2,
    LANDSCAPE_LEFT: 3,
    LANDSCAPE_RIGHT: 4,
}

export const DocumentReaderExceptionEnum = {
    NATIVE_JAVA_EXCEPTION: 0,
    DOCUMENT_READER_STATE_EXCEPTION: 1,
    DOCUMENT_READER_WRONG_INPUT: 2,
    INITIALIZATION_FAILED: 3,
    DOCUMENT_READER_BLE_EXCEPTION: 201,
    DB_DOWNLOAD_ERROR: 301,
    LICENSE_ABSENT_OR_CORRUPTED: 101,
    LICENSE_INVALID_DATE: 102,
    LICENSE_INVALID_VERSION: 103,
    LICENSE_INVALID_DEVICE_ID: 104,
    LICENSE_INVALID_SYSTEM_OR_APP_ID: 105,
    LICENSE_NO_CAPABILITIES: 106,
    LICENSE_NO_AUTHENTICITY: 107,
    LICENSE_NO_DATABASE: 110,
    LICENSE_DATABASE_INCORRECT: 111,
    FEATURE_BLUETOOTH_LE_NOT_SUPPORTED: 701,
}

export const eCheckDiagnose = {
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
    PHOTO_WHITE_IR_DONT_MATCH: 44,
    UV_DULL_PAPER_MRZ: 50,
    FALSE_LUMINISCENCE_IN_MRZ: 51,
    UV_DULL_PAPER_PHOTO: 52,
    UV_DULL_PAPER_BLANK: 53,
    UV_DULL_PAPER_ERROR: 54,
    FALSE_LUMINISCENCE_IN_BLANK: 55,
    BAD_AREA_IN_AXIAL: 60,
    FALSE_IPI_PARAMETERS: 65,
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: 80,
    FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA: 81,
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
    HOLOGRAM_FRAMES_IS_ABSENT: 103,
    HOLOGRAM_HOLO_FIELD_IS_ABSENT: 104,
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
    PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: 153,
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO: 154,
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: 155,
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED: 156,
    MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS: 160,
    MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE: 161,
    FINGERPRINTS_COMPARISON_MISMATCH: 170,
    HOLO_PHOTO_FACE_NOT_DETECTED: 180,
    HOLO_PHOTO_FACE_COMPARISON_FAILED: 181,
    HOLO_PHOTO_FACE_GLARE_IN_CENTER_ABSENT: 182,
    HOLO_ELEMENT_SHAPE_ERROR: 183,
    ALGORITHM_STEPS_ERROR: 184,
    HOLO_AREAS_NOT_LOADED: 185,
    FINISHED_BY_TIMEOUT: 186,
    LAST_DIAGNOSE_VALUE: 190,
}

export const eCheckResult = {
    CH_CHECK_ERROR: 0,
    CH_CHECK_OK: 1,
    CH_CHECK_WAS_NOT_DONE: 2,
}

export const eGraphicFieldType = {
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

    getTranslation(value: number) {
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
                return "Color dynamics"
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
                return value.toString()
        }
    }
}

export const eImageQualityCheckType = {
    IQC_IMAGE_GLARES: 0,
    IQC_IMAGE_FOCUS: 1,
    IQC_IMAGE_RESOLUTION: 2,
    IQC_IMAGE_COLORNESS: 3,
    IQC_PERSPECTIVE: 4,
    IQC_BOUNDS: 5,
    IQC_SCREEN_CAPTURE: 6,
    IQC_PORTRAIT: 7,
    IQC_HANDWRITTEN: 8,
}

export const eLDS_ParsingErrorCodes = {
    ERR_LDS_OK: 1,
    ERR_LDS_ASN_INCORRECT_DATA: -2147483647,
    RR_LDS_ASN_NOT_ENOUGH_DATA: -2147483646,
    ERR_LDS_ASN_CONTENTS_UNEXPECTED_DATA: -2147483645,
    ERR_LDS_ASN_SIGNED_DATA_INCORRECT_DATA: -2147483640,
    ERR_LDS_ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA: -2147483639,
    ERR_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT_DATA: -2147483638,
    ERR_LDS_ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA: -2147483631,
    ERR_LDS_ASN_LDS_OBJECT_INCORRECT_DATA: -2147483629,
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INCORRECT_DATA: -2147483628,
    ERR_LDS_ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA: -2147483627,
    ERR_LDS_ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA: -2147483626,
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA: -2147483630,
    ERR_LDS_ASN_CERTIFICATE_INCORRECT_DATA: -2147483625,
    ERR_LDS_ASN_CERTIFICATE_VERSION_INCORRECT_DATA: -2147483624,
    ERR_LDS_ASN_CERTIFICATE_SN_INCORRECT_DATA: -2147483623,
    ERR_LDS_ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA: -2147483622,
    ERR_LDS_ASN_CERTIFICATE_ISSUER_INCORRECT_DATA: -2147483621,
    ERR_LDS_ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA: -2147483620,
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA: -2147483619,
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA: -2147483618,
    ERR_LDS_ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: -2147483617,
    ERR_LDS_ASN_SIGNER_INFO_INCORRECT_DATA: -2147483616,
    ERR_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT_DATA: -2147483615,
    ERR_LDS_ASN_SIGNER_INFO_SID_INCORRECT_DATA: -2147483614,
    ERR_LDS_ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA: -2147483613,
    ERR_LDS_ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA: -2147483612,
    ERR_LDS_ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA: -2147483611,
    ERR_LDS_ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA: -2147483610,
    ERR_LDS_ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA: -2147483609,
    ERR_LDS_ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM: -2147483600,
    ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY: -2147483599,
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM: -2147483598,
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM: -2147483597,
    ERR_LDS_ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR: -2147483596,
    ERR_LDS_ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED: -2147483594,
    ERR_LDS_AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE: -2147483595,
    ERR_LDS_AUTH_ERROR: -2147483568,
    ERR_LDS_AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM: -2147483567,
    ERR_LDS_AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: -2147483566,
    ERR_LDS_AUTH_MESSED_ALGORITHMS: -2147483565,
    ERR_LDS_AUTH_PUBLIC_KEY_DATA_INVALID: -2147483564,
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_DATA_INVALID: -2147483563,
    ERR_LDS_AUTH_SIGNATURE_DATA_INVALID: -2147483562,
    ERR_LDS_AUTH_UNSUPPORTED_DIGEST_ALGORITHM: -2147483561,
    ERR_LDS_AUTH_SIGNATURE_DATA_INCORRECT: -2147483560,
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED: -2147483559,
    ERR_LDS_AUTH_SIGNATURE_CHECK_FAILED: -2147483558,
    ERR_LDS_DG_WRONG_TAH: -2147483536,
    ERR_LDS_DG_CONTENTS_UNEXPECTED_DATA: -2147483535,
    ERR_LDS_BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE: -2130706415,
    ERR_LDS_PACE_INFO_NOT_AVAILABLE: -2130706400,
    ERR_LDS_PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE: -2130706399,
    ERR_LDS_PACE_KEY_AGREEMENT_CANT_INITIALIZE: -2130706398,
    ERR_LDS_PACE_EPHEMERAL_KEYS_CANT_CREATE: -2130706397,
    ERR_LDS_PACE_MAPPING_CANT_DECODE_NONCE: -2130706396,
    ERR_LDS_PACE_SHARED_SECRET_CANT_CREATE: -2130706395,
    ERR_LDS_PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT: -2130706394,
    ERR_LDS_PACE_EPHEMERAL_KEYS_INCORRECT: -2130706393,
    ERR_LDS_PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT: -2130706392,
    ERR_LDS_PACE_MAPPING_CANT_PERFORM: -2130706391,
    ERR_LDS_PACE_NON_MATCHING_AUTH_TOKENS: -2130706390,
    ERR_LDS_PACE_CAM_DATA_INCORRECT: -2130706389,
    ERR_LDS_PACE_CAM_DATA_CANT_VERIFY: -2130706388,
    ERR_LDS_PACE_CAM_DATA_NON_MATCHING: -2130706387,
    ERR_LDS_PACE_IM_SCHEME_INCORRECT: -2130706386,
    ERR_LDS_PACE_IM_RANDOM_MAPPING_FAILED: -2130706385,
    ERR_LDS_CA_CANT_FIND_PUBLIC_KEY: -2130706384,
    ERR_LDS_CA_CANT_FIND_INFO: -2130706383,
    ERR_LDS_CA_INCORRECT_VERSION: -2130706382,
    ERR_LDS_CA_CANT_FIND_DOMAIN_PARAMETERS: -2130706381,
    ERR_LDS_CA_KEY_AGREEMENT_CANT_INITIALIZE: -2130706380,
    ERR_LDS_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: -2130706379,
    ERR_LDS_CA_EPHEMERAL_KEYS_CANT_CREATE: -2130706378,
    ERR_LDS_CA_SHARED_SECRET_CANT_CREATE: -2130706377,
    ERR_LDS_CA_NON_MATCHING_AUTH_TOKENS: -2130706376,
    ERR_LDS_TA_INCORRECT_VERSION: -2130706368,
    ERR_LDS_TA_CANT_BUILD_CERTIFICATE_CHAIN: -2130706367,
    ERR_LDS_TA_CANT_FIND_IS_PRIVATE_KEY: -2130706366,
    ERR_LDS_TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: -2130706365,
    ERR_LDS_TA_SIGNATURE_BUILDING_ERROR: -2130706364,
    ERR_LDS_TA_INVALID_KEY_ALGORITHM_PARAMETERS: -2130706363,
    ERR_LDS_AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: -2130706352,
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_DATA: -2130706351,
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_PARAMETERS: -2130706350,
    ERR_LDS_AA_PUBLIC_KEY_UNDEFINED_PARAMETERS: -2130706349,
    ERR_LDS_AA_SIGNATURE_INCORRECT_DATA: -2130706348,
    ERR_LDS_AA_UNSUPPORTED_RECOVERY_SCHEME: -2130706347,
    ERR_LDS_AA_INCORRECT_TRAILER: -2130706346,
    ERR_LDS_AA_UNSUPPORTED_DIGEST_ALGORITHM: -2130706345,
    ERR_LDS_RI_SECTOR_KEY_CANT_FIND: -2130706320,
    ERR_LDS_RI_SECTOR_KEY_INCORRECT_DATA: -2130706319,
    ERR_LDS_RI_SECTOR_KEY_INCOMPLETE_DATA: -2130706318,
    ERR_LDS_CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK: -2130706336,
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED: -2130706334,
    ERR_LDS_CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE: -2130706333,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED: 135266310,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS: -2130706331,
    ERR_LDS_CV_CERTIFICATE_INCORRECT_DATA: -2130706080,
    ERR_LDS_CV_CERTIFICATE_CPI_INCORRECT_DATA: -2130706079,
    ERR_LDS_CV_CERTIFICATE_CAR_INCORRECT_DATA: -2130706078,
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA: -2130706077,
    ERR_LDS_CV_CERTIFICATE_CHR_INCORRECT_DATA: -2130706076,
    ERR_LDS_CV_CERTIFICATE_CHAT_INCORRECT_DATA: -2130706075,
    ERR_LDS_CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA: -2130706074,
    ERR_LDS_CV_CERTIFICATE_VALID_TO_INCORRECT_DATA: -2130706073,
    ERR_LDS_CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: -2130706072,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA: -2130706071,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_MISSING: -2130706070,
    ERR_LDS_VDS_UNSUPPORTED_VERSION: -2130705920,
    ERR_LDS_VDS_ISSUING_COUNTRY_SIZE: -2130705919,
    ERR_LDS_VDS_ISSUING_COUNTRY_INCORRECT_DATA: -2130705918,
    ERR_LDS_VDS_SIGNER_CERTIFICATE_SIZE: -2130705917,
    ERR_LDS_VDS_SIGNER_CERTIFICATE_DATA: -2130705916,
    ERR_LDS_VDS_SIGNATURE_INCORRECT_DATA: -2130705915,
    ERR_LDS_VDS_NC_INCORRECT_DATA: -2130705664,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_DATA: -2130705663,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_HEADER: -2130705662,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_TYPE: -2130705661,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_VERSION: -2130705660,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_ISSUING_COUNTRY: -2130705659,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_MESSAGE: -2130705658,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIGNATURE: -2130705657,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_ALGORITHM: -2130705656,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_CERTIFICATE: -2130705655,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_VALUE: -2130705654,

    getTranslation(value: number) {
        switch (value) {
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
            case -2147483630:
                return "Error - ASN LDS object: Version info incorrect data"
            case -2147483629:
                return "Error - ASN LDS object: Incorrect data"
            case -2147483628:
                return "Error - ASN LDS object: Version incorrect data"
            case -2147483627:
                return "Error - ASN LDS object: Digest algorithm incorrect data"
            case -2147483626:
                return "Error - ASN LDS object: DG hashes incorrect data"
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
                return "Error - ICAO Signed data: Signer info empty"
            case -2147483598:
                return "Error - ICAO Signer info: Unsupported digest algorithm"
            case -2147483597:
                return "Error - ICAO Signer info: Unsupported signature algorithm"
            case -2147483596:
                return "Error - ICAO Signer info: Message digest error"
            case -2147483595:
                return "Error - Auth: Signer info cannot find certificate"
            case -2147483594:
                return "Error - ICAO Signer info: Signed attributes missed"
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
            case -2147483535:
                return "Error - DG: Contents unexpected data"
            case -2130706415:
                return "Error - BAP: Symmetric Cypher Cannot Initialize"
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
                return "Error - PACE: Non-Matching Auth Tokens"
            case -2130706389:
                return "Error - PACE: CAM data incorrect"
            case -2130706388:
                return "Error - PACE: CAM data cannot verify"
            case -2130706387:
                return "Error - PACE: CAM data non-matching"
            case -2130706386:
                return "Error - PACE: IM scheme incorrect"
            case -2130706385:
                return "Error - PACE: Random mapping failed"
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
                return "Error - CA: Non-Matching Auth Tokens"
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
            case -2130706336:
                return "Error - CV Certificate: Missing mandatory data PK"
            case -2130706334:
                return "Error - CV Certificate: Public key unsupported"
            case -2130706333:
                return "Error - CV Certificate: CHAT unsupported terminal type"
            case -2130706331:
                return "Error - CV Certificate: Private key invalid params"
            case -2130706320:
                return "Error - RI: Sector Key Cannot Find"
            case -2130706319:
                return "Error - RI: Sector Key Incorrect Data"
            case -2130706318:
                return "Error - RI: Sector Key Incomplete Data"
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
                return "Error - CV Certificate: Private key incorrect data"
            case -2130706070:
                return "Error - CV Certificate: Private key missing"
            case -2130705920:
                return "Error - VDS: Unsupported version"
            case -2130705919:
                return "Error - VDS: Issuing country size"
            case -2130705918:
                return "Error - VDS: Issuing country incorrect data"
            case -2130705917:
                return "Error - VDS: Signature certificate size"
            case -2130705916:
                return "Error - VDS: Signature certificate data"
            case -2130705915:
                return "Error - VDS: Signature incorrect data"
            case -2130705664:
                return "Error - VDS: Incorrect data"
            case -2130705663:
                return "Error - VDS: Missing or incorrect data"
            case -2130705662:
                return "Error - VDS: Missing or incorrect header"
            case -2130705661:
                return "Error - VDS: Missing or incorrect type"
            case -2130705660:
                return "Error - VDS: Missing or incorrect version"
            case -2130705659:
                return "Error - VDS: Missing or incorrect issuing country"
            case -2130705658:
                return "Error - VDS: Missing or incorrect message"
            case -2130705657:
                return "Error - VDS: Missing or incorrect signature"
            case -2130705656:
                return "Error - VDS: Missing or incorrect signature algorithm"
            case -2130705655:
                return "Error - VDS: Missing or incorrect certificate"
            case -2130705654:
                return "Error - VDS: Missing or incorrect signature value"
            case 1:
                return "OK"
            case 135266310:
                return "Error - CV Certificate: Private key unsupported"
            case 2147483599:
                return "Error - ICAO Signed data: Signer info empty"
            default:
                return value.toString()
        }
    }
}

export const eLDS_ParsingNotificationCodes = {
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_VERSION: -1879048191,
    NTF_LDS_ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM: -1879048190,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_TIME_CODING: -1879048189,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME: -1879048188,
    NTF_LDS_ASN_CERTIFICATE_EMPTY_ISSUER: -1879048187,
    NTF_LDS_ASN_CERTIFICATE_EMPTY_SUBJECT: -1879048186,
    NTF_LDS_ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION: -1879048184,
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE: -1879048178,
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE: -1879048177,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS: -1879048176,
    NTF_LDS_ASN_CERTIFICATE_DUPLICATING_EXTENSIONS: -1879048169,
    NTF_LDS_ICAO_CERTIFICATE_VERSION_MISSED: -1879047680,
    NTF_LDS_ICAO_CERTIFICATE_VERSION_INCORRECT: -1879047679,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED: -1879047678,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED: -1879047677,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT: -1879047676,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED: -1879047675,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED: -1879047674,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT: -1879047673,
    NTF_LDS_ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA: -1879047672,
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM: -1879047671,
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: -1879047670,
    NTF_LDS_ICAO_CERTIFICATE_MISSED_EXTENSIONS: -1879047669,
    NTF_LDS_ICAO_CERTIFICATE_VALIDITY: -1879047668,
    NTF_LDS_ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA: -1879047667,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED: -1879047666,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL: -1879047665,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA: -1879047664,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_MISSED: -1879047663,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE1: -1879047662,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE2: -1879047661,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_NOT_CRITICAL: -1879047660,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_DATA: -1879047659,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_MISSED: -1879047658,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_INCORRECT: -1879047657,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL: -1879047656,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE: -1879047655,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA: -1879047654,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED: -1879047653,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA: -1879047652,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED: -1879047651,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED: -1879047650,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA: -1879047649,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED: -1879047648,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA: -1879047647,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY: -1879047646,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED: -1879047645,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA: -1879047644,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY: -1879047643,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT: -1879047642,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL: -1879047640,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY: -1879047639,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT: -1879047638,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT: -1879047637,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED: -1879047636,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA: -1879047635,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY: -1879047634,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT: -1879047633,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL: -1879047631,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY: -1879047630,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT: -1879047629,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT: -1879047628,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED: -1879047627,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA: -1879047626,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION: -1879047625,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES: -1879047624,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY: -1879047623,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA: -1879047622,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY: -1879047621,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED: -1879047620,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED: -1879047619,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA: -1879047618,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY: -1879047617,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED: -1879047616,
    NTF_LDS_ICAO_CERTIFICATE_SN_NON_COMPLIANT: -1879047615,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT: -1879047614,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT: -1879047613,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT: -1879047612,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT: -1879047611,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING: -1879047610,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING: -1879047609,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA: -1879047608,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT: -1879047607,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL: -1879047606,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT: -1879047605,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL: -1879047604,
    NTF_LDS_ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL: -1879047603,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT: -1879047602,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT: -1879047601,
    NTF_LDS_ICAO_COM_LDS_VERSION_INCORRECT: -1879048160,
    NTF_LDS_ICAO_COM_LDS_VERSION_MISSING: -1879048159,
    NTF_LDS_ICAO_COM_UNICODE_VERSION_INCORRECT: -1879048158,
    NTF_LDS_ICAO_COM_UNICODE_VERSION_MISSING: -1879048157,
    NTF_LDS_ICAO_COM_DGPM_INCORRECT: -1879048156,
    NTF_LDS_ICAO_COM_DGPM_MISSING: -1879048155,
    NTF_LDS_ICAO_COM_DGPM_UNEXPECTED: -1879048154,
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED: -1879048144,
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED: -1879048143,
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_INCONSISTENT: -1879048142,
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT: -1879048141,
    NTF_LDS_ASN_SIGNED_DATA_OID_INCORRECT: -1879047936,
    NTF_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT: -1879047776,
    NTF_LDS_ASN_SIGNED_DATA_CONTENT_OID_INCORRECT: -1879047775,
    NTF_LDS_ICAO_SIGNED_DATA_VERSION_INCORRECT: -1879047935,
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY: -1879047934,
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED: -1879047933,
    NTF_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES: -1879047927,
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_MISSED: -1879047760,
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_EMPTY: -1879047759,
    NTF_LDS_ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE: -1879047758,
    NTF_LDS_ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID: -1879047932,
    NTF_LDS_ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT: -1879047931,
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_MISSING: -1879047930,
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_EXTRA: -1879047929,
    NTF_LDS_ICAO_LDS_OBJECT_VERSION_INCORRECT: -1879047928,
    NTF_LDS_ICAO_MASTER_LIST_VERSION_INCORRECT: -1879047744,
    NTF_LDS_ICAO_DEVIATION_LIST_VERSION_INCORRECT: -1879047736,
    NTF_LDS_BSI_DEFECT_LIST_VERSION_INCORRECT: -1879047728,
    NTF_LDS_BSI_BLACK_LIST_VERSION_INCORRECT: -1879047720,
    NTF_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT: -1879047926,
    NTF_LDS_ASN_SIGNER_INFO_SID_INCORRECT_CHOICE: -1879047925,
    NTF_LDS_ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED: -1879047924,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING: -1879047923,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA: -1879047922,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_Value: -1879047921,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING: -1879047920,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA: -1879047919,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE: -1879047918,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING: -1879047909,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA: -1879047908,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE: -1879047907,
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING: -1879047906,
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA: -1879047905,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY: -1879047915,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: -1879047914,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: -1879047913,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_REVOKED: -1879047912,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: -1879047911,
    NTF_LDS_UNSUPPORTED_IMAGE_FORMAT: -1879047910,
    NTF_LDS_MRZ_DOCUMENT_TYPE_UNKNOWN: 139272,
    NTF_LDS_MRZ_ISSUING_STATE_SYNTAX_ERROR: 139273,
    NTF_LDS_MRZ_NAME_IS_VOID: 139274,
    NTF_LDS_MRZ_NUMBER_INCORRECT_CHECKSUM: 139277,
    NTF_LDS_MRZ_NATIONALITY_SYNTAX_ERROR: 139278,
    NTF_LDS_MRZ_DOB_SYNTAX_ERROR: 139279,
    NTF_LDS_MRZ_DOB_ERROR: 139280,
    NTF_LDS_MRZ_DOB_INCORRECT_CHECKSUM: 139281,
    NTF_LDS_MRZ_SEX_INCORRECT: 139282,
    NTF_LDS_MRZ_DOE_SYNTAX_ERROR: 139283,
    NTF_LDS_MRZ_DOE_ERROR: 139284,
    NTF_LDS_MRZ_DOE_INCORRECT_CHECKSUM: 139285,
    NTF_LDS_MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM: 139286,
    NTF_LDS_MRZ_INCORRECT_CHECKSUM: 139287,
    NTF_LDS_MRZ_INCORRECT: 139288,
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_MISSING: -1878982656,
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_INCORRECT: -1878917120,
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_MISSING: -1878851584,
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_INCORRECT: -1878786048,
    NTF_LDS_BIOMETRICS_TYPE_INCORRECT: -1878720512,
    NTF_LDS_BIOMETRICS_SUB_TYPE_MISSING: -1878654976,
    NTF_LDS_BIOMETRICS_SUB_TYPE_INCORRECT: -1878589440,
    NTF_LDS_BIOMETRICS_BDB_IMAGE_MISSING: -1878523904,
    NTF_LDS_BIOMETRICS_BDB_FORMAT_ID_INCORRECT: -1878458368,
    NTF_LDS_BIOMETRICS_BDB_VERSION_INCORRECT: -1878392832,
    NTF_LDS_BIOMETRICS_BDB_DATA_LENGTH_INCORRECT: -1878327296,
    NTF_LDS_BIOMETRICS_BDB_DATA_GENDER: -1877999616,
    NTF_LDS_BIOMETRICS_BDB_DATA_EYE_COLOR: -1877934080,
    NTF_LDS_BIOMETRICS_BDB_DATA_HAIR_COLOR: -1877868544,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW: -1877803008,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH: -1877737472,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL: -1877671936,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW: -1877606400,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH: -1877540864,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL: -1877475328,
    NTF_LDS_BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE: -1877409792,
    NTF_LDS_BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE: -1877344256,
    NTF_LDS_SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS: -1862270976,
    NTF_LDS_SI_PACE_INFO_DEPRECATED_VERSION: -1862270975,
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_USING_STD_REF: -1862270974,
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: -1862270973,
    NTF_LDS_SI_CA_INFO_INCORRECT_VERSION: -1862270972,
    NTF_LDS_SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: -1862270971,
    NTF_LDS_SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: -1862270970,
    NTF_LDS_SI_TA_INFO_INCORRECT_VERSION: -1862270969,
    NTF_LDS_SI_TA_INFO_FILE_ID_FOR_VERSION2: -1862270968,
    NTF_LDS_SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM: -1862270967,
    NTF_LDS_SI_RI_INFO_INCORRECT_VERSION: -1862270966,
    NTF_LDS_SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: -1862270965,
    NTF_LDS_SI_AA_INFO_INCORRECT_VERSION: -1862270964,
    NTF_LDS_SI_AA_INFO_UNSUPPORTED_ALGORITHM: -1862270963,
    NTF_LDS_SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE: -1862270962,
    NTF_LDS_SI_STORAGE_PACE_INFO_NOT_AVAILABLE: -1862270720,
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS: -1862270719,
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS: -1862270718,
    NTF_LDS_SI_STORAGE_CA_INFO_NOT_AVAILABLE: -1862270717,
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION: -1862270716,
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE: -1862270715,
    NTF_LDS_SI_STORAGE_CA_ANONYMOUS_INFOS: -1862270714,
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS: -1862270713,
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY: -1862270712,
    NTF_LDS_SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY: -1862270711,
    NTF_LDS_SI_STORAGE_TA_INFO_NOT_AVAILABLE: -1862270710,
    NTF_LDS_SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES: -1862270709,
    NTF_LDS_SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES: -1862270708,
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES: -1862270707,
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE: -1862270706,
    NTF_LDS_SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES: -1862270705,
    NTF_LDS_SI_STORAGE_PACE_INFOS_NON_CONSISTANT: -1862270704,
    NTF_LDS_CV_CERTIFICATE_PROFILE_INCORRECT_VERSION: -1862270463,
    NTF_LDS_CV_CERTIFICATE_VALIDITY: -1862270462,
    NTF_LDS_CV_CERTIFICATE_NON_CV_CA_DOMAIN_PARAMETERS: -1862270461,
    NTF_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION: -1862270460,
    NTF_LDS_TA_PACE_STATIC_BINDING_USED: -1862270208,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY: -1845493483,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: -1845493482,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: -1845493481,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED: -1845493480,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: -1845493479,

    getTranslation(value: number) {
        switch (value) {
            case -1879048191:
                return "Notification - ASN certificate: Incorrect version"
            case -1879048190:
                return "Notification - ASN certificate: Non-matching signature algorithm"
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
            case -1879047935:
                return "Notification - ICAO signed data: Version incorrect"
            case -1879047934:
                return "Notification - ICAO signed data: Digest algorithms empty"
            case -1879047933:
                return "Notification - ICAO signed data: Digest algorithms unsupported"
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
            case -1879047927:
                return "Notification - ICAO signed data: Signer infos multiple entries"
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
            case -1879047915:
                return "Notification - Auth signer info: Certificate validity"
            case -1879047914:
                return "Notification - Auth signer info: Certificate root is not trusted"
            case -1879047913:
                return "Notification - Auth signer info: Certificate cannot find CSCA"
            case -1879047912:
                return "Notification - Auth signer info: Certificate revoked"
            case -1879047911:
                return "Notification - Auth signer info: Certificate signature invalid"
            case -1879047910:
                return "Notification: Unsupported image format"
            case -1879047909:
                return "Notification - ASN signer info: Signing time attr missing"
            case -1879047908:
                return "Notification - ASN signer info: Signing time attr data"
            case -1879047907:
                return "Notification - ASN signer info: Signing time attr value"
            case -1879047906:
                return "Notification - ASN signer info: List content description attr missing"
            case -1879047905:
                return "Notification - ASN signer info: List content description attr data"
            case -1879047776:
                return "Notification - ASN signed data: Version incorrect"
            case -1879047775:
                return "Notification - ASN signed data: Content OID incorrect"
            case -1879047760:
                return "Notification - ICAO signed data: Certificates missed"
            case -1879047759:
                return "Notification - ICAO signed data: Certificates empty"
            case -1879047758:
                return "Notification - ICAO signed data: CRLs incorrect usage"
            case -1879047744:
                return "Notification - ICAO master list: Version incorrect"
            case -1879047736:
                return "Notification - ICAO Deviation list: Version incorrect"
            case -1879047728:
                return "Notification - BSI: Defect  list version incorrect"
            case -1879047720:
                return "Notification - BSI: Black list version incorrect"
            case -1879047680:
                return "Notification - ICAO certificate: Version missed"
            case -1879047679:
                return "Notification - ICAO certificate: Version incorrect"
            case -1879047678:
                return "Notification - ICAO certificate: Issuer country missed"
            case -1879047677:
                return "Notification - ICAO certificate: Issuer common name missed"
            case -1879047676:
                return "Notification - ICAO certificate: Issuer country non-compliant"
            case -1879047675:
                return "Notification - ICAO certificate: Subject country missed"
            case -1879047674:
                return "Notification - ICAO certificate: Subject common name missed"
            case -1879047673:
                return "Notification - ICAO certificate: Subject country non-compliant"
            case -1879047672:
                return "Notification - ICAO certificate: Using non-compliant data"
            case -1879047671:
                return "Notification - ICAO certificate: Unsupported signature algorithm"
            case -1879047670:
                return "Notification - ICAO certificate: Unsupported public key algorithm"
            case -1879047669:
                return "Notification - ICAO certificate: Missed extensions"
            case -1879047668:
                return "Notification - ICAO certificate: Validity"
            case -1879047667:
                return "Notification - ICAO certificate extension: Using non-compliant data"
            case -1879047666:
                return "Notification - ICAO certificate extension: Key usage missed"
            case -1879047665:
                return "Notification - ICAO certificate extension: Key usage not critical"
            case -1879047664:
                return "Notification - ICAO certificate extension: Key usage incorrect data"
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
                return "Notification - ICAO certificate extension: Subject alt name non-compliant"
            case -1879047640:
                return "Notification - ICAO certificate extension: Subject alt name critical"
            case -1879047639:
                return "Notification - ICAO certificate extension: Subject alt name DN empty"
            case -1879047638:
                return "Notification - ICAO certificate extension: Subject alt name DN incorrect"
            case -1879047637:
                return "Notification - ICAO certificate extension: Subject alt name DN non-compliant"
            case -1879047636:
                return "Notification - ICAO certificate extension: Issuer alt name missed"
            case -1879047635:
                return "Notification - ICAO certificate extension: Issuer alt name incorrect data"
            case -1879047634:
                return "Notification - ICAO certificate extension: Issuer alt name empty"
            case -1879047633:
                return "Notification - ICAO certificate extension: Issuer alt name non-compliant"
            case -1879047631:
                return "Notification - ICAO certificate extension: Issuer alt name critical"
            case -1879047630:
                return "Notification - ICAO certificate extension: Issuer alt name DN empty"
            case -1879047629:
                return "Notification - ICAO certificate extension: Issuer alt name DN incorrect"
            case -1879047628:
                return "Notification - ICAO certificate extension: Issuer alt name DN non-compliant"
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
            case -1879047615:
                return "Notification - ICAO certificate: SN non-compliant"
            case -1879047614:
                return "Notification - ICAO certificate: Issuer SN non-compliant"
            case -1879047613:
                return "Notification - ICAO certificate: Subject SN non-compliant"
            case -1879047612:
                return "Notification - ICAO certificate: Issuer attribute non-compliant"
            case -1879047611:
                return "Notification - ICAO certificate: Subject attribute non-compliant"
            case -1879047610:
                return "Notification - ICAO certificate: Issuer subject country non-matching"
            case -1879047609:
                return "Notification - ICAO certificate extension: CSCA alt names non-matching"
            case -1879047608:
                return "Notification - ICAO certificate extension: Name change incorrect data"
            case -1879047607:
                return "Notification - ICAO certificate extension: Name change non-compliant"
            case -1879047606:
                return "Notification - ICAO certificate extension: Name change critical"
            case -1879047605:
                return "Notification - ICAO certificate extension Doc type list: non-compliant"
            case -1879047604:
                return "Notification - ICAO certificate extension Doc type list: Critical"
            case -1879047603:
                return "Notification - ICAO certificate extension: Optional critical"
            case -1879047602:
                return "Notification - ICAO certificate: Subject non-compliant"
            case -1879047601:
                return "Notification - ICAO certificate: Subject common name non-compliant"
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
                return "Notification - Biometrics: BDB version incorrect"
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
                return "Notification - SI: Storage PACE Info Non Consistant"
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
                return "Notification - Auth ML signer info: Certificate cannot find CSCA"
            case -1845493480:
                return "Notification - Auth ML signer info: Certificate revoked"
            case -1845493479:
                return "Notification - Auth ML signer info: Certificate signature invalid"
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
            default:
                return value.toString()
        }
    }
}

export const eProcessGLCommands = {
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

export const eRequestCommand = {
    eReqCmd_RFid_SendData: 100,
    eReqCmd_RFid_Notify: 101,
    eReqCmd_RFid_GetDataForScenario: 102,
    eReqCmd_Torch_GetUVFoto: 200,
    eReqCmd_InternetSend: 300,
    eReqCmd_GetGuid: 400,
}

export const eRFID_AccessControl_ProcedureType = {
    ACPT_UNDEFINED: 0,
    ACPT_BAC: 1,
    ACPT_PACE: 2,
    ACPT_CA: 3,
    ACPT_TA: 4,
    ACPT_AA: 5,
    ACPT_RI: 6,
    ACPT_CARD_INFO: 10,
}

export const eRFID_AuthenticationProcedureType = {
    aptUndefined: 0,
    aptStandard: 1,
    aptAdvanced: 2,
    aptGeneral: 3,
}

export const eRFID_BaudRate = {
    rfbr_106: 1,
    rfbr_212: 2,
    rfbr_424: 4,
    rfbr_848: 8,
}

export const eRFID_CertificateType = {
    CT_UNDEFINED: 0,
    CT_CSCA: 1,
    CT_CSCA_LINK: 2,
    CT_DS: 3,
    CT_MLS: 4,
    CT_DEV_LS: 5,
    CT_DEF_LS: 6,
    CT_BLS: 7,
    CT_LDS2: 8,
    CT_BCS: 9,
    CT_BCSNC: 10,
}

export const eRFID_DataFile_Type = {
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
    DFT_DL_CVCA: 167,
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
    DFT_CHIP_PROPERTIES: 703,
    DFT_SAM_DATA: 800,
    DFT_SAM_DATA_MAX: 832,
    DFT_VDS: 900,
    DFT_VDSNC: 901,
    DFT_USERDEFINED: 1000,

    getTranslation(value: number) {
        switch (value) {
            case 0:
                return "DFT_UNSPECIFIED"
            case 1:
                return "Machine Readable Zone (DG1)"
            case 2:
                return "Biometry - Facial data (DG2)"
            case 3:
                return "Biometry - Fingerprint(s) (DG3)"
            case 4:
                return "Biometry - Iris Data (DG4)"
            case 5:
                return "Portrait(s) (DG5)"
            case 6:
                return "not defined (DG6)"
            case 7:
                return "Signature / usual mark image (DG7)"
            case 8:
                return "not defined (DG8)"
            case 9:
                return "not defined (DG9)"
            case 10:
                return "not defined (DG10)"
            case 11:
                return "Additional personal detail(s) (DG11)"
            case 12:
                return "Additional document details (DG12)"
            case 13:
                return "Optional detail(s) (DG13)"
            case 14:
                return "EAC info (DG14)"
            case 15:
                return "Active Authentication info (DG15)"
            case 16:
                return "Person(s) to notify (DG16)"
            case 17:
                return "DG17"
            case 18:
                return "DG18"
            case 19:
                return "DG19"
            case 20:
                return "DG20"
            case 21:
                return "EF.SOD"
            case 165:
                return "EF.SOD"
            case 22:
                return "EF.CVCA"
            case 23:
                return "EF.COM"
            case 150:
                return "EF.COM"
            case 101:
                return "Document type" + " (DG1)"
            case 102:
                return "Issuing state" + " (DG2)"
            case 103:
                return "Date of expiry" + " (DG3)"
            case 104:
                return "Given name" + " (DG4)"
            case 105:
                return "Surname/given name at birth" + " (DG5)"
            case 106:
                return "Pseudonym" + " (DG6)"
            case 107:
                return "Academic title" + " (DG7)"
            case 108:
                return "Date of birth" + " (DG8)"
            case 109:
                return "Place of birth" + " (DG9)"
            case 110:
                return "Nationality" + " (DG10)"
            case 111:
                return "Sex" + " (DG11)"
            case 112:
                return "Optional details" + " (DG12)"
            case 113:
                return "Undefined" + " (DG13)"
            case 114:
                return "Undefined" + " (DG14)"
            case 115:
                return "Undefined" + " (DG15)"
            case 116:
                return "Undefined" + " (DG16)"
            case 117:
                return "Place of registration" + " (DG17)"
            case 118:
                return "Place of registration" + " (DG18)"
            case 119:
                return "Residence permit 1" + " (DG19)"
            case 120:
                return "Residence permit 2" + " (DG20)"
            case 121:
                return "Optional details" + " (DG21)"
            case 151:
                return "Text data elements (DG1)"
            case 152:
                return "License holder information (DG2)"
            case 153:
                return "Issuing authority details (DG3)"
            case 154:
                return "Portrait image (DG4)"
            case 155:
                return "Signature / usual mark image (DG5)"
            case 156:
                return "Biometry - Facial data (DG6)"
            case 157:
                return "Biometry - Fingerprint(s) (DG7)"
            case 158:
                return "Biometry - Iris Data (DG8)"
            case 159:
                return "Biometry - Other (DG9)"
            case 160:
                return "not defined (DG10)"
            case 161:
                return "Optional domestic data (DG11)"
            case 162:
                return "Non-match alert (DG12)"
            case 163:
                return "Active Authentication info (DG13)"
            case 164:
                return "EAC info (DG14)"
            case 166:
                return "DFT_DL_CE"
            case 167:
                return "DFT_DL_CVCA"
            case 200:
                return "EF.CardAccess"
            case 201:
                return "EF.CardSecurity"
            case 202:
                return "EF.ChipSecurity"
            case 300:
                return "MIFARE data"
            case 301:
                return "MIFARE validity"
            case 400:
                return "DFT_ATR"
            case 500:
                return "DFT_ESIGN_PK"
            case 501:
                return "DFT_ESIGN_SIGNEDDATA"
            case 600:
                return "Certificate"
            case 601:
                return "DFT_MASTERLIST"
            case 602:
                return "DFT_DEFECTLIST"
            case 603:
                return "DFT_DEVIATIONLIST"
            case 700:
                return "App directory"
            case 701:
                return "DFT_SESSION"
            case 702:
                return "DFT_LOGDATA"
            case 703:
                return "DFT_CHIP_PROPERTIES"
            case 1000:
                return "DFT_USERDEFINED"
            default:
                return value.toString()
        }
    }
}

export const eRFID_ErrorCodes = {
    RFID_ERROR_NO_ERROR: 1,
    RFID_ERROR_ALREADY_DONE: 2,
    RFID_ERROR_FAILED: -1,
    RFID_ERROR_NO_CHIP_DETECTED: -2147418111,
    RFID_ERROR_NOT_AVAILABLE: -2147418110,
    RFID_ERROR_INVALID_PARAMETER: -2147418108,
    RFID_ERROR_NOT_INITIALIZED: -2147418107,
    RFID_ERROR_NOT_ENOUGH_MEMORY: -2147418106,
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
    RFID_ERROR_PCSC_FAILED_SCARD: -2147352570,
    RFID_ERROR_PCSC_EXT_LE_FAILED: -2147352560,
    RFID_ERROR_LAYER6_SECURITY_MANAGER: -2046820352,
    RFID_ERROR_LAYER6_APP_SELECTION_FAILURE: -2046820351,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_MAC_FAIL: -2046820096,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_ENC_FAIL: -2046820095,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE: -2046820094,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE_DATA: -2046820093,
    RFID_ERROR_LAYER6_SM_DO_8E_MISSING: -2046819840,
    RFID_ERROR_LAYER6_SM_DO_87_MISSING: -2046819839,
    RFID_ERROR_LAYER6_SM_DO_99_MISSING: -2046819838,
    RFID_ERROR_LAYER6_SM_MAC_INCORRECT: -2046819837,
    RFID_ERROR_LAYER6_SM_DO_87_INCORRECT: -2046819836,
    RFID_ERROR_LAYER6_NON_TLV_RESPONSE_DATA: -2046819584,
    RFID_ERROR_LAYER6_WRONG_RND_ICC_LENGTH: -2046819583,
    RFID_ERROR_LAYER6_INT_AUTH_FAILURE: -2046819582,
    RFID_ERROR_LAYER6_MSE_SET_KAT_FAILURE: -2046819581,
    RFID_ERROR_LAYER6_MSE_SET_DST_FAILURE: -2046819580,
    RFID_ERROR_LAYER6_PSO_CERTIFICATE_FAILURE: -2046819579,
    RFID_ERROR_LAYER6_MSE_SET_AT_FAILURE: -2046819578,
    RFID_ERROR_LAYER6_GET_CHALLENGE_FAILURE: -2046819577,
    RFID_ERROR_LAYER6_EXT_AUTH_FAILURE: -2046819576,
    RFID_ERROR_LAYER6_GENERAL_AUTH_FAILURE: -2046819575,
    RFID_ERROR_LAYER6_FILE_NOT_FOUND: -2147456382,
    RFID_ERROR_LAYER6_FILE_EOF1: -2147458430,
    RFID_ERROR_LAYER6_FILE_EOF2: -2147456256,
    RFID_ERROR_LAYER6_INCORRECT_PARAMS: -2147456384,
    RFID_ERROR_LAYER6_NO_REFERENCE_DATA: -2147456376,
    RFID_ERROR_LAYER6_PWD_SUSPEND: -2147458111,
    RFID_ERROR_LAYER6_PWD_BLOCKED: -2147458112,
    RFID_ERROR_LAYER6_PWD_DEACTIVATED: -2147458429,
    RFID_ERROR_LAYER6_PWD_BLOCKED2: -2147456637,
    RFID_ERROR_LAYER6_PWD_DEACTIVATED2: -2147456636,
    RFID_ERROR_LAYER6_PWD_SUSPEND2: -2147456635,
    RFID_ERROR_LAYER6_PWD_FAILED: -2146409536,
    RFID_ERROR_NOT_PERFORMED: -2097152000,
    RFID_ERROR_SESSION_IS_CLOSED: -2097151999,
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: -2097151998,
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: -2097151984,
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: -2097151983,
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: -2097151982,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: -2097151981,
    RFID_ERROR_Session_Procedure_Type_Unsupported: -2097151980,
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
    RFID_ERROR_LAYER34_NO_ERROR: -2080374784,
    RFID_ERROR_LAYER34_TIME_OUT: -2080309248,
    RFID_ERROR_LAYER34_COLLISION: -2080243712,
    RFID_ERROR_LAYER34_CRC: -2080178176,
    RFID_ERROR_LAYER34_DATA_INTEGRITY: -2080112640,
    RFID_ERROR_LAYER34_DATA_LENGTH: -2080047104,
    RFID_ERROR_Layer34_RFU: -2079981568,
    RFID_ERROR_LAYER34_COLLISION_TOO_MANY: -2079916032,
    RFID_ERROR_LAYER34_PROTOCOL_B: -2079850496,
    RFID_ERROR_LAYER34_DATA_CONTENTS: -2079784960,
    RFID_ERROR_LAYER34_PROTOCOL: -2079719424,
    RFID_ERROR_LAYER34_GLOBAL_TIME_OUT: -2079653888,
    RFID_ERROR_LAYER34_MIFARE_AUTH: -2079588352,
    RFID_ERROR_LAYER34_SAM_ERROR: -2079522816,
    RFID_ERROR_LAYER34_SAM_COLLISION: -2079457280,
    RFID_ERROR_LAYER34_SAM_ACKNOWLEDGE: -2079391744,

    getTranslation(value: number) {
        switch (value) {
            case -2147458430:
                return "LAYER6: Reading beyond EOF / Unexpected EOF"
            case -2147458429:
                return "LAYER6: PWD deactivated"
            case -2147458112:
                return "LAYER6: PWD blocked"
            case -2147458111:
                return "LAYER6: PWD suspended"
            case -2147456637:
                return "LAYER6: PWD blocked 2"
            case -2147456636:
                return "LAYER6: PWD deactivated 2"
            case -2147456635:
                return "LAYER6: PWD suspended 2"
            case -2147456384:
                return "LAYER6: Incorrect params"
            case -2147456382:
                return "LAYER6: File selection failure / file not found"
            case -2147456376:
                return "LAYER6: No reference data"
            case -2147456256:
                return "LAYER6: Reading beyond EOF / Unexpected EOF"
            case -2147418111:
                return "RFID: No chip is detected"
            case -2147418110:
                return "RFID: Unavailable"
            case -2147418108:
                return "RFID: Invalid parameter in ExecuteCommand() call found"
            case -2147418107:
                return "RFID: Device is uninitialized"
            case -2147418106:
                return "RFID: Out of memory"
            case -2147418104:
                return "RFID: Invalid directory"
            case -2147418103:
                return "RFID: Unknown command"
            case -2147418102:
                return "RFID File: IO Error"
            case -2147418101:
                return "RFID: RFID is busy"
            case -2147418100:
                return "RFID: The firmware needs to be updated to a newer version"
            case -2147352576:
                return "PCSC: Failed"
            case -2147352575:
                return "PCSC: The reader is unavailable"
            case -2147352574:
                return "PCSC: The card cannot be connected"
            case -2147352573:
                return "PCSC: The card is not connected"
            case -2147352572:
                return "PCSC: Operation is cancelled"
            case -2147352571:
                return "PCSC: The card is busy"
            case -2147352570:
                return "PCSC: Failed Smart Card"
            case -2147352560:
                return "PCSC: ExtLe Failed"
            case -2146409536:
                return "LAYER6: PWD failed"
            case -2097152000:
                return "RFID: Not performed"
            case -2097151999:
                return "RFID: Session is closed"
            case -2097151998:
                return "RFID: Unsupported terminal operation"
            case -2097151984:
                return "RFID: Terminal type unknown"
            case -2097151983:
                return "RFID: Terminal type bad certificate"
            case -2097151982:
                return "RFID: Terminal type not set"
            case -2097151981:
                return "RFID: Unknown procedure type"
            case -2097151980:
                return "RFID: Unsupported procedure type"
            case -2097151979:
                return "RFID: Procedure type not set"
            case -2097151978:
                return "RFID: Access key unknown type"
            case -2097151977:
                return "RFID: Access key unsupported SM type"
            case -2097151976:
                return "RFID: Access key incorrect SM type"
            case -2097151975:
                return "RFID: Access key restricted"
            case -2097151974:
                return "RFID: Access key incorrect data"
            case -2097151973:
                return "RFID: Access key not set"
            case -2097151972:
                return "RFID: PWD management not authorized"
            case -2097151968:
                return "RFID: Access control unknown type"
            case -2097151967:
                return "RFID: Access control unknown type"
            case -2097151966:
                return "RFID: PACE required"
            case -2097151965:
                return "RFID: CA keys required"
            case -2097151964:
                return "RFID: TA required"
            case -2097151963:
                return "RFID: CA required"
            case -2097151962:
                return "RFID: Incorrect option CA"
            case -2097151961:
                return "RFID: CA failed"
            case -2097151960:
                return "RFID: TA failed"
            case -2097151959:
                return "RFID: AA failed"
            case -2097151958:
                return "RFID: RI failed"
            case -2097151952:
                return "RFID: SO signature check failed"
            case -2097151951:
                return "RFID: Hash check failed"
            case -2097151936:
                return "RFID: Invalid aux data - date of expiry"
            case -2097151935:
                return "RFID: Invalid aux data - date of birth"
            case -2097151934:
                return "RFID: Invalid aux data - community ID"
            case -2097151920:
                return "RFID: eSign requires app selection"
            case -2097151919:
                return "RFID: eSign PIN not set"
            case -2097151918:
                return "RFID: eSign PIN not verified"
            case -2097151904:
                return "RFID: Incorrect data"
            case -2097086464:
                return "RFID file: Insufficient data"
            case -2097020928:
                return "RFID file: Incorrect data"
            case -2096955392:
                return "RFID file: Unexpected data"
            case -2096889856:
                return "RFID file: Contains unexpected data"
            case -2096824320:
                return "RFID file: Wrong tag"
            case -2096758784:
                return "RFID file: Cannot use data"
            case -2096693248:
                return "RFID file: Cannot read data"
            case -2096627712:
                return "RFID file: Access denied"
            case -2080374784:
                return "RFID: Layer 34 - No error"
            case -2080309248:
                return "RFID: Layer 34 - Timeout"
            case -2080243712:
                return "RFID: Layer 34 - Collision"
            case -2080178176:
                return "RFID: Layer 34 - CRC"
            case -2080112640:
                return "RFID: Layer 34 - Data integrity"
            case -2080047104:
                return "RFID: Layer 34 - Data length"
            case -2079981568:
                return "RFID: Layer 34 - RFU"
            case -2079916032:
                return "RFID: Layer 34 - Too many collision"
            case -2079850496:
                return "RFID: Layer 34 - Protocol B"
            case -2079784960:
                return "RFID: Layer 34 - Data contents"
            case -2079719424:
                return "RFID: Layer 34 - Protocol"
            case -2079653888:
                return "RFID: Layer 34 - Globa timeout"
            case -2079588352:
                return "RFID: Layer 34 - MIFARE auth"
            case -2079522816:
                return "RFID: Layer 34 - SAM error"
            case -2079457280:
                return "RFID: Layer 34 - SAM collision"
            case -2079391744:
                return "RFID: Layer 34 - SAM acknowledge"
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
            case -2046820093:
                return "LAYER6: ISO7816_B_03 \"Mutual authentication failure data\""
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
                return "LAYER6: APDU_INS_EXTERNAL_AUTHENTICATE (external authentication) failure"
            case -2046819575:
                return "LAYER6: General Authenticity Failure"
            case -1:
                return "RFID: Failed"
            case 1:
                return "RFID: No error"
            case 2:
                return "RFID: The requested operation is already performed"
            default:
                return value.toString()
        }
    }
}

export const eRFID_NotificationCodes = {
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
}

export const eRFID_Password_Type = {
    PPT_UNKNOWN: 0,
    PPT_MRZ: 1,
    PPT_CAN: 2,
    PPT_PIN: 3,
    PPT_PUK: 4,
    PPT_PIN_ESIGN: 5,
    PPT_SAI: 6,
}

export const eRFID_SDK_ProfilerType = {
    SPT_DOC_9303_EDITION_2006: 0x00000001,
    SPT_DOC_9303_LDS_PKI_MAINTENANCE: 0x00000002,
}

export const eRFID_TerminalType = {
    TET_UNDEFINED: 0,
    TET_INSPECTION_SYSTEM: 1,
    TET_AUTHENTICATION_TERMINAL: 2,
    TET_SIGNATURE_TERMINAL: 3,
    TET_UNAUTHENTICATED_TERMINAL: 4,
}

export const eRPRM_Authenticity = {
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

export const eRPRM_FieldVerificationResult = {
    RCF_DISABLED: 0,
    RCF_VERIFIED: 1,
    RCF_NOT_VERIFIED: 2,
    RCF_COMPARE_TRUE: 3,
    RCF_COMPARE_FALSE: 4,
}

export const eRPRM_Lights = {
    NONE: 0,
    RPRM_LIGHT_UV: 128,
    RPRM_LIGHT_WHITE_FULL: 6,
    RPRM_LIGHT_IR: 16777216,
    RPRM_Light_IR_TOP: 8,
    RPRM_Light_IR_SIDE: 16,
    RPRM_Light_IR_Full: 24,
    RPRM_LIGHT_OVD: 67108864,

    getTranslation(value: number) {
        switch (value) {
            case 6:
                return "Visible light"
            case 24:
                return "IR"
            case 128:
                return "UV"
            default:
                return value.toString()
        }
    }
}

export const eRPRM_ResultType = {
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
    RPRM_RESULT_TYPE_IMAGES: 37,
    RPRM_RESULT_TYPE_HOLO_PARAMS: 47,
    RPRM_RESULT_TYPE_DOCUMENT_POSITION: 85,
    RPRM_RESULT_TYPE_CUSTOM: 100,
    RFID_RESULT_TYPE_RFID_RAW_DATA: 101,
    RFID_RESULT_TYPE_RFID_TEXT_DATA: 102,
    RFID_RESULT_TYPE_RFID_IMAGE_DATA: 103,
    RFID_RESULT_TYPE_RFID_BINARY_DATA: 104,
    RFID_RESULT_TYPE_RFID_ORIGINAL_GRAPHICS: 105,
    RPRM_RESULT_TYPE_BARCODE_POSITION: 62,
    RPRM_RESULT_TYPE_MRZ_POSITION: 61,
    RPRM_RESULT_TYPE_STATUS: 33,
}

export const eRPRM_SecurityFeatureType = {
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

export const eSignManagementAction = {
    smaUndefined: 0,
    smaCreatePIN: 1,
    smaChangePIN: 2,
    smaUnblockPIN: 3,
    smaTerminatePIN: 4,
    smaGenerateKeys: 5,
    smaTerminateKeys: 6,
    smaSignData: 7,
}

export const eVisualFieldType = {
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
    FT_URL: 584,
    FT_CALIBER: 585,
    FT_MODEL: 586,
    FT_MAKE: 587,
    FT_NUMBER_OF_CYLINDERS: 588,
    FT_SURNAME_OF_HUSBAND_AFTER_REGISTRATION: 589,
    FT_SURNAME_OF_WIFE_AFTER_REGISTRATION: 590,
    FT_DATE_OF_BIRTH_OF_WIFE: 591,
    FT_DATE_OF_BIRTH_OF_HUSBAND: 592,
    FT_CITIZENSHIP_OF_FIRST_PERSON: 593,
    FT_CITIZENSHIP_OF_SECOND_PERSON: 594,
    FT_CVV: 595,
    FT_DATE_OF_INSURANCE_EXPIRY: 596,
    FT_MORTGAGE_BY: 597,
    FT_OLD_DOCUMENT_NUMBER: 598,
    FT_OLD_DATE_OF_ISSUE: 599,
    FT_OLD_PLACE_OF_ISSUE: 600,
    FT_DLCLASSCODE_LR_FROM: 601,
    FT_DLCLASSCODE_LR_TO: 602,
    FT_DLCLASSCODE_LR_NOTES: 603,
    FT_DLCLASSCODE_MR_FROM: 604,
    FT_DLCLASSCODE_MR_TO: 605,
    FT_DLCLASSCODE_MR_NOTES: 606,
    FT_DLCLASSCODE_HR_FROM: 607,
    FT_DLCLASSCODE_HR_TO: 608,
    FT_DLCLASSCODE_HR_NOTES: 609,
    FT_DLCLASSCODE_HC_FROM: 610,
    FT_DLCLASSCODE_HC_TO: 611,
    FT_DLCLASSCODE_HC_NOTES: 612,
    FT_DLCLASSCODE_MC_FROM: 613,
    FT_DLCLASSCODE_MC_TO: 614,
    FT_DLCLASSCODE_MC_NOTES: 615,
    FT_DLCLASSCODE_RE_FROM: 616,
    FT_DLCLASSCODE_RE_TO: 617,
    FT_DLCLASSCODE_RE_NOTES: 618,
    FT_DLCLASSCODE_R_FROM: 619,
    FT_DLCLASSCODE_R_TO: 620,
    FT_DLCLASSCODE_R_NOTES: 621,
    FT_DLCLASSCODE_CA_FROM: 622,
    FT_DLCLASSCODE_CA_TO: 623,
    FT_DLCLASSCODE_CA_NOTES: 624,
    FT_CITIZENSHIP_STATUS: 625,
    FT_MILITARY_SERVICE_FROM: 626,
    FT_MILITARY_SERVICE_TO: 627,
    FT_DLCLASSCODE_NT_FROM: 628,
    FT_DLCLASSCODE_NT_TO: 629,
    FT_DLCLASSCODE_NT_NOTES: 630,
    FT_DLCLASSCODE_TN_FROM: 631,
    FT_DLCLASSCODE_TN_TO: 632,
    FT_DLCLASSCODE_TN_NOTES: 633,
    FT_DLCLASSCODE_D3_FROM: 634,
    FT_DLCLASSCODE_D3_TO: 635,
    FT_DLCLASSCODE_D3_NOTES: 636,
    FT_ALT_DATE_OF_EXPIRY: 637,
    FT_DLCLASSCODE_CD_FROM: 638,
    FT_DLCLASSCODE_CD_TO: 639,
    FT_DLCLASSCODE_CD_NOTES: 640,
    FT_PAYMENT_PERIOD_TO: 643,
    FT_PAYMENT_PERIOD_FROM: 642,
    FT_ISSUER_IDENTIFICATION_NUMBER: 641,
    FT_VACCINATION_CERTIFICATE_IDENTIFIER: 644,
    FT_FIRST_NAME: 645,
    FT_DATE_OF_ARRIVAL: 646,
    FT_SECOND_NAME: 647,
    FT_THIRD_NAME: 648,
    FT_FOURTH_NAME: 649,
    FT_LAST_NAME: 650,

    getTranslation(value: number) {
        switch (value) {
            case 0:
                return "Document class code"
            case 1:
                return "Issuing state code"
            case 2:
                return "Document number"
            case 3:
                return "Date of expiry"
            case 4:
                return "Date of issue"
            case 5:
                return "Date of birth"
            case 6:
                return "Place of birth"
            case 7:
                return "Personal number"
            case 8:
                return "Surname"
            case 9:
                return "Given name"
            case 10:
                return "Mother\'s name"
            case 11:
                return "Nationality"
            case 12:
                return "Sex"
            case 13:
                return "Height"
            case 14:
                return "Weight"
            case 15:
                return "Eye color"
            case 16:
                return "Hair color"
            case 17:
                return "Address"
            case 18:
                return "Donor"
            case 19:
                return "Social insurance number"
            case 20:
                return "DL category"
            case 21:
                return "DL endorsement code"
            case 22:
                return "DL Restriction Code"
            case 23:
                return "Date of 21st birthday"
            case 24:
                return "Issuing authority"
            case 25:
                return "Surname and given names"
            case 26:
                return "Nationality code"
            case 27:
                return "Passport number"
            case 28:
                return "Invitation number"
            case 29:
                return "Visa ID"
            case 30:
                return "Visa Class"
            case 31:
                return "Visa subclass"
            case 32:
                return "MRZ line 1"
            case 33:
                return "MRZ line 2"
            case 34:
                return "MRZ line 3"
            case 35:
                return "MRZ Type"
            case 36:
                return "Optional data"
            case 37:
                return "Document class"
            case 38:
                return "Issuing state"
            case 39:
                return "Place of issue"
            case 40:
                return "Checksum for document number"
            case 41:
                return "Checksum for date of birth"
            case 42:
                return "Checksum for date of expiry"
            case 43:
                return "Checksum for personal number"
            case 44:
                return "Final checksum"
            case 45:
                return "Checksum for passport number"
            case 46:
                return "Checksum for invitation number"
            case 47:
                return "Checksum for visa ID"
            case 48:
                return "Checksum for surname and given names"
            case 49:
                return "Checksum for visa expiry date"
            case 50:
                return "Other"
            case 51:
                return "MRZ lines"
            case 52:
                return "Name suffix"
            case 53:
                return "Name prefix"
            case 54:
                return "Checksum for date of issue"
            case 55:
                return "Check digit for date of issue"
            case 56:
                return "Document series"
            case 57:
                return "Registration number"
            case 58:
                return "Vehicle model"
            case 59:
                return "Vehicle color"
            case 60:
                return "Body number"
            case 61:
                return "Vehicle type"
            case 62:
                return "Max permissible weight"
            case 63:
                return "Unladen mass"
            case 64:
                return "Area"
            case 65:
                return "State"
            case 66:
                return "Unit"
            case 67:
                return "Building"
            case 68:
                return "Apartment"
            case 69:
                return "Place of registration"
            case 70:
                return "Date of registration"
            case 71:
                return "Resident from"
            case 72:
                return "Resident until"
            case 73:
                return "Issuing authority code"
            case 74:
                return "Country/region of birth"
            case 75:
                return "Birth state code"
            case 76:
                return "Street"
            case 77:
                return "City"
            case 78:
                return "Jurisdiction code"
            case 79:
                return "Postal code"
            case 80:
                return "Check digit for document number"
            case 81:
                return "Check digit for date of birth"
            case 82:
                return "Check digit for date of expiry"
            case 83:
                return "Check digit for personal number"
            case 84:
                return "Final check digit"
            case 85:
                return "Check digit for passport number"
            case 86:
                return "Check digit for invitation number"
            case 87:
                return "Check digit for visa ID"
            case 88:
                return "Check digit for surname and given names"
            case 89:
                return "Check digit for visa expiry date"
            case 90:
                return "Permit class"
            case 91:
                return "Permit expiry date"
            case 92:
                return "Permit identifier"
            case 93:
                return "Permit issue date"
            case 94:
                return "Permit restriction code"
            case 95:
                return "Permit endorsement code"
            case 96:
                return "Issue time"
            case 97:
                return "Number of duplicates"
            case 98:
                return "Medical notes/codes"
            case 99:
                return "Non-resident indicator"
            case 100:
                return "Visa type"
            case 101:
                return "Visa valid from"
            case 102:
                return "Visa valid until"
            case 103:
                return "Duration of stay"
            case 104:
                return "Number of entries"
            case 105:
                return "Day"
            case 106:
                return "Month"
            case 107:
                return "Year"
            case 108:
                return "Unique customer identifier"
            case 109:
                return "Commercial vehicle code"
            case 110:
                return "AKA: Date of birth"
            case 111:
                return "AKA: Social Insurance Number"
            case 112:
                return "AKA: Surname"
            case 113:
                return "AKA: Given name"
            case 114:
                return "AKA: Name suffix"
            case 115:
                return "AKA: Name prefix"
            case 116:
                return "Mailing address - street"
            case 117:
                return "Mailing address - city"
            case 118:
                return "Mailing address - jurisdiction code"
            case 119:
                return "Mailing address - postal code"
            case 120:
                return "Number for validation"
            case 121:
                return "Inventory number"
            case 122:
                return "Race/ethnicity"
            case 123:
                return "Jurisdiction vehicle class"
            case 124:
                return "Jurisdiction endorsement code"
            case 125:
                return "Jurisdiction restriction code"
            case 126:
                return "Surname/given name at birth"
            case 127:
                return "Given name (National)"
            case 128:
                return "Visa ID (National)"
            case 129:
                return "Father\'s name"
            case 130:
                return "Father\'s name (National)"
            case 131:
                return "Surname and given names (National)"
            case 132:
                return "Place of birth (National)"
            case 133:
                return "Issuing authority (National)"
            case 134:
                return "Numeric issuing state code"
            case 135:
                return "Numeric nationality code"
            case 136:
                return "Engine power"
            case 137:
                return "Engine volume"
            case 138:
                return "Chassis number"
            case 139:
                return "Engine number"
            case 140:
                return "Engine model"
            case 141:
                return "Vehicle category"
            case 142:
                return "Identity card number"
            case 143:
                return "Control number"
            case 144:
                return "Parents\' given names"
            case 145:
                return "Second surname"
            case 146:
                return "Middle name"
            case 147:
                return "Vehicle identification number"
            case 148:
                return "Check digit for VIN"
            case 149:
                return "Checksum for VIN"
            case 150:
                return "Check digit for line 1"
            case 151:
                return "Check digit for line 2"
            case 152:
                return "Check digit for line 3"
            case 153:
                return "Checksum for line 1"
            case 154:
                return "Checksum for line 2"
            case 155:
                return "Checksum for line 3"
            case 156:
                return "Check digit for registration number"
            case 157:
                return "Checksum for registration number"
            case 158:
                return "Vehicle ITS code"
            case 159:
                return "Card access number"
            case 160:
                return "Marital status"
            case 161:
                return "Company name"
            case 162:
                return "Special notes"
            case 163:
                return "Spouse\'s surname"
            case 164:
                return "Tracking number"
            case 165:
                return "Booklet number"
            case 166:
                return "Children"
            case 167:
                return "Copy"
            case 168:
                return "Serial number"
            case 169:
                return "Dossier number"
            case 170:
                return "AKA: Surname and given names"
            case 171:
                return "Territorial validity"
            case 172:
                return "MRZ lines with correct checksums"
            case 173:
                return "CDL Restriction Code"
            case 174:
                return "Date of 18th birthday"
            case 175:
                return "Record created"
            case 176:
                return "Date of duplicate issue"
            case 177:
                return "Card type"
            case 178:
                return "Military ID number"
            case 179:
                return "Destination"
            case 180:
                return "Blood group"
            case 181:
                return "Sequence number"
            case 182:
                return "Body type"
            case 183:
                return "Vehicle make"
            case 184:
                return "Transaction number"
            case 185:
                return "Age"
            case 186:
                return "Folio number"
            case 187:
                return "Voter Key"
            case 188:
                return "Municipality"
            case 189:
                return "Location"
            case 190:
                return "Section"
            case 191:
                return "OCR number"
            case 192:
                return "Federal elections"
            case 193:
                return "Unique number"
            case 194:
                return "Checksum for optional data"
            case 195:
                return "Check digit for optional data"
            case 196:
                return "Visa Number"
            case 197:
                return "Checksum for visa number"
            case 198:
                return "Check digit for visa number"
            case 199:
                return "Voter"
            case 200:
                return "Type/number of the previous document"
            case 220:
                return "Field from MRZ"
            case 221:
                return "Current date"
            case 251:
                return "Status Expiry Date"
            case 252:
                return "Banknote number"
            case 253:
                return "CSC Code"
            case 254:
                return "Pseudonym"
            case 255:
                return "Academic title"
            case 256:
                return "Country"
            case 257:
                return "ZIP code"
            case 258:
                return "Residence permit 1"
            case 259:
                return "Residence permit 2"
            case 260:
                return "Place of birth: Street"
            case 261:
                return "Place of birth: City"
            case 262:
                return "Place of birth: State"
            case 263:
                return "Place of birth: Country"
            case 264:
                return "Place of birth: Postal code"
            case 265:
                return "CDL Class"
            case 266:
                return "Date of 19th birthday"
            case 267:
                return "Weight (pound)"
            case 268:
                return "Indicator of document limited duration"
            case 269:
                return "Endorsement expiration date"
            case 270:
                return "Revision date"
            case 271:
                return "Compliance type"
            case 272:
                return "Truncated surname/given name at birth"
            case 273:
                return "First name truncation"
            case 274:
                return "Middle name truncation"
            case 275:
                return "Exam date"
            case 276:
                return "Organization"
            case 277:
                return "Department"
            case 278:
                return "Pay grade"
            case 279:
                return "Rank"
            case 280:
                return "Benefits number"
            case 281:
                return "Sponsor service"
            case 282:
                return "Sponsor status"
            case 283:
                return "Sponsor"
            case 284:
                return "Relationship"
            case 285:
                return "USCIS"
            case 286:
                return "Category"
            case 287:
                return "Conditions"
            case 288:
                return "Identifier"
            case 289:
                return "Configuration"
            case 290:
                return "Discretionary data"
            case 291:
                return "Optional data from line 1"
            case 292:
                return "Optional data from line 2"
            case 293:
                return "Optional data from line 3"
            case 294:
                return "EQV code"
            case 295:
                return "ALT code"
            case 296:
                return "Binary code"
            case 297:
                return "Pseudocode"
            case 298:
                return "Fee"
            case 299:
                return "Stamp number"
            case 300:
                return "SBH security options"
            case 301:
                return "SBH integrity options"
            case 302:
                return "Creation date"
            case 303:
                return "Validity period"
            case 304:
                return "Patron header version"
            case 305:
                return "BDB type"
            case 306:
                return "Biometric type"
            case 307:
                return "Biometric subtype"
            case 308:
                return "Biometric product ID"
            case 309:
                return "Biometric format owner"
            case 310:
                return "Biometric format type"
            case 311:
                return "Phone"
            case 312:
                return "Profession"
            case 313:
                return "Position"
            case 314:
                return "Personal data summary"
            case 315:
                return "Other valid IDs"
            case 316:
                return "Custody info"
            case 317:
                return "Other name"
            case 318:
                return "Observations"
            case 319:
                return "Tax"
            case 320:
                return "Personalization date"
            case 321:
                return "Serial number of personalization"
            case 322:
                return "Other person, name"
            case 323:
                return "Notify person: Date of record"
            case 324:
                return "Notify person: Name"
            case 325:
                return "Notify person: Phone"
            case 326:
                return "Notify person: Address"
            case 327:
                return "DS certificate issuer"
            case 328:
                return "DS certificate subject"
            case 329:
                return "DS certificate valid from"
            case 330:
                return "DS certificate valid to"
            case 331:
                return "Vehicle data from the DG1 data group"
            case 332:
                return "Type of approval number"
            case 333:
                return "Administrative number"
            case 334:
                return "Document discriminator"
            case 335:
                return "Data discriminator"
            case 336:
                return "ID number of ISO issuer"
            case 340:
                return "GNIB number"
            case 341:
                return "Department number"
            case 342:
                return "Telegraph code"
            case 343:
                return "Allergies"
            case 344:
                return "Special code"
            case 345:
                return "Court code"
            case 346:
                return "County"
            case 347:
                return "Sponsor SSN"
            case 348:
                return "DoD number"
            case 349:
                return "Expiry date of Motorcycle Novice status"
            case 350:
                return "DUF number"
            case 351:
                return "AGY"
            case 352:
                return "PNR code"
            case 353:
                return "Code of the airport of departure"
            case 354:
                return "Code of the airport of arrival"
            case 355:
                return "Flight number"
            case 356:
                return "Date of flight"
            case 357:
                return "Seat number"
            case 358:
                return "Date of boarding pass issue"
            case 359:
                return "CCW until"
            case 360:
                return "Unique number checksum"
            case 361:
                return "Unique number check digit"
            case 362:
                return "Room number"
            case 363:
                return "Religion"
            case 364:
                return "Months to expire"
            case 365:
                return "Electronic ticket indicator"
            case 366:
                return "Compartment code"
            case 367:
                return "Check-in sequence number"
            case 368:
                return "Airline designator of boarding pass issuer"
            case 369:
                return "Airline numeric code"
            case 370:
                return "Ticket number"
            case 371:
                return "Frequent flyer airline designator"
            case 372:
                return "Frequent flyer number"
            case 373:
                return "Free baggage allowance"
            case 374:
                return "PDF417 codec"
            case 375:
                return "Checksum for identity card number"
            case 376:
                return "Check digit for identity card number"
            case 377:
                return "Veteran"
            case 378:
                return "DL category A1 valid from"
            case 379:
                return "DL category A1 valid to"
            case 380:
                return "DL category A1 codes"
            case 381:
                return "DL category A valid from"
            case 382:
                return "DL category A valid to"
            case 383:
                return "DL category A codes"
            case 384:
                return "DL category B valid from"
            case 385:
                return "DL category B valid to"
            case 386:
                return "DL category B codes"
            case 387:
                return "DL category C1 valid from"
            case 388:
                return "DL category C1 valid to"
            case 389:
                return "DL category C1 codes"
            case 390:
                return "DL category C valid from"
            case 391:
                return "DL category C valid to"
            case 392:
                return "DL category C codes"
            case 393:
                return "DL category D1 valid from"
            case 394:
                return "DL category D1 valid to"
            case 395:
                return "DL category D1 codes"
            case 396:
                return "DL category D valid from"
            case 397:
                return "DL category D valid to"
            case 398:
                return "DL category D codes"
            case 399:
                return "DL category BE valid from"
            case 400:
                return "DL category BE valid to"
            case 401:
                return "DL category BE codes"
            case 402:
                return "DL category C1E valid from"
            case 403:
                return "DL category C1E valid to"
            case 404:
                return "DL category C1E codes"
            case 405:
                return "DL category CE valid from"
            case 406:
                return "DL category CE valid to"
            case 407:
                return "DL category CE codes"
            case 408:
                return "DL category D1E valid from"
            case 409:
                return "DL category D1E valid to"
            case 410:
                return "DL category D1E codes"
            case 411:
                return "DL category DE valid from"
            case 412:
                return "DL category DE valid to"
            case 413:
                return "DL category DE codes"
            case 414:
                return "DL category M valid from"
            case 415:
                return "DL category M valid to"
            case 416:
                return "DL category M codes"
            case 417:
                return "DL category L valid from"
            case 418:
                return "DL category L valid to"
            case 419:
                return "DL category L codes"
            case 420:
                return "DL category T valid from"
            case 421:
                return "DL category T valid to"
            case 422:
                return "DL category T codes"
            case 423:
                return "DL category AM valid from"
            case 424:
                return "DL category AM valid to"
            case 425:
                return "DL category AM codes"
            case 426:
                return "DL category A2 valid from"
            case 427:
                return "DL category A2 valid to"
            case 428:
                return "DL category A2 codes"
            case 429:
                return "DL category B1 valid from"
            case 430:
                return "DL category B1 valid to"
            case 431:
                return "DL category B1 codes"
            case 432:
                return "Surname at birth"
            case 433:
                return "Civil status"
            case 434:
                return "Number of seats"
            case 435:
                return "Number of standing places"
            case 436:
                return "Max speed"
            case 437:
                return "Fuel type"
            case 438:
                return "Vehicle environmental type"
            case 439:
                return "Power-to-weight ratio"
            case 440:
                return "Max mass of trailer (braked)"
            case 441:
                return "Max mass of trailer (unbraked)"
            case 442:
                return "Transmission type"
            case 443:
                return "Trailer hitch"
            case 444:
                return "Accompanied by"
            case 445:
                return "Police district"
            case 446:
                return "First issue date"
            case 447:
                return "Payload capacity"
            case 448:
                return "Number of axles"
            case 449:
                return "Permissible axle load"
            case 450:
                return "Precinct"
            case 451:
                return "Invited by"
            case 452:
                return "Purpose of entry"
            case 453:
                return "Skin color"
            case 454:
                return "Complexion"
            case 455:
                return "Airport of departure"
            case 456:
                return "Airport of arrival"
            case 457:
                return "Airline name"
            case 458:
                return "Airline loyalty program for frequent flyers"
            case 459:
                return "License number"
            case 460:
                return "In tanks"
            case 461:
                return "Other than tanks"
            case 462:
                return "Fast Track service"
            case 463:
                return "Owner"
            case 464:
                return "MRZ lines from ICAO RFID"
            case 465:
                return "Number of card issuances"
            case 466:
                return "Checksum for number of card issuances"
            case 467:
                return "Check digit for number of card issuances"
            case 468:
                return "Century of birth"
            case 469:
                return "DL category A3 valid from"
            case 470:
                return "DL category A3 valid to"
            case 471:
                return "DL category A3 codes"
            case 472:
                return "DL category C2 valid from"
            case 473:
                return "DL category C2 valid to"
            case 474:
                return "DL category C2 codes"
            case 475:
                return "DL category B2 valid from"
            case 476:
                return "DL category B2 valid to"
            case 477:
                return "DL category B2 codes"
            case 478:
                return "DL category D2 valid from"
            case 479:
                return "DL category D2 valid to"
            case 480:
                return "DL category D2 codes"
            case 481:
                return "DL category B2E valid from"
            case 482:
                return "DL category B2E valid to"
            case 483:
                return "DL category B2E codes"
            case 484:
                return "DL category G valid from"
            case 485:
                return "DL category G valid to"
            case 486:
                return "DL category G codes"
            case 487:
                return "DL category J valid from"
            case 488:
                return "DL category J valid to"
            case 489:
                return "DL category J codes"
            case 490:
                return "DL category LC valid from"
            case 491:
                return "DL category LC valid to"
            case 492:
                return "DL category LC codes"
            case 493:
                return "Bank card number"
            case 494:
                return "Bank card validity"
            case 495:
                return "Tax number"
            case 496:
                return "Health insurance number"
            case 497:
                return "Grandfather\'s name"
            case 498:
                return "Selectee indicator"
            case 499:
                return "Mother\'s surname"
            case 500:
                return "Mother\'s given name"
            case 501:
                return "Father\'s surname"
            case 502:
                return "Father\'s given name"
            case 503:
                return "Mother\'s date of birth"
            case 504:
                return "Father\'s date of birth"
            case 505:
                return "Mother\'s personal number"
            case 506:
                return "Father\'s personal number"
            case 507:
                return "Mother\'s place of birth"
            case 508:
                return "Father\'s place of birth"
            case 509:
                return "Mother\'s country of birth"
            case 510:
                return "Father\'s country of birth"
            case 511:
                return "Date of first renewal"
            case 512:
                return "Date of second renewal"
            case 513:
                return "Place of examination"
            case 514:
                return "Application number"
            case 515:
                return "Voucher number"
            case 516:
                return "Authorization number"
            case 517:
                return "Faculty"
            case 518:
                return "Form of education"
            case 519:
                return "DNI number"
            case 520:
                return "Retirement number"
            case 521:
                return "Professional ID number"
            case 522:
                return "Age at issue"
            case 523:
                return "Years since issue"
            case 524:
                return "DL category BTP valid from"
            case 525:
                return "DL category BTP codes"
            case 526:
                return "DL category BTP valid to"
            case 527:
                return "DL category C3 valid from"
            case 528:
                return "DL category C3 codes"
            case 529:
                return "DL category C3 valid to"
            case 530:
                return "DL category E valid from"
            case 531:
                return "DL category E codes"
            case 532:
                return "DL category E valid to"
            case 533:
                return "DL category F valid from"
            case 534:
                return "DL category F codes"
            case 535:
                return "DL category F valid to"
            case 536:
                return "DL category FA valid from"
            case 537:
                return "DL category FA codes"
            case 538:
                return "DL category FA valid to"
            case 539:
                return "DL category FA1 valid from"
            case 540:
                return "DL category FA1 codes"
            case 541:
                return "DL category FA1 valid to"
            case 542:
                return "DL category FB valid from"
            case 543:
                return "DL category FB codes"
            case 544:
                return "DL category FB valid to"
            case 545:
                return "DL category G1 valid from"
            case 546:
                return "DL category G1 codes"
            case 547:
                return "DL category G1 valid to"
            case 548:
                return "DL category H valid from"
            case 549:
                return "DL category H codes"
            case 550:
                return "DL category H valid to"
            case 551:
                return "DL category I valid from"
            case 552:
                return "DL category I codes"
            case 553:
                return "DL category I valid to"
            case 554:
                return "DL category K valid from"
            case 555:
                return "DL category K codes"
            case 556:
                return "DL category K valid to"
            case 557:
                return "DL category LK valid from"
            case 558:
                return "DL category LK codes"
            case 559:
                return "DL category LK valid to"
            case 560:
                return "DL category N valid from"
            case 561:
                return "DL category N codes"
            case 562:
                return "DL category N valid to"
            case 563:
                return "DL category S valid from"
            case 564:
                return "DL category S codes"
            case 565:
                return "DL category S valid to"
            case 566:
                return "DL category TB valid from"
            case 567:
                return "DL category TB codes"
            case 568:
                return "DL category TB valid to"
            case 569:
                return "DL category TM valid from"
            case 570:
                return "DL category TM codes"
            case 571:
                return "DL category TM valid to"
            case 572:
                return "DL category TR valid from"
            case 573:
                return "DL category TR codes"
            case 574:
                return "DL category TR valid to"
            case 575:
                return "DL category TV valid from"
            case 576:
                return "DL category TV codes"
            case 577:
                return "DL category TV valid to"
            case 578:
                return "DL category V valid from"
            case 579:
                return "DL category V codes"
            case 580:
                return "DL category V valid to"
            case 581:
                return "DL category W valid from"
            case 582:
                return "DL category W codes"
            case 583:
                return "DL category W valid to"
            case 584:
                return "URL"
            case 585:
                return "Caliber"
            case 586:
                return "Model"
            case 587:
                return "Make"
            case 588:
                return "Number of cylinders"
            case 589:
                return "Surname of husband after registration"
            case 590:
                return "Surname of wife after registration"
            case 591:
                return "Date of birth of wife"
            case 592:
                return "Date of birth of husband"
            case 593:
                return "Citizenship of the first person"
            case 594:
                return "Citizenship of the second person"
            case 595:
                return "CVV/CVC"
            case 596:
                return "Expiry date of insurance"
            case 597:
                return "Mortgage by"
            case 598:
                return "Old document number"
            case 599:
                return "Old date of issue"
            case 600:
                return "Old place of issue"
            case 601:
                return "DL category LR valid from"
            case 602:
                return "DL category LR valid to"
            case 603:
                return "DL category LR codes"
            case 604:
                return "DL category MR valid from"
            case 605:
                return "DL category MR valid to"
            case 606:
                return "DL category MR codes"
            case 607:
                return "DL category HR valid from"
            case 608:
                return "DL category HR valid to"
            case 609:
                return "DL category HR codes"
            case 610:
                return "DL category HC valid from"
            case 611:
                return "DL category HC valid to"
            case 612:
                return "DL category HC codes"
            case 613:
                return "DL category MC valid from"
            case 614:
                return "DL category MC valid to"
            case 615:
                return "DL category MC codes"
            case 616:
                return "DL category RE valid from"
            case 617:
                return "DL category RE valid to"
            case 618:
                return "DL category RE codes"
            case 619:
                return "DL category R valid from"
            case 620:
                return "DL category R valid to"
            case 621:
                return "DL category R codes"
            case 622:
                return "DL category CA valid from"
            case 623:
                return "DL category CA valid to"
            case 624:
                return "DL category CA codes"
            case 625:
                return "Citizenship status"
            case 626:
                return "Military service from"
            case 627:
                return "Military service to"
            case 628:
                return "DL category NT valid from"
            case 629:
                return "DL category NT valid to"
            case 630:
                return "DL category NT codes"
            case 631:
                return "DL category TN valid from"
            case 632:
                return "DL category TN valid to"
            case 633:
                return "DL category TN codes"
            case 634:
                return "DL category D3 valid from"
            case 635:
                return "DL category D3 valid to"
            case 636:
                return "DL category D3 codes"
            case 637:
                return "Alternative date of expiry"
            case 638:
                return "DL category CD valid from"
            case 639:
                return "DL category CD valid to"
            case 640:
                return "DL category CD codes"
            case 641:
                return "Issuer identification number"
            case 642:
                return "Payment period from"
            case 643:
                return "Payment period to"
            case 644:
                return "Unique vaccination certificate identifier"
            case 645:
                return "First name"
            case 646:
                return "Date of arrival"
            case 647:
                return "Second name"
            case 648:
                return "Third name"
            case 649:
                return "Fourth name"
            case 650:
                return "Last name"
            default:
                return value.toString()
        }
    }
}

export const FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3,
}

export const FrameShapeType = {
    LINE: 0,
    CORNER: 1,
}

export const IRfidNotificationCompletion = {
    RFID_EVENT_CHIP_DETECTED: 1,
    RFID_EVENT_READING_ERROR: 2,
    RFID_EXTRA_ERROR_CODE: "rfid.error.code",
}

export const LCID = {
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

    getTranslation(value: number) {
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
                return value.toString()
        }
    }
}

export const PKDResourceType = {
    CERTIFICATE_PA: 0,
    CERTIFICATE_TA: 1,
    LDIF: 2,
    CRL: 3,
    ML: 4,
    DEFL: 5,
    DEVL: 6,
    BL: 7,

    getType(value: string) {
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

export const ProcessingFinishedStatus = {
    NOT_READY: 0,
    READY: 1,
    TIMEOUT: 2,
}

export const RFIDDelegate = {
    NULL: 0,
    NO_PA: 1,
    FULL: 2,
}

export const RGLMeasureSystem = {
    METRIC: 0,
    IMPERIAL: 1,
}

export const ScenarioIdentifier = {
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

export const LineCap = {
    Butt: 0,
    Round: 1,
    Square: 2,
}

export const UIInterfaceOrientationMask = {
    Portrait: 0,
    LandscapeLeft: 1,
    LandscapeRight: 2,
    PortraitUpsideDown: 3,
    Landscape: 4,
    All: 5,
    AllButUpsideDown: 6,
}

export const AVCaptureSessionPreset = {
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

export const AVCaptureDevicePosition = {
    Front: 0,
    Back: 1,
    Unspecified: 2,
}

export const UIViewContentMode = {
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

export const Enum = {
   BarcodeResult,
   BarcodeType,
   CameraMode,
   CameraTypes,
   CaptureMode,
   diDocType,
   DocFormat,
   DocReaderAction,
   DocReaderFrame,
   DocReaderOrientation,
   DocumentReaderExceptionEnum,
   eCheckDiagnose,
   eCheckResult,
   eGraphicFieldType,
   eImageQualityCheckType,
   eLDS_ParsingErrorCodes,
   eLDS_ParsingNotificationCodes,
   eProcessGLCommands,
   eRequestCommand,
   eRFID_AccessControl_ProcedureType,
   eRFID_AuthenticationProcedureType,
   eRFID_BaudRate,
   eRFID_CertificateType,
   eRFID_DataFile_Type,
   eRFID_ErrorCodes,
   eRFID_NotificationCodes,
   eRFID_Password_Type,
   eRFID_SDK_ProfilerType,
   eRFID_TerminalType,
   eRPRM_Authenticity,
   eRPRM_FieldVerificationResult,
   eRPRM_Lights,
   eRPRM_ResultType,
   eRPRM_SecurityFeatureType,
   eSignManagementAction,
   eVisualFieldType,
   FontStyle,
   FrameShapeType,
   IRfidNotificationCompletion,
   LCID,
   PKDResourceType,
   ProcessingFinishedStatus,
   RFIDDelegate,
   RGLMeasureSystem,
   ScenarioIdentifier,
   LineCap,
   UIInterfaceOrientationMask,
   AVCaptureSessionPreset,
   AVCaptureDevicePosition,
   UIViewContentMode,
}

export default class DocumentReader {
    static initializeReaderAutomatically(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getAPIVersion(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getAvailableScenarios(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static isRFIDAvailableForUse(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getCoreMode(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getCoreVersion(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDatabaseDate(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDatabaseID(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDatabaseVersion(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDocumentReaderIsReady(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDocumentReaderStatus(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDatabaseCountriesNumber(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDatabaseDocumentsNumber(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static selectedScenario(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getSessionLogFolder(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDatabaseDescription(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static showScanner(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static startNewPage(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static startNewSession(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static startRFIDReader(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static stopRFIDReader(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static stopRFIDReaderWithErrorMessage(message: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static stopScanner(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static deinitializeReader(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static isAuthenticatorAvailableForUse(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getConfig(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getRfidScenario(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getLicenseExpiryDate(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getLicenseCountryFilter(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static licenseIsRfidAvailable(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getCameraSessionIsPaused(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static removeDatabase(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static cancelDBUpdate(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static resetConfiguration(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static clearPKDCertificates(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static readRFID(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getRfidSessionStatus(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setRfidDelegate(delegate: int, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setEnableCoreLogs(logs: boolean, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static addPKDCertificates(certificates: PKDCertificate[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setCameraSessionIsPaused(paused: boolean, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getScenario(scenario: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImages(images: string[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static showScannerWithCameraID(cameraID: number, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static runAutoUpdate(databaseType: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setConfig(config: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setRfidScenario(scenario: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static initializeReader(license: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static prepareDatabase(databaseType: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImage(image: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setRfidSessionStatus(status: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static providePACertificates(certificates: PKDCertificate[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static provideTACertificates(certificates: PKDCertificate[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static provideTASignature(certificates: byte[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static parseCoreResults(json: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setTCCParams(params: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static initializeReaderWithDatabase(license: string, db: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImageWithOpts(image: string, options: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeVideoFrame(byteString: string, params: ImageInputParam, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static showScannerWithCameraIDAndOpts(cameraID: number, options: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImageWithCameraMode(image: string, mode: boolean, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImagesWithImageInputs(images: ImageInputData[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
}