chrome.browserAction.onClicked.addListener(buttonClicked)


function buttonClicked(tab) {
  var msg = {
    message: "user clicked!"
  }
  chrome.tabs.executeScript({
    file: '/dist/ext.js'
  });
  chrome.tabs.sendMessage(tab.id, msg);
}

