const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
	
  base1=new Base1(300,random(450,600),180,150)
  player=new Player(285,base1.body.position.y-153,100,200)

  base2=new Base2(width-300,random(450,600),180,150)
  computer=new Player(width-280,base2.body.position.y-153,100,200)

}

function draw() {
  background(180);
  Engine.update(engine);
  
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  player.show()
  computer.show()
  base1.show()
  base2.show()
}
