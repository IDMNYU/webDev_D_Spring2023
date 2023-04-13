console.log("hello javascript!")

let theCanvas;
function setup(){
    //runs once 
    theCanvas =createCanvas(windowWidth, windowHeight);
    background(0, 100, 0)
}


function draw(){
    //this is a loop
    //defalut is 60 fps

    noStroke();
    ellipse(mouseX,mouseY,100,100)
}