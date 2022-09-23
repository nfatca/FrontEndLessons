const input = document.querySelector(".container");

input.addEventListener("click", (e) => {
  if (e.target.className == "buttons button13") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button14") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button15") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button9") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button10") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button11") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button5") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button6") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button7") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button17") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button1") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button2") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button3") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button4") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button8") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button12") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button16") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  } else if (e.target.className == "buttons button18") {
    console.log(e.target.innerText);
    calculateScreen(e);
  } else if (e.target.className == "buttons button19") {
    console.log(e.target.innerText);
    // calculateScreen(e);
  }
});

const calculateScreen = (item) => {
  const value = item.target.innerText;
  //   document.querySelector(".screen").innerText = "";
  document.querySelector(".screen").innerText += value;
};

window.addEventListener("load", () => {
  document.querySelector(".screen").innerText = "";
});
