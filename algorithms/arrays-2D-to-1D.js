function arrays2DTo1D(array2D) {
	let array1D = [];

	for (let i = 0; i < array2D.length; i++) {
		array1D.push(...array2D[i]);
	}

	return array1D;
}

module.exports = arrays2DTo1D;
