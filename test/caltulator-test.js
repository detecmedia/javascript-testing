
var buster = require('buster');
var assert = buster.assert;

buster.testCase("calculator", {
    "add": function () {
        var result = Calculator.add(5, 5);
        assert.equals(10, result)
    },

    "multi": function () {
        var result = Calculator.multi(5,5);
        assert.equals(25,result)
    }
});