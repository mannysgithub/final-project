// Created by Mannie Zetino and Lauren Hirt
// Last edited 3/9/2017
// Fortune Telling Game for 4 players
var players = ["Player 1", "Player 2", "Player 3", "Player 4"];

var page = 0;

var nouns = ["truck","pie","car","baseball","potato","banana","train","trash","lamp","chair","camera","sister","brother","mother","father","dog","snow","phone","toe","butt","box","book","montana","Seattle","kayak","park","capitol","president","desk","Hollywood","mountain","bicycle","television","soccer","cake"]
var adj = ["steep","woebegone","quaint","separate","longing","rich","majestic","dead","miscreant","free","freezing","psychedelic","light","macho","magical","brown","valuable","ordinary","homely","incredible","poor","curly","unusual","third"]
var adv = ["carefully", "adoringly", "competitively", "eagerly", "really", "quietly", "loyally", " quickly", "ruthlessly", "brutally", "cheerfully", "before", "never", "soon", "somewhere", "there", "upstairs", "extremely", "quite",  "very", "away"]
var verbs = ["admire", "annoy", "avoid", "beg", "bend", "care", "confide", "deceive", "dare", "envy", "exaggerate", "fear", "fix", "feel", "guess", "hand", "help", "hurry", "inspire", "interfere", "listen", "learn", "mail", "meet", "melt", "play", "promise", "pretend", "race", "recognize", "risk", "rush", "stop", "surprise", "tell", "twist", "understand", "utter", "warn", "whisper", "worry", "yell"]

var nounPPT = nouns[Math.floor(Math.random()*nouns.length)];  
var adjD = adj[Math.floor(Math.random()*adj.length)];
var advB = adj[Math.floor(Math.random()*adj.length)];  


//  Center of the canvas + Crystal ball
x = 450; 
y = 450;
w = 80;
y = 80;

// Make title scroll off the screen
var titleX = 450;

// "Start" waiting off screen
var startY = -450

// Player cards waiting off screen
var card1Y = -600
var card2X = 1500
var card3Y = 1500
var card4X = -600 

// Set up fortune text coordinates
player1X = 450
player1Y = 75
player2X = 750
player2Y = 300
player3X = 450
player3Y = 650
player4X = 150
player4Y = 300

// Set up table backgroud
var table;
function preload()  {
  table = loadImage("cloth.jpg");
}

function setup() {
  createCanvas(900, 900);
}


 
function draw() {
  // draw table cloth and crystal ball
  image(table, 0, 0, 900, 900); // table image
  fill(255, 255, 255, 100);
  noStroke();
  ellipse(450, 450, 80, 80); //crystal ball
  fill(255, 255, 255, 180);
  noStroke();
  ellipse(450, 450, 150, 150); //crystal ball
  
// Label "Start" the Crystal Ball
  noStroke();
  fill(165, 33, 33);
  textAlign(CENTER);
  textFont("Griffy");
  textSize(50);
  text("Start", x, startY);
    startY = min(startY + 2, 460);
  
// Show title and scroll off the screen
  frameRate(90);
  fill(255); 
  textSize(70); 
  textFont("Griffy");
  textAlign(CENTER);
  text("Welcome to FortuneTellery!", titleX, 150); // Make the text scroll off the screen
    titleX = titleX - 2;  

// draw and control player card placement
  cards();
}

// draw and control player card placement
function cards()  {
  if (page == 0) {
  strokeWeight(4);
  stroke(0);
  fill(165, 33, 33);
  rectMode(CENTER);
  rect(450, card1Y, 350, 300, 25, 25, 25, 25); // Bring in top card
    card1Y = min(card1Y + 2, 150);
  rect(card2X, 450, 300, 350, 25, 25, 25, 25); // Bring in right card
    card2X = max(card2X - 2, 750);
   rect(450, card3Y, 350, 300, 25, 25, 25, 25); // Bring in bottom card
    card3Y = max(card3Y - 2, 750);
  rect(card4X, 450, 300, 350, 25, 25, 25, 25); // Bring in left card
    card4X = min(card4X + 2, 150);
    
  } else {
  strokeWeight(4);
  stroke(0);
  fill(165, 33, 33);
  rectMode(CENTER);
  rect(450, card1Y, 350, 300, 25, 25, 25, 25); // Bring in top card
  rect(card2X, 450, 300, 350, 25, 25, 25, 25); // Bring in right card
  rect(450, card3Y, 350, 300, 25, 25, 25, 25); // Bring in bottom card
  rect(card4X, 450, 300, 350, 25, 25, 25, 25); // Bring in left card
  
  noStroke();
  fill(0, 255, 0);
  textSize(25); 
  textFont("Ranga");
  textAlign(CENTER);
    if (mouseX > 375 && mouseX <525 && mouseY > 375 && mouseY < 525) {
    text("I'm player 1!", player1X, player1Y);
  }
 }  
}

function mousePressed() {
  page = 1 - page;
}

  // rect(450, 150, 350, 300, 25, 25, 25, 25);
  // rect(750, 450, 300, 350, 25, 25, 25, 25);
  // rect(150, 450, 300, 350, 25, 25, 25, 25);
  // rect(450, 750, 350, 300, 25, 25, 25, 25);
// function mousePressed() {
//   ellipse(450, 450, 80, 80);
//     if (mouseX > 410 && mouseX <490 && mouseY > 410 && mouseY < 490) {
//     text("I'm player 1!", 450, 75);
//     }
//   }


  

//   if(page == 0) {
//     image(table, 0, 0, 900, 900); // table image
//     fill(255, 255, 255);
//     noStroke();
//     ellipse(450, 450, 150, 150); //crystal ball
  
//     noStroke();
//     fill(93, 0, 255);
//     textAlign(CENTER);
//     textSize(40);
//     text("Start", x, x + 15);
    
//     textSize(60);
//     fill(255);
//     textAlign(CENTER);
//   // loadFont(<link href="https://fonts.googleapis.com/css?family=Griffy" rel="stylesheet">);
//     text("Welcome to FortuneTellery!", 450, 150);
  
//   } else if (page == 1) {
//     background(200,120,56);
//     fill(255);
//     rect(x + 100, 20, 50, 10);
//   }

// function mousePressed(x,y) {
//     if(page == 0 && mouseX > 375 && mouseX < 525 && mouseY > 375 && mouseY < 525);
//     page = page + 1;
//   }


  

  

  
  // text(nounPPT, x, 460);
  // //text(adjD, x + 50, 300)
  
  // fill(255, 255, 255);
  // textSize(50);
  // text("A" + " " + nounPPT + " " + verbs[0] + " " + adjD, 300, 200);
//{
  