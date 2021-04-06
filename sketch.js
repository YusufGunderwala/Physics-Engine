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
    box = Bodies.rectangle(100,200,50,100);
    World.add(myWorld,box);

    ground = Bodies.rectangle(300,595,600,10,abc);
    World.add(myWorld,ground);

}

function draw(){
    background(0);

    Engine.update(myEngine);

    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,100);
    
    rect(ground.position.x,ground.position.y,600,10);
}