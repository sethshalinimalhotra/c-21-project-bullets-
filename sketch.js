var bullet , wall,thickness;
var speed , weight;
var damage = 0;
function setup() {
  createCanvas(1600,400);
  //generating random speed and weight 
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  //creating car and wall
  bullet = createSprite(50,200,10,50);
  bullet.shapeColor = "grey"
  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  bullet.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  
  //bullet hits the wall
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness);
    if(damage > 10)
    {
      wall.shapeColor = rgb(255,0,0);
    }
    else if(damage< 10 )
    {
      wall.shapeColor = rgb(0,255,0);
    }

  }
  
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  var bulletRE = lbullet.x + lbullet.width/2;
  var wallLE = lwall.x - lwall.width/2 ;
  if(bulletRE >=wallLE)
  {
    return true;
  }
  else
    return false;
}