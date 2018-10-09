let nlp = require('compromise');


let dictionary = {
  "and": "agh",
  "one": "ash",
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
  "god" : "Eru Ilúvatar", 
  "God" : "Eru Ilúvatar"
};

function translateWord(word) {
	var nazgulWord = dictionary[word];
	if (nazgulWord === undefined) return word;
	else return applyCase(word, nazgulWord);
}


// Take the case from wordA and apply it to wordB
function applyCase(wordA, wordB) {
	// Exception to avoid words like "I" being converted to "ME"
	if (wordA.length === 1 && wordB.length !== 1) return wordB;
	// Uppercase
	if (wordA === wordA.toUpperCase()) return wordB.toUpperCase();
	// Lowercase
	if (wordA === wordA.toLowerCase()) return wordB.toLowerCase();
	// Capitialized
	var firstChar = wordA.slice(0, 1);
	var otherChars = wordA.slice(1);
	if (firstChar === firstChar.toUpperCase() && otherChars === otherChars.toLowerCase()) {
		return wordB.slice(0, 1).toUpperCase() + wordB.slice(1).toLowerCase();
	}
	// Other cases
	return wordB;
};

function isLetter(character) {
	if (character.search(/[a-zA-Z'-]/) === -1) return false;
	return true;
}

function translate(text) {
	var translatedText = "";

	// Loop through the text, one character at a time.
	var word = "";
	for (var i = 0; i < text.length; i += 1) {
		var character = text[i];
		// If the char is a letter, then we are in the middle of a word, so we
		// should accumulate the letter into the word variable
		if (isLetter(character)) {
			word += character;
		}
		// If the char is not a letter, then we hit the end of a word, so we
		// should translate the current word and add it to the translation
		else {
			if (word != "") {
				// If we've just finished a word, translate it
				var gollumWord = translateWord(word);
				translatedText += gollumWord;
				word = "";
			}
			translatedText += character; // Add the non-letter character
		}
	}

	// If we ended the loop before translating a word, then translate the final
	// word and add it to the translation.
	if (word !== "") translatedText += translateWord(word);

	return translatedText;
};


// Compromise functions
const processNazPlaces = (text) => {
  let originalText = nlp(text)
  let places = originalText.replace('#Place', 'Minas Morgul').out('text')
  return places
}

const processNazAdj = (text) => {
	let originalText = nlp(text)
	let adjPossibilities = ['burz', 'dark', 'sinister']
	let chosenAdj = adjPossibilities[Math.floor(Math.random() * adjPossibilities.length)]
	let adj = originalText.replace('#Adjective', chosenAdj).out('text')
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
  let nazDic = translate(nazLast)
  return nazDic
}

const nazgulify = (text) => {
  return (compromiseNazgul(text))
}

module.exports = {
  nazgulify
} 