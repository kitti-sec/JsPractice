function getComputerChoice() {
  let compChoiceNum = Math.floor((Math.random() * 3) + 1);
  let compChoice;

  if (compChoiceNum == 1) {
    compChoice = "rock";
  } else if (compChoiceNum == 2) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
  return compChoice;
}

function getPlayerChoice() {
  let input = prompt("What's your choice? Type rock, paper or scissors ");
  playerInput = input.toLowerCase();
  // TODO: loop and ask for the correct one?
  return playerInput;
}



function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    result = 1;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    result = 1;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      result = 1;
    } else if (playerSelection == computerSelection) {
      result = 2;
    }
    else {
      result = 0;
    }
  return result;
}

function game() {
  let playerWinCounter = 0;
  let compWinCounter = 0;
  while (playerWinCounter != 6 && compWinCounter != 6) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);
    let preResult = `You played ${playerSelection}, the computer throwed ${computerSelection}`;
      console.log(preResult);
    if (result == 0) {
      compWinCounter += 1;
    } else if (result == 1) {
      playerWinCounter += 1;
    }
    console.log(`You won ${playerWinCounter} rounds, while the computer won ${compWinCounter} rounds`);

  }

  if (playerWinCounter > compWinCounter) {
    console.log('You won');

  } else  {
    console.log('Computer won');
  }
}

game();
