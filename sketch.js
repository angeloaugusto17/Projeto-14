//Create Background
var background, backgroundImg;

//Create Bow
var bow, bowImg;

//Create Arrow
var arrow, gArrow, arrowImg;

//Create RedBalloon
var red, gRedBalloon, redBalloonImg;

//Create PinkBalloon
var pink, gPinkBalloon, pinkBalloonImg;

//Create GreenBalloon
var green, gGreenBalloon, greenBalloonImg;

//Create BlueBalloon
var blue, gBlueBalloon, blueBalloonImg;

//Create Score
var score = 0;

//Preload
function preload(){  
  //Background Image
  backgroundImg = loadImage("background0.png");

  //Arrow and Bow Image
  arrowImg = loadImage("arrow0.png");
  bowImg = loadImage("bow0.png");

  //Ballons Image
  redBalloonImg = loadImage("red_balloon0.png");
  greenBalloonImg = loadImage("green_balloon0.png");
  pinkBalloonImg = loadImage("pink_balloon0.png");
  blueBalloonImg = loadImage("blue_balloon0.png");
}

//Setup
function setup() {
  //Canvas
  createCanvas(400, 400);
  
  //Create Background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImg);
  scene.scale = 2.5;
  
  //Create Bow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImg); 
  bow.scale = 1;
  
  //Create Groups
  gArrow = new Group(); 
  gRedBalloon = new Group();
  gGreenBalloon = new Group();
  gBlueBalloon = new Group();
  gPinkBalloon = new Group();
}

//Draw
function draw(){

 //Background 
 background(0);

 

  //Moving Scene(Background)
  scene.velocityX = -3 
  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //Moving Bow
  bow.y = World.mouseY
  
  //Shoot arrow when mouse be pressed
  if(keyDown("space")) {
    createArrow();  
  }
  
  //Create Enemies
  var selectBalloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (selectBalloon == 1) {
      redBalloon();
    } 
    else if (selectBalloon == 2) {
      greenBalloon();
    } 
    else if (selectBalloon == 3) {
      blueBalloon();
    } 
    else {
      pinkBalloon();
    }
  }

  //Destroy Balloons
  //RedBalloon
  if (gArrow.isTouching(gRedBalloon)) {
    gRedBalloon.destroyEach();
    gArrow.destroyEach();
    score = score + 1;
  }

  //GreenBalloon
  if (gArrow.isTouching(gGreenBalloon)) {
    gGreenBalloon.destroyEach();
    gArrow.destroyEach();
    score = score + 3;
  }

  //BlueBalloon
  if (gArrow.isTouching(gBlueBalloon)) {
    gBlueBalloon.destroyEach();
    gArrow.destroyEach();
    score = score + 2;
  } 

  //PinkBalloon
  if (gArrow.isTouching(gPinkBalloon)) {
    gPinkBalloon.destroyEach();
    gArrow.destroyEach();
    score = score + 1;
  }


   //Write Text
   fill(0);
   text("Pontuação: " + score, 100,100);
  //Draw Sprites
  drawSprites();
}

//Functions of Ballons
//Red Balloon
function redBalloon(){
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redBalloonImg);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  gRedBalloon.add(red);
}

//BlueBalloon
function blueBalloon(){
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueBalloonImg);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  gBlueBalloon.add(blue);
}

//GreenBalloon
function greenBalloon(){
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenBalloonImg);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  gGreenBalloon.add(green);
}

//PinkBalloon
function pinkBalloon(){
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkBalloonImg);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  gPinkBalloon.add(pink );
}
 
//Create Arrows
 function createArrow() {
  console.log("oi");
  arrow = createSprite(100, 100, 60, 10);
  
  arrow.addImage(arrowImg);
  arrow.x = 360;
  
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  gArrow.add(arrow); 
}
