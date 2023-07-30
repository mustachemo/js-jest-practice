import reverseString from './reverseString';

describe('reverseString', () => {
	it('should reverse string', () => {
		expect(reverseString('hello')).toEqual('olleh');
	});
});

test('reverseString', () => {
	expect(reverseString('mohamed')).toEqual('demahom');
});

test('should throw error for invalid input', () => {
	expect(() => reverseString(123)).toThrow('Input must be a string');
});

test('should handle empty string', () => {
	expect(reverseString('')).toEqual('');
});
