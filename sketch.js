const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	
	

	var ball_options = {
		restitution: 0.95,
    isStatic:true,
	  }

	bob1 = Bodies.circle(315,250,15,ball_options);
	World.add(world,bob1);


	var options = {
		restitution: 0.95,
		isStatic:true,
		stiffness:0.1,
	  }

	bob2 = Bodies.circle(365,250,15,options);
  World.add(world,bob2);


  var options = {
    restitution: 0.95,
    isStatic:true,
  }

 bob3 = Bodies.circle(415,250,15,options);
  World.add(world,bob3);


  var options = {
    restitution: 0.95,
    isStatic:true,
  }

  bob4 = Bodies.circle(465,250,15,options);
  World.add(world,bob4);


  var options = {
    restitution: 0.95,
    isStatic:true,
  }

  bob5 = Bodies.circle(510,250,15,options);
  World.add(world,bob5);

  var options={
	pointA:{ x: 600, y: 100},
	bodyB:bob1,
	pointB:{x:0,y:0},
	length:90,
	stiffness:0.1,
   }
            
  con =Matter.Constraint.create(options);
  World.add(world, con);
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y)
  line(con.pointA.x,con.pointA.y,bob2.position.x,bob2.position.y)
  line(con.pointA.x,con.pointA.y,bob3.position.x,bob3.position.y)
  line(con.pointA.x,con.pointA.y,bob4.position.x,bob4.position.y)
  line(con.pointA.x,con.pointA.y,bob5.position.x,bob5.position.y)
  //call display() to show ropes here
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);
 
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function vForce()
{
  
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  