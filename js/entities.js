function updateEntities(){
	// Moving critter + collision
	for(var i=0;i<world[level].critters.length;i++){
		var critter = world[level].critters[i];
		critter.x += critter.velX;
		critter.y += critter.velY;
		if((critter.velX>0 && critter.x>critter.xMax)||(critter.velX<0 && critter.x<critter.xMin)){
			critter.velX *= -1;
		}
		if(simpleColCheck(world[level].player, critter)){ // Death
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
 

	if(simpleColCheck(world[level].player, world[level].goal)){
		world[level].goal.action();
	}
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
	hideBanner();
	dead = true;
	setTimeout(world[level].reset, 1000);
}