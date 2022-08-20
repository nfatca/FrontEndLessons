// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !------------------------------------------------

// console.log("****** FUNC DECLARATION *********");

// //* ORNEK:
// //************************************************/

// function yazdir() {
//   console.log("Merhaba");
// }
// yazdir();

// //* ORNEK2:
// //************************************************/

// function selamla(ad, soyAd = "") {
//   console.log(`Merhaba ${ad} ${soyAd}`);
// }

// selamla("Can", "Yılmaz");
// selamla("Canan", "Öztürk");
// selamla("Ayşe");

// //* ORNEK3:
// //************************************************/

// function yasHesapla(isim, dogumTarihi) {
//   //   console.log(`${isim} ${2022 - dogumTarihi} yaşındadır`);
//   const sonuc = `${isim} ${new Date().getFullYear() - dogumTarihi} yaşındadır`;
//   return sonuc;
// }
// const Elif = yasHesapla("Elif", "1999");

// console.log(Elif);

// //* ORNEK4:
// //************************************************/

// function tekCift(sayi) {
//   /*  if (sayi % 2 == 0) return `Çift Sayı`;
//   else return `Tek Sayı`; */

//   return sayi % 2 ? "Tek Sayı" : "Çift Sayı"; //* sayi%2 sonucu 1 olunca true döner ve tektir çalışır, sonuc 0 olunca false döner ve çifttir çalışır
// }
// const n = +prompt("Bir sayı giriniz :");
// console.log(tekCift(n));
