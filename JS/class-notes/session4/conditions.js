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

// const hız = +prompt("Hızı giriniz ");
// const mesaj = hız >= 120 ? "Hızlı" : (hız>=90 ? "Normal":"Yavaş");
// console.log(mesaj);


//* Odev1 : Dört işlem 
// let button = "e";
// while (button == "e"){
//     let sayi1 = +prompt("İlk sayıyı giriniz: ")
//     let islem = prompt("İşlem seçiniz(+, -, *, /): ")
//     let sayi2 = +prompt("İkinci sayıyı giriniz: ")
//     switch(islem){
//         case "+":
//             console.log(`2 sayının toplamı ${sayi1} + ${sayi2} = ${sayi1 + sayi2}`);
//             button = "h";
//             break;
//         case "-":
//             console.log(`2 sayının farkı ${sayi1} - ${sayi2} = ${sayi1 - sayi2}`);
//             button = "h";
//             break;
//         case "*":
//             console.log(`2 sayının çarpımı ${sayi1} * ${sayi2} = ${sayi1 * sayi2}`);
//             button = "h";
//             break;
//         case "/":
//             console.log(`2 sayının bölümü ${sayi1} / ${sayi2} = ${sayi1 / sayi2}`);
//             button = "h";
//             break;
//         default:
//             console.log("Geçerli işlem seçiniz.");
//             button = "h";
//             break;
//     }
    
//     button = prompt("devam etmek ister misin? (e)");
// }

//* Odev2 Haftalık Ders Programı

// let gun = +prompt("Hangi gün olan dersi öğrenmek istersiniz?");

// switch (gun) {
//     case 1, 2, 3, 4:
//         console.log(`InClass dersiniz bulunmaktadır`);
//         break;
//     case 5:
//         console.log(`Teamwork çalışmanız vardır`);
//         break;
//     case 6:
//         console.log(`InClass ve Workshop dersleriniz bulunmaktadır`);
//         break;
//     case 7:
//         console.log(`Self-Study zamanınız `);
//         break;
//     default:
//         console.log(`Lütfen geçerli bir gün giriniz (1-7)`);
//         break;
// }

//* Odev3 Maas Artırma

// let maas = +prompt("Lütfen güncel maaşınızı giriniz :");

// if (maas<5500) {
//     maas = maas*1.5;
// }
// else
//     maas = maas*1.1;
// console.log(`Güncel maaşınız ${maas}. İyi günlerde harcayınız.`);

//* Odev4 Kredi Risk Programı

// let gelir = +prompt("Lütfen gelirinizi giriniz");
// let gider = +prompt("Lütfen giderlerinizi giriniz");

// const durum = gelir-gider >= 5500 ? console.log("Kredi Alabilirsiniz"):console.log("Üzgünüz size yardımcı olamıyoruz");