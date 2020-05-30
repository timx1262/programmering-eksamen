function setup() {
    createCanvas(1536,753);
    player();
    level();
    
}


function draw(){

    background(50);

    playerMovement();
    
    
    drawSprites();
    
    Collision();
}