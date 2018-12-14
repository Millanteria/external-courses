function Shape(name) {
    this.type = name;
}

Shape.prototype.draw = function() {
        console.log(this.type + ' is drawn');
    }
Shape.prototype.getPerimeter = function() {
        console.log('There is no figure');
    }
Shape.prototype.getType = function() {
        console.log('Type is ' + this.type);
    }

function Triangle(a,b,c) {
    Shape.call(this, 'Triangle');
    this.a = a;
    this.b = b;
    this.c = c;
}

function Square(a,b,c,d) {
    Shape.call(this, 'Square');
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
    console.log('Perimeter is ' + (this.a + this.b + this.c));
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.getPerimeter = function() {
    console.log('Perimeter is ' + (this.a + this.b + this.c + this.d));
}

function Rectangle(a, b) {
    Square.call(this, a, b, a, b);
}

Rectangle.prototype = Object.create(Square.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getVolume = function() {
    console.log('Volume is ' + (this.a * this.b));
}

var newRectangle = new Rectangle(5,10);
newRectangle.getVolume();
newRectangle.getPerimeter();
newRectangle.draw();

var newTriangle = new Triangle(5,5,5);
newTriangle.getPerimeter();
newTriangle.getType();
newTriangle.draw();