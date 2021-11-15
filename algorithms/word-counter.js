function wordCounter(text) {
	let counter = text.split(" "); // [Lorem, ipsum,...]

	return counter.length;
}

module.exports = wordCounter;
