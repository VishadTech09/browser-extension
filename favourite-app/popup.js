
document.getElementById("iconSkype").addEventListener("click", (e) => {

    //dynamically generate bat file and 

    console.log(chrome.tabs)


    let port = chrome.runtime.connectNative('com.techie.favapp.skype');
    console.log(port)
    port.onMessage.addListener(function (msg) {
        console.log("Received" + msg);
    });

    extensionDisconnected(port);

});
document.getElementById("iconSpotify").addEventListener("click", (e) => {
    let port = chrome.runtime.connectNative('com.techie.favapp.spotify');
    console.log(port)
    extensionDisconnected(port);
});
document.getElementById("iconCode").addEventListener("click", (e) => {

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs.length) {
            const currentTab = tabs[0];
            console.log(`Active Tab :`, currentTab);
            setInterval(() => {
                chrome.tabs.sendMessage(
                    currentTab.id,
                    {
                        url: chrome.runtime.getURL("images/Beautiful-Pic-Of-Blue-Star.jpg"),
                        imageDivId: `${guidGenerator()}`,
                        tabId: currentTab.id
                    },
                    function (response) {
                        console.log("message response : ", response);
                        const timerElement = document.getElementById("iddatetime");
                        if (timerElement && response && response.timer) {
                            timerElement.innerText = response.timer;
                        }

                        //window.close();
                    }
                );
            }, 1000);

            function guidGenerator() {
                const S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }
        }
    })
    //  let port = chrome.runtime.connectNative('com.techie.favapp.vscode');
    // console.log(port)
    // extensionDisconnected(port);
});


function extensionDisconnected(port) {
    port.onDisconnect.addListener(function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        }
        console.log("Skype Disconnected");
    });
}

