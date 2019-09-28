const getUserChoice = userInput  => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error! Pick either rock, paper or scissors')
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break; 
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'User won!';
    }

    if (userChoice === computerChoice) {
        return 'The game is a Tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!'
        } else {
            return 'User won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won!'
        } else {
            return 'User won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won!'
        } else {
            return 'User won!';
        }
    }
}

const playGame = () => {
    userChoice = getUserChoice('rock');
    computerChoice = getComputerChoice('paper');

    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();