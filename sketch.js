var hr , minutes , seconds;
var hourAngle , minuteAngle , secondAngle;

function setup() {
  createCanvas(800,400);


}

function draw() {
  background(255,255,255); 
  translate(200,200); 

  hr = hour();
  minutes = minute();
  seconds = second();

  /*console.log(hr);
  console.log(minutes);
  console.log(seconds);*/

  secondAngle = map(seconds , 0 , 60 , 0 , 360 );
  minuteAngle = map(minutes , 0 , 60 , 0 , 360 );
  hourAngle = map(hr%12 , 0 , 12 , 0 , 360 );

  console.log(hourAngle);
  console.log(minuteAngle);
  console.log(secondAngle);
  
  // seconds hand
  push();
  stroke(255,0,0);
  strokeWeight(7);
  rotate(secondAngle);
  line(0,0,150,0);
  pop();

  // minutes hand
  stroke(0,0,255)
  strokeWeight(7);
  rotate(minuteAngle);
  line(0,0,100,0);

  //hour hand
  stroke(0,255,0);
  strokeWeight(7);
  rotate(hourAngle);
  line(0,0,50,0);

  drawSprites();
}