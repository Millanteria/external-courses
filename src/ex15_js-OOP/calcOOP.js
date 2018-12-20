function Calculator() {
    this.result = 0;
}

Calculator.prototype.add = function (num) {
            this.result += num;
            return this.result;
        }
Calculator.prototype.substract = function (num) {
            this.result -= num;
            return result;
        }
Calculator.prototype.divide = function(num) {
            this.result /= num;
            return this.result;
        }
Calculator.prototype.multiply = function(num) {
            this.result *= num;
            return this.result;
        }
Calculator.prototype.reset = function() {
            return this.result = 0;
        }
Calculator.prototype.getResult = function() {
            return this.result;
        }

function financeCalc() {
    Calculator.call(this);
}

financeCalc.prototype = Object.create(Calculator.prototype);
financeCalc.prototype.constructor = financeCalc;
financeCalc.prototype.getPercent = function(per) {
    this.result = this.result/100*per;
    return this.result;
}

function engineeringCalc() {
    Calculator.apply(this);
}

engineeringCalc.prototype = Object.create(Calculator.prototype);
engineeringCalc.prototype.constructor = engineeringCalc;
engineeringCalc.prototype.getPower = function(power) {
    this.result = Math.pow(this.result, power);
    return this.result;
}
engineeringCalc.prototype.getSin = function() {
    this.result = Math.sin(this.result);
    return this.result;
}
engineeringCalc.prototype.getCos = function() {
    this.result = Math.cos(this.result);
    return this.result;
}
engineeringCalc.prototype.getLog = function() {
    this.result = Math.log(this.result);
    return this.result;
}

var newCalc = new financeCalc();
newCalc.add(100);
newCalc.getPercent(15);
console.log('Результат = ' + newCalc.getResult());

var newSmartCalc = new engineeringCalc();
newSmartCalc.add(100);
newSmartCalc.multiply(3);
newSmartCalc.getPower(4);
newSmartCalc.getLog();
console.log('Результат = ' + newSmartCalc.getResult());