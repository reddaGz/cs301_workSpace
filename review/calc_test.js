"use strict";
const assert = require("assert");
// name of the file should match
const calc = require("./calc.js");

describe("add", function () {
    it("5 plus 5 is 10", function () {
        assert.strictEqual(calc.add(5, 5), 10);
    });
    it("1 plus 0 is 1", function () {
        assert.strictEqual(calc.add(1,0), 1);
    });

    it("1 plus -1 is 0 ", function () {
        assert.strictEqual(calc.add(1, -1), 0);
    });
    it("1 plus -1 is 0 ", function () {
        assert.strictEqual(calc.add(1, -1), 0);
    });
});

describe("sub", function () {
    it("5 minus 5 is 0", function () {
        assert.strictEqual(calc.sub(5, 5), 0);
    });
    it("1 minus 0 is 1", function () {
        assert.strictEqual(calc.sub(1,0), 1);
    });

    it("1 minus -1 is 2 ", function () {
        assert.strictEqual(calc.sub(1, -1), 2);
    });
});

describe("div", function () {
    it("5 devided 5 is 1", function () {
        assert.strictEqual(calc.div(5, 5), 1);
    });
    it("1 divided 0 is infinty", function () {
        assert.strictEqual(calc.div(1,0), Infinity);
    });

    it("1 devided -1 is -1 ", function () {
        assert.strictEqual(calc.div(1, -1), -1);
    });
});

// write test description for sub and div




