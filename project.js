const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depAmount = prompt("Enter deposit amount: ");
    const depositAmount = parseFloat(depAmount);
    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Amount Invalid, Try again.");
    } else {
      return depositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter Number of lines (1-3): ");
    const numberOfLines = parseFloat(lines);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Amount Invalid, Try again.");
    } else {
      return numberOfLines;
    }
  }
};

const Bet = (Balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > Balance / lines) {
      console.log("Amount Invalid, Try again.");
    } else {
      return numberOfLines;
    }
  }
};

let Balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = Bet(Balance, numberOfLines);
