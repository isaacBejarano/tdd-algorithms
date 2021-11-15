"use strict";
const quickSort = require("../algorithms/quicksort");

let vector = []; // numbers[] unsorted
let desc = []; // numbers[] sorted

describe("new hundredDoors()", () => {
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

	it("quicksort sorted the vector", () => {
		expect(quickSort(vector)).toEqual(desc);
	});

	it("quicksort can order descendently", () => {});
});
