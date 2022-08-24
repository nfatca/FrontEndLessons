// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================

console.log("****** 3 - SCOPE ******");

let sayi1 = 5; //! global scope
console.log(sayi1);

const fonks1 = function () {
  sayi1 = 22;
  console.log(sayi1); //! 22
};
fonks1();

console.log(sayi1++); //! 22
console.log(sayi1); //! 23

//? ----------

let sayi2 = 7;
console.log(sayi2); //! 7

const fonks2 = () => {
  let sayi2 = 11; //! function-scope
  console.log(sayi2); //! 11
};

fonks2();
console.log(sayi2); //! 7 (Fonksiyon içinde yeniden sayi2 tanımlandığı için global scope kullanılmadı)

if (sayi2 === 8) {
  let sonuc = "merhaba";
} else {
  sonuc = "nasılsın"; //! (Hoisting) if içerisindeki sonuç ile ilgisi yok, js otomatik olarak tanımlama yapıyor
  console.log(sonuc);
}

// console.log(sonuc);
