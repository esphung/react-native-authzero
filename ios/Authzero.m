#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Authzero, NSObject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(logout:
              withResolver:(RCTPromiseResolveBlock)resolve
              withRejecter:(RCTPromiseRejecterBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
