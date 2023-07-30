// a function to reverse a string

export default function reverseString(inputString) {
	if (typeof inputString !== 'string') {
		throw new Error('Input must be a string');
	}
	return inputString.split('').reverse().join('');
}
