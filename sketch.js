//namespacing => giving nick names / shorter names to the module
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en, wo
var ball

function setup() {
  createCanvas(800,400);

  //step 1 => create an engine
  en = Engine.create()
  
  //step 2 => Accessing the world from the engine
  wo = en.world
 
  //step 3 => creating the body and adding it to the world
  ball = Bodies.circle(200,20,25)
  World.add(wo, ball)
  
}

function draw() {
  background("yellow"); 
  Engine.update(en) 
  
  ellipse(ball.position.x, ball.position.y,25)
}