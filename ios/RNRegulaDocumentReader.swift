import React

@objc(RNRegulaDocumentReader)
public class RNRegulaDocumentReader: RCTEventEmitter {
    override public func startObserving() { hasListeners = true }
    override public func stopObserving() { hasListeners = false }
    override public func supportedEvents() -> [String] {
        return [completionEvent,
                databaseProgressEvent,
                rfidOnProgressEvent,
                rfidOnChipDetectedEvent,
                rfidOnRetryReadChipEvent,
                paCertificateCompletionEvent,
                taCertificateCompletionEvent,
                taSignatureCompletionEvent,
                aaChallengeCompletionEvent,
                paceProtocolCompletionEvent,
                caProtocolCompletionEvent,
                videoEncoderCompletionEvent,
                onCustomButtonTappedEvent]
    }

    @objc
    func exec(
        _ module: String,
        action: String,
        newArgs: [Any],
        success: @escaping RCTResponseSenderBlock,
        error: @escaping RCTResponseSenderBlock
    ) {
        plugin = self
        args = legacyArguments(for: action, newArgs)
        var didRespond = false
        let lock = NSLock()
        methodCall(action) { data in
            lock.lock()
            let alreadyResponded = didRespond
            didRespond = true
            lock.unlock()
            if !alreadyResponded { success([data.toSendable()]) }
        }
    }
}

private var hasListeners = false
private weak var plugin: RNRegulaDocumentReader?

func sendEvent(_ event: String, _ data: Any? = nil) {
    guard let plugin, hasListeners else { return }
    DispatchQueue.main.async { plugin.sendEvent(withName: event, body: ["msg": data.toSendable()]) }
}

func withPresenter(_ action: @escaping (UIViewController) -> Void) {
    DispatchQueue.main.async {
        if let presenter = RCTPresentedViewController() {
            action(presenter)
            return
        }
        print("REGULA: Cannot present Document Reader UI: no presenter available.")
    }
}

private func legacyArguments(for action: String, _ values: [Any]) -> [Any] {
    switch action {
    case "readRFID", "startRFIDReader": return [values.first as? [String: Any] ?? [:]]
    case "startRetrieveData", "retrieveDataBLE": return [values[1], values[0]]
    case "getTranslation": if values[0] as? String == "RFIDErrorCodes", let code = values[1] as? NSNumber { return [values[0], Int(code.uint32Value)] }
    default: break
    }
    return values
}
