// Variables needed

let alphaBet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','t',
                'q','r','s','t','u','v','w','x','y','z'];


let chosenLetter = "";
let wrongGuess = [];
let playerGuess = "";              
let winsNum = 0;
let lossNum = 0;
let guessRemain = 7;






document.getElementById("guesses-remain").innerHTML = guessRemain;
document.getElementById("wins").innerhtml = winsNum;
document.getElementById("losses").append = lossNum;


//Functions
const start = () => {
    chosenLetter = alphaBet[Math.floor(Math.random()* alphaBet.length)];
    
    //reset
   
    guessRemain = 7;
};
function roundComplete () {
    
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("blankSpaces").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
//inside of a function just write winsNum++; or guessRemain--; to update counter


// Main process

start ();

document.onkeyup = function(event) {
    playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(playerGuess);
};
function checkLetters(letter) {
    isLetterInWord = false;  
    
  


console.log(chosenLetter);
console.log(playerGuess);

// player guess not working, needs fix