//fortune teller
var nouns = ["truck","pie","car","baseball","potato","banana","train","trash","lamp","chair","camera","sister","brother","mother","father","dog","snow","phone","toe","butt","box","book","montana","Seattle","kayak","park","capitol","president","desk","Hollywood","mountain","bicycle","television","soccer","cake"]
var adj = ["steep","woebegone","quaint","separate","longing","rich","majestic","dead","miscreant","free","freezing","psychedelic","light","macho","magical","brown","valuable","ordinary","homely","incredible","poor","curly","unusual","third"]
var adv = ["carefully", "adoringly", "competitively", "eagerly", "really", "quietly", "loyally", " quickly", "ruthlessly", "brutally", "cheerfully", "before", "never", "soon", "somewhere", "there", "upstairs", "extremely", "quite",  "very", "away"]
var verbs = ["admire", "annoy", "avoid", "beg", "bend", "care", "confide", "deceive", "dare", "envy", "exaggerate", "fear", "fix", "feel", "guess", "hand", "help", "hurry", "inspire", "interfere", "listen", "learn", "mail", "meet", "melt", "play", "promise", "pretend", "race", "recognize", "risk", "rush", "stop", "surprise", "tell", "twist", "understand", "utter", "warn", "whisper", "worry", "yell"]

var nounPPT = nouns[Math.floor(Math.random()*nouns.length)];  
var adjD = adj[Math.floor(Math.random()*adj.length)];
var advB = adj[Math.floor(Math.random()*adj.length)];  
var page = 0;

x = 450
 

var table;
function preload()  {
  table = loadImage("cloth.jpg");
}

function setup() {
  createCanvas(900, 900);
}


 
function draw() {

  if (page == 0) {
  image(table, 0, 0, 900, 900); // table image
  fill(255, 255, 255);
  noStroke();
  ellipse(450, 450, 150, 150); //crystal ball
  
  noStroke();
  fill(93, 0, 255);
  textAlign(CENTER);
  textSize(40);
  text("Start", x, x + 15);
  
  } else if (page == 1) {
    rect(x, 20, 50, 10)
  }

function mousePressed() {
    if(page == 0 && mouseX > 375 && mouseX < 525 && mouseY > 375 && mouseY < 525);
    page = page + 1;
  }

  textSize(60);
  fill(255);
  textAlign(CENTER);
  // loadFont(<link href="https://fonts.googleapis.com/css?family=Griffy" rel="stylesheet">);
  text("Welcome to FortuneTellery!", 450, 150);
  

  

  
  // text(nounPPT, x, 460);
  // //text(adjD, x + 50, 300)
  
  // fill(255, 255, 255);
  // textSize(50);
  // text("A" + " " + nounPPT + " " + verbs[0] + " " + adjD, 300, 200);
}
  