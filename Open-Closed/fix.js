
class RectangleArea {
  constructor(height, width) {
    this.type = "rectangle";
    this.height = height;
    this.width = width;
  }

  getArea() {
    console.log(this.height * this.width);
  }
}

class CircleArea {
  constructor(radius) {
    this.type = "circle";
    this.radius = radius;
  }

  getArea() {
    console.log(this.radius * this.radius * 3.14);
  }
}

class SquareArea {
  constructor(length) {
    this.type = "square";
    this.length = length;
  }

  getArea() {
    console.log(this.length * this.length);
  }
}

const getArea = (shapes) => {
  shapes.forEach((shape) => {
    console.log(shape.type);
    shape.getArea();
  });
};

const shapeType = [
    new RectangleArea(30, 30),
    new CircleArea(50),
    new SquareArea(100),
  ];
  

getArea(shapeType);
