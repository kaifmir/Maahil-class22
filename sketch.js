var canvas;


// namespacing 

const Engine =  Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
 var object;

function setup() {
  canvas = createCanvas(400,400);

 engine = Engine.create();
 world = engine.world;
 
//JSON 
var properties = {
  isStatic:true,
}


 object = Bodies.rectangle(200, 100, 50, 50, properties);
 World.add(world, object );





}

function draw() {

Engine.update(engine)
  background(255,255,255);  


  rect(object.position.x, object.position.y, 50, 50 );
  
}