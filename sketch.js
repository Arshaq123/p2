const Engine = Matter.Engine;
const World = Matter.World ;
const Bodies = Matter.Bodies;
var engine,world,fairy,fairyimg, star;
var garden, bgImg;

function preload()

{
  
  bgImg=loadImage("images/starnight.png");
  fairymg=loadImage("images/fairy1.png");
   //preload the images here
}

function setup() {
  createCanvas(800, 750);
  
  engine = Engine.create();//this is the physics engine for our game

  world = engine.world;// creating a world using the engine , why do we need - so that we have all the physics applied to our world



  var fairy_options= {

        isStatic : true
    }

  fairy=Bodies.rectangle(400,200,20,20, fairy_options);
  World.add(world,fairy);
    

  console.log(fairy);
  console.log(fairy.position.x);



}


function draw() {
  background(bgImg);

  Engine.update(engine);


  rectMode(CENTER)
  rect(fairy.position.x,fairy.position.y,20,20);


  drawSprites();
}

function keyPressed(){


  if (keyCode  === LEFT_ARROW){

    fairy.velocityX=-5;
    
  }
//For moving and changing animation write code here


if (keyCode  === RIGHT_ARROW){

  fairy.velocityX=5;

  
}


}
