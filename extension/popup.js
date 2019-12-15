window.onload = function () {
    setButtonStates();
}

floatTabButton.onclick = function () {
    window.close();
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        backgroundPage.floatTab();
    });
};

unfloatTabButton.onclick = function () {
    window.close();
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        backgroundPage.unfloatTab();
    });
};

setButtonStates = function () {
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        backgroundPage.tryGetFloatingTab(function (floatingTab) {
            let floatingTabAlreadyExists = floatingTab != undefined;
            floatTabButton.disabled = floatingTabAlreadyExists;
            unfloatTabButton.disabled = !floatingTabAlreadyExists;
        });
    });
}