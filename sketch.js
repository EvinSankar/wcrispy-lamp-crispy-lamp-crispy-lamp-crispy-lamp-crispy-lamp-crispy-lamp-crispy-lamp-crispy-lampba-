var block
var ground
var badblock //lol
var play=69
var end=45
var gamestate=play






function preload(){
createCanvas(600,200);
block=createSprite(50,160,20,50);
ground=createSprite(49,159,19,49)
block.debug=true
}

function setup() {
drawSprites();
if(blockisTouching(ground))
  
}

function draw() {
 ground.visible=false

}