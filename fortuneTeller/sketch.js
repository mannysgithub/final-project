//fortune teller

var nouns = ["truck","pie","car","baseball","potato","banana","train","trash","lamp","chair","camera","sister","brother","mother","father","dog","snow","phone","toe","butt","box","book","montana","Seattle","kayak","park","capitol","president","desk","Hollywood","mountain","bicycle","television","soccer","cake"]
var adj = ["steep","woebegone","quaint","separate","longing","rich","majestic","dead","miscreant","free","freezing","psychedelic","light","macho","magical","brown","valuable","ordinary","homely","incredible","poor","curly","unusual","third"]
var adv = []
var nounPPT = nouns[Math.floor(Math.random()*nouns.length)];  
var adjD = adj[Math.floor(Math.random()*adj.length)];  



x = 300

function setup() {
  background(255);
  createCanvas(600,600);

  
// function getNouns() {
}

  


function draw() {
  console.log;
  noFill();
  ellipse(300,300, 100,100);
  
  //for (i = 0; i < nouns.length; i++) {

    noStroke();
    fill(120);
    textSize(20);
    text(nounPPT, x, 300);
    //text(adjD, x + 50, 300)

}