
// Called upon clicking the browser action:
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send message to active tab:
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "open_new_tab") {
            chrome.tabs.create({"url": request.url});
        }
    }
);

function translator(inputText) {
    var apiURL = "api-free.deepl.com/v2/translate";

    var xhr = new XMLHttpRequest()
        xhr.open("POST", "https://api-free.deepl.com/v2/translate", false)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.onload = function (e) { /* ... */ }
        xhr.onerror = function (e) { /* ... */ }
        xhr.send("auth_key=1a19d65f-06a7-8f35-559d-2fbb2a71ca21:fx&text=Hello, world!&target_lang=DE")
}