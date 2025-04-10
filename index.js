class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
