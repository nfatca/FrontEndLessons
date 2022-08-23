// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** EXPRESSION *******");

//* ORNEK:
//***************************************************/

// const tekCift1 = function (sayi) {
//   return sayi % 2 ? "Tek Sayı" : "Çift Sayı";
// };
// console.log(tekCift1(5));

//* ORNEK : 3 sayının en büyüğünü bulan fonks
//*************************************************/

const buyukBul = function (x, y, z = Number.MIN_VALUE) {
  if (x >= y && x >= z) {
    return `${x} en buyuk sayidir`;
  } else if (y >= x && y >= z) {
    return `${y} en buyuk sayidir`;
  } else if (z >= x && z >= y) {
    return `${z} en buyuk sayidir`;
  }
};

/* const n1 = +prompt("Sayi1:");
const n2 = +prompt("Sayi2:");
const n3 = +prompt("Sayi3:");

console.log(buyukBul(n1, n2, n3)); */
console.log(buyukBul(-87, -8));
