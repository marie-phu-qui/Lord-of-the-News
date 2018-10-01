
// let gollumify = require('./../server/lib/gollum')
// import gollumify from './../server/lib/gollum'

// console.log(gollumify(text));
const text = 'Police after teens'

gollumExt = () => {
  console.log(text);
  var script = document.createElement('script');
  script.src = 'https://cdn.rawgit.com/marie-phu-qui/Lord-of-the-News/loading_ring/chrome_ext/dist/ext.js';
  console.log(script.src)
  document.body.appendChild(script);
  console.log(document.body)
  (script += gollumify(text))
  console.log(text)
}
gollumExt()

addGollum = () => {
  gollumExt()
}

executeGollum = () => {
  console.log(gollumify(text))
  gollumify(text)
}

executeGollum()
// let paragraphs = document.getElementsByTagName('div')
// for (elt of paragraphs) {
//   elt.style['background-color'] = 'pink';
// }

