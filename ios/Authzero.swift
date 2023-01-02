@objc(Authzero)
class Authzero: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }

  @objc(logout:withResolver:)
  func logout(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    // do stuff here
      resolve("Hello")
    }
}
