const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball2;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options ={
   isStatic : true 
  }

  ground = Bodies.rectangle(200,380,400,40,ground_options);
  World.add(world,ground);

  var ball_options ={
    restitution : 1
  }

  var ball2_options ={
    restitution : 1
  }

  ball = Bodies.circle(100,100,30, ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,100,30, ball2_options);
  World.add(world,ball2);

  console.log(ball)
}

function draw() {
  background(0);  
  
  Engine.update(engine);

  fill("green")
  rectMode(CENTER)
  rect(ground.position.x , ground.position.y,400,40);
  
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x ,ball.position.y ,30,30);

  fill("blue")
  ellipse(ball2.position.x ,ball2.position.y ,30,30);

  drawSprites();
}