let arr = [0, 1, ["ali", "veli"], 3, 4, [24, 27], 6, [12000, 15000]];

//? arr dizisi içerisindeki alt dizilerden obj üretelim

let obj1 = {
  name: arr[2][0],
  yas: arr[5][0],
  maas: arr[7][0],
};
let obj2 = {
  name: arr[2][1],
  yas: arr[5][1],
  maas: arr[7][1],
};

console.log(obj2);

let json = [obj1, obj2];
console.log(json);

console.log(obj2.name);
console.log(obj1["name"]);

//! map ve filter kullanımı

//? maaşlara %10 zam
let dizi = json.map((item) => Math.round(item.maas * 1.1));

console.log(dizi);

//? yaşı 25üzerinde olan çalışanlar
console.log(json.filter((item) => item.yas > 25));

//? map uyguladıktan sonra çıktıyı json formatında istiyoruz
let js = json.map((item) => {
  return {
    maas: Math.round(item.maas * 1.2),
    name: item.name,
  };
});

//? çalışanların maaşlarına %20 zam yapalım, mmaşı 16000 üzerinde olanların isimlerini listeyelim
let son = json.map((item) => {
  return {
    maas: Math.round(item.maas * 1.2),
    name: item.name,
  };
});
son
  .filter((item) => item.maas > 16000)
  .forEach((item) => console.log(item.name));

json.forEach((item) => (item.maas *= 1.1));

console.log(json);
