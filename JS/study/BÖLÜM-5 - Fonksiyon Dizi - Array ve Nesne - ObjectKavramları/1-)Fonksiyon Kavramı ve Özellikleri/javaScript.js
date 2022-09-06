//Belli yapılara hizmet eden kodları bir arada tutan yapılara function denir.




// selamVer();
function selamVer() {
    console.log("Merhaba");
}
selamVer();





// 10 ve 20 fonksiyonun argümanlarıdır
sayilariTopla(10, 20);
function sayilariTopla(sayi1, sayi2) {
    console.log("Sayıların Toplamı:" + (sayi1 + sayi2));
}
// sayilariTopla(10, 20);

console.log(typeof sayilariTopla);






belliAraliktakiSayilariTopla(0, 10);
belliAraliktakiSayilariTopla(30, 60);
function belliAraliktakiSayilariTopla(baslangicSayisi, bitisSayisi) {
    
    let toplam = 0;

    for (let i = baslangicSayisi; i <= bitisSayisi; i++) {
        toplam = toplam + i;
    }
    console.log("Toplam :" + toplam);
}