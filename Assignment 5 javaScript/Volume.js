class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    return 3.14 * this.radius ** 2 * this.height;
  }
}

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }

  getVolume() {
    return (4 / 3) * 3.14 * this.radius ** 3;
  }
}

class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    return (1 / 3) * 3.14 * this.radius ** 2 * this.height;
  }
}

let cylinder = new Cylinder(2, 3);
console.log(cylinder.getVolume().toFixed(4));

let sphere = new Sphere(2);
console.log(sphere.getVolume().toFixed(4));

let cone = new Cone(2, 3);
console.log(cone.getVolume().toFixed(4));
