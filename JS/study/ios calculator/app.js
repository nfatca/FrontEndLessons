const input = document.querySelector(".input");
const input2 = document.querySelector(".input2");
const btnContainer = document.querySelector(".button-container");

let num1;
let num2;
let operator;
let num1done = false;
let floating = false;

btnContainer.addEventListener("click", (e) => {
  if (e.target.id == "n0") {
    if (input.innerText == ``) {
      input.innerText = 0;
    } else if (input.innerText == `0`) {
    } else {
      input.innerText += 0;
    }
  } else if (e.target.id == "n1") {
    input.innerText += 1;
  } else if (e.target.id == "n2") {
    input.innerText += 2;
  } else if (e.target.id == "n3") {
    input.innerText += 3;
  } else if (e.target.id == "n4") {
    input.innerText += 4;
  } else if (e.target.id == "n5") {
    input.innerText += 5;
  } else if (e.target.id == "n6") {
    input.innerText += 6;
  } else if (e.target.id == "n7") {
    input.innerText += 7;
  } else if (e.target.id == "n8") {
    input.innerText += 8;
  } else if (e.target.id == "n9") {
    input.innerText += 9;
  } else if (e.target.id == "division" && !num1done && input.innerText) {
    input2.innerText += input.innerText + "÷";
    num1 = Number(input.innerText);
    operator = e.target.id;
    input.innerText = "";
    num1done = true;
    floating = false;
  } else if (e.target.id == "multi" && !num1done && input.innerText) {
    input2.innerText += input.innerText + "x";
    num1 = Number(input.innerText);
    operator = e.target.id;
    input.innerText = "";
    num1done = true;
    floating = false;
  } else if (e.target.id == "sub" && !num1done && input.innerText) {
    input2.innerText += input.innerText + "-";
    num1 = Number(input.innerText);
    operator = e.target.id;
    input.innerText = "";
    num1done = true;
    floating = false;
  } else if (e.target.id == "add" && !num1done && input.innerText) {
    input2.innerText += input.innerText + "+";
    num1 = Number(input.innerText);
    operator = e.target.id;
    input.innerText = "";
    num1done = true;
    floating = false;
  } else if (e.target.id == "dec" && !floating) {
    input.innerText += e.target.innerText;
    floating = true;
  } else if ((e.target.id = "equal" && num1done && input.innerText)) {
    num2 = Number(input.innerText);
    num1done = false;
    floating = false;
    input2.innerText = "";
  }
});
