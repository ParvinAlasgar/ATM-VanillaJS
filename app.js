/*
? ATM APPLICATION

1- View Balance
2- Withdraw Money
3- Deposit Money
4- Exit
*/

let newLine = "\r\n";
let balance = 1000;

let text =
  "1- View Balance" +
  newLine +
  "2- Withdraw Money" +
  newLine +
  "3- Deposit Money" +
  newLine +
  "4- Exit" +
  newLine +
  "Please select an option";

// alert(text);

let choice = prompt(text);

switch (choice) {
  case "1":
    alert("Your Balance: " + balance);
    break;

  case "2":
    let withdrawalAmount = Number(prompt("Enter the amount to withdraw:"));
    if (withdrawalAmount < balance) {
      // Successful
      balance = balance - withdrawalAmount;
      alert("Remaining Balance: " + balance);
    } else {
      alert(
        "You cannot withdraw more than your balance" +
          newLine +
          "Your Balance: " +
          balance +
          newLine +
          "Withdrawal Amount: " +
          withdrawalAmount
      );
    }
    break;

  case "3":
    let depositAmount = Number(prompt("Enter the amount to deposit:"));
    balance = balance + depositAmount;
    alert("Updated Balance: " + balance);
    break;

  case "4":
    alert("Exit from the system");
    break;

  default:
    alert("Please enter a value between 1 and 4!");
    break;
}
