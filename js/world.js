function updateWorld(){
	if(world[level].background){
		ctx.drawImage(world[level].background, 0, 0);
	}else{
		ctx.drawImage(images.backgrounds["0"], 0, 0);
	}

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
		makeRect(worldBorder[i]);
 
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
			world[level].player.velY = 0;
		}
	}

	// Drawing boxes
	for(var i=0;i<world[level].boxes.length; i++){
		for(var j=0;j<world[level].boxes[i].width/10;j++){
			for(var k=0;k<world[level].boxes[i].height/10;k++){
				ctx.drawImage(images.block, world[level].boxes[i].x + j*10, world[level].boxes[i].y + k*10);
			}
		}
		// makeRect(world[level].boxes[i]);
 
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
			world[level].player.velY = 0;
		}
	}	
	ctx.fill(); // Filling in all the borders, both border style and fill style should be black.
	ctx.closePath();

	ctx.beginPath();
	// Drawing noJumps
	ctx.fillStyle = "#00ffff";
	for(var i=0;i<world[level].noJumps.length;i++){
		for(var j=0;j<world[level].noJumps[i].width/10;j++){
			for(var k=0;k<world[level].noJumps[i].height/10;k++){
				ctx.drawImage(images.ice_block, world[level].noJumps[i].x + j*10, world[level].noJumps[i].y + k*10);
			}
		}
		// ctx.rect(world[level].noJumps[i].x, world[level].noJumps[i].y, world[level].noJumps[i].width, world[level].noJumps[i].height);
		// makeRect(world[level].noJumps[i]);

		var dir = colCheck(world[level].player, world[level].noJumps[i]);
 		
		if (dir === "l" || dir === "r") {
			world[level].player.velX = 0;
			world[level].player.jumping = false;
		} else if (dir === "b") {
			world[level].player.doubled = false;
			world[level].player.grounded = true;
			world[level].player.jumping = false;
		} else if (dir === "t") {
			world[level].player.velY = 0;
		}
	}
	ctx.fill();
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
			var dir = colCheck(world[level].player, {x:field.x,y:field.y,width:field.width,height:15});
			if (dir === "l" || dir === "r") {
				world[level].player.velX = 0;
				world[level].player.jumping = false;
			} else if (dir === "b") {
				world[level].player.grounded = true;
				world[level].player.jumping = false;
			} else if (dir === "t") {
				world[level].player.velY = 0;
			}

			ctx.drawImage(images.field_open, field.x, field.y);
			// ctx.rect(field.x, field.y, field.width, field.height/2);
		}else{ // Field is closed

			var dir = colCheck(world[level].player, field);
			if (dir === "l" || dir === "r") {
				world[level].player.velX = 0;
				world[level].player.jumping = false;
			} else if (dir === "b") {
				world[level].player.grounded = true;
				world[level].player.jumping = false;
			} else if (dir === "t") {
				world[level].player.velY = 0;
			}


			// Killing person if in contact with field
			// if(!dir){
			// 	var dir = colCheck(world[level].player, {x:field.x+6, y:field.y+15, width:8, height:field.height-15});
			// 	if (dir === "l" || dir === "r") {
			// 		death();
			// 	} else if (dir === "b") {
			// 		world[level].player.grounded = true;
			// 		world[level].player.jumping = false;
			// 	} else if (dir === "t") {
			// 		world[level].player.velY = 0;
			// 	}
			// }
			ctx.drawImage(images.field_open, field.x, field.y);
			ctx.drawImage(images.field_beam, field.x+6, field.y+11, 8, field.height-11);
			// makeRect(field);
		}

	}
	ctx.fill();
	ctx.closePath();

	// Drawing doors
	for(var i=0;i<world[level].doors.length;i++){
		if(!world[level].doors[i].opened){
			ctx.drawImage(images.door, world[level].doors[i].x, world[level].doors[i].y);

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
				world[level].player.velY = 0;
			}
		}
	}

	// Drawing the goal
	ctx.drawImage(images.goal, world[level].goal.x, world[level].goal.y);
	// Drawing the player
	if(!dead){
		if(world[level].player.hasCube!=-1){ // Player has cube, gotta get direction
			if(world[level].player.velX > 0){
				recentDirection = true;
			}else if(world[level].player.velX < 0){
				recentDirection = false;
			}

			if(recentDirection){ // Render pointing right
				ctx.drawImage(images.player_cube_right, world[level].player.x, world[level].player.y)
			}else{ // Render point left
				ctx.drawImage(images.player_cube_left, world[level].player.x, world[level].player.y);
			}
		}else{
			ctx.drawImage(images.player_static, world[level].player.x, world[level].player.y);
			// ctx.fillStyle = "green";
			// ctx.fillRect(world[level].player.x, world[level].player.y, world[level].player.width, world[level].player.height);
		}
	}else{
		ctx.drawImage(images.player_dead, world[level].player.x, world[level].player.y);
	};
	
	// Drawing cubes
	for(var i=0;i<world[level].cubes.length;i++){
		var cube = world[level].cubes[i];
		if(cube.placed != -1){ // Cube is placed
			ctx.drawImage(images.cube, world[level].plates[cube.placed].x+5, world[level].plates[cube.placed].y-15);
		} 
		else if(!cube.pickedUp){ // Cube hasn't been picked up yet
			ctx.drawImage(images.cube, cube.x, cube.y);

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
			// 	world[level].player.velY = 0;
			// }
		}else{ // Player already has this cube 
			if(recentDirection){ // Going right
				ctx.drawImage(images.cube, world[level].player.x+22, world[level].player.y-5);
			}else{
				ctx.drawImage(images.cube, world[level].player.x-20, world[level].player.y-5);
			}
		}
	}
 
	// Drawing keys
	for(var i=0;i<world[level].keys.length;i++){
		if(!world[level].keys[i].taken){
			ctx.drawImage(images.key, world[level].keys[i].x, world[level].keys[i].y);
		}
	}

	// Drawing critters
	for(var i=0;i<world[level].critters.length;i++){
		ctx.drawImage(images.trumpet, world[level].critters[i].x, world[level].critters[i].y);
	}

	// Drawing bugs
	for(var i=0;i<world[level].bugs.length;i++){
		ctx.drawImage(images.flute, world[level].bugs[i].x, world[level].bugs[i].y);
	}

	// Drawing bread
	for(var i=0;i<world[level].bread.length;i++){
		if(!world[level].bread[i].pickedUp){
			ctx.drawImage(images.bread, world[level].bread[i].x, world[level].bread[i].y);
		}
	}
};