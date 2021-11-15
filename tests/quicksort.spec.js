"use strict";
const quickSortDESC = require("../algorithms/quicksort");

let vector = []; // numbers[] unsorted
let desc = []; // numbers[] sorted

describe("quickSortDESC()", () => {
	beforeEach(() => {
		vector = [5, 2, 0, 1, 9, 8, 3, 7, 4, 6]; // unsorted
		desc = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // sorted
	});

	afterEach(() => {
		vector = [5, 2, 0, 1, 9, 8, 3, 7, 4, 6]; // unsorted
		desc = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // sorted
	});

	it("vector is of type sort number[]", () => {
		expect(vector).toEqual(expect.arrayContaining([expect.any(Number)]));
	});

	it("quickSortDESC sorted the vector: BASE CASE", () => {
		expect(quickSortDESC([3])).toEqual([3]);
	});

	it("quickSortDESC sorted the vector: COMPLEX CASES recursively", () => {
		expect(quickSortDESC(vector)).toEqual(desc);
	});

	it("quickSortDESC only orders descendently", () => {});
});
