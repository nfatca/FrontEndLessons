console.log("Running");

let betweenNumber = function () {
  let number = +prompt("Entered the Number");
  if (number <= 20) {
    return 20 - number;
  } else {
    return (number - 20) * 2;
  }
};

console.log(betweenNumber());
