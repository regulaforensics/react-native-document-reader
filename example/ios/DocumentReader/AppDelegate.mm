#import "AppDelegate.h"

#import <React/RCTDevLoadingViewSetEnabled.h>
#import <React/RCTDevSettings.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // This demo runs from the embedded bundle, including in Debug builds.
  RCTDevLoadingViewSetEnabled(NO);
  RCTDevSettingsSetEnabled(NO);

  // UIWindow is owned by SceneDelegate under the scene-based lifecycle.
  self.automaticallyLoadReactNativeWindow = NO;
  self.moduleName = @"DocumentReader";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
}

@end
