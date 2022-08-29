console.log("Running");

let calculator = function () {
  let num1 = +prompt("Entered 1. Number");
  let oper = prompt("Entered operand");
  let num2 = +prompt("Entered 2. Number");

  if (oper === "+") {
    return num1 + num2;
  } else if (oper === "-") {
    return num1 - num2;
  } else if (oper === "/") {
    return num1 / num2;
  } else if (oper === "*") {
    return num1 * num2;
  } else {
    console.log("Wrong operand, please entered right operand");
    return calculator();
  }
};

console.log(calculator());
