import caesarCipher from './caesarCipher';

test('caesarCipher', () => {
	expect(caesarCipher('A', 1)).toBe('B');
	expect(caesarCipher('A', 26)).toBe('A');
	expect(caesarCipher('A', 27)).toBe('B');
	expect(caesarCipher('A', -1)).toBe('Z');
	expect(caesarCipher('A', -26)).toBe('A');
	expect(caesarCipher('A', -27)).toBe('Z');

	expect(caesarCipher('Z', 1)).toBe('A');
	expect(caesarCipher('Z', 26)).toBe('Z');
	expect(caesarCipher('Z', 27)).toBe('A');
	expect(caesarCipher('Z', -1)).toBe('Y');
	expect(caesarCipher('Z', -26)).toBe('Z');
	expect(caesarCipher('Z', -27)).toBe('Y');

	expect(caesarCipher('a', 1)).toBe('b');
	expect(caesarCipher('a', 26)).toBe('a');
	expect(caesarCipher('a', 27)).toBe('b');
	expect(caesarCipher('a', -1)).toBe('z');
	expect(caesarCipher('a', -26)).toBe('a');
	expect(caesarCipher('a', -27)).toBe('z');

	expect(caesarCipher('z', 1)).toBe('a');
	expect(caesarCipher('z', 26)).toBe('z');
	expect(caesarCipher('z', 27)).toBe('a');
	expect(caesarCipher('z', -1)).toBe('y');
	expect(caesarCipher('z', -26)).toBe('z');
	expect(caesarCipher('z', -27)).toBe('y');

	expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
	expect(caesarCipher('Hello, World!', 26)).toBe('Hello, World!');
	expect(caesarCipher('Hello, World!', 27)).toBe('Ifmmp, Xpsme!');
	expect(caesarCipher('Hello, World!', -1)).toBe('Gdkkn, Vnqkc!');
	expect(caesarCipher('Hello, World!', -26)).toBe('Hello, World!');
	expect(caesarCipher('Hello, World!', -27)).toBe('Gdkkn, Vnqkc!');

	expect(() => caesarCipher(1, 1)).toThrow();
	expect(() => caesarCipher('A', 'A')).toThrow();
	expect(() => caesarCipher(1, 'A')).toThrow();
});
