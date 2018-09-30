export function noWords() {
  console.log('he he he')
  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = 'kittens';
  }
}


noWords();
