import reverseString from './reverseString';

describe('reverseString', () => {
	it('should reverse string', () => {
		expect(reverseString('hello')).toEqual('olleh');
	});
});

test('reverseString', () => {
	expect(reverseString('mohamed')).toEqual('demahom');
});
