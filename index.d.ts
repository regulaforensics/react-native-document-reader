import { NativeModules } from 'react-native'
export const { RNRegulaDocumentReader } = NativeModules

export class DocumentReaderScenario {
    name?: string
    caption?: string
    description?: string
    multiPageOff?: boolean
    frameKWHLandscape?: number
    frameKWHPortrait?: number
    frameKWHDoublePageSpreadPortrait?: number
    frameKWHDoublePageSpreadLandscape?: number
    frameOrientation?: number
    uvTorch?: boolean
    faceExt?: boolean
    seriesProcessMode?: boolean
    manualCrop?: boolean

    static fromJson(jsonObject?: any): DocumentReaderScenario | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderScenario

        result.name = jsonObject["name"]
        result.caption = jsonObject["caption"]
        result.description = jsonObject["description"]
        result.multiPageOff = jsonObject["multiPageOff"]
        result.frameKWHLandscape = jsonObject["frameKWHLandscape"]
        result.frameKWHPortrait = jsonObject["frameKWHPortrait"]
        result.frameKWHDoublePageSpreadPortrait = jsonObject["frameKWHDoublePageSpreadPortrait"]
        result.frameKWHDoublePageSpreadLandscape = jsonObject["frameKWHDoublePageSpreadLandscape"]
        result.frameOrientation = jsonObject["frameOrientation"]
        result.uvTorch = jsonObject["uvTorch"]
        result.faceExt = jsonObject["faceExt"]
        result.seriesProcessMode = jsonObject["seriesProcessMode"]
        result.manualCrop = jsonObject["manualCrop"]

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

export class DocumentReaderGraphicField {
    sourceType?: number
    fieldType?: number
    light?: number
    pageIndex?: number
    originalPageIndex?: number
    fieldName?: string
    lightName?: string
    value?: string
    fieldRect?: Rect

    static fromJson(jsonObject?: any): DocumentReaderGraphicField | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderGraphicField

        result.sourceType = jsonObject["sourceType"]
        result.fieldType = jsonObject["fieldType"]
        result.light = jsonObject["light"]
        result.pageIndex = jsonObject["pageIndex"]
        result.originalPageIndex = jsonObject["originalPageIndex"]
        result.fieldName = jsonObject["fieldName"]
        result.lightName = jsonObject["lightName"]
        result.value = jsonObject["value"]
        result.fieldRect = Rect.fromJson(jsonObject["fieldRect"])

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
    probability?: number
    value?: string
    originalValue?: string
    boundRect?: Rect
    originalSymbols?: DocumentReaderSymbol[]
    rfidOrigin?: DocumentReaderRfidOrigin

    static fromJson(jsonObject?: any): DocumentReaderValue | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderValue

        result.pageIndex = jsonObject["pageIndex"]
        result.sourceType = jsonObject["sourceType"]
        result.probability = jsonObject["probability"]
        result.value = jsonObject["value"]
        result.originalValue = jsonObject["originalValue"]
        result.boundRect = Rect.fromJson(jsonObject["boundRect"])
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
    comparisonStatus?: number
    validityStatus?: number

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
        result.comparisonStatus = jsonObject["comparisonStatus"]
        result.validityStatus = jsonObject["validityStatus"]

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
    boundRects?: Rect[]

    static fromJson(jsonObject?: any): ImageQuality | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ImageQuality

        result.featureType = jsonObject["featureType"]
        result.result = jsonObject["result"]
        result.type = jsonObject["type"]
        result.boundRects = []
        if (jsonObject["boundRects"] != null) {
            for (const i in jsonObject["boundRects"]) {
                const item = Rect.fromJson(jsonObject["boundRects"][i])
                if (item != undefined)
                    result.boundRects.push(item)
            }
        }

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
    isDeprecated?: boolean
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
        result.isDeprecated = jsonObject["isDeprecated"]
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
    notificationCode?: number
    dataFileType?: number
    progress?: number

    static fromJson(jsonObject?: any): DocumentReaderNotification | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderNotification

        result.notificationCode = jsonObject["notificationCode"]
        result.dataFileType = jsonObject["dataFileType"]
        result.progress = jsonObject["progress"]

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
    typeName?: string
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
        result.typeName = jsonObject["typeName"]
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
    dataGroups?: number[]
    dataFields?: DataField[]

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
        result.dataGroups = []
        if (jsonObject["dataGroups"] != null) {
            for (const i in jsonObject["dataGroups"]) {
                result.dataGroups.push(jsonObject["dataGroups"][i])
            }
        }
        result.dataFields = []
        if (jsonObject["dataFields"] != null) {
            for (const i in jsonObject["dataFields"]) {
                const item = DataField.fromJson(jsonObject["dataFields"][i])
                if (item != undefined)
                    result.dataFields.push(item)
            }
        }

        return result
    }
}

export class DataField {
    data?: string
    fieldType?: number

    static fromJson(jsonObject?: any): DataField | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DataField

        result.data = jsonObject["data"]
        result.fieldType = jsonObject["fieldType"]

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
    data?: string

    static fromJson(jsonObject?: any): DocumentReaderBarcodeField | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderBarcodeField

        result.barcodeType = jsonObject["barcodeType"]
        result.status = jsonObject["status"]
        result.pageIndex = jsonObject["pageIndex"]
        result.pdf417Info = PDF417Info.fromJson(jsonObject["pdf417Info"])
        result.data = jsonObject["data"]

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
    error?: RegulaException

    static fromJson(jsonObject?: any): DocumentReaderCompletion | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderCompletion

        result.action = jsonObject["action"]
        result.results = DocumentReaderResults.fromJson(jsonObject["results"])
        result.error = RegulaException.fromJson(jsonObject["error"])

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

export class RegulaException {
    errorCode?: number
    message?: string

    static fromJson(jsonObject?: any): RegulaException | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new RegulaException

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

export class TccParams {
    serviceUrlTA?: string
    serviceUrlPA?: string
    pfxCertUrl?: string
    pfxPassPhrase?: string
    pfxCert?: string

    static fromJson(jsonObject?: any): TccParams | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new TccParams

        result.serviceUrlTA = jsonObject["serviceUrlTA"]
        result.serviceUrlPA = jsonObject["serviceUrlPA"]
        result.pfxCertUrl = jsonObject["pfxCertUrl"]
        result.pfxPassPhrase = jsonObject["pfxPassPhrase"]
        result.pfxCert = jsonObject["pfxCert"]

        return result
    }
}

export class ImageInputParam {
    width?: number
    height?: number
    type?: number
    disableFrameShiftIR?: boolean
    doFlipYAxis?: boolean

    static fromJson(jsonObject?: any): ImageInputParam | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ImageInputParam

        result.width = jsonObject["width"]
        result.height = jsonObject["height"]
        result.type = jsonObject["type"]
        result.disableFrameShiftIR = jsonObject["disableFrameShiftIR"]
        result.doFlipYAxis = jsonObject["doFlipYAxis"]

        return result
    }
}

export class PAResourcesIssuer {
    data?: string
    friendlyName?: string
    attributes?: PAAttribute[]

    static fromJson(jsonObject?: any): PAResourcesIssuer | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new PAResourcesIssuer

        result.data = jsonObject["data"]
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
    data?: string
    auxPCD?: string
    challengePICC?: string
    hashPK?: string
    idPICC?: string

    static fromJson(jsonObject?: any): TAChallenge | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new TAChallenge

        result.data = jsonObject["data"]
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
    message?: Record<string, any>
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
    imgBytes?: string

    static fromJson(jsonObject?: any): ImageInputData | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ImageInputData

        result.pageIndex = jsonObject["pageIndex"]
        result.light = jsonObject["light"]
        result.type = jsonObject["type"]
        result.width = jsonObject["width"]
        result.height = jsonObject["height"]
        result.bitmap = jsonObject["bitmap"]
        result.imgBytes = jsonObject["imgBytes"]

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
    size?: number

    static fromJson(jsonObject?: any): DocReaderDocumentsDatabase | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocReaderDocumentsDatabase

        result.databaseID = jsonObject["databaseID"]
        result.version = jsonObject["version"]
        result.date = jsonObject["date"]
        result.databaseDescription = jsonObject["databaseDescription"]
        result.countriesNumber = jsonObject["countriesNumber"]
        result.documentsNumber = jsonObject["documentsNumber"]
        result.size = jsonObject["size"]

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

export class OnlineProcessingConfig {
    mode?: number
    url?: string
    processParams?: ProcessParams
    imageFormat?: number
    imageCompressionQuality?: number

    static fromJson(jsonObject?: any): OnlineProcessingConfig | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new OnlineProcessingConfig

        result.mode = jsonObject["mode"]
        result.url = jsonObject["url"]
        result.processParams = ProcessParams.fromJson(jsonObject["processParams"])
        result.imageFormat = jsonObject["imageFormat"]
        result.imageCompressionQuality = jsonObject["imageCompressionQuality"]

        return result
    }
}

export class DocReaderConfig {
    license?: string
    customDb?: string
    databasePath?: string
    licenseUpdate?: boolean
    delayedNNLoad?: boolean
    blackList?: Record<string, string>

    static fromJson(jsonObject?: any): DocReaderConfig | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocReaderConfig

        result.license = jsonObject["license"]
        result.customDb = jsonObject["customDb"]
        result.databasePath = jsonObject["databasePath"]
        result.licenseUpdate = jsonObject["licenseUpdate"]
        result.delayedNNLoad = jsonObject["delayedNNLoad"]
        result.blackList = jsonObject["blackList"]

        return result
    }
}

export class ScannerConfig {
    scenario?: string
    livePortrait?: string
    extPortrait?: string
    onlineProcessingConfig?: OnlineProcessingConfig
    cameraId?: number

    static fromJson(jsonObject?: any): ScannerConfig | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ScannerConfig

        result.scenario = jsonObject["scenario"]
        result.livePortrait = jsonObject["livePortrait"]
        result.extPortrait = jsonObject["extPortrait"]
        result.onlineProcessingConfig = OnlineProcessingConfig.fromJson(jsonObject["onlineProcessingConfig"])
        result.cameraId = jsonObject["cameraId"]

        return result
    }
}

export class RecognizeConfig {
    scenario?: string
    onlineProcessingConfig?: OnlineProcessingConfig
    oneShotIdentification?: boolean
    livePortrait?: string
    extPortrait?: string
    image?: string
    data?: string
    images?: string[]
    imageInputData?: ImageInputData[]

    static fromJson(jsonObject?: any): RecognizeConfig | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new RecognizeConfig

        result.scenario = jsonObject["scenario"]
        result.onlineProcessingConfig = OnlineProcessingConfig.fromJson(jsonObject["onlineProcessingConfig"])
        result.oneShotIdentification = jsonObject["oneShotIdentification"]
        result.livePortrait = jsonObject["livePortrait"]
        result.extPortrait = jsonObject["extPortrait"]
        result.image = jsonObject["image"]
        result.data = jsonObject["data"]
        result.images = []
        if (jsonObject["images"] != null) {
            for (const i in jsonObject["images"]) {
                result.images.push(jsonObject["images"][i])
            }
        }
        result.imageInputData = []
        if (jsonObject["imageInputData"] != null) {
            for (const i in jsonObject["imageInputData"]) {
                const item = ImageInputData.fromJson(jsonObject["imageInputData"][i])
                if (item != undefined)
                    result.imageInputData.push(item)
            }
        }

        return result
    }
}

export class License {
    expiryDate?: string
    countryFilter?: string[]
    isRfidAvailable?: boolean

    static fromJson(jsonObject?: any): License | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new License

        result.expiryDate = jsonObject["expiryDate"]
        result.countryFilter = []
        if (jsonObject["countryFilter"] != null) {
            for (const i in jsonObject["countryFilter"]) {
                result.countryFilter.push(jsonObject["countryFilter"][i])
            }
        }
        result.isRfidAvailable = jsonObject["isRfidAvailable"]

        return result
    }
}

export class DocReaderVersion {
    api?: string
    core?: string
    coreMode?: string
    database?: DocReaderDocumentsDatabase

    static fromJson(jsonObject?: any): DocReaderVersion | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocReaderVersion

        result.api = jsonObject["api"]
        result.core = jsonObject["core"]
        result.coreMode = jsonObject["coreMode"]
        result.database = DocReaderDocumentsDatabase.fromJson(jsonObject["database"])

        return result
    }
}

export class TransactionInfo {
    transactionId?: string
    tag?: string

    static fromJson(jsonObject?: any): TransactionInfo | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new TransactionInfo

        result.transactionId = jsonObject["transactionId"]
        result.tag = jsonObject["tag"]

        return result
    }
}

export class DocumentReaderResults {
    chipPage?: number
    processingFinishedStatus?: number
    elapsedTime?: number
    elapsedTimeRFID?: number
    morePagesAvailable?: number
    graphicResult?: DocumentReaderGraphicResult
    textResult?: DocumentReaderTextResult
    documentPosition?: ElementPosition[]
    barcodePosition?: ElementPosition[]
    mrzPosition?: ElementPosition[]
    imageQuality?: ImageQualityGroup[]
    rawResult?: string
    rfidSessionData?: RFIDSessionData
    authenticityResult?: DocumentReaderAuthenticityResult
    barcodeResult?: DocumentReaderBarcodeResult
    documentType?: DocumentReaderDocumentType[]
    status?: DocumentReaderResultsStatus
    vdsncData?: VDSNCData
    transactionInfo?: TransactionInfo

    textFieldValueByType(fieldType, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "textFieldValueByType", [this.rawResult, fieldType], successCallback, errorCallback)
    }

    textFieldValueByTypeLcid(fieldType, lcid, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "textFieldValueByTypeLcid", [this.rawResult, fieldType, lcid], successCallback, errorCallback)
    }

    textFieldValueByTypeSource(fieldType, source, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "textFieldValueByTypeSource", [this.rawResult, fieldType, source], successCallback, errorCallback)
    }

    textFieldValueByTypeLcidSource(fieldType, lcid, source, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "textFieldValueByTypeLcidSource", [this.rawResult, fieldType, lcid, source], successCallback, errorCallback)
    }

    textFieldValueByTypeSourceOriginal(fieldType, source, original, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "textFieldValueByTypeSourceOriginal", [this.rawResult, fieldType, source, original], successCallback, errorCallback)
    }

    textFieldValueByTypeLcidSourceOriginal(fieldType, lcid, source, original, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "textFieldValueByTypeLcidSourceOriginal", [this.rawResult, fieldType, lcid, source, original], successCallback, errorCallback)
    }

    textFieldByType(fieldType, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "textFieldByType", [this.rawResult, fieldType], successCallback, errorCallback)
    }

    textFieldByTypeLcid(fieldType, lcid, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "textFieldByTypeLcid", [this.rawResult, fieldType, lcid], successCallback, errorCallback)
    }

    graphicFieldByTypeSource(fieldType, source, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "graphicFieldByTypeSource", [this.rawResult, fieldType, source], successCallback, errorCallback)
    }

    graphicFieldByTypeSourcePageIndex(fieldType, source, pageIndex, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "graphicFieldByTypeSourcePageIndex", [this.rawResult, fieldType, source, pageIndex], successCallback, errorCallback)
    }

    graphicFieldByTypeSourcePageIndexLight(fieldType, source, pageIndex, light, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "graphicFieldByTypeSourcePageIndex", [this.rawResult, fieldType, source, pageIndex, light], successCallback, errorCallback)
    }

    graphicFieldImageByType(fieldType, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "graphicFieldImageByType", [this.rawResult, fieldType], successCallback, errorCallback)
    }

    graphicFieldImageByTypeSource(fieldType, source, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "graphicFieldImageByTypeSource", [this.rawResult, fieldType, source], successCallback, errorCallback)
    }

    graphicFieldImageByTypeSourcePageIndex(fieldType, source, pageIndex, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "graphicFieldImageByTypeSourcePageIndex", [this.rawResult, fieldType, source, pageIndex], successCallback, errorCallback)
    }

    graphicFieldImageByTypeSourcePageIndexLight(fieldType, source, pageIndex, light, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "graphicFieldImageByTypeSourcePageIndexLight", [this.rawResult, fieldType, source, pageIndex, light], successCallback, errorCallback)
    }

    containers(resultType, successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "containers", [this.rawResult, resultType], successCallback, errorCallback)
    }

    encryptedContainers(successCallback, errorCallback) {
        RNRegulaDocumentReader.exec("DocumentReader", "encryptedContainers", [this.rawResult], successCallback, errorCallback)
    }

    static fromJson(jsonObject?: any): DocumentReaderResults | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DocumentReaderResults

        result.chipPage = jsonObject["chipPage"]
        result.processingFinishedStatus = jsonObject["processingFinishedStatus"]
        result.elapsedTime = jsonObject["elapsedTime"]
        result.elapsedTimeRFID = jsonObject["elapsedTimeRFID"]
        result.morePagesAvailable = jsonObject["morePagesAvailable"]
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
        result.transactionInfo = TransactionInfo.fromJson(jsonObject["transactionInfo"])

        return result
    }
}

export class CameraSize {
    width?: number
    height?: number

    static fromJson(jsonObject?: any): CameraSize | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new CameraSize

        result.width = jsonObject["width"]
        result.height = jsonObject["height"]

        return result
    }
}

export class Functionality {
    pictureOnBoundsReady?: boolean
    showTorchButton?: boolean
    showCloseButton?: boolean
    videoCaptureMotionControl?: boolean
    showCaptureButton?: boolean
    showChangeFrameButton?: boolean
    showSkipNextPageButton?: boolean
    useAuthenticator?: boolean
    skipFocusingFrames?: boolean
    showCameraSwitchButton?: boolean
    displayMetadata?: boolean
    isZoomEnabled?: boolean
    isCameraTorchCheckDisabled?: boolean
    recordScanningProcess?: boolean
    manualMultipageMode?: boolean
    singleResult?: boolean
    showCaptureButtonDelayFromDetect?: number
    showCaptureButtonDelayFromStart?: number
    rfidTimeout?: number
    forcePagesCount?: number
    orientation?: number
    captureMode?: number
    cameraMode?: number
    cameraPositionIOS?: number
    cameraFrame?: string
    btDeviceName?: string
    zoomFactor?: number
    exposure?: number
    excludedCamera2Models?: string[]
    cameraSize?: CameraSize
    videoSessionPreset?: number

    static fromJson(jsonObject?: any): Functionality | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new Functionality

        result.pictureOnBoundsReady = jsonObject["pictureOnBoundsReady"]
        result.showTorchButton = jsonObject["showTorchButton"]
        result.showCloseButton = jsonObject["showCloseButton"]
        result.videoCaptureMotionControl = jsonObject["videoCaptureMotionControl"]
        result.showCaptureButton = jsonObject["showCaptureButton"]
        result.showChangeFrameButton = jsonObject["showChangeFrameButton"]
        result.showSkipNextPageButton = jsonObject["showSkipNextPageButton"]
        result.useAuthenticator = jsonObject["useAuthenticator"]
        result.skipFocusingFrames = jsonObject["skipFocusingFrames"]
        result.showCameraSwitchButton = jsonObject["showCameraSwitchButton"]
        result.displayMetadata = jsonObject["displayMetadata"]
        result.isZoomEnabled = jsonObject["isZoomEnabled"]
        result.isCameraTorchCheckDisabled = jsonObject["isCameraTorchCheckDisabled"]
        result.recordScanningProcess = jsonObject["recordScanningProcess"]
        result.manualMultipageMode = jsonObject["manualMultipageMode"]
        result.singleResult = jsonObject["singleResult"]
        result.showCaptureButtonDelayFromDetect = jsonObject["showCaptureButtonDelayFromDetect"]
        result.showCaptureButtonDelayFromStart = jsonObject["showCaptureButtonDelayFromStart"]
        result.rfidTimeout = jsonObject["rfidTimeout"]
        result.forcePagesCount = jsonObject["forcePagesCount"]
        result.orientation = jsonObject["orientation"]
        result.captureMode = jsonObject["captureMode"]
        result.cameraMode = jsonObject["cameraMode"]
        result.cameraPositionIOS = jsonObject["cameraPositionIOS"]
        result.cameraFrame = jsonObject["cameraFrame"]
        result.btDeviceName = jsonObject["btDeviceName"]
        result.zoomFactor = jsonObject["zoomFactor"]
        result.exposure = jsonObject["exposure"]
        result.excludedCamera2Models = []
        if (jsonObject["excludedCamera2Models"] != null) {
            for (const i in jsonObject["excludedCamera2Models"]) {
                result.excludedCamera2Models.push(jsonObject["excludedCamera2Models"][i])
            }
        }
        result.cameraSize = CameraSize.fromJson(jsonObject["cameraSize"])
        result.videoSessionPreset = jsonObject["videoSessionPreset"]

        return result
    }
}

export class GlaresCheckParams {
    imgMarginPart?: number
    maxGlaringPart?: number

    static fromJson(jsonObject?: any): GlaresCheckParams | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new GlaresCheckParams

        result.imgMarginPart = jsonObject["imgMarginPart"]
        result.maxGlaringPart = jsonObject["maxGlaringPart"]

        return result
    }
}

export class ImageQA {
    dpiThreshold?: number
    angleThreshold?: number
    focusCheck?: boolean
    glaresCheck?: boolean
    glaresCheckParams?: GlaresCheckParams
    colornessCheck?: boolean
    screenCapture?: boolean
    expectedPass?: number[]
    documentPositionIndent?: number
    brightnessThreshold?: number

    static fromJson(jsonObject?: any): ImageQA | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ImageQA

        result.dpiThreshold = jsonObject["dpiThreshold"]
        result.angleThreshold = jsonObject["angleThreshold"]
        result.focusCheck = jsonObject["focusCheck"]
        result.glaresCheck = jsonObject["glaresCheck"]
        result.glaresCheckParams = GlaresCheckParams.fromJson(jsonObject["glaresCheckParams"])
        result.colornessCheck = jsonObject["colornessCheck"]
        result.screenCapture = jsonObject["screenCapture"]
        result.expectedPass = []
        if (jsonObject["expectedPass"] != null) {
            for (const i in jsonObject["expectedPass"]) {
                result.expectedPass.push(jsonObject["expectedPass"][i])
            }
        }
        result.documentPositionIndent = jsonObject["documentPositionIndent"]
        result.brightnessThreshold = jsonObject["brightnessThreshold"]

        return result
    }
}

export class RFIDParams {
    paIgnoreNotificationCodes?: number[]

    static fromJson(jsonObject?: any): RFIDParams | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new RFIDParams

        result.paIgnoreNotificationCodes = []
        if (jsonObject["paIgnoreNotificationCodes"] != null) {
            for (const i in jsonObject["paIgnoreNotificationCodes"]) {
                result.paIgnoreNotificationCodes.push(jsonObject["paIgnoreNotificationCodes"][i])
            }
        }

        return result
    }
}

export class FaceApiSearchParams {
    limit?: number
    threshold?: number
    groupIds?: number[]

    static fromJson(jsonObject?: any): FaceApiSearchParams | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new FaceApiSearchParams

        result.limit = jsonObject["limit"]
        result.threshold = jsonObject["threshold"]
        result.groupIds = []
        if (jsonObject["groupIds"] != null) {
            for (const i in jsonObject["groupIds"]) {
                result.groupIds.push(jsonObject["groupIds"][i])
            }
        }

        return result
    }
}

export class FaceApiParams {
    url?: string
    mode?: string
    threshold?: number
    searchParams?: FaceApiSearchParams
    serviceTimeout?: number
    proxy?: string
    proxyPassword?: string
    proxyType?: number

    static fromJson(jsonObject?: any): FaceApiParams | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new FaceApiParams

        result.url = jsonObject["url"]
        result.mode = jsonObject["mode"]
        result.threshold = jsonObject["threshold"]
        result.searchParams = FaceApiSearchParams.fromJson(jsonObject["searchParams"])
        result.serviceTimeout = jsonObject["serviceTimeout"]
        result.proxy = jsonObject["proxy"]
        result.proxyPassword = jsonObject["proxyPassword"]
        result.proxyType = jsonObject["proxyType"]

        return result
    }
}

export class BackendProcessingConfig {
    url?: string
    httpHeaders?: Record<string, string>
    rfidServerSideChipVerification?: boolean

    static fromJson(jsonObject?: any): BackendProcessingConfig | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new BackendProcessingConfig

        result.url = jsonObject["url"]
        result.httpHeaders = jsonObject["httpHeaders"]
        result.rfidServerSideChipVerification = jsonObject["rfidServerSideChipVerification"]

        return result
    }
}

export class LivenessParams {
    checkOVI?: boolean
    checkMLI?: boolean
    checkHolo?: boolean
    checkED?: boolean

    static fromJson(jsonObject?: any): LivenessParams | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new LivenessParams

        result.checkOVI = jsonObject["checkOVI"]
        result.checkMLI = jsonObject["checkMLI"]
        result.checkHolo = jsonObject["checkHolo"]
        result.checkED = jsonObject["checkED"]

        return result
    }
}

export class AuthenticityParams {
    useLivenessCheck?: boolean
    livenessParams?: LivenessParams
    checkUVLuminiscence?: boolean
    checkIRB900?: boolean
    checkImagePatterns?: boolean
    checkFibers?: boolean
    checkExtMRZ?: boolean
    checkExtOCR?: boolean
    checkAxial?: boolean
    checkBarcodeFormat?: boolean
    checkIRVisibility?: boolean
    checkIPI?: boolean
    checkPhotoEmbedding?: boolean
    checkPhotoComparison?: boolean
    checkLetterScreen?: boolean

    static fromJson(jsonObject?: any): AuthenticityParams | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new AuthenticityParams

        result.useLivenessCheck = jsonObject["useLivenessCheck"]
        result.livenessParams = LivenessParams.fromJson(jsonObject["livenessParams"])
        result.checkUVLuminiscence = jsonObject["checkUVLuminiscence"]
        result.checkIRB900 = jsonObject["checkIRB900"]
        result.checkImagePatterns = jsonObject["checkImagePatterns"]
        result.checkFibers = jsonObject["checkFibers"]
        result.checkExtMRZ = jsonObject["checkExtMRZ"]
        result.checkExtOCR = jsonObject["checkExtOCR"]
        result.checkAxial = jsonObject["checkAxial"]
        result.checkBarcodeFormat = jsonObject["checkBarcodeFormat"]
        result.checkIRVisibility = jsonObject["checkIRVisibility"]
        result.checkIPI = jsonObject["checkIPI"]
        result.checkPhotoEmbedding = jsonObject["checkPhotoEmbedding"]
        result.checkPhotoComparison = jsonObject["checkPhotoComparison"]
        result.checkLetterScreen = jsonObject["checkLetterScreen"]

        return result
    }
}

export class ProcessParams {
    multipageProcessing?: boolean
    logs?: boolean
    debugSaveImages?: boolean
    debugSaveLogs?: boolean
    returnUncroppedImage?: boolean
    uvTorchEnabled?: boolean
    debugSaveCroppedImages?: boolean
    disableFocusingCheck?: boolean
    debugSaveRFIDSession?: boolean
    doublePageSpread?: boolean
    manualCrop?: boolean
    integralImage?: boolean
    returnCroppedBarcode?: boolean
    checkRequiredTextFields?: boolean
    depersonalizeLog?: boolean
    generateDoublePageSpreadImage?: boolean
    alreadyCropped?: boolean
    matchTextFieldMask?: boolean
    updateOCRValidityByGlare?: boolean
    noGraphics?: boolean
    multiDocOnImage?: boolean
    forceReadMrzBeforeLocate?: boolean
    parseBarcodes?: boolean
    shouldReturnPackageForReprocess?: boolean
    disablePerforationOCR?: boolean
    respectImageQuality?: boolean
    splitNames?: boolean
    useFaceApi?: boolean
    useAuthenticityCheck?: boolean
    checkHologram?: boolean
    generateNumericCodes?: boolean
    barcodeParserType?: number
    perspectiveAngle?: number
    minDPI?: number
    imageDpiOutMax?: number
    forceDocFormat?: number
    shiftExpiryDate?: number
    minimalHolderAge?: number
    imageOutputMaxHeight?: number
    imageOutputMaxWidth?: number
    processAuth?: number
    convertCase?: number
    logLevel?: string
    mrzDetectMode?: number
    measureSystem?: number
    forceDocID?: number
    dateFormat?: string
    scenario?: string
    captureButtonScenario?: string
    sessionLogFolder?: string
    timeout?: number
    timeoutFromFirstDetect?: number
    timeoutFromFirstDocType?: number
    documentAreaMin?: number
    timeoutLiveness?: number
    documentIDList?: number[]
    barcodeTypes?: number[]
    fieldTypesFilter?: number[]
    resultTypeOutput?: number[]
    documentGroupFilter?: number[]
    lcidIgnoreFilter?: number[]
    lcidFilter?: number[]
    mrzFormatsFilter?: string[]
    imageQA?: ImageQA
    rfidParams?: RFIDParams
    faceApiParams?: FaceApiParams
    backendProcessingConfig?: BackendProcessingConfig
    authenticityParams?: AuthenticityParams
    customParams?: Record<string, any>

    static fromJson(jsonObject?: any): ProcessParams | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ProcessParams

        result.multipageProcessing = jsonObject["multipageProcessing"]
        result.logs = jsonObject["logs"]
        result.debugSaveImages = jsonObject["debugSaveImages"]
        result.debugSaveLogs = jsonObject["debugSaveLogs"]
        result.returnUncroppedImage = jsonObject["returnUncroppedImage"]
        result.uvTorchEnabled = jsonObject["uvTorchEnabled"]
        result.debugSaveCroppedImages = jsonObject["debugSaveCroppedImages"]
        result.disableFocusingCheck = jsonObject["disableFocusingCheck"]
        result.debugSaveRFIDSession = jsonObject["debugSaveRFIDSession"]
        result.doublePageSpread = jsonObject["doublePageSpread"]
        result.manualCrop = jsonObject["manualCrop"]
        result.integralImage = jsonObject["integralImage"]
        result.returnCroppedBarcode = jsonObject["returnCroppedBarcode"]
        result.checkRequiredTextFields = jsonObject["checkRequiredTextFields"]
        result.depersonalizeLog = jsonObject["depersonalizeLog"]
        result.generateDoublePageSpreadImage = jsonObject["generateDoublePageSpreadImage"]
        result.alreadyCropped = jsonObject["alreadyCropped"]
        result.matchTextFieldMask = jsonObject["matchTextFieldMask"]
        result.updateOCRValidityByGlare = jsonObject["updateOCRValidityByGlare"]
        result.noGraphics = jsonObject["noGraphics"]
        result.multiDocOnImage = jsonObject["multiDocOnImage"]
        result.forceReadMrzBeforeLocate = jsonObject["forceReadMrzBeforeLocate"]
        result.parseBarcodes = jsonObject["parseBarcodes"]
        result.shouldReturnPackageForReprocess = jsonObject["shouldReturnPackageForReprocess"]
        result.disablePerforationOCR = jsonObject["disablePerforationOCR"]
        result.respectImageQuality = jsonObject["respectImageQuality"]
        result.splitNames = jsonObject["splitNames"]
        result.useFaceApi = jsonObject["useFaceApi"]
        result.useAuthenticityCheck = jsonObject["useAuthenticityCheck"]
        result.checkHologram = jsonObject["checkHologram"]
        result.generateNumericCodes = jsonObject["generateNumericCodes"]
        result.barcodeParserType = jsonObject["barcodeParserType"]
        result.perspectiveAngle = jsonObject["perspectiveAngle"]
        result.minDPI = jsonObject["minDPI"]
        result.imageDpiOutMax = jsonObject["imageDpiOutMax"]
        result.forceDocFormat = jsonObject["forceDocFormat"]
        result.shiftExpiryDate = jsonObject["shiftExpiryDate"]
        result.minimalHolderAge = jsonObject["minimalHolderAge"]
        result.imageOutputMaxHeight = jsonObject["imageOutputMaxHeight"]
        result.imageOutputMaxWidth = jsonObject["imageOutputMaxWidth"]
        result.processAuth = jsonObject["processAuth"]
        result.convertCase = jsonObject["convertCase"]
        result.logLevel = jsonObject["logLevel"]
        result.mrzDetectMode = jsonObject["mrzDetectMode"]
        result.measureSystem = jsonObject["measureSystem"]
        result.forceDocID = jsonObject["forceDocID"]
        result.dateFormat = jsonObject["dateFormat"]
        result.scenario = jsonObject["scenario"]
        result.captureButtonScenario = jsonObject["captureButtonScenario"]
        result.sessionLogFolder = jsonObject["sessionLogFolder"]
        result.timeout = jsonObject["timeout"]
        result.timeoutFromFirstDetect = jsonObject["timeoutFromFirstDetect"]
        result.timeoutFromFirstDocType = jsonObject["timeoutFromFirstDocType"]
        result.documentAreaMin = jsonObject["documentAreaMin"]
        result.timeoutLiveness = jsonObject["timeoutLiveness"]
        result.documentIDList = []
        if (jsonObject["documentIDList"] != null) {
            for (const i in jsonObject["documentIDList"]) {
                result.documentIDList.push(jsonObject["documentIDList"][i])
            }
        }
        result.barcodeTypes = []
        if (jsonObject["barcodeTypes"] != null) {
            for (const i in jsonObject["barcodeTypes"]) {
                result.barcodeTypes.push(jsonObject["barcodeTypes"][i])
            }
        }
        result.fieldTypesFilter = []
        if (jsonObject["fieldTypesFilter"] != null) {
            for (const i in jsonObject["fieldTypesFilter"]) {
                result.fieldTypesFilter.push(jsonObject["fieldTypesFilter"][i])
            }
        }
        result.resultTypeOutput = []
        if (jsonObject["resultTypeOutput"] != null) {
            for (const i in jsonObject["resultTypeOutput"]) {
                result.resultTypeOutput.push(jsonObject["resultTypeOutput"][i])
            }
        }
        result.documentGroupFilter = []
        if (jsonObject["documentGroupFilter"] != null) {
            for (const i in jsonObject["documentGroupFilter"]) {
                result.documentGroupFilter.push(jsonObject["documentGroupFilter"][i])
            }
        }
        result.lcidIgnoreFilter = []
        if (jsonObject["lcidIgnoreFilter"] != null) {
            for (const i in jsonObject["lcidIgnoreFilter"]) {
                result.lcidIgnoreFilter.push(jsonObject["lcidIgnoreFilter"][i])
            }
        }
        result.lcidFilter = []
        if (jsonObject["lcidFilter"] != null) {
            for (const i in jsonObject["lcidFilter"]) {
                result.lcidFilter.push(jsonObject["lcidFilter"][i])
            }
        }
        result.mrzFormatsFilter = []
        if (jsonObject["mrzFormatsFilter"] != null) {
            for (const i in jsonObject["mrzFormatsFilter"]) {
                result.mrzFormatsFilter.push(jsonObject["mrzFormatsFilter"][i])
            }
        }
        result.imageQA = ImageQA.fromJson(jsonObject["imageQA"])
        result.rfidParams = RFIDParams.fromJson(jsonObject["rfidParams"])
        result.faceApiParams = FaceApiParams.fromJson(jsonObject["faceApiParams"])
        result.backendProcessingConfig = BackendProcessingConfig.fromJson(jsonObject["backendProcessingConfig"])
        result.authenticityParams = AuthenticityParams.fromJson(jsonObject["authenticityParams"])
        result.customParams = jsonObject["customParams"]

        return result
    }
}

export class Font {
    name?: string
    size?: number
    style?: number

    static fromJson(jsonObject?: any): Font | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new Font

        result.name = jsonObject["name"]
        result.size = jsonObject["size"]
        result.style = jsonObject["style"]

        return result
    }
}

export class CustomizationColors {
    rfidProcessingScreenBackground?: number
    rfidProcessingScreenHintLabelText?: number
    rfidProcessingScreenHintLabelBackground?: number
    rfidProcessingScreenProgressLabelText?: number
    rfidProcessingScreenProgressBar?: number
    rfidProcessingScreenProgressBarBackground?: number
    rfidProcessingScreenResultLabelText?: number
    rfidProcessingScreenLoadingBar?: number

    static fromJson(jsonObject?: any): CustomizationColors | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new CustomizationColors

        result.rfidProcessingScreenBackground = jsonObject["rfidProcessingScreenBackground"]
        result.rfidProcessingScreenHintLabelText = jsonObject["rfidProcessingScreenHintLabelText"]
        result.rfidProcessingScreenHintLabelBackground = jsonObject["rfidProcessingScreenHintLabelBackground"]
        result.rfidProcessingScreenProgressLabelText = jsonObject["rfidProcessingScreenProgressLabelText"]
        result.rfidProcessingScreenProgressBar = jsonObject["rfidProcessingScreenProgressBar"]
        result.rfidProcessingScreenProgressBarBackground = jsonObject["rfidProcessingScreenProgressBarBackground"]
        result.rfidProcessingScreenResultLabelText = jsonObject["rfidProcessingScreenResultLabelText"]
        result.rfidProcessingScreenLoadingBar = jsonObject["rfidProcessingScreenLoadingBar"]

        return result
    }
}

export class CustomizationFonts {
    rfidProcessingScreenHintLabel?: Font
    rfidProcessingScreenProgressLabel?: Font
    rfidProcessingScreenResultLabel?: Font

    static fromJson(jsonObject?: any): CustomizationFonts | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new CustomizationFonts

        result.rfidProcessingScreenHintLabel = Font.fromJson(jsonObject["rfidProcessingScreenHintLabel"])
        result.rfidProcessingScreenProgressLabel = Font.fromJson(jsonObject["rfidProcessingScreenProgressLabel"])
        result.rfidProcessingScreenResultLabel = Font.fromJson(jsonObject["rfidProcessingScreenResultLabel"])

        return result
    }
}

export class CustomizationImages {
    rfidProcessingScreenFailureImage?: string

    static fromJson(jsonObject?: any): CustomizationImages | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new CustomizationImages

        result.rfidProcessingScreenFailureImage = jsonObject["rfidProcessingScreenFailureImage"]

        return result
    }
}

export class Customization {
    showStatusMessages?: boolean
    showResultStatusMessages?: boolean
    showHelpAnimation?: boolean
    showNextPageAnimation?: boolean
    showBackgroundMask?: boolean
    cameraFrameBorderWidth?: number
    cameraFrameLineLength?: number
    cameraFrameOffsetWidth?: number
    cameraFrameShapeType?: number
    status?: string
    resultStatus?: string
    cameraFrameDefaultColor?: number
    cameraFrameActiveColor?: number
    statusTextColor?: number
    resultStatusTextColor?: number
    resultStatusBackgroundColor?: number
    multipageButtonBackgroundColor?: number
    tintColor?: number
    activityIndicatorColor?: number
    statusBackgroundColor?: number
    cameraPreviewBackgroundColor?: number
    statusPositionMultiplier?: number
    resultStatusPositionMultiplier?: number
    toolbarSize?: number
    backgroundMaskAlpha?: number
    customStatusPositionMultiplier?: number
    livenessAnimationPositionMultiplier?: number
    cameraFrameVerticalPositionMultiplier?: number
    cameraFrameLandscapeAspectRatio?: number
    cameraFramePortraitAspectRatio?: number
    cameraFrameCornerRadius?: number
    multipageAnimationFrontImage?: string
    multipageAnimationBackImage?: string
    borderBackgroundImage?: string
    helpAnimationImage?: string
    closeButtonImage?: string
    captureButtonImage?: string
    cameraSwitchButtonImage?: string
    torchButtonOnImage?: string
    torchButtonOffImage?: string
    changeFrameButtonExpandImage?: string
    changeFrameButtonCollapseImage?: string
    livenessAnimationImage?: string
    statusTextFont?: Font
    resultStatusTextFont?: Font
    customLabelStatus?: string
    cameraFrameLineCap?: number
    uiCustomizationLayer?: Record<string, any>
    helpAnimationImageContentMode?: number
    multipageAnimationFrontImageContentMode?: number
    multipageAnimationBackImageContentMode?: number
    livenessAnimationImageContentMode?: number
    borderBackgroundImageContentMode?: number
    helpAnimationImageMatrix?: number[]
    multipageAnimationFrontImageMatrix?: number[]
    multipageAnimationBackImageMatrix?: number[]
    livenessAnimationImageMatrix?: number[]
    borderBackgroundImageMatrix?: number[]
    colors?: CustomizationColors
    fonts?: CustomizationFonts
    images?: CustomizationImages

    static fromJson(jsonObject?: any): Customization | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new Customization

        result.showStatusMessages = jsonObject["showStatusMessages"]
        result.showResultStatusMessages = jsonObject["showResultStatusMessages"]
        result.showHelpAnimation = jsonObject["showHelpAnimation"]
        result.showNextPageAnimation = jsonObject["showNextPageAnimation"]
        result.showBackgroundMask = jsonObject["showBackgroundMask"]
        result.cameraFrameBorderWidth = jsonObject["cameraFrameBorderWidth"]
        result.cameraFrameLineLength = jsonObject["cameraFrameLineLength"]
        result.cameraFrameOffsetWidth = jsonObject["cameraFrameOffsetWidth"]
        result.cameraFrameShapeType = jsonObject["cameraFrameShapeType"]
        result.status = jsonObject["status"]
        result.resultStatus = jsonObject["resultStatus"]
        result.cameraFrameDefaultColor = jsonObject["cameraFrameDefaultColor"]
        result.cameraFrameActiveColor = jsonObject["cameraFrameActiveColor"]
        result.statusTextColor = jsonObject["statusTextColor"]
        result.resultStatusTextColor = jsonObject["resultStatusTextColor"]
        result.resultStatusBackgroundColor = jsonObject["resultStatusBackgroundColor"]
        result.multipageButtonBackgroundColor = jsonObject["multipageButtonBackgroundColor"]
        result.tintColor = jsonObject["tintColor"]
        result.activityIndicatorColor = jsonObject["activityIndicatorColor"]
        result.statusBackgroundColor = jsonObject["statusBackgroundColor"]
        result.cameraPreviewBackgroundColor = jsonObject["cameraPreviewBackgroundColor"]
        result.statusPositionMultiplier = jsonObject["statusPositionMultiplier"]
        result.resultStatusPositionMultiplier = jsonObject["resultStatusPositionMultiplier"]
        result.toolbarSize = jsonObject["toolbarSize"]
        result.backgroundMaskAlpha = jsonObject["backgroundMaskAlpha"]
        result.customStatusPositionMultiplier = jsonObject["customStatusPositionMultiplier"]
        result.livenessAnimationPositionMultiplier = jsonObject["livenessAnimationPositionMultiplier"]
        result.cameraFrameVerticalPositionMultiplier = jsonObject["cameraFrameVerticalPositionMultiplier"]
        result.cameraFrameLandscapeAspectRatio = jsonObject["cameraFrameLandscapeAspectRatio"]
        result.cameraFramePortraitAspectRatio = jsonObject["cameraFramePortraitAspectRatio"]
        result.cameraFrameCornerRadius = jsonObject["cameraFrameCornerRadius"]
        result.multipageAnimationFrontImage = jsonObject["multipageAnimationFrontImage"]
        result.multipageAnimationBackImage = jsonObject["multipageAnimationBackImage"]
        result.borderBackgroundImage = jsonObject["borderBackgroundImage"]
        result.helpAnimationImage = jsonObject["helpAnimationImage"]
        result.closeButtonImage = jsonObject["closeButtonImage"]
        result.captureButtonImage = jsonObject["captureButtonImage"]
        result.cameraSwitchButtonImage = jsonObject["cameraSwitchButtonImage"]
        result.torchButtonOnImage = jsonObject["torchButtonOnImage"]
        result.torchButtonOffImage = jsonObject["torchButtonOffImage"]
        result.changeFrameButtonExpandImage = jsonObject["changeFrameButtonExpandImage"]
        result.changeFrameButtonCollapseImage = jsonObject["changeFrameButtonCollapseImage"]
        result.livenessAnimationImage = jsonObject["livenessAnimationImage"]
        result.statusTextFont = Font.fromJson(jsonObject["statusTextFont"])
        result.resultStatusTextFont = Font.fromJson(jsonObject["resultStatusTextFont"])
        result.customLabelStatus = jsonObject["customLabelStatus"]
        result.cameraFrameLineCap = jsonObject["cameraFrameLineCap"]
        result.uiCustomizationLayer = jsonObject["uiCustomizationLayer"]
        result.helpAnimationImageContentMode = jsonObject["helpAnimationImageContentMode"]
        result.multipageAnimationFrontImageContentMode = jsonObject["multipageAnimationFrontImageContentMode"]
        result.multipageAnimationBackImageContentMode = jsonObject["multipageAnimationBackImageContentMode"]
        result.livenessAnimationImageContentMode = jsonObject["livenessAnimationImageContentMode"]
        result.borderBackgroundImageContentMode = jsonObject["borderBackgroundImageContentMode"]
        result.helpAnimationImageMatrix = []
        if (jsonObject["helpAnimationImageMatrix"] != null) {
            for (const i in jsonObject["helpAnimationImageMatrix"]) {
                result.helpAnimationImageMatrix.push(jsonObject["helpAnimationImageMatrix"][i])
            }
        }
        result.multipageAnimationFrontImageMatrix = []
        if (jsonObject["multipageAnimationFrontImageMatrix"] != null) {
            for (const i in jsonObject["multipageAnimationFrontImageMatrix"]) {
                result.multipageAnimationFrontImageMatrix.push(jsonObject["multipageAnimationFrontImageMatrix"][i])
            }
        }
        result.multipageAnimationBackImageMatrix = []
        if (jsonObject["multipageAnimationBackImageMatrix"] != null) {
            for (const i in jsonObject["multipageAnimationBackImageMatrix"]) {
                result.multipageAnimationBackImageMatrix.push(jsonObject["multipageAnimationBackImageMatrix"][i])
            }
        }
        result.livenessAnimationImageMatrix = []
        if (jsonObject["livenessAnimationImageMatrix"] != null) {
            for (const i in jsonObject["livenessAnimationImageMatrix"]) {
                result.livenessAnimationImageMatrix.push(jsonObject["livenessAnimationImageMatrix"][i])
            }
        }
        result.borderBackgroundImageMatrix = []
        if (jsonObject["borderBackgroundImageMatrix"] != null) {
            for (const i in jsonObject["borderBackgroundImageMatrix"]) {
                result.borderBackgroundImageMatrix.push(jsonObject["borderBackgroundImageMatrix"][i])
            }
        }
        result.colors = CustomizationColors.fromJson(jsonObject["colors"])
        result.fonts = CustomizationFonts.fromJson(jsonObject["fonts"])
        result.images = CustomizationImages.fromJson(jsonObject["images"])

        return result
    }
}

export class EDLDataGroups {
    DG1?: boolean
    DG2?: boolean
    DG3?: boolean
    DG4?: boolean
    DG5?: boolean
    DG6?: boolean
    DG7?: boolean
    DG8?: boolean
    DG9?: boolean
    DG10?: boolean
    DG11?: boolean
    DG12?: boolean
    DG13?: boolean
    DG14?: boolean

    static fromJson(jsonObject?: any): EDLDataGroups | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new EDLDataGroups

        result.DG1 = jsonObject["DG1"]
        result.DG2 = jsonObject["DG2"]
        result.DG3 = jsonObject["DG3"]
        result.DG4 = jsonObject["DG4"]
        result.DG5 = jsonObject["DG5"]
        result.DG6 = jsonObject["DG6"]
        result.DG7 = jsonObject["DG7"]
        result.DG8 = jsonObject["DG8"]
        result.DG9 = jsonObject["DG9"]
        result.DG10 = jsonObject["DG10"]
        result.DG11 = jsonObject["DG11"]
        result.DG12 = jsonObject["DG12"]
        result.DG13 = jsonObject["DG13"]
        result.DG14 = jsonObject["DG14"]

        return result
    }
}

export class EPassportDataGroups {
    DG1?: boolean
    DG2?: boolean
    DG3?: boolean
    DG4?: boolean
    DG5?: boolean
    DG6?: boolean
    DG7?: boolean
    DG8?: boolean
    DG9?: boolean
    DG10?: boolean
    DG11?: boolean
    DG12?: boolean
    DG13?: boolean
    DG14?: boolean
    DG15?: boolean
    DG16?: boolean

    static fromJson(jsonObject?: any): EPassportDataGroups | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new EPassportDataGroups

        result.DG1 = jsonObject["DG1"]
        result.DG2 = jsonObject["DG2"]
        result.DG3 = jsonObject["DG3"]
        result.DG4 = jsonObject["DG4"]
        result.DG5 = jsonObject["DG5"]
        result.DG6 = jsonObject["DG6"]
        result.DG7 = jsonObject["DG7"]
        result.DG8 = jsonObject["DG8"]
        result.DG9 = jsonObject["DG9"]
        result.DG10 = jsonObject["DG10"]
        result.DG11 = jsonObject["DG11"]
        result.DG12 = jsonObject["DG12"]
        result.DG13 = jsonObject["DG13"]
        result.DG14 = jsonObject["DG14"]
        result.DG15 = jsonObject["DG15"]
        result.DG16 = jsonObject["DG16"]

        return result
    }
}

export class EIDDataGroups {
    DG1?: boolean
    DG2?: boolean
    DG3?: boolean
    DG4?: boolean
    DG5?: boolean
    DG6?: boolean
    DG7?: boolean
    DG8?: boolean
    DG9?: boolean
    DG10?: boolean
    DG11?: boolean
    DG12?: boolean
    DG13?: boolean
    DG14?: boolean
    DG15?: boolean
    DG16?: boolean
    DG17?: boolean
    DG18?: boolean
    DG19?: boolean
    DG20?: boolean
    DG21?: boolean

    static fromJson(jsonObject?: any): EIDDataGroups | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new EIDDataGroups

        result.DG1 = jsonObject["DG1"]
        result.DG2 = jsonObject["DG2"]
        result.DG3 = jsonObject["DG3"]
        result.DG4 = jsonObject["DG4"]
        result.DG5 = jsonObject["DG5"]
        result.DG6 = jsonObject["DG6"]
        result.DG7 = jsonObject["DG7"]
        result.DG8 = jsonObject["DG8"]
        result.DG9 = jsonObject["DG9"]
        result.DG10 = jsonObject["DG10"]
        result.DG11 = jsonObject["DG11"]
        result.DG12 = jsonObject["DG12"]
        result.DG13 = jsonObject["DG13"]
        result.DG14 = jsonObject["DG14"]
        result.DG15 = jsonObject["DG15"]
        result.DG16 = jsonObject["DG16"]
        result.DG17 = jsonObject["DG17"]
        result.DG18 = jsonObject["DG18"]
        result.DG19 = jsonObject["DG19"]
        result.DG20 = jsonObject["DG20"]
        result.DG21 = jsonObject["DG21"]

        return result
    }
}

export class RFIDScenario {
    paceStaticBinding?: boolean
    onlineTA?: boolean
    writeEid?: boolean
    universalAccessRights?: boolean
    authorizedRestrictedIdentification?: boolean
    auxVerificationCommunityID?: boolean
    auxVerificationDateOfBirth?: boolean
    skipAA?: boolean
    strictProcessing?: boolean
    pkdDSCertPriority?: boolean
    pkdUseExternalCSCA?: boolean
    trustedPKD?: boolean
    passiveAuth?: boolean
    useSFI?: boolean
    readEPassport?: boolean
    readEID?: boolean
    readEDL?: boolean
    authorizedSTSignature?: boolean
    authorizedSTQSignature?: boolean
    authorizedWriteDG17?: boolean
    authorizedWriteDG18?: boolean
    authorizedWriteDG19?: boolean
    authorizedWriteDG20?: boolean
    authorizedWriteDG21?: boolean
    authorizedVerifyAge?: boolean
    authorizedVerifyCommunityID?: boolean
    authorizedPrivilegedTerminal?: boolean
    authorizedCANAllowed?: boolean
    authorizedPINManagement?: boolean
    authorizedInstallCert?: boolean
    authorizedInstallQCert?: boolean
    applyAmendments?: boolean
    autoSettings?: boolean
    proceedReadingAlways?: boolean
    readingBuffer?: number
    onlineTAToSignDataType?: number
    defaultReadingBufferSize?: number
    signManagementAction?: number
    profilerType?: number
    authProcType?: number
    baseSMProcedure?: number
    pacePasswordType?: number
    terminalType?: number
    password?: string
    pkdPA?: string
    pkdEAC?: string
    mrz?: string
    eSignPINDefault?: string
    eSignPINNewValue?: string
    eDLDataGroups?: EDLDataGroups
    ePassportDataGroups?: EPassportDataGroups
    eIDDataGroups?: EIDDataGroups

    static fromJson(jsonObject?: any): RFIDScenario | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new RFIDScenario

        result.paceStaticBinding = jsonObject["paceStaticBinding"]
        result.onlineTA = jsonObject["onlineTA"]
        result.writeEid = jsonObject["writeEid"]
        result.universalAccessRights = jsonObject["universalAccessRights"]
        result.authorizedRestrictedIdentification = jsonObject["authorizedRestrictedIdentification"]
        result.auxVerificationCommunityID = jsonObject["auxVerificationCommunityID"]
        result.auxVerificationDateOfBirth = jsonObject["auxVerificationDateOfBirth"]
        result.skipAA = jsonObject["skipAA"]
        result.strictProcessing = jsonObject["strictProcessing"]
        result.pkdDSCertPriority = jsonObject["pkdDSCertPriority"]
        result.pkdUseExternalCSCA = jsonObject["pkdUseExternalCSCA"]
        result.trustedPKD = jsonObject["trustedPKD"]
        result.passiveAuth = jsonObject["passiveAuth"]
        result.useSFI = jsonObject["useSFI"]
        result.readEPassport = jsonObject["readEPassport"]
        result.readEID = jsonObject["readEID"]
        result.readEDL = jsonObject["readEDL"]
        result.authorizedSTSignature = jsonObject["authorizedSTSignature"]
        result.authorizedSTQSignature = jsonObject["authorizedSTQSignature"]
        result.authorizedWriteDG17 = jsonObject["authorizedWriteDG17"]
        result.authorizedWriteDG18 = jsonObject["authorizedWriteDG18"]
        result.authorizedWriteDG19 = jsonObject["authorizedWriteDG19"]
        result.authorizedWriteDG20 = jsonObject["authorizedWriteDG20"]
        result.authorizedWriteDG21 = jsonObject["authorizedWriteDG21"]
        result.authorizedVerifyAge = jsonObject["authorizedVerifyAge"]
        result.authorizedVerifyCommunityID = jsonObject["authorizedVerifyCommunityID"]
        result.authorizedPrivilegedTerminal = jsonObject["authorizedPrivilegedTerminal"]
        result.authorizedCANAllowed = jsonObject["authorizedCANAllowed"]
        result.authorizedPINManagement = jsonObject["authorizedPINManagement"]
        result.authorizedInstallCert = jsonObject["authorizedInstallCert"]
        result.authorizedInstallQCert = jsonObject["authorizedInstallQCert"]
        result.applyAmendments = jsonObject["applyAmendments"]
        result.autoSettings = jsonObject["autoSettings"]
        result.proceedReadingAlways = jsonObject["proceedReadingAlways"]
        result.readingBuffer = jsonObject["readingBuffer"]
        result.onlineTAToSignDataType = jsonObject["onlineTAToSignDataType"]
        result.defaultReadingBufferSize = jsonObject["defaultReadingBufferSize"]
        result.signManagementAction = jsonObject["signManagementAction"]
        result.profilerType = jsonObject["profilerType"]
        result.authProcType = jsonObject["authProcType"]
        result.baseSMProcedure = jsonObject["baseSMProcedure"]
        result.pacePasswordType = jsonObject["pacePasswordType"]
        result.terminalType = jsonObject["terminalType"]
        result.password = jsonObject["password"]
        result.pkdPA = jsonObject["pkdPA"]
        result.pkdEAC = jsonObject["pkdEAC"]
        result.mrz = jsonObject["mrz"]
        result.eSignPINDefault = jsonObject["eSignPINDefault"]
        result.eSignPINNewValue = jsonObject["eSignPINNewValue"]
        result.eDLDataGroups = EDLDataGroups.fromJson(jsonObject["eDLDataGroups"])
        result.ePassportDataGroups = EPassportDataGroups.fromJson(jsonObject["ePassportDataGroups"])
        result.eIDDataGroups = EIDDataGroups.fromJson(jsonObject["eIDDataGroups"])

        return result
    }
}

export class PrepareProgress {
    downloadedBytes?: number
    totalBytes?: number
    progress?: number

    static fromJson(jsonObject?: any): PrepareProgress | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new PrepareProgress

        result.downloadedBytes = jsonObject["downloadedBytes"]
        result.totalBytes = jsonObject["totalBytes"]
        result.progress = jsonObject["progress"]

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
    STATUS_ONLY: 0x80000000,
    OVI: 1024,
    LIVENESS: 2097152,
    OCR: 4194304,
}

export const CustomizationColor = {
    RFID_PROCESSING_SCREEN_BACKGROUND: "rfidProcessingScreenBackground",
    RFID_PROCESSING_SCREEN_HINT_LABEL_TEXT: "rfidProcessingScreenHintLabelText",
    RFID_PROCESSING_SCREEN_HINT_LABEL_BACKGROUND: "rfidProcessingScreenHintLabelBackground",
    RFID_PROCESSING_SCREEN_PROGRESS_LABEL_TEXT: "rfidProcessingScreenProgressLabelText",
    RFID_PROCESSING_SCREEN_PROGRESS_BAR: "rfidProcessingScreenProgressBar",
    RFID_PROCESSING_SCREEN_PROGRESS_BAR_BACKGROUND: "rfidProcessingScreenProgressBarBackground",
    RFID_PROCESSING_SCREEN_RESULT_LABEL_TEXT: "rfidProcessingScreenResultLabelText",
    RFID_PROCESSING_SCREEN_LOADING_BAR: "rfidProcessingScreenLoadingBar",
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
    RPRM_RESULT_TYPE_TEXT: 36,
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
    RPRM_RESULT_TYPE_LIVE_PORTRAIT: 32,
    RPRM_RESULT_TYPE_STATUS: 33,
    RPRM_RESULT_TYPE_PORTRAIT_COMPARISON: 34,
    RPRM_RESULT_TYPE_EXT_PORTRAIT: 35,
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

export const LineCap = {
    BUTT: 0,
    ROUND: 1,
    SQUARE: 2,
}

export const eRPRM_FieldVerificationResult = {
    RCF_DISABLED: 0,
    RCF_VERIFIED: 1,
    RCF_NOT_VERIFIED: 2,
    RCF_COMPARE_TRUE: 3,
    RCF_COMPARE_FALSE: 4,
}

export const DocReaderAction = {
    COMPLETE: 0,
    PROCESS: 1,
    MORE_PAGES_AVAILABLE: 2,
    CANCEL: 3,
    ERROR: 4,
    PROCESS_WHITE_FLASHLIGHT: 5,
    TIMEOUT: 6,
    PROCESSING_ON_SERVICE: 7,
    NOTIFICATION: 101,
    PROCESS_WHITE_UV_IMAGES: 102,
    PROCESS_IR_FRAME: 103,
}

export const eProcessGLCommands = {
    ePC_ProcMgr_SetLicense: 12100,
    ePC_ProcMgr_Process: 12101,
    ePC_ProcMgr_ProcessAsync: 12102,
    ePC_ProcMgr_Init: 12103,
    ePC_ProcMgr_ProcessImage: 12104,
    ePC_ProcMgr_StartNewDocument: 12105,
    ePC_ProcMgr_StartNewPage: 12106,
    ePC_ProcMgr_AddDataToPackage: 12121,
    ePC_ProcMgr_FinalizePackage: 12122,
    ePC_ProcMgr_CreateBackendTransaction: 12125,
    ePC_ProcMgr_Unload: 12107,
    ePC_ProcMgr_CheckDatabase: 12109,
    ePC_ProcMgr_ComparePortraits: 12111,
    ePC_RFID_SetTCCParams: 12522,
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

export const DocumentReaderErrorCodes = {
    INITIALIZATION_CORE_ABSENT: 0,
    INITIALIZATION_FAILED: 1,
    INCORRECT_SCENARIO: 2,
    NO_RESULT: 3,
    REMOVE_DATABASE: 4,
    FETCHING_DATABASE: 5,
    DB_ID_NOT_FOUND: 6,
    DB_DESCRIPTION_NOT_FOUND: 7,
    SAVE_DB: 8,
    DOWNLOAD_DB_INCORRECT_CHECKSUM: 9,
    DB_DOWNLOAD: 10,
    LICENSE_ABSENT_OR_CORRUPTED: 13,
    LICENSE_INVALID_DATE: 14,
    LICENSE_INVALID_VERSION: 15,
    LICENSE_INVALID_DEVICE_ID: 16,
    LICENSE_INVALID_SYSTEM_OR_APP_ID: 17,
    LICENSE_NO_CAPABILITIES: 18,
    LICENSE_NO_AUTHENTICITY: 19,
    RECORD_PROCESS_INVALID_OUTPUT_URL: 20,
    LICENSE_ONLINE_ERROR: 21,
    LICENSE_NO_DATABASE: 22,
    LICENSE_DATABASE_INCORRECT: 23,
    INVALID_TCC_PARAMS: 24,
    RFID_IN_PROGRESS: 25,
    START_BACKEND_PROCESSING: 26,
    ADD_DATA_TO_PACKAGE: 27,
    FINALIZE_FAILED: 28,
    CAMERA_NO_PERMISSION: 29,
    CAMERA_NOT_AVAILABLE: 30,
    NATIVE_JAVA_EXCEPTION: 1000,
    BACKEND_ONLINE_PROCESSING: 303,
    WRONG_INPUT: 400,
    STATE_EXCEPTION: 500,
    BLE_EXCEPTION: 600,
    FEATURE_BLUETOOTH_LE_NOT_SUPPORTED: 601,
    APP_BACKGROUND: 700,
    ONLINE_PROCESSING_WRONG_INPUT: 800,
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
    SCENARIO_BARCODE_AND_LOCATE: "BarcodeAndLocate",
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

export const CameraPosition = {
    UNSPECIFIED: 0,
    BACK: 1,
    FRONT: 2,
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

export const ViewContentMode = {
    UNKNOWN: -1,
    SCALE_TO_FILL: 0,
    SCALE_ASPECT_FIT: 1,
    SCALE_ASPECT_FILL: 2,
    REDRAW: 3,
    CENTER: 4,
    TOP: 5,
    BOTTOM: 6,
    LEFT: 7,
    RIGHT: 8,
    TOP_LEFT: 9,
    TOP_RIGHT: 10,
    BOTTOM_LEFT: 11,
    BOTTOM_RIGHT: 12,
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
    CONTACT_CHIP_TYPE_MISMATCH: 29,
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
    FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR: 83,
    FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR: 84,
    FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR: 85,
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
    GLARES_IN_BARCODE_AREA: 144,
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
    MRZ_QUALITY_WRONG_SYMBOL_POSITION: 200,
    MRZ_QUALITY_WRONG_BACKGROUND: 201,
    MRZ_QUALITY_WRONG_MRZ_WIDTH: 202,
    MRZ_QUALITY_WRONG_MRZ_HEIGHT: 203,
    MRZ_QUALITY_WRONG_LINE_POSITION: 204,
    MRZ_QUALITY_WRONG_FONT_TYPE: 205,
    OCR_QUALITY_TEXT_POSITION: 220,
    OCR_QUALITY_INVALID_FONT: 221,
    OCR_QUALITY_INVALID_BACKGROUND: 222,
    LAS_INK_INVALID_LINES_FREQUENCY: 230,
    DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED: 240,
    DOC_LIVENESS_INVALID_BARCODE_BACKGROUND: 241,
    ICAO_IDB_BASE_32_ERROR: 243,
    ICAO_IDB_ZIPPED_ERROR: 244,
    ICAO_IDB_MESSAGE_ZONE_EMPTY: 245,
    ICAO_IDB_SIGNATURE_MUST_BE_PRESENT: 246,
    ICAO_IDB_SIGNATURE_MUST_NOT_BE_PRESENT: 247,
    ICAO_IDB_CERTIFICATE_MUST_NOT_BE_PRESENT: 248,
    INCORRECT_OBJECT_COLOR: 250,
}

export const RFIDDelegate = {
    NULL: 0,
    NO_PA: 1,
    FULL: 2,
}

export const TextProcessing = {
    ocNoChange: 0,
    ocUppercase: 1,
    ocLowercase: 2,
    ocCapital: 3,
}

export const LogLevel = {
    FatalError: "FatalError",
    Error: "Error",
    Warning: "Warning",
    Info: "Info",
    Debug: "Debug",
}

export const AnimationImage = {
    UNKNOWN: 0,
    PASSPORT_SINGLE_PAGE: 1,
    PASSPORT_TWO_PAGES: 2,
    ID_FRONT: 3,
    ID_FRONT_MRZ: 4,
    ID_BACK: 5,
    ID_BACK_MRZ: 6,
    ID_BACK_BARCODE: 7,
    ID_BACK_BARCODE_MRZ: 8,
    BANK_CARD_FRONT: 9,
    BANK_CARD_BACK: 10,
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
    NTF_LDS_ICAO_CERTIFICATE_CHAIN_COUNTRY_NON_MATCHING: 0x90000250,
    NTF_LDS_ICAO_CERTIFICATE_VISUAL_MRZ_COUNTRY_NON_MATCHING: 0x90000251,
    NTF_LDS_MRZ_COUNTRYCODE_VISUALMRZ_NON_MATCHING: 0x00022019,
    NTF_LDS_ICAO_CERTIFICATE_MRZ_COUNTRY_NON_MATCHING: 0x90000252,
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
    IQC_BRIGHTNESS: 9,
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
    JABCODE: 19,
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
    SECURITY_FEATURE_TYPE_OCR: 28,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_VISUAL: 29,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_RFID: 30,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_LIVE: 31,
    SECURITY_FEATURE_TYPE_LIVENESS_DEPTH: 32,
    SECURITY_FEATURE_TYPE_MICROTEXT: 33,
    SECURITY_FEATURE_TYPE_FLUORESCENT_OBJECT: 34,
    SECURITY_FEATURE_TYPE_LANDMARKS_CHECK: 35,
    SECURITY_FEATURE_TYPE_FACE_PRESENCE: 36,
    SECURITY_FEATURE_TYPE_FACE_ABSENCE: 38,
    SECURITY_FEATURE_TYPE_LIVENESS_SCREEN_CAPTURE: 39,
    SECURITY_FEATURE_TYPE_LIVENESS_ELECTRONIC_DEVICE: 40,
    SECURITY_FEATURE_TYPE_LIVENESS_OVI: 41,
    SECURITY_FEATURE_TYPE_BARCODE_SIZE_CHECK: 42,
    SECURITY_FEATURE_TYPE_LAS_INK: 43,
    SECURITY_FEATURE_TYPE_LIVENESS_MLI: 44,
    SECURITY_FEATURE_TYPE_LIVENESS_BARCODE_BACKGROUND: 45,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_BARCODE: 46,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFID_VS_BARCODE: 47,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXT_VS_BARCODE: 48,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_BARCODE_VS_CAMERA: 49,
    SECURITY_FEATURE_TYPE_CHECK_DIGITAL_SIGNATURE: 50,
    SECURITY_FEATURE_TYPE_CONTACT_CHIP_CLASSIFICATION: 51,
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

export const ButtonTag = {
    CLOSE: 1001,
    TORCH: 1002,
    CAPTURE: 1003,
    CHANGE_FRAME: 1004,
    SKIP: 1005,
    CAMERA_SWITCH: 1006,
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

export const CustomizationFont = {
    RFID_PROCESSING_SCREEN_HINT_LABEL: "rfidProcessingScreenHintLabel",
    RFID_PROCESSING_SCREEN_PROGRESS_LABEL: "rfidProcessingScreenProgressLabel",
    RFID_PROCESSING_SCREEN_RESULT_LABEL: "rfidProcessingScreenResultLabel",
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
    GF_CONTACT_CHIP: 213,
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
}

export const RegDeviceConfigType = {
    DEVICE_7310: "DEVICE_7310",
}

export const CaptureSessionPreset = {
    UNKNOWN: -1,
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    PHOTO: 3,
    INPUT_PRIORITY: 4,
    PRESET_1280x720: 6,
    PRESET_1920x1080: 7,
    PRESET_3840x2160: 8,
    FRAME_960x540: 9,
    FRAME_1280x720: 10,
    PRESET_640x480: 12,
    PRESET_352x288: 13,
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
    FT_DLCLASSCODE_RM_FROM: 651,
    FT_DLCLASSCODE_RM_NOTES: 652,
    FT_DLCLASSCODE_RM_TO: 653,
    FT_DLCLASSCODE_PW_FROM: 654,
    FT_DLCLASSCODE_PW_NOTES: 655,
    FT_DLCLASSCODE_PW_TO: 656,
    FT_DLCLASSCODE_EB_FROM: 657,
    FT_DLCLASSCODE_EB_NOTES: 658,
    FT_DLCLASSCODE_EB_TO: 659,
    FT_DLCLASSCODE_EC_FROM: 660,
    FT_DLCLASSCODE_EC_NOTES: 661,
    FT_DLCLASSCODE_EC_TO: 662,
    FT_DLCLASSCODE_EC1_FROM: 663,
    FT_DLCLASSCODE_EC1_NOTES: 664,
    FT_DLCLASSCODE_EC1_TO: 665,
    FT_PLACE_OF_BIRTH_CITY: 666,
    FT_YEAR_OF_BIRTH: 667,
    FT_YEAR_OF_EXPIRY: 668,
    FT_GRANDFATHER_NAME_MATERNAL: 669,
    FT_FIRST_SURNAME: 670,
    FT_MONTH_OF_BIRTH: 671,
    FT_ADDRESS_FLOOR_NUMBER: 672,
    FT_ADDRESS_ENTRANCE: 673,
    FT_ADDRESS_BLOCK_NUMBER: 674,
    FT_ADDRESS_STREET_NUMBER: 675,
    FT_ADDRESS_STREET_TYPE: 676,
    FT_ADDRESS_CITY_SECTOR: 677,
    FT_ADDRESS_COUNTY_TYPE: 678,
    FT_ADDRESS_CITY_TYPE: 679,
    FT_ADDRESS_BUILDING_TYPE: 680,
    FT_DATE_OF_RETIREMENT: 681,
    FT_DOCUMENT_STATUS: 682,
    FT_SIGNATURE: 683,
    FT_UNIQUE_CERTIFICATE_IDENTIFIER: 684,
    FT_EMAIL: 685,
    FT_DATE_OF_SPECIMEN_COLLECTION: 686,
    FT_TYPE_OF_TESTING: 687,
    FT_RESULT_OF_TESTING: 688,
    FT_METHOD_OF_TESTING: 689,
    FT_DIGITAL_TRAVEL_AUTHORIZATION_NUMBER: 690,
    FT_DATE_OF_FIRST_POSITIVE_TEST_RESULT: 691,
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
    BENGALI_BANGLADESH: 2117,
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
    ASSAMESE: 1101,
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
    BENGALI_INDIA: 1093,
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
    MALTESE: 1082,
    BURMESE: 1109,
    KHMER: 1107,
    KARAKALPAK_LATIN: 10012,
    MALAYALAM: 1100,
    NEPALI: 1121,
    ORIYA: 1096,
    URDU_DETECTION: 10560,
}

export const CustomizationImage = {
    RFID_PROCESSING_SCREEN_FAILURE_IMAGE: "rfidProcessingScreenFailureImage",
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
    RPRM_LIGHT_WHITE_FULL_OVD: (6 | 67108864),
}

export const eMrzDetectionModes = {
    DEFAULT: 0,
    RESIZE_BINARIZE_WINDOW: 1,
    BLUR_BEFORE_BINARIZATION: 2,
}

export const Enum = {
   FontStyle,
   eRPRM_Authenticity,
   CustomizationColor,
   eRFID_ErrorCodes,
   eLDS_ParsingErrorCodes,
   eRFID_CertificateType,
   RGLMeasureSystem,
   eRPRM_ResultType,
   FrameShapeType,
   eRFID_BaudRate,
   LineCap,
   eRPRM_FieldVerificationResult,
   DocReaderAction,
   eProcessGLCommands,
   PKDResourceType,
   eRFID_AuthenticationProcedureType,
   DocumentReaderErrorCodes,
   ScenarioIdentifier,
   eRFID_AccessControl_ProcedureType,
   eRFID_NotificationCodes,
   CameraPosition,
   eRFID_Password_Type,
   ViewContentMode,
   BarcodeResult,
   eSignManagementAction,
   eCheckDiagnose,
   RFIDDelegate,
   TextProcessing,
   LogLevel,
   AnimationImage,
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
   ButtonTag,
   HoloAnimationType,
   eRequestCommand,
   CustomizationFont,
   ImageFormat,
   eGraphicFieldType,
   RegDeviceConfigType,
   CaptureSessionPreset,
   CameraMode,
   CaptureMode,
   eCheckResult,
   eRFID_TerminalType,
   eRFID_DataFile_Type,
   eVisualFieldType,
   DocReaderOrientation,
   LCID,
   CustomizationImage,
   DocReaderFrame,
   eRPRM_Lights,
   eMrzDetectionModes,
}

export default class DocumentReader {
    static getDocumentReaderIsReady(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDocumentReaderStatus(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static isAuthenticatorAvailableForUse(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static isBlePermissionsGranted(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getRfidSessionStatus(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setRfidSessionStatus(status: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getTag(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setTag(tag: string | null, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getTenant(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setTenant(tenant: string | null, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getEnv(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setEnv(env: string | null, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getFunctionality(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setFunctionality(functionality: Functionality, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getProcessParams(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setProcessParams(processParams: ProcessParams, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getCustomization(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setCustomization(customization: Customization, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getRfidScenario(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setRfidScenario(rfidScenario: RFIDScenario, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static resetConfiguration(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static initializeReader(config: DocReaderConfig, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static initializeReaderWithBleDeviceConfig(config: DocReaderConfig, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static deinitializeReader(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static prepareDatabase(databaseType: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static removeDatabase(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static runAutoUpdate(databaseId: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static cancelDBUpdate(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static checkDatabaseUpdate(databaseId: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static scan(config: ScannerConfig, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static recognize(config: RecognizeConfig, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static startNewPage(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static stopScanner(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static startRFIDReader(requestPACertificates: boolean, requestTACertificates: boolean, requestTASignature: boolean, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static readRFID(requestPACertificates: boolean, requestTACertificates: boolean, requestTASignature: boolean, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static stopRFIDReader(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static providePACertificates(certificates: PKDCertificate[] | null, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static provideTACertificates(certificates: PKDCertificate[] | null, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static provideTASignature(signature: string, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setTCCParams(params: TccParams, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static addPKDCertificates(certificates: PKDCertificate[], successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static clearPKDCertificates(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static startNewSession(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static startBluetoothService(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static setLocalizationDictionary(dictionary: Record<string, string>, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getLicense(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getAvailableScenarios(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getIsRFIDAvailableForUse(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDocReaderVersion(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getDocReaderDocumentsDatabase(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static finalizePackage(successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
    static getTranslation(className: string, value: number, successCallback: (response: string) => void, errorCallback?: (error: string) => void): void
}