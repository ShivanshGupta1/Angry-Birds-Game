const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4, box5,ground, ground2, log1, log2,log3, log4, pig1, pig2,bird, backImg, constLog, chain ;

function preload(){
    backImg = loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,400,400,400);
    ground2 = new Ground(600,400,1200,100);
    bird = new Bird(200,100)
    box1 = new Box(700,320,50,50);
    box2 = new Box(900,320,50,50);
    pig1 = new Pig(800,320);
    log1 = new Log(800,100,250,PI)
    box3 = new Box(700,50,50,50);
    box4 = new Box(900,50,50,50);
    pig2 = new Pig(800,50)
    log2 = new Log(800,25,250,PI)
    box5 = new Box(800,10,50,50);
    log3 = new Log(750,1,125,-PI/6)
    log4 = new Log(850,1,125,PI/6)
    constLog = new Log(200,200,100,PI)
    chain = new SlingShot(bird.body,constLog.body);
    
    
    

  
  
  
 
}

function draw(){
    
    background(backImg);
    Engine.update(engine);
    ground.showGround();
    ground2.showGround();
    box1.display()
    box2.display()
    pig1.display();
    log1.display();
    box3.display()
    box4.display()
    pig2.display();
    log2.display();
    box5.display()
    log3.display();
    log4.display();
    bird.display();
    constLog.display();
    chain.display();
   

  
   
}