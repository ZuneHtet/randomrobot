let xR,yR, xL, yL;
let length;

function setup() {
  createCanvas(500, 500);
  xR=random(285,315);
  yR=random(205,235);
  xL=random(185,215);
  yL=random(235,205);
  length=random(10,100);
}

function draw() {
  background(0);
  
  fill(255);
  rectMode(CENTER);
  square(250,250,200,50);
  
  //GreenCircleR
  noStroke();
  fill(178, 172, 136);
  circle(300,220,50);
  
   //BlackCircleR
  noStroke();
  fill(0);
  circle(xR,yR,20);
  
  //GreenCircleL
  noStroke();
  fill(178, 172, 136);
  circle(200,220,50);
  
  //BlackCircleL
  noStroke();
  fill(0);
  circle(xL,yL,20);
  
  fill(0);
  rect(250,300,length,20);

}