// dom elemanları arasında gezinti
// let a;

// const myListe = document.querySelector("ul.liste");
// console.log(myListe);

// a = myListe.firstElementChild; // Bursa
// a = myListe.lastElementChild; // Istanbul
// a = myListe.childElementCount; // 4

// console.log(a);

//* parent elemenet

// a = myListe.parentElement; //*body
// a = myListe.parentElement.parentElement.parentElement; //* null
// console.log(a);

// const b = document.querySelector("input");
// console.log(b.parentElement.parentElement.parentElement);

// a = document.querySelector("li");
// console.log(
//   a.nextElementSibling.nextElementSibling.nextElementSibling
//     .previousElementSibling
// );

//* var olan domlar üzerinde işlemler yapabiliyoruz

// const a = document.createElement("li");
// a.className = "list-item";
// a.id = "yeni-id";
// a.textContent = "Yozgat";
// document.querySelector("ul").appendChild(a);

// console.log(a);

//* h2 ye yeni değer atama

// document.querySelector("h2").textContent = "ClarusWay";

//* remove - silme

// const a = document.querySelector("li");
// a.remove();

// document.querySelector("ul").remove();

const a = document.querySelectorAll("li")[2];
document.querySelector("ul").removeChild(a);
