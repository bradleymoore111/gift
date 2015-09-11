var worldBorder = [
	{
		x: 0,
		y: 0,
		width: 10,
		height: height,
	},
	{
		x: 0,
		y: height - 10,
		width: width,
		height: 50,
	},
	{
		x: width - 10,
		y: 0,
		width: 50,
		height: height,
	},
	{
		x: 0,
		y: 0,
		width: width,
		height: 10,
	}
];

world[0] = { // Tutorial
	player:{
		x: width/2,
		y: height - 20,
		width: 5,
		height: 5,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		doubled: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[],
	bread:[
		{
			x: 20,
			y: height-20,
			width: 10,
			height: 10,
			pickedUp: false,
		}
	],
	boxes:[ // basically platforms, what everything is currently based on
		{
			x: 730,
			y: 370,
			width: 270,
			height: 30,
		},
		{
			x: 820,
			y: 340,
			width: 180,
			height: 60,
		},
		{
			x: 910,
			y: 310,
			width: 90,
			height: 90,
		},
		{
			x: 750,
			y: 280,
			width: 100,
			height: 30,
		},
		{
			x: 400,
			y: 240,
			width: 300,
			height: 30,
		}
	],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	goal:{
		x: 400,
		y: 190,
		width: 50,
		height: 50,
		action: function (){
			world[0].player.x = width/2;
			world[0].player.y = height-20;
			world[0].player.velX = 0;
			world[0].player.velY = 0;
			level++;
		}
	},
	reset:function(){
		world[0].player.x = width/2;
		world[0].player.y = height-20;
		world[0].player.velX = 0;
		world[0].player.velY = 0;
		for(var i=0;i<world[0].bread.length;i++){
			if(world[0].bread[i].pickedUp){
				world[0].bread[i].pickedUp = false;
				bread--;
			}
		}
		// Everything below this as needed
		// Reset cubes
		// Reset plates
		// Reset fields
		// Reset keys
		// Reset doors
	}
};

world[1] = {
	player:{
		x: 50,
		y: height - 20,
		width: 5,
		height: 5,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[],
	bread:[
		{
			x: 305,
			y: height-225,
			width: 10,
			height: 10,
			pickedUp: false,
		}
	],
	boxes:[],
	cubes:[
		{
			x: 220,
			y: height-20,
			width: 10,
			height: 10,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		}
	],
	plates:[
		{
			x: 260,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		}
	],
	fields:[
		{
			x: 300,
			y: height-210,
			width: 20,
			height: 200,
			targets: [0], // Which element needs to activate it
			opened: false,
		}
	],
	keys:[],
	doors:[],
	goal:{
		x: 400,
		y: 350,
		width: 50,
		height: 50,
		action: function (){
			world[level].player.x = 20;
			world[level].player.y = height-20;
			world[level].player.velX = 0,
			world[level].player.velY = 0,
			world[level].player.jumping = false,
			world[level].player.grounded = false,
			level++; // Or bonus level or something
		}
	},
	reset:function(){
		world[1].player.x = 20;
		world[1].player.y = height-20;
		world[1].player.velX = 0;
		world[1].player.velY = 0;
		for(var i=0;i<world[1].bread.length;i++){
			if(world[1].bread[i].pickedUp){
				world[1].bread[i].pickedUp = false;
				bread--;
			}
		}
		// Everything below this as needed
		// Reset cubes
		world[1].cubes[0] = {
			x: 220,
			y: height-20,
			width: 10,
			height: 10,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		};
		// Reset plates
		world[1].plates[0] = {
			x: 260,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		};
		// Reset fields
		world[1].fields[0] = {
			x: 300,
			y: height-210,
			width: 20,
			height: 200,
			targets: [0], // Which element needs to activate it
			opened: false,
		};
		// Reset keys
		// Reset doors
	},
};

world[2] = {
	player:{
		x: width / 2,
		y: height - 20,
		width: 5,
		height: 5,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 50,
			xMax: 200,
			x: 60,
			y: 215,
			height: 10,
			width: 10,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 250,
			xMax: 400,
			x: 260,
			y: 215,
			height: 10,
			width: 10,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,	
		},
		{
			xMin: 500,
			xMax: 650,
			x: 510,
			y: 215,
			height: 10,
			width: 10,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,	
		},
	],
	bread:[
		{
			x: 20,
			y: 20,
			width: 10,
			height: 10,
			pickedUp: false,
		}
	],
	boxes:[
		{
			x: 700,
			y: 130,
			width: 240,
			height: 220,
		},
		{
			x: 10,
			y: 225,
			width: 690,
			height: 50,
		}
	],
	cubes:[
		{
			x: 220,
			y: height-20,
			width: 10,
			height: 10,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		}
	],
	plates:[
		{
			x: 830,
			y: 125,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		}
	],
	fields:[
		{
			x: 790,
			y: 10,
			width: 20,
			height: 120,
			targets: [0], // Which element needs to activate it
			opened: false,
		}
	],
	keys:[],
	doors:[],
	goal:{
		x: 700,
		y: 80,
		width: 50,
		height: 50,
		action: function (){
			world[2].player.x = width/20;
			world[2].player.y = height-20;
			world[2].player.velX = 0,
			world[2].player.velY = 0,
			world[2].player.hasCube = -1;
			level++; // Or bonus level or something
		}
	},
	reset:function(){
		world[2].player.x = width/2;
		world[2].player.y = height-20;
		world[2].player.velX = 0;
		world[2].player.velY = 0;
		world[2].player.hasCube = -1;
		for(var i=0;i<world[2].bread.length;i++){
			if(world[2].bread[i].pickedUp){
				world[2].bread[i].pickedUp = false;
				bread--;
			}
		}
		// Everything below this as needed
		// Reset cubes
		world[2].cubes[0] = {
			x: 220,
			y: height-20,
			width: 10,
			height: 10,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		};
		// Reset plates
		world[2].plates[0] = {
			x: 830,
			y: 125,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		};
		// Reset fields
		world[2].fields[0] = {
			x: 790,
			y: 10,
			width: 20,
			height: 120,
			targets: [0], // Which element needs to activate it
			opened: false,
		};
		// Reset keys
		// Reset doors
	},
};

world[3] = {
	player:{
		x: width-20,
		y: height-20,
		width: 5,
		height: 5,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[],
	bread:[
		{
			x: 20,
			y: 20,
			width: 10,
			height: 10,
			pickedUp: false,
		}
	],
	boxes:[
		{
			x: 800,
			y: 100,
			width: 100,
			height: 300,
		},
		{
			x: 600,
			y: 0,
			width: 100,
			height: 300,
		},
		{
			x: 400,
			y: 100,
			width: 100,
			height: 300,
		},
		{
			x: 200,
			y: 0,
			width: 100,
			height: 300,
		},
		{
			x: 0,
			y: 100,
			width: 100,
			height: 300,
		}
	],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	goal:{
		x: 20,
		y: 50,
		width: 50,
		height: 50,
		action: function(){
			world[3].player.x = width-20;
			world[3].player.y = height-20;
			world[3].player.velX = 0,
			world[3].player.velY = 0,
			level++; // Or bonus level or something
		}
	},
	reset:function(){
		world[3].player.x = width-20;
		world[3].player.y = height-20;
		world[3].player.velX = 0;
		world[3].player.velY = 0;
		for(var i=0;i<world[3].bread.length;i++){
			if(world[3].bread[i].pickedUp){
				world[3].bread[i].pickedUp = false;
				bread--;
			}
		}
		// Everything below this as needed
		// Reset cubes
		// Reset plates
		// Reset fields
		// Reset keys
		// Reset doors
	},
};

world[4] = {
	player:{
		x: width-20,
		y: height-20,
		width: 5,
		height: 5,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 400,
			xMax: 450,
			x: 410,
			y: 240,
			height: 10,
			width: 10,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 500,
			xMax: 550,
			x: 510,
			y: 140,
			height: 10,
			width: 10,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
	],
	bread:[
		{
			x: 20,
			y: 20,
			width: 10,
			height: 10,
			pickedUp: false,
		}
	],
	boxes:[
		{
			x: 0,
			y: 250,
			width: 800,
			height: 150,
		},
		{
			x: 100,
			y: 150,
			width: 900,
			height: 20,
		},
	],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	goal:{
		x: 900,
		y: 100,
		width: 50,
		height: 50,
		action: function(){
			world[4].player.x = width-20;
			world[4].player.y = height-20;
			world[4].player.velX = 0,
			world[4].player.velY = 0,
			level++; // Or bonus level or something
		}
	},
	reset:function(){
		world[4].player.x = width-20;
		world[4].player.y = height-20;
		world[4].player.velX = 0;
		world[4].player.velY = 0;
		for(var i=0;i<world[4].bread.length;i++){
			if(world[4].bread[i].pickedUp){
				world[4].bread[i].pickedUp = false;
				bread--;
			}
		}
		// Everything below this as needed
		// Reset cubes
		// Reset plates
		// Reset fields
		// Reset keys
		// Reset doors
	},
};

// Example key usage
world[5] = {
	player:{
		x: width-20,
		y: height-20,
		width: 5,
		height: 5,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 400,
			xMax: 450,
			x: 410,
			y: 240,
			height: 10,
			width: 10,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 500,
			xMax: 550,
			x: 510,
			y: 140,
			height: 10,
			width: 10,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
	],
	bread:[
		{
			x: 20,
			y: 20,
			width: 10,
			height: 10,
			pickedUp: false,
		}
	],
	boxes:[ // basically platforms, what everything is currently based on
		{
			x: 20,
			y: 100,
			width: 80,
			height: 10,
		},
		{
			x: 80,
			y: 180,
			width: 80,
			height: 10
		},
		{
			x: 160,
			y: 140,
			width: 120,
			height: 10
		},
		{
			x: 310,
			y: 100,
			width: 110,
			height: 10
		}
	],
	cubes:[],
	plates:[],
	fields:[],
	keys:[
		{
			x: 50,
			y: 70,
			width: 20,
			height: 20,
			taken: false,
		},
	],
	doors:[
		{
			x: 310,
			y: 20,
			width: 20,
			height: 80,
			opened: false,
		},
	],
	goal:{
		x: 400,
		y: 30,
		width: 50,
		height: 60,
		action: function (){
			world[5].player.x = width/2;
			world[5].player.y = height-20;
			world[5].player.velX = 0,
			world[5].player.velY = 0,
			level = 0; // Or bonus level or something
		}
	},
	reset:function(){
		world[5].player.x = width/2;
		world[5].player.y = height-20;
		world[5].player.velX = 0;
		world[5].player.velY = 0;
		for(var i=0;i<world[5].bread.length;i++){
			if(world[5].bread[i].pickedUp){
				world[5].bread[i].pickedUp = false;
				bread--;
			}
		}
		// Everything below this as needed
		// Reset cubes
		// Reset plates
		// Reset fields
		// Reset keys
		world[5].keys[0] = {
			x: 50,
			y: 70,
			width: 20,
			height: 20,
			taken: false,
		};
		// Reset doors
		world[5].doors[0] = {
			x: 310,
			y: 20,
			width: 20,
			height: 80,
			opened: false,
		};
	},
};