(function () {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
})();
 
// dimensions

console.log("You should really log into Cheryl some time.");
 
canvas.width = width;
canvas.height = height;

function update() {
	debug.innerText = "Level "+level;
	debug.innerText += "\nKeys: "+itemKeys;
	debug.innerText += "\nBread: "+bread;
	debug.innerText += "\n"+((world[level].player.doubled)?"doubled":"notDoubled");
	debug.innerText += "\n"+((world[level].player.grounded)?"grounded":"notGrounded");
	debug.innerText += "\n"+((world[level].player.jumping)?"jumping":"notJumping");
	// Drawing the world
	ctx.clearRect(0, 0, width, height); // Clearing the entire thing

	if(level==world.length){
		level = 0;
	}

	// Update entities handles the math/movement position of stuff
	updateEntities();
	
	// Update world handles the actual rendering of the entire world
	updateWorld();

	// When done loading everything re-run function (basically, a frame by frame thing)
	requestAnimationFrame(update);
}

// Lets know if colliding at all
function simpleColCheck(shapeA, shapeB){
	if(shapeA.x > shapeB.x+shapeB.width){ // Too far to the right
		return false;
	}
	if(shapeA.y > shapeB.y+shapeB.height){ // Is above it
		return false;
	}
	if(shapeA.x+shapeA.width < shapeB.x){ // Too far to the left
		return false;
	}
	if(shapeA.y+shapeA.height < shapeB.y){ // Is below it
		return false;
	}
	return true;
}

// This is useful for when we need to deny collision, doesn't work for simple checking (understandably)
function colCheck(shapeA, shapeB) {
	// get the vectors to check against
	var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
		vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
		// add the half widths and half heights of the objects
		hWidths = (shapeA.width / 2) + (shapeB.width / 2),
		hHeights = (shapeA.height / 2) + (shapeB.height / 2),
		colDir = null;
 
	// if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
	if (Math.abs(vX) <= hWidths && Math.abs(vY) <= hHeights) {         
		// figures out on which side we are colliding (top, bottom, left, or right)         
		var oX = hWidths - Math.abs(vX),             
			oY = hHeights - Math.abs(vY);         
		if (oX >= oY) {
			if (vY > 0) {
				colDir = "t";
				shapeA.y += oY;
			} else {
				colDir = "b";
				shapeA.y -= oY;
			}
		} else {
			if (vX > 0) {
				colDir = "l";
				shapeA.x += oX;
			} else {
				colDir = "r";
				shapeA.x -= oX;
			}
		}
	}
	return colDir;
}

function makeRect(rect){
	ctx.rect(rect.x, rect.y, rect.width, rect.height);
};

function fillRect(rect){
	ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
};
 
document.body.addEventListener("keydown", function (e) {
	keyboard[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function (e) {
	keyboard[e.keyCode] = false;
});
 
window.addEventListener("load", function () {
	update();
});

function writeBanner(heading,description){
	var banner = document.getElementById('banner');
	banner.className = '';
	banner.innerHTML = '';

	var title = document.createElement('h1');
	title.innerText = heading;
	banner.appendChild(title);
	if (description) {
		var paragraph = document.createElement('h3');
		paragraph.innerText = description;
		banner.appendChild(paragraph);
	};
	var click = document.createElement('p');
	click.innerText = '(click to continue)';
	banner.appendChild(click);
};

function hideBanner() {
	var banner = document.getElementById('banner');
	banner.className = 'hidden';
}
