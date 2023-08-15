var bomb,bombimg
var bones,bonesimg
var gold,goldimg
var ground,groundimg
var hook,hookimg
var rock,rockimg
var truck,truckimg
var score = 0
function preload(){
 bombimg=loadImage("bomb.png")
 goldimg=loadImage("gold.png")
 bonesimg=loadImage("bones.png")
 groundimg=loadImage("ground.jpg")
 hookimg=loadImage("hook.png")
 rockimg=loadImage("rock.png")
 truckimg=loadImage("truck.png")
}

function setup(){
  createCanvas(1200,700)
  truck=createSprite(600,200)
  truck.addImage(truckimg)
  truck.scale=.3

  hook=createSprite(600,0)
  hook.addImage(hookimg)
  
goldgroup=new Group()
bonesgroup=new Group()
rockgroup=new Group()
bombgroup=new Group()
 
}

function draw(){
  background(groundimg);

Bones()
 Gold()
 Rock() 
 Bomb()

 if(keyDown("left")){
truck.position.x-=2
 }

 if(keyDown("right")){
  truck.position.x+=2
   }

   if(keyDown("right")){
    hook.position.x+=2
     }

     if(keyDown("left")){
      hook.position.x-=2
       }

 if(keyDown("down")){
  hook.velocityY+=2
 }
if(hook.y>450){
  hook.velocityY=0
}
if(hook.isTouching(goldgroup)){
  score+=1
  goldgroup.destroyEach()
  hook.velocityY=0
}
drawSprites()

textSize(40)
text("Score: "+score,50,100)
}

function Bomb()
{
  if(frameCount%50==0){
    bomb=createSprite(random(100,1100),random(350,680),10,10)
    bomb.addImage(bombimg)
    bomb.scale=0.2
    bombgroup.add(bomb)
  }
}

function Rock()
{
  if(frameCount%50==0){
    rock=createSprite(random(100,1100),random(350,680),10,10);
    rock.addImage(rockimg)
    rock.scale=0.3
    rockgroup.add(rock)
  }
}

function Bones()
{
  if(frameCount%50==0){
    bones=createSprite(random(100,1100),random(350,680),10,10);
    bones.addImage(bonesimg)
    bones.scale=0.3
    bonesgroup.add(bones)
  }
}

function Gold()
{
  if(frameCount%50==0){
    gold=createSprite(random(100,1100),random(350,680),10,10);
    gold.addImage(goldimg)
    gold.scale=0.2
    goldgroup.add(gold)
  }

}
