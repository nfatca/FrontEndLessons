// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

//! 1.yöntem (Array Literal)
const isimler = ["ahmet", "ismet", "can", "canan"];

// console.log(isimler);
// console.log(typeof isimler);
// console.log(isimler.length);

//! 2.yöntem (Object Literal)
const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
// console.log(diller);

const numbers = [3, 2, 1];

//! 10 elemamlı boş bir array
const arrays = new Array(10);
// console.log(arrays);

//! 3.yöntem (Array.of)

const veri = Array.of("Deneme");
// console.log(veri);

//! Diziden veri okuma
// console.log(diller[1]);

const go = diller[3];
// console.log(go);

// console.log(isimler[isimler.length - 1]);
//? 2.yöntem
// console.log(isimler.at(-1));

//! Diziye veri yazma
isimler[1] = "saffet";

// console.log(isimler);

//! numbers dizisinin son elemanını 1 artırma
numbers[numbers.length - 1] += 1;
// console.log(numbers[numbers.length - 1]);

// numbers.at(-1)++;
console.log(numbers.at(-1));

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];

// console.log(kisiler);

const yas55 = kisiler[5][2];
// console.log(yas55);

kisiler[5][1]--;
// console.log(kisiler);

// ?=========================================================
// ?      DIZIYI DEGISTIREN (MUTATOR) METOTLAR
// ?=========================================================

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

//*** pop()
//!dizinin son elemanını siler ve elemanı döndürür
n = arabalar.pop();
// console.log(arabalar, n);

//* push()
//! dizinin sonuna eleman ekler ve dizinin son eleman sayısını döndürür
n = arabalar.push("Citroen");
// console.log(arabalar, n);

//* unshift()
//! dizinin ilk elamanın ekler ve dizinin son eleman sayısını döndürür
n = arabalar.unshift("Audi");
// console.log(arabalar, n);

//* shift()
//! dizinin ilk elamanın siler ve silinen elemanı döndürür
n = arabalar.shift();
// console.log(arabalar, n);

//* splice()
//? 1.parametre eklenecek indis numarası
//? 2.parametre 0 ise araya ekleme, 1 ise üzerine yazar
//? 3.parametre yeni eklenecek veri
arabalar.splice(1, 0, "passat");
// console.log(arabalar);

arabalar.splice(3, 1, "Honda", "Toyota");
// console.log(arabalar);

//* reverse()
//! Dizinin tamamını ters sıraya çevirir
arabalar.reverse();
// console.log(arabalar);

//* sort() Diziyi alfabetik olarak sirala
isimler.sort();
// console.log(isimler);

//! sayılar için sıralama yapıldığında doğru çıkmayabilir
const sayilar = [2, 3, 22, 1, 5, 11, 7, 6];
sayilar.sort();
// console.log(sayilar);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
// console.log(sayilar);

//* fill()
//! bütün diziye aynı değeri basar
const array1 = [1, 2, 3, 4, 5, 6, 7];
array1.fill(0);
// console.log(array1);

array1.fill(1, 2, 4); //! 2.ve 4. elemanlar arasına 1 bas
// console.log(array1);

array1.fill(-1, 1); //! 1.elemandan itibaren dizi sonuna kadar -1 basar
// console.log(array1);

//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "üc", 2, "2", "bes", "5"];

//* includes()
//! dizi içerisinde var mı yok mu ??
//*-----------------------------------------------------------

console.log(sayilar1.includes(5));

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------
//! ilk eslesen indeksi dondurur.

console.log(sayilar1.indexOf(2));
console.log(sayilar1.lastIndexOf(2));

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//! join, dizinin elamanlari birlestirip string hale cevirir.

console.log(sayilar1.join(" "));
console.log(sayilar1.join(""));

//* toString()
//*-----------------------------------------------------------
//! toString fonksiyonu sadece dizinin elemanlarinin aralarina (virgul) koyarak birlestirir ve string yapar.
console.log(sayilar.toString());

//* slice()
//*-----------------------------------------------------------
//! önceki diziden girilen sayılar arasında yeni dizi oluşturur
const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];

const yeniArabalar = arabalar1.slice(2);
console.log(yeniArabalar);

const yeniArabalar1 = arabalar1.slice(1, 3); //! ilk değer dahil ikinci değer dahil değil
console.log(yeniArabalar1);

//* concat()
//*-----------------------------------------------------------
//! dizileri birbirine ekler
const yazilar = ["Bugün", "hava", "çok", "güzel"];
const numbersArray = [1, 2, 5, 7];
const combinedArr = yazilar.concat(numbersArray, [
  "aslinda",
  "çok",
  "sıcak",
  ["x", "y"],
]);
console.log(combinedArr);

//* every()
//*-----------------------------------------------------------

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore test gerceklestirir.Tum elemanlar icin test basarili ise true aksi takdirde false deger dondurur.

const yasArray = [18, 22, 34, 78, 81];
const check = yasArray.every((yas) => yas >= 18); //! dizinin içindeki tüm elemanlar 18den büyük veya eşit ise true döndürür, aksi halde false döndürür
check
  ? console.log("Dizideki herkesin yaşı 18'den büyüktür")
  : console.log("Dizide 18 yas altı var");

console.log(check);

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir. En az bir eleman icin bile test basarili ise true aksi takdirde false deger dondurur.

const check50 = yasArray.some((yas) => yas >= 50); //! dizinin içindeki elemanlar 1 tanesi 50den büyük veya eşit ise true döndürür, aksi halde false döndürür
console.log(check50);

//* find() ,findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir. Kosulu saglayan ilk dizi elemaninin dondurur. Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//! örnek: Yası 30'dan büyük olan ilk elemanı yazdırın.....
const firstTemp = yasArray.find((x) => x >= 30);
const lastTemp = yasArray.findLast((x) => x >= 30);
console.log(firstTemp);
console.log(lastTemp);

const names = ["Ahmet", "Can", "Mustafa", "Merve", "Can"];

//* findIndex(), findLastIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir. Kosulu saglayan ilk dizi elemaninin indeksini dondurur. Eger hic bir eleman kosulu saglamazsa -1 dondurur.

const firstIndex = yasArray.findIndex((x) => x >= 30);
const lastIndex = yasArray.findLastIndex((x) => x >= 30);
console.log(firstIndex);
console.log(lastIndex);
