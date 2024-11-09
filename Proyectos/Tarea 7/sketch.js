let img;
let size = 10;
let asciChar = "perro";

function preload() {
  img = loadImage("perro nariz.jpg");
}

function setup() {
  createCanvas(600,600);
  img.resize(100, 0);
  size = width / img.width;
}

function draw() {
  background(255);
  
  img.loadPixels();
  
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) { // Cambiado i a j
      let pixelIndex = (i + j * img.width) * 4; 
      let r = img.pixels[pixelIndex + 0];
      let g = img.pixels[pixelIndex + 1];
      let b = img.pixels[pixelIndex + 2];
      
      let brightness = (r + g + b) / 3; // Cambiado brigth a brightness
      let tIndex = floor(map(brightness, 0, 255, 0, asciChar.length)); // Cambiado RIGHT a brightness
      
      let x = i * size + size / 2;
      let y = j * size + size / 2; // Cambiado i a j
      let t = asciChar.charAt(tIndex); // Definir caracter según mapeo de luminosidad
      
      stroke(255);
      textSize(size);
      textAlign(CENTER, CENTER);
      text(t, x, y);
    }
  }
}
