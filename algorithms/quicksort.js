function quickSortDESC(vector) {
	let left = [];
	let right = [];
	let pivot = vector[0];
	let output = vector; // else... def CASE BASE

	// if... RECURSION
	if (vector.length >= 2) {
		// sort
		for (let i = 1; i < vector.length; i++) {
			if (vector[i] < pivot) left[left.length] = vector[i];
			// push left
			else right[right.length] = vector[i]; // push right
		}

		// and repeat
		output = [...quickSortDESC(left), pivot, ...quickSortDESC(right)]; // ASC
	}

	return output;
}

module.exports = quickSortDESC;
