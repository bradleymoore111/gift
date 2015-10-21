function updateEntities(){
	// Moving critter + collision
	// for(var i=0;i<world.critters.length;i++){
	// 	var critter = world.critters[i];
	// 	critter.x += critter.velX;
	// 	if((critter.velX>0 && (critter.x+critter.width)>critter.xMax)||(critter.velX<0 && (critter.x)<critter.xMin)){
	// 		critter.velX *= -1;
	// 	}
	// }

	// // Moving bugs + collision
	// for(var i=0;i<world.bugs.length;i++){
	// 	var bug = world.bugs[i];
	// 	bug.y += bug.velY;
	// 	if((bug.velY>0 && (bug.y+bug.height)>bug.yMax)||(bug.velY<0 && (bug.y)<bug.yMin)){
	// 		bug.velY *= -1;
	// 	}
	// }

	// Check Keyboard Input
	if(keyboard[38]||keyboard[32]||keyboard[87]){
		
	}
	if(keyboard[39]||keyboard[68]){ // right arrow

	}
	if(keyboard[37]||keyboard[65]){ // left arrow 
	
	}
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

canvas.addEventListener('mousemove', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	if(mouseX != mousePos.x || mouseY != mousePos.y){
		lastMouseX = mousePos.x;
		lastMouseY = mousePos.y;
		document.getElementById("usefulInfo").innerText = "Mouse:("+lastMouseX+", "+lastMouseY+")";
	}
}, false);