import caesarCipher from './caesarCipher';

describe('caesarCipher', () => {
	it('should rotate a single letter forward and backwords', () => {
		expect(caesarCipher('A', 1)).toBe('B');
		expect(caesarCipher('A', -1)).toBe('Z');
		expect(caesarCipher('Z', 26)).toBe('Z');
		expect(caesarCipher('Z', -26)).toBe('Z');
		expect(caesarCipher('a', 1)).toBe('b');
		expect(caesarCipher('a', -1)).toBe('z');
		expect(caesarCipher('z', 26)).toBe('z');
		expect(caesarCipher('z', -26)).toBe('z');
	});

	it('should rotate a word forward and backwords', () => {
		expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
		expect(caesarCipher('Hello', -1)).toBe('Gdkkn');
		expect(caesarCipher('Hello', 26)).toBe('Hello');
		expect(caesarCipher('Hello', -26)).toBe('Hello');
		expect(caesarCipher('hello', 1)).toBe('ifmmp');
		expect(caesarCipher('hello', -1)).toBe('gdkkn');
		expect(caesarCipher('hello', 26)).toBe('hello');
		expect(caesarCipher('hello', -26)).toBe('hello');
	});

	it('should rotate a sentence forward and backwords', () => {
		expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
		expect(caesarCipher('Hello, World!', 26)).toBe('Hello, World!');
		expect(caesarCipher('Hello, World!', 27)).toBe('Ifmmp, Xpsme!');
	});

	it('should throw errors', () => {
		expect(() => caesarCipher(1, 1)).toThrow();
		expect(() => caesarCipher('A', 'A')).toThrow();
		expect(() => caesarCipher(1, 'A')).toThrow();
	});
});
