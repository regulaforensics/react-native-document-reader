#import <Foundation/Foundation.h>
#import "RGLWRegulaConfig.h"

@implementation RGLWRegulaConfig
+(void)setConfig:(NSDictionary*)options :(RGLDocReader*)reader {
    if([options valueForKey:@"customization"] != nil)
        [self setCustomization: [options valueForKey:@"customization"]: reader.customization];
    if([options valueForKey:@"functionality"] != nil)
        [self setFunctionality: [options valueForKey:@"functionality"]: reader.functionality];
    if([options valueForKey:@"processParams"] != nil)
        [self setProcessParams: [options valueForKey:@"processParams"]: reader.processParams];
}

+(NSMutableDictionary *)getConfig:(RGLDocReader*)reader{
    NSMutableDictionary *result = [[NSMutableDictionary alloc] init];

    result[@"customization"] = [self getCustomization: reader.customization];
    result[@"functionality"] = [self getFunctionality: reader.functionality];
    result[@"processParams"] = [self getProcessParams: reader.processParams];

    return result;
}

+(AVCaptureSessionPreset)AVCaptureSessionPresetWithNSInteger:(NSInteger)value {
    switch(value){
        case 0:
            return AVCaptureSessionPresetLow;
        case 1:
            return AVCaptureSessionPresetMedium;
        case 2:
            return AVCaptureSessionPresetHigh;
        case 3:
            return AVCaptureSessionPresetPhoto;
        case 4:
            return AVCaptureSessionPresetInputPriority;
        case 6:
            return AVCaptureSessionPreset1280x720;
        case 7:
            return AVCaptureSessionPreset1920x1080;
        case 8:
            return AVCaptureSessionPreset3840x2160;
        case 9:
            return AVCaptureSessionPresetiFrame960x540;
        case 10:
            return AVCaptureSessionPresetiFrame1280x720;
        case 12:
            return AVCaptureSessionPreset640x480;
        case 13:
            return AVCaptureSessionPreset352x288;
        default:
            return AVCaptureSessionPresetLow;
    }
}

+(NSInteger)NSIntegerWithAVCaptureSessionPreset:(AVCaptureSessionPreset)value {
    if(value == AVCaptureSessionPresetLow)
        return (NSInteger)0;
    else if(value == AVCaptureSessionPresetMedium)
        return (NSInteger)1;
    else if(value == AVCaptureSessionPresetHigh)
        return (NSInteger)2;
    else if(value == AVCaptureSessionPresetPhoto)
        return (NSInteger)3;
    else if(value == AVCaptureSessionPresetInputPriority)
        return (NSInteger)4;
    else if(value == AVCaptureSessionPreset1280x720)
        return (NSInteger)6;
    else if(value == AVCaptureSessionPreset1920x1080)
        return (NSInteger)7;
    else if(value == AVCaptureSessionPreset3840x2160)
        return (NSInteger)8;
    else if(value == AVCaptureSessionPresetiFrame960x540)
        return (NSInteger)9;
    else if(value == AVCaptureSessionPresetiFrame1280x720)
        return (NSInteger)10;
    else if(value == AVCaptureSessionPreset640x480)
        return (NSInteger)12;
    else if(value == AVCaptureSessionPreset352x288)
        return (NSInteger)13;
    else
        return (NSInteger)0;
}

+(UIColor *)getUIColorObjectFromHexString:(NSString *)hexStr alpha:(CGFloat)alpha {
    unsigned int hexInt = [self intFromHexString:hexStr];
    UIColor *color =
    [UIColor colorWithRed:((CGFloat) ((hexInt & 0xFF0000) >> 16))/255
                    green:((CGFloat) ((hexInt & 0xFF00) >> 8))/255
                     blue:((CGFloat) (hexInt & 0xFF))/255
                    alpha:alpha];

    return color;
}

+ (NSString *)hexStringFromUIColor:(UIColor *)color {
    const CGFloat *components = CGColorGetComponents(color.CGColor);

    CGFloat r = components[0];
    CGFloat g = components[1];
    CGFloat b = components[2];

    return [NSString stringWithFormat:@"#%02lX%02lX%02lX",
            lroundf(r * 255),
            lroundf(g * 255),
            lroundf(b * 255)];
}

+ (unsigned int)intFromHexString:(NSString *)hexStr {
    unsigned int hexInt = 0;
    NSScanner *scanner = [NSScanner scannerWithString:hexStr];
    [scanner setCharactersToBeSkipped:[NSCharacterSet characterSetWithCharactersInString:@"#"]];
    [scanner scanHexInt:&hexInt];

    return hexInt;
}

+(UIImage*)imageFromBase64:(NSString *)base64image {
    NSMutableString *base64 = [NSMutableString stringWithString: base64image];
    if(![[base64image substringToIndex:10] isEqualToString:@"data:image"])
        base64 = [NSMutableString stringWithFormat: @"%@%@", @"data:image/jpeg;base64,", base64image];
    NSURL *url = [NSURL URLWithString:base64];
    NSData *imageData = [NSData dataWithContentsOfURL:url];
    UIImage *image = [UIImage imageWithData:imageData];
    return image;
}

+(CGLineCap)CGLineCapWithNSInteger:(NSInteger)value {
    switch(value){
        case 0:
            return kCGLineCapButt;
        case 1:
            return kCGLineCapRound;
        case 2:
            return kCGLineCapSquare;
        default:
            return kCGLineCapButt;
    }
}

+(NSInteger)NSIntegerWithCGLineCap:(CGLineCap)value {
    switch(value){
        case kCGLineCapButt:
            return (NSInteger)0;
        case kCGLineCapRound:
            return (NSInteger)1;
        case kCGLineCapSquare:
            return (NSInteger)2;
        default:
            return (NSInteger)0;
    }
}

+(UIInterfaceOrientationMask)UIInterfaceOrientationMaskWithNSInteger:(NSInteger)value {
    switch(value){
        case 0:
            return UIInterfaceOrientationMaskPortrait;
        case 1:
            return UIInterfaceOrientationMaskLandscapeLeft;
        case 2:
            return UIInterfaceOrientationMaskLandscapeRight;
        case 3:
            return UIInterfaceOrientationMaskPortraitUpsideDown;
        case 4:
            return UIInterfaceOrientationMaskLandscape;
        case 5:
            return UIInterfaceOrientationMaskAll;
        case 6:
            return UIInterfaceOrientationMaskAllButUpsideDown;
        default:
            return UIInterfaceOrientationMaskPortrait;
    }
}

+(NSInteger)NSIntegerWithUIInterfaceOrientationMask:(UIInterfaceOrientationMask)value {
    switch(value){
        case UIInterfaceOrientationMaskPortrait:
            return (NSInteger)0;
        case UIInterfaceOrientationMaskLandscapeLeft:
            return (NSInteger)1;
        case UIInterfaceOrientationMaskLandscapeRight:
            return (NSInteger)2;
        case UIInterfaceOrientationMaskPortraitUpsideDown:
            return (NSInteger)3;
        case UIInterfaceOrientationMaskLandscape:
            return (NSInteger)4;
        case UIInterfaceOrientationMaskAll:
            return (NSInteger)5;
        case UIInterfaceOrientationMaskAllButUpsideDown:
            return (NSInteger)6;
        default:
            return (NSInteger)0;
    }
}

+(AVCaptureDevicePosition)AVCaptureDevicePositionWithNSInteger:(NSInteger)value {
    switch(value){
        case 0:
            return AVCaptureDevicePositionFront;
        case 1:
            return AVCaptureDevicePositionBack;
        case 2:
            return AVCaptureDevicePositionUnspecified;
        default:
            return AVCaptureDevicePositionFront;
    }
}

+(NSInteger)NSIntegerWithAVCaptureDevicePosition:(AVCaptureDevicePosition)value {
    switch(value){
        case AVCaptureDevicePositionFront:
            return (NSInteger)0;
        case AVCaptureDevicePositionBack:
            return (NSInteger)1;
        case AVCaptureDevicePositionUnspecified:
            return (NSInteger)2;
        default:
            return (NSInteger)0;
    }
}

+(UIViewContentMode)UIViewContentModeWithNSInteger:(NSInteger)value {
    switch(value){
        case 0:
            return UIViewContentModeScaleToFill;
        case 1:
            return UIViewContentModeScaleAspectFit;
        case 2:
            return UIViewContentModeScaleAspectFill;
        case 3:
            return UIViewContentModeRedraw;
        case 4:
            return UIViewContentModeCenter;
        case 5:
            return UIViewContentModeTop;
        case 6:
            return UIViewContentModeBottom;
        case 7:
            return UIViewContentModeLeft;
        case 8:
            return UIViewContentModeRight;
        case 9:
            return UIViewContentModeTopLeft;
        case 10:
            return UIViewContentModeTopRight;
        case 11:
            return UIViewContentModeBottomLeft;
        case 12:
            return UIViewContentModeBottomRight;
        default:
            return UIViewContentModeScaleToFill;
    }
}

+(NSInteger)NSIntegerWithUIViewContentMode:(UIViewContentMode)value {
    switch(value){
        case UIViewContentModeScaleToFill:
            return (NSInteger)0;
        case UIViewContentModeScaleAspectFit:
            return (NSInteger)1;
        case UIViewContentModeScaleAspectFill:
            return (NSInteger)2;
        case UIViewContentModeRedraw:
            return (NSInteger)3;
        case UIViewContentModeCenter:
            return (NSInteger)4;
        case UIViewContentModeTop:
            return (NSInteger)5;
        case UIViewContentModeBottom:
            return (NSInteger)6;
        case UIViewContentModeLeft:
            return (NSInteger)7;
        case UIViewContentModeRight:
            return (NSInteger)8;
        case UIViewContentModeTopLeft:
            return (NSInteger)9;
        case UIViewContentModeTopRight:
            return (NSInteger)10;
        case UIViewContentModeBottomLeft:
            return (NSInteger)11;
        case UIViewContentModeBottomRight:
            return (NSInteger)12;
        default:
            return (NSInteger)0;
    }
}

+(RGLImageQA*)ImageQAFromJson:(NSDictionary*)dict {
    RGLImageQA *image = [RGLImageQA new];

    if([dict valueForKey:@"dpiThreshold"] != nil)
        image.dpiThreshold = [dict valueForKey:@"dpiThreshold"];
    if([dict valueForKey:@"angleThreshold"] != nil)
        image.angleThreshold = [dict valueForKey:@"angleThreshold"];
    if([dict valueForKey:@"focusCheck"] != nil)
        image.focusCheck = [dict valueForKey:@"focusCheck"];
    if([dict valueForKey:@"glaresCheck"] != nil)
        image.glaresCheck = [dict valueForKey:@"glaresCheck"];
    if([dict valueForKey:@"colornessCheck"] != nil)
        image.colornessCheck = [dict valueForKey:@"colornessCheck"];
    if([dict valueForKey:@"moireCheck"] != nil)
        image.moireCheck = [dict valueForKey:@"moireCheck"];
    if([dict valueForKey:@"expectedPass"] != nil){
        NSMutableArray<RGLImageQualityCheckType> *expectedPass = [NSMutableArray new];
        for(NSString* str in [dict valueForKey:@"expectedPass"])
            [expectedPass addObject:str];
        image.expectedPass = expectedPass;
    }
    if([dict valueForKey:@"documentPositionIndent"] != nil)
        image.documentPositionIndent = [dict valueForKey:@"documentPositionIndent"];

    return image;
}

+(NSDictionary*)ImageQAToJson:(RGLImageQA*)input {
    NSMutableDictionary *result = [NSMutableDictionary new];
    if(input == nil) return result;

    result[@"dpiThreshold"] = input.dpiThreshold;
    result[@"angleThreshold"] = input.angleThreshold;
    result[@"focusCheck"] = input.focusCheck;
    result[@"glaresCheck"] = input.glaresCheck;
    result[@"colornessCheck"] = input.colornessCheck;
    result[@"moireCheck"] = input.moireCheck;
    result[@"expectedPass"] = input.expectedPass;
    result[@"documentPositionIndent"] = input.documentPositionIndent;

    return result;
}

+(RGLePassportDataGroup*)RGLePassportDataGroupFromJson:(NSDictionary*)dict {
    RGLePassportDataGroup *group = [[RGLePassportDataGroup alloc] init];

    if([dict valueForKey:@"DG1"] != nil)
        group.dG1 = [[dict valueForKey:@"DG1"] boolValue];
    if([dict valueForKey:@"DG2"] != nil)
        group.dG2 = [[dict valueForKey:@"DG2"] boolValue];
    if([dict valueForKey:@"DG3"] != nil)
        group.dG3 = [[dict valueForKey:@"DG3"] boolValue];
    if([dict valueForKey:@"DG4"] != nil)
        group.dG4 = [[dict valueForKey:@"DG4"] boolValue];
    if([dict valueForKey:@"DG5"] != nil)
        group.dG5 = [[dict valueForKey:@"DG5"] boolValue];
    if([dict valueForKey:@"DG6"] != nil)
        group.dG6 = [[dict valueForKey:@"DG6"] boolValue];
    if([dict valueForKey:@"DG7"] != nil)
        group.dG7 = [[dict valueForKey:@"DG7"] boolValue];
    if([dict valueForKey:@"DG8"] != nil)
        group.dG8 = [[dict valueForKey:@"DG8"] boolValue];
    if([dict valueForKey:@"DG9"] != nil)
        group.dG9 = [[dict valueForKey:@"DG9"] boolValue];
    if([dict valueForKey:@"DG10"] != nil)
        group.dG10 = [[dict valueForKey:@"DG10"] boolValue];
    if([dict valueForKey:@"DG11"] != nil)
        group.dG11 = [[dict valueForKey:@"DG11"] boolValue];
    if([dict valueForKey:@"DG12"] != nil)
        group.dG12 = [[dict valueForKey:@"DG12"] boolValue];
    if([dict valueForKey:@"DG13"] != nil)
        group.dG13 = [[dict valueForKey:@"DG13"] boolValue];
    if([dict valueForKey:@"DG14"] != nil)
        group.dG14 = [[dict valueForKey:@"DG14"] boolValue];
    if([dict valueForKey:@"DG15"] != nil)
        group.dG15 = [[dict valueForKey:@"DG15"] boolValue];
    if([dict valueForKey:@"DG16"] != nil)
        group.dG16 = [[dict valueForKey:@"DG16"] boolValue];

    return group;
}

+(RGLeIDDataGroup*)RGLeIDDataGroupFromJson:(NSDictionary*)dict {
    RGLeIDDataGroup *group = [[RGLeIDDataGroup alloc] init];

    if([dict valueForKey:@"DG1"] != nil)
        group.dG1 = [[dict valueForKey:@"DG1"] boolValue];
    if([dict valueForKey:@"DG2"] != nil)
        group.dG2 = [[dict valueForKey:@"DG2"] boolValue];
    if([dict valueForKey:@"DG3"] != nil)
        group.dG3 = [[dict valueForKey:@"DG3"] boolValue];
    if([dict valueForKey:@"DG4"] != nil)
        group.dG4 = [[dict valueForKey:@"DG4"] boolValue];
    if([dict valueForKey:@"DG5"] != nil)
        group.dG5 = [[dict valueForKey:@"DG5"] boolValue];
    if([dict valueForKey:@"DG6"] != nil)
        group.dG6 = [[dict valueForKey:@"DG6"] boolValue];
    if([dict valueForKey:@"DG7"] != nil)
        group.dG7 = [[dict valueForKey:@"DG7"] boolValue];
    if([dict valueForKey:@"DG8"] != nil)
        group.dG8 = [[dict valueForKey:@"DG8"] boolValue];
    if([dict valueForKey:@"DG9"] != nil)
        group.dG9 = [[dict valueForKey:@"DG9"] boolValue];
    if([dict valueForKey:@"DG10"] != nil)
        group.dG10 = [[dict valueForKey:@"DG10"] boolValue];
    if([dict valueForKey:@"DG11"] != nil)
        group.dG11 = [[dict valueForKey:@"DG11"] boolValue];
    if([dict valueForKey:@"DG12"] != nil)
        group.dG12 = [[dict valueForKey:@"DG12"] boolValue];
    if([dict valueForKey:@"DG13"] != nil)
        group.dG13 = [[dict valueForKey:@"DG13"] boolValue];
    if([dict valueForKey:@"DG14"] != nil)
        group.dG14 = [[dict valueForKey:@"DG14"] boolValue];
    if([dict valueForKey:@"DG15"] != nil)
        group.dG15 = [[dict valueForKey:@"DG15"] boolValue];
    if([dict valueForKey:@"DG16"] != nil)
        group.dG16 = [[dict valueForKey:@"DG16"] boolValue];
    if([dict valueForKey:@"DG17"] != nil)
        group.dG17 = [[dict valueForKey:@"DG17"] boolValue];
    if([dict valueForKey:@"DG18"] != nil)
        group.dG18 = [[dict valueForKey:@"DG18"] boolValue];
    if([dict valueForKey:@"DG19"] != nil)
        group.dG19 = [[dict valueForKey:@"DG19"] boolValue];
    if([dict valueForKey:@"DG20"] != nil)
        group.dG20 = [[dict valueForKey:@"DG20"] boolValue];
    if([dict valueForKey:@"DG21"] != nil)
        group.dG21 = [[dict valueForKey:@"DG21"] boolValue];

    return group;
}

+(RGLeDLDataGroup*)RGLeDLDataGroupFromJson:(NSDictionary*)dict {
    RGLeDLDataGroup *group = [[RGLeDLDataGroup alloc] init];

    if([dict valueForKey:@"DG1"] != nil)
        group.dG1 = [[dict valueForKey:@"DG1"] boolValue];
    if([dict valueForKey:@"DG2"] != nil)
        group.dG2 = [[dict valueForKey:@"DG2"] boolValue];
    if([dict valueForKey:@"DG3"] != nil)
        group.dG3 = [[dict valueForKey:@"DG3"] boolValue];
    if([dict valueForKey:@"DG4"] != nil)
        group.dG4 = [[dict valueForKey:@"DG4"] boolValue];
    if([dict valueForKey:@"DG5"] != nil)
        group.dG5 = [[dict valueForKey:@"DG5"] boolValue];
    if([dict valueForKey:@"DG6"] != nil)
        group.dG6 = [[dict valueForKey:@"DG6"] boolValue];
    if([dict valueForKey:@"DG7"] != nil)
        group.dG7 = [[dict valueForKey:@"DG7"] boolValue];
    if([dict valueForKey:@"DG8"] != nil)
        group.dG8 = [[dict valueForKey:@"DG8"] boolValue];
    if([dict valueForKey:@"DG9"] != nil)
        group.dG9 = [[dict valueForKey:@"DG9"] boolValue];
    if([dict valueForKey:@"DG10"] != nil)
        group.dG10 = [[dict valueForKey:@"DG10"] boolValue];
    if([dict valueForKey:@"DG11"] != nil)
        group.dG11 = [[dict valueForKey:@"DG11"] boolValue];
    if([dict valueForKey:@"DG12"] != nil)
        group.dG12 = [[dict valueForKey:@"DG12"] boolValue];
    if([dict valueForKey:@"DG13"] != nil)
        group.dG13 = [[dict valueForKey:@"DG13"] boolValue];
    if([dict valueForKey:@"DG14"] != nil)
        group.dG14 = [[dict valueForKey:@"DG14"] boolValue];

    return group;
}

+(RGLOnlineProcessingConfig*)RGLOnlineProcessingConfigFromJSON:(NSDictionary*)dict {
    if([dict valueForKey:@"mode"] == nil) return nil;

    RGLOnlineProcessingConfig *result = [[RGLOnlineProcessingConfig alloc] initWithMode:[[dict valueForKey:@"mode"] integerValue]];

    if([dict valueForKey:@"imageFormat"] != nil)
        result.imageFormat = [[dict valueForKey:@"imageFormat"] integerValue];
    if([dict valueForKey:@"url"] != nil)
        result.serviceURL = [dict valueForKey:@"url"];
    if([dict valueForKey:@"imageCompressionQuality"] != nil)
        result.imageCompressionQuality = [[dict valueForKey:@"imageCompressionQuality"] floatValue];
    if([dict valueForKey:@"processParams"] != nil) {
        RGLProcessParams *params = [RGLProcessParams new];
        [self setProcessParams:[dict valueForKey:@"processParams"] :params];
        result.processParams = params;
    }

    return result;
}

+(RGLReprocParams*)RGLReprocParamsFromJSON:(NSDictionary*)dict {
    RGLReprocParams *result = [RGLReprocParams new];

    if([dict valueForKey:@"serviceUrl"] != nil)
        result.serviceURL = [dict valueForKey:@"serviceUrl"];
    if([dict valueForKey:@"failIfNoService"] != nil)
        result.failIfNoService = [dict valueForKey:@"failIfNoService"];

    return result;
}

+(void)setCustomization:(NSDictionary*)options :(RGLCustomization*)customization {
    if([options valueForKey:@"cameraFrameBorderWidth"] != nil)
        customization.cameraFrameBorderWidth = [[options valueForKey:@"cameraFrameBorderWidth"] floatValue];
    if([options valueForKey:@"cameraFrameDefaultColor"] != nil)
        customization.cameraFrameDefaultColor = [self getUIColorObjectFromHexString:[options valueForKey:@"cameraFrameDefaultColor"] alpha:1];
    if([options valueForKey:@"cameraFrameActiveColor"] != nil)
        customization.cameraFrameActiveColor = [self getUIColorObjectFromHexString:[options valueForKey:@"cameraFrameActiveColor"] alpha:1];
    if([options valueForKey:@"cameraFrameShapeType"] != nil)
        customization.cameraFrameShapeType = [[options valueForKey:@"cameraFrameShapeType"] integerValue];
    if([options valueForKey:@"cameraFrameLineLength"] != nil)
        customization.cameraFrameLineLength = [[options valueForKey:@"cameraFrameLineLength"] integerValue];
    if([options valueForKey:@"status"] != nil)
        customization.status = [options valueForKey:@"status"];
    if([options valueForKey:@"showStatusMessages"] != nil)
        customization.showStatusMessages = [[options valueForKey:@"showStatusMessages"] boolValue];
    if([options valueForKey:@"statusTextFont"] != nil)
        customization.statusTextFont = [UIFont fontWithName:[options valueForKey:@"statusTextFont"] size:[options valueForKey:@"statusTextSize"] == nil ? 17 : [[options valueForKey:@"statusTextSize"] floatValue]];
    if([options valueForKey:@"statusTextColor"] != nil)
        customization.statusTextColor = [self getUIColorObjectFromHexString:[options valueForKey:@"statusTextColor"] alpha:1];
    if([options valueForKey:@"statusPositionMultiplier"] != nil)
        customization.statusPositionMultiplier = [[options valueForKey:@"statusPositionMultiplier"] doubleValue];
    if([options valueForKey:@"showResultStatusMessages"] != nil)
        customization.showResultStatusMessages = [[options valueForKey:@"showResultStatusMessages"] boolValue];
    if([options valueForKey:@"resultStatus"] != nil)
        customization.resultStatus = [options valueForKey:@"resultStatus"];
    if([options valueForKey:@"resultStatusTextFont"] != nil)
        customization.resultStatusTextFont = [UIFont fontWithName:[options valueForKey:@"resultStatusTextFont"] size:[options valueForKey:@"resultStatusTextSize"] == nil ? 17 : [[options valueForKey:@"resultStatusTextSize"] floatValue]];
    if([options valueForKey:@"resultStatusTextColor"] != nil)
        customization.resultStatusTextColor = [self getUIColorObjectFromHexString:[options valueForKey:@"resultStatusTextColor"] alpha:1];
    if([options valueForKey:@"resultStatusBackgroundColor"] != nil)
        customization.resultStatusBackgroundColor = [self getUIColorObjectFromHexString:[options valueForKey:@"resultStatusBackgroundColor"] alpha:1];
    if([options valueForKey:@"resultStatusPositionMultiplier"] != nil)
        customization.resultStatusPositionMultiplier = [[options valueForKey:@"resultStatusPositionMultiplier"] doubleValue];
    if([options valueForKey:@"showHelpAnimation"] != nil)
        customization.showHelpAnimation = [[options valueForKey:@"showHelpAnimation"] boolValue];
    if([options valueForKey:@"showNextPageAnimation"] != nil)
        customization.showNextPageAnimation = [[options valueForKey:@"showNextPageAnimation"] boolValue];
    if([options valueForKey:@"helpAnimationImage"] != nil)
        customization.helpAnimationImage = [self imageFromBase64:[options valueForKey:@"helpAnimationImage"]];
    if([options valueForKey:@"multipageAnimationFrontImage"] != nil)
        customization.multipageAnimationFrontImage = [self imageFromBase64:[options valueForKey:@"multipageAnimationFrontImage"]];
    if([options valueForKey:@"multipageAnimationBackImage"] != nil)
        customization.multipageAnimationBackImage = [self imageFromBase64:[options valueForKey:@"multipageAnimationBackImage"]];
    if([options valueForKey:@"tintColor"] != nil)
        customization.tintColor = [self getUIColorObjectFromHexString:[options valueForKey:@"tintColor"] alpha:1];
    if([options valueForKey:@"multipageButtonBackgroundColor"] != nil)
        customization.multipageButtonBackgroundColor = [self getUIColorObjectFromHexString:[options valueForKey:@"multipageButtonBackgroundColor"] alpha:1];
    if([options valueForKey:@"activityIndicatorColor"] != nil)
        customization.activityIndicatorColor = [self getUIColorObjectFromHexString:[options valueForKey:@"activityIndicatorColor"] alpha:1];
    if([options valueForKey:@"showBackgroundMask"] != nil)
        customization.showBackgroundMask = [[options valueForKey:@"showBackgroundMask"] boolValue];
    if([options valueForKey:@"borderBackgroundImage"] != nil)
        customization.borderBackgroundImage = [self imageFromBase64:[options valueForKey:@"borderBackgroundImage"]];
    if([options valueForKey:@"backgroundMaskAlpha"] != nil)
        customization.backgroundMaskAlpha = [[options valueForKey:@"backgroundMaskAlpha"] floatValue];
    if([options valueForKey:@"helpAnimationImageContentMode"] != nil)
        customization.helpAnimationImageContentMode = [self UIViewContentModeWithNSInteger:[[options valueForKey:@"helpAnimationImageContentMode"] integerValue]];
    if([options valueForKey:@"multipageAnimationFrontImageContentMode"] != nil)
        customization.multipageAnimationFrontImageContentMode = [self UIViewContentModeWithNSInteger:[[options valueForKey:@"multipageAnimationFrontImageContentMode"] integerValue]];
    if([options valueForKey:@"multipageAnimationBackImageContentMode"] != nil)
        customization.multipageAnimationBackImageContentMode = [self UIViewContentModeWithNSInteger:[[options valueForKey:@"multipageAnimationBackImageContentMode"] integerValue]];
    if([options valueForKey:@"borderBackgroundImageContentMode"] != nil)
        customization.borderBackgroundImageContentMode = [self UIViewContentModeWithNSInteger:[[options valueForKey:@"borderBackgroundImageContentMode"] integerValue]];
    if([options valueForKey:@"cameraFrameVerticalPositionMultiplier"] != nil)
        customization.cameraFrameVerticalPositionMultiplier = [[options valueForKey:@"cameraFrameVerticalPositionMultiplier"] floatValue];
    if([options valueForKey:@"customStatusPositionMultiplier"] != nil)
        customization.customStatusPositionMultiplier = [[options valueForKey:@"customStatusPositionMultiplier"] floatValue];
    if([options valueForKey:@"customLabelStatus"] != nil)
        customization.customLabelStatus = [[NSAttributedString alloc]initWithString:[options valueForKey:@"customLabelStatus"]];
    if([options valueForKey:@"cameraFrameCornerRadius"] != nil)
        customization.cameraFrameCornerRadius = [[options valueForKey:@"cameraFrameCornerRadius"] floatValue];
    if([options valueForKey:@"torchButtonOnImage"] != nil)
        customization.torchButtonOnImage = [self imageFromBase64:[options valueForKey:@"torchButtonOnImage"]];
    if([options valueForKey:@"torchButtonOffImage"] != nil)
        customization.torchButtonOffImage = [self imageFromBase64:[options valueForKey:@"torchButtonOffImage"]];
    if([options valueForKey:@"closeButtonImage"] != nil)
        customization.closeButtonImage = [self imageFromBase64:[options valueForKey:@"closeButtonImage"]];
    if([options valueForKey:@"captureButtonImage"] != nil)
        customization.captureButtonImage = [self imageFromBase64:[options valueForKey:@"captureButtonImage"]];
    if([options valueForKey:@"changeFrameButtonCollapseImage"] != nil)
        customization.changeFrameButtonCollapseImage = [self imageFromBase64:[options valueForKey:@"changeFrameButtonCollapseImage"]];
    if([options valueForKey:@"changeFrameButtonExpandImage"] != nil)
        customization.changeFrameButtonExpandImage = [self imageFromBase64:[options valueForKey:@"changeFrameButtonExpandImage"]];
    if([options valueForKey:@"cameraSwitchButtonImage"] != nil)
        customization.cameraSwitchButtonImage = [self imageFromBase64:[options valueForKey:@"cameraSwitchButtonImage"]];
    if([options valueForKey:@"cameraFrameLineCap"] != nil)
        customization.cameraFrameLineCap = [self CGLineCapWithNSInteger:[[options valueForKey:@"cameraFrameLineCap"] integerValue]];
    if([options valueForKey:@"cameraFrameOffsetWidth"] != nil)
        customization.cameraFrameOffsetWidth = [[options valueForKey:@"cameraFrameOffsetWidth"] floatValue];
    if([options valueForKey:@"cameraFramePortraitAspectRatio"] != nil)
        customization.cameraFramePortraitAspectRatio = [[options valueForKey:@"cameraFramePortraitAspectRatio"] floatValue];
    if([options valueForKey:@"cameraFrameLandscapeAspectRatio"] != nil)
        customization.cameraFrameLandscapeAspectRatio = [[options valueForKey:@"cameraFrameLandscapeAspectRatio"] floatValue];
    if([options valueForKey:@"toolbarSize"] != nil)
        customization.toolbarSize = [[options valueForKey:@"toolbarSize"] floatValue];
    if([options valueForKey:@"statusBackgroundColor"] != nil)
        customization.statusBackgroundColor = [self getUIColorObjectFromHexString:[options valueForKey:@"statusBackgroundColor"] alpha:1];
    if([options valueForKey:@"cameraPreviewBackgroundColor"] != nil)
        customization.cameraPreviewBackgroundColor = [self getUIColorObjectFromHexString:[options valueForKey:@"cameraPreviewBackgroundColor"] alpha:1];
    if([options valueForKey:@"hologramAnimationImageContentMode"] != nil)
        customization.hologramAnimationImageContentMode = [self UIViewContentModeWithNSInteger:[[options valueForKey:@"hologramAnimationImageContentMode"] integerValue]];
    if([options valueForKey:@"hologramAnimationPositionMultiplier"] != nil)
        customization.hologramAnimationPositionMultiplier = [[options valueForKey:@"hologramAnimationPositionMultiplier"] floatValue];
    if([options valueForKey:@"hologramAnimationImage"] != nil)
        customization.hologramAnimationImage = [self imageFromBase64:[options valueForKey:@"hologramAnimationImage"]];
    if([options valueForKey:@"uiCustomizationLayer"] != nil)
        customization.customUILayerJSON = [options valueForKey:@"uiCustomizationLayer"];
}

+(void)setFunctionality:(NSDictionary*)options :(RGLFunctionality*)functionality {
    if([options valueForKey:@"cameraFrame"] != nil){
        NSString *enumFromAndroid = [options valueForKey:@"cameraFrame"];
        if([enumFromAndroid  isEqual: @"id1"])
            functionality.cameraFrame = 0;
        if([enumFromAndroid  isEqual: @"max"])
            functionality.cameraFrame = 1;
        if([enumFromAndroid  isEqual: @"none"])
            functionality.cameraFrame = 2;
        if([enumFromAndroid  isEqual: @"document"])
            functionality.cameraFrame = 3;
    }
    if([options valueForKey:@"showTorchButton"] != nil)
        functionality.showTorchButton = [[options valueForKey:@"showTorchButton"] boolValue];
    if([options valueForKey:@"showCloseButton"] != nil)
        functionality.showCloseButton = [[options valueForKey:@"showCloseButton"] boolValue];
    if([options valueForKey:@"showCaptureButton"] != nil)
        functionality.showCaptureButton = [[options valueForKey:@"showCaptureButton"] boolValue];
    if([options valueForKey:@"showChangeFrameButton"] != nil)
        functionality.showChangeFrameButton = [[options valueForKey:@"showChangeFrameButton"] boolValue];
    if([options valueForKey:@"showSkipNextPageButton"] != nil)
        functionality.showSkipNextPageButton = [[options valueForKey:@"showSkipNextPageButton"] boolValue];
    if([options valueForKey:@"showCameraSwitchButton"] != nil)
        functionality.showCameraSwitchButton = [[options valueForKey:@"showCameraSwitchButton"] boolValue];
    if([options valueForKey:@"videoCaptureMotionControl"] != nil)
        functionality.videoCaptureMotionControl = [[options valueForKey:@"videoCaptureMotionControl"] boolValue];
    if([options valueForKey:@"skipFocusingFrames"] != nil)
        functionality.skipFocusingFrames = [[options valueForKey:@"skipFocusingFrames"] boolValue];
    if([options valueForKey:@"orientation"] != nil)
        functionality.orientation = [self UIInterfaceOrientationMaskWithNSInteger:[[options valueForKey:@"orientation"] integerValue]];
    if([options valueForKey:@"videoSessionPreset"] != nil)
        functionality.videoSessionPreset = [self AVCaptureSessionPresetWithNSInteger:[[options valueForKey:@"videoSessionPreset"] integerValue]];
    if([options valueForKey:@"singleResult"] != nil)
        functionality.singleResult = [[options valueForKey:@"singleResult"] boolValue];
    if([options valueForKey:@"cameraPosition"] != nil)
        functionality.cameraPosition = [self AVCaptureDevicePositionWithNSInteger:[[options valueForKey:@"cameraPosition"] integerValue]];
    if([options valueForKey:@"btDeviceName"] != nil)
        #pragma clang diagnostic ignored "-Wdeprecated-declarations"
        functionality.btDeviceName = [options valueForKey:@"btDeviceName"];
        #pragma clang diagnostic pop
    if([options valueForKey:@"useAuthenticator"] != nil)
        functionality.useAuthenticator = [[options valueForKey:@"useAuthenticator"] boolValue];
    if([options valueForKey:@"showCaptureButtonDelayFromDetect"] != nil)
        functionality.showCaptureButtonDelayFromDetect = [[options valueForKey:@"showCaptureButtonDelayFromDetect"] doubleValue];
    if([options valueForKey:@"showCaptureButtonDelayFromStart"] != nil)
        functionality.showCaptureButtonDelayFromStart = [[options valueForKey:@"showCaptureButtonDelayFromStart"] doubleValue];
    if([options valueForKey:@"captureMode"] != nil)
        functionality.captureMode = [[options valueForKey:@"captureMode"] intValue];
    if([options valueForKey:@"displayMetadata"] != nil)
        functionality.showMetadataInfo = [[options valueForKey:@"displayMetadata"] boolValue];
    if([options valueForKey:@"isZoomEnabled"] != nil)
        functionality.isZoomEnabled = [[options valueForKey:@"isZoomEnabled"] boolValue];
    if([options valueForKey:@"zoomFactor"] != nil)
        functionality.zoomFactor = [[options valueForKey:@"zoomFactor"] floatValue];
    if([options valueForKey:@"recordScanningProcess"] != nil)
        functionality.recordScanningProcess = [[options valueForKey:@"recordScanningProcess"] boolValue];
    if([options valueForKey:@"manualMultipageMode"] != nil)
        functionality.manualMultipageMode = [[options valueForKey:@"manualMultipageMode"] boolValue];
    if([options valueForKey:@"videoOutputSettings"] != nil)
        functionality.videoOutputSettings = [options valueForKey:@"videoOutputSettings"];
    if([options valueForKey:@"onlineProcessingConfiguration"] != nil)
        functionality.onlineProcessingConfig = [self RGLOnlineProcessingConfigFromJSON:[options valueForKey:@"onlineProcessingConfiguration"]];;
}

+(void)setProcessParams:(NSDictionary*)options :(RGLProcessParams*)processParams {
    if([options valueForKey:@"multipageProcessing"] != nil)
        processParams.multipageProcessing = [NSNumber numberWithBool:[[options valueForKey:@"multipageProcessing"] boolValue]];
    if([options valueForKey:@"dateFormat"] != nil)
        processParams.dateFormat = [options valueForKey:@"dateFormat"];
    if([options valueForKey:@"logs"] != nil)
        processParams.logs = [NSNumber numberWithBool:[[options valueForKey:@"logs"] boolValue]];
    if([options valueForKey:@"debugSaveImages"] != nil)
        processParams.debugSaveImages = [NSNumber numberWithBool:[[options valueForKey:@"debugSaveImages"] boolValue]];
    if([options valueForKey:@"debugSaveCroppedImages"] != nil)
        processParams.debugSaveCroppedImages = [NSNumber numberWithBool:[[options valueForKey:@"debugSaveCroppedImages"] boolValue]];
    if([options valueForKey:@"debugSaveLogs"] != nil)
        processParams.debugSaveLogs = [NSNumber numberWithBool:[[options valueForKey:@"debugSaveLogs"] boolValue]];
    if([options valueForKey:@"scenario"] != nil)
        processParams.scenario = [options valueForKey:@"scenario"];
    if([options valueForKey:@"barcodeTypes"] != nil)
        processParams.barcodeTypes = [options valueForKey:@"barcodeTypes"];
    if([options valueForKey:@"documentIDList"] != nil)
        processParams.documentIDList = [options valueForKey:@"documentIDList"];
    if([options valueForKey:@"fieldTypesFilter"] != nil)
        processParams.fieldTypesFilter = [options valueForKey:@"fieldTypesFilter"];
    if([options valueForKey:@"disableFocusingCheck"] != nil)
        processParams.disableFocusingCheck = [NSNumber numberWithBool:[[options valueForKey:@"disableFocusingCheck"] boolValue]];
    if([options valueForKey:@"captureButtonScenario"] != nil)
        processParams.captureButtonScenario = [options valueForKey:@"captureButtonScenario"];
    if([options valueForKey:@"measureSystem"] != nil)
        processParams.measureSystem = [[options valueForKey:@"measureSystem"] integerValue];
    if([options valueForKey:@"returnUncroppedImage"] != nil)
        processParams.returnUncroppedImage = [NSNumber numberWithBool:[[options valueForKey:@"returnUncroppedImage"] boolValue]];
    if([options valueForKey:@"customParams"] != nil)
        processParams.customParams = [options objectForKey:@"customParams"];
    if([options valueForKey:@"debugSaveRFIDSession"] != nil)
        processParams.debugSaveRFIDSession = [NSNumber numberWithBool:[[options valueForKey:@"debugSaveRFIDSession"] boolValue]];
    if([options valueForKey:@"doublePageSpread"] != nil)
        processParams.doublePageSpread = [NSNumber numberWithBool:[[options valueForKey:@"doublePageSpread"] boolValue]];
    if([options valueForKey:@"barcodeParserType"] != nil)
        processParams.barcodeParserType = [NSNumber numberWithInteger:[[options valueForKey:@"barcodeParserType"] integerValue]];
    if([options valueForKey:@"timeout"] != nil)
        processParams.timeout = [NSNumber numberWithDouble:[[options valueForKey:@"timeout"] doubleValue]];
    if([options valueForKey:@"timeoutFromFirstDetect"] != nil)
        processParams.timeoutFromFirstDetect = [NSNumber numberWithDouble:[[options valueForKey:@"timeoutFromFirstDetect"] doubleValue]];
    if([options valueForKey:@"timeoutFromFirstDocType"] != nil)
        processParams.timeoutFromFirstDocType = [NSNumber numberWithDouble:[[options valueForKey:@"timeoutFromFirstDocType"] doubleValue]];
    if([options valueForKey:@"manualCrop"] != nil)
        processParams.manualCrop = [NSNumber numberWithBool:[[options valueForKey:@"manualCrop"] boolValue]];
    if([options valueForKey:@"perspectiveAngle"] != nil)
        processParams.perspectiveAngle = [NSNumber numberWithInteger:[[options valueForKey:@"perspectiveAngle"] integerValue]];
    if([options valueForKey:@"minDPI"] != nil)
        processParams.minDPI = [NSNumber numberWithInteger:[[options valueForKey:@"minDPI"] integerValue]];
    if([options valueForKey:@"integralImage"] != nil)
        processParams.integralImage = [NSNumber numberWithBool:[[options valueForKey:@"integralImage"] boolValue]];
    if([options valueForKey:@"returnCroppedBarcode"] != nil)
        processParams.returnCroppedBarcode = [NSNumber numberWithBool:[[options valueForKey:@"returnCroppedBarcode"] boolValue]];
    if([options valueForKey:@"checkHologram"] != nil)
        processParams.checkHologram = [NSNumber numberWithBool:[[options valueForKey:@"checkHologram"] boolValue]];
    if([options valueForKey:@"checkRequiredTextFields"] != nil)
        processParams.checkRequiredTextFields = [NSNumber numberWithBool:[[options valueForKey:@"checkRequiredTextFields"] boolValue]];
    if([options valueForKey:@"depersonalizeLog"] != nil)
        processParams.depersonalizeLog = [options valueForKey:@"depersonalizeLog"];
    if([options valueForKey:@"resultTypeOutput"] != nil)
        processParams.resultTypeOutput = [options valueForKey:@"resultTypeOutput"];
    if([options valueForKey:@"generateDoublePageSpreadImage"] != nil)
        processParams.generateDoublePageSpreadImage = [options valueForKey:@"generateDoublePageSpreadImage"];
    if([options valueForKey:@"imageDpiOutMax"] != nil)
        processParams.imageDpiOutMax = [options valueForKey:@"imageDpiOutMax"];
    if([options valueForKey:@"alreadyCropped"] != nil)
        processParams.alreadyCropped = [options valueForKey:@"alreadyCropped"];
    if([options valueForKey:@"forceDocID"] != nil)
        processParams.forceDocID = [options valueForKey:@"forceDocID"];
    if([options valueForKey:@"matchTextFieldMask"] != nil)
        processParams.matchTextFieldMask = [options valueForKey:@"matchTextFieldMask"];
    if([options valueForKey:@"fastDocDetect"] != nil)
        processParams.fastDocDetect = [options valueForKey:@"fastDocDetect"];
    if([options valueForKey:@"updateOCRValidityByGlare"] != nil)
        processParams.updateOCRValidityByGlare = [options valueForKey:@"updateOCRValidityByGlare"];
    if([options valueForKey:@"imageQA"] != nil)
        processParams.imageQA = [RGLWRegulaConfig ImageQAFromJson:[options valueForKey:@"imageQA"]];
    if([options valueForKey:@"forceDocFormat"] != nil)
        processParams.forceDocFormat = [options valueForKey:@"forceDocFormat"];
    if([options valueForKey:@"noGraphics"] != nil)
        processParams.noGraphics = [options valueForKey:@"noGraphics"];
    if([options valueForKey:@"documentAreaMin"] != nil)
        processParams.documentAreaMin = [options valueForKey:@"documentAreaMin"];
    if([options valueForKey:@"multiDocOnImage"] != nil)
        processParams.multiDocOnImage = [options valueForKey:@"multiDocOnImage"];
    if([options valueForKey:@"shiftExpiryDate"] != nil)
        processParams.shiftExpiryDate = [options valueForKey:@"shiftExpiryDate"];
    if([options valueForKey:@"minimalHolderAge"] != nil)
        processParams.minimalHolderAge = [options valueForKey:@"minimalHolderAge"];
    if([options valueForKey:@"mrzFormatsFilter"] != nil)
        processParams.mrzFormatsFilter = [options valueForKey:@"mrzFormatsFilter"];
    if([options valueForKey:@"forceReadMrzBeforeLocate"] != nil)
        processParams.forceReadMrzBeforeLocate = [options valueForKey:@"forceReadMrzBeforeLocate"];
    if([options valueForKey:@"parseBarcodes"] != nil)
        processParams.parseBarcodes = [options valueForKey:@"parseBarcodes"];
    if([options valueForKey:@"shouldReturnPackageForReprocess"] != nil)
        processParams.shouldReturnPackageForReprocess = [options valueForKey:@"shouldReturnPackageForReprocess"];
    if([options valueForKey:@"imageOutputMaxWidth"] != nil)
        processParams.imageOutputMaxWidth = [options valueForKey:@"imageOutputMaxWidth"];
    if([options valueForKey:@"imageOutputMaxHeight"] != nil)
        processParams.imageOutputMaxHeight = [options valueForKey:@"imageOutputMaxHeight"];
    if([options valueForKey:@"disablePerforationOCR"] != nil)
        processParams.disablePerforationOCR = [options valueForKey:@"disablePerforationOCR"];
    if([options valueForKey:@"respectImageQuality"] != nil)
        processParams.respectImageQuality = [options valueForKey:@"respectImageQuality"];
    if([options valueForKey:@"splitNames"] != nil)
        processParams.splitNames = [options valueForKey:@"splitNames"];
    if([options valueForKey:@"processAuth"] != nil)
        processParams.processAuth = [options valueForKey:@"processAuth"];
    if([options valueForKey:@"documentGroupFilter"] != nil)
        processParams.documentGroupFilter = [options mutableArrayValueForKey:@"documentGroupFilter"];
    if([options valueForKey:@"convertCase"] != nil)
        processParams.convertCase = [options valueForKey:@"convertCase"];
    if([options valueForKey:@"rfidParams"] != nil)
        processParams.rfidParams = [self RGLRFIDParamsFromJSON:[options valueForKey:@"rfidParams"]];
}

+(NSMutableDictionary *)getCustomization:(RGLCustomization*)customization {
    NSMutableDictionary *result = [[NSMutableDictionary alloc] init];

    result[@"showHelpAnimation"] = [NSNumber numberWithBool:customization.showHelpAnimation];
    result[@"helpAnimationImage"] = [UIImageJPEGRepresentation(customization.helpAnimationImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"showStatusMessages"] = [NSNumber numberWithBool:customization.showStatusMessages];
    result[@"status"] = customization.status;
    result[@"resultStatus"] = customization.resultStatus;
    result[@"statusPositionMultiplier"] = [NSNumber numberWithFloat:customization.statusPositionMultiplier];
    result[@"resultStatusPositionMultiplier"] = [NSNumber numberWithFloat:customization.resultStatusPositionMultiplier];
    result[@"cameraFrameShapeType"] = [NSNumber numberWithFloat:customization.cameraFrameShapeType];
    result[@"resultStatusTextFont"] = customization.resultStatusTextFont.fontName;
    result[@"cameraFrameBorderWidth"] = [NSNumber numberWithFloat:customization.cameraFrameBorderWidth];
    result[@"statusTextFont"] = customization.statusTextFont.fontName;
    result[@"multipageAnimationFrontImage"] = [UIImageJPEGRepresentation(customization.multipageAnimationFrontImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"multipageAnimationBackImage"] = [UIImageJPEGRepresentation(customization.multipageAnimationBackImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"cameraFrameLineLength"] = [NSNumber numberWithFloat:customization.cameraFrameLineLength];
    result[@"showNextPageAnimation"] = [NSNumber numberWithBool:customization.showNextPageAnimation];
    result[@"showBackgroundMask"] = [NSNumber numberWithBool:customization.showBackgroundMask];
    result[@"borderBackgroundImage"] = [UIImageJPEGRepresentation(customization.borderBackgroundImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"backgroundMaskAlpha"] = [NSNumber numberWithFloat:customization.backgroundMaskAlpha];
    result[@"helpAnimationImageContentMode"] = [NSNumber numberWithInteger:[self NSIntegerWithUIViewContentMode:customization.helpAnimationImageContentMode]];
    result[@"multipageAnimationFrontImageContentMode"] = [NSNumber numberWithInteger:[self NSIntegerWithUIViewContentMode:customization.multipageAnimationFrontImageContentMode]];
    result[@"multipageAnimationBackImageContentMode"] = [NSNumber numberWithInteger:[self NSIntegerWithUIViewContentMode:customization.multipageAnimationBackImageContentMode]];
    result[@"borderBackgroundImageContentMode"] = [NSNumber numberWithInteger:[self NSIntegerWithUIViewContentMode:customization.borderBackgroundImageContentMode]];
    result[@"cameraFrameVerticalPositionMultiplier"] = [NSNumber numberWithFloat:customization.cameraFrameVerticalPositionMultiplier];
    result[@"customStatusPositionMultiplier"] = [NSNumber numberWithFloat:customization.customStatusPositionMultiplier];
    result[@"cameraFrameCornerRadius"] = [NSNumber numberWithFloat:customization.cameraFrameCornerRadius];
    result[@"torchButtonOnImage"] = [UIImageJPEGRepresentation(customization.torchButtonOnImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"torchButtonOffImage"] = [UIImageJPEGRepresentation(customization.torchButtonOffImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"closeButtonImage"] = [UIImageJPEGRepresentation(customization.closeButtonImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"captureButtonImage"] = [UIImageJPEGRepresentation(customization.captureButtonImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"changeFrameButtonCollapseImage"] = [UIImageJPEGRepresentation(customization.changeFrameButtonCollapseImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"changeFrameButtonExpandImage"] = [UIImageJPEGRepresentation(customization.changeFrameButtonExpandImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"cameraSwitchButtonImage"] = [UIImageJPEGRepresentation(customization.cameraSwitchButtonImage, 1.0) base64EncodedStringWithOptions:0];
    result[@"cameraFrameLineCap"] = [NSNumber numberWithInteger:[self NSIntegerWithCGLineCap:customization.cameraFrameLineCap]];
    result[@"cameraFrameOffsetWidth"] = [NSNumber numberWithFloat:customization.cameraFrameOffsetWidth];
    result[@"cameraFramePortraitAspectRatio"] = [NSNumber numberWithFloat:customization.cameraFramePortraitAspectRatio];
    result[@"cameraFrameLandscapeAspectRatio"] = [NSNumber numberWithFloat:customization.cameraFrameLandscapeAspectRatio];
    result[@"toolbarSize"] = [NSNumber numberWithFloat:customization.toolbarSize];
    result[@"hologramAnimationImageContentMode"] = [NSNumber numberWithInteger:[self NSIntegerWithUIViewContentMode:customization.hologramAnimationImageContentMode]];
    result[@"hologramAnimationPositionMultiplier"] = [NSNumber numberWithFloat:customization.hologramAnimationPositionMultiplier];
    result[@"uiCustomizationLayer"] = customization.customUILayerJSON;
    result[@"hologramAnimationImage"] = [UIImageJPEGRepresentation(customization.hologramAnimationImage, 1.0) base64EncodedStringWithOptions:0];
    if(customization.customLabelStatus != nil)
        result[@"customLabelStatus"] = customization.customLabelStatus.string;
    if(customization.activityIndicatorColor != nil)
        result[@"activityIndicatorColor"] = [self hexStringFromUIColor:customization.activityIndicatorColor];
    if(customization.multipageButtonBackgroundColor != nil)
        result[@"multipageButtonBackgroundColor"] = [self hexStringFromUIColor:customization.multipageButtonBackgroundColor];
    if(customization.statusTextColor != nil)
        result[@"statusTextColor"] = [self hexStringFromUIColor:customization.statusTextColor];
    if(customization.resultStatusBackgroundColor != nil)
        result[@"resultStatusBackgroundColor"] = [self hexStringFromUIColor:customization.resultStatusBackgroundColor];
    if(customization.cameraPreviewBackgroundColor != nil)
        result[@"cameraPreviewBackgroundColor"] = [self hexStringFromUIColor:customization.cameraPreviewBackgroundColor];
    if(customization.cameraFrameDefaultColor != nil)
        result[@"cameraFrameDefaultColor"] = [self hexStringFromUIColor:customization.cameraFrameDefaultColor];
    if(customization.cameraFrameActiveColor != nil)
        result[@"cameraFrameActiveColor"] = [self hexStringFromUIColor:customization.cameraFrameActiveColor];
    if(customization.tintColor != nil)
        result[@"tintColor"] = [self hexStringFromUIColor:customization.tintColor];
    if(customization.resultStatusTextColor != nil)
        result[@"resultStatusTextColor"] = [self hexStringFromUIColor:customization.resultStatusTextColor];
    if(customization.statusBackgroundColor != nil)
        result[@"statusBackgroundColor"] = [self hexStringFromUIColor:customization.statusBackgroundColor];

    return result;
}

+(NSMutableDictionary *)getFunctionality:(RGLFunctionality*)functionality {
    NSMutableDictionary *result = [[NSMutableDictionary alloc] init];

    result[@"cameraFrame"] = [NSNumber numberWithInteger:functionality.cameraFrame];
    result[@"showTorchButton"] = [NSNumber numberWithBool:functionality.showTorchButton];
    result[@"showCloseButton"] = [NSNumber numberWithBool:functionality.showCloseButton];
    result[@"showCaptureButton"] = [NSNumber numberWithBool:functionality.showCaptureButton];
    result[@"showChangeFrameButton"] = [NSNumber numberWithBool:functionality.showChangeFrameButton];
    result[@"showCameraSwitchButton"] = [NSNumber numberWithBool:functionality.showCameraSwitchButton];
    result[@"showSkipNextPageButton"] = [NSNumber numberWithBool:functionality.showSkipNextPageButton];
    result[@"skipFocusingFrames"] = [NSNumber numberWithBool:functionality.skipFocusingFrames];
    result[@"videoSessionPreset"] = [NSNumber numberWithInteger:[self NSIntegerWithAVCaptureSessionPreset:functionality.videoSessionPreset]];
    result[@"videoCaptureMotionControl"] = [NSNumber numberWithBool:functionality.videoCaptureMotionControl];
    result[@"orientation"] = [NSNumber numberWithInteger:[self NSIntegerWithUIInterfaceOrientationMask:functionality.orientation]];
    result[@"cameraPosition"] = [NSNumber numberWithInteger:[self NSIntegerWithAVCaptureDevicePosition:functionality.cameraPosition]];
    #pragma clang diagnostic ignored "-Wdeprecated-declarations"
    result[@"btDeviceName"] = functionality.btDeviceName;
    #pragma clang diagnostic pop
    result[@"useAuthenticator"] = [NSNumber numberWithBool:functionality.isUseAuthenticator];
    result[@"showCaptureButtonDelayFromDetect"] = [NSNumber numberWithDouble:functionality.showCaptureButtonDelayFromDetect];
    result[@"showCaptureButtonDelayFromStart"] = [NSNumber numberWithDouble:functionality.showCaptureButtonDelayFromStart];
    result[@"captureMode"] = [NSNumber numberWithInteger:functionality.captureMode];
    result[@"displayMetadata"] = [NSNumber numberWithBool:functionality.showMetadataInfo];
    result[@"isZoomEnabled"] = [NSNumber numberWithBool:functionality.isZoomEnabled];
    result[@"zoomFactor"] = [NSNumber numberWithBool:functionality.zoomFactor];
    result[@"recordScanningProcess"] = [NSNumber numberWithBool:functionality.recordScanningProcess];
    result[@"manualMultipageMode"] = [NSNumber numberWithBool:functionality.manualMultipageMode];
    result[@"videoOutputSettings"] = functionality.videoOutputSettings;

    return result;
}

+(NSMutableDictionary *)getProcessParams:(RGLProcessParams*)processParams {
    NSMutableDictionary *result = [[NSMutableDictionary alloc] init];

    result[@"scenario"] = processParams.scenario;
    result[@"captureButtonScenario"] = processParams.captureButtonScenario;
    result[@"logs"] = [NSNumber numberWithBool:processParams.logs];
    result[@"multipageProcessing"] = [NSNumber numberWithBool:processParams.multipageProcessing];
    result[@"disableFocusingCheck"] = [NSNumber numberWithBool:processParams.disableFocusingCheck];
    result[@"debugSaveImages"] = [NSNumber numberWithBool:processParams.debugSaveImages];
    result[@"debugSaveCroppedImages"] = [NSNumber numberWithBool:processParams.debugSaveCroppedImages];
    result[@"debugSaveLogs"] = [NSNumber numberWithBool:processParams.debugSaveLogs];
    result[@"dateFormat"] = processParams.dateFormat;
    result[@"documentIDList"] = processParams.documentIDList;
    result[@"sessionLogFolder"] = processParams.sessionLogFolder;
    result[@"fieldTypesFilter"] = processParams.fieldTypesFilter;
    result[@"barcodeTypes"] = processParams.barcodeTypes;
    result[@"measureSystem"] = [NSNumber numberWithInteger:processParams.measureSystem];
    result[@"returnUncroppedImage"] = [NSNumber numberWithBool:processParams.returnUncroppedImage];
    result[@"customParams"] = processParams.customParams;
    result[@"debugSaveRFIDSession"] = [NSNumber numberWithBool:processParams.debugSaveRFIDSession];
    result[@"doublePageSpread"] = [NSNumber numberWithBool:processParams.doublePageSpread];
    result[@"barcodeParserType"] = processParams.barcodeParserType;
    result[@"timeout"] = processParams.timeout;
    result[@"timeoutFromFirstDetect"] = processParams.timeoutFromFirstDetect;
    result[@"timeoutFromFirstDocType"] = processParams.timeoutFromFirstDocType;
    result[@"manualCrop"] = [NSNumber numberWithBool:processParams.manualCrop];
    result[@"perspectiveAngle"] = processParams.perspectiveAngle;
    result[@"minDPI"] = processParams.minDPI;
    result[@"integralImage"] = [NSNumber numberWithBool:processParams.integralImage];
    result[@"returnCroppedBarcode"] = [NSNumber numberWithBool:processParams.returnCroppedBarcode];
    result[@"checkHologram"] = [NSNumber numberWithBool:processParams.checkHologram];
    result[@"checkRequiredTextFields"] = [NSNumber numberWithBool:processParams.checkRequiredTextFields];
    result[@"depersonalizeLog"] = processParams.depersonalizeLog;
    result[@"resultTypeOutput"] = processParams.resultTypeOutput;
    result[@"generateDoublePageSpreadImage"] = processParams.generateDoublePageSpreadImage;
    result[@"imageDpiOutMax"] = processParams.imageDpiOutMax;
    result[@"alreadyCropped"] = processParams.alreadyCropped;
    result[@"forceDocID"] = processParams.forceDocID;
    result[@"matchTextFieldMask"] = processParams.matchTextFieldMask;
    result[@"fastDocDetect"] = processParams.fastDocDetect;
    result[@"updateOCRValidityByGlare"] = processParams.updateOCRValidityByGlare;
    result[@"imageQA"] = [RGLWRegulaConfig ImageQAToJson:processParams.imageQA];
    result[@"forceDocFormat"] = processParams.forceDocFormat;
    result[@"noGraphics"] = processParams.noGraphics;
    result[@"documentAreaMin"] = processParams.documentAreaMin;
    result[@"multiDocOnImage"] = processParams.multiDocOnImage;
    result[@"shiftExpiryDate"] = processParams.shiftExpiryDate;
    result[@"minimalHolderAge"] = processParams.minimalHolderAge;
    result[@"mrzFormatsFilter"] = processParams.mrzFormatsFilter;
    result[@"forceReadMrzBeforeLocate"] = processParams.forceReadMrzBeforeLocate;
    result[@"parseBarcodes"] = processParams.parseBarcodes;
    result[@"shouldReturnPackageForReprocess"] = processParams.shouldReturnPackageForReprocess;
    result[@"imageOutputMaxWidth"] = processParams.imageOutputMaxWidth;
    result[@"imageOutputMaxHeight"] = processParams.imageOutputMaxHeight;
    result[@"disablePerforationOCR"] = processParams.disablePerforationOCR;
    result[@"respectImageQuality"] = processParams.respectImageQuality;
    result[@"splitNames"] = processParams.splitNames;
    result[@"processAuth"] = processParams.processAuth;
    result[@"documentGroupFilter"] = processParams.documentGroupFilter;
    result[@"convertCase"] = processParams.convertCase;

    return result;
}

+(void)setRfidScenario:(NSDictionary*)options :(RGLRFIDScenario*)rfidScenario {
    if([options valueForKey:@"autoSettings"] != nil)
        rfidScenario.autoSettings = [[options valueForKey:@"autoSettings"] boolValue];
    if([options valueForKey:@"signManagementAction"] != nil)
        rfidScenario.signManagementAction = [[options valueForKey:@"signManagementAction"] integerValue];
    if([options valueForKey:@"readingBuffer"] != nil)
        rfidScenario.readingBuffer = [[options valueForKey:@"readingBuffer"] intValue];
    if([options valueForKey:@"onlineTAToSignDataType"] != nil)
        rfidScenario.onlineTAToSignDataType = [[options valueForKey:@"onlineTAToSignDataType"] intValue];
    if([options valueForKey:@"onlineTA"] != nil)
        rfidScenario.onlineTA = [[options valueForKey:@"onlineTA"] boolValue];
    if([options valueForKey:@"writeEid"] != nil)
        rfidScenario.writeEid = [[options valueForKey:@"writeEid"] boolValue];
    if([options valueForKey:@"profilerType"] != nil)
        rfidScenario.profilerType = [[options valueForKey:@"profilerType"] intValue];
    if([options valueForKey:@"authProcType"] != nil)
        rfidScenario.authProcType = [[options valueForKey:@"authProcType"] integerValue];
    if([options valueForKey:@"baseSMProcedure"] != nil)
        rfidScenario.baseSMProcedure = [[options valueForKey:@"baseSMProcedure"] integerValue];
    if([options valueForKey:@"pacePasswordType"] != nil)
        rfidScenario.pacePasswordType = [[options valueForKey:@"pacePasswordType"] integerValue];
    if([options valueForKey:@"terminalType"] != nil)
        rfidScenario.terminalType = [[options valueForKey:@"terminalType"] integerValue];
    if([options valueForKey:@"universalAccessRights"] != nil)
        rfidScenario.universalAccessRights = [[options valueForKey:@"universalAccessRights"] boolValue];
    if([options valueForKey:@"authorizedRestrictedIdentification"] != nil)
        rfidScenario.authorizedRestrictedIdentification = [[options valueForKey:@"authorizedRestrictedIdentification"] boolValue];
    if([options valueForKey:@"auxVerificationCommunityID"] != nil)
        rfidScenario.auxVerificationCommunityID = [[options valueForKey:@"auxVerificationCommunityID"] boolValue];
    if([options valueForKey:@"auxVerificationDateOfBirth"] != nil)
        rfidScenario.auxVerificationDateOfBirth = [[options valueForKey:@"auxVerificationDateOfBirth"] boolValue];
    if([options valueForKey:@"skipAA"] != nil)
        rfidScenario.skipAA = [[options valueForKey:@"skipAA"] boolValue];
    if([options valueForKey:@"strictProcessing"] != nil)
        rfidScenario.strictProcessing = [[options valueForKey:@"strictProcessing"] boolValue];
    if([options valueForKey:@"pkdDSCertPriority"] != nil)
        rfidScenario.pkdDSCertPriority = [[options valueForKey:@"pkdDSCertPriority"] boolValue];
    if([options valueForKey:@"pkdUseExternalCSCA"] != nil)
        rfidScenario.pkdUseExternalCSCA = [[options valueForKey:@"pkdUseExternalCSCA"] boolValue];
    if([options valueForKey:@"trustedPKD"] != nil)
        rfidScenario.trustedPKD = [[options valueForKey:@"trustedPKD"] boolValue];
    if([options valueForKey:@"passiveAuth"] != nil)
        rfidScenario.passiveAuth = [[options valueForKey:@"passiveAuth"] boolValue];
    if([options valueForKey:@"paceStaticBinding"] != nil)
        rfidScenario.paceStaticBinding = [[options valueForKey:@"paceStaticBinding"] boolValue];
    if([options valueForKey:@"password"] != nil)
        rfidScenario.password = [options valueForKey:@"password"];
    if([options valueForKey:@"useSFI"] != nil)
        rfidScenario.useSFI = [[options valueForKey:@"useSFI"] boolValue];
    if([options valueForKey:@"pkdPA"] != nil)
        rfidScenario.pkdPA = [options valueForKey:@"pkdPA"];
    if([options valueForKey:@"pkdEAC"] != nil)
        rfidScenario.pkdEAC = [options valueForKey:@"pkdEAC"];
    if([options valueForKey:@"readEPassport"] != nil)
        rfidScenario.readEPassport = [[options valueForKey:@"readEPassport"] boolValue];
    if([options valueForKey:@"readEID"] != nil)
        rfidScenario.readEID = [[options valueForKey:@"readEID"] boolValue];
    if([options valueForKey:@"readEDL"] != nil)
        rfidScenario.readEDL = [[options valueForKey:@"readEDL"] boolValue];
    if([options valueForKey:@"ePassportDataGroups"] != nil)
        rfidScenario.ePassportDataGroups = [self RGLePassportDataGroupFromJson:[options valueForKey:@"ePassportDataGroups"]];
    if([options valueForKey:@"eIDDataGroups"] != nil)
        rfidScenario.eIDDataGroups = [self RGLeIDDataGroupFromJson:[options valueForKey:@"eIDDataGroups"]];
    if([options valueForKey:@"eDLDataGroups"] != nil)
        rfidScenario.eDLDataGroups = [self RGLeDLDataGroupFromJson:[options valueForKey:@"eDLDataGroups"]];
    if([options valueForKey:@"mrz"] != nil)
        rfidScenario.mrz = [options valueForKey:@"mrz"];
    if([options valueForKey:@"eSignPINDefault"] != nil)
        rfidScenario.eSignPINDefault = [options valueForKey:@"eSignPINDefault"];
    if([options valueForKey:@"eSignPINNewValue"] != nil)
        rfidScenario.eSignPINNewValue = [options valueForKey:@"eSignPINNewValue"];
    if([options valueForKey:@"authorizedSTSignature"] != nil)
        rfidScenario.authorizedSTSignature = [[options valueForKey:@"authorizedSTSignature"] boolValue];
    if([options valueForKey:@"authorizedSTQSignature"] != nil)
        rfidScenario.authorizedSTQSignature = [[options valueForKey:@"authorizedSTQSignature"] boolValue];
    if([options valueForKey:@"authorizedWriteDG17"] != nil)
        rfidScenario.authorizedWriteDG17 = [[options valueForKey:@"authorizedWriteDG17"] boolValue];
    if([options valueForKey:@"authorizedWriteDG18"] != nil)
        rfidScenario.authorizedWriteDG18 = [[options valueForKey:@"authorizedWriteDG18"] boolValue];
    if([options valueForKey:@"authorizedWriteDG19"] != nil)
        rfidScenario.authorizedWriteDG19 = [[options valueForKey:@"authorizedWriteDG19"] boolValue];
    if([options valueForKey:@"authorizedWriteDG20"] != nil)
        rfidScenario.authorizedWriteDG20 = [[options valueForKey:@"authorizedWriteDG20"] boolValue];
    if([options valueForKey:@"authorizedWriteDG21"] != nil)
        rfidScenario.authorizedWriteDG21 = [[options valueForKey:@"authorizedWriteDG21"] boolValue];
    if([options valueForKey:@"authorizedVerifyAge"] != nil)
        rfidScenario.authorizedVerifyAge = [[options valueForKey:@"authorizedVerifyAge"] boolValue];
    if([options valueForKey:@"authorizedVerifyCommunityID"] != nil)
        rfidScenario.authorizedVerifyCommunityID = [[options valueForKey:@"authorizedVerifyCommunityID"] boolValue];
    if([options valueForKey:@"authorizedPrivilegedTerminal"] != nil)
        rfidScenario.authorizedPrivilegedTerminal = [[options valueForKey:@"authorizedPrivilegedTerminal"] boolValue];
    if([options valueForKey:@"authorizedCANAllowed"] != nil)
        rfidScenario.authorizedCANAllowed = [[options valueForKey:@"authorizedCANAllowed"] boolValue];
    if([options valueForKey:@"authorizedPINManagment"] != nil)
        rfidScenario.authorizedPINManagment = [[options valueForKey:@"authorizedPINManagment"] boolValue];
    if([options valueForKey:@"authorizedInstallCert"] != nil)
        rfidScenario.authorizedInstallCert = [[options valueForKey:@"authorizedInstallCert"] boolValue];
    if([options valueForKey:@"authorizedInstallQCert"] != nil)
        rfidScenario.authorizedInstallQCert = [[options valueForKey:@"authorizedInstallQCert"] boolValue];
    if([options valueForKey:@"reprocessParams"] != nil)
        rfidScenario.reprocParams = [self RGLReprocParamsFromJSON: [options valueForKey:@"reprocessParams"]];
    if([options valueForKey:@"defaultReadingBufferSize"] != nil)
        rfidScenario.defaultReadingBufferSize = [[options valueForKey:@"defaultReadingBufferSize"] intValue];
}

+(RGLRFIDParams*)RGLRFIDParamsFromJSON:(NSDictionary*)input {
    RGLRFIDParams* result = [RGLRFIDParams new];

    if([input valueForKey:@"paIgnoreNotificationCodes"] != nil)
        result.paIgnoreNotificationCodes = [input valueForKey:@"paIgnoreNotificationCodes"];

    return result;
}

@end
