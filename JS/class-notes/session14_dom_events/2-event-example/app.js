console.log("**** app.js *******");

const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list");
const newUl = document.createElement("ul");

langList.appendChild(newUl);

//? addBtn event handler
addBtn.addEventListener("click", () => {
  if (!langInput.value) {
    alert("Please enter a things to do.");
  } else if (langInput.value.toLowerCase() === "javascript") {
    newUl.innerHTML += `<li class = "text-danger">${langInput.value}</li>`;
    langInput.value = "";
  } else {
    newUl.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = "";
  }
  langInput.focus();
});

//? deleteBtn event handler
deleteBtn.addEventListener("click", () => {
  !newUl.childElementCount
    ? alert("There is no item to delete")
    : newUl.removeChild(newUl.lastElementChild);
  langInput.focus();
});

//? enter key and delete key event handler
langInput.addEventListener("keydown", (event) => {
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.keyCode); //? klavyeden aldığımız tuşun keycode değerini göteriyor
  //   console.log(event.code); //? klavyeden aldığımız tuşun keycode adını göteriyor

  if (event.keyCode === 13) {
    addBtn.click();
  } else if (event.code === "Delete") {
    deleteBtn.click();
  }
});

//? onLoad event handler
window.addEventListener("load", () => {
  langInput.focus();
});
