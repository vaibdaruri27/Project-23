//Global Functions
//Constants(Engine,World,Bodies,Body)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bottom, bottomSprite, right, rightSprite, leftSprite, left;

function preload()
{   //Preloading helicopter and package images
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	//Canvas(800,700)
	createCanvas(800, 700);
	
    rectMode(CENTER);
	
	//Engine
	engine = Engine.create();
	world = engine.world;
	
	//PackageSprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	//Helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	
	//Ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	//Packagebody
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.61, isStatic:true});
	World.add(world, packageBody);
	
    //Create a Ground Sprite
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	//Create a groundSprite
	bottomSprite = createSprite(380,652,200,20);
	bottomSprite.shapeColor = "red";

	//Create a matter.js ground
	bottom = Bodies.rectangle(380,652,200,20,{isStatic: true});
	World.add(world, bottom);
	
	//Create a rightSprite
	rightSprite = createSprite(285,612,20,100);
	rightSprite.shapeColor = "red";

	//Create a right
	right = Bodies.rectangle(285,612,20,100,{isStatic: true});
	World.add(world,right);

	//Create a leftSprite
	leftSprite = createSprite(485,612,20,100);
	leftSprite.shapeColor = "red";
	
    //Create a left
    left = Bodies.rectangle(485,612,20,100,{isStatic: true});
	World.add(world,left);

	//Running engine
    Engine.run(engine);
  
}


function draw() {
  //Making the packagebody center
  rectMode(CENTER);

  //Making the bottom center
  rectMode(CENTER);

  //Updates Engine
  Engine.update(engine);

  //Making Background Black
  background(0);
  
  //PackageSpritex = PackageBody.position.x and viceversa
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

  //bottomSPrite.x = bottom.position.x and viseverca
  bottomSprite.x = bottom.position.x;
  bottomSprite.y = bottom.position.y;
  
  //rightSprite.x = right.position.x and viceversa
  rightSprite.x = right.position.x;
  rightSprite.y = right.position.y;
  
  //leftSprite.x = left.position.x and viceversa
  leftSprite.x = left.position.x;
  leftSprite.y = left.position.y;

  //drawSprites();
  drawSprites();
 
}

//function keyPressed (if keypressed down, package will drop)
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on ____
    Matter.Body.setStatic(packageBody,false);
  }
}