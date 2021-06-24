const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,stand1, stand2, polygon,backgroundImg,holder;
var ground,polygon_img,slingShot;
var bg = "orange.jpg"
var score = 0;

function preload(){
  getBackgroundImg();
  polygon_img = ("Hexa2.jpg");

}

function setup() {
  createCanvas(900,400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
ground = new Ground();
stand1 = new Stand(390,300,250,10);
stand2 = new Stand(700,200,200,10);
block1 = new Block(330,235,30,40);
console.log(block1);
block2 = new Block(360,235,30,40);
block3 = new Block(390,235,30,40);
block4 = new Block(420,235,30,40);
block5 = new Block(450,235,30,40);
block6 = new Block(360,195,30,40);
block7 = new Block(390,195,30,40);
block8 = new Block(420,195,30,40);
block9 = new Block(390,155,30,40);
block10 = new Block(930,235,30,40);
block11 = new Block(960,235,30,40);
block12 = new Block(990,235,30,40);
block13 = new Block(1020,235,30,40);
block14 = new Block(1050,235,30,40);
block15 = new Block(960,195,30,40);
block16 = new Block(990,195,30,40);
block17 = new Block(1020,195,30,40);
block18 = new Block(990,155,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,this.polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200})


}

function draw() {
 if(backgroundImg)
 background(backgroundImg);

 //Engine.update(engine);

//Dragging and Releasing
textSize("20");
fill("red");
stroke("green");
text(mouseX+','+mouseY,10,15);

//second chance (space key)
text("press SPACE to get second chance",100,350);
textSize("20");
fill("pink");
stroke("blue");

//score
text("SCORE:"+score,750,40);
textSize("20");
fill("yellow");
stroke("purple");

ground.display();

stand1.display();
stand2.display();
fill("skyblue");

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("lightpink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("cyan");
block13.display();
block14.display();
block15.display();
fill("grey");
block16.display();
fill("yellow");
block17.display();
block18.display();

//Image
imageMode(CENTER);
image(polygon_img,this.polygon.position.x,this.polygon.position.y,40,40);

slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}


function keyPressed(){
   if(keyCode === 32){
     slingShot.attach(this.polygon);
   }
}



async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour >= 06 && hour <= 19){
    bg = "orange.jpg";
  }
  else{
    bg = "BlackBackground.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}





