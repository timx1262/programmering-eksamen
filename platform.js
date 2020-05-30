let platform;
let platform2;
let platform3;
let platform4;
let platform5;
let platform6;
let platform7;


function level() {
    
    rectMode(CENTER);
    platform = createSprite(width/2, height*0.99, 1000, 20);
    platform.shapeColor = color(255); 

    rectMode(CENTER);
    platform2 = createSprite(width/2, 200, 1000, 20);
    platform2.shapeColor = color(255); 

    rectMode(CENTER);
    platform3 = createSprite(1500, 640, 300, 20);
    platform3.shapeColor = color(255); 

    rectMode(CENTER);
    platform4 = createSprite(width/2, height*0.66, 1000, 20);
    platform4.shapeColor = color(255); 

    rectMode(CENTER);
    platform5 = createSprite(0, 640, 300, 20);
    platform5.shapeColor = color(255); 

    rectMode(CENTER);
    platform6 = createSprite(width/2, 500, 1000, 20);
    platform6.shapeColor = color(255); 

    rectMode(CENTER);
    platform7 = createSprite(width/2, 500, 1000, 20);
    platform7.shapeColor = color(255);
}