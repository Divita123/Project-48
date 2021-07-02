var bg,bg2,form,system,code,security;
var count=0;
var sound1, backGround;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var distance;
var points = 0;
var me,shoot,shoot2;
var chance = 50;
var chooser;
var aliensGroup;   
var aliensGroup3;   
var aliensGroup2;   
var aliensGroup4; 
var shootGroup;
var replay;
var coin;
var coinGroup1,coinGroup2,coinGroup3,coinGroup4;
var spawnCoin1,spawnCoin2,spawnCoin3,spawnCoin4;
var re1,re2,re3,re4,re5,re6;
var good,great,excellent,unimaginable,incredible,amaz;

function preload() {
  bullet = loadImage("bullet.png");
  bullet2 = loadImage("bullet2.png");
  bullet3= loadImage("bullet3.png");
  bullet4 = loadImage("bullet4.png");
  bullet5 = loadImage("bullet5.png");
  bullet6 = loadImage("bullet6.png");

  e=loadImage("e.png");
  g=loadImage("g.png");
  gr=loadImage("gr.png");
  a=loadImage("a.png");
  imagine=loadImage("imagine.png");
  lose=loadSound("losing.wav");
  i=loadImage("in.png");
  so1 = loadSound("so1.mp3");
  so2 = loadSound("so2.mp3");
  so4 = loadSound("so4.wav");
  bg= loadImage("start.png");
  bg3= loadImage("start2.png");
  bg2=loadImage("bg.jpg");
  i1=loadAnimation("1.png");
  i2=loadAnimation("2.png");
  i3=loadAnimation("3.png");
  i4=loadAnimation("4i.png","44.png","44.png","44.png","44.png","44.png");
  i5=loadAnimation("5.png","5i.png","5i.png","5i.png","5i.png","5i.png");
  i6=loadAnimation("6.png","6i.png","6i.png","6i.png","6i.png","6i.png");
  alien1=loadImage("B1.png");
  alien2=loadImage("bi.png");
  alien3=loadImage("a1.png");
  alien4=loadImage("a1.png");
  alien5=loadImage("a1.png");
  again=loadImage("again.png");
  c_img=loadAnimation("c1.png","c2.png","c3.png","c4.png","c5.png","c6.png","c7.png","c8.png","c9.png","c10.png","c11.png");
}

function setup() {
  createCanvas(1000,688);
  security = new Security();
  system = new System();


  shootGroup = new Group();
  shootGroup2 = new Group();
  shootGroup3 = new Group();
  shootGroup4 = new Group();
  shootGroup5 = new Group();
  shootGroup6 = new Group();

  aliensGroup = new Group();
  aliensGroup2 = new Group();
  aliensGroup3 = new Group();
  aliensGroup4 = new Group();
  coinGroup1 = new Group();
  coinGroup2 = new Group();
  coinGroup3 = new Group();
  coinGroup4 = new Group();
  coinGroup5 = new Group();
  coinGroup6 = new Group();
  coinGroup7 = new Group();
  coinGroup8 = new Group();

   scroller = createSprite(400, 300, 50, 50);
   scroller.addImage(bg2);
   scroller.scale=1.2;

me = createSprite(480,600,20,20);
me.addAnimation("i1",i1);
me.addAnimation("i2",i2);
me.addAnimation("i3",i3);
me.addAnimation("i4",i4);
me.addAnimation("i5",i5);
me.addAnimation("i6",i6);
me.scale=0.35;
me.debug=false;
me.setCollider("circle",0,0,200);

  backGround2 = createSprite(500, 344, 50, 50);
  backGround2.addImage(bg);
  backGround2.scale=0.85;

  replay = createSprite(500, 0-500, 50, 50);
  replay.addImage(bg3);
  replay.scale=0.80;

   re1 = createSprite(250,130,60,25);
  re1.visible=false;
   re2 = createSprite(235+300,120,60,25);
  re2.visible=false;
   re3 = createSprite(835,130,60,25);
  re3.visible=false;
   re4 = createSprite(260,415,60,25);
  re4.visible=false;
   re5 = createSprite(235+300,400,60,25);
  re5.visible=false;
   re6 = createSprite(835,415,60,25);
  re6.visible=false;

    
  excellent=createSprite(235+300,60,20,20);
  excellent.visible=false;
  excellent.addImage(e);
  excellent.scale=0.5;

  amaz=createSprite(235+300,60,20,20);
  amaz.visible=false;
  amaz.addImage(a);
  amaz.scale=0.5;

  great=createSprite(235+300,100,20,20);
  great.addImage(gr);
  great.scale=0.5;
  great.visible=false;

  unimaginable=createSprite(235+300,100,20,20);
  unimaginable.addImage(imagine);
  unimaginable.scale=0.5;
  unimaginable.visible=false;

  incredible=createSprite(235+300,100,20,20);
  incredible.addImage(i);
  incredible.scale=0.5;
  incredible.visible=false;

  good=createSprite(235+300,300,20,20);
  good.addImage(g);
  good.visible=false;
  good.scale=0.5;

deadline = createSprite(500,700,4000,20);
deadline.visible=false;

distance=0;
so2.loop();
}

function draw() {
  background(0);
  security.display();
  textSize(0.5);
  fill("white");
  text("Count: " + count, 0, 125);  

  if(count === 1) {
    backGround2.destroy();
    clear()
    background(bg2);
  me.changeAnimation("i1",i1);
 }
  if(count === 2) {
    backGround2.destroy();
    clear() 
    background(bg2);
    me.changeAnimation("i2",i2); 
  }
  if(count === 3) {
    backGround2.destroy();
    clear() 
    background(bg2);
    me.changeAnimation("i3",i3); }
    if(count === 4) {
      backGround2.destroy();
      clear()
      background(bg2);
    me.changeAnimation("i4",i4); }
    if(count === 5) {
      backGround2.destroy();
      clear() 
      background(bg2);
      me.changeAnimation("i5",i5); 
    }
    if(count === 6) {
      backGround2.destroy();
      clear() 
      background(bg2);
      me.changeAnimation("i6",i6); }
      
 if(count>0 && gameState === PLAY ){

 

  if(distance > 1000){
    good.visible=true;

  }
  if(distance > 1500){
    good.visible=false;

  
  }
  if(distance > 5000){
    great.visible=true;
  }
  if(distance > 5500){
    great.visible=false;
  }
  if(distance > 10000){
    excellent.visible=true;
  }
 
  if(distance > 10500){
    excellent.visible=false;
  }
  if(distance > 15000){
    amaz.visible=true;
  }
  if(distance > 15500){
    amaz.visible=false;
  }
  if(distance > 20000){
    incredible.visible=true;

  }
  if(distance > 20500){
    incredible.visible=false;

  }
  if(distance > 25000){
    unimaginable.visible=true;

  }
  if(distance > 25500){
    unimaginable.visible=false;

  }
  distance = distance + Math.round(frameCount/60);
  if(chooser===1){
    me.changeAnimation("i4",i4);

  }
  
  if(chooser===2){
    me.changeAnimation("i6",i6);
   
  }
  
  if(chooser===3){
    me.changeAnimation("i2",i2);
    
  }
  
  if(chooser===4){
    me.changeAnimation("i1",i1);
    
  }
  
  if(chooser===5){
    me.changeAnimation("i5",i5);
   
  }
  
  if(chooser===6){
    me.changeAnimation("i3",i3);
  
  }
 

  if(aliensGroup.isTouching(deadline)){
    aliensGroup.destroyEach(0);
    chance=chance-1
  }

  if(aliensGroup2.isTouching(deadline)){
    aliensGroup2.destroyEach(0);
    chance=chance-1
  }
  if(aliensGroup3.isTouching(deadline)){
    aliensGroup3.destroyEach(0);
    chance=chance-1
  }
  if(aliensGroup4.isTouching(deadline)){
    aliensGroup4.destroyEach(0);
    chance=chance-1
  }

  spawnAliens();
  spawna1();
  spawna2();
  spawna3();
  spawnCoin1();
  spawnCoin2();
  spawnCoin3();
  spawnCoin4();
  spawnCoin5();
  spawnCoin6();
  spawnCoin7();
  spawnCoin8();

//so2.play();
  scroller.velocityY = 5; 
  if(scroller.y>1900){
    scroller.y=200;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    me.x += 17
  
  
}
if (keyIsDown(LEFT_ARROW)) {
    me.x -= 17
  
}



if(keyDown("space")&& count===1){  
  createShoot();
  so1.play();
  } 
 
if(keyDown("space")&& count===2){  
  createShoot2();
  so1.play();
  } 
  
if(keyDown("space")&& count===3){  
  createShoot3();
  so1.play();
  } 
  
if(keyDown("space")&& count===4){  
  createShoot4();
  so1.play();
  } 
  
if(keyDown("space")&& count===5){  
  createShoot5();
  so1.play();
  } 
  
if(keyDown("space")&& count===6){  
  createShoot6();
  so1.play();
  } 


  

if(keyDown("space")&& chooser===1){  
  createShoot();
  so1.play();
  } 
 
if(keyDown("space")&& chooser===2){  
  createShoot2();
  so1.play();
  } 
  
if(keyDown("space")&& chooser===3){  
  createShoot3();
  so1.play();
  } 
  
if(keyDown("space")&& chooser===4){  
  createShoot4();
  so1.play();
  } 
  
if(keyDown("space")&& chooser===5){  
  createShoot5();
  so1.play();
  } 
  
if(keyDown("space")&& chooser===6){  
  createShoot6();
  so1.play();
  } 
  if(coinGroup1.isTouching(me) || coinGroup2.isTouching(me) || coinGroup3.isTouching(me) || coinGroup4.isTouching(me) || coinGroup5.isTouching(me) || coinGroup6.isTouching(me) || coinGroup7.isTouching(me) || coinGroup8.isTouching(me)){
    points=points+1;
    so4.play();

  }
  if(coinGroup1.isTouching(me)) {
    coinGroup1.destroyEach(0);
    
  }
  if(coinGroup2.isTouching(me)) {
    coinGroup2.destroyEach(0);
  }
  if(coinGroup3.isTouching(me)) {
    coinGroup3.destroyEach(0);
  }
  if(coinGroup4.isTouching(me)) {
    coinGroup4.destroyEach(0);
  }
  if(coinGroup5.isTouching(me)) {
    coinGroup5.destroyEach(0);
  }
  if(coinGroup6.isTouching(me)) {
    coinGroup6.destroyEach(0);
  }
  if(coinGroup7.isTouching(me)) {
    coinGroup7.destroyEach(0);
  }
  if(coinGroup8.isTouching(me)) {
    coinGroup8.destroyEach(0);
  }
    if (shootGroup.isTouching(aliensGroup)) {
      aliensGroup.destroyEach(0);
      shootGroup.destroyEach(0);}

  if (shootGroup.isTouching(aliensGroup2)) {
        aliensGroup2.destroyEach(0);
        shootGroup.destroyEach(0);}

  if (shootGroup.isTouching(aliensGroup3)) {
          aliensGroup3.destroyEach(0);
          shootGroup.destroyEach(0);}

        
    
  if (shootGroup.isTouching(aliensGroup4)) {
            aliensGroup4.destroyEach(0);
            shootGroup.destroyEach(0);}
            if (shootGroup2.isTouching(aliensGroup)) {
              aliensGroup.destroyEach(0);
              shootGroup2.destroyEach(0);}
          
          if (shootGroup2.isTouching(aliensGroup2)) {
                aliensGroup2.destroyEach(0);
                shootGroup2.destroyEach(0);}
          
          if (shootGroup2.isTouching(aliensGroup3)) {
                  aliensGroup3.destroyEach(0);
                  shootGroup2.destroyEach(0);}
          
                
            
          if (shootGroup2.isTouching(aliensGroup4)) {
                    aliensGroup4.destroyEach(0);
                    shootGroup2.destroyEach(0);}
                    if (shootGroup3.isTouching(aliensGroup)) {
                      aliensGroup.destroyEach(0);
                      shootGroup3.destroyEach(0);}
                  
                  if (shootGroup3.isTouching(aliensGroup2)) {
                        aliensGroup2.destroyEach(0);
                        shootGroup3.destroyEach(0);}
                  
                  if (shootGroup3.isTouching(aliensGroup3)) {
                          aliensGroup3.destroyEach(0);
                          shootGroup3.destroyEach(0);}
                  
                        
                    
                  if (shootGroup3.isTouching(aliensGroup4)) {
                            aliensGroup4.destroyEach(0);
                            shootGroup3.destroyEach(0);}

                            if (shootGroup4.isTouching(aliensGroup)) {
                              aliensGroup.destroyEach(0);
                              shootGroup4.destroyEach(0);}
                          
                          if (shootGroup4.isTouching(aliensGroup2)) {
                                aliensGroup2.destroyEach(0);
                                shootGroup4.destroyEach(0);}
                          
                          if (shootGroup4.isTouching(aliensGroup3)) {
                                  aliensGroup3.destroyEach(0);
                                  shootGroup4.destroyEach(0);}
                          
                                
                            
                          if (shootGroup4.isTouching(aliensGroup4)) {
                                    aliensGroup4.destroyEach(0);
                                    shootGroup4.destroyEach(0);}
                    
                                    
                                    if (shootGroup5.isTouching(aliensGroup)) {
                                      aliensGroup.destroyEach(0);
                                      shootGroup5.destroyEach(0);}
                                  
                                  if (shootGroup5.isTouching(aliensGroup2)) {
                                        aliensGroup2.destroyEach(0);
                                        shootGroup5.destroyEach(0);}
                                  
                                  if (shootGroup5.isTouching(aliensGroup3)) {
                                          aliensGroup3.destroyEach(0);
                                          shootGroup5.destroyEach(0);}
                                  
                                        
                                    
                                  if (shootGroup5.isTouching(aliensGroup4)) {
                                            aliensGroup4.destroyEach(0);
                                            shootGroup5.destroyEach(0);}    
                                            
                                            

                                            if (shootGroup6.isTouching(aliensGroup)) {
                                              aliensGroup.destroyEach(0);
                                              shootGroup6.destroyEach(0);}
                                          
                                          if (shootGroup6.isTouching(aliensGroup2)) {
                                                aliensGroup2.destroyEach(0);
                                                shootGroup6.destroyEach(0);}
                                          
                                          if (shootGroup6.isTouching(aliensGroup3)) {
                                                  aliensGroup3.destroyEach(0);
                                                  shootGroup6.destroyEach(0);}
                                          
                                                
                                            
                                          if (shootGroup6.isTouching(aliensGroup4)) {
                                                    aliensGroup4.destroyEach(0);
                                                    shootGroup6.destroyEach(0);}


if(chance===0){
  gameState=END;

}
          if(aliensGroup.isTouching(me) ||aliensGroup2.isTouching(me)|| aliensGroup3.isTouching(me) ||aliensGroup4.isTouching(me)  ){         
            gameState=END;
            lose.play();
          }
 }
 else if(gameState===END){
 so2.stop();
 chooser = 0;
good.visible=false;
great.visible=false;
excellent.visible=false;
amaz.visible=false;
incredible.visible=false;
unimaginable.visible=false;

// re1.visible=true;

// re2.visible=true;

// re3.visible=true;

// re4.visible=true;

// re5.visible=true;

// re6.visible=true;

  replay.y=355;

if(replay.y>344){
  replay.velocityY=0;
}
if(replay.y>344 && replay.isTouching(aliensGroup4) ){
  aliensGroup4.destroyEach(0);
}
if(replay.y>344 && replay.isTouching(aliensGroup3) ){
  aliensGroup3.destroyEach(0);
}
if(replay.y>344 && replay.isTouching(aliensGroup2) ){
  aliensGroup2.destroyEach(0);
}
if(replay.y>344 && replay.isTouching(aliensGroup) ){
  aliensGroup.destroyEach(0);
}


if(mousePressedOver(re1)){
  me.changeAnimation("i4",i4);
  gameState=PLAY;
          distance=0;
          points=0;
          chance=50;
          replay.y=0-500;
          chooser = chooser + 1;}




if(mousePressedOver(re2)){
  me.changeAnimation("i6",i6);
  gameState=PLAY;
          distance=0;
          points=0;
          chance=50;
          replay.y=0-500;
          chooser = chooser + 2;}

if(mousePressedOver(re3)){
  me.changeAnimation("i2",i2);
  gameState=PLAY;
          distance=0;
          points=0;
          chance=50;
          replay.y=0-500;
          chooser = chooser + 3;}

if(mousePressedOver(re4)){
  me.changeAnimation("i1",i1);
  gameState=PLAY;
          distance=0;
          points=0;
          chance=50;
          replay.y=0-500;
          chooser = chooser + 4;}

if(mousePressedOver(re5)){
  me.changeAnimation("i5",i5);
  gameState=PLAY;
          distance=0;
          points=0;
          chance=50;
          replay.y=0-500;
          chooser = chooser + 5;}

if(mousePressedOver(re6)){
  me.changeAnimation("i3",i3);
  gameState=PLAY;
          distance=0;
          points=0;
          chance=50;
          replay.y=0-500;
          chooser = chooser + 6;}

scroller.velocityY=0;
console.log("GAME OVER");
aliensGroup.setLifetimeEach(-1);
aliensGroup2.setLifetimeEach(-1);
aliensGroup3.setLifetimeEach(-1);
aliensGroup4.setLifetimeEach(-1);
aliensGroup.setVelocityYEach(0);
aliensGroup2.setVelocityYEach(0);
aliensGroup3.setVelocityYEach(0);
aliensGroup4.setVelocityYEach(0);
coinGroup1.setLifetimeEach(-1);
coinGroup2.setLifetimeEach(-1);
coinGroup3.setLifetimeEach(-1);
coinGroup4.setLifetimeEach(-1);
coinGroup5.setLifetimeEach(-1);
coinGroup7.setLifetimeEach(-1);
coinGroup8.setLifetimeEach(-1);
coinGroup6.setLifetimeEach(-1);
coinGroup1.setVelocityYEach(0);
coinGroup2.setVelocityYEach(0);
coinGroup3.setVelocityYEach(0);
coinGroup4.setVelocityYEach(0);
coinGroup5.setVelocityYEach(0);
coinGroup7.setVelocityYEach(0);
coinGroup8.setVelocityYEach(0);
coinGroup6.setVelocityYEach(0);
     }
  drawSprites();
  createEdgeSprites();
  stroke("black");
  strokeWeight(3);
  textSize(20);
  fill("yellow");
  text("Distance: "+ distance, 0,70);
  stroke("black");
  strokeWeight(3);
  textSize(20);
  fill("yellow");
  text("Points:     "+ points, 0,90);
  stroke("black");
  strokeWeight(3);
  textSize(20);
  fill("yellow");
  text("Chance:     "+ chance, 0,110);


}
 
function createShoot() { 
  shoot= createSprite(0, 530, 5, 10);
  shoot.addImage(bullet);  
  shoot.x =me.x;
  shoot.velocityY = -20;
  shoot.scale = 0.2;
  shoot.lifetime = 400;
  shootGroup.add(shoot);
  } 
  
function createShoot2() { 
  shoot2= createSprite(0, 530, 5, 10);
  shoot2.addImage(bullet2);  
  shoot2.x =me.x;
  shoot2.velocityY = -20;
  shoot2.scale = 0.2;
  shoot2.lifetime = 400;
  shootGroup2.add(shoot2);
  } 
   
function createShoot3() { 
  shoot3= createSprite(0, 530, 5, 10);
  shoot3.addImage(bullet3);  
  shoot3.x =me.x;
  shoot3.velocityY = -20;
  shoot3.scale = 0.2;
  shoot3.lifetime = 400;
  shootGroup3.add(shoot3);
  } 
  
   
function createShoot4() { 
  shoot4= createSprite(0, 530, 5, 10);
  shoot4.addImage(bullet4);  
  shoot4.x =me.x;
  shoot4.velocityY = -20;
  shoot4.scale = 0.2;
  shoot4.lifetime = 400;
  shootGroup4.add(shoot4);
  } 
  
   
function createShoot5() { 
  shoot5= createSprite(0, 530, 5, 10);
  shoot5.addImage(bullet5);  
  shoot5.x =me.x;
  shoot5.velocityY = -20;
  shoot5.scale = 0.2;
  shoot5.lifetime = 400;
  shootGroup5.add(shoot5);
  } 
  
   
function createShoot6() { 
  shoot6= createSprite(0, 530, 5, 10);
  shoot6.addImage(bullet6);  
  shoot6.x =me.x;
  shoot6.velocityY = -20;
  shoot6.scale = 1;
  shoot6.lifetime = 400;
  shootGroup6.add(shoot6);
  } 
  
    function spawnAliens(){
      if (frameCount % 140 === 0){
        var alien = createSprite(500,0-200,10,40);
        alien.velocityY = 6;
        alien.setCollider("circle",0,0,this.radius);
        alien.x = Math.round(random(150,850));
         //generate random aliens
         var rand = Math.round(random(1,3));
         switch(rand) {
           case 1: alien.addImage(alien1);
                   break;
           case 2: alien.addImage(alien2);
                   break;
           case 3: alien.addImage (alien3);
                   break;
           case 4: alien.addImage (alien4);
                   break;
           case 5: alien.addImage (alien5);
                   break;
           default: break;
         }
        
                
          alien.scale = 0.50;
          alien.lifetime = 800;
        
        //add each alien to the group
         aliensGroup.add(alien);
      }
     }
     function spawna1(){
      if (frameCount % 140 === 0){
        var a1 = createSprite(500,0-100,10,40);
        a1.velocityY = 6;
        a1.setCollider("circle",0,0,this.radius);
        a1.x = Math.round(random(150,850));
         //generate random a1s
         var rand = Math.round(random(1,3));
         switch(rand) {
          case 1: a1.addImage(alien1);
                   break;
           case 2: a1.addImage(alien2);
                   break;
           case 3: a1.addImage (alien3);
                   break;
           case 4: a1.addImage (alien4);
                   break;
           case 5: a1.addImage (alien5);
                   break;
          
           default: break;
         }
        
                
          a1.scale = 0.50;
          a1.lifetime = 800;
        
        //add each a1 to the group
         aliensGroup2.add(a1);
      }
     }
     function spawna2(){
      if (frameCount % 140 === 0){
        var a2 = createSprite(500,0-300,10,40);
        a2.velocityY = 6;
        a2.setCollider("circle",0,0,this.radius);
        a2.x = Math.round(random(150,850));
         //generate random a2s
         var rand = Math.round(random(1,3));
         switch(rand) {
          case 1: a2.addImage(alien1);
          break;
  case 2: a2.addImage(alien2);
          break;
  case 3: a2.addImage (alien3);
          break;
  case 4: a2.addImage (alien4);
          break;
  case 5: a2.addImage (alien5);
                   break;
          
           default: break;
         }
        
                
          a2.scale = 0.50;
          a2.lifetime = 800;
        
        //add each a1 to the group
         aliensGroup3.add(a2);
      }
     }

     function spawna3(){
      if (frameCount % 140 === 0){
        var a3 = createSprite(500,0-400,10,40);
        a3.velocityY =6;
        a3.setCollider("circle",0,0,this.radius);
        a3.x = Math.round(random(150,850));
         //generate random a3s
         var rand = Math.round(random(1,3));
         switch(rand) {
          case 1: a3.addImage(alien1);
          break;
  case 2: a3.addImage(alien2);
          break;
  case 3: a3.addImage (alien3);
          break;
  case 4: a3.addImage (alien4);
          break;
  case 5: a3.addImage (alien5);
                   break;
          
           default: break;
         }
        
                
          a3.scale = 0.50;
          a3.lifetime = 800;
        
        //add each a1 to the group
         aliensGroup4.add(a3);
      }
     }
     function spawnCoin1(){
      if (frameCount % 200 === 0){
        var coin = createSprite(200,0-100,10,40);
        coin.velocityY = 8.5;
        coin.setCollider("circle",0,0,this.radius);
        coin.addAnimation("coin",c_img);
        
                
          coin.scale = 0.1;
          coin.lifetime = 500;
        
        //add each coin to the group
         coinGroup1.add(coin);
      }
     }
     function spawnCoin2(){
      if (frameCount % 200 === 0){
        var coin2 = createSprite(200,0-200,10,40);
        coin2.velocityY = 8.5;
        coin2.setCollider("circle",0,0,this.radius);
        coin2.addAnimation("coin",c_img);
        
                
          coin2.scale = 0.1;
          coin2.lifetime = 500;
        
        //add each coin2 to the group
         coinGroup2.add(coin2);
      }
     }
     function spawnCoin3(){
      if (frameCount % 200 === 0){
        var coin3 = createSprite(200,0-300,10,40);
        coin3.velocityY = 8.5;
        coin3.setCollider("circle",0,0,this.radius);
        coin3.addAnimation("coin",c_img);
        
                
          coin3.scale = 0.1;
          coin3.lifetime = 500;
        
       
         coinGroup3.add(coin3);
      }
     }
     function spawnCoin4(){
      if (frameCount % 200 === 0){
        var coin4 = createSprite(200,0-400,10,40);
        coin4.velocityY = 8.5;
        coin4.setCollider("circle",0,0,this.radius);
        coin4.addAnimation("coin",c_img);
        
                
          coin4.scale = 0.1;
          coin4.lifetime = 500;
        
        //add each a1 to the group
         coinGroup4.add(coin4);
      }
     }
     function spawnCoin5(){
      if (frameCount % 200 === 0){
        var coin5 = createSprite(700,0-500,10,40);
        coin5.velocityY = 8.5;
        coin5.setCollider("circle",0,0,this.radius);
        coin5.addAnimation("coin",c_img);
        
                
          coin5.scale = 0.1;
          coin5.lifetime = 500;
        
        //add each coin to the group
         coinGroup5.add(coin5);
      }
     }
     function spawnCoin6(){
      if (frameCount % 200 === 0){
        var coin6 = createSprite(700,0-600,10,40);
        coin6.velocityY = 8.5;
        coin6.setCollider("circle",0,0,this.radius);
        coin6.addAnimation("coin",c_img);
          coin6.scale = 0.1;
          coin6.lifetime = 500;
        
        //add each coin2 to the group
         coinGroup6.add(coin6);
      }
     }
     function spawnCoin7(){
      if (frameCount % 200 === 0){
        var coin7 = createSprite(700,0-700,10,40);
        coin7.velocityY = 8.5;
        coin7.setCollider("circle",0,0,this.radius);
        coin7.addAnimation("coin",c_img);
                
          coin7.scale = 0.1;
          coin7.lifetime = 500;
        
       
         coinGroup7.add(coin7);
      }
     }
     function spawnCoin8(){
      if (frameCount % 200 === 0){
        var coin8 = createSprite(700,0-800,10,40);
        coin8.velocityY = 8.5;
        coin8.setCollider("circle",0,0,this.radius);
        coin8.addAnimation("coin",c_img);   
          coin8.scale = 0.1;
          coin8.lifetime = 500;
        
        //add each a1 to the group
         coinGroup8.add(coin8);
      }
     }
     function reset (){
      so2.loop();  

      // if(mousePressedOver(re1)){
      //   me.changeAnimation("i4",i4);
        
      // }
      
      // if(mousePressedOver(re2)){
      //   me.changeAnimation("i2",i2);
      // }
      
      // if(mousePressedOver(re3)){
      //   me.changeAnimation("i3",i3);
      // }
      
      // if(mousePressedOver(re4)){
      //   me.changeAnimation("i4",i4);
        
      // }
      
      // if(mousePressedOver(re5)){
      //   me.changeAnimation("i5",i5);
      // }
      
      // if(mousePressedOver(re6)){
      //   me.changeAnimation("i6",i6);
      // }
      // re1.visible=false;

      // re2.visible=false;
      
      // re3.visible=false;
      
      // re4.visible=false;
      
      // re5.visible=false;
      
      // re6.visible=false;
          gameState=PLAY;
          distance=0;
          points=0;
          chance=50;
          replay.y=0-500;
          aliensGroup4.destroyEach();   
          aliensGroup3.destroyEach();   
          aliensGroup2.destroyEach();   
          aliensGroup.destroyEach();  
          shootGroup.destroyEach();
        
          coinGroup1.destroyEach();
          coinGroup2.destroyEach();
          coinGroup3.destroyEach();
          coinGroup4.destroyEach();
          coinGroup5.destroyEach();
          coinGroup6.destroyEach();
          coinGroup7.destroyEach();
          coinGroup8.destroyEach();
     }         
           