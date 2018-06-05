 // Global Variables
//**************************************************************************************************************** 
let wordOptions = ['france','china','southkorea','japan','australia','brazil','peru','canada','england','germany','poland','italy',
'ireland','pakistan','yemen','iraq','turkey','libya','egypt','nigeria','rwanda','tanzania','zimbabwe','senegal','mexico','vietnam',
'portugal','argentina', 'haiti','panama','colombia', 'bolivia','israel','india','turkmenistan','lichtenstein','armenia']
let chosenWord = ""
let wordletters = [];
let blanksNum = 0
let blanksLetters = [];
let wrongGuess = []

let winsNum = 0
let lossNum = 0
let guessRemain = 12;





 //Functions
//**************************************************************************************************************** 
const start = () => {
 chosenWord = wordOptions[Math.floor(Math.random()= wordOptions.length)];
wordletters = selectedWord.split('');
blanksNum = wordletters.length;
}

//reset

guessRemain = 12 
wrongGuess = []
blanksLetters = []

//determine number of blanks needed onscreen
for (var i = 0; i <blanksNum; i++ ) {
    blanksLetters.push("_");
}

//DOM Manipulation
document.getElementById("current").innerhtml = blanksLetters.join(' ')
document.getElementById("guesses-remain").innerHTML = guessRemain;
document.getElementById("wins").innerhtml = winsNum;
document.getElementById("losses").innerHTML = lossNum;


 //Main Processes
 //**************************************************************************************************************** 
 start ();

 //event handler for the keyclicks

 document.onkeyup = (e) => {
    let playerGuess = string.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(playerGuess)
 };


 /* Fat Arrow Syntax Example
 const getUserChoice = userInput => {
};   */