var car,wall;
var speed,weight;
function setup() {
  createCanvas(1500,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,98)
  weight=random(400,1500)

}

function draw() {
  background(255,255,255);  
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
car.velocityX=speed
  drawSprites();
}