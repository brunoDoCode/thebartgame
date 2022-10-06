var bart;
var cj;
var wasalski;
var rosquinha;
var backgroundImage;
var startScreen;
var database;
var form, player

function preload() {
  backgroundImage = loadImage("assets/backgroundS.jpg"); //imagem para o fundo
  cj = loadImage("assets/cjobstacle.png");
  wasalski = loadImage("assets/wobstacle.png");
  bart = loadImage("assets/bartRacing.png");
  startScreen = loadImage("assets/start-page.gif");
  rosquinha = loadImage("assets/rosquinha.png");
}

function setup() {               
 canvas = createCanvas(windowWidth, windowHeight);
 database = firebase.database();
game = new Game();
game.start(); 


}

function draw() {
  background(startScreen);
 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
