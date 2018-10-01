console.log('background he he he')

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
  chrome.tabs.sendMessage(tab.id, { message: 'hello' }, function () {
    console.log('clicked!')
  })


}