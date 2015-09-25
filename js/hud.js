function updateHud(){
	currentTime = ((new Date).getTime() - startingTime);

	var s = level+""+itemKeys+""+bread+""+((currentTime/1000)|0);

	if(s==oldHud){
		// console.log("It's working");
		return 0;
	}
	// console.log("Redrawing hud");
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

	firstDigit = bread/10 | 0;
	secondDigit = bread%10;
	htx.drawImage(images.nums_large[firstDigit], 553, 5);
	htx.drawImage(images.nums_large[secondDigit], 573, 5);

	// Time
	htx.drawImage(images.hourglass, 750, 5);

	var mins = (currentTime/60000) | 0;

	firstDigit = ((mins%100)/10) | 0;
	secondDigit = mins%10;

	htx.drawImage(images.nums_large[firstDigit], 775, 5);
	htx.drawImage(images.nums_large[secondDigit], 795, 5);

	htx.drawImage(images.colon_large, 810, 5);

	var seconds = ((currentTime/1000)|0)%60;

	firstDigit = (seconds/10)|0;
	secondDigit = seconds%10;

	htx.drawImage(images.nums_large[firstDigit], 826, 5);
	htx.drawImage(images.nums_large[secondDigit], 846, 5);

	oldHud = level+""+itemKeys+""+bread+""+((currentTime/1000)|0);
}