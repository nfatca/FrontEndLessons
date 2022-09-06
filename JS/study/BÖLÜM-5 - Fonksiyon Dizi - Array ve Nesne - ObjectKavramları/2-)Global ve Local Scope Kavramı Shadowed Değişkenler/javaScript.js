let isim = "Sezer";     //isim değişkeni Global tanımlıdır.

selamVer();
function selamVer() {

    let yas = 30;       //yas değişkeni Local tanımlıdır.Sadece {} parantez içinde çalışır. 
    console.log("Merhaba " + isim + " Yaş:" + yas);
}

let yas = 40;       //yas değişkenini {} dışında yeniden 40 diye tanımlayabiliriz.
console.log(yas);






// let favoriRengim = "Yeşil";
// favoriRenginiSoyle(favoriRengim);
favoriRenginiSoyle("Yeşil");
function favoriRenginiSoyle(renk) {
    console.log("Favori rengim " + renk);
}





//(rengim) Aynı isimli ama scope ları farklı ise bu duruma "Shadow variable" denir
let rengim = "Yeşil";
renginiSoyle(rengim);

function renginiSoyle(renk) {

    let rengim = "Sarı"
    console.log("Favori rengim: " + rengim);
}