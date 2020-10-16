var boy, stone, ground, boyImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage = loadImage("Images/boy.png")
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,600,50);
	boy = creatSprite(100,200,20,10);
	boy.addImage(boyImage);
	stone = new Stone(200,200,20,20);  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  drawSprites();
 
}



