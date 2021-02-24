const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ground_options = {
    isStatic : true
  };
  var ball_options = {
    restitution : 1
  };
  ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ground);
  World.add(world,ball);
 // console.log(object.position.x);
  //onsole.log(ground.position.y);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}