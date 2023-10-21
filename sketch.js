let posX;
let posY;
let vel;
let diam;
let rad;
let esp;
let margen;
let piso;
let acel;

// let pelota1;
// let gravity = 0.2;
// let friction = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // pelota1 = new pelotaquerebota(windowWidth / 2, windowHeight * 0.2);

  posX = windowWidth / 2;
  posY = windowHeight * 0.2;
  rectMode(CENTER);
  diam = random(10, 100);
  rad = diam / 2;
  esp = 50;
  margen = 40;
  piso = windowHeight - margen - esp / 2;
  vel = 0;
  acel = 0.8;
  // frameRate(10);
}

function draw() {
  // background(200);
  // pelota1.update();
  // pelota1.display();

  background(70, 0, 100);

  actualizar();

  noStroke();
  fill(255, random(100, 255), 50);
  circle(posX, posY, 80);
  fill(255, 200, 100);
  rect(windowWidth / 2, windowHeight - margen, windowWidth, esp);
}

function actualizar() {
  vel += acel;
  posY += vel;

  if (posY >= piso - rad) {
    print("ya");
    vel *= -1;
    posY += vel;
  }
}

// class pelotaquerebota {
//   constructor(_posX, _posY) {
//     this.posX = _posX;
//     this.posY = _posY;
//     this.diam = random(10, 50);
//     this.rad = this.diam / 2;
//     this.esp = 50;
//     this.margen = 40;
//     this.piso = windowHeight - this.margen - this.esp / 2;
//     this.velY = 0;
//     this.acel = 0.98;
//   }

//   update() {
//     this.velY += this.acel;
//     this.posY += this.velY;
//     if (this.posY >= this.piso - this.rad) {
//       this.posY = this.piso - this.rad;
//       this.velY *= -1;
//     }
//   }

//   display() {
//     background(0, 220, 210, 50);
//     noStroke();
//     rectMode(CENTER);

//     fill(255);
//     circle(this.posX, this.posY, this.diam);
//     fill(255, 0, 0);
//     rect(windowWidth / 2, windowHeight - this.margen, windowWidth, this.esp);
//   }
// }
