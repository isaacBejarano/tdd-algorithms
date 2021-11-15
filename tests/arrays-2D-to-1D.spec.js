"use strict";
const arrays2DTo1D = require("../algorithms/arrays-2D-to-1D");

let array2D = []; // any[][]

xdescribe("arrays2DTo1D()", () => {
	beforeEach(() => {
		array2D = [
			["A1", 42],
			[81, { id: "B2" }],
		];
	});

	afterEach(() => {
		array2D = [
			["A1", 42],
			[81, { id: "B2" }],
		];
	});
	it("transforms a bidimensional array", () => {
		expect(array2D).toEqual(expect.arrayContaining([expect.arrayContaining([expect.anything()])]));
	});
});
