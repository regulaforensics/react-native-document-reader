#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNRegulaDocumentReader, RCTEventEmitter)

RCT_EXTERN_METHOD(exec:(NSString*)module
                  action:(NSString*)action
                  newArgs:(NSArray*)newArgs
                  success:(RCTResponseSenderBlock)success
                  error:(RCTResponseSenderBlock)error)

@end
