// Variables needed

let alphaBet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','t',
                'q','r','s','t','u','v','w','x','y','z'];


let chosenLetter = "";
let wrongGuess = [];
let playerGuess = "";              
let winsNum = 0;
let lossNum = 0;
let guessRemain = 12;






document.getElementById("guesses-remain").innerHTML = guessRemain;
document.getElementById("wins").innerhtml = winsNum;
document.getElementById("losses").innerHTML = lossNum;


//Functions
const start = () => {
    chosenLetter = alphaBet[Math.floor(Math.random()* alphaBet.length)];
};

document.onkeyup = (e) => {
    let playerGuess = string.fromCharCode(event.keyCode).toLowerCase();
};


// Main process

start ();

console.log(chosenLetter);
console.log(playerGuess);

// player guess not working, needs fix