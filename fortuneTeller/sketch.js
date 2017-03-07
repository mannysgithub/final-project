//fortune teller
var nouns = ["truck","pie","car","baseball","potato","banana","train","trash","lamp","chair","camera","sister","brother","mother","father","dog","snow","phone","toe","butt","box","book","montana","Seattle","kayak","park","capitol","president","desk","Hollywood","mountain","bicycle","television","soccer","cake"]
var adj = ["steep","woebegone","quaint","separate","longing","rich","majestic","dead","miscreant","free","freezing","psychedelic","light","macho","magical","brown","valuable","ordinary","homely","incredible","poor","curly","unusual","third"]
var adv = ["carefully", "adoringly", "competitively", "eagerly", "really", "quietly", "loyally", " quickly", "ruthlessly", "brutally", "cheerfully", "before", "never", "soon", "somewhere", "there", "upstairs", "extremely", "quite",  "very", "away"]
var verbs = ["admire", "annoy", "avoid", "beg", "bend", "care", "confide", "deceive", "dare", "envy", "exaggerate", "fear", "fix", "feel", "guess", "hand", "help", "hurry", "inspire", "interfere", "listen", "learn", "mail", "meet", "melt", "play", "promise", "pretend", "race", "recognize", "risk", "rush", "stop", "surprise", "tell", "twist", "understand", "utter", "warn", "whisper", "worry", "yell"]

var nounPPT = nouns[Math.floor(Math.random()*nouns.length)];  
//var adjD = adj[Math.floor(Math.random()*adj.length)];  

x = 450

var table;
function preload()  {
  table = loadImage("cloth.jpg");
}

function setup() {
  createCanvas(900, 900);
}


 
function draw() {
  image(table, 0, 0, 900, 900);
  fill(255, 255, 255);
  noStroke();
  ellipse(450, 450, 150, 150);
  
  noStroke();
  fill(120);
  textAlign(CENTER);
  textSize(40);
  text(nounPPT, x, 460);
  //text(adjD, x + 50, 300)
  
   fill(255, 255, 255);
  textSize(50);
  text("A" + " " nouns[0] + " " verbs[0] + " " adj[0], 300, 200);
}
  