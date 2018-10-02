// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  if (request.message === "user clicked!") {
    let body = document.getElementsByTagName('body')[0]
    body.style = "background-color:black;color:red;" 
    
    
    
    console.log('çlickclickclic')
  }
}

gollumExt = () => {
  console.log('execute gollum');
  var script = document.createElement('script');
  script.src = 'https://cdn.rawgit.com/marie-phu-qui/Lord-of-the-News/loading_ring/chrome_ext/dist/ext.js';
  console.log(script.src)
  document.body.appendChild(script);

}
gollumExt()

