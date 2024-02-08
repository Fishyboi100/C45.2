var backgroundImg,background
var car,carImg
var cone,coneImg
var finishLine,finishLineImg

function preload(){
 backgroundImg = loadImage("Road.png")
 carImg = loadImage("car2.png")
 coneImg = loadImage("Cone.jpg")
 
}

function setup(){
 createCanvas(600,600)
 background = createSprite(300,300)
 background.addImage("background",backgroundImg);



 car = createSprite(300,550)
 car.addImage("car",carImg)
 car.scale = 0.05
 
 
}

function draw(){
  if(keyIsDown(UP_ARROW)){
    car.y = car.y - 3
   }
   if(keyIsDown(RIGHT_ARROW)){
    car.x = car.x + 3
   }
   if(keyIsDown(LEFT_ARROW)){
    car.x = car.x - 3
   }

  drawSprites()
}




























