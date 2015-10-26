function updateEntities(){

	// Neurotoxin collision
	for(var i=0;i<world[level].neurotoxin.length;i++){
		if(simpleColCheck(world[level].player, world[level].neurotoxin[i])){ // Death
			death();
		}
	}

	// Moving critter + collision
	for(var i=0;i<world[level].critters.length;i++){
		var critter = world[level].critters[i];
		critter.x += critter.velX;
		if((critter.velX>0 && (critter.x+critter.width)>critter.xMax)||(critter.velX<0 && (critter.x)<critter.xMin)){
			critter.velX *= -1;
		}
		if(simpleColCheck(world[level].player, critter)){ // Death
			death();
		}
	}

	// Moving bugs + collision
	for(var i=0;i<world[level].bugs.length;i++){
		var bug = world[level].bugs[i];
		bug.y += bug.velY;
		if((bug.velY>0 && (bug.y+bug.height)>bug.yMax)||(bug.velY<0 && (bug.y)<bug.yMin)){
			bug.velY *= -1;
		}
		if(simpleColCheck(world[level].player, bug)){ // Death
			death();
		}
	}

	// Bread collision
	for(var i=0;i<world[level].bread.length;i++){
		if(simpleColCheck(world[level].player, world[level].bread[i]) && !world[level].bread[i].pickedUp){
			bread++;
			world[level].bread[i].pickedUp = true;
			writeBanner(world[level].bread[i].quote,world[level].bread[i].subQuote);
			setTimeout(hideBanner, 4000);
		}
	}

	// Check Keyboard Input
	if(stillPressingSpace){
		if(!(keyboard[38]||keyboard[32]||keyboard[87])){
			stillPressingSpace = false;
		}
	}else if((keyboard[38]||keyboard[32]||keyboard[87])&&!dead){
		// up arrow or space

		if(simpleColCheck(world[level].player, world[level].goal)){
			world[level].goal.action();
		}

		if (!world[level].player.jumping&&world[level].player.grounded) {
			stillPressingSpace = true;	
			world[level].player.jumping = true;
			world[level].player.grounded = false;
			world[level].player.velY = -world[level].player.speed*2;
			world[level].player.doubled = false;
		}else if(!world[level].player.doubled){
			stillPressingSpace = true;	
			world[level].player.doubled = true;

			var tempDir = "";
			for(var i=0;i<worldBorder.length;i++){
				tempDir = tempDir || colCheck(world[level].player, worldBorder[i]);
			}if(tempDir == "l"){
				world[level].player.velX = 4;
				world[level].player.doubled = false;
			}else if(tempDir == "r"){
				world[level].player.velX = -4;
				world[level].player.doubled = false;
			}
			for(var i=0;i<world[level].boxes.length;i++){
				tempDir = tempDir || colCheck(world[level].player, world[level].boxes[i]);
			}if(tempDir == "l"){
				world[level].player.velX = 4;
				world[level].player.doubled = false;
			}else if(tempDir == "r"){
				world[level].player.velX = -4;
				world[level].player.doubled = false;
			}

			world[level].player.velY = -world[level].player.speed * 2;
		}
	}
	if ((keyboard[39]||keyboard[68])&&!dead) {
		// right arrow
		if(!world[level].player.grounded && world[level].player.velX < world[level].player.speed){
			world[level].player.velX+=.4;
		}else if (world[level].player.velX < world[level].player.speed) {             
			world[level].player.velX+=1;         
		}
	}if ((keyboard[37]||keyboard[65])&&!dead) {         // left arrow 
		if(!world[level].player.grounded && world[level].player.velX > -world[level].player.speed){
			world[level].player.velX-=.4;
		}        
		else if(world[level].player.velX > -world[level].player.speed) {
			world[level].player.velX-=1;
		}
	}
 
 	// Horizontal friction
 	if(world[level].player.grounded){
		world[level].player.velX *= friction;
	}
	if(Math.abs(world[level].player.velX)<0.01){
		world[level].player.velX = 0;
	}

	// Since canvases are upside down, making the value positive works.
	if(!world[level].player.grounded){
		world[level].player.velY += gravity;
	}
	if(Math.abs(world[level].player.velY)<0.01){
		world[level].player.velY = 0;
	}
 	
 	// Commented out, makes it so goal is activated whenever you bump it, as opposed to having to jump
	// if(simpleColCheck(world[level].player, world[level].goal)){
	// 	world[level].goal.action();
	// }

	if(world[level].player.grounded){
		world[level].player.velY = 0;
	}
 
	world[level].player.x += world[level].player.velX;
	world[level].player.y += world[level].player.velY;

	for(var i=0;i<world[level].keys.length;i++){
		if(simpleColCheck(world[level].player, world[level].keys[i])){
			if(!world[level].keys[i].taken){
				itemKeys++;
			}
			world[level].keys[i].taken = true;
		}
	}
}

function death(){
	if(!dead){
		dead = true;
		setTimeout(world[level].reset, 1000);
		setTimeout(hideBanner, 1000);
	}
}

function resetLevel(hardReset){
	dead = false;

	world[level].player.velX = 0;
	world[level].player.velY = 0;
	world[level].player.hasCube = -1;

	if(hardReset){
		// Reset Bread
		for(var i=0;i<world[level].bread.length;i++){
			if(world[level].bread[i].pickedUp){
				world[level].bread[i].pickedUp = false;
				bread--;
			}
		}

		// Reset Keys
		for(var i=0;i<world[level].keys.length;i++){
			if(world[level].keys[i].taken){
				world[level].keys[i].taken = false;
				itemKeys--;
			}
		}

		// Reset Doors
		for(var i=0;i<world[level].doors.length;i++){
			if(world[level].doors[i].opened){
				world[level].doors[i].opened = false;
				itemKeys++;
			}
		}
	}

	// Reset cubes
	for(var i=0;i<world[level].cubes.length;i++){
		world[level].cubes[i].pickedUp = false;
		world[level].cubes[i].placed = -1;
	}

	// Reset plates
	for(var i=0;i<world[level].plates.length;i++){
		world[level].plates[i].activated = false;
		world[level].plates[i].playerStillIn = false;
		world[level].plates[i].cube = -1;
	}

	// Reset fields
	for(var i=0;i<world[level].fields.length;i++){
		world[level].plates[i].opened = false;
	}
}