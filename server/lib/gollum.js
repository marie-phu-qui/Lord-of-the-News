var nlp = require('compromise');

var dictionary = {
	"ring": "precious",
	"me": "we",
	"i": "we",
	"kids": "kidses",
	"he": "it",
	"she": "it",
	"they": "its",
	"Jacinda": "Gandalf",
	"Donald": "Smeagol",
	"Trump": "we hate it...we hate this",
	"trump": "we hate it...we hate this",
	"Trump's": "Smeagol's",
	"Firefighters": "Splash us with water, Smeagol",
	"food": "alive fish",
	",": "Gollum, Gollum, GOLLUM",
	"...": "Hmmmm... my precious...",
	"accuser": "thieff...ring thieff...oh my precious",
	"Tourism": "Pie eating",
	"tourism": "stupid",
	"NZ": "Middle Earth",
	"kiwis": "creatures",
	"Kiwis": "hobbitses",
	"New": "Middle",
	"Zealand": "Earth",
	"Police": "Orc",
	"police": "orc horde",
	"Kaikōura": "Rivendell",
	"Kaikoura": "Rivendell",
	"Government": "Fellowship of the Ring",
	"Government's": "Fellowship of the Ring's",
	"Govt": "The Fellowship of the Ring",
	"robbery": "thief. They're thieves! They're thieves! They're filthy little thieves! Where is it? Where is it? They stole it from us",
	"save": "save, Gollum! Gollum saved us",
	"Teens": "Hobbitses",
	"teens": "hobbitses",
	"local": "nasty hobbitses",
	"Canterbury": "Gondor",
	"Auckland": "the Shire",
	"Ngauruhoe": "Mount Doom",
	"Tongariro": "Mount Doom",
	"cycling": "Eagle riding",
	"Rotorua": "Helm's Deep",
	"Rugby": "Catering Event for Hobbits",
	"All Blacks": "Dragons"

};

function translateWord(word) {
	var gollumWord = dictionary[word];
	if (gollumWord === undefined) return word;
	else return applyCase(word, gollumWord);
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

const processGollumAdj = (text) => {
	let originalText = nlp(text)
	let adjPossibilities = ['nasty', 'filthy', 'tricksy', 'false', 'sneaky', 'wicked']
	let chosenAdj = adjPossibilities[Math.floor(Math.random() * adjPossibilities.length)]
	let adj = originalText.replace('#Adjective', chosenAdj).out('text')
	return adj
}

const compromisedGollum = (text) => {
	let gollumDic = translate(text)
	let gollumAdj = processGollumAdj(gollumDic)
	return gollumAdj
}

const gollumify = (text) => {
	return (compromisedGollum(text))
}

module.exports = {
	gollumify
} 