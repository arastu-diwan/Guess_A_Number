'use strict';

const secretNumber = Math.trunc(Math.random()*20) + 1;

// document.querySelector('.number').textContent = secretNumber;
let score = 20;

let highScore = 0;

const getMessage = (message)=>{
document.querySelector('.message').textContent = message;
}

//random generates number btwn 0 and 1, we multiply that by 20 to get range 0 to 19(20 is not included), to include +1

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value); // userInput in guess text box.

    //every text innput is string type in js, we need to convert to number
    if(!guess){
        getMessage('Please enter number to continue!')
    }else if(guess < 1 || guess > 20){
        getMessage('Please enter number between 1 and 20')
    }else if(score > 0){
        if(secretNumber !== guess){
            getMessage(secretNumber < guess ? 'Too High!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score; 
        }else if(secretNumber === guess){
            getMessage('Correct Answer🤩');
            score++;
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            if(score > highScore){
            highScore =  score;
            document.querySelector('.highscore').textContent = highScore;
            }
           }
    } else {
        getMessage('You lost the Game!!');
    }


})


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    getMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222'; 
})