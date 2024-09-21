function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

let colors;
let numFlashes = 10;
let flashSize = 100;
let flashes = []; 

function setup() {
  createCanvas(800, 600);
  colors = ['#0000FF', '#40E0D0', '#FFC0CB', '#800080'];

  
  for (let i = 0; i < numFlashes; i++) {
    flashes.push({
      x: random(width),
      y: random(height),
      color: colors[int(random(colors.length))],
      xSpeed: random(-2, 2),
      ySpeed: random(-2, 2)
    });
  }
}

function draw() {
  background(0);
  
  for (let flash of flashes) {
    
    flash.x += flash.xSpeed;
    flash.y += flash.ySpeed;
    
    
    if (flash.x > width || flash.x < 0) {
      flash.xSpeed *= -1;
    }
    if (flash.y > height || flash.y < 0) {
      flash.ySpeed *= -1;
    }

   
    drawFlash(flash.x, flash.y, flash.color);
  }
}

function drawFlash(x, y, color) {
  noStroke();
  fill(color);
  ellipse(x, y, flashSize, flashSize);
}
