var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(400,400,80,40);
  movingrect.shapeColor = "blue";
  gameobject1 = createSprite(120,200,50,50);
  gameobject1.shapeColor = "purple";
  gameobject2 = createSprite(190,260,50,50);
  gameobject2.shapeColor = "white";
  gameobject3 = createSprite(300,230,50,50);
  gameobject3.shapeColor = "silver";
  gameobject4 = createSprite(50,200,50,50);
  gameobject4.shapeColor = "yellow";

  movingrect.velocityY = -5;
  fixedrect.velocityY = +5;
}

function draw() {
  background("black");  
  

  if (isTouching(movingrect, gameobject1)){
    gameobject1.shapeColor = "red";
    movingrect.shapeColor = "red";

  }
  else{
    gameobject1.shapeColor = "green";
    movingrect.shapeColor = "blue";
  
  }
  bounceOff(movingrect, fixedrect);
  drawSprites();
}
