"use strict";

let vector = []; // numbers[]
const quickSort = require("../algorithms/quicksort");

describe("new hundredDoors()", () => {
	beforeEach(() => {
		vector = [5, 2, 0, 1, 9, 8, 3, 7, 4, 6]; // unordered
	});

	afterEach(() => {
		vector = [5, 2, 0, 1, 9, 8, 3, 7, 4, 6]; // unordered
	});

	it("vector is of type sort number[]", () => {
		expect(vector).toEqual(expect.arrayContaining([expect.any(Number)]));
	});

	it("quicksort ordered the vector", () => {});

	it("quicksort can order descendently", () => {});
});
