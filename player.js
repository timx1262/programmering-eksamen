var playerspeed = 1;
var ply1;
var ply2;
var player1X = 1536*0.3333333333;
var player1Y = 753/2;
var player2X = 1536*0.6666666666;
var player2Y = 753/2;
function player(){

    ply1 = createSprite(100, 100, 64, 64);
    ply1.shapeColor = color(255, 0, 0);

    ply2 = createSprite(player2X, player2Y, 64, 64);
    ply2.shapeColor = color(0, 0, 255)


}


 function playerMovement(){

    if(keyDown(87)){
        ply1.postion.y = ply1.postion.y - playerspeed;
    }



}