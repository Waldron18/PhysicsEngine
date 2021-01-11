//namespace
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,ball2,box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options ={
        restitution: 0.5
    }

    
    var ball2_options ={
        restitution: 1
    }

    
    var box_options ={
        restitution: 1.5
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    ball=Bodies.circle(100,20,30,ball_options);
    World.add(world,ball);

    
    ball2=Bodies.circle(200,20,15,ball2_options);
    World.add(world,ball2);

    
    box=Bodies.rectangle(300,20,20,20,box_options);
    World.add(world,box);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    fill("yellow");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);

    fill("blue");
    stroke("red");
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,15,15);

    fill("red");
    rectMode(CENTER);
    rect(box.position.x,box.position.y,20,20);
    

}