// let fs  = require('fs');
// let pos = require('pos');
let nlp = require('compromise');
// let ent = require('html-entities').AllHtmlEntities;
// const googleNews = require('.../routes/googleNews')

let dictionary = {
  "and": "agh",
  "one": "ash",
  "dark": "burz",
  "darkness": "burzum",
  "rule": "durb",
  "fire": "ghâsh",
  "find": "gimb",
  "filth": "glob",
  "wraith": "gûl",
  "folk": "hai",
  "in": "ishi",
  "bind": "krimp",
  "tower": "lug",
  "ring": "nazg",
  "troll": "olog",
  "pit": "ronk",
  "pool": "ronk",
  "and the": "sha",
  "old": "sharku",
  "old": "sharku",
  "slave": "snaga",
  "bring": "thrak",
  "to find": "gimbatul",
  "to rule": "durbatulûk",
  "to bring": "thrakatulûk",
  "to": "u",
  "all": "ûk",
  "them all": "tuluk",
  "them": "atul",
  "ness": "um",
  "orc": "uruk",
  "son of": "una",
};

// // if a place / if location : call it Minas Morgul 
// // if someone/ if name : Sauron 
// // if something/ if noun : Ash nazg
// // anything else that is not defined : scream "IIIIIIIIIIIIIIIIIIIIIIIK"
// const compromiseNazgul = (word) => {
//   let nazgullike = nlp(word)
//   // switch (nlp(word)) {
//   //   case '#Noun':
//   //     return 'Ash nazg'
//   //     break;
//   //   case '#Person':
//   //     return 'Sauron'
//   //     break;
//   //   default:
//   //     return "IIIIIIIIIIIIIIIIIIIIIIIK"
//   // }
//   return nazgullike.out('text')
// }

// function matchNazgulWord(word) {
//   let nazgulWord = dictionary[word];
//   nazgulWord !== undefined ? nazgulWord : compromiseNazgul(word)
// }


// // Take the case from wordA and apply it to wordB
// // function applyCase(wordA, wordB) {
// //   // Exception to avoid words like "I" being converted to "ME"
// //   if (wordA.length === 1 && wordB.length !== 1) return wordB;
// //   // Uppercase
// //   if (wordA === wordA.toUpperCase()) return wordB.toUpperCase();
// //   // Lowercase
// //   if (wordA === wordA.toLowerCase()) return wordB.toLowerCase();
// //   // Capitialized
// //   let firstChar = wordA.slice(0, 1);
// //   let otherChars = wordA.slice(1);
// //   if (firstChar === firstChar.toUpperCase() && otherChars === otherChars.toLowerCase()) {
// //     return wordB.slice(0, 1).toUpperCase() + wordB.slice(1).toLowerCase();
// //   }
// //   // Other cases
// //   return wordB;
// // };

// function isLetter(character) {
//   if (character.search(/[a-zA-Z'-]/) === -1) return false;
//   return true;
// }

// // module.exports.dictionary = dictionary;

// function nazgulify(text) {
//   console.log(text)
//   let blackSpeech = "";
//   // Loop through the text, one character at a time.
//   let word = "";
//   for (let i = 0; i < text.length; i += 1) {
//     let character = text[i];
//     // If the char is a letter, then we are in the middle of a word, so we
//     // should accumulate the letter into the word letiable
//     if (isLetter(character)) {
//       word += character;
//     }
//     // If the char is not a letter, then we hit the end of a word, so we
//     // should translate the current word and add it to the translation
//     else {
//       if (word != "") {
//         // If we've just finished a word, translate it
//         let nazgulWord = matchNazgulWord(word);
//         blackSpeech += nazgulWord;
//         word = "";
//       }
//       blackSpeech += character; // Add the non-letter character
//     }
//   }

//   // If we ended the loop before translating a word, then translate the final
//   // word and add it to the translation.
//   if (word !== "") blackSpeech += matchNazgulWord(word);

//   return blackSpeech;
// };

const nazgulify = (text) => {
  let doc = nlp(text)
  console.log(doc.sentences().toNegative())
  doc.sentences().toNegative()
  return doc.out('text')
}

module.exports = {
  nazgulify
} 