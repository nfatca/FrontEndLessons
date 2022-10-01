//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  //! private degisken tanimlama
  #id;

  //! static property tanimlamasi
  static counter = 0;
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;

    //? private property
    this.#id = 123456;
    //? Bu alanda yazilan bir metot butun instance'ların belleginde tek tek yer kaplar.
    this.getTitle = function () {
      return this.title;
    };
    //* static degiskenin degerini degistirdik
    Book.counter++;
  }

  //?  Class içerisinde public metotlar yardimiyla private degiskenler okunabilir
  //? Bu tip metotlara getter metot denilir
  //! getter metotları class içerisinde tanımlanmalır
  getId() {
    return this.#id;
  }

  //?  Class içerisinde public metotlar yardimiyla private degiskenler yazılabilir
  //? Bu tip metotlara setter metot denilir
  //! setter metotları class içerisinde tanımlanmalır
  setId(e) {
    this.#id = e;
  }

  //!private metot
  #computeAge() {
    return new Date().getFullYear() - this.year;
  }
  getSummary() {
    return `${this.title} was writtten by ${
      this.author
    } so its age is ${this.#computeAge()}`;
  }

  static compareAge(b1, b2) {
    return `Books age difference: ${b1.year - b2.year}`;
  }
}

const book1 = new Book("Simyaci", "Peolho Coelgo", 1988);
console.log(book1.title);

//? private değişkenin değeri class dışından doğrudan okunamaz
// console.log(book1.#id);

//? private değişkenin değeri class dışından doğrudan okunamaz
// book1.#id = "11111";

//! Private field '#id' must be declared in an enclosing class (at 5-static-private.js:43:18)
console.log(book1.getId());
book1.setId("00000");
console.log(book1.getId());

//! private metotlar class dışından erişilemezler
// console.log(book1.#computeAge());

console.log(book1.getSummary());

const book2 = new Book("ABC", "Ali Veli", 1988);
const book3 = new Book("XYZ", "Ahmet Can", 1988);
const book4 = new Book("XYZ", "Ahmet Can", 1920);

console.log(Book.counter);
console.log(Book.compareAge(book2, book4));
