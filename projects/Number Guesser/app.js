/*
 * Game Function:
 - Player must guess a number between a min and max
 - Player gets a certain amount of guesses
 - Notify player of guesses remaining
 - Notify the player of the correct answer if loose
 - Let player choose to play again  
  */

// Game Values
let min = 1;
let max = 10;
let winningnum = 2;
let guessesleft = 3;

// UI Elements
const game = document.querySelector('#game');
const minnum = document.querySelector('.min-num');
const maxnum = document.querySelector('.max-num');
const guessbtn = document.querySelector('#guess-btn');
const guessinput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max
minnum.textContent = min;
maxnum.textContent = max;

// Play Again evenet listener
game.addEventListener('mousedown', function(e)
{
    if (e.target.className === 'play-again')
        window.location.reload();
});

// Listen for guess
guessbtn.addEventListener('click', function()
{
    let guess = parseInt(guessinput.value);
    // Validate input
    if (isNaN(guess) || guess < min || guess > max)
    {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    // Check if won
    if (guess === winningnum)
    {
        gameOver(true, `${winningnum} is correct, YOU WIN!`);
    } 
    else // Wrong Number
    {
        guessesleft -= 1;
        if (guessesleft === 0)
        {
            gameOver(false, `Game Over, you lost. The correct number was ${winningnum}`);
        } 
        else // Game Continues but wrong answer
        {
            guessinput.style.borderColor = 'red';
            guessinput.value = '';
            setMessage(`${guess} is not correct, ${guessesleft} guesses left`, 'red');
        }
    }
});

function gameOver(won, msg)
{
    let color;
    won === true ? color = 'green' : color = 'red';
    guessinput.disabled = true;
    guessinput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    // Play again
    guessbtn.value = 'Play Again';
    guessbtn.className += 'play-again';
}

function setMessage(msg, color)
{
    message.style.color = color;
    message.textContent = msg;
}