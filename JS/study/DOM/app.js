//* MouseEvent

// document.querySelector(".link").addEventListener("click", function (e) {
//   console.log("click event");
// });

// document.querySelector(".link").addEventListener("click", function (e) {
//   console.log("click event");
//   e.preventDefault(); //! tıklandığında engelle
// });

// document.querySelector(".link").addEventListener("click", tiklanma);

// document.querySelector(".link").addEventListener("mousedown", tiklanma); //! tıkladığımda

// document.querySelector(".link").addEventListener("mouseup", tiklanma); //! bıraktığımda

// document.querySelector(".link").addEventListener("mouseenter", tiklanma); //! üzerine geldiğimde

// document.querySelector(".link").addEventListener("mouseleave", tiklanma); //! üzerinden ayrıldığımda

// document.querySelector(".link").addEventListener("mouseover", tiklanma); //! üzerine geldiğimde

// document.querySelector(".link").addEventListener("mouseout", tiklanma); //! üzerinden ayrıldığımda

// document.querySelector(".link").addEventListener("mousemove", tiklanma); //! üzerinde durduğumda

// function tiklanma(e) {
//   let deger;

//   deger = e.type;
//   console.log(deger);
//   e.preventDefault();
// }

//* mouse event örnek proje
//! eksik tamamla

// document
// .querySelector(".container")
//   .addEventListener("mousemove", arkaPlanRengiDegistirir);

//* klavye ve form eventleri

const myForm = document.querySelector("#form");
const isim = document.querySelector("#ad");

// myForm.addEventListener("submit", eventYakala);
// isim.addEventListener("keydown", eventYakala);
// isim.addEventListener("keyup", eventYakala);
// isim.addEventListener("keypress", eventYakala);
// isim.addEventListener("blur", eventYakala);
// isim.addEventListener("cut", eventYakala);
// isim.addEventListener("paste", eventYakala);
// isim.addEventListener("input", eventYakala);

function eventYakala(e) {
  console.log(isim.value);
  document.querySelector(".link").textContent = isim.value;
  e.preventDefault();
}
