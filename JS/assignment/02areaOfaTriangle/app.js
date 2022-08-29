console.log("Running");

let area = function () {
  let a = +prompt("Entered the a");
  let b = +prompt("Entered the b");
  let c = +prompt("Entered the c");
  let s = (a + b + c) / 2;

  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

console.log(area());
