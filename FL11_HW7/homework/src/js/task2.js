let game = confirm('Do you want to play a game?');
let attempts = 3;
let interval = 4;
let double = 2;

if(game === false) {

    alert('You did not become a billionaire, but can.');

} else {
    while(game === true) {

        let firstGameMax = 8;
        let total = 0;
        let nextPrize = 100;
        let oneMore = true;

        while (oneMore === true) {

            let random = Math.floor(Math.random() * (firstGameMax + 1)),
            attempt = false;

            for (let i = 1; i < attempts + 1; i++) {

                let userNumber = +prompt(
                    `Choose a roulette pocket number from 0 to ${firstGameMax}.
                         Attempts left:  ${attempts - i + 1}
                         Total prize: ${total}$
                         Possible prize on current attempt: ${nextPrize / Math.pow(double, i - 1)}$`);

                if (userNumber < 0 || userNumber > firstGameMax || isNaN(userNumber)) {

                    alert('Chosen a roulette pocket number is out of range or incorrect. You have lost an attempt.')
                } else if (random === userNumber) {

                    total += nextPrize / Math.pow(double, i - 1);
                    break;

                } else {

                    if (i === attempts) {

                        attempt = true;
                        break;

                    }
                }
            }

            if (attempt === true) {
                break;
            }

            oneMore = confirm(`Congratulation, you won! Your prize is: ${total}$. 
                Do you want to continue?`);

            if (oneMore === true) {

                firstGameMax += interval;
                nextPrize *= double;

            } else {
                break;
            }
        }

        alert(`Thank you for your participation. Your prize is: ${total}$`);

        game = confirm('Do you want to play again?');
    }
}



/* let start = confirm('Do you wan`t to play game?');
let enterNumber;
let randomNumber;
let integerRandom;
let attemptsLeft = 3;
let str = 'Attempts left: ' + attemptsLeft;

let min = 0;
let max = 8;
let half = 0.5;
let one = 1;
let i = 0;
let three = 3;
let againPlay;
let totalprize = 0;
let maxPrize = 100;
let middlePrize = 50;
let minPrize = 25;
let two = 2;
if (!start) {
  alert('You did not become a billionaire, but can');
  
} else {
  while (i < three) {
    randomNumber = min - half + Math.random() * (max - min + one);
    integerRandom = Math.round(randomNumber);
    console.log(integerRandom);
    enterNumber = +prompt(
      'Choose a roulette pocket number from 0 to 8\n' +
        str +
        '\ntotal prize: ' +
        totalprize,
      ''
    );

    if (enterNumber === integerRandom && i === 0) {
      alert('Congratulation, you won, your prize is 100$');
      totalprize = maxPrize;
    } else if (enterNumber !== integerRandom && i === 0) {
      alert('Thank you for your patricipation. Your prize is 0$');
      totalprize = 0;
    } else if (enterNumber === integerRandom && i === 1) {
      alert('Congratulation, you won, your prize is 50$');
      totalprize += middlePrize;
    } else if (enterNumber !== integerRandom && i === 1) {
      alert('Thank you for your patricipation. Your prize is 0$');
      totalprize += 0;
    } else if (enterNumber === integerRandom && i === two) {
      alert('Congratulation, you won, your prize is 25$');
      totalprize += minPrize;
    } else if (enterNumber !== integerRandom && i === two) {
      alert('Thank you for your patricipation. Your prize is 0$');
      totalprize += 0;
    }
    i++;
  }
  if (totalprize === 0) {
    alert('Thank you for your patricipation. Your total prize is 0$');
    againPlay = confirm('Do you want to play again?');
  } else {
    alert('Congratulation, you won, your total prize is: ' + totalprize + '$');
    againPlay = confirm('Do you want to play again?');
  }
} */