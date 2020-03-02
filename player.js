var playerspeed = 1;
var player1X = 1536*0.3333333333;
var player1Y = 753/2;
var player2X = 1536*0.6666666666;
var player2Y = 753/2;
function player(){

    rect(player1X, player1Y, 32, 32);
    rect(player2X, player2Y, 32, 32);

}


 function playerMovement(){

    if(keyPressed){
        key == "UP"
        player1X = player1X + playerspeed;
    }



}