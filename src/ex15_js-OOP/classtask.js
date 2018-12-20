function Shape(name) {
    this.type = name;
}

Shape.prototype.draw = function() {
        return (this.type + ' is drawn')
    }
Shape.prototype.getPerimeter = function() {
        return 'There is no figure';
    }
Shape.prototype.getType = function() {
        return ('Type is ' + this.type);
    }

function Triangle(a,b,c) {
    Shape.call(this, 'Triangle');
    this.a = a;
    this.b = b;
    this.c = c;
}

function Rectangle(a,b) {
    Shape.call(this, 'Rectangle');
    this.a = a;
    this.b = b;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
    return (this.a + this.b + this.c);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getPerimeter = function() {
    return (this.a + this.b + this.a + this.b);
}

function Square(a) {
    Rectangle.call(this, a, a);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.getVolume = function() {
    return (this.a * this.a);
}

var newSquare = new Square(5);
console.log('Volume is ' + newSquare.getVolume());
console.log('Perimeter is ' + newSquare.getPerimeter());

var newTriangle = new Triangle(5,5,5);
console.log(newTriangle.draw());
console.log('Perimeter is ' + newTriangle.getPerimeter());
console.log(newTriangle.getType());