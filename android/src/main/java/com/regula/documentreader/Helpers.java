package com.regula.documentreader;

import static com.regula.documentreader.api.internal.permission.BluetoothSettingsHelper.isBluetoothEnabled;
import static com.regula.documentreader.api.internal.permission.BluetoothSettingsHelper.isLocationServiceEnabled;
import static com.regula.documentreader.api.internal.permission.BluetoothSettingsHelper.isPermissionDenied;
import static com.regula.documentreader.api.internal.permission.BluetoothSettingsHelper.requestEnableBluetooth;
import static com.regula.documentreader.api.internal.permission.BluetoothSettingsHelper.requestEnableLocationService;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.util.Base64;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.regula.documentreader.api.enums.BarcodeType;
import com.regula.documentreader.api.internal.params.FaceMetaData;
import com.regula.documentreader.api.results.Bounds;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.List;

class Helpers {
    private static final int PERMISSIONS_BLE_ACCESS = 3;

    static Bitmap bitmapFromBase64(String base64) {
        byte[] decodedString = Base64.decode(base64, Base64.DEFAULT);
        Bitmap result = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
        int sizeMultiplier = result.getByteCount() / 5000000;
        if (result.getByteCount() > 5000000)
            result = Bitmap.createScaledBitmap(result, result.getWidth() / (int) Math.sqrt(sizeMultiplier), result.getHeight() / (int) Math.sqrt(sizeMultiplier), false);
        return result;
    }

    static BitmapDrawable drawableFromBase64(String base64, Context context) {
        byte[] decodedByte = Base64.decode(base64, 0);
        Bitmap bitmap = BitmapFactory.decodeByteArray(decodedByte, 0, decodedByte.length);
        float density = context.getResources().getDisplayMetrics().density;
        int width = (int) (bitmap.getWidth() * density);
        int height = (int) (bitmap.getHeight() * density);
        return new BitmapDrawable(context.getResources(), Bitmap.createScaledBitmap(bitmap, width, height, false));
    }

    static Bitmap bitmapFromDrawable(Drawable drawable) {
        Bitmap bitmap;

        if (drawable instanceof BitmapDrawable) {
            BitmapDrawable bitmapDrawable = (BitmapDrawable) drawable;
            if (bitmapDrawable.getBitmap() != null) {
                return bitmapDrawable.getBitmap();
            }
        }

        if (drawable.getIntrinsicWidth() <= 0 || drawable.getIntrinsicHeight() <= 0) {
            bitmap = Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888);
        } else {
            bitmap = Bitmap.createBitmap(drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight(), Bitmap.Config.ARGB_8888);
        }

        Canvas canvas = new Canvas(bitmap);
        drawable.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
        drawable.draw(canvas);
        return bitmap;
    }

    static String bitmapToBase64String(Bitmap bitmap) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
        byte[] byteArray = byteArrayOutputStream.toByteArray();

        return Base64.encodeToString(byteArray, Base64.DEFAULT);
    }

    static Matrix matrixFromFloatArray(float[] floats) {
        Matrix matrix = new Matrix();
        matrix.setValues(floats);
        return matrix;
    }

    static float[] floatArrayFromJson(JSONArray jsonArray) throws JSONException {
        float[] result = new float[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++)
            result[i] = (float) jsonArray.getDouble(i);

        return result;
    }

    static int[] intArrayFromJson(JSONArray jsonArray) throws JSONException {
        int[] result = new int[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++)
            result[i] = jsonArray.getInt(i);

        return result;
    }

    static String[] barcodeTypeArrayFromJson(JSONArray jsonArray) throws JSONException {
        String[] result = new String[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++)
            result[i] = BarcodeType.valueOf(jsonArray.getInt(i));

        return result;
    }

    static FaceMetaData[] faceMetaDataArrayFromJson(JSONArray jsonArray) throws JSONException {
        FaceMetaData[] result = new FaceMetaData[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++)
            result[i] = faceMetaDataFromJson(jsonArray.getJSONObject(i));

        return result;
    }

    static FaceMetaData faceMetaDataFromJson(JSONObject object) throws JSONException {
        FaceMetaData result = new FaceMetaData();
        result.ID = object.getInt("ID");
        result.rollAngle = object.getInt("rollAngle");
        result.bounds = boundsFromJson(object.getJSONObject("bounds"));

        return result;
    }

    static Bounds boundsFromJson(JSONObject object) throws JSONException {
        Bounds result = new Bounds();
        result.height = object.getInt("height");
        result.width = object.getInt("width");
        result.x = object.getInt("x");
        result.y = object.getInt("y");

        return result;
    }

    static List<String> stringListFromJson(JSONArray jsonArray) {
        List<String> result = new ArrayList<>();
        for (int i = 0; i < jsonArray.length(); i++)
            result.add(jsonArray.optString(i));
        return result;
    }

    static String[] stringArrayFromJson(JSONArray jsonArray) {
        String[] result = new String[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++)
            result[i] = jsonArray.optString(i);
        return result;
    }

    public static boolean isBluetoothSettingsReady(Activity activity) {
        if (!isBluetoothEnabled(activity)) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S && isPermissionDenied(activity, Manifest.permission.BLUETOOTH_CONNECT))
                ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.BLUETOOTH_CONNECT}, PERMISSIONS_BLE_ACCESS);
            else
                requestEnableBluetooth(activity);
            return false;
        } else if (!isLocationServiceEnabled(activity)) {
            requestEnableLocationService(activity);
            return false;
        } else {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                if (ContextCompat.checkSelfPermission(activity, Manifest.permission.BLUETOOTH_SCAN) != PackageManager.PERMISSION_GRANTED) {
                    ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.BLUETOOTH_SCAN}, PERMISSIONS_BLE_ACCESS);
                    return false;
                }
                if (ContextCompat.checkSelfPermission(activity, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
                    ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.BLUETOOTH_CONNECT}, PERMISSIONS_BLE_ACCESS);
                    return false;
                }
            } else if (ContextCompat.checkSelfPermission(activity, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, PERMISSIONS_BLE_ACCESS);
                return false;
            }
            return true;
        }
    }
}