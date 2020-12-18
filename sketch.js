
var monkey , monkey_running
var banana ,bananaImage, obstacle,background,backgroundImage, obstacleImage,ground,groundImage
var FoodGroup, obstacleGroup
var score

var score=0
var gameOver

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  



  
  
  score=0
  FoodGroup=createGroup()
  obstaclesGroup=createGroup()
  
 
  
}


function draw() {

 
  background(225)
  
if (ground.x<0){
  
 ground.x=ground.width/2
}
  
  if (keyDown("space")&& monkey.y >= 250){
  monkey.velocityY=-12
 
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
  spawnFood()
  spawnObstacles()
  
   drawSprites()
  
  var survivalTime=0
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,500,50)
  
  
  
  if (obstaclesGroup.isTouching(monkey)){
    
    ground.velocityX=0
    monkey.velocityY=0
    obstaclesGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
    
}
    
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50)
  
  
}

function spawnFood(){
  
  if (frameCount%80===0){
    banana=createSprite(600,250,40,10)
    
      banana.y = Math.round(random(150,200));
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -3;
     banana.lifetime = 200;
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    FoodGroup.add(banana);
 }
}
function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(800,320,10,40);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.1;
   obstacle.velocityX = -6 
     obstacle.lifetime = 200;
    obstaclesGroup.add(obstacle);
  }
}