console.log("hello js!")

// there is var
// but you shld use let + const

const myButton = document.querySelector("button");
let theMain = document.getElementById("theMessage");
let theP = document.querySelector("p")

// when user clicks button trigger potato function
myButton.addEventListener('click', potato);

function potato(){
    console.log("you clicked!")
    theMain.style.backgroundColor = "yellow"
    theP.textContent = " you clicked the button!"
}