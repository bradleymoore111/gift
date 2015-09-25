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

world[0] = { // Hello World
	name: "Hello World",
	player:{
		x: width/2,
		y: height - 20,
		width: 16,
		height: 45,
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
			y: height-21,
			width: 11,
			height: 11,
			pickedUp: false,
			img: images.bread,
			quote: "Most people do not listen with the intent to understand; they listen with the intent to reply.",
			subQuote:"Stephen R. Covey",
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
		x: 404, // Error: Not Found
		y: 190,
		width: 51,
		height: 50,
		action: function (){
			world[0].player.x = width/2;
			world[0].player.y = height-60;
			world[0].player.velX = 0;
			world[0].player.velY = 0;
			newLevel++;
		}
	},
	reset:function(){
		dead = false;
		world[0].player.x = width/2;
		world[0].player.y = height-60;
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

world[1] = { // Am I Right
	name: "Am I Right",
	player:{
		x: 50,
		y: height - 20,
		width: 16,
		height: 45,
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
			y: height-226,
			width: 11,
			height: 11,
			pickedUp: false,
			img: images.bread,
			quote: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
			subQuote:"Maya Angelou",
		}
	],
	boxes:[],
	cubes:[
		{
			x: 220,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
			img: images.cube,
		}
	],
	plates:[
		{
			x: 250,
			y: height-20,
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
		y: height-60,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = 20;
			world[level].player.y = height-60;
			world[level].player.velX = 0,
			world[level].player.velY = 0,
			world[level].player.jumping = false,
			world[level].player.grounded = false,
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		dead = false;
		world[1].player.x = 20;
		world[1].player.y = height-60;
		world[1].player.velX = 0;
		world[1].player.velY = 0;
		world[1].player.hasCube = -1;
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
			y: height-30,
			width: 10,
			height: 10,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
			img: images.cube
		};
		// Reset plates
		world[1].plates[0] = {
			x: 260,
			y: height-20,
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

world[2] = { // Onward and Upward
	name: "Onward and Upward",
	player:{
		x: width / 2,
		y: height - 20,
		width: 16,
		height: 45,
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
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
			img: images.trumpet,
		},
		{
			xMin: 250,
			xMax: 400,
			x: 260,
			y: 215,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,	
			img: images.trumpet,
		},
		{
			xMin: 500,
			xMax: 650,
			x: 510,
			y: 215,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,	
			img: images.trumpet,
		},
	],
	bread:[
		{
			x: 20,
			y: 214,
			width: 11,
			height: 11,
			pickedUp: false,
			img: images.bread,
			quote: "If you're going through hell, keep going.",
			subQuote:"Winston Churchill",
		}
	],
	boxes:[
		{
			x: 700,
			y: 130,
			width: 240,
			height: 145,
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
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
			img: images.cube,
		}
	],
	plates:[
		{
			x: 830,
			y: 120,
			width: 20,
			height: 15,
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
		width: 51,
		height: 50,
		action: function (){
			world[2].player.x = width/20;
			world[2].player.y = height-60;
			world[2].player.velX = 0,
			world[2].player.velY = 0,
			world[2].player.hasCube = -1;
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		dead = false;
		world[2].player.x = width/2;
		world[2].player.y = height-60;
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
			img: images.cube,
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

world[3] = { // Flying Snake
	name: "Flying Snake",
	player:{
		x: width-20,
		y: height-60,
		width: 16,
		height: 45,
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
			x: 50,
			y: 24,
			width: 11,
			height: 11,
			pickedUp: false,
			img: images.bread,
			quote: "The last hope of the damned is not for salvation.",
			subQuote:"...",
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
		width: 51,
		height: 50,
		action: function(){
			world[3].player.x = width-20;
			world[3].player.y = height-60;
			world[3].player.velX = 0,
			world[3].player.velY = 0,
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		dead = false;
		world[3].player.x = width-20;
		world[3].player.y = height-60;
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

world[4] = { // It's Dangerous to go Alone
	name: "It's Dangerous to go Alone",
	player:{
		x: width-20,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 350,
			xMax: 500,
			x: 410,
			y: 240,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
			img: images.trumpet,
		},
		{
			xMin: 450,
			xMax: 600,
			x: 510,
			y: 140,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
			img: images.trumpet,
		},
	],
	bread:[
		{
			x: 430,
			y: 239,
			width: 11,
			height: 11,
			pickedUp: false,
			img: images.bread,
			quote: "If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals.",
			subQuote:"J.K. Rowling",}
		,
		{
			x: 530,
			y: 139,
			width: 11,
			height: 11,
			pickedUp: false,
			img: images.bread,
			quote: "You never know the truth, only a truth.",
			subQuote:"",}
		,
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
		width: 51,
		height: 50,
		action: function(){
			world[4].player.x = width-20;
			world[4].player.y = height-60;
			world[4].player.velX = 0,
			world[4].player.velY = 0,
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		dead = false;
		world[4].player.x = width-20;
		world[4].player.y = height-60
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

world[5] = { // Whole lotta fielding
	name: "Whole lotta fielding",
	player:{
		x: 20,
		y: height-60,
		width: 16,
		height: 45,
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
			x: width-20,
			y: height-60,
			width: 11,
			height: 11,
			pickedUp: false,
			img: images.bread,
			quote: "Cave furorem patientis",
			subQuote:"John Dryden",}
		,
	],
	boxes:[],
	cubes:[
		{
			x: 30,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 0,
			img: images.cube,
		},
		{
			x: 55,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 1,
			img: images.cube,
		},
	],
	plates:[
		{
			x: 100,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		},
		{
			x: 160,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 1,
		},
		{
			x: 220,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 2,
		},
		{
			x: 280,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 3,
		},
		{
			x: 340,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 4,
		},
		{
			x: 400,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 5,
		},
		{
			x: 560,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 6,
		},
		{
			x: 620,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 7,
		},
		{
			x: 680,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 8,
		},
		{
			x: 740,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 9,
		},
		{
			x: 800,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 10,
		},
		{
			x: 860,
			y: height-15,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 11,
		},
	],
	fields:[
		{
			x: 130,
			y: height-130,
			width: 20,
			height: 120,
			targets: [0,1], // Which element needs to activate it
			opened: false,
		},
		{
			x: 250,
			y: height-130,
			width: 20,
			height: 120,
			targets: [2,3], // Which element needs to activate it
			opened: false,
		},
		{
			x: 370,
			y: height-130,
			width: 20,
			height: 120,
			targets: [4,5], // Which element needs to activate it
			opened: false,
		},
		{
			x: 590,
			y: height-130,
			width: 20,
			height: 120,
			targets: [6,7], // Which element needs to activate it
			opened: false,
		},
		{
			x: 710,
			y: height-130,
			width: 20,
			height: 120,
			targets: [8,9], // Which element needs to activate it
			opened: false,
		},
		{
			x: 830,
			y: height-130,
			width: 20,
			height: 120,
			targets: [10,11], // Which element needs to activate it
			opened: false,
		},
	],
	keys:[],
	doors:[],
	goal:{
		x: 470,
		y: height-70,
		width: 51,
		height: 50,
		action: function (){
			world[5].player.x = 20;
			world[5].player.y = height-20;
			world[5].player.velX = 0,
			world[5].player.velY = 0,
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		dead = false;
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
	},
}

// Example key usage
world[6] = {
	player:{
		x: width-20,
		y: height-60,
		width: 16,
		height: 45,
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
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
			img: images.trumpet,
		},
		{
			xMin: 500,
			xMax: 550,
			x: 510,
			y: 140,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
			img: images.trumpet,
		},
	],
	bread:[
		{
			x: 20,
			y: 20,
			width: 11,
			height: 11,
			pickedUp: false,
			img: images.bread,
			quote: "temp",
			subQuote:"",
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
			width: 24,
			height: 10,
			taken: false,
			img: images.key,
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
		y: 50,
		width: 51,
		height: 50,
		action: function (){
			world[6].player.x = width/2;
			world[6].player.y = height-60;
			world[6].player.velX = 0,
			world[6].player.velY = 0,
			newLevel = 0; // Or bonus level or something
		}
	},
	reset:function(){
		dead = false;
		world[6].player.x = width/2;
		world[6].player.y = height-60;
		world[6].player.velX = 0;
		world[6].player.velY = 0;
		for(var i=0;i<world[6].bread.length;i++){
			if(world[6].bread[i].pickedUp){
				world[6].bread[i].pickedUp = false;
				bread--;
			}
		}
		// Everything below this as needed
		// Reset cubes
		// Reset plates
		// Reset fields
		// Reset keys
		world[6].keys[0] = {
			x: 50,
			y: 70,
			width: 20,
			height: 20,
			taken: false,
			img: images.key,
		};
		// Reset doors
		world[6].doors[0] = {
			x: 310,
			y: 20,
			width: 20,
			height: 80,
			opened: false,
		};
	},
};

