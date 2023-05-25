#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <DocumentReader/DocumentReader.h>
#import "RGLWJSONConstructor.h"
#import "RGLWRegulaConfig.h"

typedef void (^RGLWCallback)(NSString* _Nullable response);
typedef void (^RGLWRFIDSignatureCallback)(NSData * _Nonnull signature);

@interface RNRegulaDocumentReader : RCTEventEmitter <RCTBridgeModule,
                                                        RGLRecordScanningProcessDelegate,
                                                        RGLDocReaderRFIDDelegate,
                                                        RGLCustomizationActionDelegate>

@property (class) NSNumber* _Nullable databasePercentageDownloaded;

@end

@interface RGLWRFIDDelegateNoPA : NSObject<RGLDocReaderRFIDDelegate>
@end
