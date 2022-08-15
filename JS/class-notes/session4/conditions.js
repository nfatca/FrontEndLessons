//* ===============================================
//*                  KARAR YAPILARI
//* ===============================================

//? **************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

// const sayi = +prompt(`Bir sayı giriniz`);
// const sayi1 = +prompt(`Bir sayı giriniz`);
// const sayi2 = +prompt(`Bir sayı giriniz`);

//* if(sayi>0){
//     console.log(`${sayi} pozitif`);
// }
// else if(sayi<0){
//     console.log(`${sayi} negatif`);
// }
// else{console.log(`sayı 0`)};
// console.log(sayi, typeof sayi);

//* if (sayi>=sayi1 && sayi>=sayi2) {
//     console.log(`${sayi} en büyüktür`)
    
// }
// else if (sayi1>=sayi && sayi1>=sayi2) {
//     console.log(`${sayi1} en büyüktür`)
// }
// else{console.log(`${sayi2} en büyüktür.`)}

//? **************** SWITCH-CASE *******************

//* const yas = +prompt("Yaş giriniz");
// const cinsiyet = prompt("Cinsiyet giriniz(erkek, kadın)");
// const saglik = prompt("Sağlık durumunuzu giriniz (sağlıklı veya sağlıksız)");

// const kosul = (yas >= 20) && (cinsiyet == `erkek`) && (saglik == `sağlıklı` || `saglikli`);

// if (kosul) {
//     console.log(`Askerlik yapmalı`)
// }
// else console.log(`Askerlik yapamaz`);

const hız = +prompt("Hızı giriniz ");
const mesaj = hız >= 120 ? "Hızlı" : (hız>=90 ? "Normal":"Yavaş");
console.log(mesaj);