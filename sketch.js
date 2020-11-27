var sword;
var play=1;
var End=0;
var gameState=1;
var score=0;
function preload(){
swordImage=loadImage("sword.png");  
fruit1=loadImage("fruit1.png"); 
fruit2=loadImage("fruit2.png");
fruit3=loadImage("fruit3.png");
fruit4=loadImage("fruit4.png");
enemyImage=loadImage("alien1.png");
gameoverImage=loadImage("gameover.png");
knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
gameOver=loadSound("gameover.mp3");
}

function setup(){
createCanvas(400, 400);  

sword=createSprite(40,200) ; 
sword.addImage(swordImage);  
sword.scale=0.7;

fruitGroup=new Group();
enemyGroup=new Group();

}


function draw(){
background("lightblue");
  


  
  
  
 
if(gameState===play){
 sword.y=mouseY  
sword.x=mouseX

sword.setCollider("rectangle",0,0,40,40);  
  
  
 fruits();  
 Enemy(); 
  
if(fruitGroup.isTouching(sword)){
 fruitGroup.destroyEach(); 
 knifeSwooshSound.play()
  score=score+5;} 
  
if(sword.isTouching(enemyGroup)){
  gameOver.play()
  gameState=End;}  
  
}  
  
  
  
  
  
  
  
else if(gameState===End)
 {
      sword.addImage(gameoverImage);  
      sword.x=200;  
       sword.y=200;     
      fruitGroup.destroyEach(); 
      enemyGroup.destroyEach();  
      fruitGroup.setVelocityXEach(0);
      enemyGroup.setVelocityXEach(0);  
 } 

  
  drawSprites();
text("score: "+score,180,30)
}

function fruits(){
if(World.frameCount%80===0){
     fruit=createSprite(400,Math.round(random(50,340)),10,10); 
     fruit.scale=0.2; 
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    }else if(r==2){
      fruit.addImage(fruit2);
    }else if(r==3){
     fruit.addImage(fruit3); 
    }else{
     fruit.addImage(fruit4) ;
}

position=Math.round(random(1,2));
if(position==1)  
 {
   fruit.x=400; 
   fruit.velocityX=-(5+(score/4)); 
   fruit.setLifetime=100;
 } 
  else
  
  if(position==2){
    fruit.x=0;
    fruit.velocityX=(5+(score/10));
    fruit.setLifetime=100;
  }


   fruitGroup.add(fruit);

 }

}

function Enemy(){
if(World.frameCount%200===0){
  
    enemy=createSprite(400,Math.round(random(100,300)),
  20,20);
    enemy.addImage(enemyImage);

    pas=Math.round(random(1,2));  
    if(pas===1){
    enemy.x=400;  
    enemy.velocityX=-(7+(score/15));  
    enemy.Lifetime=10;
    }  
    else  
    if(pas==2){
      enemy.x=0;  
      enemy.velocityX=(8+(score/10));  
      enemy.setLifetime=50;
      
}  

  enemyGroup.add(enemy);
  
}
  
}




