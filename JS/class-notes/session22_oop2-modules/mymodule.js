function add(n1, n2) {
  return n1 + n2;
}

const WORKING_HOURS_WEEK = 40; // 45 ,30

let counter = 0;

function inc(amaount = 1) {
  counter += amaount;
  return counter;
}

function dec(amaount = 1) {
  counter -= amaount;
  return counter;
}

const moduleName = "Module 1";

export default (num) => num + num;

export {
  WORKING_HOURS_WEEK,
  WORKING_HOURS_WEEK as WHW,
  add as sum,
  inc,
  dec,
  counter, // hatırlatın
};

console.log("module 1 is running");

// "editor.bracketPairColorization.enabled": true,
