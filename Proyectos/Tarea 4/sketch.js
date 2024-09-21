
function setup() {
  createCanvas(600, 400);    
  pixelDensity(5); 
}

function draw() {
  background(0);        
  stroke(225);
  noFill();  
  drawCircle(300, 150,mouseX);  
  
}


function drawCircle(x, y, d) {
  ellipse(x, y, d); 
  if (d > 1) {  
    drawCircle(x + 9 * 0.8, y, d * 0.8);  
    drawCircle(x - 9 * 0.08, y, d * 0.08);  
    
  }
}
