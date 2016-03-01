//Feel free to change these words:
var articles = ["the", "a","an"];
var adjectives = ["spirited", "snotty", "snappy", "staunchy", "galactic", "orgasmic", "phantasmagorical"];
var nouns = ["Bubba","Beans","Baby","Boo","Boi"];
var bandName;
var colorPal = "blue"
var colorPal1;

var randNum, randAdj, randArt;
function setup() {
	createCanvas(windowWidth, windowHeight);
//background(random(255),random(255),random(255));
	//colorPal = "blue" + "black"
	colorPal1 = ("pink");
	background(colorPal1);
	textSize(50);
	randNum = nouns[floor(random(0,nouns.length))];
	randAdj = adjectives[ceil(random(0,adjectives.length))];
	randArt = articles[floor(random(0,articles.length))];
	textColor = (random(224),random(224),random(224))
	bandName = randArt + " " + randAdj + " " + randNum;
}

function draw(){
	for(empty = 0; empty < 20; empty++){
		for(full = 0; full < 20; full++){
	noFill();
	strokeWeight(2);
//	ellipse(width/2,height/2,500,500)
	stroke("white")
	line(100*full,300*empty,400,500)

		}
	}
		frameRate(30);
		fill(0,247,255,7);
		textSize(100);
		text(bandName,width/2,height/2);



}
