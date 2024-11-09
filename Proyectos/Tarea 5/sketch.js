let circles = [];
let largeCircles = [];

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(random(width), random(height)));
    largeCircles.push(new LargeCircle(random(width), random(height)));
  }
}

function draw() {
  background(220);
  
  for (let circle of circles) {
    circle.update();
    circle.display();
    
    for (let largeCircle of largeCircles) {
      largeCircle.update();
      largeCircle.display();
      
      // Detectar colisiones
      if (detectCollision(circle, largeCircle)) {
        circle.changeColor();
        largeCircle.changeColor();
      }
    }
  }
}

// Clase para los círculos pequeños que se mueven en un patrón circular
class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = random(TWO_PI); // Ángulo inicial
    this.radius = 30;
    this.color = this.randomColor(); // Color aleatorio inicial
  }
  
  randomColor() {
    return color(random(255), random(255), random(255));
  }

  update() {
    this.angle += 0.025; // Velocidad de rotación más lenta
    this.x += cos(this.angle) * 2; // Movimiento más lento
    this.y += sin(this.angle) * 2; // Movimiento más lento
  }
  
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
  }

  changeColor() {
    this.color = this.randomColor();
  }
}

// Clase para los círculos grandes que se mueven en línea recta
class LargeCircle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50; // Radio más grande
    this.xSpeed = random(0, 1); // Velocidad más lenta
    this.ySpeed = random(0, 1); // Velocidad más lenta
    this.color = this.randomColor(); // Color aleatorio inicial
  }
  
  randomColor() {
    return color(random(255), random(255), random(255));
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    // Rebotar en los bordes
    if (this.x > width - this.radius || this.x < this.radius) {
      this.xSpeed *= -1;
    }
    if (this.y > height - this.radius || this.y < this.radius) {
      this.ySpeed *= -1;
    }
  }
  
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
  }

  changeColor() {
    this.color = this.randomColor();
  }
}

// Función para detectar colisiones
function detectCollision(circle, largeCircle) {
  let d = dist(circle.x, circle.y, largeCircle.x, largeCircle.y);
  return d < circle.radius + largeCircle.radius / 2;
}
