//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkl, yontem ile Object olusturulabilir
//* ----------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ----------------------------------------------

const arabalar = new Object();

arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;

console.log(arabalar);

//! Read
console.log(arabalar.lpg); //? .notation
console.log(arabalar["model"]); //? Square bracket notation

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

const key = "marka";
console.log(arabalar[key]);

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

function Personel(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
  //   console.log(this);
}

const kisi1 = new Personel("1213342", "Mustafa", 15000);
const kisi2 = new Personel("177567890", "Canan", 25000);
// console.log(kisi1);
console.log(kisi1.ad);
console.log(kisi2.maas);
console.log(kisi2["id"]);

//***************************
//* 3 - Object Literal (En çok tercih edilen)
//***************************

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "JS", "Pyhton", "Go"],
  salary: 140000,
};
console.log(worker);

console.log(worker.job);
console.log(worker["languages"]);

console.log(worker.languages[2]);

worker["languages"].forEach((L) => console.log(L));

worker.dob = "1990";
worker.email = "can@gmail.com";
console.log(worker);

worker.salary *= 1.1;

console.log(worker);

//* Object Copy
//! Shallow (Sığ) Copying

const person = worker;

console.log(person);

//! Deep Copy

let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));

console.log(deepCopyOfWorker);

//***************************
//* Object Metodları
//***************************

const personal = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  job: "developer",
  salary: 140000,
  drivingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  summary: function () {
    return `${this.name} is ${this.calculateAge()} years old`;
  },
};

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

console.log(personal.calculateAge());
console.log(personal.summary());

//***************************
//* Object Iteration
//***************************

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: 140000,
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: 110000,
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Jobs",
    dob: "2000",
    job: "developer",
    salary: 90000,
    drivingLicense: true,
  },
};

console.log("Salary of P2 :", people.person2.salary);

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let a in people) {
  console.log(a);
  console.log(people[a]);
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

for (let key of Object.keys(people)) {
  console.log(key);
}

for (let key of Object.values(people)) {
  console.log(key);
}

for (let key of Object.entries(people)) {
  console.log(key);
}

//? people objesindeki tüm salary'leri yazdır
for (let key of Object.values(people)) {
  console.log(key.salary);
}
for (let [key, value] of Object.entries(people)) {
  console.log(`${key} - ${value.salary}`);
}

//! ARRAY METODLARI İLE

Object.keys(people).forEach((p) => console.log(p));

Object.values(people).forEach((p) => console.log(p.surname));

//? job = developer olanların dob degerlerini yazdır

Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.name, p.dob));
