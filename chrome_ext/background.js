console.log('background he he he')

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
  chrome.tabs.sendMessage(tab.id, 'hello')
}