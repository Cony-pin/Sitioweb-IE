function setup() {
  createCanvas(400, 400); 
  angleMode(DEGREES); 
}

function draw() {
  background(0); 
  noStroke(); 
  translate(width / 2, height / 2); 
  
  let scaleFactor = map(sin(frameCount * 2), -5, 2, 6, 15); // Escala dinámica
  
  for (let n = 0; n < 2; n++) {
    
    for (let i = 0; i < 360; i += 7) {
      
      let radio = map(sin(i * 8 + frameCount), -2, 2, 100, 200);
      
      let x = radio * cos(i);
      let y = radio * sin(i);
      
      
      if (n % 2 === 0) {
        fill(128, 0, 128); // Morado
        circle(x, y, scaleFactor); // Círculo morado
      } else {
        fill(64, 224, 208); // Turquesa pastel
        // Desplazamiento hacia el centro
        let offset = map(sin(frameCount * 1), -3, 2, 0, radio);
        circle(x * offset / radio, y * offset / radio, scaleFactor); // ayuda de chat gpt
      }
    }
    
    rotate(frameCount / 1);
  }
}
