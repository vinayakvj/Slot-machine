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

deposit();
