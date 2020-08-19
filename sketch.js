const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16;
var stand1, ground;
var sling;
var ball;

function setup() {
  var canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  ball = Bodies.circle(50,200, 20);
  World.add(world,ball)
  ground = new Ground(500, 590, 1000, 20);
  sling = new SlingShot(ball, {x: 100, y:200});
  stand1 = new Ground(400, 400, 350, 20);
  //first level
  block1 = new Box(250, 365, 50,50);
  block2 = new Box(300, 365, 50,50);
  block3 = new Box(350, 365, 50,50);
  block4 = new Box(400, 365, 50,50);
  block5 = new Box(450, 365, 50,50);
  block6 = new Box(500, 365, 50,50);
  block7 = new Box(550,365, 50,50);
  //2nd level
  block8 = new Box(300, 315,50,50);
  block9 = new Box(350, 315,50,50);
  block10 = new Box(400, 315,50,50);
  block11 = new Box(450, 315,50,50);
  block12 = new Box(500, 315,50,50);
  //3rd level
  block13 = new Box(350,265,50,50);
  block14 = new Box(400,265,50,50);
  block15 = new Box(450, 265, 50, 50);
  //last level
  block16 = new Box(400, 215, 50, 50);  
}

function draw() {
  background("white");
  text(mouseX +","+ mouseY ,500,50);
  Engine.update(engine);
  ground.display();  
  stand1.display();
  //display level 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  // level 2
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //display level 3
  block13.display();
  block14.display();
  block15.display();
  //display leve; 4
  block16.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);

  
}
function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
  
}
function mouseReleased(){
  sling.fly();
}