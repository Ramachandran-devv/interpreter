// A way to include language elements in a program

// The Iterator design pattern is a behavioral design pattern that provides a way to access the elements of
//  an aggregate object sequentially without exposing its underlying representation. 
// The pattern decouples the collection from the traversal of its contents.

interface Expression {
    interpret(): number;
}

class NumberExpression implements Expression {
    private number: number;

    constructor(number: number) {
        this.number = number;
    }

    public interpret(): number {
        return this.number;
    }
}

class PlusExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    public interpret(): number {
        return this.left.interpret() + this.right.interpret();
    }
}

class MinusExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    public interpret(): number {
        return this.left.interpret() - this.right.interpret();
    }
}

// Client code
const five = new NumberExpression(5);
const three = new NumberExpression(3);
const two = new NumberExpression(2);

const plus = new PlusExpression(five, three);
const minus = new MinusExpression(plus, two);

console.log(`Result: ${minus.interpret()}`);
