
var monkey , monkey_running;
var banana ,bananaImage, obstacle,obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  bananaGroup=new Group();

}


function draw() {
background(180);

  if (keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-10
   }
  
  monkey.velocityY = monkey.velocityY + 0.9;
  
  monkey.collide(ground);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
    // adding the food function             
    food()
  
  // adding the obstacle function
  creatingObstacle()
  
  
  
  
  stroke("purple");
  textSize(20);
  fill("purple");
  survivalTime=Math.ceil(frameCount/frameRate())
  text ("Survival Time:"+survivalTime,100,50);
  
  drawSprites();
    
}

function food(){
  if (frameCount % 80 === 0) {
    banana=createSprite(400,200,0,0);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX = -3;
    banana.lifetime = 130;
    bananaGroup.add(banana);
    
    
  }
}

function creatingObstacle(){
  if (frameCount % 300 === 0) {
    
    obstacle=createSprite(600,328,0,0);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 190;
    
  }  
}


