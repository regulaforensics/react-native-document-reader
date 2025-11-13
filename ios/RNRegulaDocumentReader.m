#import "RNRegulaDocumentReader.h"

RNRegulaDocumentReader* RGLWPlugin;

@implementation RNRegulaDocumentReader
@synthesize bridge = _bridge;
RCT_EXPORT_MODULE();

- (NSArray<NSString*>*)supportedEvents {
    return @[completionEvent,
             databaseProgressEvent,
             rfidOnProgressEvent,
             rfidOnChipDetectedEvent,
             rfidOnRetryReadChipEvent,
             paCertificateCompletionEvent,
             taCertificateCompletionEvent,
             taSignatureCompletionEvent,
             drVideoEncoderCompletionEvent,
             drOnCustomButtonTappedEvent];
}

static bool hasListeners;
-(void)startObserving { hasListeners = YES; }
-(void)stopObserving { hasListeners = NO; }

UIViewController*(^RGLWRootViewController)(void) = ^UIViewController*(){
    return RCTPresentedViewController();
};

static RGLWEventSender sendEvent = ^(NSString* event, id data) {
    dispatch_async(dispatch_get_main_queue(), ^{
        if (hasListeners) [RGLWPlugin sendEventWithName:event body:@{@"msg": data}];
    });
};

RCT_EXPORT_METHOD(exec:(NSString*)moduleName:(NSString*)action:(NSArray*)args:(RCTResponseSenderBlock)sCallback:(RCTResponseSenderBlock)eCallback) {
    RGLWPlugin = self;
    RGLWCallback callback = ^(id _Nullable data) {
        if (data == nil) sCallback(@[[NSNull null]]);
        else sCallback(@[data]);
    };
    [RGLWMain methodCall:action :args :callback :sendEvent];
}

@end
