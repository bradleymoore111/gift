console.log("Initializing local variables.");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var debug = document.getElementById("debug");

var level = 0;

var width = 1000;
var height = 400;
var keyboard = [];
var world = [];
var friction = 0.8;
var gravity = 0.3;

var itemKeys = 0;
var bread = 0;
var quotes = ["Listen with the intent to understand, not the intent to reply.", "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "If you're going through hell, keep going.", "A person is defined not by how they treat their equals, but by how they treat their inferiors.", "You never know the truth, only a truth.", "The last hope of the damned is not for salvation.", "Cave furorem patientis"];

var stillPressingSpace = false;

console.log("Dimensions: "+width+"x"+height);
console.log("Coefficient of friction = "+friction+", acceleration due to gravity = "+gravity+" (both px)");

var pleaseLogInto = "Cheryl";

console.log("Other useless technical jargon, jubilence achieved");