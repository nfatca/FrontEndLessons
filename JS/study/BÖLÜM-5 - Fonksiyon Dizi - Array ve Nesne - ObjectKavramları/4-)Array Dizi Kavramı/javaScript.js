//Verileri bir arada tutan yapılara ARRAY DİZİ denir.


let arabaMarkalari = ["Mercedes", "Audio", "BMW"];
console.log(arabaMarkalari);
console.log(arabaMarkalari[0]);
arabaMarkalari[2] = "Peugeot";       //2. indexteki BMW yerine Peugeot yazdık.
arabaMarkalari[3] = "Honda";        //3. indexe Hondayı ekle
arabaMarkalari[8] = "Suzuki"
console.log(arabaMarkalari);        //empty x 4 yazıyor consolda.
console.log("Araba Dizisi:" + arabaMarkalari.toString());

 

console.log("-------------------------");




for(let i = 0; i < arabaMarkalari.length; i++){
    console.log(arabaMarkalari[i]);
}




console.log("-------------------------");



//o anki dizi elemanlarını görmek istiyorsak eğer "of" kullanırız. 
for(let oankiDiziElemanlari of arabaMarkalari){
    console.log(oankiDiziElemanlari);
}



console.log("-------------------------");



let yeniDizi = [1, "emre", true];
for(let yeniElemanlar of yeniDizi) {
    console.log(yeniElemanlar);
}