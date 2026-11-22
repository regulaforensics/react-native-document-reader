import UIKit

public typealias Callback = (Any?) -> Void

// Args pass null arguments as nils, null elements in arrays as nils,
// but in maps keys with null values are removed.
var args: [Any?] = []
func args<T>(_ index: Int) -> T {
    return argsNullable(index)!
}

func argsNullable<T>(_ index: Int) -> T? {
    func fixNulls(_ value: Any?) -> Any? {
        switch value {
        case nil, is NSNull: return nil
        case let dict as [String: Any]: return dict.compactMapValues(fixNulls)
        case let array as [Any?]: return array.map(fixNulls)
        default: return value
        }
    }
    return fixNulls(args[index]) as! T?
}

extension Any? {
    func toSendable() -> Any {
        guard let self else { return NSNull() }
        if self is [String: Any?] || self is [Any?] {
            let data = try! JSONSerialization.data(withJSONObject: fixNulls(self), options: .prettyPrinted)
            return String(data: data, encoding: .utf8)!
        }
        return self
    }
}

func fixNulls(_ value: Any?) -> Any {
    guard let value else { return NSNull() }
    switch value {
    // Native results can contain unavailable scores represented by NaN or infinity.
    case let value as NSNumber where !value.doubleValue.isFinite: return -1
    case let value as [String: Any?]:
        var dict = [String: Any]()
        for (k, v) in value { if let v { dict[k] = fixNulls(v) } }
        return dict
    case let value as [Any?]: return value.map { fixNulls($0) }
    default: return value
    }
}

extension NSObject {
    static func allocate() -> NSObject {
        return perform(NSSelectorFromString("alloc")).takeUnretainedValue() as! NSObject
    }
    static func emptyInit<T>() -> T {
        return perform(NSSelectorFromString("new")).takeRetainedValue() as! T
    }
}

extension String {
    func selector() -> Selector {
        return NSSelectorFromString(self)
    }
}

func privateInit<T, Fn>(
    _ allocated: NSObject,
    _ selector: Selector,
    _ function: Fn.Type,
    _ call: (Fn) -> Unmanaged<AnyObject>?
) -> T {
    let f = unsafeBitCast(allocated.method(for: selector), to: function)
    // init consumes the +1 from alloc and returns an owned result.
    return call(f)!.takeRetainedValue() as! T
}

// MARK: - Converting

extension Data {
    static func decode(_ it: Any?) -> Self? {
        guard var it = it as? String else { return nil }
        if it.hasPrefix("data:") {
            guard let comma = it.firstIndex(of: ",") else { return nil }
            it = String(it[it.index(after: comma)...])
        }
        return Self(base64Encoded: it)
    }

    func encode() -> String {
        return self.base64EncodedString()
    }
}

extension UIImage {
    static func decode(_ it: Any?) -> Self? {
        guard let data = Data.decode(it) else { return nil }
        return Self(data: data)
    }

    func encode() -> String? {
        return pngData()?.encode()
    }
}

extension UIColor {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? Int else { return nil }
        let value = UInt32(truncatingIfNeeded: it)
        guard value >= 0x100 else {
            assertionFailure("Invalid color value: #\(String(value, radix: 16)). Expected #RGB, #ARGB, #RRGGBB, or #AARRGGBB")
            return nil
        }
        // Preserve RGB/ARGB shorthand and RRGGBB/AARRGGBB formats.
        let bits = value <= 0xFFFF ? 4 : 8
        let mask: UInt32 = bits == 4 ? 0xF : 0xFF
        func component(_ index: Int) -> CGFloat {
            return CGFloat((value >> (index * bits)) & mask) / CGFloat(mask)
        }
        let alpha = value < (1 << (bits * 3)) ? 1 : component(3)
        return Self(red: component(2), green: component(1), blue: component(0), alpha: alpha)
    }
    func encode() -> Int {
        var r: CGFloat = 0, g: CGFloat = 0, b: CGFloat = 0, a: CGFloat = 0
        if !getRed(&r, green: &g, blue: &b, alpha: &a) {
            if let comps = cgColor.components {
                if comps.count == 2 { r = comps[0]; g = comps[0]; b = comps[0]; a = comps[1] }
                else if comps.count >= 4 { r = comps[0]; g = comps[1]; b = comps[2]; a = comps[3] }
            }
        }
        let argb = [a, r, g, b].reduce(UInt32(0)) { ($0 << 8) | UInt32(lroundf(Float($1 * 255))) }
        return Int(argb)
    }
}

extension UIFont {
    static func decode(_ it: Any?) -> Self? {
        guard let it = it as? [String: Any], let name = it["name"] as? String else { return nil }
        return Self(name: name, size: it["size"] as? CGFloat ?? 0)
    }
    func encode() -> [String: Any?] {
        return ["name": self.fontName, "size": self.pointSize]
    }
}

public extension CGRect {
    static func decode(_ it: Any?) -> Self {
        guard let it = it as? [String: Any] else { return .zero }
        let left = it["left"] as? CGFloat ?? 0
        let top = it["top"] as? CGFloat ?? 0
        return Self(x: left, y: top,
                    width: (it["right"] as? CGFloat ?? 0) - left,
                    height: (it["bottom"] as? CGFloat ?? 0) - top)
    }
    func encode() -> [String: Any?]? {
        if self.origin.x == 0 && self.origin.y == 0 { return nil }
        return [
            "top": self.origin.y,
            "left": self.origin.x,
            "bottom": self.origin.y + self.size.height,
            "right": self.origin.x + self.size.width,
        ]
    }
}

public extension CGPoint {
    static func decode(_ it: Any?) -> Self {
        guard let it = it as? [String: Any] else { return .zero }
        return Self(x: it["x"] as? CGFloat ?? 0,
                    y: it["y"] as? CGFloat ?? 0)
    }
    func encode() -> [String: Any?] {
        return ["x": self.x, "y": self.y]
    }
}

public extension Error {
    func encode() -> [String: Any?] {
        let it = self as NSError
        return ["code": it.code, "message": it.localizedDescription]
    }
}
