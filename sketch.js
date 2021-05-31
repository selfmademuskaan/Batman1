var m1,m2,m3,m4,m5,m6,m7,m8;
var t1,t2,t3,t4;


function preload(){
    m1 = loadImage("walking_1.png"); 
    m2 = loadImage("walking_2.png"); 
    m3 = loadImage("walking_3.png"); 
    m4 = loadImage("walking_4.png"); 
    m5 = loadImage("walking_5.png"); 
    m6 = loadImage("walking_6.png"); 
    m7 = loadImage("walking_7.png"); 
    m8 = loadImage("walking_8.png"); 

    t1 = loadImage("1.png"); 
    t2 = loadImage("2.png"); 
    t3 = loadImage("3.png"); 
    t4 = loadImage("4.png"); 

}

function setup(){
    createCanvas(400,600);

    man=createSprite(200, 430, 20, 100);
    var rand=Math.round(random(1,8));
    switch(rand){ 
        case 1:man.addImage("man",m1);
    break;
    case 2:man.addImage("man",m2);
    break;
    case 3:man.addImage("man",m3);
    break;
    case 4:man.addImage("man",m4);
    break;
    case 5:man.addImage("man",m5);
    break;
    case 6: man.addImage("man",m6);
    break;
    case 7: man.addImage("man",m7);
    break;
    case 8:man.addImage("man",m8);
    break;
    }
    man.scale=0.5;

    thunder=createSprite(200, 40, 20, 20);
    var rand=Math.round(random(1,4));
  switch(rand){ 
    case 1:thunder.addImage("thunder",t1);
    break;
    case 2:thunder.addImage("thunder",t2);
    break;
    case 3:thunder.addImage("thunder",t3);
    break;
    case 4:  thunder.addImage("thunder",t4);
    break;
  }
  thunder.scale=0.5;
}

function draw(){
    background("black");  
   // man.collideEach(rain);
    rain();
    drawSprites();
}   

function rain() {
    if (World.frameCount % 5 === 0) {
      for (var i = 10; i < 550; i = i + 10) {
        var rd = createSprite(i,5, 2, 2 );
        rd.velocityY = 5;
        rd.shapeColor = "purple";
        
        //man.collideEach(rain);
      }
    }
  }
  