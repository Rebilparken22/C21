var fixedRect, movingRect;
var gameObj1, gameObj2, gameObj3;

function setup() {
  createCanvas(1200,800);
  // fixedRect = createSprite(600, 200, 50, 80);
  // fixedRect.shapeColor = "green";

  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green";


  // gameObj1 = createSprite(400,200,50,80);
  // gameObj1.shapeColor = "green";


  gameObj2 = createSprite(800,200,50,80);
  gameObj2.shapeColor = "green";


  // gameObj3 = createSprite(1000,200,50,80);
  // gameObj3.shapeColor = "green";


  movingRect.velocityX = 2; 
  gameObj2.velocityX = -2; 

  

}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

 if(isTouching(gameObj2, movingRect)){  //if(true) //passing 2 parameters to the functions

  movingRect.shapeColor = "red";
  gameObj2.shapeColor = "red";

 }else{
  movingRect.shapeColor = "green";
  gameObj2.shapeColor = "green";
 }


 bounceOff(gameObj2, movingRect);

  drawSprites();
}


