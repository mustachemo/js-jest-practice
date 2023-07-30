import calculator from './calculator';

describe('calculator', () => {
	it('should add two numbers', () => {
		expect(calculator.add(1, 2)).toBe(3);
	});

	it('should subtract two numbers', () => {
		expect(calculator.sub(2, 1)).toBe(1);
	});

	it('should multiply two numbers', () => {
		expect(calculator.mul(2, 3)).toBe(6);
	});

	it('should divide two numbers', () => {
		expect(calculator.div(6, 3)).toBe(2);
	});

	it('should handle division by zero', () => {
		expect(() => calculator.div(10, 0)).toThrow();
	});
});
