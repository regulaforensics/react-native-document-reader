package com.regula.documentreader

import android.Manifest.permission.*
import android.annotation.SuppressLint
import android.app.Activity
import android.bluetooth.BluetoothAdapter
import android.content.ComponentName
import android.content.Intent
import android.content.ServiceConnection
import android.content.pm.PackageManager.PERMISSION_GRANTED
import android.os.Build
import android.os.IBinder
import android.provider.Settings
import androidx.annotation.RequiresPermission
import androidx.core.app.ActivityCompat.requestPermissions
import androidx.core.content.ContextCompat.checkSelfPermission
import com.facebook.react.bridge.ReactContext
import com.regula.documentreader.api.ble.BLEWrapper
import com.regula.documentreader.api.ble.BleWrapperCallback
import com.regula.documentreader.api.ble.RegulaBleService
import com.regula.documentreader.api.internal.permission.BluetoothPermissionHelper.BLE_ACCESS_PERMISSION
import com.regula.documentreader.api.internal.permission.BluetoothSettingsHelper.isBluetoothEnabled
import com.regula.documentreader.api.internal.permission.BluetoothSettingsHelper.isLocationServiceEnabled

class BluetoothUtil {
    companion object {
        private const val REQUEST_ENABLE_LOCATION = 196
        private const val REQUEST_ENABLE_BT = 197

        private const val bleOnServiceConnectedEvent = "bleOnServiceConnectedEvent"
        private const val bleOnServiceDisconnectedEvent = "bleOnServiceDisconnectedEvent"
        private const val bleOnDeviceReadyEvent = "bleOnDeviceReadyEvent"

        @SuppressLint("StaticFieldLeak")
        var bleManager: BLEWrapper? = null

        @RequiresPermission("android.permission.BLUETOOTH_CONNECT")
        private fun requestEnableBle(activity: Activity) {
            val enableIntent = Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE)
            activity.startActivityForResult(enableIntent, REQUEST_ENABLE_BT)
        }

        private fun requestEnableLocationService(activity: Activity) {
            val myIntent = Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS)
            activity.startActivityForResult(myIntent, REQUEST_ENABLE_LOCATION)
        }

        // requestEnableBle() is called after a check for permission
        @SuppressLint("MissingPermission")
        fun isBlePermissionsGranted(activity: Activity): Boolean {
            if (!isLocationServiceEnabled(activity)) {
                requestEnableLocationService(activity)
                return false
            }
            deniedBluetoothPermissions(activity)?.let {
                requestPermissions(activity, it, BLE_ACCESS_PERMISSION)
                return false
            }
            if (!isBluetoothEnabled(activity)) {
                requestEnableBle(activity)
                return false
            }
            return true
        }

        fun deniedBluetoothPermissions(activity: Activity): Array<String>? {
            val result = mutableListOf<String>()
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                result.addAll(deniedBluetoothPermission(activity, BLUETOOTH_SCAN))
                result.addAll(deniedBluetoothPermission(activity, BLUETOOTH_CONNECT))
            } else
                result.addAll(deniedBluetoothPermission(activity, ACCESS_FINE_LOCATION))
            return result.let { if (it.size > 0) it.toTypedArray() else null }
        }

        fun deniedBluetoothPermission(activity: Activity, permission: String): Array<String> {
            if (checkSelfPermission(activity, permission) != PERMISSION_GRANTED)
                return arrayOf(permission)
            return arrayOf()
        }

        fun startBluetoothService(activity: Activity, reactContext: ReactContext) {
            val bleIntent = Intent(activity, RegulaBleService::class.java)
            activity.startService(bleIntent)

            activity.bindService(bleIntent, object : ServiceConnection {
                override fun onServiceConnected(name: ComponentName, service: IBinder) {
                    bleManager = (service as RegulaBleService.LocalBinder).service.bleManager
                    val isBleManagerConnected = bleManager?.isConnected == true
                    RNRegulaDocumentReaderModule.send(
                            reactContext,
                            bleOnServiceConnectedEvent,
                            isBleManagerConnected.toString()
                    )
                    if (!isBleManagerConnected) {
                        bleManager?.addCallback(object : BleWrapperCallback() {
                            override fun onDeviceReady() {
                                bleManager!!.removeCallback(this)
                                RNRegulaDocumentReaderModule.send(
                                        reactContext,
                                        bleOnDeviceReadyEvent,
                                        ""
                                )
                            }
                        })
                    }
                }

                override fun onServiceDisconnected(name: ComponentName) {
                    RNRegulaDocumentReaderModule.send(
                            reactContext,
                            bleOnServiceDisconnectedEvent,
                            ""
                    )
                }
            }, 0)
        }
    }
}