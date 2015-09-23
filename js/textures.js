var images = {
	backgrounds:[new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
	bread: new Image(),
	bread_large: new Image(),
	colon_large: new Image(),
	cube: new Image(),
	equals: new Image(),
	fieldBeam: new Image(),
	fieldOpen: new Image(),
	goal: new Image(),
	hourglass: new Image(),
	key: new Image(),
	key_large: new Image(),
	level: new Image(),
	level_large: new Image(),
	nums_large:[new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()],
	plates: [new Image(),new Image()],
	playerDead: new Image(),
	playerStatic: new Image(),
	playerWithCube: new Image(),
	trumpet: new Image(),
	x: new Image(),
	x_large: new Image(),
}

images.backgrounds[0].src = "resources/backgrounds/atheist.jpg";
images.backgrounds[1].src = "resources/backgrounds/between.jpg";
images.backgrounds[2].src = "resources/backgrounds/daughter.jpg";
images.backgrounds[3].src = "resources/backgrounds/eric.jpg";
images.backgrounds[4].src = "resources/backgrounds/gravity.jpg";
images.backgrounds[5].src = "resources/backgrounds/harbor.jpg";
images.backgrounds[6].src = "resources/backgrounds/homecoming.jpg";
images.backgrounds[7].src = "resources/backgrounds/lullaby.jpg";
images.backgrounds[8].src = "resources/backgrounds/medea.jpg";
images.backgrounds[9].src = "resources/backgrounds/mission.jpg";
images.backgrounds[10].src = "resources/backgrounds/momentum.jpg";
images.backgrounds[11].src = "resources/backgrounds/shasta.jpg";
images.backgrounds[12].src = "resources/backgrounds/shine.jpg";
images.backgrounds[13].src = "resources/backgrounds/whatever.jpg";

images.bread.src = "resources/bread.png";
images.bread_large.src = "resources/bread_large.png";
images.colon_large.src = "resources/colon_large.png";
images.cube.src = "resources/cube.png";
images.equals.src = "resources/equals.png";
images.fieldBeam.src = "resources/field-beam.png";
images.fieldOpen.src = "resources/field-open.png";
images.goal.src = "resources/bread-castle.png";
images.hourglass.src = "resources/hourglass.png";
images.key.src = "resources/key.png";
images.key_large.src = "resources/key_large.png";
images.level.src = "resources/level.png";
images.level_large.src = "resources/level_large.png";

images.plates[0].src = "resources/plate-open.png";
images.plates[1].src = "resources/plate-closed.png";

for(var i=0;i<10;i++){
	images.nums_large[i].src = "resources/"+i+"_large.png";
}

images.playerDead.src = "resources/player-dead2.png";
images.playerStatic.src = "resources/player-static.png";
images.playerWithCube.src = "resources/player-holdingcube.png";
images.trumpet.src = "resources/trumpet.png";
images.x.src = "resources/x.png";
images.x_large.src = "resources/x_large.png";
// images.trumpet.onload=function(){load();}