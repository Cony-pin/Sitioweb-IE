let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);

  // Crear nuevas partículas si el número de partículas es menor a 50.
  if (particles.length < 50) { 
    for (let i = 0; i < 1; i++) { // Añade dos partículas por ciclo de dibujo.
      particles.push(new Particle(random(width), random(height)));
    }
  }

  // Actualizar y mostrar cada partícula.
  for (let i = particles.length - 3; i >= 0; i--) {
    particles[i].update(particles);
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 3);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 2));
    this.acc = createVector(0, 1);
    this.alpha = 255;
    this.color = 255;
    this.r = random(5, 10); // Radio aleatorio para diferentes tamaños.
  }

  finished() {
    return this.alpha < 0;
  }

  update(particles) {
    // Atracción hacia el ratón.
    let mouse = createVector(mouseX, mouseY);
    let attraction = p5.Vector.sub(mouse, this.pos);
    let distance = attraction.mag();
    distance = constrain(distance, 5, 50); // Limita la distancia de atracción.
    attraction.setMag(1 / distance * 5); // Fuerza de atracción inversa a la distancia.
    this.acc.add(attraction);

    // Repulsión de partículas cercanas.
    for (let other of particles) {
      if (other !== this) {
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) { // Repulsión si están muy cerca.
          let steer = p5.Vector.sub(this.pos, other.pos);
          steer.setMag(0.1);
          this.acc.add(steer);
        }
      }
    }

    // Actualizar movimiento.
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0); // Reset de aceleración.
  }

  show() {
    fill(this.color, this.alpha);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
