package com.regula.documentreader;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Bitmap;
import android.nfc.NfcAdapter;
import android.nfc.tech.IsoDep;
import android.os.Build;
import android.os.Bundle;
import android.util.Base64;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.regula.documentreader.api.completions.ICheckDatabaseUpdate;
import com.regula.documentreader.api.completions.IDocumentReaderCompletion;
import com.regula.documentreader.api.completions.IDocumentReaderInitCompletion;
import com.regula.documentreader.api.completions.IDocumentReaderPrepareCompletion;
import com.regula.documentreader.api.completions.IRfidPKDCertificateCompletion;
import com.regula.documentreader.api.completions.IRfidReaderRequest;
import com.regula.documentreader.api.completions.IRfidTASignatureCompletion;
import com.regula.documentreader.api.completions.ITccParamsCompletion;
import com.regula.documentreader.api.enums.DocReaderAction;
import com.regula.documentreader.api.errors.DocumentReaderException;
import com.regula.documentreader.api.internal.core.CoreScenarioUtil;
import com.regula.documentreader.api.params.BleDeviceConfig;
import com.regula.documentreader.api.params.DocReaderConfig;
import com.regula.documentreader.api.params.ImageInputData;
import com.regula.documentreader.api.internal.params.ImageInputParam;
import com.regula.documentreader.api.params.rfid.PKDCertificate;
import com.regula.documentreader.api.params.rfid.authorization.PAResourcesIssuer;
import com.regula.documentreader.api.params.rfid.authorization.TAChallenge;
import com.regula.documentreader.api.results.DocumentReaderGraphicField;
import com.regula.documentreader.api.results.DocumentReaderResults;
import com.regula.documentreader.api.results.DocumentReaderTextField;
import com.regula.documentreader.api.internal.parser.DocReaderResultsJsonParser;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import static com.regula.documentreader.api.DocumentReader.Instance;

import androidx.annotation.NonNull;

@SuppressWarnings({"ConstantConditions", "RedundantSuppression", "MissingPermission"})
public class RNRegulaDocumentReaderModule extends ReactContextBaseJavaModule implements ActivityEventListener, LifecycleEventListener {
    private final static String prepareDatabaseProgressChangeEvent = "prepareDatabaseProgressChangeEvent";
    private final static String completionEvent = "completionEvent";
    private final static String videoEncoderCompletionEvent = "videoEncoderCompletionEvent";
    private final static String rfidNotificationCompletionEvent = "rfidNotificationCompletionEvent";

    private final static String paCertificateCompletionEvent = "paCertificateCompletionEvent";
    private final static String taCertificateCompletionEvent = "taCertificateCompletionEvent";
    private final static String taSignatureCompletionEvent = "taSignatureCompletionEvent";

    private final static String bleOnServiceConnectedEvent = "bleOnServiceConnectedEvent";
    private final static String bleOnServiceDisconnectedEvent = "bleOnServiceDisconnectedEvent";
    private final static String bleOnDeviceReadyEvent = "bleOnDeviceReadyEvent";

    private static int databaseDownloadProgress = 0;
    JSONArray data;
    private final ReactContext reactContext;
    private boolean backgroundRFIDEnabled = false;
    private IRfidPKDCertificateCompletion paCertificateCompletion;
    private IRfidPKDCertificateCompletion taCertificateCompletion;
    private IRfidTASignatureCompletion taSignatureCompletion;

    public RNRegulaDocumentReaderModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        reactContext.addActivityEventListener(this);
        reactContext.addLifecycleEventListener(this);
    }

    @Override
    @SuppressWarnings("NullableProblems")
    public String getName() {
        return "RNRegulaDocumentReader";
    }

    private Context getContext() {
        return reactContext.getCurrentActivity();
    }

    private Activity getActivity() {
        return getCurrentActivity();
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
    }

    @Override
    public void onNewIntent(Intent intent) {
        if (intent.getAction() != null && intent.getAction().equals(NfcAdapter.ACTION_TECH_DISCOVERED) && backgroundRFIDEnabled)
            Instance().readRFID(IsoDep.get(intent.getParcelableExtra(NfcAdapter.EXTRA_TAG)), getCompletion());
    }

    @Override
    public void onHostResume() {
        if (backgroundRFIDEnabled)
            startForegroundDispatch(getActivity());
    }

    @Override
    public void onHostPause() {
        if (backgroundRFIDEnabled)
            NfcAdapter.getDefaultAdapter(getActivity()).disableForegroundDispatch(getActivity());
    }

    @Override
    public void onHostDestroy() {
    }

    @SuppressWarnings({"WrapperTypeMayBePrimitive", "unchecked"})
    private <T> T args(int index) throws JSONException {
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // Rewrite it according to react native documentation!!!
        // the is no int or double in js so all ints are sent as double by default
        Object value = data.get(index);
        if (value instanceof Double)
            if ((Double) value % 1 == 0) {
                Integer intValue = ((Double) value).intValue();
                return (T) intValue;
            }
        //noinspection unchecked
        return (T) data.get(index);
    }

    static void send(ReactContext reactContext, String event, String data) {
        WritableMap map = Arguments.createMap();
        map.putString("msg", data);
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(event, map);
    }

    private void sendProgress(int progress) {
        send(reactContext, prepareDatabaseProgressChangeEvent, progress + "");
    }

    private void sendCompletion(int action, DocumentReaderResults results, DocumentReaderException error) {
        send(reactContext, completionEvent, JSONConstructor.generateCompletion(action, results, error, getContext()).toString());
    }

    private void sendVideoEncoderCompletion(String sessionId, File file) {
        send(reactContext, videoEncoderCompletionEvent, JSONConstructor.generateVideoEncoderCompletion(sessionId, file).toString());
    }

    private void sendIRfidNotificationCompletion(int notification, Bundle value) {
        send(reactContext, rfidNotificationCompletionEvent, JSONConstructor.generateRfidNotificationCompletion(notification, value).toString());
    }

    private void sendPACertificateCompletion(byte[] serialNumber, PAResourcesIssuer issuer) {
        send(reactContext, paCertificateCompletionEvent, JSONConstructor.generatePACertificateCompletion(serialNumber, issuer).toString());
    }

    private void sendTACertificateCompletion(String keyCAR) {
        send(reactContext, taCertificateCompletionEvent, keyCAR);
    }

    private void sendTASignatureCompletion(TAChallenge challenge) {
        send(reactContext, taSignatureCompletionEvent, JSONConstructor.generateTAChallenge(challenge).toString());
    }

    private void sendBleOnServiceConnectedEvent(boolean isBleManagerConnected) {
        send(reactContext, bleOnServiceConnectedEvent, isBleManagerConnected +"");
    }

    private void sendBleOnServiceDisconnectedEvent() {
        send(reactContext, bleOnServiceDisconnectedEvent, "");
    }

    private void sendBleOnDeviceReadyEvent() {
        send(reactContext, bleOnDeviceReadyEvent, "");
    }

    private interface Callback {
        void success(Object o);

        void error(String s);

        default void success() {
            success("");
        }
    }

    @ReactMethod
    @SuppressWarnings("unused")
    public void exec(String moduleName, String action, ReadableArray args, com.facebook.react.bridge.Callback successCallback, com.facebook.react.bridge.Callback errorCallback) {
        data = new JSONArray(args.toArrayList());
        Callback callback = new Callback() {
            @Override
            public void success(Object o) {
                if (o instanceof Integer)
                    successCallback.invoke(o);
                else if (o instanceof Boolean)
                    successCallback.invoke((boolean) o ? "true" : "");
                else
                    successCallback.invoke(o);
            }

            @Override
            public void error(String s) {
                errorCallback.invoke(s);
            }
        };
        try {
            switch (action) {
                case "initializeReaderAutomatically":
                    initializeReaderAutomatically(callback);
                    break;
                case "isBlePermissionsGranted":
                    isBlePermissionsGranted(callback);
                    break;
                case "startBluetoothService":
                    startBluetoothService(callback);
                    break;
                case "initializeReaderBleDeviceConfig":
                    initializeReaderBleDeviceConfig(callback);
                    break;
                case "getTag":
                    getTag(callback);
                    break;
                case "getAPIVersion":
                    getAPIVersion(callback);
                    break;
                case "getAvailableScenarios":
                    getAvailableScenarios(callback);
                    break;
                case "isRFIDAvailableForUse":
                    isRFIDAvailableForUse(callback);
                    break;
                case "getCoreMode":
                    getCoreMode(callback);
                    break;
                case "getCoreVersion":
                    getCoreVersion(callback);
                    break;
                case "getDatabaseDate":
                    getDatabaseDate(callback);
                    break;
                case "getDatabaseID":
                    getDatabaseID(callback);
                    break;
                case "getDatabaseVersion":
                    getDatabaseVersion(callback);
                    break;
                case "getDocumentReaderIsReady":
                    getDocumentReaderIsReady(callback);
                    break;
                case "getDocumentReaderStatus":
                    getDocumentReaderStatus(callback);
                    break;
                case "getDatabaseCountriesNumber":
                    getDatabaseCountriesNumber(callback);
                    break;
                case "getDatabaseDocumentsNumber":
                    getDatabaseDocumentsNumber(callback);
                    break;
                case "selectedScenario":
                    selectedScenario(callback);
                    break;
                case "getSessionLogFolder":
                    getSessionLogFolder(callback);
                    break;
                case "getDatabaseDescription":
                    getDatabaseDescription(callback);
                    break;
                case "showScanner":
                    showScanner(callback);
                    break;
                case "startNewPage":
                    startNewPage(callback);
                    break;
                case "startNewSession":
                    startNewSession(callback);
                    break;
                case "startRFIDReader":
                    startRFIDReader(callback);
                    break;
                case "stopRFIDReader":
                    stopRFIDReader(callback);
                    break;
                case "stopRFIDReaderWithErrorMessage":
                    stopRFIDReaderWithErrorMessage(callback, args(0));
                    break;
                case "stopScanner":
                    stopScanner(callback);
                    break;
                case "deinitializeReader":
                    deinitializeReader(callback);
                    break;
                case "isAuthenticatorAvailableForUse":
                    isAuthenticatorAvailableForUse(callback);
                    break;
                case "getConfig":
                    getConfig(callback);
                    break;
                case "getRfidScenario":
                    getRfidScenario(callback);
                    break;
                case "getLicenseExpiryDate":
                    getLicenseExpiryDate(callback);
                    break;
                case "getLicenseCountryFilter":
                    getLicenseCountryFilter(callback);
                    break;
                case "licenseIsRfidAvailable":
                    licenseIsRfidAvailable(callback);
                    break;
                case "getCameraSessionIsPaused":
                    getCameraSessionIsPaused(callback);
                    break;
                case "removeDatabase":
                    removeDatabase(callback);
                    break;
                case "cancelDBUpdate":
                    cancelDBUpdate(callback);
                    break;
                case "resetConfiguration":
                    resetConfiguration(callback);
                    break;
                case "clearPKDCertificates":
                    clearPKDCertificates(callback);
                    break;
                case "readRFID":
                    readRFID(callback);
                    break;
                case "getRfidSessionStatus":
                    getRfidSessionStatus(callback);
                    break;
                case "setRfidDelegate":
                    setRfidDelegate(callback, args(0));
                    break;
                case "setEnableCoreLogs":
                    setEnableCoreLogs(callback, args(0));
                    break;
                case "addPKDCertificates":
                    addPKDCertificates(callback, args(0));
                    break;
                case "setCameraSessionIsPaused":
                    setCameraSessionIsPaused(callback, args(0));
                    break;
                case "setTag":
                    setTag(callback, args(0));
                    break;
                case "checkDatabaseUpdate":
                    checkDatabaseUpdate(callback, args(0));
                    break;
                case "getScenario":
                    getScenario(callback, args(0));
                    break;
                case "recognizeImages":
                    recognizeImages(callback, args(0));
                    break;
                case "showScannerWithCameraID":
                    showScannerWithCameraID(callback, args(0));
                    break;
                case "runAutoUpdate":
                    runAutoUpdate(callback, args(0));
                    break;
                case "setConfig":
                    setConfig(callback, args(0));
                    break;
                case "setRfidScenario":
                    setRfidScenario(callback, args(0));
                    break;
                case "initializeReader":
                    initializeReader(callback, args(0));
                    break;
                case "prepareDatabase":
                    prepareDatabase(callback, args(0));
                    break;
                case "recognizeImage":
                    recognizeImage(callback, args(0));
                    break;
                case "recognizeData":
                    recognizeData(callback, args(0));
                    break;
                case "setRfidSessionStatus":
                    setRfidSessionStatus(callback, args(0));
                    break;
                case "providePACertificates":
                    providePACertificates(callback, args(0));
                    break;
                case "provideTACertificates":
                    provideTACertificates(callback, args(0));
                    break;
                case "provideTASignature":
                    provideTASignature(callback, args(0));
                    break;
                case "parseCoreResults":
                    parseCoreResults(callback, args(0));
                    break;
                case "setTCCParams":
                    setTCCParams(callback, args(0));
                    break;
                case "recognizeImageWithOpts":
                    recognizeImageWithOpts(callback, args(0), args(1));
                    break;
                case "recognizeVideoFrame":
                    recognizeVideoFrame(callback, args(0), args(1));
                    break;
                case "showScannerWithCameraIDAndOpts":
                    showScannerWithCameraIDAndOpts(callback, args(0), args(1));
                    break;
                case "recognizeImageWithCameraMode":
                    recognizeImageWithCameraMode(callback, args(0), args(1));
                    break;
                case "recognizeImagesWithImageInputs":
                    recognizeImagesWithImageInputs(callback, args(0));
                    break;
                case "textFieldValueByType":
                    textFieldValueByType(callback, args(0), args(1));
                    break;
                case "textFieldValueByTypeLcid":
                    textFieldValueByTypeLcid(callback, args(0), args(1), args(2));
                    break;
                case "textFieldValueByTypeSource":
                    textFieldValueByTypeSource(callback, args(0), args(1), args(2));
                    break;
                case "textFieldValueByTypeLcidSource":
                    textFieldValueByTypeLcidSource(callback, args(0), args(1), args(2), args(3));
                    break;
                case "textFieldValueByTypeSourceOriginal":
                    textFieldValueByTypeSourceOriginal(callback, args(0), args(1), args(2), args(3));
                    break;
                case "textFieldValueByTypeLcidSourceOriginal":
                    textFieldValueByTypeLcidSourceOriginal(callback, args(0), args(1), args(2), args(3), args(4));
                    break;
                case "textFieldByType":
                    textFieldByType(callback, args(0), args(1));
                    break;
                case "textFieldByTypeLcid":
                    textFieldByTypeLcid(callback, args(0), args(1), args(2));
                    break;
                case "graphicFieldByTypeSource":
                    graphicFieldByTypeSource(callback, args(0), args(1), args(2));
                    break;
                case "graphicFieldByTypeSourcePageIndex":
                    graphicFieldByTypeSourcePageIndex(callback, args(0), args(1), args(2), args(3));
                    break;
                case "graphicFieldByTypeSourcePageIndexLight":
                    graphicFieldByTypeSourcePageIndexLight(callback, args(0), args(1), args(2), args(3), args(4));
                    break;
                case "graphicFieldImageByType":
                    graphicFieldImageByType(callback, args(0), args(1));
                    break;
                case "graphicFieldImageByTypeSource":
                    graphicFieldImageByTypeSource(callback, args(0), args(1), args(2));
                    break;
                case "graphicFieldImageByTypeSourcePageIndex":
                    graphicFieldImageByTypeSourcePageIndex(callback, args(0), args(1), args(2), args(3));
                    break;
                case "graphicFieldImageByTypeSourcePageIndexLight":
                    graphicFieldImageByTypeSourcePageIndexLight(callback, args(0), args(1), args(2), args(3), args(4));
                    break;
                case "containers":
                    containers(callback, args(0), args(1));
                    break;
                case "encryptedContainers":
                    encryptedContainers(callback, args(0));
                    break;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void startForegroundDispatch(final Activity activity) {
        IntentFilter[] filters = new IntentFilter[1];
        filters[0] = new IntentFilter();
        filters[0].addAction(NfcAdapter.ACTION_TECH_DISCOVERED);
        filters[0].addCategory(Intent.CATEGORY_DEFAULT);
        String[][] techList = new String[][]{
                new String[]{"android.nfc.tech.IsoDep"}
        };
        Intent intent = new Intent(activity.getApplicationContext(), activity.getClass());
        intent.setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
        int flags = 0;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M)
            flags = PendingIntent.FLAG_IMMUTABLE;
        PendingIntent pendingIntent = PendingIntent.getActivity(activity.getApplicationContext(), 0, intent, flags);
        NfcAdapter.getDefaultAdapter(getActivity()).enableForegroundDispatch(activity, pendingIntent, filters, techList);
    }

    private void stopBackgroundRFID() {
        if (!backgroundRFIDEnabled)
            return;
        NfcAdapter.getDefaultAdapter(getActivity()).disableForegroundDispatch(getActivity());
        backgroundRFIDEnabled = false;
    }

    private void initializeReaderAutomatically(Callback callback) {
        if (!Instance().isReady())
            try {
                InputStream is = getContext().getAssets().open("regula.license");
                byte[] license = new byte[is.available()];
                //noinspection ResultOfMethodCallIgnored
                is.read(license);
                Instance().initializeReader(getContext(), new DocReaderConfig(license), getInitCompletion(callback));
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
                callback.error("problem reading license(see logs)");
            }
        else
            callback.success("already initialized");
    }

    private void isBlePermissionsGranted(Callback callback) {
        callback.success(BluetoothUtil.Companion.isBlePermissionsGranted(getActivity()));
    }

    private void startBluetoothService(Callback callback) {
        BluetoothUtil.Companion.startBluetoothService(
                getActivity(),
                isBleManagerConnected -> {
                    sendBleOnServiceConnectedEvent(isBleManagerConnected);
                    return null;
                },
                () -> {
                    sendBleOnServiceDisconnectedEvent();
                    return null;
                },
                () -> {
                    sendBleOnDeviceReadyEvent();
                    return null;
                }
        );
        callback.success();
    }

    @SuppressLint("MissingPermission")
    private void initializeReaderBleDeviceConfig(Callback callback) {
        if (BluetoothUtil.Companion.getBleManager() == null) callback.error("bleManager is null");
        if (!Instance().isReady())
            Instance().initializeReader(getContext(), new BleDeviceConfig(BluetoothUtil.Companion.getBleManager()), getInitCompletion(callback));
        else
            callback.success("already initialized");
    }

    private void getAvailableScenarios(Callback callback) throws JSONException {
        callback.success(JSONConstructor.generateList(Instance().availableScenarios, JSONConstructor::generateDocumentReaderScenario).toString());
    }

    private void parseCoreResults(Callback callback, String json) {
        DocumentReaderResults results = (DocumentReaderResults) DocReaderResultsJsonParser.parseCoreResults(json).get("docReaderResults");
        callback.success(JSONConstructor.generateDocumentReaderResults(results, getContext()).toString());
    }

    private void getAPIVersion(Callback callback) {
        callback.success(Instance().version.api);
    }

    private void getCoreVersion(Callback callback) {
        callback.success(Instance().version.core);
    }

    private void getCoreMode(Callback callback) {
        callback.success(Instance().version.coreMode);
    }

    private void getDatabaseID(Callback callback) {
        callback.success(Instance().version.database.databaseID);
    }

    private void getDatabaseVersion(Callback callback) {
        callback.success(Instance().version.database.version);
    }

    private void getDatabaseDate(Callback callback) {
        callback.success(Instance().version.database.date);
    }

    private void getDatabaseDescription(Callback callback) {
        callback.success(Instance().version.database.databaseDescription);
    }

    private void getDatabaseCountriesNumber(Callback callback) {
        callback.success(Instance().version.database.countriesNumber);
    }

    private void getDatabaseDocumentsNumber(Callback callback) {
        callback.success(Instance().version.database.documentsNumber);
    }

    private void setTCCParams(Callback callback, final JSONObject params) {
        Instance().setTccParams(JSONConstructor.TCCParamsFromJSON(params), getTCCParamsCompletion(callback));
    }

    private void deinitializeReader(Callback callback) {
        Instance().deinitializeReader();
        callback.success();
    }

    private void isAuthenticatorAvailableForUse(Callback callback) {
        callback.success(Instance().isAuthenticatorAvailableForUse());
    }

    private void getConfig(Callback callback) throws JSONException {
        callback.success(RegulaConfig.getConfig(Instance()).toString());
    }

    private void getRfidScenario(Callback callback) {
        callback.success(Instance().rfidScenario().toJson());
    }

    private void selectedScenario(Callback callback) {
        callback.success(JSONConstructor.generateCoreDetailedScenario(CoreScenarioUtil.getScenario(Instance().processParams().getScenario())).toString());
    }

    private void getScenario(Callback callback, String scenario) {
        callback.success(JSONConstructor.generateCoreDetailedScenario(CoreScenarioUtil.getScenario(scenario)).toString());
    }

    private void getLicenseExpiryDate(Callback callback) {
        if (Instance().license().getExpiryDate() == null)
            callback.error("null");
        else
            callback.success(Instance().license().getExpiryDate().toString());
    }

    private void getLicenseCountryFilter(Callback callback) {
        if (Instance().license().getCountryFilter() == null)
            callback.error("null");
        else
            callback.success(JSONConstructor.generateList(Instance().license().getCountryFilter()).toString());
    }

    private void licenseIsRfidAvailable(Callback callback) {
        callback.success(Instance().license().isRfidAvailable());
    }

    private void getDocumentReaderIsReady(Callback callback) {
        callback.success(Instance().isReady());
    }

    private void getDocumentReaderStatus(Callback callback) {
        callback.success(Instance().isReady());
    }

    private void isRFIDAvailableForUse(Callback callback) {
        callback.success(Instance().isRFIDAvailableForUse());
    }

    private void initializeReader(Callback callback, JSONObject config) {
        if (!Instance().isReady())
            Instance().initializeReader(getContext(), JSONConstructor.DocReaderConfigFromJSON(config), getInitCompletion(callback));
        else
            callback.success("already initialized");
    }

    private void startNewSession(Callback callback) {
        Instance().startNewSession();
        callback.success();
    }

    private void getTag(Callback callback) {
        callback.success(Instance().tag);
    }

    private void setTag(Callback callback, String tag) {
        Instance().tag = tag;
        callback.success();
    }

    private void checkDatabaseUpdate(Callback callback, String databaseId) {
        Instance().checkDatabaseUpdate(getContext(), databaseId, getCheckDatabaseUpdateCompletion(callback));
        callback.success();
    }

    private void startNewPage(Callback callback) {
        Instance().startNewPage();
        callback.success();
    }

    private void recognizeImageWithOpts(Callback callback, String base64Image, final JSONObject opts) throws JSONException {
        RegulaConfig.setConfig(Instance(), opts, getContext());
        recognizeImage(callback, base64Image);
    }

    private void recognizeImage(@SuppressWarnings("unused") Callback callback, String base64Image) {
        stopBackgroundRFID();
        Instance().recognizeImage(Helpers.bitmapFromBase64(base64Image), getCompletion());
    }

    private void recognizeData(@SuppressWarnings("unused") Callback callback, Object data) {
        stopBackgroundRFID();
        Instance().recognizeImage(Base64.decode(data.toString(), Base64.DEFAULT), getCompletion());
    }

    private void recognizeImages(@SuppressWarnings("unused") Callback callback, JSONArray base64Images) throws JSONException {
        stopBackgroundRFID();
        Bitmap[] images = new Bitmap[base64Images.length()];
        for (int i = 0; i < images.length; i++)
            images[i] = Helpers.bitmapFromBase64(base64Images.getString(i));
        Instance().recognizeImages(images, getCompletion());
    }

    private void recognizeImagesWithImageInputs(@SuppressWarnings("unused") Callback callback, JSONArray base64Images) throws JSONException {
        stopBackgroundRFID();
        ImageInputData[] images = new ImageInputData[base64Images.length()];
        for (int i = 0; i < images.length; i++)
            images[i] = JSONConstructor.ImageInputDataFromJSON(base64Images.getJSONObject(i));
        Instance().recognizeImages(images, getCompletion());
    }

    private void removeDatabase(Callback callback) {
        callback.success(Instance().removeDatabase(getContext()));
    }

    private void cancelDBUpdate(Callback callback) {
        callback.success(Instance().cancelDBUpdate(getContext()));
    }

    private void resetConfiguration(Callback callback) {
        Instance().resetConfiguration();
        callback.success();
    }

    private void setEnableCoreLogs(Callback callback, boolean enableLogs) {
        Instance().setEnableCoreLogs(enableLogs);
        callback.success();
    }

    private void addPKDCertificates(Callback callback, JSONArray certificatesJSON) throws JSONException {
        List<PKDCertificate> certificates = new ArrayList<>();
        for (int i = 0; i < certificatesJSON.length(); i++) {
            JSONObject certificate = certificatesJSON.getJSONObject(i);
            certificates.add(new PKDCertificate(Base64.decode(certificate.get("binaryData").toString(), Base64.DEFAULT), certificate.getInt("resourceType"), certificate.has("privateKey") ? Base64.decode(certificate.get("privateKey").toString(), Base64.DEFAULT) : null));
        }
        Instance().addPKDCertificates(certificates);
        callback.success();
    }

    private void clearPKDCertificates(Callback callback) {
        Instance().clearPKDCertificates();
        callback.success();
    }

    private void recognizeVideoFrame(@SuppressWarnings("unused") Callback callback, String byteString, final JSONObject opts) throws JSONException {
        stopBackgroundRFID();
        Instance().recognizeVideoFrame(byteString.getBytes(), new ImageInputParam(opts.getInt("width"), opts.getInt("height"), opts.getInt("type")), getCompletion());
    }

    private void showScannerWithCameraID(@SuppressWarnings("unused") Callback callback, int cameraID) {
        stopBackgroundRFID();
        Instance().showScanner(getContext(), cameraID, getCompletion());
    }

    private void showScanner(Callback callback) {
        showScannerWithCameraID(callback, -1);
    }

    private void showScannerWithCameraIDAndOpts(@SuppressWarnings("unused") Callback callback, int cameraID, final JSONObject opts) throws JSONException {
        stopBackgroundRFID();
        RegulaConfig.setConfig(Instance(), opts, getContext());
        Instance().showScanner(getContext(), cameraID, getCompletion());
    }

    private void stopScanner(Callback callback) {
        Instance().stopScanner(getContext());
        callback.success();
    }

    private void startRFIDReader(@SuppressWarnings("unused") Callback callback) {
        stopBackgroundRFID();
        IRfidReaderRequest delegate = null;
        if (rfidDelegate == RFIDDelegate.NO_PA)
            delegate = getIRfidReaderRequestNoPA();
        if (rfidDelegate == RFIDDelegate.FULL)
            delegate = getIRfidReaderRequest();
        Instance().startRFIDReader(getContext(), getCompletion(), delegate, this::sendIRfidNotificationCompletion);
    }

    private void stopRFIDReader(Callback callback) {
        Instance().stopRFIDReader(getContext());
        stopBackgroundRFID();
        callback.success();
    }

    private void prepareDatabase(Callback callback, String dbID) {
        Instance().prepareDatabase(getContext(), dbID, getPrepareCompletion(callback));
    }

    private void runAutoUpdate(Callback callback, String dbID) {
        Instance().runAutoUpdate(getContext(), dbID, getPrepareCompletion(callback));
    }

    private void setRfidScenario(Callback callback, final JSONObject opts) throws JSONException {
        RegulaConfig.setRfidScenario(opts);
        callback.success();
    }

    private void getSessionLogFolder(Callback callback) {
        callback.success(Instance().processParams().sessionLogFolder);
    }

    private void setConfig(Callback callback, final JSONObject opts) throws JSONException {
        RegulaConfig.setConfig(Instance(), opts, getContext());
        callback.success();
    }

    private void readRFID(@SuppressWarnings("unused") Callback callback) {
        backgroundRFIDEnabled = true;
        startForegroundDispatch(getActivity());
    }

    private void providePACertificates(Callback callback, JSONArray certificatesJSON) throws JSONException {
        if (paCertificateCompletion == null) {
            callback.error("paCertificateCompletion is null");
            return;
        }
        PKDCertificate[] certificates = new PKDCertificate[certificatesJSON.length()];
        for (int i = 0; i < certificatesJSON.length(); i++) {
            JSONObject certificate = certificatesJSON.getJSONObject(i);
            certificates[i] = new PKDCertificate(Base64.decode(certificate.get("binaryData").toString(), Base64.DEFAULT), certificate.getInt("resourceType"), certificate.has("privateKey") ? Base64.decode(certificate.get("privateKey").toString(), Base64.DEFAULT) : null);
        }
        paCertificateCompletion.onCertificatesReceived(certificates);
        callback.success();
    }

    private void provideTACertificates(Callback callback, JSONArray certificatesJSON) throws JSONException {
        if (taCertificateCompletion == null) {
            callback.error("taCertificateCompletion is null");
            return;
        }
        PKDCertificate[] certificates = new PKDCertificate[certificatesJSON.length()];
        for (int i = 0; i < certificatesJSON.length(); i++) {
            JSONObject certificate = certificatesJSON.getJSONObject(i);
            certificates[i] = new PKDCertificate(Base64.decode(certificate.get("binaryData").toString(), Base64.DEFAULT), certificate.getInt("resourceType"), certificate.has("privateKey") ? Base64.decode(certificate.get("privateKey").toString(), Base64.DEFAULT) : null);
        }
        taCertificateCompletion.onCertificatesReceived(certificates);
        callback.success();
    }

    private void provideTASignature(Callback callback, Object signature) {
        if (taSignatureCompletion == null) {
            callback.error("taSignatureCompletion is null");
            return;
        }
        taSignatureCompletion.onSignatureReceived(Base64.decode(signature.toString(), Base64.DEFAULT));
        callback.success();
    }

    private void setRfidDelegate(Callback callback, int delegate) {
        rfidDelegate = delegate;
        callback.success();
    }

    private void textFieldValueByType(Callback callback, String raw, int fieldType) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(results.getTextFieldValueByType(fieldType));
    }

    private void textFieldValueByTypeLcid(Callback callback, String raw, int fieldType, int lcid) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(results.getTextFieldValueByType(fieldType, lcid));
    }

    private void textFieldValueByTypeSource(Callback callback, String raw, int fieldType, int source) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(results.getTextFieldValueByTypeAndSource(fieldType, source));
    }

    private void textFieldValueByTypeLcidSource(Callback callback, String raw, int fieldType, int lcid, int source) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(results.getTextFieldValueByType(fieldType, lcid, source));
    }

    private void textFieldValueByTypeSourceOriginal(Callback callback, String raw, int fieldType, int source, boolean original) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(results.getTextFieldValueByTypeAndSource(fieldType, source, original));
    }

    private void textFieldValueByTypeLcidSourceOriginal(Callback callback, String raw, int fieldType, int lcid, int source, boolean original) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(results.getTextFieldValueByType(fieldType, lcid, source, original));
    }

    private void textFieldByType(Callback callback, String raw, int fieldType) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        DocumentReaderTextField result = results.getTextFieldByType(fieldType);
        if (result == null)
            callback.success(null);
        else
            callback.success(JSONConstructor.generateDocumentReaderTextField(result, getContext()).toString());
    }

    private void textFieldByTypeLcid(Callback callback, String raw, int fieldType, int lcid) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        DocumentReaderTextField result = results.getTextFieldByType(fieldType, lcid);
        if (result == null)
            callback.success(null);
        else
            callback.success(JSONConstructor.generateDocumentReaderTextField(result, getContext()).toString());
    }

    private void graphicFieldByTypeSource(Callback callback, String raw, int fieldType, int source) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        DocumentReaderGraphicField result = results.getGraphicFieldByType(fieldType, source);
        if (result == null)
            callback.success(null);
        else
            callback.success(JSONConstructor.generateDocumentReaderGraphicField(result, getContext()).toString());
    }

    private void graphicFieldByTypeSourcePageIndex(Callback callback, String raw, int fieldType, int source, int pageIndex) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        DocumentReaderGraphicField result = results.getGraphicFieldByType(fieldType, source, pageIndex);
        if (result == null)
            callback.success(null);
        else
            callback.success(JSONConstructor.generateDocumentReaderGraphicField(result, getContext()).toString());
    }

    private void graphicFieldByTypeSourcePageIndexLight(Callback callback, String raw, int fieldType, int source, int pageIndex, int light) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        DocumentReaderGraphicField result = results.getGraphicFieldByType(fieldType, source, pageIndex, light);
        if (result == null)
            callback.success(null);
        else
            callback.success(JSONConstructor.generateDocumentReaderGraphicField(result, getContext()).toString());
    }

    private void graphicFieldImageByType(Callback callback, String raw, int fieldType) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(Helpers.bitmapToBase64String(results.getGraphicFieldImageByType(fieldType)));
    }

    private void graphicFieldImageByTypeSource(Callback callback, String raw, int fieldType, int source) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(Helpers.bitmapToBase64String(results.getGraphicFieldImageByType(fieldType, source)));
    }

    private void graphicFieldImageByTypeSourcePageIndex(Callback callback, String raw, int fieldType, int source, int pageIndex) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(Helpers.bitmapToBase64String(results.getGraphicFieldImageByType(fieldType, source, pageIndex)));
    }

    private void graphicFieldImageByTypeSourcePageIndexLight(Callback callback, String raw, int fieldType, int source, int pageIndex, int light) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(Helpers.bitmapToBase64String(results.getGraphicFieldImageByType(fieldType, source, pageIndex, light)));
    }

    @SuppressLint("WrongConstant")
    private void containers(Callback callback, String raw, JSONArray resultType) {
        try {
            DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
            callback.success(results.getContainers(JSONConstructor.intArrayFromJSON(resultType)));
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error(e.toString());
        }
    }

    private void encryptedContainers(Callback callback, String raw) {
        DocumentReaderResults results = DocumentReaderResults.fromRawResults(raw);
        callback.success(results.getEncryptedContainers());
    }

    private void setCameraSessionIsPaused(Callback callback, @SuppressWarnings("unused") boolean ignored) {
        callback.error("setCameraSessionIsPaused() is an ios-only method");
    }

    private void getCameraSessionIsPaused(Callback callback) {
        callback.error("getCameraSessionIsPaused() is an ios-only method");
    }

    private void stopRFIDReaderWithErrorMessage(Callback callback, @SuppressWarnings("unused") String message) {
        callback.error("stopRFIDReaderWithErrorMessage() is an ios-only method");
    }

    @SuppressWarnings("unused")
    private void recognizeImageWithCameraMode(Callback callback, String base64, boolean mode) {
        callback.error("recognizeImageWithCameraMode() is an ios-only method");
    }

    @SuppressWarnings("unused")
    private void setRfidSessionStatus(Callback callback, String s) {
        callback.error("setRfidSessionStatus() is an ios-only method");
    }

    private void getRfidSessionStatus(Callback callback) {
        callback.error("getRfidSessionStatus() is an ios-only method");
    }

    private IDocumentReaderCompletion getCompletion() {
        return (action, results, error) -> {
            sendCompletion(action, results, error);
            if (action == DocReaderAction.ERROR || action == DocReaderAction.CANCEL || (action == DocReaderAction.COMPLETE && results != null && results.rfidResult == 1))
                stopBackgroundRFID();
        };
    }

    private IDocumentReaderPrepareCompletion getPrepareCompletion(Callback callback) {
        return new IDocumentReaderPrepareCompletion() {
            @Override
            public void onPrepareProgressChanged(int progress) {
                if (progress != databaseDownloadProgress) {
                    sendProgress(progress);
                    databaseDownloadProgress = progress;
                }
            }

            @Override
            public void onPrepareCompleted(boolean status, DocumentReaderException error) {
                if (status)
                    callback.success("database prepared");
                else
                    callback.error("database preparation failed: " + error.toString());
            }
        };
    }

    private IDocumentReaderInitCompletion getInitCompletion(Callback callback) {
        return (success, error) -> {
            if (success) {
                Instance().setVideoEncoderCompletion(this::sendVideoEncoderCompletion);
                callback.success("init completed");
            } else
                callback.error("Init failed:" + error);
        };
    }

    private ICheckDatabaseUpdate getCheckDatabaseUpdateCompletion(Callback callback) {
        return (database) -> callback.success(JSONConstructor.generateDocReaderDocumentsDatabase(database));
    }

    private ITccParamsCompletion getTCCParamsCompletion(Callback callback) {
        return (success, error) -> {
            if (success)
                callback.success("success");
            else
                callback.error("failed: " + error.getMessage());
        };
    }

    private IRfidReaderRequest getIRfidReaderRequest() {
        return new IRfidReaderRequest() {
            @Override
            public void onRequestPACertificates(byte[] serialNumber, PAResourcesIssuer issuer, @NonNull IRfidPKDCertificateCompletion completion) {
                paCertificateCompletion = completion;
                completion.onCertificatesReceived(new PKDCertificate[0]);
                sendPACertificateCompletion(serialNumber, issuer);
            }

            @Override
            public void onRequestTACertificates(String keyCAR, @NonNull IRfidPKDCertificateCompletion completion) {
                taCertificateCompletion = completion;
                sendTACertificateCompletion(keyCAR);
            }

            @Override
            public void onRequestTASignature(TAChallenge challenge, @NonNull IRfidTASignatureCompletion completion) {
                taSignatureCompletion = completion;
                sendTASignatureCompletion(challenge);
            }
        };
    }

    private IRfidReaderRequest getIRfidReaderRequestNoPA() {
        return new IRfidReaderRequest() {
            @Override
            public void onRequestPACertificates(byte[] serialNumber, PAResourcesIssuer issuer, @NonNull IRfidPKDCertificateCompletion completion) {
                paCertificateCompletion = null;
                completion.onCertificatesReceived(new PKDCertificate[0]);
            }

            @Override
            public void onRequestTACertificates(String keyCAR, @NonNull IRfidPKDCertificateCompletion completion) {
                taCertificateCompletion = completion;
                sendTACertificateCompletion(keyCAR);
            }

            @Override
            public void onRequestTASignature(TAChallenge challenge, @NonNull IRfidTASignatureCompletion completion) {
                taSignatureCompletion = completion;
                sendTASignatureCompletion(challenge);
            }
        };
    }

    private static int rfidDelegate = RFIDDelegate.NULL;

    private static class RFIDDelegate {
        public static final int NULL = 0;
        public static final int NO_PA = 1;
        public static final int FULL = 2;
    }
}