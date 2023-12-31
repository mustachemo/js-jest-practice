import analyzeArray from './analyzeArray';

describe('analyzeArray', () => {
	it('should return an object with the average, min, max, and length of an array of numbers', () => {
		expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
			average: 4,
			min: 1,
			max: 8,
			length: 6,
		});
	});

	it('should throw an error if the array is empty', () => {
		expect(() => analyzeArray([])).toThrow();
	});

	it('should throw an error if the array is not an array', () => {
		expect(() => analyzeArray('not an array')).toThrow();
	});
});
