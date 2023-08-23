const calculator = {
    a : 10,
    b : 20,

    sum : function() {
        return this.a + this.b
    },

    multi : function() {
        return this.a * this.b
    }
};

console.log(calculator.sum());
console.log(calculator.multi());