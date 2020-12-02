const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
/*var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20*/
var ball1,ball12ball23ball34,ball5
var rope1,rope2,rope3,rope4,rope5

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;




   /* let canvasMouse = Mouse.Create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    let options = {
      mouse: canvasMouse
    }
    mConstraint = MouseConstraint.create(engine,options)
    world.add(world , mConstraint)*/
   // ground = new Ground(600,600,1500,20);
 /* box1 = new Box(900,100,70,70)
  box2 = new Box(900,100,70,70)
  box3 = new Box(900,100,70,70)
  box4 = new Box(900,100,70,70)
  box5 = new Box(900,100,70,70)
  box6 = new Box(900,100,70,70)
  box7 = new Box(800,100,70,70)
  box8 = new Box(800,100,70,70)
  box9 = new Box(800,100,70,70)
  box10 = new Box(800,100,70,70)
  box11 = new Box(800,100,70,70)
  box12 = new Box(800,100,70,70)
  box13 = new Box(700,100,70,70)
  box14 = new Box(700,100,70,70)
  box15 = new Box(700,100,70,70)
  box16 = new Box(700,100,70,70)
  box17 = new Box(700,100,70,70)
  box18 = new Box(700,100,70,70)
  box19 = new Box(700,100,70,70)
  box20 = new Box(700,100,70,70)*/
  
  ball1 = new Pendulam(480,270,200)
  ball2 = new Pendulam(560,270,200)
  ball3 = new Pendulam(640,270,200)
  ball4 = new Pendulam(720,270,200)
  ball5 = new Pendulam(800,270,200)


  rope1 = new Sling(ball1.body,{x:480,y:50})
  rope2 = new Sling(ball2.body,{x:560,y:50})
  rope3 = new Sling(ball3.body,{x:640,y:50})
  rope4 = new Sling(ball4.body,{x:720,y:50})
  rope5 = new Sling(ball5.body,{x:800,y:50})
   
}

function draw(){
     background(180);     
    Engine.update(engine);
 /* box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()*/

  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()

  rope1.display()
   rope2.display()
   rope3.display()
   rope4.display()
   rope5.display()

}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
