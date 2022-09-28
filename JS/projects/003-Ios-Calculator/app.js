let temp = 0;
let value1 = 0;
let value2 = 0;
let operator;

const input = document.querySelector(".container");

input.addEventListener("click", (e) => {
  if (e.target.className == "buttons button13") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button14") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button15") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button9") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button10") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button11") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button5") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button6") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button7") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button17") {
    console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button1") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button2") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button3") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button4 operator divide") {
    // console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button8 operator multiply") {
    // console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button12 operator minus") {
    // console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button16 operator plus") {
    // console.log(e.target.innerText);
    calculate(e);
  } else if (e.target.className == "buttons button18") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button19 end") {
    console.log(e.target.innerText);
    calculateScreen(e);
    calculate(e);
  }
});

//! screen
const calculateScreen = (item) => {
  // if (temp == 0) {
  //   value1 = item.target.innerText;
  //   // temp = value1;
  //   document.querySelector(".screen").innerText += value1 + " ";
  // } else {
  //   value2 = item.target.innerText;
  //   document.querySelector(".screen").innerText += value2 + " ";
  // }
  console.log(`temp = ${temp}`);
};

//! calculate

const calculate = (item) => {
  if (item.target.className == "buttons button16 operator plus") {
    temp = value1;
    operator = "+";
    // console.log("plus");
    // console.log(operator);
  } else if (item.target.className == "buttons button12 operator minus") {
    operator = "-";
    // console.log("minus");
  } else if (item.target.className == "buttons button8 operator multiply") {
    operator = "*";
    // console.log("multiply");
  } else if (item.target.className == "buttons button4 operator divide") {
    operator = "/";
    // console.log("divide");
  } else if (item.target.className == "buttons button1") {
    console.log("end");
  } else if (item.target.className == "buttons button2") {
    console.log("end");
  } else if (item.target.className == "buttons button3") {
    console.log("end");
  } else {
    if (temp == 0) {
      value1 += item.target.innerText;
      // temp = value1;
      document.querySelector(".screen").innerText += value1 + " ";
    } else {
      value2 = item.target.innerText;
      document.querySelector(".screen").innerText += value2 + " ";
    }
  }

  const value = item.target.innerText;
  temp = value;
  // document.querySelector(".total").innerText = temp;
};

window.addEventListener("load", () => {
  document.querySelector(".screen").innerText = "";
  // document.querySelector(".total").innerText = "";
});
