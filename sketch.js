var fixedRect, movinRect;
function setup() {
  createCanvas(1200,800);
 movingRect= createSprite(400, 200, 50, 50);
 fixedRect=createSprite(600,400,70,50)
 movingRect.shapeColor='red';
 fixedRect.shapeColor='red';
}

function draw() {
  background(0);
  movingRect.x=World.mouseX ;
  movingRect.y=World.mouseY;
  //console.log(movingRect.x-fixedRect.x) 
  console.log(movingRect.width/2+fixedRect.width/2)
  if(movingRect.x-fixedRect.x<movingRect.width/2+
    fixedRect.width/2
     &&
     fixedRect.x-movingRect.x<movingRect.width/2+
    fixedRect.width/2
    &&
     movingRect.y-fixedRect.y<movingRect.width/2+
      fixedRect.width/2
       &&
       fixedRect.y-movingRect.y<movingRect.width/2+
      fixedRect.width/2)
    {
      movingRect.shapeColor='green'
      console.log(movingRect.width/2+
        fixedRect.width/2)
    }
    else{movingRect.shapeColor='red'}
    
  drawSprites();
}