function updateInf(){
	levelInf.title.innerHTML = world[level].name;
	levelInf.body.innerHTML = world[level].body;

	var s = "";
	for(var i=0;i<world[level].bread.length;i++){
		var b = world[level].bread[i];

		if(b.pickedUp){
			s += b.message + "<br><br>";
		}
	}

	levelInf.bread.innerHTML = s;
}