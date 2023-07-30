import reverseString from './reverseString';

describe('reverseString', () => {
	it('should reverse string', () => {
		expect(reverseString('hello')).toEqual('olleh');
	});

	it('should reverse another string', () => {
		expect(reverseString('mohamed')).toEqual('demahom');
	});

	it('should throw error for invalid input', () => {
		expect(() => reverseString(123)).toThrow('Input must be a string');
	});

	it('should handle empty string', () => {
		expect(reverseString('')).toEqual('');
	});
});
