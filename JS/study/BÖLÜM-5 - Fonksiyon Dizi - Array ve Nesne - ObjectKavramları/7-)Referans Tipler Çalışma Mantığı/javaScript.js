//primitive

let yas = 32;
let yeniYas = yas;

yas = 40;

console.log(yas, yeniYas);


//referans tipli array object

let renkler = ["kırmızı", "yeşil"];
let yeniRenkler = renkler;

renkler.push("mavi");

console.log(renkler, yeniRenkler);







let ogrenci = {
    ad:"sezer",
    yas:32
}

let yeniOgrenci = ogrenci;
ogrenci.yas = 36;
console.log(ogrenci, yeniOgrenci);