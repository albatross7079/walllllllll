
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(400,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  BulletSpeed = random(223,321);
  BulletWeight = random(30,52);
  thickness = random(22,83);
 
  function draw() {
  background(0);  
  
  car.velocityX = speed;
  
  hasCollided(bullet,wall);
  
  if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = (0.5*weight*speed*speed/(thickness*thickness*thickness))

  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }
  
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
}
}
  drawSprites();
}

   