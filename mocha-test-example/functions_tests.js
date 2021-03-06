//functions_tests.js
"use strict";
import {checkPrime, isOdd};
const assert = require("assert");
const my_functions = require('./my_functions.js');
describe("checkPrime", function () {
    it("37 is prime", function () {
        assert.strictEqual(my_functions.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(my_functions.checkPrime(77), false);
    });
    it("36 is prime", function () {
        assert.strictEqual(my_functions.checkPrime(36), false);
    });
});

