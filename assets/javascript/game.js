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


var underscore = ['_', '_', '_'] 



 //Functions
//**************************************************************************************************************** 
const start = () => {
 chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
wordletters = chosenWord.split('');
blanksNum = wordletters.length;


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
document.getElementById("Guesses-remain").innerHTML = guessRemain;
document.getElementById("wins").innerhtml = winsNum;
document.getElementById("losses").innerHTML = lossNum;
};

const checkLetters = letter => {

    let letterExist = false;
   
    for (var i; i<blanksNum; i++) {
        if (chosenWord[i] === letter) {
            letterExist = true;
        }
    }
    if (letterExist){
        for (var i; i<blanksNum; i++) {
            if  (chosenWord[i] === letter) {
           blanksLetters[i] === letter;
        }
    }
   
   }
   else {
       wrongGuess.push(letter);
   guessRemain--;
   }
   };
 //Main Processes
 //**************************************************************************************************************** 
 start ();



document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    console.log(letterGuessed);
};


console.log(chosenWord);
console.log(wordletters);
console.log(blanksNum);
console.log(blanksLetters);