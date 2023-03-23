
document.getElementById("iconSkype").addEventListener("click", (e) => {
    let port = chrome.runtime.connectNative('com.techie.favapp.skype');
    console.log(port)
    port.onMessage.addListener(function (msg) {
        console.log("Received" + msg);
    });
    port.onDisconnect.addListener(function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError)
        }
        console.log("Skype Disconnected");
    });

});
document.getElementById("iconSpotify").addEventListener("click", (e) => {
    let port = chrome.runtime.connectNative('com.techie.favapp.spotify');
    console.log(port)
    port.onDisconnect.addListener(function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError)
        }
        console.log("Spotify Disconnected");
    });
});
document.getElementById("iconCode").addEventListener("click", (e) => {
    let port = chrome.runtime.connectNative('com.techie.favapp.vscode');
    console.log(port)
    port.onDisconnect.addListener(function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError)
        }
        console.log("VS Code Disconnected");
    });
});
