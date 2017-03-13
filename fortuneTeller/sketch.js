// Created by Mannie Zetino and Lauren Hirt
// Last edited 3/9/2017
// Fortune Telling Game for 4 players
var players = ["Player 1", "Player 2", "Player 3", "Player 4"];
count = 0

var playerA = "I'm player 1! Click to see the other players"
var playerB = "I'm player 2! Click to see the other players"
var playerC = "I'm player 3! Click to see other players"
var playerD = "I'm player 4! Click the crystal ball once more and start getting your fortunes!"

var page = 0;

var nouns = ["truck","pie","car","baseball","potato","banana","train","trash","lamp","grape","totem pole","reddit","scale","frog","iPod","iPhone","Android","robot","weasel","zoo","Japan","architect","backpack","Nintendo","Xbox","bridge","brick","pizza","shoe","couch","river","unicycle","cupcake","desert","moped"]
var adj = ["steep","woebegone","quaint","separate","longing","rich","majestic","dead","miscreant","free","freezing","psychedelic","light","macho","magical","brown","valuable","ordinary","homely","incredible","poor","curly","unusual","third"]
var adv = ["carefully", "adoringly", "competitively", "eagerly", "really", "quietly", "loyally", " quickly", "ruthlessly", "brutally", "cheerfully", "before", "never", "soon", "somewhere", "there", "upstairs", "extremely", "quite",  "very", "away"]
var verbs = ["admire", "annoy", "avoid", "beg", "bend", "care", "confide", "deceive", "dare", "envy", "exaggerate", "fear", "fix", "feel", "guess", "hand", "help", "hurry", "inspire", "interfere", "listen", "learn", "mail", "meet", "melt", "play", "promise", "pretend", "race", "recognize", "risk", "rush", "stop", "surprise", "tell", "twist", "understand", "utter", "warn", "whisper", "worry", "yell"]
var nount = ["chair","camera","sister","brother","mother","father","dog","snow","toe","butt","box","book","montana","Seattle","kayak","park","capitol","president","desk","Hollywood","mountain","bicycle","television","soccer","cake"]
var who = ["your best friend", "the person across from you", "on TV", "a stranger", "behind you"]
var will = ["will", "might", "should", "could", "definitely", "can", "always", "ought not", "must"]

var nounPPT = nouns[Math.floor(Math.random()*nouns.length)];  
var adjD = adj[Math.floor(Math.random()*adj.length)];
var advB = adj[Math.floor(Math.random()*adj.length)];
var nounPPU = nount[Math.floor(Math.random()*nount.length)];
var verbT = adj[Math.floor(Math.random()*adj.length)];
var whoPPP = who[Math.floor(Math.random()*who.length)];
var willRRR = nount[Math.floor(Math.random()*will.length)];


//var allCards = allCards


//  Center of the canvas + Crystal ball
x = 450; 
y = 450;
w = 80;
y = 80;

// Make title scroll off the screen
var titleX = 450;

// "Start" waiting off screen
var startY = -550

// Player cards waiting off screen
var card1Y = -600
var card2X = 1500
var card3Y = 1500
var card4X = -600 

// Set up fortune text coordinates
player1X = 450
player1Y = 300
player2X = 750
player2Y = 600
player3X = 450
player3Y = 900
player4X = 150
player4Y = 600

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
  // noStroke();
  // fill(165, 33, 33);
  // textAlign(CENTER);
  // textFont("Griffy");
  // textSize(50);
  // text("Start", x, startY);
  //   startY = min(startY + 2, 460);
  
// Show title and scroll off the screen
  frameRate(150);
  fill(255); 
  textSize(70); 
  textFont("Griffy");
  textAlign(CENTER);
  text("Welcome to Fortune Tellery!", titleX, 150); // Make the text scroll off the screen
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
  
  noStroke();
  text("Start", x, startY);
    startY = min(startY + 2, 460);
  

  } else if (page ==1) {
    allCards();
    playerFont();
      if (mouseX > 375 && mouseX <525 && mouseY > 375 && mouseY < 525) {
        text(playerA, player1X, player1Y, 275, 450);
    }
   
  } else if (page ==2) {
    allCards();
    playerFont(0);
      if (mouseX > 375 && mouseX <525 && mouseY > 375 && mouseY < 525) {
        text(playerB, player2X, player2Y, 275, 450);
    }
    
  } else if (page ==3) {
    allCards();
    playerFont();
      if (mouseX > 375 && mouseX <525 && mouseY > 375 && mouseY < 525) {
        text(playerC, player3X, player3Y, 275, 450);
    }

  } else if (page ==4) {
    allCards();
    playerFont();
      if (mouseX > 375 && mouseX <525 && mouseY > 375 && mouseY < 525) {
          text(playerD, player4X, player4Y, 275, 450);
    }  
  }
}
function mousePressed() {
  count = count + 1
  page = (page + 1)%5;
  if (count > 4) {
    playerA = cardRandomText();
    playerB = cardRandomText();
    playerC = cardRandomText();
    playerD = cardRandomText();
  
  // } else if (count > 9) {
  //   playerFont();
  //   text("play again", 450, 450);
 }
}

function cardRandomText () {
    nounPPT = nouns[Math.floor(Math.random()*nouns.length)];  
    adjD = adj[Math.floor(Math.random()*adj.length)];
    advB = adj[Math.floor(Math.random()*adj.length)];
    nounPPU = nount[Math.floor(Math.random()*nount.length)];
    verbT = adj[Math.floor(Math.random()*adj.length)]
    whoPPP = who[Math.floor(Math.random()*who.length)];
    willRRR = nount[Math.floor(Math.random()*will.length)];
  
   return nounPPT + " " + willRRR + " " + verbT + " " + whoPPP + " " + adjD + " " + nounPPU;
}


function playerFont() {
  noStroke();
  fill(255);
  textSize(25); 
  textFont("Playfair Display SC");
  textAlign(CENTER);
}

function allCards() {
  strokeWeight(4);
  stroke(0);
  fill(165, 33, 33);
  rectMode(CENTER);
  rect(450, card1Y, 350, 300, 25, 25, 25, 25); // Bring in top card
  rect(card2X, 450, 300, 350, 25, 25, 25, 25); // Bring in right card
  rect(450, card3Y, 350, 300, 25, 25, 25, 25); // Bring in bottom card
  rect(card4X, 450, 300, 350, 25, 25, 25, 25); // Bring in left card
}
