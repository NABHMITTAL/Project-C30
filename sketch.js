const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine
var world
var base1, base2,ground
var block1,block2,block3,block4,block5,block6,block7,block8,block9
var block11,block12,block13,block14,block15,block16,block17
var block18,block19,block20,block21,block22
var block23,block24,block25
var block26

var blockb1,blockb2,blockb3,blockb4,blockb5,blockb6,blockb7,blockb8,blockb9
var blockb11,blockb12,blockb13,blockb14,blockb15,blockb16,blockb17
var blockb18,blockb19,blockb20,blockb21,blockb22
var blockb23,blockb24,blockb25
var blockb26
var polygon
var slingShot


function setup() {
	createCanvas(1500, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


    Engine.run(engine);
    
    base1 = new Ground(700,700,300,10)
    base2 = new Ground(1200,400, 300,10)

    ground = new Ground(400,890,7000,10)

    //A Group
  
    block1 = new Box(590,650, 30,40)
    block2 = new Box(610,650,30,40)
    block3 = new Box(640,650,30,40)
    block4 = new Box(670,650,30,40)
    block5 = new Box(700,650,30,40)
    block6 = new Box(730,650,30,40)
    block7 = new Box(760,650,30,40)  
    block8 = new Box(790,650,30,40)
    block9 = new Box(810,650,30,40) 
  
    block11 = new Box(610,610,30,40)
    block12 = new Box(640,610,30,40)
    block13 = new Box(670,610,30,40)
    block14 = new Box(700,610,30,40)
    block15 = new Box(730,610,30,40)
    block16 = new Box(760,610,30,40)
    block17 = new Box(790,610,30,40)

    block18 = new Box(640,570,30,40)
    block19 = new Box(670,570,30,40)
    block20 = new Box(700,570,30,40)
    block21 = new Box(730,570,30,40)
    block22 = new Box(760,570,30,40)
    
    block23 = new Box(670,530,30,40)
    block24 = new Box(700,530,30,40)
    block25 = new Box(730,530,30,40)

    block26 = new Box(700,490,30,40)

    //Bgroup

    blockb1 = new Box(1080,350, 30,40)
    blockb2 = new Box(1110,350,30,40)
    blockb3 = new Box(1140,350,30,40)
    blockb4 = new Box(1170,350,30,40)
    blockb5 = new Box(1200,350,30,40)
    blockb6 = new Box(1230,350,30,40)
    blockb7 = new Box(1260,350,30,40)  
    blockb8 = new Box(1290,350,30,40)
    blockb9 = new Box(1320,350,30,40) 
  
    blockb11 = new Box(1110,310,30,40)
    blockb12 = new Box(1140,310,30,40)
    blockb13 = new Box(1170,310,30,40)
    blockb14 = new Box(1200,310,30,40)
    blockb15 = new Box(1230,310,30,40)
    blockb16 = new Box(1260,310,30,40)
    blockb17 = new Box(1290,310,30,40)

    blockb18 = new Box(1140,270,30,40)
    blockb19 = new Box(1170,270,30,40)
    blockb20 = new Box(1200,270,30,40)
    blockb21 = new Box(1230,270,30,40)
    blockb22 = new Box(1260,270,30,40)
    
    blockb23 = new Box(1170,230,30,40)
    blockb24 = new Box(1200,230,30,40)
    blockb25 = new Box(1230,230,30,40)

    blockb26 = new Box(1200,190,30,40)

    



  polygon = new Polygon(400,300,50,50)

  slingShot = new SlingShot(polygon.body,{x : 400 , y : 300})

}


function draw() {
  rectMode(CENTER);
  background(0);
  


base1.display();
base2.display();

ground.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();

block11.display();
block12.display();
block14.display();
block13.display();
block15.display();
block16.display();
block17.display();

block18.display();
block19.display();
block20.display();
block21.display();
block22.display();

block23.display();
block24.display();
block25.display();

block26.display();

blockb1.display();
blockb2.display();
blockb3.display();
blockb4.display();
blockb5.display();
blockb6.display();
blockb7.display();
blockb8.display();
blockb9.display();

blockb11.display();
blockb12.display();
blockb14.display();
blockb13.display();
blockb15.display();
blockb16.display();
blockb17.display();

blockb18.display();
blockb19.display();
blockb20.display();
blockb21.display();
blockb22.display();

blockb23.display();
blockb24.display();
blockb25.display();

blockb26.display();

polygon.display();

slingShot.display()

}

function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x: 400, y: 300})
    slingShot.attach(polygon.body);
  }
}