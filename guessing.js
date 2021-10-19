'use strict';

const guessingGameButton = document.getElementById('guessing');

const getRandomNumber = range => {
  const [ min, max ] = range;
  return Math.floor(Math.random() * (max - min) + min);
}

guessingGameButton.addEventListener('click', () => {
  const answer = window.confirm('Do you want to play a game?');
  if (!answer) {
    console.log('You did not become a millionaire');
    return;
  }
  const info = {
    attempts: 3,
    range: [0, 5],
    prizeFirst: 10,
    totalPrize: 0,
    number: getRandomNumber([0, 5])
  }
  while(true) {
    const { attempts, range, totalPrize, prizeFirst, number } = info;
    let currentPrize = Math.floor(prizeFirst / (3 - attempts + 1));
    console.log(number);
    const userNumber = +window.prompt(`Guess a number in range ${range}\n
    Attempts left: ${attempts}\n
    Total prize: ${totalPrize}\n
    Possible prize: ${totalPrize + currentPrize}`);
    if(!userNumber) break;
    info.attempts--;
    if (userNumber === number) {
      info.attempts = 3;
      info.range[1] *= 2;
      info.prizeFirst *= 3;
      info.totalPrize += currentPrize;
      info.number = getRandomNumber(range);
      const answer = window.confirm('Do you want to continue?');
      if (!answer) {
        console.log(`Thank you for a game. Your prize is: ${currentPrize}`);
        break;
      }
      continue;
    }
    if (info.attempts === 0) {
      console.log(`Thank you for a game. Your prize is: ${currentPrize}`);
      break;
    }
  }
});
