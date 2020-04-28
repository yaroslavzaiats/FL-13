let prescribedNum;
let max = 0;
let increasingRange = 5;
let maxAgain = 0;
let min = 0;
let pocketNumInt;
let firstAttemptPrize = 100;
let secondAttemptPrize = 50;
let thirdAttemptPrize = 25;
let firstAttempt = 1;
let secondAttempt = 2;
let thirdAttempt = 3;
let i;
let j;
let win = 0;
let playAgain;
let contCurrentGame;
let startNew = true;
let currentPrize;
let attemptCount = 4;
let attempts = 3;
let loss;
let pocketNum;
let play = confirm('Do you want to play a game?');
if(play === false){
    alert('You did not become a billionaire, but can.');
}else{
    for(i = 1; i <= Number.POSITIVE_INFINITY; i++){
        loss = false;
        max += increasingRange;
        console.log(max);
        prescribedNum = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(prescribedNum);
        for(j = 1; j <= attempts; j++){
            if(j === firstAttempt){
                currentPrize = firstAttemptPrize*i;
            } else if(j === secondAttempt){
                currentPrize = secondAttemptPrize*i;
            } else if(j === thirdAttempt){
                currentPrize = thirdAttemptPrize*i;
            }
            pocketNum = prompt(`Choose a roulette pocket number from 0 to ${max}\nAttempts left: ${attemptCount-j}
Total prize: ${win}$\nPossible prize of current attempt: ${currentPrize}$`);
            pocketNumInt = parseInt(pocketNum);
            if(pocketNum === null){
                alert('Try again');
            } else {
                if(pocketNumInt === prescribedNum){
                    win += currentPrize;
                    contCurrentGame = confirm('Congratulation, you won!   Your prize is: ' + currentPrize +
                    '$. Do you want to continue?');
                    if(contCurrentGame === true){
                        startNew = false;
                        break;
                    } else {
                        startNew = true;
                        break;
                    }
                } else if(j === 1 || j === 2){
                    alert('Try again');
                } else if(j === 3 && pocketNumInt !== prescribedNum){
                    loss = true;
                    break;
                }
            }
        }
        if(loss === true){
            alert(`Thank you for your participation. Your prize is: ${win}$`);
            playAgain = confirm('Do you whant to try again?');
            if(playAgain === false){
                break;
            } else if(playAgain === true){
                i = 0;
                max = maxAgain;
                win = 0;
            }
        } else if(startNew === true){
            alert(`Thank you for your participation. Your prize is: ${win}$`);
            playAgain = confirm('Do you whant to try again?');
            if(playAgain === false){
                break;
            } else if(playAgain === true){
                i = 0;
                max = maxAgain;
                win = 0;
            }
        }
    }
}