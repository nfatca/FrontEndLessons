let person = {
    ad: "sezer",
    yas:30,
    evliMi:false,
};
console.log(person.ad);
console.log(typeof person);
console.log(person instanceof Array);
console.log(person instanceof Object);







let renkler = ["kırmızı"];
console.log(renkler[0]);
console.log(typeof renkler);
console.log(renkler instanceof Array);
console.log(renkler instanceof Object);








const fonksiyon = function() {
    console.log('Merhaba Dünya');
}
fonksiyon();


console.log(typeof fonksiyon);
console.log(fonksiyon instanceof Object);       //function Object dir.









fonksiyon.test = 'deneme bik bik';
console.log(fonksiyon.test);






//fonksiyonlar js de birer Objecttir.

let sayi = 5;
const fonk = function(sayi){
    sayi = sayi * 2;
    return sayi;
}
console.log(fonk(sayi));
console.log(sayi);





let myDizi = [1, 2, 3];
const diziElemanlariniIkiyleCarp = function () {
    let geciciDizi = [];
    for (let i = 0; i < myDizi.length; i++) {
        geciciDizi[i] = myDizi[i] * 2;
    }
    return geciciDizi;
}
console.log("kopya dizi:" + diziElemanlariniIkiyleCarp(myDizi));
console.log("kaynak ana dizi:" + myDizi);  