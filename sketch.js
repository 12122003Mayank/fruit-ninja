var alien1;
var alien2;
var fruit1;
var fruit2;
var fruit3;
var fruit4;
var fruits;
var gameover;
var sword,sword_image; 
var gameover;
var fruits_group;
var cutsound;
var gamestate="play";
var survival_time=100;
var aliens;
function preload()
{
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");        
  fruit3=loadImage("fruit3.png");  
  fruit4=loadImage("fruit4.png");
  alien1=loadImage("alien1.png");
  alien2=loadImage("alien2.png");
  sword_image=loadImage("sword.png");
  gameover_image=loadImage("gameover.png");
  cutsound=loadSound("knifeSwooshSound.mp3");
  gameover_sound=loadSound("gameover.mp3");
}
function setup()
{
  createCanvas(400,400);
  sword=createSprite(200,200,10,10);
  sword.addAnimation("Mayank",sword_image);
  fruits_group=createGroup();
  aliens_group=createGroup();
  gameover=createSprite(200,200,10,10);
  gameover.addAnimation("Mayank",gameover_image) 
  gameover.scale=0.5;
  
}
function draw()
{
 background("white");
  text("Survival time"+survival_time,300,30)
  if(gamestate=="play")
    {
      sword.x=mouseX;
      sword.y=mouseY;
      populate_fruits();
      populate_aliens();
      gameover.visible=false;
      survival_time-=0.2;
      if(survival_time==0)
        {
          gamestate="end";
        }
      if(fruits_group.isTouching(sword))
    {
      fruits_group.destroyEach();
      survival_time+=10;
    }
     if(aliens_group.isTouching(sword))
       {
         aliens_group.destroyEach();
         gamestate="end";
       }
    }
  if (gamestate=="end")
    {
      gameover.visible=true;
      sword.visible=false;
    }
drawSprites()   
}
function populate_fruits()  
  {
 if(frameCount%60==0)
  {
  var a;
  fruits=createSprite(390,170,10,10);
  fruits.scale=0.2;
  fruits.y=Math.round(random(20,350))  
  var a=Math.round(random(1,4))
  switch(a)
    {
        case 1:fruits.addImage("mayank",fruit1);
               break;
        case 2:fruits.addImage("mayank",fruit2);
               break; 
        case 3:fruits.addImage("mayank",fruit3);
               break;
        case 4:fruits.addImage("mayank",fruit4);
               break;
    }
  fruits.velocityX=-15;
  fruits.lifetime =120;
  fruits_group.add(fruits);  
  }  
  }  
function populate_aliens()
{
  if(frameCount%60==0)
    {
  aliens=createSprite(390,170,10,10)
  aliens.scale=1;
  var b=Math.round(random(1,2))
  switch(b)
    {
      case 1:aliens.addImage("mayank",alien1)
             break;
      case 2:aliens.addImage("mayank",alien2) 
             break;
    }
  aliens.velocityX=-15;
  aliens.y=Math.round(random(0,330))
  aliens_group.add(aliens);    
    }
}