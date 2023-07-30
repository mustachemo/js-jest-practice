// * A capitalize function that takes a string and returns it with the first character capitalized.

export default function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
