export default function analyzeArray(array) {
	if (array.length === 0) throw new Error('Array is empty');
	if (!Array.isArray(array)) throw new Error('Input is not an array');

	const sum = array.reduce((accumSum, currentVal) => accumSum + currentVal, 0);
	const average = sum / array.length;

	const min = Math.min(...array);
	const max = Math.max(...array);
	const length = array.length;

	return { average, min, max, length };
}
