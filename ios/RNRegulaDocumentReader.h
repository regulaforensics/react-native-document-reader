#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <DocumentReader/DocumentReader.h>
#import "RGLWJSONConstructor.h"
#import "RGLWConfig.h"

typedef void (^RGLWCallback)(id _Nullable response);
typedef void (^RGLWEventSender)(NSString* _Nonnull event, id _Nullable data);
typedef void (^RGLWRFIDSignatureCallback)(NSData * _Nonnull signature);

@interface RNRegulaDocumentReader : RCTEventEmitter <RCTBridgeModule,
                                                     RGLRecordScanningProcessDelegate,
                                                     RGLDocReaderRFIDDelegate,
                                                     RGLCustomizationActionDelegate,
                                                     RGLDocReaderDatabaseFetchDelegate>

@property NSNumber* _Nonnull doRequestPACertificates;
@property NSNumber* _Nonnull doRequestTACertificates;
@property NSNumber* _Nonnull doRequestTASignature;

@end
