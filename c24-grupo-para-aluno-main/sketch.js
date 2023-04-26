const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground;
var left;
var right;
var top_wall;
let ball;
let btm1,btm2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  btm1=createImg("right.png")
  btm1.position(200,30)
  btm1.size(50,50)
  btm1.mouseClicked(Hforce)

   btm1=createImg("up.png")
  btm1.position(140,30)
  btm1.size(50,50)
  btm1.mouseClicked(Vforce)
 
  let options={
    restitution:0.5
  }

  ball=Bodies.circle(200,100,20,options)
World.add(world,ball)
}

function draw() 
{
  background(51);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  


  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20)
  
}

function Hforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  
}
function Vforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
  
}