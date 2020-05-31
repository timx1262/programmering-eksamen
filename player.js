let playerspeed = 4;
let ply1;
let ply2;
let player1X = 1536*0.3333333333;
let player1Y = 600;
let player2X = 1536*0.6666666666;
let player2Y = 600;
let jump = 20;
let gravity = 1;
let cooldown = 20;
let health1 = 5;
let health2 = 5;

function player(){

    ply1 = createSprite(player1X, player1Y, 48, 48);
    ply1.shapeColor = color(255, 0, 0);

    ply2 = createSprite(player2X, player2Y, 48, 48);
    ply2.shapeColor = color(0, 0, 255)


}


 function playerMovement(){

    if(keyDown(65)){
        ply1.position.x -= playerspeed; 

    }

    
    if(keyDown(68)){
        ply1.position.x += playerspeed;
    }

    if(keyDown(37)){
        ply2.position.x -= playerspeed; 

    }

    
    if(keyDown(39)){
        ply2.position.x += playerspeed;
    }

}



function Gravity() {

    //player 1 gravity

    ply1.velocity.y += gravity;

     //player 1 collision with platforms


    if(ply1.collide(platform)){
        ply1.velocity.y = 0;
    
    }
    if(ply1.collide(platform2)){
        ply1.velocity.y = 0;
 
    }
    
    if(ply1.collide(platform3)){
        ply1.velocity.y = 0;
    
    }

    if(ply1.collide(platform4)){
        ply1.velocity.y = 0;
    
    }
    
    if(ply1.collide(platform5)){
        ply1.velocity.y = 0;
 
    }
    
    if(ply1.collide(platform6)){
        ply1.velocity.y = 0;
    
    }

    if(ply1.collide(platform7)){
        ply1.velocity.y = 0;
    
    }

//player 1 collision with borders

    if(ply1.collide(borderTop)){
    
    }

    if(ply1.collide(borderRight)){
    
    }
    
    if(ply1.collide(borderLeft)){
    
    }

//player 2 gravity

    ply2.velocity.y += gravity;

//player 2 collision with platforms

    if(ply2.collide(platform)){
        ply2.velocity.y = 0;
    
    }
    
    if(ply2.collide(platform2)){
        ply2.velocity.y = 0;
 
    }
    
    if(ply2.collide(platform3)){
        ply2.velocity.y = 0;
    
    }

    if(ply2.collide(platform4)){
        ply2.velocity.y = 0;
    
    }
    
    if(ply2.collide(platform5)){
        ply2.velocity.y = 0;
 
    }
    
    if(ply2.collide(platform6)){
        ply2.velocity.y = 0;
    
    }

    if(ply2.collide(platform7)){
        ply2.velocity.y = 0;
    
    }

//player 2 collision with borders

    if(ply2.collide(borderTop)){
    
    }

    if(ply2.collide(borderRight)){
    
    }
    
    if(ply2.collide(borderLeft)){
    
    }


}


function bullets(){
   
}



function gun(){

}


 function keyPressed() {


    //this is the jump mechanic

    if(keyCode == 87 && cooldown <= 0 ){
        ply1.velocity.y -= jump;
        cooldown = 40;
    }

    if(keyCode == 38 && cooldown <= 0){
        ply2.velocity.y -= jump;
        cooldown = 40;
    }
    
}


function health(){



}
