export default function caesarCipher(str, shift) {
	if (typeof str !== 'string')
		if (typeof shift !== 'number')
			throw new Error('Parameters must be a String then an Integer');
		else throw new Error('First parameter must be a String');
	else if (typeof shift !== 'number')
		throw new Error('Second parameter must be an Integer');

	// Make an array of alphabets
	const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	let result = '';
	const characters = str.split('');

	characters.forEach((character) => {
		// Check if the character is an english alphabet
		if (character.match(/[a-zA-Z]/)) {
			if (character === character.toUpperCase()) {
				uppercaseAlphabet.forEach((alphabet, index) => {
					if (character === alphabet) {
						const shiftAmount = index + shift;
						const shiftedIndex =
							((shiftAmount % uppercaseAlphabet.length) +
								uppercaseAlphabet.length) %
							uppercaseAlphabet.length;
						result += uppercaseAlphabet[shiftedIndex];
					}
				});
			} else {
				lowercaseAlphabet.forEach((alphabet, index) => {
					if (character === alphabet) {
						const shiftAmount = index + shift;
						const shiftedIndex =
							((shiftAmount % lowercaseAlphabet.length) +
								lowercaseAlphabet.length) %
							lowercaseAlphabet.length;
						result += lowercaseAlphabet[shiftedIndex];
					}
				});
			}
		} else {
			result += character;
		}
	});

	return result;
}
