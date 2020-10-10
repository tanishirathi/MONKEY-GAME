var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup(){
createCanvas(1000,500); 

monkey = createSprite(80,350,900,10)
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;

  
ground = createSprite(500,450,1000,10);
ground.velocityX=-4;

 var rand =  Math.round(random(1,100))
 console.log(rand)



monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
monkey.debug = false;
  
score=0;
survivalTime=0

 
}

function draw() {
background(0,0,0 );
  
stroke=("white");
textSize=(20);
fill("white");
text("SURVIVAL TIME :"+score,500,50);
  
stroke=("black");
textSize=(20);
fill("black");
text("SURVIVAL TIME:"+survivalTime,100,50); 
ground.velocityx = -(4 + 3* score/100)
score = score + Math.round(getFrameRate()/60);


if(keyDown("space")){
monkey.velocityY = -12;
}
monkey.velocityY = monkey.velocityY + 0.8
 
  if (ground.x < 500){
    ground.x = ground.width/2;
  }   

monkey.collide(ground);
  
bananaGroup = createGroup();
spawnBanana(); 
obsticaleGroup = createGroup();
spawnObsticale();
  
 drawSprites(); 
  
}
function spawnBanana(){
 if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200,270));
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;

    bananaGroup.add(banana); }
}

function spawnObsticale(){
 if (frameCount % 300 === 0) {
    var obsticale = createSprite(600,430,40,10);
    obsticale.addImage(obstaceImage);
    obsticale.scale = 0.09;
    obsticale.velocityX = -3;
    obsticale.lifetime = 200;
    obsticale.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;

    obsticaleGroup.add(obsticale); } 
  
  
  
  
  
  

}







