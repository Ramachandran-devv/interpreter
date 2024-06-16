// A way to include language elements in a program
var NumberExpression = /** @class */ (function () {
    function NumberExpression(number) {
        this.number = number;
    }
    NumberExpression.prototype.interpret = function () {
        return this.number;
    };
    return NumberExpression;
}());
var PlusExpression = /** @class */ (function () {
    function PlusExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    PlusExpression.prototype.interpret = function () {
        return this.left.interpret() + this.right.interpret();
    };
    return PlusExpression;
}());
var MinusExpression = /** @class */ (function () {
    function MinusExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    MinusExpression.prototype.interpret = function () {
        return this.left.interpret() - this.right.interpret();
    };
    return MinusExpression;
}());
// Client code
var five = new NumberExpression(5);
var three = new NumberExpression(3);
var two = new NumberExpression(2);
var plus = new PlusExpression(five, three);
var minus = new MinusExpression(plus, two);
console.log("Result: ".concat(minus.interpret()));
//# sourceMappingURL=interpreter.js.map