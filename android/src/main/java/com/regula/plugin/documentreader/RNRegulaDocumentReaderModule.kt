@file:Suppress("unused", "UNUSED_PARAMETER")

package com.regula.plugin.documentreader

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Lifecycle
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.modules.core.PermissionAwareActivity
import com.facebook.react.uimanager.ViewManager
import org.json.JSONArray
import org.json.JSONObject

var listenerCount = 0

lateinit var args: JSONArray
lateinit var binding: ReactContext
val context: Context
    get() = binding.applicationContext
val activity: Activity
    get() = binding.currentActivity!!
val lifecycle: Lifecycle
    get() = (activity as AppCompatActivity).lifecycle

fun sendEvent(event: String, data: Any? = "") {
    if (listenerCount <= 0) return
    val result = if (data is JSONObject || data is JSONArray) data.toString() else data.toString() + ""
    val map = Arguments.createMap()
    map.putString("msg", result)
    binding.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java).emit(event, map)
}

@Suppress("UNCHECKED_CAST")
fun <T> argsNullable(index: Int): T? {
    val value = args[index]
    if (value is Double && value % 1 == 0.0) return value.toInt() as T
    if (value.toString() == "null") return null
    return value as T
}

fun requestPermissions(activity: Activity, permissions: Array<String>, requestCode: Int) {
    (activity as PermissionAwareActivity).requestPermissions(permissions, requestCode) { code, perms, grantResults ->
        onRequestPermissionsResult(code, perms, grantResults)
    }
}

fun startActivityForResult(activity: Activity, intent: Intent, requestCode: Int) {
    activity.startActivityForResult(intent, requestCode)
}

class RNRegulaDocumentReaderPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext) = listOf(RNRegulaDocumentReaderModule(reactContext))
    override fun createViewManagers(reactContext: ReactApplicationContext) = emptyList<ViewManager<*, *>>()
}

class RNRegulaDocumentReaderModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), ActivityEventListener {
    init {
        binding = reactContext
        binding.addActivityEventListener(this)
    }

    @ReactMethod
    fun addListener(eventName: String) {
        listenerCount += 1
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        listenerCount -= count
    }

    override fun onNewIntent(intent: Intent) {
        newIntent(intent)
    }

    override fun onActivityResult(activity: Activity, requestCode: Int, resultCode: Int, data: Intent?) {
        onActivityResult(requestCode, resultCode, data)
    }

    @ReactMethod
    fun exec(moduleName: String, method: String, arguments: ReadableArray, success: com.facebook.react.bridge.Callback, error: com.facebook.react.bridge.Callback) {
        args = JSONArray(arguments.toArrayList())
        try {
            methodCall(method) { data -> success(data.toSendable()) }
        } catch (error: Exception) {
            Log.e("REGULA", "Caught exception in \"$method\" function:", error)
        }
    }

    override fun getName() = "RNRegulaDocumentReader"
}
