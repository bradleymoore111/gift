console.log("Initializing local variables.");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var hud = document.getElementById("hud");
var htx = hud.getContext("2d");

// var worldInf = document.getElementById("world-information");
// var playerInf = document.getElementById("player-information");

var itemsLoaded = 0;

var oldHud;
var level = 0;
var newLevel = 0;
var deaths;
var currentBackground = (14*Math.random())|0; // Eventually each level will have a specific background

var d = new Date();
var startingTime = d.getTime();

var currentTime = startingTime - d.getTime()

document.cookie="username=John Smith; expires=Thu, 18 Dec 2016 12:00:00 UTC";

var x = document.cookie;
console.log(x);

var width = 1000;
var height = 400;
var keyboard = [];
var world = [];
var friction = 0.8;
var gravity = 0.3;
var dead = false;

var recentDirection = true; // right
var itemKeys = 0;
var bread = 0;
// var quotes = ["", "", "", "", "", "", ""];

var stillPressingSpace = false;

console.log("Dimensions: "+width+"x"+height);
console.log("Coefficient of friction = "+friction+", acceleration due to gravity = "+gravity+" (both px)");

var pleaseLogInto = "Cheryl";

console.log("Other useless technical jargon, jubilence achieved");