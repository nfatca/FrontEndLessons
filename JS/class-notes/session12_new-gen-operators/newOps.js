//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

//* 1.yöntem
const name1 = car.name;
const model1 = car["model"];

//* 2. yöntem : Destructuring

const { name, colors, model, engine } = car;

console.log(name, model, engine, colors);

//*Example : Nested

const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;
console.log(car1);

const { name: c1name, model: c1model } = car1;
const { name: c2name, model: c2model } = car2;

console.log(c1name);

const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

//*****   Classical     */

team.forEach((p) => {
  console.log("**********************");
  console.log("Name:", p.name);
  console.log("Surname:", p.surname);
  console.log("Job:", p["job"]);
  console.log("Age:", p["age"]);
});

//*****   Destructuring     */
console.log("");
console.log("Destructuring");

team.forEach((p) => {
  const { name, surname, age, job } = p;
  console.log("**********************");
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
});

//* function

const getInfo = () => {
  return {
    id: "1",
    productName: "Iphone",
    price: 30000,
  };
};

console.log(getInfo());

const { productName, price } = getInfo();

console.log("Product Name:", productName);
console.log("Product Price:", price);

const calculate = ({ id, price }) => {
  console.log(id * price);
};

console.log({ id: 1, price: 30000 });

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================

const names = ["Ahmet", "Mehmet", "Ismet", "Saffet"];

//* Classical

const mehmet = names[1];

//* destructuring

const [p1, p2, , p4] = names;

console.log(p1, p2, p4);

//*=======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)

const vehicles = ["reno", "anadol", "bmw", "mercedes", "ferrari"];

const [reno, anadol, ...restVehicles] = vehicles;
console.log(reno, anadol);
console.log(restVehicles);

//* REST: (Objects)

const personel1 = {
  pname: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { pname, job, ...ageSurname } = personel1;

console.log(ageSurname);

//! 2- bir fonsiyonun argumanlarını diziye çevirmek için kullanılıyor

const sum = (x, y) => x + y;

//? hata vermez fakat sadece ilk 2 argumanı toplar
console.log(sum(1, 2, 3, 4, 5, 6));

//? numbers'ı diziye çevirir
const sumAll = (...numbers) => {
  // console.log(numbers);
  return numbers.reduce((s, r) => (s += r), 0);
};
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 3, 2, 1, 5, 6, 7, 2));

const showName = (name, surname, ...titles) => {
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  console.log(summary);
};

showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");

//*=======================================================
//*  SPREAD (...)
//* ======================================================

//?Spread operatoru ise iterables olan bir elemani değerler haline getirir

//* array concanitaion

const flyingVecihles = ["Aircraft", "Helicopter", "QuadCopter"];
const automobiles = ["Truck", "Bus", "Car", "SUV"];

// const allVehicles = [flyingVecihles,automobiles]; //* Nested
const allVehicles = [...flyingVecihles, ...automobiles]; //*spread
console.log(allVehicles);

//* Example :

const citrus = ["orange", "lime", "lemon"];
const fruits = ["apple", ...citrus, "banana", "cherry", "pear"];
console.log(fruits);

//* String spread

let str = "Hello FS12";
console.log([...str]);
const charArray = [...str];
console.log(charArray);

charArray[0] = "X";
console.log(charArray);
console.log([...str]);

//* Max() - Dizileri fonksiyonlara açık bir sekilde parametre olarak vermek için kullanılabilir
console.log(Math.max(1, 3, 4, 5, 2, 1, 10));
const nums = [1, 3, 4, 5, 2, 1, 10];
console.log(Math.max(...nums));

//* Array Copy
const myNumbers = [1, 2, 3];
const herNumbers = [-1, ...myNumbers, 7];
const hisNumbers = [...herNumbers];
hisNumbers.push(101);

console.log(myNumbers);
console.log(herNumbers);
console.log(hisNumbers);

//* Object Copy

const myObj = { a: 1, b: 2, c: 3 };
const herObj = { a: 2, z: 4, k: 3 };

const copiedObj = { ...myObj };
console.log(copiedObj);

copiedObj.c = "33";

console.log(copiedObj);
console.log(myObj);

const combinedObj = { ...myObj, ...herObj }; //* iki tane aynı key varsa sonra ekleneni alır. a key'i ikisinde de olamsına rağmen sonradan eklenen olan herObj içindekini ekledi
console.log(combinedObj);
