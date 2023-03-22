chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.windows.create({
        width: 200,
        height: 200,
        url: "alert.html",
        type: "popup"
    })

})