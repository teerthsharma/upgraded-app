var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  // track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/earth.jpg");
  car2_img = loadImage("../images/piston star.jpg");
  car3_img = loadImage("../images/arrow of time.jpg");
   car4_img = loadImage("../images/sun.jfif");
   sunD_img=loadImage("../images/sunD.jfif")
  // ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(0)
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //  if(gameState === 2){
    
  // }
}
