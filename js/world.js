function updateWorld(){
	// ctx.drawImage(images.backgrounds[currentBackground], 0, 0, width, height);

	ctx.beginPath(); // This is where map rendering goes

	// Drawing world
	ctx.fillStyle = "black";
	var tempDir = "";
	for(var i=0;i<worldBorder.length;i++){
		tempDir = colCheck(world[level].player, worldBorder[i]);
	}
	for(var i=0;i<world[level].boxes.length;i++){
		tempDir = tempDir || colCheck(world[level].player, world[level].boxes[i]);
	}
	if(tempDir != "b"){
		world[level].player.grounded = false;
	}

	// world[level].player.grounded = false;

	// Drawing borders
	for (var i=0; i < worldBorder.length; i++) {
		ctx.rect(worldBorder[i].x, worldBorder[i].y, worldBorder[i].width, worldBorder[i].height);
 
 		// Halting player movement through worldBorder, this will be useful stuff for Drawing maps
		var dir = colCheck(world[level].player, worldBorder[i]);
		if (dir === "l" || dir === "r") {
			world[level].player.doubled = false;
			world[level].player.velX = 0;
			world[level].player.jumping = false;
		} else if (dir === "b") {
			world[level].player.doubled = false;
			world[level].player.grounded = true;
			world[level].player.jumping = false;
		} else if (dir === "t") {
			world[level].player.velY *= -1;
		}
	}

	// Drawing boxes
	for(var i=0;i<world[level].boxes.length; i++){
		makeRect(world[level].boxes[i]);
 
 		// Halting player movement through world[level].boxes, this will be useful stuff for Drawing maps
		var dir = colCheck(world[level].player, world[level].boxes[i]);
 		
		if (dir === "l" || dir === "r") {
			world[level].player.doubled = false;
			world[level].player.velX = 0;
			world[level].player.jumping = false;
		} else if (dir === "b") {
			world[level].player.doubled = false;
			world[level].player.grounded = true;
			world[level].player.jumping = false;
		} else if (dir === "t") {
			world[level].player.velY *= -1;
		}
	}	
	ctx.fill(); // Filling in all the borders, both border style and fill style should be black.
	ctx.closePath();

	// Drawing plates
	ctx.beginPath();
	ctx.fillStyle = "purple";
	for(var i=0;i<world[level].plates.length;i++){
		if(world[level].plates[i].playerStillIn){ // general ignore, meaning an action was just done, continue checking if player is not in then turn this off
			if(world[level].plates[i].activated){
				// makeRect(world[level].plates[i]); // draw plate with cube
				// ctx.rect(world[level].plates[i].x+5, world[level].plates[i].y-5, 10, 10);
				ctx.drawImage(images.plates[1], world[level].plates[i].x, world[level].plates[i].y);
			}else{
				// makeRect(world[level].plates[i]);
				ctx.drawImage(images.plates[0], world[level].plates[i].x, world[level].plates[i].y);
			}

			if(!simpleColCheck(world[level].player, world[level].plates[i])){// if no longer colliding, 
				world[level].plates[i].playerStillIn = false;// then turn this off
			}
			// else, just render things in their current state
		}
		else if(simpleColCheck(world[level].player, world[level].plates[i])){
			if(world[level].player.hasCube!=-1){ // player has cube
				if(!world[level].plates[i].activated){ // plate doesn't have cube, dropping cube
					// world[level].cubes[world[level].player.hasCube].placed = true;
					world[level].cubes[world[level].player.hasCube].pickedUp = false;
					world[level].cubes[world[level].player.hasCube].placed = world[level].plates[i].id;
					world[level].plates[i].activated = true; // activate plate
					world[level].plates[i].hasCube = world[level].player.hasCube; // set id of which cube it has to id of cube that player has
					world[level].player.hasCube = -1; 	// remove player having cube
														// clear id of player cube (-1)
					world[level].plates[i].playerStillIn = true;// turn on playerStillIn
				}else{ // plate has a cube
					// nothing, doesn't matter. Both are full, just ignore each other.
				}
				// makeRect(world[level].plates[i]); // draw plate with cube
				ctx.drawImage(images.plates[1], world[level].plates[i].x, world[level].plates[i].y);
				// ctx.rect(world[level].plates[i].x+5, world[level].plates[i].y-5, 10, 10);
			}else{ // player doesn't have cube
				if(world[level].plates[i].activated){ // plate has cube, picking up cube
					world[level].cubes[world[level].plates[i].hasCube].placed = -1;
					world[level].cubes[world[level].plates[i].hasCube].pickedUp = true;
					world[level].player.hasCube = world[level].plates[i].hasCube; 	// set player has cube id to cube id from plate
																						// set player has cube
					world[level].plates[i].hasCube = -1; // clear plate id (-1)
					world[level].plates[i].activated = false; // disable plate activated
					world[level].plates[i].playerStillIn = true; // turn on playerStillIn
				}else{ // plate doesn't have cube
					// nothing, doesn't matter.
				}
				// draw plate without cube
				// makeRect(world[level].plates[i]);
				ctx.drawImage(images.plates[0], world[level].plates[i].x, world[level].plates[i].y);
			}
		}else{
			if(world[level].plates[i].activated){
				ctx.drawImage(images.plates[1], world[level].plates[i].x, world[level].plates[i].y);
				// makeRect(world[level].plates[i]); // draw plate with cube
				// ctx.rect(world[level].plates[i].x+5, world[level].plates[i].y-5, 10, 10);
			}else{
				// makeRect(world[level].plates[i]);
				ctx.drawImage(images.plates[0], world[level].plates[i].x, world[level].plates[i].y);
			}
		}
	}
	ctx.fill();
	ctx.closePath();

	// Drawing fields
	ctx.beginPath();
	ctx.fillStyle = "blue";
	for(var i=0;i<world[level].fields.length;i++){
		var field = world[level].fields[i];

		// Oh hey. Looks like I already did multiple plate input for fields. That's kinda cool. 
		var fieldIsActivated = false;
		for(var j=0;j<field.targets.length;j++){
			if(world[level].plates[field.targets[j]].activated){
				fieldIsActivated = true;
			}
		}

		if(fieldIsActivated){ // open gate
			var dir = colCheck(world[level].player, {x:field.x,y:field.y,width:field.width,height:field.height/2});
			if (dir === "l" || dir === "r") {
				world[level].player.velX = 0;
				world[level].player.jumping = false;
			} else if (dir === "b") {
				world[level].player.grounded = true;
				world[level].player.jumping = false;
			} else if (dir === "t") {
				world[level].player.velY *= -1;
			}

			ctx.rect(field.x, field.y, field.width, field.height/2);
		}else{
			var dir = colCheck(world[level].player, field);
			if (dir === "l" || dir === "r") {
				world[level].player.velX = 0;
				world[level].player.jumping = false;
			} else if (dir === "b") {
				world[level].player.grounded = true;
				world[level].player.jumping = false;
			} else if (dir === "t") {
				world[level].player.velY *= -1;
			}
			makeRect(field);
		}

	}
	ctx.fill();
	ctx.closePath();

	// Drawing cubes
	ctx.beginPath();
	ctx.fillStyle = "gray";
	for(var i=0;i<world[level].cubes.length;i++){
		var cube = world[level].cubes[i];
		if(cube.placed != -1){
			ctx.drawImage(cube.img, world[level].plates[cube.placed].x+5, world[level].plates[cube.placed].y-15);
		} 
		else if(!cube.pickedUp){
			drawImage(cube);

			var dir = colCheck(world[level].player, cube);
	 		
			if(dir && (world[level].player.hasCube==-1)){ // Time to pick up cube!
				cube.pickedUp = true;
				world[level].player.hasCube = cube.id;
			}

			// if (dir === "l" || dir === "r") {
			// 	world[level].player.velX = 0;
			// 	world[level].player.jumping = false;
			// } else if (dir === "b") {
			// 	world[level].player.grounded = true;
			// 	world[level].player.jumping = false;
			// } else if (dir === "t") {
			// 	world[level].player.velY *= -1;
			// }
		}else{ // Player already has this cube 
			ctx.drawImage(cube.img, world[level].player.x+22, world[level].player.y-5, cube.width, cube.height);
		}
	}
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "gold";
	// Drawing doors
	for(var i=0;i<world[level].doors.length;i++){
		if(!world[level].doors[i].opened){
			ctx.beginPath();
			ctx.fillStyle = "orange";
			makeRect(world[level].doors[i]);
			ctx.fill();
			ctx.closePath();

			var dir = colCheck(world[level].player, world[level].doors[i]);
				
			if(dir){
				if(itemKeys>0){
					itemKeys--;
					world[level].doors[i].opened = true;
				}
			}

			if (dir === "l" || dir === "r") {
				world[level].player.velX = 0;
				world[level].player.jumping = false;
			} else if (dir === "b") {
				world[level].player.grounded = true;
				world[level].player.jumping = false;
			} else if (dir === "t") {
				world[level].player.velY *= -1;
			}
		}
	}
	ctx.fill();
	ctx.closePath();

	
 
	// Drawing keys
	for(var i=0;i<world[level].keys.length;i++){
		if(!world[level].keys[i].taken){
			drawImage(world[level].keys[i]);
		}
	}

	ctx.beginPath();
	// Drawing the critters
	ctx.fillStyle = "red";
	for(var i=0;i<world[level].critters.length;i++){
		drawImage(world[level].critters[i]);
	}

	// Drawing bread
	ctx.fillStyle = "orange";
	for(var i=0;i<world[level].bread.length;i++){
		if(!world[level].bread[i].pickedUp){
			drawImage(world[level].bread[i]);
		}
	}

	// Drawing the player
	ctx.drawImage(    ((world[level].player.hasCube!=-1)?images.playerWithCube:images.playerStatic), world[level].player.x, world[level].player.y);
	// ctx.fillStyle = "green";
	// ctx.fillRect(world[level].player.x, world[level].player.y, world[level].player.width, world[level].player.height);

	// Drawing the goal
	ctx.rect(world[level].goal.x, world[level].goal.y, world[level].goal.width, world[level].goal.height);
	ctx.stroke();
	ctx.closePath();
};