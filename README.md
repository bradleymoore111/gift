Level N: 2 gates, "leap frog" style of opening gates (think of using 2 jammers to get both through a gate from Talos Principle)

Do not work in free time. You're on reduced pay

Also jesus, this stuff is dense
Like, my code. I mean look at the stuff that has to be done for calculating cube and plate impacts

Todo: <!-- Comment means it's been completed -->
	MAKE MORE LEVELS
	<!-- Make textures working (then figure out hitboxes) -->
	Do textures for:
		Player
		<!-- Critter -->
		Wall
		<!-- Bread -->
		Goal
		Floor (Have different textures for different blocks)
		Key
		Door
		Cube
		Plate
		Field
	Make quotes be loaded from each individual bread, as opposed to from a quotes array
	Images shouldn't have to be stored within the data object. When they're rendered, they should be called directly from the images object.
		That being said, this is optional, as it would mean I'd have to manually render each drawing as opposed to being able to nicely call a function for that
	Implement no-jump walls that don't have to be fields
	<!-- Reset level on death -->
	There had better be an existential crisis somewhere in this thing	
	<!-- Perhaps an innate reset function within each world level? -->
	<!-- Perhaps put the entire world data object into its own file, just for simpler level design. 
		Make world.js purely for rendering
		Make entities.js purely for interactions (it's OK if this and world have some overlap)
		Make a new data.js purely for storing world data -->
	Perhaps all fields should have plates on both sides of them? For simplicity to the user
	<!-- Make fields work possible to work based on multiple pressure plates where only one has to be open -->
	Make goal.action() reset cubes, plates, keys, etc. (BUT NOT BREAD COUNT)
	<!-- More debug tools -->
	<!-- Implement quotes -->
	<!-- Implement snowman style banner announcements (useful for quotes given on picking up bread) -->
	Death animation
	...Animations?


	Quotes to include somewhere  in the game:
		Listen with the intent to understand, not the intent to reply.
		People will forget what you said, people will forget what you did, but people will never forget how you made them feel.
		If you're going through hell, keep going.
		A person is defined not by how they treat their equals, but by how they treat their inferiors.
		You never know the truth, only a truth.
		The last hope of the damned is not for salvation.

	For shits and giggles in the future, I should make a gui/engine for building levels. Cause why not.