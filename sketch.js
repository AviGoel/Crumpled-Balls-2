
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,dustbin1,ground,dustbin2,dustbin3,dustbin_img1,dustbin_img;
var ground2
var engine, world;


function preload()
{
	dustbin_img=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1=new Paper(100,600,70);
   
   dustbin1=new Dustbin(600,625,200,20);
   dustbin2=new Dustbin(490,575,20,100);
   dustbin3=new Dustbin(720,575,20,100);
   dustbin_img1=createSprite(600,475,1,1);

   
   
   ground = new Ground(400,640,800,20);
   
   dustbin_img1.addImage(dustbin_img);
  imageMode(CENTER); 

   Engine.run(engine);
   }


function draw() {
  Engine.update(engine);
  background(224);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  ground.display();
  
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-140});
  }
}

