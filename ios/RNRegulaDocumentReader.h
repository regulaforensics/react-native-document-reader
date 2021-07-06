#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <DocumentReader/DocumentReader.h>
#import "RGLWJSONConstructor.h"
#import "RegulaConfig.h"

@interface RNRegulaDocumentReader : RCTEventEmitter <RCTBridgeModule, RGLRecordScanningProcessDelegate>

@property (class) NSNumber* _Nullable databasePercentageDownloaded;

@end
