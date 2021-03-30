const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
var rope;
var hero;
var monster1;

function preload() {
//preload the images here
bg = loadImage("photoes/GamingBackground.jpg")

}

function setup() {
  createCanvas(2000, 800);

  engine = Engine.create();
  world = engine.world;
  // create sprites here

  hero = new Hero(150,150,200,100);

  rope = new SlingShot(hero.body, { x: 150, y: 150 });

  ground = new Ground(500,600,1000,20);

  monster1 = new Monster(650,0,200,200);

  box1 = new box(300,200,50,50);
  box2 = new box(350,200,50,50);
  box3 = new box(400,200,50,50);
  box4 = new box(450,200,50,50);
  box5 = new box(500,200,50,50);
  box6 = new box(550,200,50,50);
  box7 = new box(600,200,50,50);
  box8 = new box(650,200,50,50);
  box9 = new box(700,200,50,50);
  box10 = new box(750,200,50,50);
  box11 = new box(800,200,50,50);
  box12 = new box(850,200,50,50);
  box13 = new box(900,200,50,50);
  box14 = new box(950,200,50,50);

 
  box15 = new box(400,150,70,70);
  box16 = new box(475,150,70,70);
  box17 = new box(550,150,70,70);
  box18 = new box(625,150,70,70);
  box19 = new box(700,150,70,70);
  box20 = new box(775,150,70,70);
  box21 = new box(850,150,70,70);
  

  box22 = new box(525,100,70,70); 
  box23 = new box(600,100,70,70);
  box24 = new box(675,100,70,70);
  box25 = new box(750,100,70,70);
 
  box26 = new box(600,50,80,70);
  box27 = new box(680,50,80,70);

  box28 = new box(640,0,100,70);


}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();

  hero.display();

  monster1.display();

  //rope.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();



}

function mouseDragged(){
 // if (gameState!=="launched"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  rope.fly();
  //gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      //bird.trajectory =[];
      Matter.Body.setPosition(hero.body,{x:200,y:50});  
     rope.attach(hero.body);
  }
}

