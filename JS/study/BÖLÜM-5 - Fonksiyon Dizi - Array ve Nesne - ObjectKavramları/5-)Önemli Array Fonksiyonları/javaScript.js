let isimler = ["emre", "hasan", "ayşe"];
console.log(isimler.toString());
console.log(isimler.join("   - "));     //"" içi boşluğa duyarlıdır.


console.log("-----------------");


let diziElemanSayisi = isimler.push("Sezer");       //Dizinin sonuna eleman ekler
console.log(isimler.toString() + " Dizinin eleman sayısı:" + diziElemanSayisi);


console.log("-----------------");


let dizidenCikarilanEleman = isimler.pop();     //Dizinin sonundan eleman siler
console.log(isimler + " Çıkarılan Eleman:" + dizidenCikarilanEleman);


console.log("-----------------");


isimler.unshift("Muhammed");        //Dizinin başına eleman ekler
console.log(isimler.toString()); 


console.log("-----------------");


isimler.shift();                    //Dizinin ilk elemanını siler
console.log(isimler.toString());       


console.log("-----------------");


delete isimler[1];                  //indexi 1 olanı sil
console.log(isimler.toString() + " " + isimler[1]);  


console.log("-----------------");



let sayilar = [ 1,2,3,4,5,6,7,8];
sayilar.splice(7,0,9,10);       //7. indexe git birşey silme 9 ve 10 ekle
console.log(sayilar.toString());


console.log("-----------------");


let silinenler = sayilar.splice(0,4, 31, 32, 33);        //0. indexten başla 4 elemanı sil 
console.log(sayilar.toString());            //31, 32, 33 ü ekle
console.log("Silinen Elemanlar:" + silinenler.toString());


console.log("-----------------");



let tekSayilar = [1, 3, 5];
let ciftSayilar = [2, 4, 6];

let sayilarim = tekSayilar.concat(ciftSayilar);
console.log(sayilarim.toString());


console.log("-----------------");


let yeniDizi = sayilarim.slice(2,4);    //2. indexden başla 4. index dahil olmayacak şekilde yeni dizi oluştur.
console.log(yeniDizi.toString() + "     " + sayilarim.toString());  //Kaynak dizi bozulmadı