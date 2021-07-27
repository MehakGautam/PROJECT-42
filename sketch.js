
var bg;

var spaceCraft,spaceCraftImg;


//movingCraft which is moving left right up down
var movingCraft,movingCraftImg,movingCraftUp,movingCraftDown,movingCraftLeft,movingCraftRight;


function preload(){
  bg=loadImage("spacebg.jpg");

  spaceCraftImg=loadImage("iss.png");

//movingCraft which is moving left right up down
  movingCraftImg=loadImage("spacecraft1.png");

  movingCraftUp=loadImage("spacecraft2.png");
  
  movingCraftDown=loadImage("spacecraft1.png");

  movingCraftLeft=loadImage("spacecraft3.png");

  movingCraftRight=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,500);


  //movingCraft which is moving left right up down
 movingCraft= createSprite(400, 400, 50, 50);
 movingCraft.addImage(movingCraftImg);
 movingCraft.scale=0.2;



 spaceCraft= createSprite(400, 200, 50, 50);
 spaceCraft.addImage(spaceCraftImg);
 spaceCraft.scale=0.7;

}

function draw() {
  background(bg);  



  //assigning the different behaviors to the moving craft

  //moving up
  if(keyDown(UP_ARROW)){
    movingCraft.addImage(movingCraftUp);
    movingCraft.y=movingCraft.y-3;
  }

   //moving down
   if(keyDown(DOWN_ARROW)){
    movingCraft.addImage(movingCraftDown);
    movingCraft.y=movingCraft.y+3;
  }

  //moving left
  if(keyDown(LEFT_ARROW)){
    movingCraft.addImage(movingCraftLeft);
    movingCraft.x=movingCraft.x-3;
  }

   //moving right
   if(keyDown(RIGHT_ARROW)){
    movingCraft.addImage(movingCraftRight);
    movingCraft.x=movingCraft.x+3;
  }  


  if(movingCraft.y <= 296 && movingCraft.x <= 350){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful !!!", 250, 400);
  }

  drawSprites();
}