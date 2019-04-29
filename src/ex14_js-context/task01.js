var Calculator = {

    result: 0,

    add: function(num) {
        if (num !== undefined) {
            this.result += num;
        }
        return this;
    },

    subtract: function(num) {
        if (num !== undefined) {
            this.result -= num;
        }
        return this;
    },

    divide: function(num) {
        if (num !== undefined) {
            this.result /= num;
        }
        return this;
    },

    multiply: function(num) {
        if (num !== undefined) {
            this.result *= num;
        }
        return this;
    },

    reset: function() {
        this.result = 0;
        return this;
    },

    getResult: function() {
        return this.result;
    },

    setState: function(num) {
        if (num) {
            this.result = num;
        }
        return this;
    },

    fetchData: function(callback) {
        callback.call(this, 500);
    }
}

module.exports = Calculator

const result = Calculator.add(100).multiply(2).divide(20)
.reset()
.subtract(1)
.getResult()
console.log(result);
Calculator.setState(-1878);
console.log(Calculator.getResult());