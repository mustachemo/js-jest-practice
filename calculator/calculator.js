// * IIFE - Immediately Invoked Function Expression

const calculator = (() => {
	const add = (a, b) => a + b;
	const sub = (a, b) => a - b;
	const mul = (a, b) => a * b;
	const div = (a, b) => {
		if (b === 0) throw new Error('Division by 0 not allowed');
		return a / b;
	};
	return { add, sub, mul, div };
})();

export default calculator;
