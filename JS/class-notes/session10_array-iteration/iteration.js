//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log("****** ITERATION **********");

//
//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89];

prices.forEach((p) => console.log(p));

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */

let sum = 0;

prices.forEach((price) => (sum += price));
console.log("Sum :" + sum);

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => (sum += price))); //!undefined çıktı verir

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

let total = 0;
prices.forEach((price, index, arr) => {
  total += price;
  console.log(`${index + 1}.iteration : ${total}`);
  arr[index] += price / 10;
});
console.log(prices);

//* ======================================================
//*                       MAP METHOD
//* ======================================================

const katAlinmis = prices.map((x) => x * 5);
console.log(katAlinmis);

//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];
const bigNames = names.map((x) => x.toUpperCase());

console.log(bigNames, names);

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const changeDolarTL = tlPrices.map((x) => Number((x / dolar).toFixed(2))); //? virgülden sonraki basamak sayısı
const changeEuroTL = tlPrices.map((x) => Number((x / euro).toPrecision(3))); //? göstereceği basamak sayısı

console.log(changeDolarTL);
console.log(changeEuroTL);

//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

const products = [
  "Iphone12",
  "samsungS20",
  "lenovo",
  "macbook pro",
  "mac air",
  "Galaxy tablet",
  "macbook",
  "Iphone12",
  "mac air",
  "lenovo",
  "macbook pro",
  "samsungS20",
];

//! Orjinal diziyi degistidik.
products.map((p, i, arr) => (arr[i] = p.toUpperCase()));
console.log(products);

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================

//* ======================================================
//*                 FILTER METHOD
//* ======================================================
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
const bigThan = salaries.filter((s) => s > 10000);
console.log(salaries, bigThan);

const range = salaries.filter((s) => s >= 6000 && s <= 10000);
console.log(salaries, range);

//?-------------- ÖRNEK -------------------
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const zam = salaries.filter((s) => s < 9000).map((s) => Math.trunc(s * 1.1));

console.log(zam);

salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1))
  .forEach((s) => console.log(s));

//* ======================================================
//*                 REDUCE METHOD
//* ======================================================

const sumOfSalaries = salaries.reduce((acc, val) => acc * val);

console.log("SUM :", sumOfSalaries);

//? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
//? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
//? İlgili programı yazınız.

const sumOfIncSal = salaries
  .filter((sal) => sal <= 9000)
  .map((sal) => sal * 1.1)
  .reduce((acc, sal) => acc + sal);

console.log(sumOfIncSal);
