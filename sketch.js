const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){
    createCanvas(600,600);

    myEngine = Engine.create(); //myEngine.world
    myWorld = myEngine.world;

    var abc = {
      isStatic : true 
    }
    ground = Bodies.rectangle(300,595,600,10,abc);
    World.add(myWorld,ground);

    box1 = new Box(100,100);
    box2 = new Box(200,200);

}

function draw(){
    background(0);

    Engine.update(myEngine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,10);

    box1.display();
    box2.display();
}