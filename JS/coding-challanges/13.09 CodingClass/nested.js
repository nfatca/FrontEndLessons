let doObj = (pname, page, psalaray) => {
  let objects = [];
  for (let indis in pname) {
    let obj = {
      name: pname[indis],
      age: page[indis],
      salary: psalaray[indis] ? psalaray[indis] : 10000, //* indislerden birinin boş olması durumunda 10000 değer atar
    };
    objects.push(obj);
  }
  return objects;
};

let name = ["ali", "veli", "ahmet"];
let age = [21, 22, 24];
let salary = [11222, , 22333];

// console.log(doObj(name, age, salary));

//! nested objeler

let veri = {
  name: "ahmet",
  age: 25,
  adress: {
    city: "Istanbul",
    district: "Uskudar",
    street: "1246 sk",
    nu: 18,
    apt: 20,
    aptName: "Polat apt",
  },
  phone: [
    {
      type: "home",
      number: "123-456-789",
    },
    {
      type: "company",
      number: "987-654-321",
    },
    {
      type: "cellphone",
      number: "654-123-987",
    },
  ],
};

let dom = document.getElementById("veri");
dom.innerHTML += veri.adress.street + "<br>";
let tel = veri.phone.filter((item) => item.type === "cellphone");

//*1. yol
// for (let item of Object.values(tel)) {
//   //   for (let it of Object.values(item)) {
//   //     dom.innerHTML += it;
//   //   }
//   dom.innerHTML += ` ${item.type}  ${item.number}`;
// }
//* 2.yol
for (let item of Object.values(tel[0])) {
  dom.innerHTML += item + " " + " <br>";
}

//? tüm telefon numaralarını yazdırma

let numbers = veri.phone;

for (obj of numbers) {
  let counter = 0;
  for (item of Object.values(obj)) {
    dom.innerHTML += item + " ";
    counter++;
    if (counter == 2) {
      dom.innerHTML += "<br>";
    }
  }
}
