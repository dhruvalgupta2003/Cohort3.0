// base shape class
class Shape {
  constructor(sides, length, width, color) {
    this.sides = sides;
    this.length = length;
    this.width = width;
  }
}

class Rectange extends Shape {
  constructor(sides, lenght, widht, color) {
    super(color);
  }
}
