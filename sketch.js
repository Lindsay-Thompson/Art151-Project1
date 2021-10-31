function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
  }
  function draw() {

    
    
    for(var x = 0; x<=width; x +=50){
     for(var y =0; y <= height; y+=50){
       noStroke();
       fill(random(255),random(255),random(255));
       rectMode(CENTER);
       rect(x,y,25,25);
     }
   }
 
  
   
 }
  
  
  
  function mouseDragged(){
    stroke(0,0,random(255));
    strokeWeight(2);
    fill(0,random(255),random(255));
    triangle(mouseX,mouseY,mouseX + 50, mouseY, mouseX +25, mouseY - 50);
  }
  
  function doubleClicked(){
    clear();
    background(random(255));
  }
  
  function mouseMoved(){
      stroke(random(255),random(255),0);
    strokeWeight(2);
    fill(random(255),random(255),0);
    circle(mouseX,mouseY,75);
    
  }

  
