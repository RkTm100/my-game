var cross,crossIMG;
var backgroundIMG;
var bad,good,badIMG,goodIMG;
var a,b,c,d,e,f;
var boop;
var bad1;
var depth;
var score=0;
var badGroup,bad1Group,goodGroup;
var act=0;

function preload(){
    crossIMG=loadImage("images/Cross-hairs.png")
    backgroundIMG=loadImage("images/background.png")
    badIMG=loadImage("images/Enemy Ship.png")
    goodIMG=loadImage("images/Civilian Ship.png")
}

function setup(){
    
createCanvas(1500,900)
boop=createSprite(800,400)
boop.addImage("city", backgroundIMG)
boop.scale=1.5

cross=createSprite(200,200)
cross.addImage("reticle",crossIMG)
cross.scale=0.2;
badGroup=new Group();
bad1Group=new Group();
goodGroup=new Group()
    
}

function draw(){
background(0);

if(frameCount%100===0){
a=Math.round(random(10,1700))
b=Math.round(random(10,800))
bad=createSprite(a,b)
bad.addImage("badship", badIMG)
bad.scale=0.19
bad.lifetime=50
badGroup.add(bad)
}
if(frameCount%300===0){
    c=Math.round(random(10,1700))
    d=Math.round(random(10,800))
    good=createSprite(c,d)
    good.addImage("goodship", goodIMG)
    good.scale=0.19
    good.lifetime=60
    goodGroup.add(good)

}
if(frameCount%200===0){
    e=Math.round(random(10,1700))
    f=Math.round(random(10,800))
    bad1=createSprite(e,f)
    bad1.addImage("badship", badIMG)
    bad1.scale=0.19
    bad1.lifetime=50
    bad1Group.add(bad1)
    }

   
    cross.x=World.mouseX
    cross.y=World.mouseY

    //bad.depth=cross.depth
   // bad1.depth=cross.depth
   // good.depth=cross.depth
    cross.depth=cross.depth+1;
  if(mousePressedOver(bad){
      score++;
  }
  
 drawSprites();
 fill("red")
text("Score: " + score,300,100)

}   


//function mouseClicked(){
//score=score+10;
//}




