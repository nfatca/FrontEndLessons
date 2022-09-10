console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------

const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.backgroundColor = "red";

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input");
const button = document.getElementById("button");

button.style.background = "black";
button.style.color = "white";
button.style.width = "4rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.padding = "1rem";

myInput.style.padding = "1rem";
myInput.style.fontSize = "1.1rem";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*=====================s======================

//*EXAMPLE-3
//*-------------------------------------------

const list = document.getElementsByTagName("li");
console.log(list);
list[2].style.color = "red";
const elementThree = list.item(3);
elementThree.style.color = "blue";
elementThree.textContent = "React / Vue / Angular";

list[4].innerText = "Django / Flask";

console.log(list[1].textContent);
console.log(list[1].innerText);

//? HTML kodlarını çalıştırır ( güvenlik açısından problemli)
list[4].innerHTML = "<a href='https://www.clarusway.com'> Clarus<a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName("list");
console.log(myList);
console.log(myList[0].innerText);

console.log("**********");
//! dizi metodları doğrudan kullanılamaz
// myList.forEach((item) => console.log(item.innerText));

//! önce diziye çevrilir, sonra metodlar kullanılabilir

//? Array.from()
const myListArray = Array.from(myList);
myListArray.forEach((item) => console.log(item.innerText));

console.log("**********");

//? Spread
[...myList].forEach((item) => console.log(item.innerText));

[...myList].forEach((item) => (item.style.color = "red"));

//* EXAMPLE-4
//* ------------------------------------------

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
