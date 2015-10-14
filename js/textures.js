var textures = ["block", "bread", "bread_large", "colon_large", "cube", "door", "equals", "field_beam", "field_open", "flute", "goal", "hourglass", "ice_block", "key", "key_large", "level", "level_large", "player_dead", "player_static", "player_cube_left", "player_cube_right", "trumpet", "x", "x_large"];

var backgrounds = ["0","1","2","3","4","5","7","10"] // etc.

var itemsTotal = 12 + textures.length + backgrounds.length; 

var images = {
	// backgrounds:[new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
	nums_large:[new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
	plates: [new Image(),new Image()],
	backgrounds:{},
}

for(var i=0;i<textures.length;i++){
	// Javascript objects can be fun
	images[textures[i]] = new Image();
	images[textures[i]].src = "resources/"+textures[i]+".png";
	images[textures[i]].onLoad = itemsLoaded++;
}

for(var i=0;i<backgrounds.length;i++){
	images.backgrounds[backgrounds[i]] = new Image(),
	images.backgrounds[backgrounds[i]].src = "resources/backgrounds/"+backgrounds[i]+".png";
	images.backgrounds[backgrounds[i]].onLoad = itemsLoaded++;
}

images.plates[0].src = "resources/plate_open.png";
images.plates[0].onLoad = itemsLoaded++;
images.plates[1].src = "resources/plate_closed.png";
images.plates[1].onLoad = itemsLoaded++;

for(var i=0;i<10;i++){
	images.nums_large[i].src = "resources/"+i+"_large.png";
	images.nums_large[i].onLoad = itemsLoaded++;
}

// images.backgrounds[0].src = "resources/backgrounds/atheist.jpg";
// images.backgrounds[1].src = "resources/backgrounds/between.jpg";
// images.backgrounds[2].src = "resources/backgrounds/daughter.jpg";
// images.backgrounds[3].src = "resources/backgrounds/eric.jpg";
// images.backgrounds[4].src = "resources/backgrounds/gravity.jpg";
// images.backgrounds[5].src = "resources/backgrounds/harbor.jpg";
// images.backgrounds[6].src = "resources/backgrounds/homecoming.jpg";
// images.backgrounds[7].src = "resources/backgrounds/lullaby.jpg";
// images.backgrounds[8].src = "resources/backgrounds/medea.jpg";
// images.backgrounds[9].src = "resources/backgrounds/mission.jpg";
// images.backgrounds[10].src = "resources/backgrounds/momentum.jpg";
// images.backgrounds[11].src = "resources/backgrounds/shasta.jpg";
// images.backgrounds[12].src = "resources/backgrounds/shine.jpg";
// images.backgrounds[13].src = "resources/backgrounds/whatever.jpg";

// images.bread.src = "resources/bread.png";
// images.bread_large.src = "resources/bread_large.png";
// images.colon_large.src = "resources/colon_large.png";
// images.cube.src = "resources/cube.png";
// images.equals.src = "resources/equals.png";
// images.fieldBeam.src = "resources/field-beam.png";
// images.fieldOpen.src = "resources/field-open.png";
// images.goal.src = "resources/bread-castle.png";
// images.hourglass.src = "resources/hourglass.png";
// images.key.src = "resources/key.png";
// images.key_large.src = "resources/key_large.png";
// images.level.src = "resources/level.png";
// images.level_large.src = "resources/level_large.png";


// images.player_dead.src = "resources/player-dead2.png";
// images.player_static.src = "resources/player-static.png";
// images.player_cube_left.src = "resources/player-holdingcube-left.png";
// images.player_cube_right.src = "resources/player-holdingcube-right.png";
// images.trumpet.src = "resources/trumpet.png";
// images.x.src = "resources/x.png";
// images.x_large.src = "resources/x_large.png";
// images.trumpet.onload=function(){load();}