// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

/* let toplam = 0;
let sayı = +prompt("Sayıyı giriniz:");
for(i=1;i<=sayı;i++)
    toplam+=i;
console.log(`sayı toplamı ${toplam}`); */

/* for(i=1;i<=10;i++)
    console.log(`${Math.round(Math.random()*100)}`); */

// Math.random()*100;
//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//* Asal Sayı Bulma

/*  let sayi = +prompt("Sayıyı giriniz");
let asal = true;
if(sayi <= 1){
    alert("Sayi 1'den büyük olmalı")
}
else{
for(i=2;i<sayi;i++)
        if (sayi%i==0)
            asal=false      

if (asal == true)
    console.log("Asal sayı");
    else console.log("Asal değil");
} */

//* Asal sayı bulma

/*     let sayi = +prompt("Sayıyı giriniz");
    let asal = 0;
    
    for(i=2;i<sayi;i++)
        if (sayi%i==0){
            asal +=1
        }
        if(asal == 0)
            console.log("Asal sayı");
        else
            console.log("Asal değil");
*/

//* While

/* let i =+prompt("0-100 arası not giriniz");
while (i<0 || i>100) {
    alert("0-100 arasında sayı giriniz");
    i =+prompt("0-100 arası not giriniz");
}
 */

//* tahmin ödevi

/* let sayi = Math.round(Math.random()*100) ;

let tahmin_sayisi = 1

while(tahmin_sayisi<=5){
    let tahmin = +prompt("0-100 arasında sayı tahmin ediniz")
    if(tahmin == sayi){
        console.log(`Tebrikler ${tahmin_sayisi}. denemede buldunuz`);
        break;
    }
    else{
        if(tahmin<sayi)
            console.log("Artırınız")
        else 
            console.log("Azalt")
        console.log(`Yeniden deneyiniz ${5-tahmin_sayisi} hakkınız kaldı`);
        tahmin_sayisi +=1 ;
    }
} */

const sayi = Number(prompt("Bir Sayı Giriniz"));
if (sayi <= 1) {
  alert("SAYI 1'den Büyük Olmalıdır");
} else {
  if (sayi == 2) {
    console.log(`${sayi} Asaldır`);
  } else
    for (let i = 2; i < sayi; i++) {
      if (sayi % i === 0) {
        console.log(`${sayi} Asal Değildir`);
        break;
      } else {
        console.log(`${sayi} Asaldır`);
        break;
      }
    }
}
