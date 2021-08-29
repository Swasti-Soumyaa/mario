function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

	mario_coin=loadSound("coin.wav")
	mario_gameover=loadSound("gameover.wav")
	mario_jump=loadSound("jump.wav")
	mario_kick=loadSound("kick.wav")
	mario_die=loadSound("mariodie.wav")
}





function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas')
	
	video=createCapture(VIDEO)
	video.size(800,400)
	video.parent('console')

	posenet=ml5.poseNet(video,modelLoaded)
	posenet.on('pose',gotposes)
}

function modelLoaded(){
	console.log('model loaded')
}

function gotposes(result){
	if(result.length>0){
		noseX=result[0].pose.nose.x
		noseY=result[0].pose.nose.y
		console.log(result)
	}

	
}

function draw() {
	game()
}






