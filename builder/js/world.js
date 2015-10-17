function updateWorld(){

	ctx.beginPath(); // This is where map rendering goes

	// Drawing world
	ctx.fillStyle = "black";

	// Drawing borders
	for (var i=0; i < worldBorder.length; i++) {
		makeRect(worldBorder[i]);
	}

	// Drawing boxes
	for(var i=0;i<world.boxes.length; i++){
		for(var j=0;j<world.boxes[i].width/10;j++){
			for(var k=0;k<world.boxes[i].height/10;k++){
				ctx.drawImage(images.block, world.boxes[i].x + j*10, world.boxes[i].y + k*10);
			}
		}
		// makeRect(world.boxes[i]);
	}	

	ctx.fill(); // Filling in all the borders, both border style and fill style should be black.
	ctx.closePath();

	

	ctx.beginPath();
	ctx.fillStyle = "cyan";
	makeRect(world.spawn);
	ctx.fill();
	ctx.closePath();

	for(var i=0;i<world.noJumps.length;i++){
		for(var j=0;j<world.noJumps[i].width/10;j++){
			for(var k=0;k<world.noJumps[i].height/10;k++){
				ctx.drawImage(images.ice_block, world.noJumps[i].x + j*10, world.noJumps[i].y + k*10);
			}
		}
		// ctx.rect(world.noJumps[i].x, world.noJumps[i].y, world.noJumps[i].width, world.noJumps[i].height);
		// makeRect(world.noJumps[i]);
	}

	// Drawing plates
	for(var i=0;i<world.plates.length;i++){
		ctx.drawImage(images.plates[0], world.plates[i].x, world.plates[i].y);
	}

	// Drawing fields
	for(var i=0;i<world.fields.length;i++){
		var field = world.fields[i];

		ctx.drawImage(images.field_open, field.x, field.y);
		ctx.drawImage(images.field_beam, field.x+6, field.y+11, 8, field.height-11);
	}

	// Drawing doors
	for(var i=0;i<world.doors.length;i++){
		if(!world.doors[i].opened){
			ctx.drawImage(images.door, world.doors[i].x, world.doors[i].y);
		}
	}

	// Drawing the goal
	ctx.drawImage(images.goal, world.goal.x, world.goal.y);
	
	// Drawing cubes
	for(var i=0;i<world.cubes.length;i++){
		var cube = world.cubes[i];
		ctx.drawImage(images.cube, cube.x, cube.y);
	}
 
	// Drawing keys
	for(var i=0;i<world.keys.length;i++){
		ctx.drawImage(images.key, world.keys[i].x, world.keys[i].y);
	}

	// Drawing critters
	for(var i=0;i<world.critters.length;i++){
		ctx.drawImage(images.trumpet, world.critters[i].x, world.critters[i].y);
	}

	// Drawing bugs
	for(var i=0;i<world.bugs.length;i++){
		ctx.drawImage(images.flute, world.bugs[i].x, world.bugs[i].y);
	}

	// Drawing bread
	for(var i=0;i<world.bread.length;i++){
		ctx.drawImage(images.bread, world.bread[i].x, world.bread[i].y);
	}
};