var player, playerImg;
var ball, ballImg;
var backGround, backGroundImg;
var player1, player1Img;
var score = 0;
var score1 = 0;


function preload() {
  ballImg = loadImage("download.png");
  backGroundImg = loadImage("images.png");
  playerImg = loadImage("images1.jpeg");
  player1Img = loadImage("images.jpeg");
}

function setup() {
  createCanvas(600, 400);

  backGround = createSprite(300, 208, 600, 400);
  backGround.addImage(backGroundImg);
  backGround.scale = 2.3;

  ball = createSprite(300, 190, 10, 10);
  ball.addImage(ballImg);
  ball.scale = 0.2;

  player = createSprite(61, 190, 20, 20);
  player.addImage(playerImg);
  player.scale = 0.3;

  player1 = createSprite(539, 190, 20, 20);
  player1.addImage(player1Img);
  player1.scale = 0.3;

  
  var GAMEOVER = createSprite(300,200,20,20);
}

function draw() {
  background(0);
  
  if (keyDown("w")) {
    player.y = player.y - 3;
  }
  if (keyDown("s")) {
    player.y = player.y + 3;
  }
  if (keyDown("a")) {
    player.x = player.x - 3;
  }
  if (keyDown("d")) {
    player.x = player.x + 3;
  }

  if (keyDown("up")) {
    player1.y = player1.y - 3;
  }
  if (keyDown("down")) {
    player1.y = player1.y + 3;
  }
  if (keyDown("left")) {
    player1.x = player1.x - 3;
  }
  if (keyDown("right")) {
    player1.x = player1.x + 3;
  }

  if (ball.x > 539) {
   score = score + 1;
  }
  
  textSize(20);
  text(score,61, 375);
  text(score1,539,375);

  player.displace(ball);
  player1.displace(ball);
  drawSprites();
}
