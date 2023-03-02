console.log("hello javascript!")

function setup(){
    //runs once 
    createCanvas(windowWidth, windowHeight);
    background(0, 100, 0)
}


function draw(){
    //this is a loop
    //defalut is 60 fps

    noStroke();
    ellipse(mouseX,mouseY,100,100)
}