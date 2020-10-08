const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18;
var hitter;
var slingdy;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1300,700);

  //hitter
  hitter = createSprite(100, 220, 50);
  //first ground base objects
  block1 = new box(330, 255, 30, 40);
  block2 = new box(360, 255, 30, 40);
  block3 = new box(390, 255, 30, 40);
  block4 = new box(420, 255, 30, 40);
  block5 = new box(450, 255, 30, 40);
  //first ground second level base objects
  block6 = new box(360, 215, 30, 40);
  block7 = new box(390, 215, 30, 40);
  block8 = new box(420, 215, 30, 40);
  //first ground third base and last block
  block9 = new box(390, 175, 30, 40);

  //second ground base objects
  block10 = new box(630, 255, 30, 40);
  block11 = new box(660, 255, 30, 40);
  block12 = new box(690, 255, 30, 40);
  block13 = new box(720, 255, 30, 40);
  block14 = new box(750, 255, 30, 40);
  //second ground second level base objects
  block15 = new box(660, 215, 30, 40);
  block16 = new box(690, 215, 30, 40);
  block17 = new box(720, 215, 30, 40);
  //second ground third base and final block
  block18 = new box(690, 175, 30, 40);

  //both the grounds
  ground1 = new ground(390, 275, 180, 10);
  ground2 = new ground(690, 275, 180, 10);
 
  //time to add the slingshot
  slingdy = new slingshot(hitter.body, {x:100, y:220});
}

function draw() {
  background("black");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  ground1.display();
  ground2.display();

  slingdy.display();
  drawSprites();

}
function mouseDragged(){
	Matter.Body.setPosition(hitter.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingdy.fly();
}

function keyPressedXD(){
	if( keyCode === 32){
		Matter.Body.setPosition(hitter.body, {x: 235, y:420});
	  slingdy.attach(hitter.body);
	}
}

function detectcollision(ahitter, atarget){
	targetBodyPosition = atarget.body.position;
	hitterBodyPosition = ahitter.body.position;
	
	var distanshe = dist(hitterBodyPosition.x, hitterBodyPosition.y, targetBodyPosition.x, targetBodyPosition.y);
	if(distanshe<=atarget.radius+ahitter.radius){
		Matter.Body.setStatic(atarget.body, false);
	}
}
