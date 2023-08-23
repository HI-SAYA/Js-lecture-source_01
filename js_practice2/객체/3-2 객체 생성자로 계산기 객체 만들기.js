function Calculator() {
    this.a = 10;
    this.b = 20;
    this.sum = function() {
        return this.a + this.b;
    };
    this.multi = function() {
        return this.a * this.b;
    };
}

const calculator = new Calculator();

console.log(calculator.sum());
console.log(calculator.multi());