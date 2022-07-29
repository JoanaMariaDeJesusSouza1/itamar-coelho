const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;






function setup() 
{
  createCanvas(600,700);
  frameRate(80);


  engine = Engine.create();
  world = engine.world;

  rope = new Rope(7,{x:300,y:90});
  
  ground = new Ground(300,height,width,20);

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background("darkblue");
  Engine.update(engine);
 

  ellipse(fruit.position.x,fruit.position.y,30,30);
  
 
  rope.show();
  ground.show();

  


}



