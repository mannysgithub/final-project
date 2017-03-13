// Created by Mannie Zetino and Lauren Hirt
// Last edited 3/12/2017
// Fortune Telling Game for 4 players. A fortune is radomly generated from the arrays of words with the click of the mouse.


var players = ["Player 1", "Player 2", "Player 3", "Player 4"]; // players variables
count = 0 // set starting point for clicks 

var playerA = "I'm player 1! Click to see the other players" //sets text for player 1
var playerB = "I'm player 2! Click to see the other players" //sets text for player 2
var playerC = "I'm player 3! Click to see other players" //sets text for for player 3
var playerD = "I'm player 4! Click the crystal ball once more and start getting your fortunes!" //sets text for player 4

var page = 0; // initial loading page

var nouns = ["truck","pie","car","baseball","potato","banana","train","trash","lamp","grape","totem pole","reddit","scale","frog","iPod","iPhone","Android","robot","weasel","zoo","Japan","architect","backpack","Nintendo","Xbox","bridge","brick","pizza","shoe","couch","river","unicycle","cupcake","desert","moped"] // array of nouns
var adj = ["steep","woebegone","quaint","separate","longing","rich","majestic","dead","miscreant","free","freezing","psychedelic","light","macho","magical","brown","valuable","ordinary","homely","incredible","poor","curly","unusual","third"] //array of adjectives
var adv = ["carefully", "adoringly", "competitively", "eagerly", "really", "quietly", "loyally", " quickly", "ruthlessly", "brutally", "cheerfully", "before", "never", "soon", "somewhere", "there", "upstairs", "extremely", "quite",  "very", "away"] //array of adverbs
var verbs = ["admire", "annoy", "avoid", "beg", "bend", "care", "confide", "deceive", "dare", "envy", "exaggerate", "fear", "fix", "feel", "guess", "hand", "help", "hurry", "inspire", "interfere", "listen", "learn", "mail", "meet", "melt", "play", "promise", "pretend", "race", "recognize", "risk", "rush", "stop", "surprise", "tell", "twist", "understand", "utter", "warn", "whisper", "worry", "yell"] //array of verbs
var nount = ["chair","camera","sister","brother","mother","father","dog","snow","toe","butt","box","book","montana","Seattle","kayak","park","capitol","president","desk","Hollywood","mountain","bicycle","television","soccer","cake"] //second array of nouns
var who = ["your best friend", "the person across from you", "on TV", "a stranger", "behind you"] //array of who statements
var will = ["will", "might", "should", "could", "definitely", "can", "always", "ought not", "must"] // array of do

var nounPPT = nouns[Math.floor(Math.random()*nouns.length)];  //random word generator for nouns
var adjD = adj[Math.floor(Math.random()*adj.length)]; //random word generator code for adjectives
var advB = adj[Math.floor(Math.random()*adj.length)]; //random word generator code for adverbs
var nounPPU = nount[Math.floor(Math.random()*nount.length)]; //random word generator code for nouns 2
var verbT = adj[Math.floor(Math.random()*adj.length)]; //random word generator code for verbs 2
var whoPPP = who[Math.floor(Math.random()*who.length)]; //random word generator code for whos
var willRRR = nount[Math.floor(Math.random()*will.length)]; //random word generator code for wills



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
  createCanvas(900, 900); // canvas size
}


 
function draw() {
  // draw table cloth and crystal ball
  image(table, 0, 0, 900, 900); // table image
  fill(255, 255, 255, 100); // ball fill color
  noStroke(); // no stroke on ball
  ellipse(450, 450, 80, 80); //crystal ball
  fill(255, 255, 255, 180);
  noStroke();
  ellipse(450, 450, 150, 150); //crystal ball


// Show title and scroll off the screen
  frameRate(150); // weclome speed
  fill(255); // welcome screen text color
  textSize(70); //size of text
  textFont("Griffy"); // font name
  textAlign(CENTER); // alignment of font
  text("Welcome to Fortune Tellery!", titleX, 150); // Make the text scroll off the screen
    titleX = titleX - 2;  // moving off screen

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
// start coming in from above and landing in ball  
  noStroke();
  text("Start", x, startY);
    startY = min(startY + 2, 460);
  
// if click page 1 generates and loads cards font and text
  } else if (page ==1) {
    allCards();
    playerFont();
      if (mouseX > 375 && mouseX <525 && mouseY > 375 && mouseY < 525) {
        text(playerA, player1X, player1Y, 275, 450);
    }
// if click again page 2 generates and loads cards, font, and text on player 2 card
  } else if (page ==2) {
    allCards();
    playerFont(0);
      if (mouseX > 375 && mouseX <525 && mouseY > 375 && mouseY < 525) {
        text(playerB, player2X, player2Y, 275, 450);
    }
// if click again page 2 generates and loads cards, font, and text on player 3 card
  } else if (page ==3) {
    allCards();
    playerFont();
      if (mouseX > 375 && mouseX <525 && mouseY > 375 && mouseY < 525) {
        text(playerC, player3X, player3Y, 275, 450);
    }
// if click again page 2 generates and loads cards, font, and text on player 4 card
  } else if (page ==4) {
    allCards();
    playerFont();
      if (mouseX > 375 && mouseX <525 && mouseY > 375 && mouseY < 525) {
          text(playerD, player4X, player4Y, 275, 450);
    }  
  }
}
// mouse press activates switching between cards and calls text for randomized fortunes
function mousePressed() {
  count = count + 1
  page = (page + 1)%5;
  if (count > 4) {
    playerA = cardRandomText();
    playerB = cardRandomText();
    playerC = cardRandomText();
    playerD = cardRandomText();
  
 }
}
//function to set up randomized text to be pulled
function cardRandomText () {
    nounPPT = nouns[Math.floor(Math.random()*nouns.length)];  
    adjD = adj[Math.floor(Math.random()*adj.length)];
    advB = adj[Math.floor(Math.random()*adj.length)];
    nounPPU = nount[Math.floor(Math.random()*nount.length)];
    verbT = adj[Math.floor(Math.random()*adj.length)]
    whoPPP = who[Math.floor(Math.random()*who.length)];
    willRRR = nount[Math.floor(Math.random()*will.length)];
//sentence structure for fortunes with the variables used in randomizer
   return nounPPT + " " + willRRR + " " + verbT + " " + whoPPP + " " + adjD + " " + nounPPU;
}

// function for font placement and formatting
function playerFont() {
  noStroke();
  fill(255);
  textSize(25); 
  textFont("Playfair Display SC");
  textAlign(CENTER);
}
// function for card placement and formatting
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
