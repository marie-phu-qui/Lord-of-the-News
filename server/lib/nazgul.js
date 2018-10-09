let nlp = require('compromise');


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


// Compromise functions
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

const processNazFirstName = (text) => {
  let originalText = nlp(text)
  let people = originalText.replace('#FirstName', 'Dark Lord').out('text')

  return people
}

const processNazLastName = (text) => {
  let originalText = nlp(text)
  let people = originalText.replace('#LastName', 'Sauron').out('text')

  return people
}

const processNazNouns = (text) => {
  let originalText = nlp(text)
  let nouns = originalText.replace('[#Noun /Minas Morgul]', 'Ash nazg').out('text')
  return nouns
}

const compromiseNazgul = (text) => {  
  let nazPlaces = processNazPlaces(text)
  let nazNouns = processNazNouns(nazPlaces)
  let nazAdj = processNazAdj(nazNouns)
  let nazFirst = processNazFirstName(nazAdj)
  let nazLast = processNazLastName(nazFirst)
  return nazLast
}

const nazgulify = (text) => {
  return (compromiseNazgul(text))
}

module.exports = {
  nazgulify
} 