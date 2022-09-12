//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

const h1 = document.querySelector("#header h1");

//? 3.method
h1.onmouseover = function () {
  h1.style.color = "red";
  h1.style.fontWeight = "300";
  console.log("onmouseover");
};
h1.onmouseout = function () {
  h1.style.color = "black";
  h1.style.fontWeight = "600";
  console.log("onmouseout");
};

//? 4.method (addEventListener)
h1.addEventListener("click", () => {
  alert("H1 pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");

  !input.value
    ? alert("Please enter an item")
    : alert(`${input.value} entered`);

  //   if (!input.value) {
  //     alert("Please enter an item");
  //   } else {
  //     alert(`${input.value} entered`);
  //   }

  input.value = null;
});

//* EXAMPLE -3
//* ----------------------------------------------

const list = document.querySelectorAll(".list"); //? nodeList

list.forEach((li) => {
  li.style.transition = "all 0.3s";
  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(10px)";
  };
  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transform = "translateX(-10px)";
  };
});

//* EXAMPLE -4
//* ----------------------------------------------

window.onload = function () {
  document.querySelector("#input").focus();
};

const print = () => {
  console.log("Starting");
};
