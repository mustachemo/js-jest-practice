import capitalize from './capitalize';

test('capitalize first letter of string', () => {
	expect(capitalize('mohamed')).toBe('Mohamed');
});
