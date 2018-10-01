
// let gollumify = require('./../server/lib/gollum')
// import gollumify from './../server/lib/gollum'

// console.log(gollumify(text));

gollumExt = () => {
  console.log('dark dark gollum darker');
  var script = document.createElement('script');
  script.src = 'https://rawgit.com/marie-phu-qui/Lord-of-the-News/master/server/lib/gollum.js';
  document.body.appendChild(script);
  console.log(script.src)
}
gollumExt()

// let paragraphs = document.getElementsByTagName('div')
// for (elt of paragraphs) {
//   elt.style['background-color'] = 'pink';
// }