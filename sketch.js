const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var paper;
var part1, part2, part3;    // Parts of the dustbin
var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(100, 330, 20);

  part1 = new Dustbin(600, 350, 20, 200);
  part2 = new Dustbin(490, 310, 100, 20);
  part3 = new Dustbin(710, 310, 100, 20);

  ground = new Ground(width / 2, 380, 800, 20);
  World.add(world, ground);
}

function draw() {
  background(0);

  rectMode(CENTER);

  // Updating the engine
  Engine.update(engine);

  // Displaying the ball of paper
  paper.display();

  // Displaying the parts of the dustbin
  part1.display();
  part2.display();
  part3.display();

  ground.display();

  drawSprites();
}

function keyPressed(){

  if (keyCode === UP_ARROW){
    //  Making the ball jump when the up arrow is pressed
    Matter.Body.applyForce(paper.body, paper.body.position, {x : 50, y : -85});
  }

}