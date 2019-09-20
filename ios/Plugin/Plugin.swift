import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(Concatenate)
public class Concatenate: CAPPlugin {
    
    @objc func concat(_ call: CAPPluginCall) {
        let left = call.getString("left") ?? ""
        let right = call.getString("right") ?? ""
        
        var output = PluginResultData()
        output["result"] = "\(left)\(right)"
        call.success(output)
    }
}
