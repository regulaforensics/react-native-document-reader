//
//  Utils.kt
//  DocumentReader
//
//  Created by Pavel Masiuk on 21.09.2023.
//  Copyright © 2023 Regula. All rights reserved.
//

package com.regula.documentreader

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.Matrix
import android.graphics.Paint
import android.graphics.Typeface
import android.graphics.drawable.BitmapDrawable
import android.graphics.drawable.Drawable
import android.util.Base64
import com.regula.documentreader.api.enums.CustomizationFont
import com.regula.documentreader.api.params.ParamsCustomization
import org.json.JSONArray
import org.json.JSONObject
import java.io.ByteArrayOutputStream
import kotlin.math.sqrt

fun Any?.toSendable(): Any? = this?.let {
    if (this is JSONObject || this is JSONArray) this.toString()
    else this
}

fun List<*>.toJson(): JSONArray {
    val result = JSONArray()
    for (i in indices)
        when (val v = this[i]) {
            null -> result.put(null)
            is Map<*, *> -> result.put(v.toJson())
            is List<*> -> result.put(v.toJson())
            else -> result.put(v)
        }
    return result
}

fun Map<*, *>.toJson(): JSONObject {
    val result = JSONObject()
    for ((k, v) in this) {
        when (v) {
            null -> result.put(k as String, null)
            is Map<*, *> -> result.put(k as String, v.toJson())
            is List<*> -> result.put(k as String, v.toJson())
            else -> result.put(k as String, v)
        }
    }
    return result
}

fun <T> generateList(list: List<T>?) = list?.let {
    val result = JSONArray()
    for (t in list) if (t != null) result.put(t)
    result
}

fun <T> generateList(list: List<T>, toJson: (T?) -> JSONObject?): JSONArray {
    val result = JSONArray()
    for (t in list) if (t != null) result.put(toJson(t))
    return result
}

fun <T> listFromJSON(input: JSONArray?, fromJson: (JSONObject?) -> T) = input?.let {
    val result: MutableList<T> = ArrayList()
    for (i in 0 until input.length()) {
        val item = input.getJSONObject(i)
        result.add(fromJson(item))
    }
    result
}

@Suppress("UNCHECKED_CAST")
fun <T> listFromJSON(input: JSONArray): List<T> {
    val result: MutableList<T> = ArrayList()
    for (i in 0 until input.length()) result.add(input.opt(i) as T)
    return result
}

fun <T> arrayFromJSON(input: JSONArray?, fromJson: (JSONObject?) -> T, result: Array<T>) = input?.let {
    for (i in 0 until input.length())
        result[i] = fromJson(input.getJSONObject(i))
    result
}

fun <T> generateList(list: List<T>, toJson: (T?, Context?) -> JSONObject?, context: Context?): JSONArray {
    val result = JSONArray()
    for (t in list) if (t != null) result.put(toJson(t, context))
    return result
}

fun <T> generateArray(array: Array<T>?) = array?.let {
    val result = JSONArray()
    for (i in array.indices) result.put(i, array[i])
    result
}

fun <T> generateArray(array: Array<T>?, toJson: (T?) -> JSONObject?) = array?.let {
    val result = JSONArray()
    for (i in array.indices) result.put(i, toJson(array[i]))
    result
}

fun generateLongArray(array: LongArray?) = array?.let {
    val result = JSONArray()
    for (i in array.indices) result.put(i, array[i])
    result
}

fun stringListFromJson(jsonArray: JSONArray): List<String> {
    val result: MutableList<String> = ArrayList()
    for (i in 0 until jsonArray.length()) result.add(jsonArray.optString(i))
    return result
}

fun stringArrayFromJson(jsonArray: JSONArray): Array<String?> {
    val result = arrayOfNulls<String>(jsonArray.length())
    for (i in 0 until jsonArray.length()) result[i] = jsonArray.optString(i)
    return result
}

fun paintCapToInt(cap: Paint.Cap) = when (cap) {
    Paint.Cap.BUTT -> 0
    Paint.Cap.ROUND -> 1
    Paint.Cap.SQUARE -> 2
}

fun JSONObject.forEach(action: (String, Any?) -> Unit) {
    val keys: Iterator<String> = keys()
    while (keys.hasNext()) {
        val key = keys.next()
        action(key, get(key))
    }
}

fun Map<String, Any?>.toJsonObject(): JSONObject {
    val result = JSONObject()
    forEach { (key, value) -> result.put(key, value) }
    return result
}

fun stringMapFromJson(input: JSONObject): Map<String, String> {
    val result: MutableMap<String, String> = HashMap()
    input.forEach { key, value -> result[key] = value as String }
    return result
}

fun generateStringMap(input: Map<String, String?>?) = input?.let {
    val result = JSONObject()
    for ((key, value) in input) result.put(key, value)
    result
}

fun Any?.toInt() = when (this) {
    is Double -> toInt()
    is Long -> toInt()
    else -> this as Int
}

fun Any?.toLong() = when (this) {
    is Double -> toLong()
    is Int -> toLong()
    else -> this as Long
}

fun Any?.toDouble() = when (this) {
    is Int -> toDouble()
    is Long -> toDouble()
    else -> this as Double
}

fun Any?.toColor() = "#" + toLong().toString(16)

fun Any?.toFloat() = when (this) {
    is Int -> toFloat()
    is Double -> toFloat()
    else -> this as Float
}

fun Any?.toMatrix() = this?.let {
    val matrix = Matrix()
    val result = FloatArray((this as JSONArray).length())
    for (i in 0 until length()) result[i] = getDouble(i).toFloat()
    matrix.setValues(result)
    matrix
}

fun Any?.toIntArray() = (this as JSONArray?)?.let {
    val result = IntArray(it.length())
    for (i in 0 until it.length()) result[i] = it.getInt(i)
    result
}

fun IntArray?.generate() = this?.let {
    val result = JSONArray()
    for (i in indices) result.put(i, this[i])
    result
}

fun String?.toLong() = this?.let {
    if (this[0] == '#') this.substring(1).toLong(16)
    else this.toLong(16)
}

fun Matrix?.generate() = this?.let {
    val floats = FloatArray(9)
    getValues(floats)
    val result = JSONArray()
    for (f in floats) result.put(java.lang.Float.valueOf(f))
    result
}

fun CustomizationFont.generate(fonts: Map<CustomizationFont, Typeface>, sizes: Map<CustomizationFont, Int>) = generateTypeface(fonts[this], sizes[this])

fun CustomizationFont.setFont(editor: ParamsCustomization.CustomizationEditor, value: Any?) {
    val font = typefaceFromJSON(value as JSONObject)
    editor.setFont(this, font.first)
    font.second?.let { editor.setFontSize(this, it) }
}

internal object Convert {
    fun byteArrayFromBase64(base64: String?): ByteArray? {
        var str = base64 ?: return null
        if (str.startsWith("data")) str = str.substring(str.indexOf(",") + 1)
        return Base64.decode(str, Base64.NO_WRAP)
    }

    fun generateByteArray(array: ByteArray?) = array?.let { Base64.encodeToString(it, Base64.NO_WRAP) }

    fun bitmapFromBase64(base64: String?) = base64?.let {
        val decodedString = byteArrayFromBase64(base64)
        var result = BitmapFactory.decodeByteArray(decodedString, 0, decodedString!!.size)
        val sizeMultiplier = result.byteCount / 5000000
        if (result.byteCount > 5000000) result = Bitmap.createScaledBitmap(result, result.width / sqrt(sizeMultiplier.toDouble()).toInt(), result.height / sqrt(sizeMultiplier.toDouble()).toInt(), false)
        result
    }

    fun bitmapToBase64(bitmap: Bitmap?) = bitmap?.let {
        val byteArrayOutputStream = ByteArrayOutputStream()
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream)
        val byteArray = byteArrayOutputStream.toByteArray()
        generateByteArray(byteArray)
    }

    fun Any?.toDrawable(context: Context) = (this as String?)?.let {
        val decodedByte = byteArrayFromBase64(it)
        val bitmap = BitmapFactory.decodeByteArray(decodedByte, 0, decodedByte!!.size)
        val density = context.resources.displayMetrics.density
        val width = (bitmap.width * density).toInt()
        val height = (bitmap.height * density).toInt()
        BitmapDrawable(context.resources, Bitmap.createScaledBitmap(bitmap, width, height, false))
    }

    fun Drawable?.toString() = this?.let {
        if (this is BitmapDrawable) if (bitmap != null) return bitmapToBase64(bitmap)
        val bitmap: Bitmap = if (intrinsicWidth <= 0 || intrinsicHeight <= 0) Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888) else Bitmap.createBitmap(intrinsicWidth, intrinsicHeight, Bitmap.Config.ARGB_8888)
        val canvas = Canvas(bitmap)
        setBounds(0, 0, canvas.width, canvas.height)
        draw(canvas)
        bitmapToBase64(bitmap)
    }
}