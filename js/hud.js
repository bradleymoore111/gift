function updateHud(){
	var s = level+""+itemKeys+""+bread;

	if(s==oldHud){
		return 0;
	}
	console.log("Redrawing hud");
	htx.clearRect(0, 0, width, 40);
	
	// Level
	htx.drawImage(images.level_large, 5, 5);
	htx.drawImage(images.equals, 95, 10);

	// Calculate each digit of level. If <10, make first digit 0. 
	var firstDigit = level/10 | 0;
	var secondDigit = level%10;
	htx.drawImage(images.nums_large[firstDigit], 120, 5); // first digit
	htx.drawImage(images.nums_large[secondDigit], 140, 5);
	
	// Keys
	htx.drawImage(images.key_large, 250, 5);
	htx.drawImage(images.x_large, 325, 20);
	htx.drawImage(images.nums_large[itemKeys], 343, 5);

	// Bread
	htx.drawImage(images.bread_large, 500, 5);
	htx.drawImage(images.x_large, 535, 20);

	var firstDigit = bread/10 | 0;
	var secondDigit = bread%10;
	htx.drawImage(images.nums_large[firstDigit], 553, 5);
	htx.drawImage(images.nums_large[secondDigit], 573, 5);

	oldHud = level+""+itemKeys+""+bread;
}