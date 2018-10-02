// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  if (request.message === "user clicked!") {
    let body = document.getElementsByTagName('body')[0]
    body.style = "background-color:#23211e;color:#ba7e25;"
    let divs = document.getElementsByTagName('div')
    divs.style = "background-color:#444337;color:#ba7e25;"


  }
}

gollumExt = () => {
  var script = document.createElement('script');
  script.src = 'https://cdn.rawgit.com/marie-phu-qui/Lord-of-the-News/loading_ring/chrome_ext/dist/ext.js';
  document.body.appendChild(script);

}
gollumExt()

