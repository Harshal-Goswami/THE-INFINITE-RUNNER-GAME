var PLAY = 1;
var END = 0;
var gameState = PLAY;

var SuperHero  , SuperHeroImage;
var DrOctopus , DrOctopusImage;
var gameOver , gameOverImage;
var restart , restartImage;

function preload(){
  SuperHeroImage = loadImage("IMAGES/SPIDER-MAN.png");
  DrOctopusImage = loadImage("IMAGES/DOCTOR OCTOPUS.png");
  gameOverImage = loadImage("IMAGES/gameOver.png");
  restartImage = loadImage("IMAGES/restart.png");
}

function setup() {
  createCanvas(800,400);
  SuperHero = createSprite(400, 200, 50, 50);
  SuperHero.addImage(SuperHeroImage);
  SuperHero.scale = 0.1;

  DrOctopus = createSprite(700 , 200 , 50 , 50);
  DrOctopus.addImage(DrOctopusImage);
  DrOctopus.scale = 0.4;

  restart = createSprite(400 , 500 , 50 , 50);
  restart.addImage(restartImage);
  restart.scale = 0.1
}

function draw() {
  background(255,255,255);
  if(gameState === PLAY){
    if(keyDown("RIGHT_ARROW")){
      SuperHero.velocityX = 2;
    }
    if(keyDown("LEFT_ARROW")){
      SuperHero.velocityX = -2;
    }
    if(keyDown("UP_ARROW")){
      SuperHero.velocityY = -2;
    }
    if(keyDown("DOWN_ARROW")){
      SuperHero.velocityY = 2;
    }
  }

if(gameState === END){
  SuperHero.setVelocity(0);
    if(SuperHero.isTouching(DrOctopus)){
    gameOver = createSprite(400 , 400);
    gameOver.addImage(gameOverImage);
    gameOver.scale = 0.4;
    gameOver.visibile = true;
  }
}
if(restart.mousePressed){
  gamestate === PLAY;
}

  drawSprites();
}

function Restart(){
  if(restart.mousePressed){
    gamestate === PLAY;
    gameOver.visibile = false;
  }
}