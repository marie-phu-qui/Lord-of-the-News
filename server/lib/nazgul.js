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

//   // switch (nlp(word)) {
//   //   case '#Noun':
//   //     return 'Ash nazg'
//   //     break;
//   //   case '#Person':
//   //     return 'Sauron'
//   //     break;
//   //   case '#Location':
//   //     return 'Minas Morgul'
//   //     break;
//   //   default:
//   //     return "IIIIIIIIIIIIIIIIIIIIIIIK"
//   // }
const matchDict = (compromiseNazgul) => {
  nlp(compromiseNazgul).list.map(terms => {
    console.log(terms.terms.map(text => {
      console.log(text._text)
    }))
  })
}

const compromiseNazgul = (text) => {
  let originalText = nlp(text)
  originalText.contractions().expand()
  originalText.verbs().toNegative()
  return originalText.out('text')
}


const nazgulify = (text) => {
  console.log(text)
  return matchDict(compromiseNazgul(text))
}

module.exports = {
  nazgulify
} 