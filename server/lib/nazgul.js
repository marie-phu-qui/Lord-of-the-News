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
    (terms.terms.map(text => {
      // console.log(text._text)
    }))
  })
}

const processNazPlaces = (text) => {
  let originalText = nlp(text)
  originalText.places().list.map(places => {
    let nazgulPlace = 'Minas Morgul'
    return places = nazgulPlace
  })
}

const processNazPeople = (text) => {
  let originalText = nlp(text)
  originalText.people().list.map(people => {
    let nazgulPerson = 'Sauron'
    return people = nazgulPerson
  })
}

const processNazNouns = (text) => {
  let originalText = nlp(text)
  originalText.nouns().list.map(noun => {
    let nazgulNoun = 'Ash nazg'
    return noun = nazgulNoun
  })
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
  // originalText.contractions().expand()
  // originalText.verbs().toNegative()

  console.log(originalText)
  // console.log(originalText.map(word => {
  //   let nazgulPhrase = ''
  //   console.log(dictionary[word])
  //   let nazgulDic = dictionary[word];
  //   const nazgullSream = 'IIIK'
  //   if (nazgulDic === undefined)
  //     return nazgulPhrase += nazgullSream;
  //   else return nazgulPhrase += nazgulDic
  // })
  // )


  // return (originalText.out('text'))
  let nazNouns = processNazNouns(text)
  let nazPep = processNazPeople(nazNouns)
  let nazPlaces = processNazPlaces(nazPep)
  let nazVerbs = processNazVerbs(text)
  // console.log((nazVerbs))
  return nlp(text).out('text')
}


const nazgulify = (text) => {
  // console.log()
  return matchDict(compromiseNazgul(text))
}

module.exports = {
  nazgulify
} 