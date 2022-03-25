const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var piso;
var corda;
var ovc;
var chave;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  piso = new Piso(200,690,600,20);
  corda = new Rope(6,{x:245,y:30});
  ovc = Bodies.circle(300,300,15);
  Matter.Composite.add(corda.body,ovc);
  chave = new Chave(corda,ovc); 
}

function draw() 
{
  background(51);
  Engine.update(engine);

  piso.exibir();
  corda.show();
  ellipse(ovc.position.x,ovc.position.y,15,15);
}




