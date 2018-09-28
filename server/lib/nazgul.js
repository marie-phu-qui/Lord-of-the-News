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


// const matchDict = (compromiseNazgul) => {
//   nlp(compromiseNazgul).list.map(terms => {
//     (terms.terms.map(text => {
//       // console.log(text._text)
//     }))
//   })
// }

const processNazPlaces = (text) => {
  let originalText = nlp(text)
  let places = originalText.replace('#Place', 'Minas Morgul').out('text')
  return places
}

const processNazAdj = (text) => {
  let originalText = nlp(text)
  let adj = originalText.replace('#Adjective', 'dark').out('text')
  return adj
}

const processNazPeople = (text) => {
  let originalText = nlp(text)
  let people = originalText.replace('#Person', 'Sauron' || 'Dark Lord').out('text')

  return people
}

const processNazNouns = (text) => {
  let originalText = nlp(text)
  let upperCase = originalText.replace('[#Noun /Minas Morgul]', 'Ash nazg').out('text')
  return upperCase

  //   originalText.nouns().list.map(noun => {
  //     let nazgulNoun = 'Ash nazg'
  //     return noun = nazgulNoun
  //   })
}



const processNazVerbs = (text) => {
  let originalText = nlp(text)
  originalText.verbs().list.map(verb => {
    let nazgulVerb = 'IIIIIIIIIIIIIIIIIK'
    verb = nazgulVerb
    // console.log(originalText.verbs().list)
  })
  return originalText.out('text')
}

const compromiseNazgul = (text) => {
  let originalText = nlp(text)

  // return (originalText.out('text'))
  let nazPlaces = processNazPlaces(text)
  let nazNouns = processNazNouns(nazPlaces)
  let nazAdj = processNazAdj(nazNouns)
  let nazPep = processNazPeople(nazAdj)

  // let nazVerbs = processNazVerbs(text)
  return nazPep
}


const nazgulify = (text) => {
  // console.log(matchDict(compromiseNazgul(text)))
  return (compromiseNazgul(text))
}

module.exports = {
  nazgulify
} 