console.log("hahahahahaha");

// Declare the variables
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
	// Give game physics engine
	game.physics.startSystem(Phaser.Physics.ARCADE);
	// Add the sky
	game.add.sprite(0, 0, 'sky');

	// Physics group
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	// Ledges
	var ledge = platforms.create(400,400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	// Player sprite
	player = game.add.sprite(32, game.world.height - 150, 'dude');
		//animate
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);
		//physics
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	// Enemy sprite
	enemy = game.add.sprite(750, 20, 'enemy');
		//animate
		enemy.animations.add('left', [0,1], 10, true);
		enemy.animations.add('right', [2,3], 10, true);
		//physics
		game.physics.arcade.enable(enemy);
		enemy.body.bounce.y = 0.2;
		enemy.body.gravity.y = 500;
		enemy.body.collideWorldBounds = true;


 //Enemy sprite
	enemy2 = game.add.sprite(10, 20, 'enemy');
		//animate
		enemy2.animations.add('left', [0,1], 10, true);
		enemy2.animations.add('right', [2,3], 10, true);
		//physics
		game.physics.arcade.enable(enemy2);
		enemy2.body.bounce.y = 0.2;
		enemy2.body.gravity.y = 500;
		enemy2.body.collideWorldBounds = true;

		//Enemy sprite
	enemy3 = game.add.sprite(200, 20, 'enemy');
		//animate
		enemy3.animations.add('left', [0,1], 10, true);
		enemy3.animations.add('right', [2,3], 10, true);
		//physics
		game.physics.arcade.enable(enemy3);
		enemy3.body.bounce.y = 0.2;
		enemy3.body.gravity.y = 500;
		enemy3.body.collideWorldBounds = true;

	// Keyboard inputs
	cursors = game.input.keyboard.createCursorKeys();

	//create stars
	stars = game.add.physicsGroup();
	stars.enableBody = true;
	//Loop to create 12 stars
	//   Start      end     add 1 every time
	for (var i = 0; i < 12; i++) {
		var star = stars.create(i * 70, 0,'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = Math.random() * 0.9;
	}
}

function update(){
	//make both of them collide with the platform
game.physics.arcade.collide(player, platforms);
game.physics.arcade.collide(enemy, platforms);
game.physics.arcade.collide(enemy2, platforms);
game.physics.arcade.collide(enemy3, platforms);
//Player speed reset to 0
player.body.velocity.x = 0;
//keyboard events
if (cursors.left.isDown){
	player.body.velocity.x = -150;
	player.animations	.play('left');
} else if (cursors.right.isDown) {
	player.body.velocity.x = 150;
	player.animations.play('right');
} else {
	player.animations.stop();
	player.frame = 4;
}
//Allow player to jump
if (cursors.up.isDown  && player.body.touching.down) {
	player.body.velocity.y = -300;
}
//enemy AI
if (enemy.x > 749) {
	enemy.animations.play('left');
	enemy.body.velocity.x = -120;
} else if (enemy.x < 405) {
	enemy.animations.play('right');
	enemy.body.velocity.x = 120;
}

if (enemy2.x > 200) {
	enemy2.animations.play('left');
	enemy2.body.velocity.x = -80;
} else if (enemy2.x < 20) {
	enemy2.animations.play('right');
	enemy2.body.velocity.x = 80;
}

if (enemy3.x > 749) {
	enemy3.animations.play('left');
	enemy3.body.velocity.x = -150;
} else if (enemy3.x < 200) {
	enemy3.animations.play('right');
	enemy3.body.velocity.x = 150;
}

// Collisions
game.physics.arcade.collide(stars, platforms);

game.physics.arcade.overlap(player, stars, collectStar, null, this);
game.physics.arcade.overlap(player, enemy, loseLife, null, this);
game.physics.arcade.overlap(player, enemy2, loseLife, null, this);
game.physics.arcade.overlap(player, enemy3, loseLife, null, this);
}

// Define collectStar function
function collectStar (player, star){
star.kill();
score = score++;
// create a star to replace killed star
star = star.create(Math.floor(Math.random() * 750),0, 'star');
star.body.gravity.y = 200;
star.body.bounce.y = Math.random() * 0.9;
}

//Define loseLife func
function loseLife (player,enemy) {
enemy.kill();
score = score - 5;
enemy.reset(750, 20)
}

//Define loseLife func
function loseLife (player,enemy) {
enemy.kill();
score = score - 5;
enemy.reset(10, 20);
}