function setup() {
  createCanvas(800,400);
  rect1 =createSprite(400, 200, 25, 50);
  rect2 =createSprite(400, 100, 50, 25)
  rect2.shapeColor = "blue";
  rect1.shapeColor = "red";
}

function draw() {
  background(255,255,255); 
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;
  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 
    && rect2.x - rect1.x < rect1.width/2 + rect2.width/2 
    && rect1.y - rect2.y < rect1.width/2 + rect2.width/2
    && rect2.y - rect1.y < rect1.width/2 + rect2.width/2){
      rect2.shapeColor = "green";
      rect1.shapeColor = "green";
    }else{
      rect2.shapeColor = "blue";
      rect1.shapeColor = "red";
    }
  drawSprites();
}