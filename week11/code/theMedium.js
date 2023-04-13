console.log("theMessage!")


const myButton = document.querySelector("button");
let theMain = document.getElementById("theMessage");
let theP = document.querySelector("p")
let theButton = document.getElementById("theReplace")

// replace()
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
theButton.addEventListener('click', theSwap)

theP.addEventListener('keydown', iPress);



function theSwap(){
  console.log("you presed to cause the swap ")
  theP.textContent = theP.textContent.replace("paragraph","rainbow")
  theP.style.color = "yellow"
} 
///
//
//
//
//
//
//   WEEK 10
// when user clicks button trigger potato function
myButton.addEventListener('click', potato);

function potato(){
    console.log("you clicked!")
    theMain.style.backgroundColor = "yellow"
    theP.textContent = " you clicked the button!"
    //
    // alert("you dummy")
}

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeMe(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", changeMe);
