let num = 1;
let str = "hello world";
let bool = true;
let nothing = null;
let un;
let arr = [num,str,"hello",12,3,true];
let anyvar = arr[2];
let anylen = arr.length;
arr.push("world");
arr.pop("hello");
let arr2d = [["helo","world"],[1,2,3,4,5]];
console.log(arr2d[1][3])
arr.unshift("helloworld");
arr.shift();
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1,box2,box3,box4, box5,ground, ground2, log1, log2,log3, log4, pig1, pig2,bird, backImg, chain, checkHour, backImg, reset, resetImg, img;
var score = 0;
var gameState = "onSling";
async function preload(){

    checkHour = await getBackground();
    console.log(checkHour)
    if (checkHour<=19 && checkHour>=5){
        backImg = loadImage("sprites/bg.png")
        console.log(backImg)
    }
    else{
        backImg = loadImage("sprites/bg2.jpeg")
    }
    resetImg = loadImage("sprites/resetimg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,400,400,400);
    ground2 = new Ground(600,400,1200,100);
    reset = document.getElementsByClassName("myImg")
    bird = new Bird(200,100)
    box1 = new Box(700,320,50,50);
    box2 = new Box(900,320,50,50);
    pig1 = new Pig(800,350);
    log1 = new Log(800,260,250,PI)
    box3 = new Box(700,240,50,50);
    box4 = new Box(900,240,50,50);
    pig2 = new Pig(800,220)
    log2 = new Log(800,180,250,PI)
    box5 = new Box(800,160,50,50);
    log3 = new Log(750,120,125,-PI/6)
    log4 = new Log(850,1,125,PI/6)
    chain = new SlingShot(bird.body,{x:200, y: 100});
    
}

function draw(){
  
    if (backImg!==undefined){
        background(backImg);
    }
    else{
        background("black")
    }

    textSize(25)
    text("Score: "+score,1050,50)
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
    chain.display();
    
 
    

   
}

function mouseDragged(){
    if (gameState=="onSling"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
    
}
function mouseReleased(){
    chain.release();
    gameState = "launched";
}

function keyPressed(){

    if(keyCode==32){
        chain.back(bird.body)
        gameState = "onSling"
        bird.trajectory = []
        Matter.Body.setPosition(bird.body,{x:200,y:100})
    }
   
    
}
function reload(){
    location.reload();
}
async function getBackground(){
    
    let response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    let result = await response.json();
    let  datetime= result.datetime;
    let hour = datetime.slice(11,13);
    return hour

    
}