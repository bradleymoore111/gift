console.log("Initializing local variables.");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var hud = document.getElementById("hud");
var htx = hud.getContext("2d");

var hud_level = document.getElementById("hud_level");
var hud_keys = document.getElementById("hud_keys");
var hud_bread = document.getElementById("hud_bread");
var worldInf = document.getElementById("world-information");
var playerInf = document.getElementById("player-information");

var level = 0;
var newLevel = 0;

var width = 1000;
var height = 400;
var keyboard = [];
var world = [];
var friction = 0.8;
var gravity = 0.3;

var itemKeys = 0;
var bread = 0;
// var quotes = ["", "", "", "", "", "", ""];

var stillPressingSpace = false;

console.log("Dimensions: "+width+"x"+height);
console.log("Coefficient of friction = "+friction+", acceleration due to gravity = "+gravity+" (both px)");

var pleaseLogInto = "Cheryl";

console.log("Other useless technical jargon, jubilence achieved");