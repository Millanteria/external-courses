function Calculator1() {
    var result = 0;

    return {
        add: function (num) {
            if (arguments.length === 0) {
                return function a() {
                    return a;
                }
            }    
            result += num;
            if (arguments.length === 1) {
                return function add1(num1) {
                    result += num1;
                    return add1;
                }
            }
        },
        substract: function (num) {
            if (arguments.length === 0) {
                return function b() {
                    return b;
                }
            } 
            result -= num;
            if (arguments.length === 1) {
                return function sub1(num1) {
                    result -=num1;
                    return sub1;
                }
            }
        },
        divide: function(num) {
            if (arguments.length === 0) {
                return function c() {
                    return c;
                }
            } 
            result /= num;
            if (arguments.length === 1) {
                return function div1(num1) {
                    result /= num1;
                    return div1;
                }
            }
        },
        multiply: function(num) {
            if (arguments.length === 0) {
                return function d() {
                    return d;
                }
            } 
            result *= num;
            if (arguments.length === 1) {
                return function mul1(num1) {
                    result *= num1;
                    return mul1;
                }
            }
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