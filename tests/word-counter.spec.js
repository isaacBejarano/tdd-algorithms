"use strict";
const wordCounter = require("../algorithms/word-counter");

let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."; // 8 words

describe("wordCounter()", () => {
	it("counts words in a given-as-param text", () => {
		expect(wordCounter(text)).toBe(8);
	});
});
