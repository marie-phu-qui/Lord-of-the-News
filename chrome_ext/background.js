console.log('background he he he')

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
  chrome.tabs.sendMessage(tab.id, { message: 'hello' }, function () {
    console.log('clicked!')
  })
}


// function buttonClicked(tab) {
//   chrome.tabs.executeScript(tab.id, {file: 'content.js'}, function () {
//     console.log('clicked!')
//   })
// }
