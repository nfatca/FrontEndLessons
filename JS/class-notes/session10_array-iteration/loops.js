//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

//?-------------- ÖRNEK -------------------

const dizi = [-5, 15, 22, -4, 45, 78];
const negatifler = [];
const pozitifler = [];
const dizilereAyir = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizilereAyir(dizi);

console.log(pozitifler);
console.log(negatifler);

//?-------------- ÖRNEK -------------------
//? Dizideki notlarin ortalamasini hesaplayiniz.
const notlar = [55, 77, 23, 89, 100];

const ortalama = (n) => {
  let toplam = 0;
  for (let i = 0; i < n.length; i++) {
    toplam += n[i];
  }
  return toplam / n.length;
};
console.log(ortalama(notlar));

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

const birlestir = (x, y) => {
  let adVeSoyadlar = [];
  for (let i in x) {
    adVeSoyadlar[i] = `${x[i]} ${y[i]}`;
  }
  return adVeSoyadlar;
};

console.log(birlestir(adlar, soyAdlar));
//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const ogrenciler = [
  "ahmet",
  "mehmet",
  "ismet",
  "ahmet",
  "can",
  "mehmet",
  "cem",
];

// const ogrenciBul = (x, y) => {
//   let count = 0;
//   for (let i in x) {
//     if (y === x[i]) count++;
//   }
//   if (!count) {
//     return "bulunamadı";
//   } else {
//     return count;
//   }
// };
// let isim = prompt("Aradığınız ismi giriniz").toLowerCase();
// console.log(ogrenciBul(ogrenciler, isim));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const findStudentsOf = (arr, search) => {
  let counter = 0;
  for (let item of arr) {
    //? Ternary
    // search === item ? counter++ : null;

    //! Short-circuit yöntemi: && => kosul dogru (true) ise ifadeyi calisitir.
    search === item && counter++;

    //! Short-circuit yöntemi: || => kosul yanlis (false) ise ifadeyi çalıştır.
    // search === item || counter++;
  }

  return !counter
    ? `${search} can not be found`
    : `${search} found ${counter} times`;
};

const studentName = prompt("Please enter a name").toLowerCase();
console.log(findStudentsOf(ogrenciler, studentName));
