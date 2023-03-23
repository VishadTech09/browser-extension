console.log("Launch app");
var port = chrome.runtime.connectNative('com.techie.native.extension');
if (port) {
    console.log("Successfully connected " + JSON.stringify(port));
    port.onMessage.addListener(function (msg) {
        console.log("Received" + msg);
    });

}
