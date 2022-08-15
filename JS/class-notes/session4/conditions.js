//* ===============================================
//*                  KARAR YAPILARI
//* ===============================================

//? **************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

const sayi = +prompt(`Bir sayı giriniz`);
const sayi1 = +prompt(`Bir sayı giriniz`);
const sayi2 = +prompt(`Bir sayı giriniz`);

// if(sayi>0){
//     console.log(`${sayi} pozitif`);
// }
// else if(sayi<0){
//     console.log(`${sayi} negatif`);
// }
// else{console.log(`sayı 0`)};
// console.log(sayi, typeof sayi);

if (sayi>=sayi1 && sayi>=sayi2) {
    console.log(`${sayi} en büyüktür`)
    
}
else if (sayi1>=sayi && sayi1>=sayi2) {
    console.log(`${sayi1} en büyüktür`)
}
else{console.log(`${sayi2} en büyüktür.`)}
