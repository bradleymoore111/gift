function updateInf(){
	levelInf.title.innerHTML = world[level].name;
	levelInf.body.innerHTML = world[level].body;

	var yep = true;
	for(var i=0;i<world[level].bread.length;i++){
		// console.log(world[level].bread[i].pickedUp);
		if(!world[level].bread[i].pickedUp){
			yep = false;
		}
	}
	if(yep){
		levelInf.bread.innerHTML = world[level].message;
	}else{
		levelInf.bread.innerHTML = "";
	}
}