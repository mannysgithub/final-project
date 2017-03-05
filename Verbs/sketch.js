var nouns = ["truck","pie","car","baseball","potato","banana","train","trash","lamp","chair","camera","sister","brother","mother","father","dog","snow","phone","toe","butt","box","book","montana","Seattle","kayak","park","capitol","president","desk","Hollywood","mountain","bicycle","television","soccer","cake"]
var adj = ["steep","woebegone","quaint","separate","longing","rich","majestic","dead","miscreant","free","freezing","psychedelic","light","macho","magical","brown","valuable","ordinary","homely","incredible","poor","curly","unusual","third"]
var adv = ["carefully", "adoringly", "competitively", "eagerly", "really", "quietly", "loyally", " quickly", ""]
var verbs = ["admire", "annoy", "avoid", "beg", "bend", "care", "confide", "deceive", "dare", "envy", "exaggerate", "fear", "fix", "feel", "guess", "hand", "help", "hurry", "inspire", "interfere", "listen", "learn", "mail", "meet", "melt", "play", "promise", "pretend", "race", "recognize", "risk", "rush", "stop", "surprise", "tell", "twist", "understand", "utter", "warn", "whisper", "worry", "yell"]
var nounPPT = nouns[Math.floor(Math.random()*nouns.length)];
//var adjD = adj[Math.floor(Math.random()*adj.length)];  


x = 300

function setup() {
  background(255);
  createCanvas(600,600);
}

function draw() {
  noFill();
  ellipse(x,300, 150,150);
  

  noStroke();
  fill(120);
  textSize(20);
  text(nounPPT, x, 300);
  //text(adjD, x + 50, 300)
}