package com.regula.documentreader;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Bitmap;
import android.nfc.NfcAdapter;
import android.nfc.tech.IsoDep;
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
import com.regula.documentreader.api.completions.IDocumentReaderCompletion;
import com.regula.documentreader.api.completions.IDocumentReaderInitCompletion;
import com.regula.documentreader.api.completions.IDocumentReaderPrepareCompletion;
import com.regula.documentreader.api.enums.DocReaderAction;
import com.regula.documentreader.api.params.ImageInputParam;
import com.regula.documentreader.api.params.rfid.PKDCertificate;
import com.regula.documentreader.api.results.DocumentReaderResults;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import static com.regula.documentreader.api.DocumentReader.Instance;

@SuppressWarnings({"ConstantConditions", "unused", "RedundantSuppression"})
public class RNRegulaDocumentReaderModule extends ReactContextBaseJavaModule implements ActivityEventListener, LifecycleEventListener {
    private final static String prepareDatabaseProgressChangeEvent = "prepareDatabaseProgressChangeEvent";
    private final static String completionEvent = "completionEvent";
    private static int databaseDownloadProgress = 0;
    JSONArray data;
    private final ReactContext reactContext;
    private boolean backgroundRFIDEnabled = false;

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

    private <T> T args(int index) throws JSONException {
        //noinspection unchecked
        return (T) data.get(index);
    }

    private void sendProgress(int progress) {
        WritableMap map = Arguments.createMap();
        map.putString("msg", progress + "");
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(prepareDatabaseProgressChangeEvent, map);
    }

    private void sendCompletion(int action, DocumentReaderResults results, Throwable error) {
        WritableMap map = Arguments.createMap();
        map.putString("msg", JSONConstructor.generateCompletion(action, results, error, getContext()).toString());
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(completionEvent, map);
    }

    private interface Callback {
        void success(Object o);

        void error(String s);

        default void success() {
            success("");
        }
    }

    @ReactMethod
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
                case "setEnableCoreLogs":
                    setEnableCoreLogs(callback, args(0));
                    break;
                case "addPKDCertificates":
                    addPKDCertificates(callback, args(0));
                    break;
                case "setCameraSessionIsPaused":
                    setCameraSessionIsPaused(callback, args(0));
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
                case "initializeReaderWithDatabasePath":
                    initializeReaderWithDatabasePath(callback, args(0), args(1));
                    break;
                case "prepareDatabase":
                    prepareDatabase(callback, args(0));
                    break;
                case "recognizeImage":
                    recognizeImage(callback, args(0));
                    break;
                case "setRfidSessionStatus":
                    setRfidSessionStatus(callback, args(0));
                    break;
                case "recognizeImageFrame":
                    recognizeImageFrame(callback, args(0), args(1));
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
                case "recognizeImageWithImageInputParams":
                    recognizeImageWithImageInputParams(callback, args(0), args(1));
                    break;
                case "recognizeImageWithCameraMode":
                    recognizeImageWithCameraMode(callback, args(0), args(1));
                    break;
            }
        } catch (Exception ignored) {
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
        PendingIntent pendingIntent = PendingIntent.getActivity(activity.getApplicationContext(), 0, intent, 0);
        NfcAdapter.getDefaultAdapter(getActivity()).enableForegroundDispatch(activity, pendingIntent, filters, techList);
    }

    private void stopBackgroundRFID() {
        if (!backgroundRFIDEnabled)
            return;
        NfcAdapter.getDefaultAdapter(getActivity()).disableForegroundDispatch(getActivity());
        backgroundRFIDEnabled = false;
    }

    private void getAvailableScenarios(Callback callback) throws JSONException {
        callback.success(JSONConstructor.generateList(Instance().availableScenarios, JSONConstructor::generateDocumentReaderScenario, getContext()).toString());
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

    private void deinitializeReader(Callback callback) {
        Instance().deinitializeReader();
        callback.success();
    }

    private void isAuthenticatorAvailableForUse(Callback callback) {
        callback.success(Instance().isAuthenticatorAvailableForUse());
    }

    private void getConfig(Callback callback) throws JSONException {
        callback.success(RegulaConfig.getConfig(Instance(), getContext()).toString());
    }

    private void getRfidScenario(Callback callback) {
        callback.success(Instance().rfidScenario().toJson());
    }

    private void selectedScenario(Callback callback) throws JSONException {
        callback.success(JSONConstructor.generateDocumentReaderScenario(Instance().getScenario(Instance().processParams().getScenario())).toString());
    }

    private void getScenario(Callback callback, String scenario) throws JSONException {
        callback.success(JSONConstructor.generateDocumentReaderScenario(Instance().getScenario(scenario)).toString());
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
        callback.success(Instance().getDocumentReaderIsReady());
    }

    private void getDocumentReaderStatus(Callback callback) {
        callback.success(Instance().getDocumentReaderStatus());
    }

    private void isRFIDAvailableForUse(Callback callback) {
        callback.success(Instance().isRFIDAvailableForUse());
    }

    private void initializeReader(Callback callback, Object license) {
        if (!Instance().getDocumentReaderIsReady())
            Instance().initializeReader(getContext(), Base64.decode(license.toString(), Base64.DEFAULT), getInitCompletion(callback));
        else
            callback.success("already initialized");
    }

    private void startNewSession(Callback callback) {
        Instance().startNewSession();
        callback.success();
    }

    private void startNewPage(Callback callback) {
        Instance().startNewPage();
        callback.success();
    }

    private void recognizeImageWithImageInputParams(@SuppressWarnings("unused") Callback callback, String base64Image, final JSONObject params) throws JSONException {
        Instance().recognizeImage(JSONConstructor.bitmapFromBase64(base64Image), new ImageInputParam(params.getInt("width"), params.getInt("height"), params.getInt("type")), getCompletion());
    }

    private void recognizeImageWithOpts(Callback callback, final JSONObject opts, String base64Image) throws JSONException {
        RegulaConfig.setConfig(Instance(), opts, getContext());
        recognizeImage(callback, base64Image);
    }

    private void recognizeImage(@SuppressWarnings("unused") Callback callback, String base64Image) {
        stopBackgroundRFID();
        Instance().recognizeImage(JSONConstructor.bitmapFromBase64(base64Image), getCompletion());
    }

    private void recognizeImages(@SuppressWarnings("unused") Callback callback, JSONArray base64Images) throws JSONException {
        stopBackgroundRFID();
        Bitmap[] images = new Bitmap[base64Images.length()];
        for (int i = 0; i < images.length; i++)
            images[i] = JSONConstructor.bitmapFromBase64(base64Images.getString(i));
        Instance().recognizeImages(images, getCompletion());
    }

    private void removeDatabase(Callback callback) {
        callback.success(Instance().removeDatabase(getContext()));
    }

    private void cancelDBUpdate(Callback callback) {
        callback.success(Instance().cancelDBUpdate());
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

    private void recognizeImageFrame(@SuppressWarnings("unused") Callback callback, String base64Image, final JSONObject opts) throws JSONException {
        Instance().recognizeImageFrame(JSONConstructor.bitmapFromBase64(base64Image), new ImageInputParam(opts.getInt("width"), opts.getInt("height"), opts.getInt("type")), getCompletion());
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
        Instance().startRFIDReader(getContext(), getCompletion());
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

    private void setCameraSessionIsPaused(Callback callback, @SuppressWarnings("unused") boolean ignored) {
        callback.error("setCameraSessionIsPaused() is an ios-only method");
    }

    private void getCameraSessionIsPaused(Callback callback) {
        callback.error("getCameraSessionIsPaused() is an ios-only method");
    }

    @SuppressWarnings("unused")
    private void recognizeImageWithCameraMode(Callback callback, String base64, boolean mode) {
        callback.error("recognizeImageWithCameraMode() is an ios-only method");
    }

    @SuppressWarnings("unused")
    private void initializeReaderWithDatabasePath(Callback callback, Object license, String path) {
        callback.error("initializeReaderWithDatabasePath() is an ios-only method");
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
            if (action == DocReaderAction.ERROR || action == DocReaderAction.CANCEL || (action == DocReaderAction.COMPLETE && results.rfidResult == 1))
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
            public void onPrepareCompleted(boolean status, Throwable error) {
                if (status)
                    callback.success("database prepared");
                else
                    callback.error("database preparation failed: " + error.toString());
            }
        };
    }

    private IDocumentReaderInitCompletion getInitCompletion(Callback callback) {
        return (success, error) -> {
            if (success)
                callback.success("init completed");
            else
                callback.error("Init failed:" + error);
        };
    }
}