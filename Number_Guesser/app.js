/*
GAME FUNCTION:
- Player must guess a number between min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loose
- Let player choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //Validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if(guess === winningNum){
        //Game over with win

        gameOver(true, `${winningNum} is correct, YOU WON!`);
    }else {
        //Wrong number
        guessesLeft -= 1;
        
        
        if(guessesLeft === 0){
            //Game over but loss

           gameOver(false, `Game Over, you lost. The correct answer is ${winningNum}`);

        }else {
            //Game continues but answer wrong

             //Change border color
             guessInput.style.borderColor = 'red';

             //Clear input
             guessInput.value = '';

             //Set message if wrong answer
            setMessage(`${guess} is not correct, you have ${guessesLeft} guess left!`, 'red');
        }
    }
});

//Game over function
 function gameOver(won, msg){
     let color ;
     won === true ? color = 'green' : color = 'red';
     //Disable input
     guessInput.disabled = true;
     //Change border color
     guessInput.style.borderColor = color;
     //Change text color
     message.style.color = color;
     //Set message if won
     setMessage(msg);
 }

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
