const prompt = require("prompt-sync")();

const deposit = () => {
  const depAmount = prompt("Enter deposit amount: ");
  const depositAmount = parseFloat(depAmount);

  console.log(depositAmount - 10);
  if (isNaN(depositAmount) || depositAmount <= 0) {
    console.log("Amount Invalid, Try again.");
  }
};

deposit();
