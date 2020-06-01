let platform;
let platform2;
let platform3;
let platform4;
let platform5;
let platform6;
let platform7;
let borderTop;
let borderRight;
let borderLeft;


//the drawing of the borders

function border(){
  borderTop = createSprite(width, height*0, 10000, 0.1);
  borderRight = createSprite(width, height*0, 0.1, 10000);
  borderLeft = createSprite(0, height*0, 0.1, 10000);
}

//the drawing of platforms

function platforms() {
    
    rectMode(CENTER);
    platform = createSprite(width/2, height*0.99, 10000, 40);
    platform.shapeColor = color(255); 

    rectMode(CENTER);
    platform2 = createSprite(1000, 350, 700, 20);
    platform2.shapeColor = color(255); 

    rectMode(CENTER);
    platform3 = createSprite(1500, 560, 300, 20);
    platform3.shapeColor = color(255); 

    rectMode(CENTER);
    platform4 = createSprite(460, 440, 140, 20);
    platform4.shapeColor = color(255); 

    rectMode(CENTER);
    platform5 = createSprite(180, 600, 250, 20);
    platform5.shapeColor = color(255); 


    rectMode(CENTER);
    platform6 = createSprite(1600, 420, 250, 20);
    platform6.shapeColor = color(255); 

    rectMode(CENTER);
    platform7 = createSprite(180, 300, 200, 20);
    platform7.shapeColor = color(255); 

    
}