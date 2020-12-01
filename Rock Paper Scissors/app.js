// selections
//-------------------------------------------------------------
const cardRock = document.querySelector('#rock');
const cardPaper = document.querySelector('#paper');
const cardScissors = document.querySelector('#scissors');

const smallRock = document.querySelector('#rock-small');
const smallPaper = document.querySelector('#paper-small');
const smallScissors = document.querySelector('#scissors-small');

const computerImage = document.querySelector('#computer-choice');
const userImage = document.querySelector('#user-choice');

const humanScreen = document.querySelector('#player-screen');
const computerScreen = document.querySelector('#computer-screen');

const outputChannel = document.querySelector('#outcome');
let zIndex = 1;




// functions
//------------------------------------------------------------

// deternime computer's choice
const random = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    let choice = choices[index];
    return choice;
};

// decides the winner of the game 1-win  0.5-draw  0-lose
const decision = (choice, botChoice) => {
    // keys of each object represents the user's choice
    // values of each object represents the computer's choice
    const decisionObject = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5 },
        'rock-small': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
        'paper-small': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors-small': { 'rock': 0, 'paper': 1, 'scissors': 0.5 },
    };

    let output = decisionObject[choice][botChoice]; // logic of the result
    return output;
};

// place user and computer's choice on the screen
const placeImage = (humanChoice, computerChoice) => {
    
    // place user's image
    let source = null;
    if (humanChoice == 'rock' || humanChoice == 'rock-small') {
        source = './images/rock.jpg';
    }
    else if (humanChoice == 'paper' || humanChoice == 'paper-small') {
        source = './images/paper.png';
    }
    else if (humanChoice == 'scissors' || humanChoice == 'scissors-small') {
        source = './images/scissors.png';
    }
    const user = document.createElement('img');
    user.id = 'user-choice';
    user.src = source;
    zIndex += 1;
    user.style.zIndex = zIndex;
    humanScreen.appendChild(user);

    // place computer's image
    let sourceComputer = null;
    if (computerChoice == 'rock') {
        sourceComputer = './images/rock.jpg';
    }
    else if (computerChoice == 'paper') {
        sourceComputer = './images/paper.png';
    }
    else if (computerChoice == 'scissors') {
        sourceComputer = './images/scissors.png';
    }
    const comp = document.createElement('img');
    comp.id = 'computer-choice';
    comp.src = sourceComputer;
    zIndex += 1;
    comp.style.zIndex = zIndex;
    computerScreen.appendChild(comp);
};

// display winner on screen
const displayText = (truth) => {
    switch (truth) {
        case (1):
            outputChannel.innerHTML = 'You win :-)';
            outputChannel.style.color = 'rgb(255, 128, 55)';
            outputChannel.style.fontSize = '7.5rem';
            break;
        case (0.5):
            outputChannel.innerHTML = 'Draw :-|';
            outputChannel.style.color = 'rgb(255, 128, 55)';
            outputChannel.style.fontSize = '7.5rem';
            break;
        case (0):
            outputChannel.innerHTML = 'You Lose :-(';
            outputChannel.style.color = 'rgb(255, 128, 55)';
            outputChannel.style.fontSize = '7.5rem';
            break;
        default:
            break;
    };
};




// event listeners
//-------------------------------------------------------
smallRock.addEventListener('click', () => {
    let userChoice = smallRock.id;
    let computerChoice = random();
    let odds = decision(userChoice, computerChoice);
    placeImage(userChoice, computerChoice);
    displayText(odds);
});
smallPaper.addEventListener('click', () => {
    let userChoice = smallPaper.id;
    let computerChoice = random();
    let odds = decision(userChoice, computerChoice);
    placeImage(userChoice, computerChoice);
    displayText(odds);
});
smallScissors.addEventListener('click', () => {
    let userChoice = smallScissors.id;
    let computerchoice = random();
    let odds = decision(userChoice, computerchoice);
    placeImage(userChoice, computerchoice);
    displayText(odds);
});

cardRock.addEventListener('click', () => {
    let userChoice = cardRock.id;
    let computerChoice = random();
    let odds = decision(userChoice, computerChoice);
    placeImage(userChoice, computerChoice);
    displayText(odds);
});
cardPaper.addEventListener('click', () => {
    let userChoice = cardPaper.id;
    let computerChoice = random();
    let odds = decision(userChoice, computerChoice);
    placeImage(userChoice, computerChoice);
    displayText(odds);
});
cardScissors.addEventListener('click', () => {
    let userChoice = cardScissors.id;
    let computerchoice = random();
    let odds = decision(userChoice, computerchoice);
    placeImage(userChoice, computerchoice);
    displayText(odds);
});


