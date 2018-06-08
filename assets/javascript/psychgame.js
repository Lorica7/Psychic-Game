// Variables needed

let alphaBet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','t',
                'q','r','s','t','u','v','w','x','y','z'];


let chosenLetter = "";
let wrongGuess = [];
let playerGuess = "";              
let winsNum = 0;
let lossNum = 0;
let guessRemain = 7;


//Functions
const start = () => {
    chosenLetter = alphaBet[Math.floor(Math.random()* alphaBet.length)];
    
    //reset
   
    guessRemain = 7;
};
function finishGame () {
}  
//inside of a function just write winsNum++; or guessRemain--; to update counter
//round complete should empty page parts and also update counter.

// Main process

start ();

document.onkeyup = function(event) {
    playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(playerGuess);
    console.log(playerGuess)
};
function checkLetters(playerGuess) {
    if (playerGuess === chosenLetter) {
        alert("You Win! Congratulations on being psychic.");
        winsNum ++;
        document.getElementById("wins").innerhtml = winsNum;
        finishGame();
    } else if (guessRemain > 0 && playerGuess !== chosenLetter) {
        alert ("Sorry, try again");
        guessRemain--;
        document.getElementById("guesses-remain").innerHTML = guessRemain;
        wrongGuess = wrongGuess + playerGuess;
        document.getElementById("wrong-guesses").innerHTML = wrongGuess;
    } else {
        alert("Your psychic abilities are not working. You lose.");
        lossNum ++;
        document.getElementById("losses").innerText = lossNum;
        finishGame();
    }
}


  


console.log(chosenLetter);
console.log(playerGuess);

