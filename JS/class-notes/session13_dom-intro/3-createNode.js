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

//? getAttribute()
console.log(newP.getAttribute("class"));
console.log(newP.getAttribute("id"));
console.log(newP.getAttribute("name"));

//? classList
console.log(newP.classList.contains("par")); //? true
newP.classList.add("new-class");
console.log(newP);
newP.classList.remove("new-class");

//? INNER HTML (Ciddi Guvenlik aciklari var)
const ul = document.querySelector("ul");
ul.innerHTML += `<li id="list-id" class="list">Boostrap</li>`;
