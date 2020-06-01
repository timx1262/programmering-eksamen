


//describes the controls to the players

function tutorial(){

    fill(255)
    textFont("Arial");
    textSize(20);
    text("Player 1", 20, 30);
    text("To move use AD", 20, 60);
    text("To jump use W", 20, 90);
    textAlign(RIGHT);
    text("Player 2", width - 20, 30);
    text("To move use Left Arrow and Right Arrow", width - 20, 60);
    text("To jump use Up Arrow", width - 20, 90);
    
}




//what appears on screen if the blue cube wins

function redGameOver(){
    
    fill(50);
    rect(width/2,height/2,width, height)
    textFont('Keep calm');
	textAlign(CENTER);
	textSize(200);
	fill(0, 0, 255);
    text("Blue win", width/2, height/2)
    textSize(50);
	fill(255);
    text("Press SPACE to reset", width/2, 500)
  

	noLoop();
}

//what appears on screen if the red cube wins

function blueGameOver(){

    fill(50);
    rect(width/2,height/2,width, height)
    textFont('Keep calm');
	textAlign(CENTER);
	textSize(200);
	fill(255, 0, 0);
    text("Red win", width/2, height/2)
    textSize(50);
	fill(255);
    text("Press SPACE to reset", width/2, 500)
  

	noLoop();

}


//The function used to reset the health and positions of the characters
//The function is used in keyPressed below

function reset(){
	
    health1 = 5;
    health2 = 5;

    ply1.position.x = 1536*0.3333333333;
    ply1.position.y = 600;

    ply2.position.x = 1536*0.6666666666;
    ply2.position.y = 600;


	loop();


}

function keyPressed() {


    //this is the jump mechanic

    //the key is W
    if(keyCode == 87 && redCooldown <= 0 ){
        ply1.velocity.y -= jump;
        redCooldown = 35;
    }
    //the key is UP arrow
    if(keyCode == 38 && blueCooldown <= 0){
        ply2.velocity.y -= jump;
        blueCooldown = 35;
    }
    
    //how we reset the game the reset function is listed above this function

    //the key is spacebar
    if(keyCode == 32 && health1 <= 0 || health2 <= 0 ){
        reset();
    }
}




