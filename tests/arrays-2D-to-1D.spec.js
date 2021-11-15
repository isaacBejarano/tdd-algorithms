"use strict";
const arrays2DTo1D = require("../algorithms/arrays-2D-to-1D");

let array2D = []; // any[][]

describe("arrays2DTo1D()", () => {


	it("transforms a bidimensional array", () => {
		expect(array2D).toEqual(expect.arrayContaining([expect.arrayContaining([expect.anything()])]));
	});
});
