const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world=engine.world;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);
  
 var ball_options = {
   restitution : 1.9
 }

  ball = Bodies.circle(200,200,50,ball_options);
  World.add(world,ball);

}


function draw() {
  background("yellow"); 

  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x, ball.position.y,50);

}