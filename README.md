Do not work in free time. You're on reduced pay

Also jesus, this stuff is dense
Like, my code. I mean look at the stuff that has to be done for calculating cube and plate impacts

Todo: <!-- Comment means it's been completed -->
	MAKE MORE LEVELS
		Completed Levels: <!-- This does not mean the goal works. That will be finalized at the end. -->
			<!-- Simply Walls --> 
			<!-- Simply Danger -->
			<!-- Leapfrog -->
			Persistence
			<!-- Timing -->
			<!-- Hello World -->
			<!-- Onward and Upward -->
			<!-- It's Dangerous to go Alone -->
			<!-- Flying Snake -->
			<!-- Whole Lotta Fielding -->
			<!-- Am I Right -->
			<!-- Don't Trip -->
		An extended version of "leapfrog", multi-level, with an extra cube at the end, used for opening a triple field to get the bread
		^^ AKA extreme perserverance
		Make sure you can't just wall jump over the patience is a virtue puzzle
	Rip them off of bloody trapland. 
	...Shamelessly
	<!-- Make textures working (then figure out hitboxes) -->
	<!-- Have a better way of loading texture images
		Shouldn't be a manual way of loading them. There's definitely a better way.
		Ie: an array of strings of each name of the image and file
		Can be assigned using javascript object ["property"] syntax -->
		Do this as well for backgrounds (when time comes)
	<!-- Fix the fucking levels where the player doesn't fit. That's just stupid.  -->
	<!-- Make reset be a universal function, instead of a local one for each level -->
	Do textures for:
		Background
			In hindsight, should be one of the last things done
			Custom orient each image to be fitted to the map
			...It's OK to reuse the same background image right
			Rework the naming system
			Already used:
				Tower
				99
				Daughter
				Mission Street
				Shine
				Watershed
				I don't feel so well
				Enough to go by
				Say Uncle
				Harbor
				Feather Moon
				Stephen's Cross
				Radio
				Recessional
		<!-- Player -->
		<!-- Critter -->
		<!-- Bug -->
		<!-- Wall -->
		<!-- Ice Wall -->
			<!-- Within, will have to have way of loading textures for ice wall. Maybe blocks, internal for loop. Shouldn't be hard, force dimensions to always be multiples of ten? -->
		<!-- Bread -->
		<!-- Goal -->
			<!-- Bread castle? -->
		Borders (Have different textures for different blocks)
			Perhaps the floor could be a football field?
		<!-- Numbers -->
		<!--0
			1
			2
			3
			4
			5
			6
			7
			8
			9 -->
		<!-- Key -->
		<!-- Door -->
		<!-- Cube -->
		<!-- Plate -->
		<!-- Field -->
			<!-- For fields, gonna change the way that they work, ie. -->
			<!-- Probably have a sort of laser field implemented (see concept art) -->
			<!-- This is where animation might actually come in. When fields are opened, I'll render an image of an open field, and when closed, I'll render an image of a closed field (and set its height to a much smaller value, so collision still works) -->
	<!-- Make hud parts work: -->
		<!-- Level -->
		<!-- Level count -->
		<!-- Keys -->
		<!-- Keys count -->
		<!-- Bread -->
		<!-- Bread count -->
		<!-- Code for loading those numbers -->
	<!-- Perhaps the hud could be set up in a way such that it won't rerender itself unless something's changed? If FPS is an issue I'll set that up. -->
	<!-- ^^ that's a really good idea -->
	<!-- Make quotes be loaded from each individual bread, as opposed to from a quotes array -->
	<!-- Make bugs that can fly up and down -->
	<!-- Implement no-jump walls that don't have to be fields -->
	<!-- There's an interesting glitch with corners. Worth checking out  -->
	<!-- Goal shouldn't be activated until keypress, like jump.
		Better user feel that way -->
	<!-- Fields should electrocute people -->
	<!-- Render cube being held in direction of movement -->
	<!-- Reset level on death -->
	There had better be an existential crisis somewhere in this thing	
	<!-- Perhaps an innate reset function within each world level? -->
	<!-- Implement WASD support -->
	<!-- Perhaps make it so hit boxes don't necessarily have to line up with textures? -->
		<!-- Optional -->
	Redesign position/velocity calculation to be based off of time, not based on most recent animation frame
		See example from stim/sim, might be able to help.
	<!-- Perhaps put the entire world data object into its own file, just for simpler level design. 
		Make world.js purely for rendering
		Make entities.js purely for interactions (it's OK if this and world have some overlap)
		Make a new data.js purely for storing world data -->
	<!-- Perhaps all fields should have plates on both sides of them? For simplicity to the user -->
	<!-- Get rid of all the world[level].object.img properties -->
	<!-- Make fields work possible to work based on multiple pressure plates where only one has to be open -->
	<!-- Make goal.action() reset cubes, plates, keys, etc. (BUT NOT BREAD COUNT) -->
	<!-- More debug tools -->
	<!-- Implement quotes -->
	<!-- Implement snowman style banner announcements (useful for quotes given on picking up bread) -->
	<!-- Death animation -->
	Death counter for sure
		Try using cookies, ie
			document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
		Will have to test this with the server, as local file:// doesn't store cookies
	Loading bar
		Gonna have to be tested with putty on server, as file:// and local:// are way too fast to even see it
	<!-- ...Animations? -->
	<!-- Timer? -->
	Most recent quote?
		Perhaps a small paragraph at the bottom explaining it? I'd certainly like that for a few of them.

Level ideas:
	For final level, a pseudo castle with shelves upon shelves of bread, and the atheist xmas carol in the middle, with the code in the back

	Second to last level is between, a blank level, with spawn on one end, goal on the other, and the art in the middle. 

	Level 13 "Life is one way" should be near the end (recessional)

Todo after done with all levels and mechanics:
	Finalize goals
	Instead of randomly selecting a background, custom make each image for each levels
	MAKE SURE LEVELS ARE CLEAN
	Make sure order of levels makes sense, in terms of gameplay development and difficulty
	Make sure everything has a bread
	Finalize quotes (along with style)
	Make sure all .actions work
	Remove debug information (perhaps change it to console functionality?)
	For public version
		Replace trumpets with toasters
	Playtest the fuck out of everything
	Send this game to friends (with modified endings, I'll just have to hope that that works, or test it myself on other platforms)
	<!-- For shits and giggles in the future, I should make a gui/engine for building levels. Cause why not. -->
		<!-- FUCK YEA -->
	Pay http://infinitelygentle.co.vu/

Quotes:
	<!-- Listen with the intent to understand, not the intent to reply. -->
	<!-- People will forget what you said, people will forget what you did, but people will never forget how you made them feel. -->
	<!-- If you're going through hell, keep going. -->
	<!-- A person is defined not by how they treat their equals, but by how they treat their inferiors. -->
	<!-- You never know the truth, only a truth. -->
	<!-- The last hope of the damned is not for salvation. -->
	<!-- Beware the fury of a patient man -->
	War doesn't determine who is right, only who is left.
	<!-- Everyone is Player 1, and to them everyone else is an NPC -->
	And if you're lucky, you'll find a player 2
	Assumption is the mother of all fuckups
	<!-- Give a man a mask and he will show his true face.
		-Oscar Wilde -->
	<!-- "It is our choices that show us who we truly are, far more than our abilities." -->
	<!-- "A society grows great when old men plant trees whose shade they know they shall never sit in.” -->
	<!-- This too shall pass. -->
	<!-- "I read once that the Ancient Egyptians had fifty words for sand and the Eskimos had a hundred for snow. I wish I had a thousand words for love, but all that comes to mind is the way you move against me while you sleep.	And there are no words for that." -->
	<!-- First they laugh at you, then they ignore you, then they fight you, and then you win. Ghandi -->
	