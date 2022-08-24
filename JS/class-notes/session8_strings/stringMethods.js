// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

//! Klasik yöntem

const str1 = "Clarusway";
const str2 = " Hello";
const str3 = " Full Stack";

console.log(str1, typeof str1);

//! Now-primitive String tanımlama
const str4 = new String("Hello FS");
console.log(typeof str4);

// ?------------------------------
console.log(str1.toLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi;

console.log(str5, typeof str5);

//* ---------------------------------------------------
//*  concat() - immutable (str1'e str2yi ekler)
//* ---------------------------------------------------

console.log(str1.concat(str2));

//* ---------------------------------------------------
//*  toUpperCase() - toLowerCase() - immutable (büyük har, küçük harf yapar)
//* ---------------------------------------------------

const myName = "Nurullah Atca";
console.log(myName.toUpperCase());

let yourName = "ismet";
yourName = yourName.toLocaleUpperCase("tr");
console.log(yourName);

//! ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu
//! donduren fonksiyonu yaziniz.

const esitMİ = (str1, str2) =>
  str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? `${str1} ile ${str2} eşittir`
    : `${str1} ile ${str2} eşit değildir`;

console.log(esitMİ("Merhaba", "MERHABA"));

//* ---------------------------------------------------
//*  LocaleCompare() (string ifadelerin aksan vb karşılaştırmasında kullanılır)
//* ---------------------------------------------------

const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase

console.log(a.localeCompare(b, "en", { sensitivity: "base" }));

//? 'BASE: a ≠ b, a = á, a = A'
//? 'ACCENT: a ≠ b, a ≠ á, a = A'
//? 'CASE: a ≠ b, a = á, a ≠ A'

//* ---------------------------------------------------
//*  charAt() (istenilen indisteki karakteri döndürür)
//* ---------------------------------------------------

const str6 = "Full Stack Path";
console.log(str6.charAt()); //* (ilk indisteki karakteri döndürür)
console.log(str6.charAt(str6.length - 1)); //* son karakteri döndürür

//* ---------------------------------------------------
//*  includes() - case sensitive (kelimenin String içerisinde var mı yok mu bakar)
//* ---------------------------------------------------

const word = "To be or not to be, that is the question";

console.log(word.includes("to be")); //? true
console.log(word.includes("That")); //! false
console.log(word.includes("to be", 14)); //! false
console.log(word.includes("to be", 13)); //? true (13.indisten itibaren arama yapıyor)

//! NOT: case insentive kullanmak icin str baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.

//* ---------------------------------------------------
//*  indexOf(), LastIndexOf() - case sensitive
//* ---------------------------------------------------

const toBe = word.indexOf("or");
console.log(toBe);
const be = word.indexOf("be");
console.log(be);

console.log(word.lastIndexOf("be")); //! en sonuncuyu bulur

//* ----------------------------------------------------------
//* search()
//* ----------------------------------------------------------

const Harf = /[A-Za-z]/; //**** hem büyük hem de küçük harfe bakar
const buyukHarf = /[A-Z]/;
const nokta = /[.]/;
const virgul = /[,]/;
console.log(word.search(buyukHarf)); //? ilk buyuk harfin indeksi 0
console.log(word.search(virgul)); //?  18
console.log(word.search(nokta)); //? -1

//* ----------------------------------------------------------
//* startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------

let word2 = "Sen gulunce guller acar gul pembe!";

console.log(word2.startsWith("Sen"));
console.log(word2.startsWith("gulunce", 4));
console.log(word2.endsWith("!"));
console.log(word2.endsWith("ar", 23)); //* 23'e kadar bakıyor

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------

let oku = "Oku Baban gibi, saf olma, saf olma";
// console.log(oku.replace("saf olma", "başarılı ol"));

oku = oku.replace("saf olma", "basarili ol");
oku = oku.replace(/saf olma/gi, "basarili ol");
console.log(oku);

oku = oku.replace(/BASARILI/gi, "Zengin"); //! regex modunda /kelime/i yazarsak büyük küçük harf ayrımı yapmaz. Fakat ilk bulduğunu değiştirir sadece. /gi yazarsak bulduğu bütün kelimere işlem yapar

//! NOT: replace metodu eger Regex ile aksi belirtilmiyorsa (g) sadece ilk buldugunu degistirir.

console.log(oku);

//* ----------------------------------------------------------
//*  replaceAll() --immutable
//* ----------------------------------------------------------
let degistir = "daglar daglar yol ver gecem..";

degistir = degistir.replaceAll("daglar", "Dağlar");
console.log(degistir);

//?Regex de kullanilabilir.
let degistir2 =
  "No woman, no cry" +
  " No woman, no cry, eh, yeah" +
  " Little darling, don't shed no tears" +
  " No woman, no cry, eh";

console.log(degistir2.replaceAll(/no/gi, "Hayir"));

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex]) (başlangıç dahil- bitiş dahil değildir)
//*  substring(beginIndex[, endIndex])
//* ----------------------------------------------------------

const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

const sliced = veysel.slice(33);
console.log(sliced);

console.log(veysel.slice(17, 30));
console.log(veysel.slice(-10));
console.log(veysel.slice(-23, -19));

console.log(veysel.substring(17, 30));
//! negatif indeks substring ile kullanılamaz
console.log(veysel.substring(-10));

//* ----------------------------------------------------------
//*  split([sep [, limit] ])
//*
//* ----------------------------------------------------------

const tarkan = "Gel gunduzle gece olalim";
const splited = tarkan.split(" ");
console.log(splited); //! boşluklara göre ayırarak Array'e çevirdi.

const chars = tarkan.split("");
console.log(chars); //! null karakterine göre harfleri ayırarak bir char dizisi oluşturdu

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
const ramazan = "    Hoş geldin ya şehri Ramazan     ";
console.log(ramazan);
console.log(ramazan.length); // 36
console.log(ramazan.trim());
console.log(ramazan.trim().length); //27

//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE
