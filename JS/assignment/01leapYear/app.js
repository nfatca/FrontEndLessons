console.log("Running");

let leap = function () {
  let year = +prompt("Enter the Year");
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return `${year} is the leap year`;
      } else return `${year} isn't the leap year`;
    } else return `${year} is the leap year`;
  } else {
    return `${year} isn't the leap year`;
  }
};

console.log(leap());
