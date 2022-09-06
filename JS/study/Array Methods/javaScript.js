const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const isimler = ["sezer", "ali", "hasan", "ayse"];

const ogrenciler = [
  { id: 12, isim: "sezer", yas: 30 },
  { id: 22, isim: "hasan", yas: 15 },
  { id: 32, isim: "fatma", yas: 55 },
  { id: 13, isim: "nuriye", yas: 19 },
  { id: 92, isim: "kemal", yas: 45 },
  { id: 15, isim: "mustafa", yas: 75 },
  { id: 44, isim: "ceren", yas: 30 },
];

// let sonuc = sayilar.shift(); //! Dizinin ilk öğesini kaldırır.
// console.log(sonuc); //! Çıkarttığı elemanı dönderdi.
// console.log(sayilar); //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.unshift(2222);  //! Dizinin başına yeni değerler eklemek için kullanılır.
// console.log(sonuc);                 //! Dizinin eleman sayısını(length) gösterir
// console.log(sayilar);               //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.pop(); //! Dizinin son öğesini kaldırır.
// console.log(sonuc); //! Çıkarttığı elemanı dönderdi.
// console.log(sayilar); //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.push(3333); //! Dizinin sonuna eleman eklemek için kullanılır.
// console.log(sonuc); //! Dizinin eleman sayısını(length) gösterir
// console.log(sayilar); //Kaynak Dizi Bozuldu.

//! .slice() → Kendisine parametre olarak verilen dizi aralığında bulunan değerleri kopyalar ve yeni bir dizi oluşturarak geri döndürür.
// let sonuc = sayilar.slice(1, 5); //1. index dahi --- 5. index dahil değil
// console.log(sonuc); //Yeni dizi oluşturdu
// console.log(sayilar); //Kaynak Dizi Bozulmadı

//! .splice() → Diziden elemanları kaldırır, değiştirir veya çıkan elemanın yerine eleman ekler.

// let sonuc = sayilar.splice(2, 4); //! 2. indexten itibaren 4 eleman sil
// let sonuc = sayilar.splice(2); //! 2. indexten itibaren sil.
// console.log(sonuc); //Yeni dizi oluşturdu
// console.log(sayilar); //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.splice(2, 0, 11111, 22222); //* 2. indexi SİLME ve 1111, 22222 SOL TARAFA ekle
// console.log(sonuc);
// console.log(sayilar); //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.splice(2, 1, 11111, 22222);     //* 2. indexi SİL ve 1111, 22222 ekle
// console.log(sonuc);
// console.log(sayilar);                               //Kaynak Dizi Bozuldu.

//! .find() → Dizi elemanlarını bir döngüye alıp sırasıyla her bir dizi elemanını belirlediğimiz bir koşula tabi tutup ilk koşulu sağlayan dizi elemanını bulmak için kullanabiliriz.

// let sonuc = ogrenciler.find(kisi => kisi.id === 32); //* ogrenciler dizisindeki 32 id li değeri getir
// console.log(sonuc);
// console.log(ogrenciler);                             //Kaynak Dizi Bozulmadı

//! .findIndex() → Dizi elemanlarını bir döngüye alıp sırasıyla her bir dizi elemanını belirlediğimiz bir koşula tabi tutup ilk koşulu sağlayan dizi elemanının indeks numarasını bulmak için kullanabiliriz.

// let sonuc = ogrenciler.findIndex(kisi => kisi.id === 92);  //index numarasını buldu
// console.log(sonuc);
// console.log(ogrenciler);                                   //Kaynak Dizi Bozulmadı

//! .every() → Belirli bir dizi içerisinde vereceğimiz koşula, tüm elemanların uyup uymadığını kontrol eder. Testi geçerse true değerini döndürür.

// let sonuc = sayilar.every(sayi => sayi < 85);   //* herbir elemanı tek tek şartı sağlıyor mu diye kontrol ediyor(true -- false  döner)
// console.log(sonuc);
// console.log(sayilar);                           //Kaynak Dizi Bozulmadı

//! .some() → Belirli bir dizi içerisinde vereceğimiz koşula, herhangi bir (bazı) elemanların uyup uymadığını kontrol eder. Testi geçerse true değerini döndürür.

// let sonuc = sayilar.some(sayi => sayi < 10);    //* Bir tane bile bu şarta uyan varsa sonuc true olur
// console.log(sonuc);
// console.log(sayilar);                           //Kaynak Dizi Bozulmadı

//! .includes() → Dizinin öğeyi içerip içermediğini kontrol eder.

// let sonuc = isimler.includes('sezer');      //* isimler dizisinde 'sezer' varsa true yoksa false
// console.log(sonuc);
// console.log(isimler);                       //Kaynak Dizi Bozulmadı

//! .forEach() → Dizi içindeki indexler arasında dolaşmamızı sağlar.

// let sonuc = sayilar.forEach(function (sayi) {   //* İçine fonksiyon alabiliyor(map fonk. almıyor)
//   console.log(sayi * 2);
// });
// console.log(sayilar); //Kaynak Dizi Bozulmadı

//! .filter() → Dizideki öğeleri belirli bir koşula göre filtreler. Filtrelenen öğeler varsa geriye döndürülür, yoksa boş bir dizi geriye döner.

// let sonuc = ogrenciler.filter(function (kisi) {
//   return kisi.id % 2 === 1;
// });
// console.log(sonuc);
// console.log(ogrenciler);

//! .concat() → İki veya daha fazla diziyi yeni bir dizide birleştirir.

// let sonuc = sayilar.concat(isimler);
// console.log(sonuc);
// console.log(sayilar);
// console.log(isimler);

//!  .map() → kendisine parametre olarak gönderilen dizinin her bir elemanını belirlenen bir işleme tabi tutup, yeni bir dizi meydana getirir.

// let sonuc = sayilar.map((topla) => topla * 3); //Yeni dizi oluşturdu.
// console.log(sonuc);
// console.log(sayilar); //Kaynak dizi bozulmadı

//!  Array.from() → Dizi benzeri yenilenebilir bir nesneden yeni bir dizi oluşturur.

// let sonuc = Array.from(sayilar);
// console.log(sonuc);
// console.log(sayilar);

// let ad = "sezer";
// let yeni = Array.from(ad);
// console.log(yeni);

//!  Array() → Bu method ile yeni bir dizi oluşturabilirsiniz ancak tek bir parametre gönderirseniz ve bu bir sayı ise dizi oluşturulmaz gönderdiğiniz sayı boyutunda elemanları boş bir dizi oluşturulur.

// let sonuc1 = Array(5, 2);
// let sonuc2 = Array(5); // 5 elemanlı boş dizi oluşturdu
// let sonuc3 = Array(sayilar, 2);
// console.log(sonuc1);
// console.log(sonuc2);
// console.log(sonuc3);
// console.log(sayilar);

//!  Array.of() → Bu method ile yeni bir dizi oluşturabilirsiniz artı olarak tek bir parametre gönderseniz ve bu bir sayı dahi olsa , o elemanın bulunduğu bir dizi oluştulur.

// let sonuc4 = Array.of(5, 2);
// let sonuc5 = Array.of(5); // Elemanı 5 olan yeni bir dizi oluşturdu
// let sonuc6 = Array.of(sayilar, 2);
// console.log(sonuc4);
// console.log(sonuc5);
// console.log(sonuc6);
// console.log(sayilar);

//!  .toString() → Diziyi string’e dönüştürür.

// let sonuc = isimler.toString();
// console.log(sonuc);
// console.log(isimler);

//!  .join() → Virgülle veya birtilen herhangi bir ayraçla ayrılmış dizi öğelerinden oluşan yeni bir string döndürür.

// let sonuc1 = isimler.join();
// let sonuc2 = isimler.join("");
// let sonuc3 = isimler.join(" ");
// let sonuc4 = isimler.join("-");
// console.log(sonuc1);
// console.log(sonuc2);
// console.log(sonuc3);
// console.log(sonuc4);
// console.log(isimler);

//!  .sort() → Bir dizinin öğelerini artan UTF-16 düzeninde sıralar.

// let sonuc = sayilar.sort();         // İlk rakamlara göre küçükten büyüğe sıraladı
// console.log(sonuc);
// console.log(sayilar);

// let sonuc = sayilar.sort((a, b) => a - b);      //Küçükten büyüğe sıraladı
// console.log(sonuc);
// console.log(sayilar);                           // Kaynak dizi bozuldu

// let sonuc = sayilar.sort((a, b) => b - a);      //Büyükten küçüğe sıraladı
// console.log(sonuc);
// console.log(sayilar);                            // Kaynak dizi bozuldu

// let sonuc = isimler.sort();         // a - z ye sıraladı.
// console.log(sonuc);
// console.log(isimler);               // Kaynak dizi bozuldu

//!  .reverse() → Diziyi tersine çevirir. İlk index sonuncu, sonuncu index ise ilk index olur.

// let sonuc = sayilar.reverse(); // sayilar dizisini ters çevirdi
// console.log(sonuc);
// console.log(sayilar); // Kaynak dizi bozuldu

// let sonuc = isimler.reverse();
// console.log(sonuc);
// console.log(isimler);

//!  .reduce() → Dizinin her değeri için bir fonksiyon yürütür ve sonunda diziyi tek bir değere düşürür. Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

// let sonuc = sayilar.reduce((a, b) => a + b); //* Dizideki sayıları topla
// console.log(sonuc);
// console.log(sayilar);
