// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

// //* ORNEK: Silindir Hacmi
// //************************************************/

// const r = +prompt("Yarıçap giriniz:");
// const h = +prompt("Yükseklik giriniz:");

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(`Silindirin hacmi ${hacimHesapla(r, h).toExponential()}`);
// console.log(`Silindirin hacmi ${hacimHesapla(r, h).toFixed(2)}`);

// //* ORNEK2: Yas Hesaplama
//*************************************************** */

//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.

/* const tarih = Number(prompt("Doğum tarihi giriniz:"));

const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;

  return yas;
};
 */
//* alternatif

/* const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

console.log("YASINIZ:" + yasHesapla(tarih));
console.log("YASINIZ:" + yasHesaplaKisa(tarih)); */

//! Func Expression yontemi ile tanimlama

/* const yasHesapla2 = function (tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};

console.log("YASINIZ:" + yasHesapla3(tarih)); */

//! Func Declaration yontemi ile tanimlama (bellekte yer kapladığı için çok tercih edilmiyor)

/* function yasHesapla3(tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
} */

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...

const Fibonacci = (sayi) => {
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;
  stringResult = "1,1";
  for (let index = 3; index <= sayi; index++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    stringResult += ", " + fib2;
  }
  return fib2;
};

const sayi = +prompt("Sayi giriniz:");
if (sayi <= 0) {
  console.log("0 dan büyük sayı giriniz");
} else {
  console.log(`${Fibonacci(sayi)}`);
  console.log(stringResult);
}
