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