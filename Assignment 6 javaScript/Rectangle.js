class Rectangle {
  constructor(length, breath) {
    this.length = length;
    this.breath = breath;
  }

  area() {
    return this.length * this.breath;
  }
}

class Square extends Rectangle {
  constructor(length, breath) {
    super(length, breath);
  }
}

let rectangle = new Rectangle(3, 2);
let square = new Square(5, 5);
console.log(square.area());
