var canvas;
var music;
var box
var surface1,surface2,surface3,surface4
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box = createSprite(random(20,750));
    box.velocityY = 8;
    box.velocityX = 7;
   box.shapeColor = "white";

    surface1 = createSprite(680,590,190,20);
    surface1.shapeColor = "red";

    surface2 = createSprite(480,590,190,20);
    surface2.shapeColor = "yellow"; 

    surface3 = createSprite(280,590,190,20);
surface3.shapeColor = "green"

    surface4 = createSprite(80,590,190,20);
    surface4.shapeColor = "blue";
    //create 4 different surface"

   

    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));
    //create edgeSprite
   edges = createEdgeSprites()
    box.bounceOff(edges);
    
    

   


   if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor = "red";
   }

   if(surface2.isTouching(box) && box.bounceOff(surface2)){
      box.shapeColor = "yellow";
   }

   if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "green";
 }
   
    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor = "blue";
    }

    
 
    
    

    drawSprites();
}
