chrome.runtime.onInstalled.addListener(() => {

    chrome.contextMenus.create({
        id: "searchTwitter",
        title: "Search Twitter for \'%s\' ",
        type: "normal",
        contexts: ['selection']
    })

    chrome.contextMenus.create({
        id: "closeTabs",
        title: "Close other tabs",
        type: "normal",
        contexts: ["all"]
    });q
});

chrome.contextMenus.onClicked.addListener((info) => {

    const menuItemId = info.menuItemId;

    if (menuItemId === 'closeTabs') {
        //search for open active tab by querying

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs && tabs.length) {
                const currentTab = tabs[0];
                chrome.tabs.query({}, (allTabs) => {
                    allTabs.map((tTab) => {
                        if ((tTab.windowId == currentTab.windowId) &&
                            (tTab.id != currentTab.id)) {
                            chrome.tabs.remove(tTab.id);
                        }
                    })
                });
            }
        })
    } else if (menuItemId === 'searchTwitter') {
        chrome.tabs.create({
            url: "https:twitter.com/search?q=" + encodeURIComponent(info.selectionText)
        });
    }

});

chrome.tabs.onActivated.addListener(async () => {
    let queryOptions = { active: true, lastFocusedWindow: true };

    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab) {
        console.log(`${tab.url} - ${tab.title} `);
    }

})