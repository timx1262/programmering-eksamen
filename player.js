let playerspeed = 4;
let ply1;
let ply2;
let player1X = 1536*0.3333333333;
let player1Y = 753/2;
let player2X = 1536*0.6666666666;
let player2Y = 753/2;
let jump = 0;
let canJump = false;
let gravity = 1;
function player(){

    ply1 = createSprite(player1X, player1Y, 48, 48);
    ply1.shapeColor = color(255, 0, 0);

    ply2 = createSprite(player2X, player2Y, 64, 64);
    ply2.shapeColor = color(0, 0, 255)


}


 function playerMovement(){

    ply1.velocity.y += gravity;


    if(keyDown(65)){
        ply1.position.x -= playerspeed; 

    }

    
    if(keyDown(68)){
        ply1.position.x += playerspeed;
    }

    
 
}

function keyPressed() {
    if(keyCode == 87 && canJump == true){
    ply1.velocity.y -= jump;
    }

    

}

function Collision() {

    if (canJump = true) {
        jump = 20;
    }
 
    if(ply1.collide(platform)){
        ply1.velocity.y = 0;
        canJump = true;
    }
    if(ply1.collide(platform5)){
        ply1.velocity.y = 0;
        canJump = true;
    }
    if(ply1.collide(platform4)){
        ply1.velocity.y = 0;
        canJump = true;
    }




}