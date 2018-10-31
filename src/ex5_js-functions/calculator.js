function Calculator1() {
    var result = 0;

    return {
        add: function (num) {
            result += num;
            if (arguments.length === 1) {
                return function add1(num1) {
                    result += num1;
                    return add1;
                }
            }
            add1.valueOf = function() {
                return result;
            }
            return add1;
        },
        substract: function (num) {
            result -= num;
            if (arguments.length === 1) {
                return function sub1(num1) {
                    result -=num1;
                    return sub1;
                }
            }
            sub1.valueOf = function() {
                return result;
            }
            return sub1;
        },
        divide: function(num) {
            result /= num;
            if (arguments.length === 1) {
                return function div1(num1) {
                    result /= num1;
                    return div1;
                }
            }
            div1.valueOf = function() {
                return result;
            }
            return div1;
        },
        multiply: function(num) {
            result *= num;
            if (arguments.length === 1) {
                return function mul1(num1) {
                    result *= num1;
                    return mul1;
                }
            }
            mul1.valueOf = function() {
                return result;
            }
            return mul1;
        },
        reset: function() {
            return result = 0;
        },
        getResult: function() {
            return result;
        }
    }
};

var Calculator = Calculator1();

Calculator.add()();
console.log(Calculator.getResult());
