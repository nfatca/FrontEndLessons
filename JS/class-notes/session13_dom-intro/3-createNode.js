console.log("****** CREATE NODE*****");

//? Yeni bir P elementi olusturalım

const newP = document.createElement("p");
newP.id = "new-par";
newP.setAttribute("class", "new-class");
const text = document.createTextNode(" This is a new p elemenet");
newP.appendChild(text);
console.log(newP);

const h2 = document.querySelector(".item-list h2");
h2.after(newP);
