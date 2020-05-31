function setup() {
    createCanvas(1536,753);
    player();
    platforms();
    border();
    
}



function draw(){

    cooldown = cooldown - 1;

    background(50);

    playerMovement();
    
    drawSprites();
    
    Gravity();

    gun();

    bullets();

}

