import { NativeModules } from 'react-native'
export const { RNRegulaDocumentReader } = NativeModules

export class DocumentReaderScenario {
    name?: string
    caption?: string
    description?: string

    static fromJson(jsonObject?: any): DocumentReaderScenario | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): CoreDetailedScenario | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): FaceMetaData | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): Bounds | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): Rect | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): DocReaderFieldRect | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): DocumentReaderGraphicField | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): DocumentReaderGraphicResult | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderGraphicResult

        result.fields = []
        if (jsonObject["fields"] != null) {
            for (const i in jsonObject["fields"]) {
                const item = DocumentReaderGraphicField.fromJson(jsonObject["fields"][i])
                if (item != undefined)
                    result.fields.push(item)
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
    originalSymbols?: DocumentReaderSymbol[]
    rfidOrigin?: DocumentReaderRfidOrigin

    static fromJson(jsonObject?: any): DocumentReaderValue | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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
        result.originalSymbols = []
        if (jsonObject["originalSymbols"] != null) {
            for (const i in jsonObject["originalSymbols"]) {
                const item = DocumentReaderSymbol.fromJson(jsonObject["originalSymbols"][i])
                if (item != undefined)
                    result.originalSymbols.push(item)
            }
        }
        result.rfidOrigin = DocumentReaderRfidOrigin.fromJson(jsonObject["rfidOrigin"])

        return result
    }
}

export class DocumentReaderTextField {
    fieldType?: number
    lcid?: number
    status?: number
    lcidName?: string
    fieldName?: string
    value?: string
    getValue?: DocumentReaderValue
    values?: DocumentReaderValue[]
    comparisonList?: DocumentReaderComparison[]
    validityList?: DocumentReaderValidity[]

    static fromJson(jsonObject?: any): DocumentReaderTextField | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderTextField

        result.fieldType = jsonObject["fieldType"]
        result.lcid = jsonObject["lcid"]
        result.status = jsonObject["status"]
        result.lcidName = jsonObject["lcidName"]
        result.fieldName = jsonObject["fieldName"]
        result.value = jsonObject["value"]
        result.getValue = DocumentReaderValue.fromJson(jsonObject["getValue"])
        result.values = []
        if (jsonObject["values"] != null) {
            for (const i in jsonObject["values"]) {
                const item = DocumentReaderValue.fromJson(jsonObject["values"][i])
                if (item != undefined)
                    result.values.push(item)
            }
        }
        result.comparisonList = []
        if (jsonObject["comparisonList"] != null) {
            for (const i in jsonObject["comparisonList"]) {
                const item = DocumentReaderComparison.fromJson(jsonObject["comparisonList"][i])
                if (item != undefined)
                    result.comparisonList.push(item)
            }
        }
        result.validityList = []
        if (jsonObject["validityList"] != null) {
            for (const i in jsonObject["validityList"]) {
                const item = DocumentReaderValidity.fromJson(jsonObject["validityList"][i])
                if (item != undefined)
                    result.validityList.push(item)
            }
        }

        return result
    }
}

export class DocumentReaderTextResult {
    status?: number
    comparisonStatus?: number
    validityStatus?: number
    availableSourceList?: DocumentReaderTextSource[]
    fields?: DocumentReaderTextField[]

    static fromJson(jsonObject?: any): DocumentReaderTextResult | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderTextResult

        result.status = jsonObject["status"]
        result.comparisonStatus = jsonObject["comparisonStatus"]
        result.validityStatus = jsonObject["validityStatus"]
        result.availableSourceList = []
        if (jsonObject["availableSourceList"] != null) {
            for (const i in jsonObject["availableSourceList"]) {
                const item = DocumentReaderTextSource.fromJson(jsonObject["availableSourceList"][i])
                if (item != undefined)
                    result.availableSourceList.push(item)
            }
        }
        result.fields = []
        if (jsonObject["fields"] != null) {
            for (const i in jsonObject["fields"]) {
                const item = DocumentReaderTextField.fromJson(jsonObject["fields"][i])
                if (item != undefined)
                    result.fields.push(item)
            }
        }

        return result
    }
}

export class Coordinate {
    x?: number
    y?: number

    static fromJson(jsonObject?: any): Coordinate | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): ElementPosition | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): ImageQuality | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): ImageQualityGroup | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ImageQualityGroup

        result.count = jsonObject["count"]
        result.result = jsonObject["result"]
        result.imageQualityList = []
        if (jsonObject["imageQualityList"] != null) {
            for (const i in jsonObject["imageQualityList"]) {
                const item = ImageQuality.fromJson(jsonObject["imageQualityList"][i])
                if (item != undefined)
                    result.imageQualityList.push(item)
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

    static fromJson(jsonObject?: any): DocumentReaderDocumentType | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): DocumentReaderNotification | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): AccessControlProcedureType | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): FileData | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): CertificateData | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new CertificateData

        result.length = jsonObject["length"]
        result.data = jsonObject["data"]

        return result
    }
}

export class SecurityObjectCertificates {
    securityObject?: CertificateData

    static fromJson(jsonObject?: any): SecurityObjectCertificates | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): File | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): Application | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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
                const item = File.fromJson(jsonObject["files"][i])
                if (item != undefined)
                    result.files.push(item)
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

    static fromJson(jsonObject?: any): Value | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): Attribute | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): Authority | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new Authority

        result.data = jsonObject["data"]
        result.friendlyName = Value.fromJson(jsonObject["friendlyName"])
        result.attributes = []
        if (jsonObject["attributes"] != null) {
            for (const i in jsonObject["attributes"]) {
                const item = Attribute.fromJson(jsonObject["attributes"][i])
                if (item != undefined)
                    result.attributes.push(item)
            }
        }

        return result
    }
}

export class Extension {
    data?: string
    type?: string

    static fromJson(jsonObject?: any): Extension | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new Extension

        result.data = jsonObject["data"]
        result.type = jsonObject["type"]

        return result
    }
}

export class Validity {
    notAfter?: Value
    notBefore?: Value

    static fromJson(jsonObject?: any): Validity | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): CertificateChain | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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
                const item = Extension.fromJson(jsonObject["extensions"][i])
                if (item != undefined)
                    result.extensions.push(item)
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

    static fromJson(jsonObject?: any): SignerInfo | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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
                const item = Extension.fromJson(jsonObject["signedAttributes"][i])
                if (item != undefined)
                    result.signedAttributes.push(item)
            }
        }
        result.certificateChain = []
        if (jsonObject["certificateChain"] != null) {
            for (const i in jsonObject["certificateChain"]) {
                const item = CertificateChain.fromJson(jsonObject["certificateChain"][i])
                if (item != undefined)
                    result.certificateChain.push(item)
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

    static fromJson(jsonObject?: any): SecurityObject | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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
                const item = SignerInfo.fromJson(jsonObject["signerInfos"][i])
                if (item != undefined)
                    result.signerInfos.push(item)
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

    static fromJson(jsonObject?: any): CardProperties | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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
    accessControls?: AccessControlProcedureType[]
    applications?: Application[]
    securityObjects?: SecurityObject[]

    static fromJson(jsonObject?: any): RFIDSessionData | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new RFIDSessionData

        result.totalBytesReceived = jsonObject["totalBytesReceived"]
        result.totalBytesSent = jsonObject["totalBytesSent"]
        result.status = jsonObject["status"]
        result.extLeSupport = jsonObject["extLeSupport"]
        result.processTime = jsonObject["processTime"]
        result.cardProperties = CardProperties.fromJson(jsonObject["cardProperties"])
        result.accessControls = []
        if (jsonObject["accessControls"] != null) {
            for (const i in jsonObject["accessControls"]) {
                const item = AccessControlProcedureType.fromJson(jsonObject["accessControls"][i])
                if (item != undefined)
                    result.accessControls.push(item)
            }
        }
        result.applications = []
        if (jsonObject["applications"] != null) {
            for (const i in jsonObject["applications"]) {
                const item = Application.fromJson(jsonObject["applications"][i])
                if (item != undefined)
                    result.applications.push(item)
            }
        }
        result.securityObjects = []
        if (jsonObject["securityObjects"] != null) {
            for (const i in jsonObject["securityObjects"]) {
                const item = SecurityObject.fromJson(jsonObject["securityObjects"][i])
                if (item != undefined)
                    result.securityObjects.push(item)
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

    static fromJson(jsonObject?: any): DocumentReaderAuthenticityCheck | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderAuthenticityCheck

        result.type = jsonObject["type"]
        result.status = jsonObject["status"]
        result.typeName = jsonObject["typeName"]
        result.pageIndex = jsonObject["pageIndex"]
        result.elements = []
        if (jsonObject["elements"] != null) {
            for (const i in jsonObject["elements"]) {
                const item = DocumentReaderAuthenticityElement.fromJson(jsonObject["elements"][i])
                if (item != undefined)
                    result.elements.push(item)
            }
        }

        return result
    }
}

export class PDF417Info {
    errorLevel?: number
    columns?: number
    rows?: number

    static fromJson(jsonObject?: any): PDF417Info | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new PDF417Info

        result.errorLevel = jsonObject["errorLevel"]
        result.columns = jsonObject["columns"]
        result.rows = jsonObject["rows"]

        return result
    }
}

export class DocumentReaderBarcodeResult {
    fields?: DocumentReaderBarcodeField[]

    static fromJson(jsonObject?: any): DocumentReaderBarcodeResult | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderBarcodeResult

        result.fields = []
        if (jsonObject["fields"] != null) {
            for (const i in jsonObject["fields"]) {
                const item = DocumentReaderBarcodeField.fromJson(jsonObject["fields"][i])
                if (item != undefined)
                    result.fields.push(item)
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

    static fromJson(jsonObject?: any): DocumentReaderBarcodeField | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): DocumentReaderAuthenticityResult | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderAuthenticityResult

        result.status = jsonObject["status"]
        result.checks = []
        if (jsonObject["checks"] != null) {
            for (const i in jsonObject["checks"]) {
                const item = DocumentReaderAuthenticityCheck.fromJson(jsonObject["checks"][i])
                if (item != undefined)
                    result.checks.push(item)
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

    static fromJson(jsonObject?: any): DocumentReaderAuthenticityElement | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): DocumentReaderCompletion | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): RfidNotificationCompletion | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new RfidNotificationCompletion

        result.notification = jsonObject["notification"]
        result.value = jsonObject["value"]

        return result
    }
}

export class DocumentReaderException {
    errorCode?: number
    message?: string

    static fromJson(jsonObject?: any): DocumentReaderException | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderException

        result.errorCode = jsonObject["errorCode"]
        result.message = jsonObject["message"]

        return result
    }
}

export class PKDCertificate {
    binaryData?: string
    resourceType?: number
    privateKey?: string

    static fromJson(jsonObject?: any): PKDCertificate | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): ImageInputParam | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): PAResourcesIssuer | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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
                const item = PAAttribute.fromJson(jsonObject["attributes"][i])
                if (item != undefined)
                    result.attributes.push(item)
            }
        }

        return result
    }
}

export class PAAttribute {
    type?: string
    value?: string

    static fromJson(jsonObject?: any): PAAttribute | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): TAChallenge | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): DocumentReaderResultsStatus | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): DetailsOptical | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): DetailsRFID | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

    static fromJson(jsonObject?: any): VDSNCData | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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
                const item = CertificateChain.fromJson(jsonObject["certificateChain"][i])
                if (item != undefined)
                    result.certificateChain.push(item)
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

    static fromJson(jsonObject?: any): BytesData | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new BytesData

        result.data = jsonObject["data"]
        result.length = jsonObject["length"]
        result.status = jsonObject["status"]
        result.type = jsonObject["type"]

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

    static fromJson(jsonObject?: any): ImageInputData | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
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

export class DocReaderDocumentsDatabase {
    databaseID?: string
    version?: string
    date?: string
    databaseDescription?: string
    countriesNumber?: number
    documentsNumber?: number

    static fromJson(jsonObject?: any): DocReaderDocumentsDatabase | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocReaderDocumentsDatabase

        result.databaseID = jsonObject["databaseID"]
        result.version = jsonObject["version"]
        result.date = jsonObject["date"]
        result.databaseDescription = jsonObject["databaseDescription"]
        result.countriesNumber = jsonObject["countriesNumber"]
        result.documentsNumber = jsonObject["documentsNumber"]

        return result
    }
}

export class DocumentReaderComparison {
    sourceTypeLeft?: number
    sourceTypeRight?: number
    status?: number

    static fromJson(jsonObject?: any): DocumentReaderComparison | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderComparison

        result.sourceTypeLeft = jsonObject["sourceTypeLeft"]
        result.sourceTypeRight = jsonObject["sourceTypeRight"]
        result.status = jsonObject["status"]

        return result
    }
}

export class DocumentReaderRfidOrigin {
    dg?: number
    dgTag?: number
    entryView?: number
    tagEntry?: number

    static fromJson(jsonObject?: any): DocumentReaderRfidOrigin | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderRfidOrigin

        result.dg = jsonObject["dg"]
        result.dgTag = jsonObject["dgTag"]
        result.entryView = jsonObject["entryView"]
        result.tagEntry = jsonObject["tagEntry"]

        return result
    }
}

export class DocumentReaderTextSource {
    sourceType?: number
    source?: string
    validityStatus?: number

    static fromJson(jsonObject?: any): DocumentReaderTextSource | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderTextSource

        result.sourceType = jsonObject["sourceType"]
        result.source = jsonObject["source"]
        result.validityStatus = jsonObject["validityStatus"]

        return result
    }
}

export class DocumentReaderSymbol {
    code?: number
    rect?: Rect
    probability?: number

    static fromJson(jsonObject?: any): DocumentReaderSymbol | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderSymbol

        result.code = jsonObject["code"]
        result.rect = Rect.fromJson(jsonObject["rect"])
        result.probability = jsonObject["probability"]

        return result
    }
}

export class DocumentReaderValidity {
    sourceType?: number
    status?: number

    static fromJson(jsonObject?: any): DocumentReaderValidity | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderValidity

        result.sourceType = jsonObject["sourceType"]
        result.status = jsonObject["status"]

        return result
    }
}

export class DocumentReaderResults {
    chipPage?: number
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

    getTextFieldValueByType({ fieldType, lcid = 0, source = -1, original = false }: { fieldType: number, lcid?: number, source?: number, original?: boolean }): string | undefined {
        if (this.textResult == undefined) return undefined
        const field = this.findByTypeAndLcid(fieldType, lcid)
        if (field == undefined) return undefined
        const value = this.findBySource(field, source)
        if (value == undefined) return undefined
        return original ? value.originalValue : value.value
    }

    getTextFieldStatusByType(fieldType: number, lcid?: number): number {
        if (this.textResult == undefined) return 0
        const field = this.findByTypeAndLcid(fieldType, lcid)
        if(field != undefined && field.status != null && field.status != undefined)
            return field.status
        return 0
    }

    getGraphicFieldImageByType({ fieldType, source = -1, light = -1, pageIndex = -1 }: { fieldType: number, source?: number, light?: number, pageIndex?: number }): string | undefined {
        if (this.graphicResult == undefined || this.graphicResult.fields == undefined) return undefined
        const foundFields: DocumentReaderGraphicField[] = []

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

        return foundFields.length > 0 ? foundFields[0].value : undefined
    }

    getQualityResult({ imageQualityCheckType, securityFeature = -1, pageIndex = 0 }: { imageQualityCheckType: number, securityFeature?: number, pageIndex?: number }): number {
        let resultSum = 2
        if (this.imageQuality == undefined)
            return resultSum

        let imageQualityGroup

        for (const iq of this.imageQuality)
            if (iq != null && iq != undefined && iq.pageIndex == pageIndex)
                imageQualityGroup = iq
        if (imageQualityGroup == null || imageQualityGroup == undefined)
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

    findByTypeAndLcid(type: number, lcid?: number): DocumentReaderTextField | undefined {
        if (this.textResult == undefined || this.textResult.fields == undefined) return undefined
        let field
        const foundFields: DocumentReaderTextField[] = []

        for (field of this.textResult.fields)
            if (field.fieldType === type)
                foundFields.push(field)
        if (foundFields.length <= 0)
            return undefined

        let foundField = undefined

        for (field of foundFields)
            if (lcid === 0) {
                foundField = field
                if (field.lcid === lcid)
                    break
            } else if (field.lcid === lcid)
                return field

        return foundField
    }

    findBySource(field: DocumentReaderTextField, sourceType: number): DocumentReaderValue | undefined {
        let value
        if (sourceType === -1) {
            const mrzVal = this.findBySource(field, 3)
            if (mrzVal != null && mrzVal != undefined)
                return mrzVal
            value = this.findBySource(field, 18)
            if (value != null && value != undefined)
                return value
            const visualVal = this.findBySource(field, 17)
            return visualVal
        }
        if(field.values == undefined) return undefined
        for (const item of field.values)
            if (item.sourceType === sourceType)
                return item

        return undefined
    }

    getContainers(resultTypes: number[]): string | undefined {
        try {
            if(this.rawResult == undefined) return undefined
            const json = JSON.parse(this.rawResult)
            const containerList = json.List
            const resultArray: any[] = []
            for (const container of containerList){
                if (container == null || container.length == 0)
                    continue
                for (const resultType of resultTypes)
                    if(resultType == container.result_type){
                        resultArray.push(container)
                        break
                    }
            }
            if (resultArray.length == 0) return undefined
            const newContainerList = {}
            newContainerList["List"] = resultArray
            const newJson = {}
            newJson["ContainerList"] = newContainerList
            newJson["TransactionInfo"] = json.TransactionInfo
        } catch (error) {
            return undefined
        }
    }

    getEncryptedContainers(): string | undefined {
        return this.getContainers([
            eRPRM_ResultType.RPRM_RESULT_TYPE_INTERNAL_RFID_SESSION,
            eRPRM_ResultType.RPRM_RESULT_TYPE_INTERNAL_ENCRYPTED_RCL,
            eRPRM_ResultType.RPRM_RESULT_TYPE_INTERNAL_LICENSE
        ])
    }

    static fromJson(jsonObject?: any): DocumentReaderResults | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderResults

        result.chipPage = jsonObject["chipPage"]
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
                const item = ElementPosition.fromJson(jsonObject["documentPosition"][i])
                if (item != undefined)
                    result.documentPosition.push(item)
            }
        }
        result.barcodePosition = []
        if (jsonObject["barcodePosition"] != null) {
            for (const i in jsonObject["barcodePosition"]) {
                const item = ElementPosition.fromJson(jsonObject["barcodePosition"][i])
                if (item != undefined)
                    result.barcodePosition.push(item)
            }
        }
        result.mrzPosition = []
        if (jsonObject["mrzPosition"] != null) {
            for (const i in jsonObject["mrzPosition"]) {
                const item = ElementPosition.fromJson(jsonObject["mrzPosition"][i])
                if (item != undefined)
                    result.mrzPosition.push(item)
            }
        }
        result.imageQuality = []
        if (jsonObject["imageQuality"] != null) {
            for (const i in jsonObject["imageQuality"]) {
                const item = ImageQualityGroup.fromJson(jsonObject["imageQuality"][i])
                if (item != undefined)
                    result.imageQuality.push(item)
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
                const item = DocumentReaderDocumentType.fromJson(jsonObject["documentType"][i])
                if (item != undefined)
                    result.documentType.push(item)
            }
        }
        result.status = DocumentReaderResultsStatus.fromJson(jsonObject["status"])
        result.vdsncData = VDSNCData.fromJson(jsonObject["vdsncData"])

        return result
    }
}

export const FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3,
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
    MRZ: 8388608,
}

export const eRFID_ErrorCodes = {
    RFID_ERROR_NO_ERROR: 0x00000001,
    RFID_ERROR_ALREADY_DONE: 0x00000002,
    RFID_ERROR_FAILED: 0xffffffff,
    RFID_ERROR_NO_CHIP_DETECTED: 0x80010001,
    RFID_ERROR_NOT_AVAILABLE: 0x80010002,
    RFID_ERROR_INVALID_PARAMETER: 0x80010004,
    RFID_ERROR_NOT_INITIALIZED: 0x80010005,
    RFID_ERROR_NOT_ENOUGH_MEMORY: 0x80010006,
    RFID_ERROR_INVALID_DIRECTORY: 0x80010008,
    RFID_ERROR_UNKNOWN_COMMAND: 0x80010009,
    RFID_ERROR_FILE_IO_ERROR: 0x8001000A,
    RFID_ERROR_BUSY: 0x8001000B,
    RFID_ERROR_OLD_FIRMWARE: 0x8001000C,
    RFID_ERROR_PCSC_FAILED: 0x80020000,
    RFID_ERROR_PCSC_READER_NOT_AVAILABLE: 0x80020001,
    RFID_ERROR_PCSC_CANT_CONNECT_CARD: 0x80020002,
    RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED: 0x80020003,
    RFID_ERROR_PCSC_OPERATION_CANCELLED: 0x80020004,
    RFID_ERROR_PCSC_CARD_IS_BUSY: 0x80020005,
    RFID_ERROR_PCSC_FAILED_SCARD: 0x80020006,
    RFID_ERROR_PCSC_EXT_LE_FAILED: 0x80020010,
    RFID_ERROR_LAYER6_SECURITY_MANAGER: 0x86000000,
    RFID_ERROR_LAYER6_APP_SELECTION_FAILURE: 0x86000001,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_MAC_FAIL: 0x86000100,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_ENC_FAIL: 0x86000101,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE: 0x86000102,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE_DATA: 0x86000103,
    RFID_ERROR_LAYER6_SM_DO_8E_MISSING: 0x86000200,
    RFID_ERROR_LAYER6_SM_DO_87_MISSING: 0x86000201,
    RFID_ERROR_LAYER6_SM_DO_99_MISSING: 0x86000202,
    RFID_ERROR_LAYER6_SM_MAC_INCORRECT: 0x86000203,
    RFID_ERROR_LAYER6_SM_DO_87_INCORRECT: 0x86000204,
    RFID_ERROR_LAYER6_NON_TLV_RESPONSE_DATA: 0x86000300,
    RFID_ERROR_LAYER6_WRONG_RND_ICC_LENGTH: 0x86000301,
    RFID_ERROR_LAYER6_INT_AUTH_FAILURE: 0x86000302,
    RFID_ERROR_LAYER6_MSE_SET_KAT_FAILURE: 0x86000303,
    RFID_ERROR_LAYER6_MSE_SET_DST_FAILURE: 0x86000304,
    RFID_ERROR_LAYER6_PSO_CERTIFICATE_FAILURE: 0x86000305,
    RFID_ERROR_LAYER6_MSE_SET_AT_FAILURE: 0x86000306,
    RFID_ERROR_LAYER6_GET_CHALLENGE_FAILURE: 0x86000307,
    RFID_ERROR_LAYER6_EXT_AUTH_FAILURE: 0x86000308,
    RFID_ERROR_LAYER6_GENERAL_AUTH_FAILURE: 0x86000309,
    RFID_ERROR_LAYER6_FILE_NOT_FOUND: 0x80006A82,
    RFID_ERROR_LAYER6_FILE_EOF1: 0x80006282,
    RFID_ERROR_LAYER6_FILE_EOF2: 0x80006B00,
    RFID_ERROR_LAYER6_INCORRECT_PARAMS: 0x80006A80,
    RFID_ERROR_LAYER6_NO_REFERENCE_DATA: 0x80006A88,
    RFID_ERROR_LAYER6_PWD_SUSPEND: 0x800063C1,
    RFID_ERROR_LAYER6_PWD_BLOCKED: 0x800063C0,
    RFID_ERROR_LAYER6_PWD_DEACTIVATED: 0x80006283,
    RFID_ERROR_LAYER6_PWD_BLOCKED2: 0x80006983,
    RFID_ERROR_LAYER6_PWD_DEACTIVATED2: 0x80006984,
    RFID_ERROR_LAYER6_PWD_SUSPEND2: 0x80006985,
    RFID_ERROR_LAYER6_PWD_FAILED: 0x801063C0,
    RFID_ERROR_NOT_PERFORMED: 0x83000000,
    RFID_ERROR_SESSION_IS_CLOSED: 0x83000001,
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: 0x83000002,
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: 0x83000010,
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: 0x83000011,
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: 0x83000012,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: 0x83000013,
    RFID_ERROR_Session_Procedure_Type_Unsupported: 0x83000014,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET: 0x83000015,
    RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE: 0x83000016,
    RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE: 0x83000017,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE: 0x83000018,
    RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED: 0x83000019,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA: 0x8300001A,
    RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET: 0x8300001B,
    RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED: 0x8300001C,
    RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE: 0x83000020,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM: 0x83000021,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE: 0x83000022,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS: 0x83000023,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA: 0x83000024,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA: 0x83000025,
    RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA: 0x83000026,
    RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED: 0x83000027,
    RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED: 0x83000028,
    RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED: 0x83000029,
    RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED: 0x8300002A,
    RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED: 0x83000030,
    RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED: 0x83000031,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY: 0x83000040,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH: 0x83000041,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID: 0x83000042,
    RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION: 0x83000050,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET: 0x83000051,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED: 0x83000052,
    RFID_ERROR_SESSION_INCORRECT_DATA: 0x83000060,
    RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA: 0x83010000,
    RFID_ERROR_SESSION_FILE_INCORRECT_DATA: 0x83020000,
    RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA: 0x83030000,
    RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA: 0x83040000,
    RFID_ERROR_SESSION_FILE_WRONG_TAG: 0x83050000,
    RFID_ERROR_SESSION_FILE_CANT_USE_DATA: 0x83060000,
    RFID_ERROR_SESSION_FILE_CANT_READ_DATA: 0x83070000,
    RFID_ERROR_SESSION_FILE_ACCESS_DENIED: 0x83080000,
    RFID_ERROR_LAYER34_NO_ERROR: 0x84000000,
    RFID_ERROR_LAYER34_TIME_OUT: 0x84010000,
    RFID_ERROR_LAYER34_COLLISION: 0x84020000,
    RFID_ERROR_LAYER34_CRC: 0x84030000,
    RFID_ERROR_LAYER34_DATA_INTEGRITY: 0x84040000,
    RFID_ERROR_LAYER34_DATA_LENGTH: 0x84050000,
    RFID_ERROR_Layer34_RFU: 0x84060000,
    RFID_ERROR_LAYER34_COLLISION_TOO_MANY: 0x84070000,
    RFID_ERROR_LAYER34_PROTOCOL_B: 0x84080000,
    RFID_ERROR_LAYER34_DATA_CONTENTS: 0x84090000,
    RFID_ERROR_LAYER34_PROTOCOL: 0x840A0000,
    RFID_ERROR_LAYER34_GLOBAL_TIME_OUT: 0x840B0000,
    RFID_ERROR_LAYER34_MIFARE_AUTH: 0x840C0000,
    RFID_ERROR_LAYER34_SAM_ERROR: 0x840D0000,
    RFID_ERROR_LAYER34_SAM_COLLISION: 0x840E0000,
    RFID_ERROR_LAYER34_SAM_ACKNOWLEDGE: 0x840F0000,

    getTranslation(value: number) {
        switch (value) {
            case this.RFID_ERROR_NO_ERROR:
                return "RFID: No error"
            case this.RFID_ERROR_ALREADY_DONE:
                return "RFID: The requested operation is already performed"
            case this.RFID_ERROR_FAILED:
                return "RFID: Failed"
            case this.RFID_ERROR_NO_CHIP_DETECTED:
                return "RFID: No chip is detected"
            case this.RFID_ERROR_NOT_AVAILABLE:
                return "RFID: Unavailable"
            case this.RFID_ERROR_INVALID_PARAMETER:
                return "RFID: Invalid parameter in ExecuteCommand() call found"
            case this.RFID_ERROR_NOT_INITIALIZED:
                return "RFID: Device is uninitialized"
            case this.RFID_ERROR_NOT_ENOUGH_MEMORY:
                return "RFID: Out of memory"
            case this.RFID_ERROR_INVALID_DIRECTORY:
                return "RFID: Invalid directory"
            case this.RFID_ERROR_UNKNOWN_COMMAND:
                return "RFID: Unknown command"
            case this.RFID_ERROR_FILE_IO_ERROR:
                return "RFID File: IO Error"
            case this.RFID_ERROR_BUSY:
                return "RFID: RFID is busy"
            case this.RFID_ERROR_OLD_FIRMWARE:
                return "RFID: The firmware needs to be updated to a newer version"
            case this.RFID_ERROR_PCSC_FAILED:
                return "PCSC: Failed"
            case this.RFID_ERROR_PCSC_READER_NOT_AVAILABLE:
                return "PCSC: The reader is unavailable"
            case this.RFID_ERROR_PCSC_CANT_CONNECT_CARD:
                return "PCSC: The card cannot be connected"
            case this.RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED:
                return "PCSC: The card is not connected"
            case this.RFID_ERROR_PCSC_OPERATION_CANCELLED:
                return "PCSC: Operation is cancelled"
            case this.RFID_ERROR_PCSC_CARD_IS_BUSY:
                return "PCSC: The card is busy"
            case this.RFID_ERROR_PCSC_FAILED_SCARD:
                return "PCSC: Failed Smart Card"
            case this.RFID_ERROR_PCSC_EXT_LE_FAILED:
                return "PCSC: ExtLe Failed"
            case this.RFID_ERROR_LAYER6_SECURITY_MANAGER:
                return "LAYER6: Secure Messaging was not activated"
            case this.RFID_ERROR_LAYER6_APP_SELECTION_FAILURE:
                return "LAYER6: ISO7816_A_03 \"Application selection failure\""
            case this.RFID_ERROR_LAYER6_MUTUAL_AUTH_MAC_FAIL:
                return "LAYER6: ISO7816_B_01 \"Mutual authentication MAC failure\""
            case this.RFID_ERROR_LAYER6_MUTUAL_AUTH_ENC_FAIL:
                return "LAYER6: ISO7816_B_02 \"Mutual authentication encryption failure\""
            case this.RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE:
                return "LAYER6: ISO7816_B_03 \"Mutual authentication failure\""
            case this.RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE_DATA:
                return "LAYER6: ISO7816_B_03 \"Mutual authentication failure data\""
            case this.RFID_ERROR_LAYER6_SM_DO_8E_MISSING:
                return "LAYER6: SM failure – MAC missing"
            case this.RFID_ERROR_LAYER6_SM_DO_87_MISSING:
                return "LAYER6: SM failure – cryptogram missing"
            case this.RFID_ERROR_LAYER6_SM_DO_99_MISSING:
                return "LAYER6: SM failure – secured status bytes missing"
            case this.RFID_ERROR_LAYER6_SM_MAC_INCORRECT:
                return "LAYER6: SM failure – incorrect MAC"
            case this.RFID_ERROR_LAYER6_SM_DO_87_INCORRECT:
                return "LAYER6: SM failure – incorrect cryptogram"
            case this.RFID_ERROR_LAYER6_NON_TLV_RESPONSE_DATA:
                return "LAYER6: Not TLV response data"
            case this.RFID_ERROR_LAYER6_WRONG_RND_ICC_LENGTH:
                return "LAYER6: Wrong data length (APDU_INS_GET_CHALLENGE)"
            case this.RFID_ERROR_LAYER6_INT_AUTH_FAILURE:
                return "LAYER6: APDU_INS_INTERNAL_AUTHENTICATE failure"
            case this.RFID_ERROR_LAYER6_MSE_SET_KAT_FAILURE:
                return "LAYER6: MSE:Set KAT failure"
            case this.RFID_ERROR_LAYER6_MSE_SET_DST_FAILURE:
                return "LAYER6: MSE:Set DST failure"
            case this.RFID_ERROR_LAYER6_PSO_CERTIFICATE_FAILURE:
                return "LAYER6: PSO CERTIFICATE failure"
            case this.RFID_ERROR_LAYER6_MSE_SET_AT_FAILURE:
                return "LAYER6: MSE:Set AT failure"
            case this.RFID_ERROR_LAYER6_GET_CHALLENGE_FAILURE:
                return "LAYER6: GET CHALLENGE failure"
            case this.RFID_ERROR_LAYER6_EXT_AUTH_FAILURE:
                return "LAYER6: APDU_INS_EXTERNAL_AUTHENTICATE (external authentication) failure"
            case this.RFID_ERROR_LAYER6_GENERAL_AUTH_FAILURE:
                return "LAYER6: General Authenticity Failure"
            case this.RFID_ERROR_LAYER6_FILE_NOT_FOUND:
                return "LAYER6: File selection failure / file not found"
            case this.RFID_ERROR_LAYER6_FILE_EOF1:
                return "LAYER6: Reading beyond EOF / Unexpected EOF"
            case this.RFID_ERROR_LAYER6_FILE_EOF2:
                return "LAYER6: Reading beyond EOF / Unexpected EOF"
            case this.RFID_ERROR_LAYER6_INCORRECT_PARAMS:
                return "LAYER6: Incorrect params"
            case this.RFID_ERROR_LAYER6_NO_REFERENCE_DATA:
                return "LAYER6: No reference data"
            case this.RFID_ERROR_LAYER6_PWD_SUSPEND:
                return "LAYER6: PWD suspended"
            case this.RFID_ERROR_LAYER6_PWD_BLOCKED:
                return "LAYER6: PWD blocked"
            case this.RFID_ERROR_LAYER6_PWD_DEACTIVATED:
                return "LAYER6: PWD deactivated"
            case this.RFID_ERROR_LAYER6_PWD_BLOCKED2:
                return "LAYER6: PWD blocked 2"
            case this.RFID_ERROR_LAYER6_PWD_DEACTIVATED2:
                return "LAYER6: PWD deactivated 2"
            case this.RFID_ERROR_LAYER6_PWD_SUSPEND2:
                return "LAYER6: PWD suspended 2"
            case this.RFID_ERROR_LAYER6_PWD_FAILED:
                return "LAYER6: PWD failed"
            case this.RFID_ERROR_NOT_PERFORMED:
                return "RFID: Not performed"
            case this.RFID_ERROR_SESSION_IS_CLOSED:
                return "RFID: Session is closed"
            case this.RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION:
                return "RFID: Unsupported terminal operation"
            case this.RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN:
                return "RFID: Terminal type unknown"
            case this.RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE:
                return "RFID: Terminal type bad certificate"
            case this.RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET:
                return "RFID: Terminal type not set"
            case this.RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN:
                return "RFID: Unknown procedure type"
            case this.RFID_ERROR_Session_Procedure_Type_Unsupported:
                return "RFID: Unsupported procedure type"
            case this.RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET:
                return "RFID: Procedure type not set"
            case this.RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE:
                return "RFID: Access key unknown type"
            case this.RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE:
                return "RFID: Access key unsupported SM type"
            case this.RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE:
                return "RFID: Access key incorrect SM type"
            case this.RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED:
                return "RFID: Access key restricted"
            case this.RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA:
                return "RFID: Access key incorrect data"
            case this.RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET:
                return "RFID: Access key not set"
            case this.RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED:
                return "RFID: PWD management not authorized"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE:
                return "RFID: Access control unknown type"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM:
                return "RFID: Access control unknown type"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE:
                return "RFID: PACE required"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS:
                return "RFID: CA keys required"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA:
                return "RFID: TA required"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA:
                return "RFID: CA required"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA:
                return "RFID: Incorrect option CA"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED:
                return "RFID: CA failed"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED:
                return "RFID: TA failed"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED:
                return "RFID: AA failed"
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED:
                return "RFID: RI failed"
            case this.RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED:
                return "RFID: SO signature check failed"
            case this.RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED:
                return "RFID: Hash check failed"
            case this.RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY:
                return "RFID: Invalid aux data - date of expiry"
            case this.RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH:
                return "RFID: Invalid aux data - date of birth"
            case this.RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID:
                return "RFID: Invalid aux data - community ID"
            case this.RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION:
                return "RFID: eSign requires app selection"
            case this.RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET:
                return "RFID: eSign PIN not set"
            case this.RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED:
                return "RFID: eSign PIN not verified"
            case this.RFID_ERROR_SESSION_INCORRECT_DATA:
                return "RFID: Incorrect data"
            case this.RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA:
                return "RFID file: Insufficient data"
            case this.RFID_ERROR_SESSION_FILE_INCORRECT_DATA:
                return "RFID file: Incorrect data"
            case this.RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA:
                return "RFID file: Unexpected data"
            case this.RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA:
                return "RFID file: Contains unexpected data"
            case this.RFID_ERROR_SESSION_FILE_WRONG_TAG:
                return "RFID file: Wrong tag"
            case this.RFID_ERROR_SESSION_FILE_CANT_USE_DATA:
                return "RFID file: Cannot use data"
            case this.RFID_ERROR_SESSION_FILE_CANT_READ_DATA:
                return "RFID file: Cannot read data"
            case this.RFID_ERROR_SESSION_FILE_ACCESS_DENIED:
                return "RFID file: Access denied"
            case this.RFID_ERROR_LAYER34_NO_ERROR:
                return "RFID: Layer 34 - No error"
            case this.RFID_ERROR_LAYER34_TIME_OUT:
                return "RFID: Layer 34 - Timeout"
            case this.RFID_ERROR_LAYER34_COLLISION:
                return "RFID: Layer 34 - Collision"
            case this.RFID_ERROR_LAYER34_CRC:
                return "RFID: Layer 34 - CRC"
            case this.RFID_ERROR_LAYER34_DATA_INTEGRITY:
                return "RFID: Layer 34 - Data integrity"
            case this.RFID_ERROR_LAYER34_DATA_LENGTH:
                return "RFID: Layer 34 - Data length"
            case this.RFID_ERROR_Layer34_RFU:
                return "RFID: Layer 34 - RFU"
            case this.RFID_ERROR_LAYER34_COLLISION_TOO_MANY:
                return "RFID: Layer 34 - Too many collision"
            case this.RFID_ERROR_LAYER34_PROTOCOL_B:
                return "RFID: Layer 34 - Protocol B"
            case this.RFID_ERROR_LAYER34_DATA_CONTENTS:
                return "RFID: Layer 34 - Data contents"
            case this.RFID_ERROR_LAYER34_PROTOCOL:
                return "RFID: Layer 34 - Protocol"
            case this.RFID_ERROR_LAYER34_GLOBAL_TIME_OUT:
                return "RFID: Layer 34 - Globa timeout"
            case this.RFID_ERROR_LAYER34_MIFARE_AUTH:
                return "RFID: Layer 34 - MIFARE auth"
            case this.RFID_ERROR_LAYER34_SAM_ERROR:
                return "RFID: Layer 34 - SAM error"
            case this.RFID_ERROR_LAYER34_SAM_COLLISION:
                return "RFID: Layer 34 - SAM collision"
            case this.RFID_ERROR_LAYER34_SAM_ACKNOWLEDGE:
                return "RFID: Layer 34 - SAM acknowledge"
            default:
                return value.toString()
        }
    }
}

export const eLDS_ParsingErrorCodes = {
    ERR_LDS_OK: 0x00000001,
    ERR_LDS_ASN_INCORRECT_DATA: 0x80000001,
    RR_LDS_ASN_NOT_ENOUGH_DATA: 0x80000002,
    ERR_LDS_ASN_CONTENTS_UNEXPECTED_DATA: 0x80000003,
    ERR_LDS_ASN_SIGNED_DATA_INCORRECT_DATA: 0x80000008,
    ERR_LDS_ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA: 0x80000009,
    ERR_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT_DATA: 0x8000000A,
    ERR_LDS_ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA: 0x80000011,
    ERR_LDS_ASN_LDS_OBJECT_INCORRECT_DATA: 0x80000013,
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INCORRECT_DATA: 0x80000014,
    ERR_LDS_ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA: 0x80000015,
    ERR_LDS_ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA: 0x80000016,
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA: 0x80000012,
    ERR_LDS_ASN_CERTIFICATE_INCORRECT_DATA: 0x80000017,
    ERR_LDS_ASN_CERTIFICATE_VERSION_INCORRECT_DATA: 0x80000018,
    ERR_LDS_ASN_CERTIFICATE_SN_INCORRECT_DATA: 0x80000019,
    ERR_LDS_ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA: 0x8000001A,
    ERR_LDS_ASN_CERTIFICATE_ISSUER_INCORRECT_DATA: 0x8000001B,
    ERR_LDS_ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA: 0x8000001C,
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA: 0x8000001D,
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA: 0x8000001E,
    ERR_LDS_ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: 0x8000001F,
    ERR_LDS_ASN_SIGNER_INFO_INCORRECT_DATA: 0x80000020,
    ERR_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT_DATA: 0x80000021,
    ERR_LDS_ASN_SIGNER_INFO_SID_INCORRECT_DATA: 0x80000022,
    ERR_LDS_ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA: 0x80000023,
    ERR_LDS_ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA: 0x80000024,
    ERR_LDS_ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA: 0x80000025,
    ERR_LDS_ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA: 0x80000026,
    ERR_LDS_ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA: 0x80000027,
    ERR_LDS_ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM: 0x80000030,
    ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY: 0x80000031,
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM: 0x80000032,
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM: 0x80000033,
    ERR_LDS_ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR: 0x80000034,
    ERR_LDS_ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED: 0x80000036,
    ERR_LDS_AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE: 0x80000035,
    ERR_LDS_AUTH_ERROR: 0x80000050,
    ERR_LDS_AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM: 0x80000051,
    ERR_LDS_AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: 0x80000052,
    ERR_LDS_AUTH_MESSED_ALGORITHMS: 0x80000053,
    ERR_LDS_AUTH_PUBLIC_KEY_DATA_INVALID: 0x80000054,
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_DATA_INVALID: 0x80000055,
    ERR_LDS_AUTH_SIGNATURE_DATA_INVALID: 0x80000056,
    ERR_LDS_AUTH_UNSUPPORTED_DIGEST_ALGORITHM: 0x80000057,
    ERR_LDS_AUTH_SIGNATURE_DATA_INCORRECT: 0x80000058,
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED: 0x80000059,
    ERR_LDS_AUTH_SIGNATURE_CHECK_FAILED: 0x8000005A,
    ERR_LDS_DG_WRONG_TAH: 0x80000070,
    ERR_LDS_DG_CONTENTS_UNEXPECTED_DATA: 0x80000071,
    ERR_LDS_BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE: 0x81000011,
    ERR_LDS_PACE_INFO_NOT_AVAILABLE: 0x81000020,
    ERR_LDS_PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE: 0x81000021,
    ERR_LDS_PACE_KEY_AGREEMENT_CANT_INITIALIZE: 0x81000022,
    ERR_LDS_PACE_EPHEMERAL_KEYS_CANT_CREATE: 0x81000023,
    ERR_LDS_PACE_MAPPING_CANT_DECODE_NONCE: 0x81000024,
    ERR_LDS_PACE_SHARED_SECRET_CANT_CREATE: 0x81000025,
    ERR_LDS_PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT: 0x81000026,
    ERR_LDS_PACE_EPHEMERAL_KEYS_INCORRECT: 0x81000027,
    ERR_LDS_PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT: 0x81000028,
    ERR_LDS_PACE_MAPPING_CANT_PERFORM: 0x81000029,
    ERR_LDS_PACE_NON_MATCHING_AUTH_TOKENS: 0x8100002A,
    ERR_LDS_PACE_CAM_DATA_INCORRECT: 0x8100002B,
    ERR_LDS_PACE_CAM_DATA_CANT_VERIFY: 0x8100002C,
    ERR_LDS_PACE_CAM_DATA_NON_MATCHING: 0x8100002D,
    ERR_LDS_PACE_IM_SCHEME_INCORRECT: 0x8100002E,
    ERR_LDS_PACE_IM_RANDOM_MAPPING_FAILED: 0x8100002F,
    ERR_LDS_CA_CANT_FIND_PUBLIC_KEY: 0x81000030,
    ERR_LDS_CA_CANT_FIND_INFO: 0x81000031,
    ERR_LDS_CA_INCORRECT_VERSION: 0x81000032,
    ERR_LDS_CA_CANT_FIND_DOMAIN_PARAMETERS: 0x81000033,
    ERR_LDS_CA_KEY_AGREEMENT_CANT_INITIALIZE: 0x81000034,
    ERR_LDS_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x81000035,
    ERR_LDS_CA_EPHEMERAL_KEYS_CANT_CREATE: 0x81000036,
    ERR_LDS_CA_SHARED_SECRET_CANT_CREATE: 0x81000037,
    ERR_LDS_CA_NON_MATCHING_AUTH_TOKENS: 0x81000038,
    ERR_LDS_TA_INCORRECT_VERSION: 0x81000040,
    ERR_LDS_TA_CANT_BUILD_CERTIFICATE_CHAIN: 0x81000041,
    ERR_LDS_TA_CANT_FIND_IS_PRIVATE_KEY: 0x81000042,
    ERR_LDS_TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x81000043,
    ERR_LDS_TA_SIGNATURE_BUILDING_ERROR: 0x81000044,
    ERR_LDS_TA_INVALID_KEY_ALGORITHM_PARAMETERS: 0x81000045,
    ERR_LDS_AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x81000050,
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_DATA: 0x81000051,
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_PARAMETERS: 0x81000052,
    ERR_LDS_AA_PUBLIC_KEY_UNDEFINED_PARAMETERS: 0x81000053,
    ERR_LDS_AA_SIGNATURE_INCORRECT_DATA: 0x81000054,
    ERR_LDS_AA_UNSUPPORTED_RECOVERY_SCHEME: 0x81000055,
    ERR_LDS_AA_INCORRECT_TRAILER: 0x81000056,
    ERR_LDS_AA_UNSUPPORTED_DIGEST_ALGORITHM: 0x81000057,
    ERR_LDS_RI_SECTOR_KEY_CANT_FIND: 0x81000070,
    ERR_LDS_RI_SECTOR_KEY_INCORRECT_DATA: 0x81000071,
    ERR_LDS_RI_SECTOR_KEY_INCOMPLETE_DATA: 0x81000072,
    ERR_LDS_CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK: 0x81000060,
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED: 0x81000062,
    ERR_LDS_CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE: 0x81000063,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED: 0x8100006,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS: 0x81000065,
    ERR_LDS_CV_CERTIFICATE_INCORRECT_DATA: 0x81000160,
    ERR_LDS_CV_CERTIFICATE_CPI_INCORRECT_DATA: 0x81000161,
    ERR_LDS_CV_CERTIFICATE_CAR_INCORRECT_DATA: 0x81000162,
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA: 0x81000163,
    ERR_LDS_CV_CERTIFICATE_CHR_INCORRECT_DATA: 0x81000164,
    ERR_LDS_CV_CERTIFICATE_CHAT_INCORRECT_DATA: 0x81000165,
    ERR_LDS_CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA: 0x81000166,
    ERR_LDS_CV_CERTIFICATE_VALID_TO_INCORRECT_DATA: 0x81000167,
    ERR_LDS_CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: 0x81000168,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA: 0x81000169,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_MISSING: 0x8100016A,
    ERR_LDS_VDS_UNSUPPORTED_VERSION: 0x81000200,
    ERR_LDS_VDS_ISSUING_COUNTRY_SIZE: 0x81000201,
    ERR_LDS_VDS_ISSUING_COUNTRY_INCORRECT_DATA: 0x81000202,
    ERR_LDS_VDS_SIGNER_CERTIFICATE_SIZE: 0x81000203,
    ERR_LDS_VDS_SIGNER_CERTIFICATE_DATA: 0x81000204,
    ERR_LDS_VDS_SIGNATURE_INCORRECT_DATA: 0x81000205,
    ERR_LDS_VDS_NC_INCORRECT_DATA: 0x81000300,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_DATA: 0x81000301,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_HEADER: 0x81000302,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_TYPE: 0x81000303,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_VERSION: 0x81000304,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_ISSUING_COUNTRY: 0x81000305,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_MESSAGE: 0x81000306,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIGNATURE: 0x81000307,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_ALGORITHM: 0x81000308,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_CERTIFICATE: 0x81000309,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_VALUE: 0x8100030A,

    getTranslation(value: number) {
        switch (value) {
            case this.ERR_LDS_OK:
                return "OK"
            case this.ERR_LDS_ASN_INCORRECT_DATA:
                return "Error - ASN: Incorrect data"
            case this.RR_LDS_ASN_NOT_ENOUGH_DATA:
                return "Error - ASN: Not enough data"
            case this.ERR_LDS_ASN_CONTENTS_UNEXPECTED_DATA:
                return "Error - ASN: Contents unexpected data"
            case this.ERR_LDS_ASN_SIGNED_DATA_INCORRECT_DATA:
                return "Error - ASN Signed data: Incorrect data"
            case this.ERR_LDS_ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA:
                return "Error - ASN Signed data: Encap contents incorrect data"
            case this.ERR_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT_DATA:
                return "Error - ASN Signed data: Version incorrect data"
            case this.ERR_LDS_ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA:
                return "Error - ASN Signed data: Digest algorithms incorrect data"
            case this.ERR_LDS_ASN_LDS_OBJECT_INCORRECT_DATA:
                return "Error - ASN LDS object: Incorrect data"
            case this.ERR_LDS_ASN_LDS_OBJECT_VERSION_INCORRECT_DATA:
                return "Error - ASN LDS object: Version incorrect data"
            case this.ERR_LDS_ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA:
                return "Error - ASN LDS object: Digest algorithm incorrect data"
            case this.ERR_LDS_ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA:
                return "Error - ASN LDS object: DG hashes incorrect data"
            case this.ERR_LDS_ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA:
                return "Error - ASN LDS object: Version info incorrect data"
            case this.ERR_LDS_ASN_CERTIFICATE_INCORRECT_DATA:
                return "Error - ASN Certificate: Incorrect data"
            case this.ERR_LDS_ASN_CERTIFICATE_VERSION_INCORRECT_DATA:
                return "Error - ASN Certificate: Version incorrect data"
            case this.ERR_LDS_ASN_CERTIFICATE_SN_INCORRECT_DATA:
                return "Error - ASN Certificate: SN incorrect data"
            case this.ERR_LDS_ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA:
                return "Error - ASN Certificate: Signature incorrect data"
            case this.ERR_LDS_ASN_CERTIFICATE_ISSUER_INCORRECT_DATA:
                return "Error - ASN Certificate: Issuer incorrect data"
            case this.ERR_LDS_ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA:
                return "Error - ASN Certificate: Validity incorrect data"
            case this.ERR_LDS_ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA:
                return "Error - ASN Certificate: Subject incorrect data"
            case this.ERR_LDS_ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA:
                return "Error - ASN Certificate: Subject PK incorrect data"
            case this.ERR_LDS_ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA:
                return "Error - ASN Certificate: Extensions incorrect data"
            case this.ERR_LDS_ASN_SIGNER_INFO_INCORRECT_DATA:
                return "Error - ASN Signer info: Incorrect data"
            case this.ERR_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT_DATA:
                return "Error - ASN Signer info: Version incorrect data"
            case this.ERR_LDS_ASN_SIGNER_INFO_SID_INCORRECT_DATA:
                return "Error - ASN Signer info: SID incorrect data"
            case this.ERR_LDS_ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA:
                return "Error - ASN Signer info: Digest algorithms incorrect data"
            case this.ERR_LDS_ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA:
                return "Error - ASN Signer info: Signed attributes incorrect data"
            case this.ERR_LDS_ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA:
                return "Error - ASN Signer info: Sign algorithms incorrect data"
            case this.ERR_LDS_ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA:
                return "Error - ASN Signer info: Signature incorrect data"
            case this.ERR_LDS_ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA:
                return "Error - ASN Signer info: Unsigned attributes incorrect data"
            case this.ERR_LDS_ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Error - ICAO LDS object: Unsupported digest algorithm"
            case -this.ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY:
                return "Error - ICAO Signed data: Signer info empty"
            case this.ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Error - ICAO Signer info: Unsupported digest algorithm"
            case this.ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM:
                return "Error - ICAO Signer info: Unsupported signature algorithm"
            case this.ERR_LDS_ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR:
                return "Error - ICAO Signer info: Message digest error"
            case this.ERR_LDS_ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED:
                return "Error - ICAO Signer info: Signed attributes missed"
            case this.ERR_LDS_AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE:
                return "Error - Auth: Signer info cannot find certificate"
            case this.ERR_LDS_AUTH_ERROR:
                return "Error - Auth: Error"
            case this.ERR_LDS_AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM:
                return "Error - Auth: Unsupported signature algorithm"
            case this.ERR_LDS_AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM:
                return "Error - Auth: Unsupported public key algorithm"
            case this.ERR_LDS_AUTH_MESSED_ALGORITHMS:
                return "Error - Auth: Messed algorithms"
            case this.ERR_LDS_AUTH_PUBLIC_KEY_DATA_INVALID:
                return "Error - Auth: Public key data invalid"
            case this.ERR_LDS_AUTH_ALGORITHM_PARAMETERS_DATA_INVALID:
                return "Error - Auth: Algorithm parameters data invalid"
            case this.ERR_LDS_AUTH_SIGNATURE_DATA_INVALID:
                return "Error - Auth: Signature data invalid"
            case this.ERR_LDS_AUTH_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Error - Auth: Unsupported digest algorithm"
            case this.ERR_LDS_AUTH_SIGNATURE_DATA_INCORRECT:
                return "Error - Auth: Signature data incorrect"
            case this.ERR_LDS_AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED:
                return "Error - Auth: Algorithm parameters not defined"
            case this.ERR_LDS_AUTH_SIGNATURE_CHECK_FAILED:
                return "Error - Auth: Signature check failed"
            case this.ERR_LDS_DG_WRONG_TAH:
                return "Error - DG: Wrong Tag"
            case this.ERR_LDS_PACE_INFO_NOT_AVAILABLE:
                return "Error - PACE: Info Not Available"
            case this.ERR_LDS_PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE:
                return "Error - PACE: Symmetric Cypher Cannot Initialize"
            case this.ERR_LDS_PACE_KEY_AGREEMENT_CANT_INITIALIZE:
                return "Error - PACE: Key Agreement Cannot Initialize"
            case this.ERR_LDS_PACE_EPHEMERAL_KEYS_CANT_CREATE:
                return "Error - PACE: Ephemeral Keys Cannot Create"
            case this.ERR_LDS_PACE_MAPPING_CANT_DECODE_NONCE:
                return "Error - PACE: Mapping Cannot Decode Nonce"
            case this.ERR_LDS_PACE_SHARED_SECRET_CANT_CREATE:
                return "Error - PACE: Shared Secret Cannot Create"
            case this.ERR_LDS_PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT:
                return "Error - PACE: Domain Params Unsupported Format"
            case this.ERR_LDS_PACE_EPHEMERAL_KEYS_INCORRECT:
                return "Error - PACE: Ephemeral Keys Incorrect"
            case this.ERR_LDS_PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT:
                return "Error - PACE: Mapping Ephemeral Keys Incorrect"
            case this.ERR_LDS_PACE_MAPPING_CANT_PERFORM:
                return "Error - PACE: Mapping Cannot Perform"
            case this.ERR_LDS_PACE_NON_MATCHING_AUTH_TOKENS:
                return "Error - PACE: Non-Matching Auth Tokens"
            case this.ERR_LDS_CA_CANT_FIND_PUBLIC_KEY:
                return "Error - CA: Cannot Find Public Key"
            case this.ERR_LDS_CA_CANT_FIND_INFO:
                return "Error - CA: Cannot Find Info"
            case this.ERR_LDS_CA_INCORRECT_VERSION:
                return "Error - CA: Incorrect Version"
            case this.ERR_LDS_CA_CANT_FIND_DOMAIN_PARAMETERS:
                return "Error - CA: Cannot Find Domain Parameters"
            case this.ERR_LDS_CA_KEY_AGREEMENT_CANT_INITIALIZE:
                return "Error - CA: Key Agreement Cannot Initialize"
            case this.ERR_LDS_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM:
                return "Error - CA: Public Key Unsupported Algorithm"
            case this.ERR_LDS_CA_EPHEMERAL_KEYS_CANT_CREATE:
                return "Error - CA: Ephemeral Keys Cannot Create"
            case this.ERR_LDS_CA_SHARED_SECRET_CANT_CREATE:
                return "Error - CA: Shared Secret Cannot Create"
            case this.ERR_LDS_CA_NON_MATCHING_AUTH_TOKENS:
                return "Error - CA: Non-Matching Auth Tokens"
            case this.ERR_LDS_TA_INCORRECT_VERSION:
                return "Error - TA: Incorrect Version"
            case this.ERR_LDS_TA_CANT_BUILD_CERTIFICATE_CHAIN:
                return "Error - TA: Cannot Build Certificate Chain"
            case this.ERR_LDS_TA_CANT_FIND_IS_PRIVATE_KEY:
                return "Error - TA: Cannot Find IS Private Key"
            case this.ERR_LDS_TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM:
                return "Error - TA: Public Key Unsupported Algorithm"
            case this.ERR_LDS_TA_SIGNATURE_BUILDING_ERROR:
                return "Error - TA: Signature Building Error"
            case this.ERR_LDS_TA_INVALID_KEY_ALGORITHM_PARAMETERS:
                return "Error - TA: Invalid Key Algorithm Parameters"
            case this.ERR_LDS_AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM:
                return "Error - AA: Public Key Unsupported Algorithm"
            case this.ERR_LDS_AA_PUBLIC_KEY_INCORRECT_DATA:
                return "Error - AA: Public Key Incorrect Data"
            case this.ERR_LDS_AA_PUBLIC_KEY_INCORRECT_PARAMETERS:
                return "Error - AA: Public Key Incorrect Parameters"
            case this.ERR_LDS_AA_PUBLIC_KEY_UNDEFINED_PARAMETERS:
                return "Error - AA: Public Key Undefined Parameters"
            case this.ERR_LDS_AA_SIGNATURE_INCORRECT_DATA:
                return "Error - AA: Signature Incorrect Data"
            case this.ERR_LDS_AA_UNSUPPORTED_RECOVERY_SCHEME:
                return "Error - AA: Unsupported recovery scheme"
            case this.ERR_LDS_AA_INCORRECT_TRAILER:
                return "Error - AA: Incorrect Trailer"
            case this.ERR_LDS_AA_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Error - AA: Unsupported Digest Algorithm"
            case this.ERR_LDS_RI_SECTOR_KEY_CANT_FIND:
                return "Error - RI: Sector Key Cannot Find"
            case this.ERR_LDS_RI_SECTOR_KEY_INCORRECT_DATA:
                return "Error - RI: Sector Key Incorrect Data"
            case this.ERR_LDS_RI_SECTOR_KEY_INCOMPLETE_DATA:
                return "Error - RI: Sector Key Incomplete Data"
            case this.ERR_LDS_CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK:
                return "Error - CV Certificate: Missing mandatory data PK"
            case this.ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED:
                return "Error - CV Certificate: Public key unsupported"
            case this.ERR_LDS_CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE:
                return "Error - CV Certificate: CHAT unsupported terminal type"
            case this.ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED:
                return "Error - CV Certificate: Private key unsupported"
            case this.ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS:
                return "Error - CV Certificate: Private key invalid params"
            case this.ERR_LDS_CV_CERTIFICATE_INCORRECT_DATA:
                return "Error - CV Certificate: Incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_CPI_INCORRECT_DATA:
                return "Error - CV Certificate: CPI incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_CAR_INCORRECT_DATA:
                return "Error - CV Certificate: CAR incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA:
                return "Error - CV Certificate: Public key incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_CHR_INCORRECT_DATA:
                return "Error - CV Certificate: CHR incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_CHAT_INCORRECT_DATA:
                return "Error - CV Certificate: CHAT incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA:
                return "Error - CV Certificate: Valid from incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_VALID_TO_INCORRECT_DATA:
                return "Error - CV Certificate: Valid to incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA:
                return "Error - CV Certificate: Extensions incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA:
                return "Error - CV Certificate: Private key incorrect data"
            case this.ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_MISSING:
                return "Error - CV Certificate: Private key missing"
            case this.ERR_LDS_BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE:
                return "Error - BAP: Symmetric Cypher Cannot Initialize"
            case this.ERR_LDS_DG_CONTENTS_UNEXPECTED_DATA:
                return "Error - DG: Contents unexpected data"
            case this.ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY:
                return "Error - ICAO Signed data: Signer info empty"
            case this.ERR_LDS_PACE_CAM_DATA_CANT_VERIFY:
                return "Error - PACE: CAM data cannot verify"
            case this.ERR_LDS_PACE_CAM_DATA_INCORRECT:
                return "Error - PACE: CAM data incorrect"
            case this.ERR_LDS_PACE_CAM_DATA_NON_MATCHING:
                return "Error - PACE: CAM data non-matching"
            case this.ERR_LDS_PACE_IM_RANDOM_MAPPING_FAILED:
                return "Error - PACE: Random mapping failed"
            case this.ERR_LDS_PACE_IM_SCHEME_INCORRECT:
                return "Error - PACE: IM scheme incorrect"
            case this.ERR_LDS_VDS_ISSUING_COUNTRY_INCORRECT_DATA:
                return "Error - VDS: Issuing country incorrect data"
            case this.ERR_LDS_VDS_ISSUING_COUNTRY_SIZE:
                return "Error - VDS: Issuing country size"
            case this.ERR_LDS_VDS_NC_INCORRECT_DATA:
                return "Error - VDS: Incorrect data"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_CERTIFICATE:
                return "Error - VDS: Missing or incorrect certificate"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_DATA:
                return "Error - VDS: Missing or incorrect data"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_HEADER:
                return "Error - VDS: Missing or incorrect header"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_ISSUING_COUNTRY:
                return "Error - VDS: Missing or incorrect issuing country"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_MESSAGE:
                return "Error - VDS: Missing or incorrect message"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIGNATURE:
                return "Error - VDS: Missing or incorrect signature"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_ALGORITHM:
                return "Error - VDS: Missing or incorrect signature algorithm"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_VALUE:
                return "Error - VDS: Missing or incorrect signature value"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_TYPE:
                return "Error - VDS: Missing or incorrect type"
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_VERSION:
                return "Error - VDS: Missing or incorrect version"
            case this.ERR_LDS_VDS_SIGNATURE_INCORRECT_DATA:
                return "Error - VDS: Signature incorrect data"
            case this.ERR_LDS_VDS_SIGNER_CERTIFICATE_DATA:
                return "Error - VDS: Signature certificate data"
            case this.ERR_LDS_VDS_SIGNER_CERTIFICATE_SIZE:
                return "Error - VDS: Signature certificate size"
            case this.ERR_LDS_VDS_UNSUPPORTED_VERSION:
                return "Error - VDS: Unsupported version"
            default:
                return value.toString()
        }
    }
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

export const RGLMeasureSystem = {
    METRIC: 0,
    IMPERIAL: 1,
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
    RPRM_RESULT_TYPE_INTERNAL_RFID_SESSION: 48,
    RPRM_RESULT_TYPE_INTERNAL_ENCRYPTED_RCL: 49,
    RPRM_RESULT_TYPE_INTERNAL_LICENSE: 50,
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

export const CameraTypes = {
    FRONT: "front",
    BACK: "back",
}

export const FrameShapeType = {
    LINE: 0,
    CORNER: 1,
}

export const eRFID_BaudRate = {
    rfbr_106: 1,
    rfbr_212: 2,
    rfbr_424: 4,
    rfbr_848: 8,
}

export const eRPRM_FieldVerificationResult = {
    RCF_DISABLED: 0,
    RCF_VERIFIED: 1,
    RCF_NOT_VERIFIED: 2,
    RCF_COMPARE_TRUE: 3,
    RCF_COMPARE_FALSE: 4,
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
    PROCESSING_ON_SERVICE: 11,
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
    ePC_RFID_SetTCCParams: 12522,
    ePC_RFID_SetReprocessingParams: 12523,
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

export const eRFID_AuthenticationProcedureType = {
    aptUndefined: 0,
    aptStandard: 1,
    aptAdvanced: 2,
    aptGeneral: 3,
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

export const eRFID_NotificationCodes = {
    RFID_NOTIFICATION_ERROR: 0x00010000,
    RFID_NOTIFICATION_DOCUMENT_READY: 0x00010001,
    RFID_NOTIFICATION_READ_PROTOCOL4: 0x00010003,
    RFID_NOTIFICATION_READ_PROTOCOL3: 0x0001000A,
    RFID_NOTIFICATION_PROGRESS: 0x0001000B,
    RFID_NOTIFICATION_TA_STEP: 0x0001000E,
    RFID_NOTIFICATION_SM_REQUIRED: 0x0001000F,
    RFID_NOTIFICATION_ISO_ERROR: 0x00011000,
    RFID_NOTIFICATION_PA_REQUEST: 0x00013000,
    RFID_NOTIFICATION_SM_ESTABLISHED: 0x0001400F,
    RFID_NOTIFICATION_PCSC_READER_DISCONNECTED: 0x00020000,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGED: 0x00020001,
    RFID_NOTIFICATION_PCSC_BYTES_RECEIVED: 0x00020002,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_TIME: 0x00020003,
    RFID_NOTIFICATION_PCSC_DATA_RECEIVED: 0x00020004,
    RFID_NOTIFICATION_PCSC_BYTES_SENT: 0x00020005,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_SPEED: 0x00020006,
    RFID_NOTIFICATION_PCSC_TOTAL_PROCESS_TIME: 0x00020007,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGING: 0x00020008,
    RFID_NOTIFICATION_PCSC_EXT_LENGTH_SUPPORT: 0x00020010,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN: 0x00020011,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN_ITEM: 0x00020012,
    RFID_NOTIFICATION_SCENARIO: 0x00020020,
    RFID_NOTIFICATION_PCSC_READING_DATAGROUP: 0x00030000,
    RFID_NOTIFICATION_PCSC_FILE_NOT_FOUND: 0x00040000,
    RFID_NOTIFICATION_PCSC_END_OF_FILE: 0x00050000,
    RFID_NOTIFICATION_PCSC_FILE_ACCESS_DENIED: 0x00060000,
    RFID_NOTIFICATION_PCSC_APPLICATION_SELECTED: 0x00070000,
    RFID_NOTIFICATION_AC_PROCEDURE_START: 0x00080000,
    RFID_NOTIFICATION_AC_PROCEDURE_FINISH: 0x00090000,
    RFID_NOTIFICATION_PA_SECURITY_OBJECT_CHECK: 0x000A0000,
    RFID_NOTIFICATION_PA_FILE_CHECK: 0x000B0000,
    RFID_NOTIFICATION_PCSC_UPDATING_DATAGROUP: 0x000C0000,
    RFID_NOTIFICATION_AUXILIARY_DATA_VALIDATION: 0x000D0000,
    RFID_NOTIFICATION_RI_SECTOR_ID: 0x000E0000,
    RFID_NOTIFICATION_BIOMETRICS_EMPTY_PLACEHOLDER: 0x000F0000,
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
    FIELD_POS_CORRECTOR_PHOTO_REPLACED: 82,
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
    HOLO_PHOTO_DOCUMENT_OUTSIDE_FRAME: 187,
    LIVENESS_DEPTH_CHECK_FAILED: 190,
    MRZ_QUALITY_WRONG_MRZ_DPI: 200,
    MRZ_QUALITY_WRONG_BACKGROUND: 201,
    LAST_DIAGNOSE_VALUE: 210,
}

export const RFIDDelegate = {
    NULL: 0,
    NO_PA: 1,
    FULL: 2,
}

export const ProcessingFinishedStatus = {
    NOT_READY: 0,
    READY: 1,
    TIMEOUT: 2,
}

export const DocFormat = {
    ID1: 0,
    ID2: 1,
    ID3: 2,
    NON: 3,
    A4: 4,
    ID3_x2: 5,
    ID2_TURKEY: 6,
    ID1_90: 10,
    ID1_180: 11,
    ID1_270: 12,
    ID2_180: 13,
    ID3_180: 14,
    CUSTOM: 1000,
    PHOTO: 1001,
    FLEXIBLE: 1002,
    UNKNOWN: -1,
}

export const eLDS_ParsingNotificationCodes = {
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_VERSION: 0x90000001,
    NTF_LDS_ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM: 0x90000002,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_TIME_CODING: 0x90000003,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME: 0x90000004,
    NTF_LDS_ASN_CERTIFICATE_EMPTY_ISSUER: 0x90000005,
    NTF_LDS_ASN_CERTIFICATE_EMPTY_SUBJECT: 0x90000006,
    NTF_LDS_ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION: 0x90000008,
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE: 0x9000000E,
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE: 0x9000000F,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS: 0x90000010,
    NTF_LDS_ASN_CERTIFICATE_DUPLICATING_EXTENSIONS: 0x90000017,
    NTF_LDS_ICAO_CERTIFICATE_VERSION_MISSED: 0x90000200,
    NTF_LDS_ICAO_CERTIFICATE_VERSION_INCORRECT: 0x90000201,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED: 0x90000202,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED: 0x90000203,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT: 0x90000204,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED: 0x90000205,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED: 0x90000206,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT: 0x90000207,
    NTF_LDS_ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA: 0x90000208,
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM: 0x90000209,
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: 0x9000020A,
    NTF_LDS_ICAO_CERTIFICATE_MISSED_EXTENSIONS: 0x9000020B,
    NTF_LDS_ICAO_CERTIFICATE_VALIDITY: 0x9000020C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA: 0x9000020D,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED: 0x9000020E,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL: 0x9000020F,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA: 0x90000210,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_MISSED: 0x90000211,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE1: 0x90000212,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE2: 0x90000213,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_NOT_CRITICAL: 0x90000214,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_DATA: 0x90000215,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_MISSED: 0x90000216,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_INCORRECT: 0x90000217,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL: 0x90000218,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE: 0x90000219,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA: 0x9000021A,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED: 0x9000021B,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA: 0x9000021C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED: 0x9000021D,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED: 0x9000021E,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA: 0x9000021F,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED: 0x90000220,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA: 0x90000221,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY: 0x90000222,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED: 0x90000223,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA: 0x90000224,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY: 0x90000225,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT: 0x90000226,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL: 0x90000228,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY: 0x90000229,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT: 0x9000022A,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT: 0x9000022B,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED: 0x9000022C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA: 0x9000022D,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY: 0x9000022E,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT: 0x9000022F,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL: 0x90000231,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY: 0x90000232,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT: 0x90000233,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT: 0x90000234,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED: 0x90000235,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA: 0x90000236,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION: 0x90000237,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES: 0x90000238,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY: 0x90000239,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA: 0x9000023A,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY: 0x9000023B,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED: 0x9000023C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED: 0x9000023D,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA: 0x9000023E,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY: 0x9000023F,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED: 0x90000240,
    NTF_LDS_ICAO_CERTIFICATE_SN_NON_COMPLIANT: 0x90000241,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT: 0x90000242,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT: 0x90000243,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT: 0x90000244,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT: 0x90000245,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING: 0x90000246,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING: 0x90000247,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA: 0x90000248,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT: 0x90000249,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL: 0x9000024A,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT: 0x9000024B,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL: 0x9000024C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL: 0x9000024D,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT: 0x9000024E,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT: 0x9000024F,
    NTF_LDS_ICAO_COM_LDS_VERSION_INCORRECT: 0x90000020,
    NTF_LDS_ICAO_COM_LDS_VERSION_MISSING: 0x90000021,
    NTF_LDS_ICAO_COM_UNICODE_VERSION_INCORRECT: 0x90000022,
    NTF_LDS_ICAO_COM_UNICODE_VERSION_MISSING: 0x90000023,
    NTF_LDS_ICAO_COM_DGPM_INCORRECT: 0x90000024,
    NTF_LDS_ICAO_COM_DGPM_MISSING: 0x90000025,
    NTF_LDS_ICAO_COM_DGPM_UNEXPECTED: 0x90000026,
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED: 0x90000030,
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED: 0x90000031,
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_INCONSISTENT: 0x90000032,
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT: 0x90000033,
    NTF_LDS_ASN_SIGNED_DATA_OID_INCORRECT: 0x90000100,
    NTF_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT: 0x900001A0,
    NTF_LDS_ASN_SIGNED_DATA_CONTENT_OID_INCORRECT: 0x900001A1,
    NTF_LDS_ICAO_SIGNED_DATA_VERSION_INCORRECT: 0x90000101,
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY: 0x90000102,
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED: 0x90000103,
    NTF_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES: 0x90000109,
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_MISSED: 0x900001B0,
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_EMPTY: 0x900001B1,
    NTF_LDS_ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE: 0x900001B2,
    NTF_LDS_ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID: 0x90000104,
    NTF_LDS_ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT: 0x90000105,
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_MISSING: 0x90000106,
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_EXTRA: 0x90000107,
    NTF_LDS_ICAO_LDS_OBJECT_VERSION_INCORRECT: 0x90000108,
    NTF_LDS_ICAO_MASTER_LIST_VERSION_INCORRECT: 0x900001C0,
    NTF_LDS_ICAO_DEVIATION_LIST_VERSION_INCORRECT: 0x900001C8,
    NTF_LDS_BSI_DEFECT_LIST_VERSION_INCORRECT: 0x900001D0,
    NTF_LDS_BSI_BLACK_LIST_VERSION_INCORRECT: 0x900001D8,
    NTF_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT: 0x9000010A,
    NTF_LDS_ASN_SIGNER_INFO_SID_INCORRECT_CHOICE: 0x9000010B,
    NTF_LDS_ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED: 0x9000010C,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING: 0x9000010D,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA: 0x9000010E,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_Value: 0x9000010F,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING: 0x90000110,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA: 0x90000111,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE: 0x90000112,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING: 0x9000011B,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA: 0x9000011C,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE: 0x9000011D,
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING: 0x9000011E,
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA: 0x9000011F,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY: 0x90000115,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: 0x90000116,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: 0x90000117,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_REVOKED: 0x90000118,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: 0x90000119,
    NTF_LDS_UNSUPPORTED_IMAGE_FORMAT: 0x9000011A,
    NTF_LDS_MRZ_DOCUMENT_TYPE_UNKNOWN: 0x00022008,
    NTF_LDS_MRZ_ISSUING_STATE_SYNTAX_ERROR: 0x00022009,
    NTF_LDS_MRZ_NAME_IS_VOID: 0x0002200A,
    NTF_LDS_MRZ_NUMBER_INCORRECT_CHECKSUM: 0x0002200D,
    NTF_LDS_MRZ_NATIONALITY_SYNTAX_ERROR: 0x0002200E,
    NTF_LDS_MRZ_DOB_SYNTAX_ERROR: 0x0002200F,
    NTF_LDS_MRZ_DOB_ERROR: 0x00022010,
    NTF_LDS_MRZ_DOB_INCORRECT_CHECKSUM: 0x00022011,
    NTF_LDS_MRZ_SEX_INCORRECT: 0x00022012,
    NTF_LDS_MRZ_DOE_SYNTAX_ERROR: 0x00022013,
    NTF_LDS_MRZ_DOE_ERROR: 0x00022014,
    NTF_LDS_MRZ_DOE_INCORRECT_CHECKSUM: 0x00022015,
    NTF_LDS_MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM: 0x00022016,
    NTF_LDS_MRZ_INCORRECT_CHECKSUM: 0x00022017,
    NTF_LDS_MRZ_INCORRECT: 0x00022018,
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_MISSING: 0x90010000,
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_INCORRECT: 0x90020000,
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_MISSING: 0x90030000,
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_INCORRECT: 0x90040000,
    NTF_LDS_BIOMETRICS_TYPE_INCORRECT: 0x90050000,
    NTF_LDS_BIOMETRICS_SUB_TYPE_MISSING: 0x90060000,
    NTF_LDS_BIOMETRICS_SUB_TYPE_INCORRECT: 0x90070000,
    NTF_LDS_BIOMETRICS_BDB_IMAGE_MISSING: 0x90080000,
    NTF_LDS_BIOMETRICS_BDB_FORMAT_ID_INCORRECT: 0x90090000,
    NTF_LDS_BIOMETRICS_BDB_VERSION_INCORRECT: 0x900A0000,
    NTF_LDS_BIOMETRICS_BDB_DATA_LENGTH_INCORRECT: 0x900B0000,
    NTF_LDS_BIOMETRICS_BDB_DATA_GENDER: 0x90100000,
    NTF_LDS_BIOMETRICS_BDB_DATA_EYE_COLOR: 0x90110000,
    NTF_LDS_BIOMETRICS_BDB_DATA_HAIR_COLOR: 0x90120000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW: 0x90130000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH: 0x90140000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL: 0x90150000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW: 0x90160000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH: 0x90170000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL: 0x90180000,
    NTF_LDS_BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE: 0x90190000,
    NTF_LDS_BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE: 0x901A0000,
    NTF_LDS_SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS: 0x91000000,
    NTF_LDS_SI_PACE_INFO_DEPRECATED_VERSION: 0x91000001,
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_USING_STD_REF: 0x91000002,
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: 0x91000003,
    NTF_LDS_SI_CA_INFO_INCORRECT_VERSION: 0x91000004,
    NTF_LDS_SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x91000005,
    NTF_LDS_SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: 0x91000006,
    NTF_LDS_SI_TA_INFO_INCORRECT_VERSION: 0x91000007,
    NTF_LDS_SI_TA_INFO_FILE_ID_FOR_VERSION2: 0x91000008,
    NTF_LDS_SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM: 0x91000009,
    NTF_LDS_SI_RI_INFO_INCORRECT_VERSION: 0x9100000A,
    NTF_LDS_SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: 0x9100000B,
    NTF_LDS_SI_AA_INFO_INCORRECT_VERSION: 0x9100000C,
    NTF_LDS_SI_AA_INFO_UNSUPPORTED_ALGORITHM: 0x9100000D,
    NTF_LDS_SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE: 0x9100000E,
    NTF_LDS_SI_STORAGE_PACE_INFO_NOT_AVAILABLE: 0x91000100,
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS: 0x91000101,
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS: 0x91000102,
    NTF_LDS_SI_STORAGE_CA_INFO_NOT_AVAILABLE: 0x91000103,
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION: 0x91000104,
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE: 0x91000105,
    NTF_LDS_SI_STORAGE_CA_ANONYMOUS_INFOS: 0x91000106,
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS: 0x91000107,
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY: 0x91000108,
    NTF_LDS_SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY: 0x91000109,
    NTF_LDS_SI_STORAGE_TA_INFO_NOT_AVAILABLE: 0x9100010A,
    NTF_LDS_SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES: 0x9100010B,
    NTF_LDS_SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES: 0x9100010C,
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES: 0x9100010D,
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE: 0x9100010E,
    NTF_LDS_SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES: 0x9100010F,
    NTF_LDS_SI_STORAGE_PACE_INFOS_NON_CONSISTANT: 0x91000110,
    NTF_LDS_CV_CERTIFICATE_PROFILE_INCORRECT_VERSION: 0x91000201,
    NTF_LDS_CV_CERTIFICATE_VALIDITY: 0x91000202,
    NTF_LDS_CV_CERTIFICATE_NON_CV_CA_DOMAIN_PARAMETERS: 0x91000203,
    NTF_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION: 0x91000204,
    NTF_LDS_TA_PACE_STATIC_BINDING_USED: 0x91000300,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY: 0x92000115,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: 0x92000116,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: 0x92000117,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED: 0x92000118,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: 0x92000119,

    getTranslation(value: number) {
        switch (value) {
            case this.NTF_LDS_ASN_CERTIFICATE_INCORRECT_VERSION:
                return "Notification - ASN certificate: Incorrect version"
            case this.NTF_LDS_ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM:
                return "Notification - ASN certificate: Non-matching signature algorithm"
            case this.NTF_LDS_ASN_CERTIFICATE_INCORRECT_TIME_CODING:
                return "Notification - ASN certificate: Incorrect time coding"
            case this.NTF_LDS_ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME:
                return "Notification - ASN certificate: Incorrect use of generalized time"
            case this.NTF_LDS_ASN_CERTIFICATE_EMPTY_ISSUER:
                return "Notification - ASN certificate: Empty issuer"
            case this.NTF_LDS_ASN_CERTIFICATE_EMPTY_SUBJECT:
                return "Notification - ASN certificate: Empty subject"
            case this.NTF_LDS_ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION:
                return "Notification - ASN certificate: Unsupported critical extension"
            case this.NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE:
                return "Notification - ASN certificate: Forced default CSCA role"
            case this.NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE:
                return "Notification - ASN certificate: Forced Default DS role"
            case this.NTF_LDS_ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS:
                return "Notification - ASN certificate: Incorrect issuer subject DS"
            case this.NTF_LDS_ASN_CERTIFICATE_DUPLICATING_EXTENSIONS:
                return "Notification - ASN certificate: Duplicating extensions"
            case this.NTF_LDS_ICAO_CERTIFICATE_VERSION_MISSED:
                return "Notification - ICAO certificate: Version missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_VERSION_INCORRECT:
                return "Notification - ICAO certificate: Version incorrect"
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED:
                return "Notification - ICAO certificate: Issuer country missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED:
                return "Notification - ICAO certificate: Issuer common name missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT:
                return "Notification - ICAO certificate: Issuer country non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED:
                return "Notification - ICAO certificate: Subject country missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED:
                return "Notification - ICAO certificate: Subject common name missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject country non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA:
                return "Notification - ICAO certificate: Using non-compliant data"
            case this.NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM:
                return "Notification - ICAO certificate: Unsupported signature algorithm"
            case this.NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM:
                return "Notification - ICAO certificate: Unsupported public key algorithm"
            case this.NTF_LDS_ICAO_CERTIFICATE_MISSED_EXTENSIONS:
                return "Notification - ICAO certificate: Missed extensions"
            case this.NTF_LDS_ICAO_CERTIFICATE_VALIDITY:
                return "Notification - ICAO certificate: Validity"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA:
                return "Notification - ICAO certificate extension: Using non-compliant data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED:
                return "Notification - ICAO certificate extension: Key usage missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL:
                return "Notification - ICAO certificate extension: Key usage not critical"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Key usage incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_MISSED:
                return "Notification - ICAO certificate extension: Basic constraints missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE1:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 1"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE2:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 2"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_NOT_CRITICAL:
                return "Notification - ICAO certificate extension: Basic constraints not critical"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Basic constraints incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_MISSED:
                return "Notification - ICAO certificate extension: Basic constraints path LenC missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_INCORRECT:
                return "Notification - ICAO certificate extension: Basic constraints path LenC incorrect"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL:
                return "Notification - ICAO certificate extension: Ext key usage not critical"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE:
                return "Notification - ICAO certificate extension: Ext key usage incorrect usage"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Ext key usage incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED:
                return "Notification - ICAO certificate extension Auth key: ID missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA:
                return "Notification - ICAO certificate extension Auth key: Incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED:
                return "Notification - ICAO certificate extension Auth key: Key ID missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED:
                return "Notification - ICAO certificate extension: Subject key ID missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Subject key ID incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED:
                return "Notification - ICAO certificate extension: Private key UP missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Private key UP incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY:
                return "Notification - ICAO certificate extension: Private key UP empty"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED:
                return "Notification - ICAO certificate extension: Subject alt name missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Subject alt name incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY:
                return "Notification - ICAO certificate extension: Subject alt name empty"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Subject alt name non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL:
                return "Notification - ICAO certificate extension: Subject alt name critical"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY:
                return "Notification - ICAO certificate extension: Subject alt name DN empty"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT:
                return "Notification - ICAO certificate extension: Subject alt name DN incorrect"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Subject alt name DN non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED:
                return "Notification - ICAO certificate extension: Issuer alt name missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Issuer alt name incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY:
                return "Notification - ICAO certificate extension: Issuer alt name empty"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Issuer alt name non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY:
                return "Notification - ICAO certificate extension: Issuer alt name DN empty"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT:
                return "Notification - ICAO certificate extension: Issuer alt name DN incorrect"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Issuer alt name DN non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED:
                return "Notification - ICAO certificate extension Doc type list: Missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA:
                return "Notification - ICAO certificate extension Doc type list: Incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION:
                return "Notification - ICAO certificate extension Doc type list: Version"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES:
                return "Notification - ICAO certificate extension Doc type list: Doc types"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY:
                return "Notification - ICAO certificate extension Doc type list: Doc types empty"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Dert policies incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY:
                return "Notification - ICAO certificate extension: Cert policies empty"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED:
                return "Notification - ICAO certificate extension: Cert policies policy ID missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED:
                return "Notification - ICAO certificate extension: CRL dist point missed"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: CRL dist point incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY:
                return "Notification - ICAO certificate extension: CRL dist point empty"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED:
                return "Notification - ICAO certificate extension: CRL dist point point missed"
            case this.NTF_LDS_ICAO_COM_LDS_VERSION_INCORRECT:
                return "Notification - ICAO COM: LDS version incorrect"
            case this.NTF_LDS_ICAO_COM_LDS_VERSION_MISSING:
                return "Notification - ICAO COM: LDS version missing"
            case this.NTF_LDS_ICAO_COM_UNICODE_VERSION_INCORRECT:
                return "Notification - ICAO COM: Unicode version incorrect"
            case this.NTF_LDS_ICAO_COM_UNICODE_VERSION_MISSING:
                return "Notification - ICAO COM: Unicode version missing"
            case this.NTF_LDS_ICAO_COM_DGPM_INCORRECT:
                return "Notification - ICAO COM: DGPM incorrect"
            case this.NTF_LDS_ICAO_COM_DGPM_MISSING:
                return "Notification - ICAO COM: DGPM missing"
            case this.NTF_LDS_ICAO_COM_DGPM_UNEXPECTED:
                return "Notification - ICAO COM: DGPM unexpected"
            case this.NTF_LDS_ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED:
                return "Notification - ICAO application: LDS version unsupported"
            case this.NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED:
                return "Notification - ICAO application: Unicode version unsupported"
            case this.NTF_LDS_ICAO_APPLICATION_LDS_VERSION_INCONSISTENT:
                return "Notification - ICAO application: LDS version inconsistent"
            case this.NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT:
                return "Notification - ICAO application: Unicode version inconsistent"
            case this.NTF_LDS_ASN_SIGNED_DATA_OID_INCORRECT:
                return "Notification - ASN signed data: OID incorrect"
            case this.NTF_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT:
                return "Notification - ASN signed data: Version incorrect"
            case this.NTF_LDS_ICAO_SIGNED_DATA_VERSION_INCORRECT:
                return "Notification - ICAO signed data: Version incorrect"
            case this.NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY:
                return "Notification - ICAO signed data: Digest algorithms empty"
            case this.NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED:
                return "Notification - ICAO signed data: Digest algorithms unsupported"
            case this.NTF_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES:
                return "Notification - ICAO signed data: Signer infos multiple entries"
            case this.NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_MISSED:
                return "Notification - ICAO signed data: Certificates missed"
            case this.NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_EMPTY:
                return "Notification - ICAO signed data: Certificates empty"
            case this.NTF_LDS_ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE:
                return "Notification - ICAO signed data: CRLs incorrect usage"
            case this.NTF_LDS_ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID:
                return "Notification - ICAO LDS object: Incorrect content OID"
            case this.NTF_LDS_ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT:
                return "Notification - ICAO LDS object: DG number incorrect"
            case this.NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_MISSING:
                return "Notification - ICAO LDS object: DG hash missing"
            case this.NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_EXTRA:
                return "Notification - ICAO LDS object: DG hash extra"
            case this.NTF_LDS_ICAO_LDS_OBJECT_VERSION_INCORRECT:
                return "Notification - ICAO LDS object: Version incorrect"
            case this.NTF_LDS_ICAO_MASTER_LIST_VERSION_INCORRECT:
                return "Notification - ICAO master list: Version incorrect"
            case this.NTF_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT:
                return "Notification - ASN signer info: Version incorrect"
            case this.NTF_LDS_ASN_SIGNER_INFO_SID_INCORRECT_CHOICE:
                return "Notification - ASN signer info: SID incorrect choice"
            case this.NTF_LDS_ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED:
                return "Notification - ASN signer info: SID digest algorithm not listed"
            case this.NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING:
                return "Notification - ASN signer info: Message digest attr missing"
            case this.NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA:
                return "Notification - ASN signer info: Message digest attr data"
            case this.NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_Value:
                return "Notification - ASN signer info: Message digest attr value"
            case this.NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING:
                return "Notification - ASN signer info: Content type attr missing"
            case this.NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA:
                return "Notification - ASN signer info: Content type attr data"
            case this.NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE:
                return "Notification - ASN signer info: Content type attr value"
            case this.NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING:
                return "Notification - ASN signer info: Signing time attr missing"
            case this.NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA:
                return "Notification - ASN signer info: Signing time attr data"
            case this.NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE:
                return "Notification - ASN signer info: Signing time attr value"
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY:
                return "Notification - Auth signer info: Certificate validity"
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED:
                return "Notification - Auth signer info: Certificate root is not trusted"
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA:
                return "Notification - Auth signer info: Certificate cannot find CSCA"
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_REVOKED:
                return "Notification - Auth signer info: Certificate revoked"
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID:
                return "Notification - Auth signer info: Certificate signature invalid"
            case this.NTF_LDS_UNSUPPORTED_IMAGE_FORMAT:
                return "Notification: Unsupported image format"
            case this.NTF_LDS_MRZ_DOCUMENT_TYPE_UNKNOWN:
                return "Notification - MRZ: Document type unknown"
            case this.NTF_LDS_MRZ_ISSUING_STATE_SYNTAX_ERROR:
                return "Notification - MRZ: Issuing state syntax error"
            case this.NTF_LDS_MRZ_NAME_IS_VOID:
                return "Notification - MRZ: Name is void"
            case this.NTF_LDS_MRZ_NUMBER_INCORRECT_CHECKSUM:
                return "Notification - MRZ: Number incorrect checksum"
            case this.NTF_LDS_MRZ_NATIONALITY_SYNTAX_ERROR:
                return "Notification - MRZ: Nationality syntax error"
            case this.NTF_LDS_MRZ_DOB_SYNTAX_ERROR:
                return "Notification - MRZ: DOB syntax error"
            case this.NTF_LDS_MRZ_DOB_ERROR:
                return "Notification - MRZ: DOB error"
            case this.NTF_LDS_MRZ_DOB_INCORRECT_CHECKSUM:
                return "Notification - MRZ: DOB incorrect checksum"
            case this.NTF_LDS_MRZ_SEX_INCORRECT:
                return "Notification - MRZ: Sex incorrect"
            case this.NTF_LDS_MRZ_DOE_SYNTAX_ERROR:
                return "Notification - MRZ: DOE syntax error"
            case this.NTF_LDS_MRZ_DOE_ERROR:
                return "Notification - MRZ: DOE error"
            case this.NTF_LDS_MRZ_DOE_INCORRECT_CHECKSUM:
                return "Notification - MRZ: DOE incorrect checksum"
            case this.NTF_LDS_MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM:
                return "Notification - MRZ: Optional data incorrect checksum"
            case this.NTF_LDS_MRZ_INCORRECT_CHECKSUM:
                return "Notification - MRZ: Incorrect checksum"
            case this.NTF_LDS_MRZ_INCORRECT:
                return "Notification - MRZ: Incorrect"
            case this.NTF_LDS_BIOMETRICS_FORMAT_OWNER_MISSING:
                return "Notification - Biometrics: Format owner missing"
            case this.NTF_LDS_BIOMETRICS_FORMAT_OWNER_INCORRECT:
                return "Notification - Biometrics: Format owner incorrect"
            case this.NTF_LDS_BIOMETRICS_FORMAT_TYPE_MISSING:
                return "Notification - Biometrics: Format type missing"
            case this.NTF_LDS_BIOMETRICS_FORMAT_TYPE_INCORRECT:
                return "Notification - Biometrics: Format type incorrect"
            case this.NTF_LDS_BIOMETRICS_TYPE_INCORRECT:
                return "Notification - Biometrics: Type incorrect"
            case this.NTF_LDS_BIOMETRICS_SUB_TYPE_MISSING:
                return "Notification - Biometrics: Subtype missing"
            case this.NTF_LDS_BIOMETRICS_SUB_TYPE_INCORRECT:
                return "Notification - Biometrics: Subtype incorrect"
            case this.NTF_LDS_BIOMETRICS_BDB_IMAGE_MISSING:
                return "Notification - Biometrics: BDB image missing"
            case this.NTF_LDS_BIOMETRICS_BDB_FORMAT_ID_INCORRECT:
                return "Notification - Biometrics: BDB format ID incorrect"
            case this.NTF_LDS_BIOMETRICS_BDB_VERSION_INCORRECT:
                return "Notification - Biometrics: BDB version incorrect"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_LENGTH_INCORRECT:
                return "Notification - Biometrics: BDB data length incorrect"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_GENDER:
                return "Notification - Biometrics: BDB Data Gender"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_EYE_COLOR:
                return "Notification - Biometrics: BDB Data Eye Color"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_HAIR_COLOR:
                return "Notification - Biometrics: BDB Data Hair Color"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW:
                return "Notification - Biometrics: BDB Data Pose Angle Yaw"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH:
                return "Notification - Biometrics: BDB Data Pose Angle Pitch"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL:
                return "Notification - Biometrics: BDB Data Pose Angle Roll"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW:
                return "Notification - Biometrics: BDB Data Pose Angle U Yaw"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH:
                return "Notification - Biometrics: BDB Data Pose Angle U Pitch"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL:
                return "Notification - Biometrics: BDB Data Pose Angle U Roll"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE:
                return "Notification - Biometrics: BDB Data Face Image Type"
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE:
                return "Notification - Biometrics: BDB Data Image Data Type"
            case this.NTF_LDS_SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS:
                return "Notification - SI: PACE Info Unsupported Std Parameters"
            case this.NTF_LDS_SI_PACE_INFO_DEPRECATED_VERSION:
                return "Notification - SI: PACE Info Deprecated Version"
            case this.NTF_LDS_SI_PACE_DOMAIN_PARAMS_USING_STD_REF:
                return "Notification - SI: PACE Domain Params Using Std Ref"
            case this.NTF_LDS_SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: PACE Domain Params Unsupported Algorithm"
            case this.NTF_LDS_SI_CA_INFO_INCORRECT_VERSION:
                return "Notification - SI: CA Info Incorrect Version"
            case this.NTF_LDS_SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: CA PublicKey Unsupported Algorithm"
            case this.NTF_LDS_SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: CA Domain Params Unsupported Algorithm"
            case this.NTF_LDS_SI_TA_INFO_INCORRECT_VERSION:
                return "Notification - SI: TA Info Incorrect Version"
            case this.NTF_LDS_SI_TA_INFO_FILE_ID_FOR_VERSION2:
                return "Notification - SI: TA Info File ID For Version 2"
            case this.NTF_LDS_SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Notification - SI: eID Security Unsupported Digest Algorithm"
            case this.NTF_LDS_SI_RI_INFO_INCORRECT_VERSION:
                return "Notification - SI: RI info incorrect version"
            case this.NTF_LDS_SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: RI domain params unsupported algorithm"
            case this.NTF_LDS_SI_AA_INFO_INCORRECT_VERSION:
                return "Notification - SI: AA info incorrect version"
            case this.NTF_LDS_SI_AA_INFO_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: AA info unsupported algorithm"
            case this.NTF_LDS_SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE:
                return "Notification - SI: AA info inconsistent algorithm reference"
            case this.NTF_LDS_SI_STORAGE_PACE_INFO_NOT_AVAILABLE:
                return "Notification - SI: PACE Info Not Available"
            case this.NTF_LDS_SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS:
                return "Notification - SI: PACE Info No Std Parameters"
            case this.NTF_LDS_SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS:
                return "Notification - SI: PACE Info No Matching Domain Params"
            case this.NTF_LDS_SI_STORAGE_CA_INFO_NOT_AVAILABLE:
                return "Notification - SI: CA Info Not Available"
            case this.NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION:
                return "Notification - SI: CA Domain Params No Required Option"
            case this.NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE:
                return "Notification - SI: CA Domain Params Not Available"
            case this.NTF_LDS_SI_STORAGE_CA_ANONYMOUS_INFOS:
                return "Notification - SI: CA Anonymous Infos"
            case this.NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS:
                return "Notification - SI: CA Info No Matching Domain Params"
            case this.NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY:
                return "Notification - SI: CA Info No Matching Public Key"
            case this.NTF_LDS_SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY:
                return "Notification - SI: CA Incorrect Infos Quantity"
            case this.NTF_LDS_SI_STORAGE_TA_INFO_NOT_AVAILABLE:
                return "Notification - SI: TA Info Not Available"
            case this.NTF_LDS_SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES:
                return "Notification - SI: Card Info Locator Multiple Entries"
            case this.NTF_LDS_SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES:
                return "Notification - SI: eID Security Info Multiple Entries"
            case this.NTF_LDS_SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES:
                return "Notification - SI: Privileged TI Multiple Entries"
            case this.NTF_LDS_SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE:
                return "Notification - SI: Privileged TI Incorrect Usage"
            case this.NTF_LDS_SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES:
                return "Notification - SI: RI domain params multiple entries"
            case this.NTF_LDS_SI_STORAGE_PACE_INFOS_NON_CONSISTANT:
                return "Notification - SI: Storage PACE Info Non Consistant"
            case this.NTF_LDS_CV_CERTIFICATE_PROFILE_INCORRECT_VERSION:
                return "Notification - CV Certificate: Profile incorrect version"
            case this.NTF_LDS_CV_CERTIFICATE_VALIDITY:
                return "Notification - CV Certificate: Validity"
            case this.NTF_LDS_CV_CERTIFICATE_NON_CV_CA_DOMAIN_PARAMETERS:
                return "Notification - CV Certificate: Non CVCA domain parameters"
            case this.NTF_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION:
                return "Notification - CV Certificate: Private key incorrect version"
            case this.NTF_LDS_TA_PACE_STATIC_BINDING_USED:
                return "Notification - TA: PACE static binding used"
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY:
                return "Notification - Auth ML signer info: Certificate validity"
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED:
                return "Notification - Auth ML signer info: Certificate root is not trusted"
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA:
                return "Notification - Auth ML signer info: Certificate cannot find CSCA"
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED:
                return "Notification - Auth ML signer info: Certificate revoked"
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID:
                return "Notification - Auth ML signer info: Certificate signature invalid"
            case this.NTF_LDS_ASN_SIGNED_DATA_CONTENT_OID_INCORRECT:
                return "Notification - ASN signed data: Content OID incorrect"
            case this.NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA:
                return "Notification - ASN signer info: List content description attr data"
            case this.NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING:
                return "Notification - ASN signer info: List content description attr missing"
            case this.NTF_LDS_BSI_BLACK_LIST_VERSION_INCORRECT:
                return "Notification - BSI: Black list version incorrect"
            case this.NTF_LDS_BSI_DEFECT_LIST_VERSION_INCORRECT:
                return "Notification - BSI: Defect  list version incorrect"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING:
                return "Notification - ICAO certificate extension: CSCA alt names non-matching"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL:
                return "Notification - ICAO certificate extension Doc type list: Critical"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT:
                return "Notification - ICAO certificate extension Doc type list: non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL:
                return "Notification - ICAO certificate extension: Issuer alt name critical"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL:
                return "Notification - ICAO certificate extension: Name change critical"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Name change incorrect data"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Name change non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL:
                return "Notification - ICAO certificate extension: Optional critical"
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT:
                return "Notification - ICAO certificate: Issuer attribute non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT:
                return "Notification - ICAO certificate: Issuer SN non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING:
                return "Notification - ICAO certificate: Issuer subject country non-matching"
            case this.NTF_LDS_ICAO_CERTIFICATE_SN_NON_COMPLIANT:
                return "Notification - ICAO certificate: SN non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject attribute non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject common name non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject non-compliant"
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject SN non-compliant"
            case this.NTF_LDS_ICAO_DEVIATION_LIST_VERSION_INCORRECT:
                return "Notification - ICAO Deviation list: Version incorrect"
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

export const MRZFormat = {
    FORMAT_1X30: "1x30",
    FORMAT_3X30: "3x30",
    FORMAT_2X36: "2x36",
    FORMAT_2X44: "2x44",
    FORMAT_1X6: "1x6",
    FORMAT_2X30: "2x30",
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

export const OnlineMode = {
    MANUAL: 0,
    AUTO: 1,
}

export const eRFID_SDK_ProfilerType = {
    SPT_DOC_9303_EDITION_2006: 0x00000001,
    SPT_DOC_9303_LDS_PKI_MAINTENANCE: 0x00000002,
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

export const HoloAnimationType = {
    DocumentHoloAnimationUnknown: 0,
    DocumentHoloAnimationTypeHorizontal: 1,
    DocumentHoloAnimationTypeVertical: 2,
    DocumentHoloAnimationTypeLeftBottomRightTop: 4,
    DocumentHoloAnimationTypeRightBottomLeftTop: 8,
}

export const eRequestCommand = {
    eReqCmd_RFid_SendData: 100,
    eReqCmd_RFid_Notify: 101,
    eReqCmd_RFid_GetDataForScenario: 102,
    eReqCmd_Torch_GetUVFoto: 200,
    eReqCmd_InternetSend: 300,
    eReqCmd_GetGuid: 400,
    eReqCmd_WltToImage: 401,
}

export const ImageFormat = {
    PNG: 0,
    JPG: 1,
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

export const CameraMode = {
    AUTO: 0,
    CAMERA1: 1,
    CAMERA2: 2,
}

export const CaptureMode = {
    AUTO: 0,
    CAPTURE_VIDEO: 1,
    CAPTURE_FRAME: 2,
}

export const eCheckResult = {
    CH_CHECK_ERROR: 0,
    CH_CHECK_OK: 1,
    CH_CHECK_WAS_NOT_DONE: 2,
}

export const eRFID_TerminalType = {
    TET_UNDEFINED: 0,
    TET_INSPECTION_SYSTEM: 1,
    TET_AUTHENTICATION_TERMINAL: 2,
    TET_SIGNATURE_TERMINAL: 3,
    TET_UNAUTHENTICATED_TERMINAL: 4,
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
    DFT_SAM_DATA_MAX: 800 + 32,
    DFT_VDS: 900,
    DFT_VDSNC: 901,
    DFT_USERDEFINED: 1000,

    getTranslation(value: number) {
        switch (value) {
            case this.DFT_MIFARE_DATA:
                return "MIFARE data"
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
                return "App directory"
            case this.DFT_ATR:
                return "DFT_ATR"
            case this.DFT_CHIP_PROPERTIES:
                return "DFT_CHIP_PROPERTIES"
            case this.DFT_DEFECTLIST:
                return "DFT_DEFECTLIST"
            case this.DFT_DEVIATIONLIST:
                return "DFT_DEVIATIONLIST"
            case this.DFT_DL_CE:
                return "DFT_DL_CE"
            case this.DFT_DL_CVCA:
                return "DFT_DL_CVCA"
            case this.DFT_ESIGN_PK:
                return "DFT_ESIGN_PK"
            case this.DFT_ESIGN_SIGNEDDATA:
                return "DFT_ESIGN_SIGNEDDATA"
            case this.DFT_LOGDATA:
                return "DFT_LOGDATA"
            case this.DFT_MASTERLIST:
                return "DFT_MASTERLIST"
            case this.DFT_SESSION:
                return "DFT_SESSION"
            case this.DFT_UNSPECIFIED:
                return "DFT_UNSPECIFIED"
            case this.DFT_USERDEFINED:
                return "DFT_USERDEFINED"
            default:
                return value.toString()
        }
    }
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
            case this.FT_DOCUMENT_CLASS_CODE:
                return "Document class code"
            case this.FT_ISSUING_STATE_CODE:
                return "Issuing state code"
            case this.FT_DOCUMENT_NUMBER:
                return "Document number"
            case this.FT_DATE_OF_EXPIRY:
                return "Date of expiry"
            case this.FT_DATE_OF_ISSUE:
                return "Date of issue"
            case this.FT_DATE_OF_BIRTH:
                return "Date of birth"
            case this.FT_PLACE_OF_BIRTH:
                return "Place of birth"
            case this.FT_PERSONAL_NUMBER:
                return "Personal number"
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
                return "Hair color"
            case this.FT_ADDRESS:
                return "Address"
            case this.FT_DONOR:
                return "Donor"
            case this.FT_SOCIAL_SECURITY_NUMBER:
                return "Social insurance number"
            case this.FT_DL_CLASS:
                return "DL category"
            case this.FT_DL_ENDORSED:
                return "DL endorsement code"
            case this.FT_DL_RESTRICTION_CODE:
                return "DL Restriction Code"
            case this.FT_DL_UNDER_21_DATE:
                return "Date of 21st birthday"
            case this.FT_AUTHORITY:
                return "Issuing authority"
            case this.FT_SURNAME_AND_GIVEN_NAMES:
                return "Surname and given names"
            case this.FT_NATIONALITY_CODE:
                return "Nationality code"
            case this.FT_PASSPORT_NUMBER:
                return "Passport number"
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
                return "Document class"
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
                return "Checksum for personal number"
            case this.FT_FINAL_CHECKSUM:
                return "Final checksum"
            case this.FT_PASSPORT_NUMBER_CHECKSUM:
                return "Checksum for passport number"
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
                return "Country/region of birth"
            case this.FT_PLACE_OF_BIRTH_STATE_CODE:
                return "Birth state code"
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
                return "Check digit for personal number"
            case this.FT_FINAL_CHECK_DIGIT:
                return "Final check digit"
            case this.FT_PASSPORT_NUMBER_CHECK_DIGIT:
                return "Check digit for passport number"
            case this.FT_INVITATION_NUMBER_CHECK_DIGIT:
                return "Check digit for invitation number"
            case this.FT_VISA_ID_CHECK_DIGIT:
                return "Check digit for visa ID"
            case this.FT_SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT:
                return "Check digit for surname and given names"
            case this.FT_VISA_VALID_UNTIL_CHECK_DIGIT:
                return "Check digit for visa expiry date"
            case this.FT_PERMIT_DL_CLASS:
                return "Permit class"
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
                return "Medical notes/codes"
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
                return "Unique customer identifier"
            case this.FT_COMMERCIAL_VEHICLE_CODES:
                return "Commercial vehicle code"
            case this.FT_AKA_DATE_OF_BIRTH:
                return "AKA: Date of birth"
            case this.FT_AKA_SOCIAL_SECURITY_NUMBER:
                return "AKA: Social Insurance Number"
            case this.FT_AKA_SURNAME:
                return "AKA: Surname"
            case this.FT_AKA_GIVEN_NAMES:
                return "AKA: Given name"
            case this.FT_AKA_NAME_SUFFIX:
                return "AKA: Name suffix"
            case this.FT_AKA_NAME_PREFIX:
                return "AKA: Name prefix"
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
                return "Control number"
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
                return "AKA: Surname and given names"
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
                return "Date of duplicate issue"
            case this.FT_DL_ISS_TYPE:
                return "Card type"
            case this.FT_MILITARY_BOOK_NUMBER:
                return "Military ID number"
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
                return "Place of birth: Street"
            case this.FT_E_ID_PLACE_OF_BIRTH_CITY:
                return "Place of birth: City"
            case this.FT_E_ID_PLACE_OF_BIRTH_STATE:
                return "Place of birth: State"
            case this.FT_E_ID_PLACE_OF_BIRTH_COUNTRY:
                return "Place of birth: Country"
            case this.FT_E_ID_PLACE_OF_BIRTH_ZIPCODE:
                return "Place of birth: Postal code"
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
                return "EQV code"
            case this.FT_ALT_CODE:
                return "ALT code"
            case this.FT_BINARY_CODE:
                return "Binary code"
            case this.FT_PSEUDO_CODE:
                return "Pseudocode"
            case this.FT_FEE:
                return "Fee"
            case this.FT_STAMP_NUMBER:
                return "Stamp number"
            case this.FT_GNIB_NUMBER:
                return "GNIB number"
            case this.FT_DEPT_NUMBER:
                return "Department number"
            case this.FT_TELEX_CODE:
                return "Telegraph code"
            case this.FT_ALLERGIES:
                return "Allergies"
            case this.FT_SP_CODE:
                return "Special code"
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
                return "DUF number"
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
                return "CCW until"
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
                return "Frequent flyer airline designator"
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
                return "DL category A1 valid from"
            case this.FT_DL_CLASS_CODE_A_1_TO:
                return "DL category A1 valid to"
            case this.FT_DL_CLASS_CODE_A_1_NOTES:
                return "DL category A1 codes"
            case this.FT_DL_CLASS_CODE_A_FROM:
                return "DL category A valid from"
            case this.FT_DL_CLASS_CODE_A_TO:
                return "DL category A valid to"
            case this.FT_DL_CLASS_CODE_A_NOTES:
                return "DL category A codes"
            case this.FT_DL_CLASS_CODE_B_FROM:
                return "DL category B valid from"
            case this.FT_DL_CLASS_CODE_B_TO:
                return "DL category B valid to"
            case this.FT_DL_CLASS_CODE_B_NOTES:
                return "DL category B codes"
            case this.FT_DL_CLASS_CODE_C_1_FROM:
                return "DL category C1 valid from"
            case this.FT_DL_CLASS_CODE_C_1_TO:
                return "DL category C1 valid to"
            case this.FT_DL_CLASS_CODE_C_1_NOTES:
                return "DL category C1 codes"
            case this.FT_DL_CLASS_CODE_C_FROM:
                return "DL category C valid from"
            case this.FT_DL_CLASS_CODE_C_TO:
                return "DL category C valid to"
            case this.FT_DL_CLASS_CODE_C_NOTES:
                return "DL category C codes"
            case this.FT_DL_CLASS_CODE_D_1_FROM:
                return "DL category D1 valid from"
            case this.FT_DL_CLASS_CODE_D_1_TO:
                return "DL category D1 valid to"
            case this.FT_DL_CLASS_CODE_D_1_NOTES:
                return "DL category D1 codes"
            case this.FT_DL_CLASS_CODE_D_FROM:
                return "DL category D valid from"
            case this.FT_DL_CLASS_CODE_D_TO:
                return "DL category D valid to"
            case this.FT_DL_CLASS_CODE_D_NOTES:
                return "DL category D codes"
            case this.FT_DL_CLASS_CODE_BE_FROM:
                return "DL category BE valid from"
            case this.FT_DL_CLASS_CODE_BE_TO:
                return "DL category BE valid to"
            case this.FT_DL_CLASS_CODE_BE_NOTES:
                return "DL category BE codes"
            case this.FT_DL_CLASS_CODE_C_1_E_FROM:
                return "DL category C1E valid from"
            case this.FT_DL_CLASS_CODE_C_1_E_TO:
                return "DL category C1E valid to"
            case this.FT_DL_CLASS_CODE_C_1_E_NOTES:
                return "DL category C1E codes"
            case this.FT_DL_CLASS_CODE_CE_FROM:
                return "DL category CE valid from"
            case this.FT_DL_CLASS_CODE_CE_TO:
                return "DL category CE valid to"
            case this.FT_DL_CLASS_CODE_CE_NOTES:
                return "DL category CE codes"
            case this.FT_DL_CLASS_CODE_D_1_E_FROM:
                return "DL category D1E valid from"
            case this.FT_DL_CLASS_CODE_D_1_E_TO:
                return "DL category D1E valid to"
            case this.FT_DL_CLASS_CODE_D_1_E_NOTES:
                return "DL category D1E codes"
            case this.FT_DL_CLASS_CODE_DE_FROM:
                return "DL category DE valid from"
            case this.FT_DL_CLASS_CODE_DE_TO:
                return "DL category DE valid to"
            case this.FT_DL_CLASS_CODE_DE_NOTES:
                return "DL category DE codes"
            case this.FT_DL_CLASS_CODE_M_FROM:
                return "DL category M valid from"
            case this.FT_DL_CLASS_CODE_M_TO:
                return "DL category M valid to"
            case this.FT_DL_CLASS_CODE_M_NOTES:
                return "DL category M codes"
            case this.FT_DL_CLASS_CODE_L_FROM:
                return "DL category L valid from"
            case this.FT_DL_CLASS_CODE_L_TO:
                return "DL category L valid to"
            case this.FT_DL_CLASS_CODE_L_NOTES:
                return "DL category L codes"
            case this.FT_DL_CLASS_CODE_T_FROM:
                return "DL category T valid from"
            case this.FT_DL_CLASS_CODE_T_TO:
                return "DL category T valid to"
            case this.FT_DL_CLASS_CODE_T_NOTES:
                return "DL category T codes"
            case this.FT_DL_CLASS_CODE_AM_FROM:
                return "DL category AM valid from"
            case this.FT_DL_CLASS_CODE_AM_TO:
                return "DL category AM valid to"
            case this.FT_DL_CLASS_CODE_AM_NOTES:
                return "DL category AM codes"
            case this.FT_DL_CLASS_CODE_A_2_FROM:
                return "DL category A2 valid from"
            case this.FT_DL_CLASS_CODE_A_2_TO:
                return "DL category A2 valid to"
            case this.FT_DL_CLASS_CODE_A_2_NOTES:
                return "DL category A2 codes"
            case this.FT_DL_CLASS_CODE_B_1_FROM:
                return "DL category B1 valid from"
            case this.FT_DL_CLASS_CODE_B_1_TO:
                return "DL category B1 valid to"
            case this.FT_DL_CLASS_CODE_B_1_NOTES:
                return "DL category B1 codes"
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
                return "Power-to-weight ratio"
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
                return "Number of axles"
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
                return "Other than tanks"
            case this.FT_FAST_TRACK:
                return "Fast Track service"
            case this.FT_OWNER:
                return "Owner"
            case this.FT_MRZ_STRINGS_ICAO_RFID:
                return "MRZ lines from ICAO RFID"
            case this.FT_NUMBER_OF_CARD_ISSUANCE:
                return "Number of card issuances"
            case this.FT_NUMBER_OF_CARD_ISSUANCE_CHECKSUM:
                return "Checksum for number of card issuances"
            case this.FT_NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT:
                return "Check digit for number of card issuances"
            case this.FT_CENTURY_DATE_OF_BIRTH:
                return "Century of birth"
            case this.FT_DL_CLASSCODE_A3_FROM:
                return "DL category A3 valid from"
            case this.FT_DL_CLASSCODE_A3_TO:
                return "DL category A3 valid to"
            case this.FT_DL_CLASSCODE_A3_NOTES:
                return "DL category A3 codes"
            case this.FT_DL_CLASSCODE_C2_FROM:
                return "DL category C2 valid from"
            case this.FT_DL_CLASSCODE_C2_TO:
                return "DL category C2 valid to"
            case this.FT_DL_CLASSCODE_C2_NOTES:
                return "DL category C2 codes"
            case this.FT_DL_CLASSCODE_B2_FROM:
                return "DL category B2 valid from"
            case this.FT_DL_CLASSCODE_B2_TO:
                return "DL category B2 valid to"
            case this.FT_DL_CLASSCODE_B2_NOTES:
                return "DL category B2 codes"
            case this.FT_DL_CLASSCODE_D2_FROM:
                return "DL category D2 valid from"
            case this.FT_DL_CLASSCODE_D2_TO:
                return "DL category D2 valid to"
            case this.FT_DL_CLASSCODE_D2_NOTES:
                return "DL category D2 codes"
            case this.FT_DL_CLASSCODE_B2E_FROM:
                return "DL category B2E valid from"
            case this.FT_DL_CLASSCODE_B2E_TO:
                return "DL category B2E valid to"
            case this.FT_DL_CLASSCODE_B2E_NOTES:
                return "DL category B2E codes"
            case this.FT_DL_CLASSCODE_G_FROM:
                return "DL category G valid from"
            case this.FT_DL_CLASSCODE_G_TO:
                return "DL category G valid to"
            case this.FT_DL_CLASSCODE_G_NOTES:
                return "DL category G codes"
            case this.FT_DL_CLASSCODE_J_FROM:
                return "DL category J valid from"
            case this.FT_DL_CLASSCODE_J_TO:
                return "DL category J valid to"
            case this.FT_DL_CLASSCODE_J_NOTES:
                return "DL category J codes"
            case this.FT_DL_CLASSCODE_LC_FROM:
                return "DL category LC valid from"
            case this.FT_DL_CLASSCODE_LC_TO:
                return "DL category LC valid to"
            case this.FT_DLC_LASSCODE_LC_NOTES:
                return "DL category LC codes"
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
                return "DS certificate issuer"
            case this.FT_DS_CERTIFICATE_SUBJECT:
                return "DS certificate subject"
            case this.FT_DS_CERTIFICATE_VALIDFROM:
                return "DS certificate valid from"
            case this.FT_DS_CERTIFICATE_VALIDTO:
                return "DS certificate valid to"
            case this.FT_VRC_DATAOBJECT_ENTRY:
                return "Vehicle data from the DG1 data group"
            case this.FT_GRANDFATHERNAME:
                return "Grandfather\'s name"
            case this.FT_HEALTH_NUMBER:
                return "Health insurance number"
            case this.FT_TYPE_APPROVAL_NUMBER:
                return "Type of approval number"
            case this.FT_ADMINISTRATIVE_NUMBER:
                return "Administrative number"
            case this.FT_DOCUMENT_DISCRIMINATOR:
                return "Document discriminator"
            case this.FT_DATA_DISCRIMINATOR:
                return "Data discriminator"
            case this.FT_ISO_ISSUER_ID_NUMBER:
                return "ID number of ISO issuer"
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
                return "Mother\'s personal number"
            case this.FT_FATHER_PERSONALNUMBER:
                return "Father\'s personal number"
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
                return "DL category BTP valid from"
            case this.FT_DLCLASSCODE_BTP_NOTES:
                return "DL category BTP codes"
            case this.FT_DLCLASSCODE_BTP_TO:
                return "DL category BTP valid to"
            case this.FT_DLCLASSCODE_C3_FROM:
                return "DL category C3 valid from"
            case this.FT_DLCLASSCODE_C3_NOTES:
                return "DL category C3 codes"
            case this.FT_DLCLASSCODE_C3_TO:
                return "DL category C3 valid to"
            case this.FT_DLCLASSCODE_E_FROM:
                return "DL category E valid from"
            case this.FT_DLCLASSCODE_E_NOTES:
                return "DL category E codes"
            case this.FT_DLCLASSCODE_E_TO:
                return "DL category E valid to"
            case this.FT_DLCLASSCODE_F_FROM:
                return "DL category F valid from"
            case this.FT_DLCLASSCODE_F_NOTES:
                return "DL category F codes"
            case this.FT_DLCLASSCODE_F_TO:
                return "DL category F valid to"
            case this.FT_DLCLASSCODE_FA_FROM:
                return "DL category FA valid from"
            case this.FT_DLCLASSCODE_FA_NOTES:
                return "DL category FA codes"
            case this.FT_DLCLASSCODE_FA_TO:
                return "DL category FA valid to"
            case this.FT_DLCLASSCODE_FA1_FROM:
                return "DL category FA1 valid from"
            case this.FT_DLCLASSCODE_FA1_NOTES:
                return "DL category FA1 codes"
            case this.FT_DLCLASSCODE_FA1_TO:
                return "DL category FA1 valid to"
            case this.FT_DLCLASSCODE_FB_FROM:
                return "DL category FB valid from"
            case this.FT_DLCLASSCODE_FB_NOTES:
                return "DL category FB codes"
            case this.FT_DLCLASSCODE_FB_TO:
                return "DL category FB valid to"
            case this.FT_DLCLASSCODE_G1_FROM:
                return "DL category G1 valid from"
            case this.FT_DLCLASSCODE_G1_NOTES:
                return "DL category G1 codes"
            case this.FT_DLCLASSCODE_G1_TO:
                return "DL category G1 valid to"
            case this.FT_DLCLASSCODE_H_FROM:
                return "DL category H valid from"
            case this.FT_DLCLASSCODE_H_NOTES:
                return "DL category H codes"
            case this.FT_DLCLASSCODE_H_TO:
                return "DL category H valid to"
            case this.FT_DLCLASSCODE_I_FROM:
                return "DL category I valid from"
            case this.FT_DLCLASSCODE_I_NOTES:
                return "DL category I codes"
            case this.FT_DLCLASSCODE_I_TO:
                return "DL category I valid to"
            case this.FT_DLCLASSCODE_K_FROM:
                return "DL category K valid from"
            case this.FT_DLCLASSCODE_K_NOTES:
                return "DL category K codes"
            case this.FT_DLCLASSCODE_K_TO:
                return "DL category K valid to"
            case this.FT_DLCLASSCODE_LK_FROM:
                return "DL category LK valid from"
            case this.FT_DLCLASSCODE_LK_NOTES:
                return "DL category LK codes"
            case this.FT_DLCLASSCODE_LK_TO:
                return "DL category LK valid to"
            case this.FT_DLCLASSCODE_N_FROM:
                return "DL category N valid from"
            case this.FT_DLCLASSCODE_N_NOTES:
                return "DL category N codes"
            case this.FT_DLCLASSCODE_N_TO:
                return "DL category N valid to"
            case this.FT_DLCLASSCODE_S_FROM:
                return "DL category S valid from"
            case this.FT_DLCLASSCODE_S_NOTES:
                return "DL category S codes"
            case this.FT_DLCLASSCODE_S_TO:
                return "DL category S valid to"
            case this.FT_DLCLASSCODE_TB_FROM:
                return "DL category TB valid from"
            case this.FT_DLCLASSCODE_TB_NOTES:
                return "DL category TB codes"
            case this.FT_DLCLASSCODE_TB_TO:
                return "DL category TB valid to"
            case this.FT_DLCLASSCODE_TM_FROM:
                return "DL category TM valid from"
            case this.FT_DLCLASSCODE_TM_NOTES:
                return "DL category TM codes"
            case this.FT_DLCLASSCODE_TM_TO:
                return "DL category TM valid to"
            case this.FT_DLCLASSCODE_TR_FROM:
                return "DL category TR valid from"
            case this.FT_DLCLASSCODE_TR_NOTES:
                return "DL category TR codes"
            case this.FT_DLCLASSCODE_TR_TO:
                return "DL category TR valid to"
            case this.FT_DLCLASSCODE_TV_FROM:
                return "DL category TV valid from"
            case this.FT_DLCLASSCODE_TV_NOTES:
                return "DL category TV codes"
            case this.FT_DLCLASSCODE_TV_TO:
                return "DL category TV valid to"
            case this.FT_DLCLASSCODE_V_FROM:
                return "DL category V valid from"
            case this.FT_DLCLASSCODE_V_NOTES:
                return "DL category V codes"
            case this.FT_DLCLASSCODE_V_TO:
                return "DL category V valid to"
            case this.FT_DLCLASSCODE_W_FROM:
                return "DL category W valid from"
            case this.FT_DLCLASSCODE_W_NOTES:
                return "DL category W codes"
            case this.FT_DLCLASSCODE_W_TO:
                return "DL category W valid to"
            case this.FT_CALIBER:
                return "Caliber"
            case this.FT_CITIZENSHIP_OF_FIRST_PERSON:
                return "Citizenship of the first person"
            case this.FT_CITIZENSHIP_OF_SECOND_PERSON:
                return "Citizenship of the second person"
            case this.FT_CVV:
                return "CVV/CVC"
            case this.FT_DATE_OF_BIRTH_OF_HUSBAND:
                return "Date of birth of husband"
            case this.FT_DATE_OF_BIRTH_OF_WIFE:
                return "Date of birth of wife"
            case this.FT_MAKE:
                return "Make"
            case this.FT_MODEL:
                return "Model"
            case this.FT_NUMBER_OF_CYLINDERS:
                return "Number of cylinders"
            case this.FT_SURNAME_OF_HUSBAND_AFTER_REGISTRATION:
                return "Surname of husband after registration"
            case this.FT_SURNAME_OF_WIFE_AFTER_REGISTRATION:
                return "Surname of wife after registration"
            case this.FT_URL:
                return "URL"
            case this.FT_DATE_OF_INSURANCE_EXPIRY:
                return "Expiry date of insurance"
            case this.FT_MORTGAGE_BY:
                return "Mortgage by"
            case this.FT_OLD_DOCUMENT_NUMBER:
                return "Old document number"
            case this.FT_OLD_DATE_OF_ISSUE:
                return "Old date of issue"
            case this.FT_OLD_PLACE_OF_ISSUE:
                return "Old place of issue"
            case this.FT_DLCLASSCODE_LR_FROM:
                return "DL category LR valid from"
            case this.FT_DLCLASSCODE_LR_TO:
                return "DL category LR valid to"
            case this.FT_DLCLASSCODE_LR_NOTES:
                return "DL category LR codes"
            case this.FT_DLCLASSCODE_MR_FROM:
                return "DL category MR valid from"
            case this.FT_DLCLASSCODE_MR_TO:
                return "DL category MR valid to"
            case this.FT_DLCLASSCODE_MR_NOTES:
                return "DL category MR codes"
            case this.FT_DLCLASSCODE_HR_FROM:
                return "DL category HR valid from"
            case this.FT_DLCLASSCODE_HR_TO:
                return "DL category HR valid to"
            case this.FT_DLCLASSCODE_HR_NOTES:
                return "DL category HR codes"
            case this.FT_DLCLASSCODE_HC_FROM:
                return "DL category HC valid from"
            case this.FT_DLCLASSCODE_HC_TO:
                return "DL category HC valid to"
            case this.FT_DLCLASSCODE_HC_NOTES:
                return "DL category HC codes"
            case this.FT_DLCLASSCODE_MC_FROM:
                return "DL category MC valid from"
            case this.FT_DLCLASSCODE_MC_TO:
                return "DL category MC valid to"
            case this.FT_DLCLASSCODE_MC_NOTES:
                return "DL category MC codes"
            case this.FT_DLCLASSCODE_RE_FROM:
                return "DL category RE valid from"
            case this.FT_DLCLASSCODE_RE_TO:
                return "DL category RE valid to"
            case this.FT_DLCLASSCODE_RE_NOTES:
                return "DL category RE codes"
            case this.FT_DLCLASSCODE_R_FROM:
                return "DL category R valid from"
            case this.FT_DLCLASSCODE_R_TO:
                return "DL category R valid to"
            case this.FT_DLCLASSCODE_R_NOTES:
                return "DL category R codes"
            case this.FT_DLCLASSCODE_CA_FROM:
                return "DL category CA valid from"
            case this.FT_DLCLASSCODE_CA_TO:
                return "DL category CA valid to"
            case this.FT_DLCLASSCODE_CA_NOTES:
                return "DL category CA codes"
            case this.FT_CITIZENSHIP_STATUS:
                return "Citizenship status"
            case this.FT_MILITARY_SERVICE_FROM:
                return "Military service from"
            case this.FT_MILITARY_SERVICE_TO:
                return "Military service to"
            case this.FT_DLCLASSCODE_D3_FROM:
                return "DL category D3 valid from"
            case this.FT_DLCLASSCODE_D3_NOTES:
                return "DL category D3 codes"
            case this.FT_DLCLASSCODE_D3_TO:
                return "DL category D3 valid to"
            case this.FT_DLCLASSCODE_NT_FROM:
                return "DL category NT valid from"
            case this.FT_DLCLASSCODE_NT_NOTES:
                return "DL category NT codes"
            case this.FT_DLCLASSCODE_NT_TO:
                return "DL category NT valid to"
            case this.FT_DLCLASSCODE_TN_FROM:
                return "DL category TN valid from"
            case this.FT_DLCLASSCODE_TN_NOTES:
                return "DL category TN codes"
            case this.FT_DLCLASSCODE_TN_TO:
                return "DL category TN valid to"
            case this.FT_ALT_DATE_OF_EXPIRY:
                return "Alternative date of expiry"
            case this.FT_DLCLASSCODE_CD_FROM:
                return "DL category CD valid from"
            case this.FT_DLCLASSCODE_CD_TO:
                return "DL category CD valid to"
            case this.FT_DLCLASSCODE_CD_NOTES:
                return "DL category CD codes"
            case this.FT_FIRST_NAME:
                return "First name"
            case this.FT_DATE_OF_ARRIVAL:
                return "Date of arrival"
            case this.FT_ISSUER_IDENTIFICATION_NUMBER:
                return "Issuer identification number"
            case this.FT_PAYMENT_PERIOD_FROM:
                return "Payment period from"
            case this.FT_PAYMENT_PERIOD_TO:
                return "Payment period to"
            case this.FT_VACCINATION_CERTIFICATE_IDENTIFIER:
                return "Unique vaccination certificate identifier"
            case this.FT_SECOND_NAME:
                return "Second name"
            case this.FT_THIRD_NAME:
                return "Third name"
            case this.FT_FOURTH_NAME:
                return "Fourth name"
            case this.FT_LAST_NAME:
                return "Last name"
            default:
                return value.toString()
        }
    }
}

export const DocReaderOrientation = {
    ALL: 0,
    PORTRAIT: 1,
    LANDSCAPE: 2,
    LANDSCAPE_LEFT: 3,
    LANDSCAPE_RIGHT: 4,
}

export const LCID = {
    LATIN: 0,
    ABKHAZIAN_CYRILLIC: 10011,
    AFRIKAANS: 1078,
    ALBANIAN: 1052,
    AMHARIC: 1118,
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
    ARABIC_WORLD: 4096,
    AZERI_CYRILIC: 2092,
    AZERI_LATIN: 1068,
    BASQUE: 1069,
    BANK_CARD: 10003,
    BANK_CARD_CVV2: 10004,
    BANK_CARD_NAME: 10002,
    BANK_CARD_NUMBER: 10000,
    BANK_CARD_VALID_THRU: 10001,
    BELARUSIAN: 1059,
    BENGALI: 2117,
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
    KASHMIRI: 1120,
    KAZAKH: 1087,
    KONKANI: 1111,
    KOREAN: 1042,
    KYRGYZ_CYRILICK: 1088,
    LAO: 1108,
    LATVIAN: 1062,
    LITHUANIAN: 1063,
    MALAY_MALAYSIA: 1086,
    MALAY_BRUNEI_DARUSSALAM: 2110,
    MARATHI: 1102,
    MONGOLIAN_CYRILIC: 1104,
    NORWEGIAN_BOKMAL: 1044,
    NORWEGIAN_NYORSK: 2068,
    PASHTO: 1123,
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
    SINDHI: 2137,
    SINDHI_INDIA: 1113,
    SINHALA: 1115,
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
            case this.ABKHAZIAN_CYRILLIC:
                return "Abkhazian (Cyrillic)"
            case this.ALBANIAN:
                return "Albanian"
            case this.AMHARIC:
                return "Amharic"
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
            case this.ARABIC_WORLD:
                return "Arabic (World)"
            case this.AZERI_CYRILIC:
                return "Azeri (Cyrillic)"
            case this.AZERI_LATIN:
                return "Azeri (Latin)"
            case this.BASQUE:
                return "Basque"
            case this.BANK_CARD:
                return "Bank Card"
            case this.BANK_CARD_CVV2:
                return "Bank Card CVV2"
            case this.BANK_CARD_NAME:
                return "Bank Card Name"
            case this.BANK_CARD_NUMBER:
                return "Bank Card Number"
            case this.BANK_CARD_VALID_THRU:
                return "Bank Card Valid Thru"
            case this.BELARUSIAN:
                return "Belarusian"
            case this.BENGALI:
                return "Bengali"
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
            case this.KASHMIRI:
                return "Kashmiri"
            case this.KAZAKH:
                return "Kazakh"
            case this.KONKANI:
                return "Konkani"
            case this.KOREAN:
                return "Korean"
            case this.KYRGYZ_CYRILICK:
                return "Kyrgyz (Cyrillic)"
            case this.LAO:
                return "Lao"
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
            case this.PASHTO:
                return "Pashto"
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
            case this.SINDHI:
                return "Sindhi"
            case this.SINDHI_INDIA:
                return "Sindhi (India)"
            case this.SINHALA:
                return "Sinhala"
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

export const DocReaderFrame = {
    MAX: "max",
    SCENARIO_DEFAULT: "id1",
    NONE: "none",
    DOCUMENT: "document",
}

export const eRPRM_Lights = {
    NONE: 0,
    RPRM_LIGHT_UV: 128,
    RPRM_LIGHT_WHITE_FULL: 6,
    RPRM_LIGHT_IR: 16777216,
    RPRM_Light_IR_TOP: 8,
    RPRM_Light_IR_SIDE: 16,
    RPRM_Light_IR_Full: (8 | 16),
    RPRM_LIGHT_OVD: 67108864,

    getTranslation(value: number) {
        switch (value) {
            case this.RPRM_LIGHT_UV:
                return "UV"
            case this.RPRM_Light_IR_Full:
                return "IR"
            case this.RPRM_LIGHT_WHITE_FULL:
                return "Visible light"
            default:
                return value.toString()
        }
    }
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
   FontStyle,
   eRPRM_Authenticity,
   eRFID_ErrorCodes,
   eLDS_ParsingErrorCodes,
   eRFID_CertificateType,
   RGLMeasureSystem,
   eRPRM_ResultType,
   CameraTypes,
   FrameShapeType,
   eRFID_BaudRate,
   eRPRM_FieldVerificationResult,
   DocReaderAction,
   eProcessGLCommands,
   PKDResourceType,
   eRFID_AuthenticationProcedureType,
   ScenarioIdentifier,
   eRFID_AccessControl_ProcedureType,
   eRFID_NotificationCodes,
   eRFID_Password_Type,
   BarcodeResult,
   eSignManagementAction,
   eCheckDiagnose,
   RFIDDelegate,
   ProcessingFinishedStatus,
   DocFormat,
   eLDS_ParsingNotificationCodes,
   eImageQualityCheckType,
   MRZFormat,
   BarcodeType,
   eRPRM_SecurityFeatureType,
   OnlineMode,
   eRFID_SDK_ProfilerType,
   diDocType,
   HoloAnimationType,
   eRequestCommand,
   ImageFormat,
   eGraphicFieldType,
   CameraMode,
   CaptureMode,
   eCheckResult,
   eRFID_TerminalType,
   eRFID_DataFile_Type,
   eVisualFieldType,
   DocReaderOrientation,
   LCID,
   DocReaderFrame,
   eRPRM_Lights,
   LineCap,
   UIInterfaceOrientationMask,
   AVCaptureSessionPreset,
   AVCaptureDevicePosition,
   UIViewContentMode,
}

export default class DocumentReader {
    static initializeReaderAutomatically(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static isBlePermissionsGranted(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static startBluetoothService(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static initializeReaderBleDeviceConfig(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getTag(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
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
    static setTag(tag: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static checkDatabaseUpdate(databaseId: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getScenario(scenario: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImages(images: string[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static showScannerWithCameraID(cameraID: number, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static runAutoUpdate(databaseType: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setConfig(config: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setRfidScenario(scenario: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static initializeReader(config: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static prepareDatabase(databaseType: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImage(image: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeData(data: byte[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setRfidSessionStatus(status: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static providePACertificates(certificates: PKDCertificate[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static provideTACertificates(certificates: PKDCertificate[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static provideTASignature(signature: byte[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static parseCoreResults(json: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setTCCParams(params: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImageWithOpts(image: string, options: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeVideoFrame(byteString: string, params: ImageInputParam, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static showScannerWithCameraIDAndOpts(cameraID: number, options: object, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImageWithCameraMode(image: string, mode: boolean, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognizeImagesWithImageInputs(images: ImageInputData[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
}