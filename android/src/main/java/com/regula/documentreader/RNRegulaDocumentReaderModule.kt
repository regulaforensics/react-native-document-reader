@file:Suppress("UNCHECKED_CAST", "MissingPermission")

package com.regula.documentreader

import android.annotation.SuppressLint
import android.app.Activity
import android.app.PendingIntent
import android.content.Intent
import android.content.IntentFilter
import android.nfc.NfcAdapter
import android.nfc.tech.IsoDep
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.modules.core.PermissionAwareActivity
import com.regula.common.LocalizationCallbacks
import com.regula.documentreader.Convert.bitmapToBase64
import com.regula.documentreader.Convert.byteArrayFromBase64
import com.regula.documentreader.api.DocumentReader.Instance
import com.regula.documentreader.api.completions.IDocumentReaderCompletion
import com.regula.documentreader.api.completions.IDocumentReaderInitCompletion
import com.regula.documentreader.api.completions.IDocumentReaderPrepareDbCompletion
import com.regula.documentreader.api.completions.model.PrepareProgress
import com.regula.documentreader.api.completions.rfid.IRfidPKDCertificateCompletion
import com.regula.documentreader.api.completions.rfid.IRfidReaderCompletion
import com.regula.documentreader.api.completions.rfid.IRfidReaderRequest
import com.regula.documentreader.api.completions.rfid.IRfidTASignatureCompletion
import com.regula.documentreader.api.completions.rfid.certificates.IRfidPACertificates
import com.regula.documentreader.api.completions.rfid.certificates.IRfidTACertificates
import com.regula.documentreader.api.completions.rfid.certificates.IRfidTASignature
import com.regula.documentreader.api.enums.DocReaderAction
import com.regula.documentreader.api.enums.LCID
import com.regula.documentreader.api.enums.eImageQualityCheckType
import com.regula.documentreader.api.enums.eLDS_ParsingErrorCodes
import com.regula.documentreader.api.enums.eLDS_ParsingNotificationCodes
import com.regula.documentreader.api.enums.eRFID_DataFile_Type
import com.regula.documentreader.api.enums.eRFID_ErrorCodes
import com.regula.documentreader.api.enums.eVisualFieldType
import com.regula.documentreader.api.errors.DocReaderRfidException
import com.regula.documentreader.api.errors.DocumentReaderException
import com.regula.documentreader.api.internal.core.CoreScenarioUtil
import com.regula.documentreader.api.results.DocumentReaderNotification
import com.regula.documentreader.api.results.DocumentReaderResults
import com.regula.documentreader.api.results.DocumentReaderResults.fromRawResults
import com.regula.documentreader.api.results.DocumentReaderScenario
import org.json.JSONArray
import org.json.JSONObject

@Suppress("unused", "UNUSED_PARAMETER")
class RNRegulaDocumentReaderModule(rc: ReactApplicationContext) : ReactContextBaseJavaModule(rc), ActivityEventListener {
    init {
        reactContext = rc
        reactContext.addActivityEventListener(this)
    }

    @ReactMethod
    fun addListener(eventName: String?) = Unit

    @ReactMethod
    fun removeListeners(count: Int?) = Unit

    @ReactMethod
    fun exec(moduleName: String?, action: String?, args: ReadableArray, successCallback: com.facebook.react.bridge.Callback, errorCallback: com.facebook.react.bridge.Callback) = exec(action, args, successCallback, errorCallback)
    override fun getName() = "RNRegulaDocumentReader"
    override fun onNewIntent(intent: Intent) {
        newIntent(intent)
    }

    override fun onActivityResult(activity: Activity, requestCode: Int, resultCode: Int, data: Intent?) {
        onActivityResult(requestCode, resultCode, data)
    }
}

fun requestPermissions(activity: Activity, permissions: Array<String>, requestCode: Int) {
    (activity as PermissionAwareActivity).requestPermissions(permissions, requestCode) { code, perms, grantResults ->
        onRequestPermissionsResult(code, perms, grantResults)
    }
}

fun startActivityForResult(activity: Activity, intent: Intent, requestCode: Int) {
    activity.startActivityForResult(intent, requestCode)
}

fun sendEvent(event: String, data: Any? = "") {
    val map = Arguments.createMap()
    val result = if (data is JSONObject || data is JSONArray) data.toString() else data.toString() + ""
    map.putString("msg", result)
    reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java).emit(event, map)
}

fun <T> argsNullable(index: Int): T? {
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Rewrite it according to react native documentation!!!
    // the is no int or double in js so all ints are sent as double by default
    val value = args[index]
    if (value is Double) if (value % 1 == 0.0) {
        val intValue = value.toInt()
        return intValue as T
    }
    if (args[index].toString() == "null") return null
    return args[index] as T
}

lateinit var args: JSONArray
lateinit var reactContext: ReactContext
val lifecycle: Lifecycle
    get() = (activity as AppCompatActivity).lifecycle

fun exec(action: String?, arguments: ReadableArray, successCallback: com.facebook.react.bridge.Callback, errorCallback: com.facebook.react.bridge.Callback) {
    args = JSONArray(arguments.toArrayList())
    reactContext.currentActivity?.let { activity = it }
    val callback = object : Callback {
        override fun success(data: Any?) = successCallback.invoke(data.toSendable())
        override fun error(message: String) = errorCallback.invoke(message)
    }
    when (action) {
        "getDocumentReaderIsReady" -> getDocumentReaderIsReady(callback)
        "getDocumentReaderStatus" -> getDocumentReaderStatus(callback)
        "getRfidSessionStatus" -> getRfidSessionStatus(callback)
        "setRfidSessionStatus" -> setRfidSessionStatus(callback)
        "getTag" -> getTag(callback)
        "setTag" -> setTag(argsNullable(0))
        "getTenant" -> getTenant(callback)
        "setTenant" -> setTenant(argsNullable(0))
        "getEnv" -> getEnv(callback)
        "setEnv" -> setEnv(argsNullable(0))
        "getFunctionality" -> getFunctionality(callback)
        "setFunctionality" -> setFunctionality(args(0))
        "getProcessParams" -> getProcessParams(callback)
        "setProcessParams" -> setProcessParams(args(0))
        "getCustomization" -> getCustomization(callback)
        "setCustomization" -> setCustomization(args(0))
        "getRfidScenario" -> getRfidScenario(callback)
        "setRfidScenario" -> setRfidScenario(args(0))
        "resetConfiguration" -> resetConfiguration()
        "initializeReader" -> initializeReader(callback, args(0))
        "initializeReaderWithBleDeviceConfig" -> initializeReaderWithBleDeviceConfig(callback, args(0))
        "deinitializeReader" -> deinitializeReader(callback)
        "prepareDatabase" -> prepareDatabase(callback, args(0))
        "removeDatabase" -> removeDatabase(callback)
        "runAutoUpdate" -> runAutoUpdate(callback, args(0))
        "cancelDBUpdate" -> cancelDBUpdate(callback)
        "checkDatabaseUpdate" -> checkDatabaseUpdate(callback, args(0))
        "scan" -> scan(args(0))
        "recognize" -> recognize(args(0))
        "startNewPage" -> startNewPage(callback)
        "stopScanner" -> stopScanner(callback)
        "startRFIDReader" -> startRFIDReader(args(0), args(1), args(2))
        "readRFID" -> readRFID(args(0), args(1), args(2))
        "stopRFIDReader" -> stopRFIDReader(callback)
        "providePACertificates" -> providePACertificates(callback, argsNullable(0))
        "provideTACertificates" -> provideTACertificates(callback, argsNullable(0))
        "provideTASignature" -> provideTASignature(callback, args(0))
        "setTCCParams" -> setTCCParams(callback, args(0))
        "addPKDCertificates" -> addPKDCertificates(callback, args(0))
        "clearPKDCertificates" -> clearPKDCertificates(callback)
        "startNewSession" -> startNewSession(callback)
        "connectBluetoothDevice" -> connectBluetoothDevice(callback)
        "setLocalizationDictionary" -> setLocalizationDictionary(args(0))
        "getLicense" -> getLicense(callback)
        "getAvailableScenarios" -> getAvailableScenarios(callback)
        "getIsRFIDAvailableForUse" -> getIsRFIDAvailableForUse(callback)
        "isAuthenticatorAvailableForUse" -> isAuthenticatorAvailableForUse(callback)
        "isAuthenticatorRFIDAvailableForUse" -> isAuthenticatorRFIDAvailableForUse(callback)
        "getDocReaderVersion" -> getDocReaderVersion(callback)
        "getDocReaderDocumentsDatabase" -> getDocReaderDocumentsDatabase(callback)
        "textFieldValueByType" -> textFieldValueByType(callback, args(0), args(1))
        "textFieldValueByTypeLcid" -> textFieldValueByTypeLcid(callback, args(0), args(1), args(2))
        "textFieldValueByTypeSource" -> textFieldValueByTypeSource(callback, args(0), args(1), args(2))
        "textFieldValueByTypeLcidSource" -> textFieldValueByTypeLcidSource(callback, args(0), args(1), args(2), args(3))
        "textFieldValueByTypeSourceOriginal" -> textFieldValueByTypeSourceOriginal(callback, args(0), args(1), args(2), args(3))
        "textFieldValueByTypeLcidSourceOriginal" -> textFieldValueByTypeLcidSourceOriginal(callback, args(0), args(1), args(2), args(3), args(4))
        "textFieldByType" -> textFieldByType(callback, args(0), args(1))
        "textFieldByTypeLcid" -> textFieldByTypeLcid(callback, args(0), args(1), args(2))
        "graphicFieldByTypeSource" -> graphicFieldByTypeSource(callback, args(0), args(1), args(2))
        "graphicFieldByTypeSourcePageIndex" -> graphicFieldByTypeSourcePageIndex(callback, args(0), args(1), args(2), args(3))
        "graphicFieldByTypeSourcePageIndexLight" -> graphicFieldByTypeSourcePageIndexLight(callback, args(0), args(1), args(2), args(3), args(4))
        "graphicFieldImageByType" -> graphicFieldImageByType(callback, args(0), args(1))
        "graphicFieldImageByTypeSource" -> graphicFieldImageByTypeSource(callback, args(0), args(1), args(2))
        "graphicFieldImageByTypeSourcePageIndex" -> graphicFieldImageByTypeSourcePageIndex(callback, args(0), args(1), args(2), args(3))
        "graphicFieldImageByTypeSourcePageIndexLight" -> graphicFieldImageByTypeSourcePageIndexLight(callback, args(0), args(1), args(2), args(3), args(4))
        "containers" -> containers(callback, args(0), args(1))
        "encryptedContainers" -> encryptedContainers(callback, args(0))
        "finalizePackage" -> finalizePackage(callback)
        "endBackendTransaction" -> endBackendTransaction(callback)
        "getTranslation" -> getTranslation(callback, args(0), args(1))
    }
}

inline fun <reified T> args(index: Int) = argsNullable<T>(index)!!
interface Callback {
    fun success(data: Any? = "")
    fun error(message: String)
}

@SuppressLint("StaticFieldLeak")
lateinit var activity: Activity
lateinit var lifecycleObserver: LifecycleEventObserver
val context
    get() = activity

var backgroundRFIDEnabled = false

const val eventCompletion = "completion"
const val eventDatabaseProgress = "database_progress"

const val rfidOnProgressEvent = "rfidOnProgressCompletion"
const val rfidOnChipDetectedEvent = "rfidOnChipDetectedEvent"
const val rfidOnRetryReadChipEvent = "rfidOnRetryReadChipEvent"

const val eventPACertificateCompletion = "pa_certificate_completion"
const val eventTACertificateCompletion = "ta_certificate_completion"
const val eventTASignatureCompletion = "ta_signature_completion"

const val eventVideoEncoderCompletion = "video_encoder_completion"
const val onCustomButtonTappedEvent = "onCustomButtonTappedEvent"

fun getDocumentReaderIsReady(callback: Callback) = callback.success(Instance().isReady)

fun getDocumentReaderStatus(callback: Callback) = callback.success(Instance().status)

fun getRfidSessionStatus(callback: Callback) = callback.error("getRfidSessionStatus() is an ios-only method")

fun setRfidSessionStatus(callback: Callback) = callback.error("setRfidSessionStatus() is an ios-only method")

fun getTag(callback: Callback) = callback.success(Instance().tag)

fun setTag(tag: String?) = tag.let { Instance().tag = it }

fun getTenant(callback: Callback) = callback.success(Instance().tenant)

fun setTenant(tag: String?) = tag.let { Instance().tenant = it }

fun getEnv(callback: Callback) = callback.success(Instance().env)

fun setEnv(tag: String?) = tag.let { Instance().env = it }

fun getFunctionality(callback: Callback) = callback.success(getFunctionality(Instance().functionality()))

fun setFunctionality(functionality: JSONObject) = setFunctionality(Instance().functionality(), functionality)

fun getProcessParams(callback: Callback) = callback.success(getProcessParams(Instance().processParams()))

fun setProcessParams(processParams: JSONObject) = setProcessParams(Instance().processParams(), processParams)

fun getCustomization(callback: Callback) = callback.success(getCustomization(Instance().customization()))

fun setCustomization(customization: JSONObject) = setCustomization(Instance().customization(), customization, context)

fun getRfidScenario(callback: Callback) = callback.success(getRfidScenario(Instance().rfidScenario()))

fun setRfidScenario(rfidScenario: JSONObject) = setRfidScenario(Instance().rfidScenario(), rfidScenario)

fun resetConfiguration() = Instance().resetConfiguration()

fun initializeReader(callback: Callback, config: JSONObject) = Instance().initializeReader(context, docReaderConfigFromJSON(config), getInitCompletion(callback))

fun initializeReaderWithBleDeviceConfig(callback: Callback, config: JSONObject) = Instance().initializeReader(context, bleDeviceConfigFromJSON(config), getInitCompletion(callback))

fun deinitializeReader(callback: Callback) {
    Instance().deinitializeReader()
    callback.success()
}

fun prepareDatabase(callback: Callback, databaseID: String) = Instance().prepareDatabase(context, databaseID, getPrepareCompletion(callback))

fun removeDatabase(callback: Callback) = callback.success(Instance().removeDatabase(context))

fun runAutoUpdate(callback: Callback, databaseID: String) = Instance().runAutoUpdate(context, databaseID, getPrepareCompletion(callback))

fun cancelDBUpdate(callback: Callback) = callback.success(Instance().cancelDBUpdate(context))

fun checkDatabaseUpdate(callback: Callback, databaseID: String) = Instance().checkDatabaseUpdate(context, databaseID) { callback.success(generateDocReaderDocumentsDatabase(it)) }

fun scan(config: JSONObject) {
    stopBackgroundRFID()
    Instance().showScanner(context, scannerConfigFromJSON(config), completion)
}

fun recognize(config: JSONObject) {
    stopBackgroundRFID()
    Instance().recognize(recognizeConfigFromJSON(config), completion)
}

fun startNewPage(callback: Callback) {
    Instance().startNewPage()
    callback.success()
}

fun stopScanner(callback: Callback) {
    Instance().stopScanner(context)
    callback.success()
}

fun startRFIDReader(onRequestPACertificates: Boolean, onRequestTACertificates: Boolean, onRequestTASignature: Boolean) {
    stopBackgroundRFID()
    requestType = RfidReaderRequestType(
        onRequestPACertificates,
        onRequestTACertificates,
        onRequestTASignature
    )
    Instance().startRFIDReader(context, rfidReaderCompletion, requestType.getRfidReaderRequest())
}

fun readRFID(onRequestPACertificates: Boolean, onRequestTACertificates: Boolean, onRequestTASignature: Boolean) {
    requestType = RfidReaderRequestType(
        onRequestPACertificates,
        onRequestTACertificates,
        onRequestTASignature
    )
    startForegroundDispatch()
}

fun stopRFIDReader(callback: Callback) {
    Instance().stopRFIDReader(context)
    stopBackgroundRFID()
    callback.success()
}

fun providePACertificates(callback: Callback, certificates: JSONArray?) {
    paCertificateCompletion!!.onCertificatesReceived(arrayFromJSON(certificates, ::pkdCertificateFromJSON, arrayOfNulls(certificates?.length() ?: 0)))
    callback.success()
}

fun provideTACertificates(callback: Callback, certificates: JSONArray?) {
    taCertificateCompletion!!.onCertificatesReceived(arrayFromJSON(certificates, ::pkdCertificateFromJSON, arrayOfNulls(certificates?.length() ?: 0)))
    callback.success()
}

fun provideTASignature(callback: Callback, signature: String?) {
    taSignatureCompletion!!.onSignatureReceived(byteArrayFromBase64(signature))
    callback.success()
}

fun setTCCParams(callback: Callback, params: JSONObject) {
    Instance().setTccParams(tccParamsFromJSON(params)) { success, error ->
        callback.success(generateSuccessCompletion(success, error))
    }
}

fun addPKDCertificates(callback: Callback, certificates: JSONArray) {
    Instance().addPKDCertificates(listFromJSON(certificates, ::pkdCertificateFromJSON)!!)
    callback.success()
}

fun clearPKDCertificates(callback: Callback) {
    Instance().clearPKDCertificates()
    callback.success()
}

fun startNewSession(callback: Callback) {
    Instance().startNewSession()
    callback.success()
}

fun setLocalizationDictionary(dictionary: JSONObject) {
    localizationCallbacks = LocalizationCallbacks { if (dictionary.has(it)) dictionary.getString(it) else null }
    Instance().setLocalizationCallback(localizationCallbacks!!)
}

fun getLicense(callback: Callback) = callback.success(generateLicense(Instance().license()))

fun getAvailableScenarios(callback: Callback) {
    val scenarios: MutableList<DocumentReaderScenario> = ArrayList()
    for (scenario: DocumentReaderScenario in Instance().availableScenarios)
        scenarios.add(CoreScenarioUtil.getScenario(scenario.name))
    callback.success(generateList(scenarios, ::generateDocumentReaderScenario))
}

fun getIsRFIDAvailableForUse(callback: Callback) = callback.success(Instance().isRFIDAvailableForUse)

fun isAuthenticatorAvailableForUse(callback: Callback) = callback.success(Instance().isAuthenticatorAvailableForUse)

fun isAuthenticatorRFIDAvailableForUse(callback: Callback) = callback.success(Instance().isAuthenticatorRFIDAvailableForUse)

fun getDocReaderVersion(callback: Callback) = callback.success(generateDocReaderVersion(Instance().version))

fun getDocReaderDocumentsDatabase(callback: Callback) = callback.success(Instance().version?.let { generateDocReaderDocumentsDatabase(it.database) })

fun textFieldValueByType(callback: Callback, raw: String, fieldType: Int) = callback.success(fromRawResults(raw).getTextFieldValueByType(fieldType))

fun textFieldValueByTypeLcid(callback: Callback, raw: String, fieldType: Int, lcid: Int) = callback.success(fromRawResults(raw).getTextFieldValueByType(fieldType, lcid))

fun textFieldValueByTypeSource(callback: Callback, raw: String, fieldType: Int, source: Int) = callback.success(fromRawResults(raw).getTextFieldValueByTypeAndSource(fieldType, source))

fun textFieldValueByTypeLcidSource(callback: Callback, raw: String, fieldType: Int, lcid: Int, source: Int) = callback.success(fromRawResults(raw).getTextFieldValueByType(fieldType, lcid, source))

fun textFieldValueByTypeSourceOriginal(callback: Callback, raw: String, fieldType: Int, source: Int, original: Boolean) = callback.success(fromRawResults(raw).getTextFieldValueByTypeAndSource(fieldType, source, original))

fun textFieldValueByTypeLcidSourceOriginal(callback: Callback, raw: String, fieldType: Int, lcid: Int, source: Int, original: Boolean) = callback.success(fromRawResults(raw).getTextFieldValueByType(fieldType, lcid, source, original))

fun textFieldByType(callback: Callback, raw: String, fieldType: Int) = callback.success(generateDocumentReaderTextField(fromRawResults(raw).getTextFieldByType(fieldType), context))

fun textFieldByTypeLcid(callback: Callback, raw: String, fieldType: Int, lcid: Int) = callback.success(generateDocumentReaderTextField(fromRawResults(raw).getTextFieldByType(fieldType, lcid), context))

fun graphicFieldByTypeSource(callback: Callback, raw: String, fieldType: Int, source: Int) = callback.success(generateDocumentReaderGraphicField(fromRawResults(raw).getGraphicFieldByType(fieldType, source), context))

fun graphicFieldByTypeSourcePageIndex(callback: Callback, raw: String, fieldType: Int, source: Int, pageIndex: Int) = callback.success(generateDocumentReaderGraphicField(fromRawResults(raw).getGraphicFieldByType(fieldType, source, pageIndex), context))

fun graphicFieldByTypeSourcePageIndexLight(callback: Callback, raw: String, fieldType: Int, source: Int, pageIndex: Int, light: Int) = callback.success(generateDocumentReaderGraphicField(fromRawResults(raw).getGraphicFieldByType(fieldType, source, pageIndex, light), context))

fun graphicFieldImageByType(callback: Callback, raw: String, fieldType: Int) = callback.success(bitmapToBase64(fromRawResults(raw).getGraphicFieldImageByType(fieldType)))

fun graphicFieldImageByTypeSource(callback: Callback, raw: String, fieldType: Int, source: Int) = callback.success(bitmapToBase64(fromRawResults(raw).getGraphicFieldImageByType(fieldType, source)))

fun graphicFieldImageByTypeSourcePageIndex(callback: Callback, raw: String, fieldType: Int, source: Int, pageIndex: Int) = callback.success(bitmapToBase64(fromRawResults(raw).getGraphicFieldImageByType(fieldType, source, pageIndex)))

fun graphicFieldImageByTypeSourcePageIndexLight(callback: Callback, raw: String, fieldType: Int, source: Int, pageIndex: Int, light: Int) = callback.success(bitmapToBase64(fromRawResults(raw).getGraphicFieldImageByType(fieldType, source, pageIndex, light)))

fun containers(callback: Callback, raw: String, resultType: JSONArray) = callback.success(fromRawResults(raw).getContainers(resultType.toIntArray()!!))

fun encryptedContainers(callback: Callback, raw: String) = callback.success(fromRawResults(raw).encryptedContainers)

fun finalizePackage(callback: Callback) = Instance().finalizePackage { action, info, error -> callback.success(generateFinalizePackageCompletion(action, info, error)) }

fun endBackendTransaction(callback: Callback) {
    Instance().endBackendTransaction()
    callback.success()
}

fun getTranslation(callback: Callback, className: String, value: Int) = when (className) {
    "RFIDErrorCodes" -> callback.success(eRFID_ErrorCodes.getTranslation(context, value))
    "LDSParsingErrorCodes" -> callback.success(eLDS_ParsingErrorCodes.getTranslation(context, value))
    "LDSParsingNotificationCodes" -> callback.success(eLDS_ParsingNotificationCodes.getTranslation(context, value))
    "ImageQualityCheckType" -> callback.success(eImageQualityCheckType.getTranslation(context, value))
    "RFIDDataFileType" -> callback.success(eRFID_DataFile_Type.getTranslation(context, value))
    "VisualFieldType" -> callback.success(eVisualFieldType.getTranslation(context, value))
    "LCID" -> callback.success(LCID.getTranslation(context, value))
    else -> null
}

val completed = { action: Int, results: DocumentReaderResults?, error: DocumentReaderException? ->
    sendEvent(eventCompletion, generateCompletion(action, results, error, context))
    if ((action == DocReaderAction.ERROR) || (action == DocReaderAction.CANCEL) || ((action == DocReaderAction.COMPLETE) && (results?.rfidResult == 1)))
        stopBackgroundRFID()
}

val completion = IDocumentReaderCompletion(completed)

val rfidReaderCompletion = object : IRfidReaderCompletion() {
    override fun onCompleted(action: Int, results: DocumentReaderResults?, error: DocumentReaderException?): Unit = completed(action, results, error)
    override fun onChipDetected(): Unit = sendEvent(rfidOnChipDetectedEvent)
    override fun onRetryReadChip(error: DocReaderRfidException) = sendEvent(rfidOnRetryReadChipEvent, generateRegulaException(error))
    override fun onProgress(notification: DocumentReaderNotification) = sendEvent(rfidOnProgressEvent, generateDocumentReaderNotification(notification))
}

fun getPrepareCompletion(callback: Callback) = object : IDocumentReaderPrepareDbCompletion() {
    override fun onPrepareProgressChanged(progress: PrepareProgress) = sendEvent(eventDatabaseProgress, generatePrepareProgress(progress))
    override fun onPrepareCompleted(success: Boolean, error: DocumentReaderException?) = callback.success(generateSuccessCompletion(success, error))
}

fun getInitCompletion(callback: Callback) = IDocumentReaderInitCompletion { success, error ->
    if (success) {
        Instance().setVideoEncoderCompletion { _, file -> sendEvent(eventVideoEncoderCompletion, file.path) }
        Instance().setOnClickListener { sendEvent(onCustomButtonTappedEvent, it.tag) }
    }
    callback.success(generateSuccessCompletion(success, error))
}

var paCertificateCompletion: IRfidPKDCertificateCompletion? = null
var taCertificateCompletion: IRfidPKDCertificateCompletion? = null
var taSignatureCompletion: IRfidTASignatureCompletion? = null

class RfidReaderRequestType(
    val doPACertificates: Boolean,
    val doTACertificates: Boolean,
    val doTASignature: Boolean
) {
    private val onRequestPACertificates = IRfidPACertificates { serialNumber, issuer, completion ->
        paCertificateCompletion = completion
        sendEvent(eventPACertificateCompletion, generatePACertificateCompletion(serialNumber, issuer))
    }
    private val onRequestTACertificates = IRfidTACertificates { keyCAR, completion ->
        taCertificateCompletion = completion
        sendEvent(eventTACertificateCompletion, keyCAR)
    }
    private val onRequestTASignature = IRfidTASignature { challenge, completion ->
        taSignatureCompletion = completion
        sendEvent(eventTASignatureCompletion, generateTAChallenge(challenge))
    }

    fun getRfidReaderRequest(): IRfidReaderRequest? = when {
        !doPACertificates && !doTACertificates && doTASignature -> IRfidReaderRequest(onRequestTASignature)
        !doPACertificates && doTACertificates && !doTASignature -> IRfidReaderRequest(onRequestTACertificates)
        !doPACertificates && doTACertificates && doTASignature -> IRfidReaderRequest(onRequestTACertificates, onRequestTASignature)
        doPACertificates && !doTACertificates && !doTASignature -> IRfidReaderRequest(onRequestPACertificates)
        doPACertificates && !doTACertificates && doTASignature -> IRfidReaderRequest(onRequestPACertificates, onRequestTASignature)
        doPACertificates && doTACertificates && !doTASignature -> IRfidReaderRequest(onRequestPACertificates, onRequestTACertificates)
        doPACertificates && doTACertificates && doTASignature -> IRfidReaderRequest(onRequestPACertificates, onRequestTACertificates, onRequestTASignature)
        else -> null
    }
}

var requestType = RfidReaderRequestType(
    doPACertificates = false,
    doTACertificates = false,
    doTASignature = false
)

@Suppress("DEPRECATION")
fun newIntent(intent: Intent): Boolean {
    if (intent.action != NfcAdapter.ACTION_TECH_DISCOVERED) return false
    Instance().readRFID(
        IsoDep.get(intent.getParcelableExtra(NfcAdapter.EXTRA_TAG)),
        rfidReaderCompletion,
        requestType.getRfidReaderRequest()
    )
    return true
}

fun startForegroundDispatch() {
    backgroundRFIDEnabled = true
    val filters: Array<IntentFilter?> = arrayOfNulls(1)
    filters[0] = IntentFilter()
    filters[0]!!.addAction(NfcAdapter.ACTION_TECH_DISCOVERED)
    filters[0]!!.addCategory(Intent.CATEGORY_DEFAULT)
    val techList = arrayOf(arrayOf("android.nfc.tech.IsoDep"))
    val intent = Intent(context, context.javaClass)
    val flag = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) PendingIntent.FLAG_MUTABLE else 0
    val pendingIntent = PendingIntent.getActivity(context, 0, intent, flag)

    if (lifecycle.currentState.isAtLeast(Lifecycle.State.RESUMED))
        enableForegroundDispatch(pendingIntent, filters, techList)
    lifecycleObserver = LifecycleEventObserver { _, event ->
        if (backgroundRFIDEnabled) when (event) {
            Lifecycle.Event.ON_RESUME -> enableForegroundDispatch(pendingIntent, filters, techList)
            Lifecycle.Event.ON_PAUSE -> disableForegroundDispatch()
            else -> Unit
        }
    }
    context.runOnUiThread { lifecycle.addObserver(lifecycleObserver) }
}

fun enableForegroundDispatch(
    pendingIntent: PendingIntent,
    filters: Array<IntentFilter?>,
    techList: Array<Array<String>>
) = NfcAdapter.getDefaultAdapter(context).enableForegroundDispatch(activity, pendingIntent, filters, techList)

fun disableForegroundDispatch() = NfcAdapter.getDefaultAdapter(activity).disableForegroundDispatch(activity)

fun stopBackgroundRFID() {
    if (!backgroundRFIDEnabled) return
    backgroundRFIDEnabled = false
    if (lifecycle.currentState.isAtLeast(Lifecycle.State.RESUMED))
        disableForegroundDispatch()
    context.runOnUiThread { lifecycle.removeObserver(lifecycleObserver) }
}

// Weak references
var localizationCallbacks: LocalizationCallbacks? = null