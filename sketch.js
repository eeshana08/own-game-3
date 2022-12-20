var canvas
var bg, bgImage
var player, playerImg
var bunnyImage
var logImage
var coinImage

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){ 
bgImage = loadImage("forestImage.png");
playerImage = loadAnimation("cheeta1.png","cheeta2.png","cheeta3.png","cheeta4.png","cheeta5.png",
"cheeta6.png","cheeta7.png","cheeta8.png")
bunnyImage = loadImage("bunnyImage.png")
logImage = loadImage("logImage.png")
coinImage = loadImage("coinImage.png")
}

function setup(){
  createCanvas(800,250);
  bg = createSprite(450,150);
  bg.addImage(bgImage);
  bg.scale = 1.45
  bg.velocityX = -3
  player = createSprite(100,200);
  player.addAnimation("cheeta", playerImage);
  player.scale = 0.7
 
logGroup = new Group()
coinGroup = new Group()

}


function draw(){
background("black");
if(gameState === PLAY){
  if (bg.x < 150){
    bg.x = bg.width/2;
  }
  
  obstacle1()
  obstacle2()

  
}



else if(gameState ===END){

}
drawSprites();
}
 
function obstacle1(){
  if (frameCount % 150 === 0){
    var logObstacle = createSprite(750,220,10,40);
    //logObstacle.x = Math.round(random(10,180))
    logObstacle.velocityX = -3;
    logObstacle.addImage(logImage)
    logObstacle.scale = 0.1
    logGroup.add(logObstacle)
      
    }
}

function obstacle2(){
  if (frameCount % 100 === 0){
    var coinObstacle = createSprite(750,220,10,40);
    coinObstacle.y = Math.round(random(20,180))
    coinObstacle.velocityX = -3;
    coinObstacle.addImage(coinImage)
    coinObstacle.scale = 0.1
    coinGroup.add(coinObstacle)
          
      
    }
}
