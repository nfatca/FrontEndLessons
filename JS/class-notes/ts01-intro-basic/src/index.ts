//* yarn create react-app my-app --template typescript

export {};
console.log("Hello TypeScript!");
let a = 5;
let b = "Hello";
console.log(a);
console.log(b);

let numbers: number[] = []; // = [1, 2, 3];

// numbers.push("3");

let v1: unknown = 5;

let v2: number = v1 as number;

console.log(v1, v2);

let num = 4.325;

interface Person {
  firstName: string;
  lastName: string;
  salary: number;
}

interface Employee {
  firstName: string;
  lastName: string;
  id: number;
  salary: number;
  department: string;
}

class CwInstructor implements Person, Employee {
  salary: number = 10000;
  citizenId = "121324201";
  constructor(
    public firstName: string,
    public lastName: string,
    public department: string,
    public id: number
  ) {}
}

let noah = new CwInstructor("Noah", "Adams", "Full-Stack", 1);

function calisanBilgisi(calisan: Employee) {
  console.log(
    "Çalışan adı: " + calisan.firstName + " " + calisan.lastName,
    "çalışan bölümü: " + calisan.department,
    "Maaşı: " + calisan.salary
  );
}

let matheww = new CwInstructor("Mark", "Maddison", "Full-Stack", 1);

calisanBilgisi(noah);
calisanBilgisi(matheww);

function getItem<T>(items: T[]): T[] {
  return items;
}
let numArr = getItem([4, 5, 6]);

// numArr.push("Matthew");

function displayType<T, U>(p1: T, p2: U): void {
  console.log("param1: " + p1, "param1 type :" + typeof p1);
  console.log("param2: " + p2, "param1 type :" + typeof p2);
}

displayType(console.log, 4 < 8);

function update<O extends object, K extends keyof O>(
  obj: O,
  key: K,
  newValue: O[K]
): O {
  return { ...obj, [key]: newValue };
}

interface Product {
  name: string;
  price: number;
  brand: string;
}

let prod1: Product = { name: "SSD", price: 220, brand: "WD" };

let blogArticle1 = { title: "asdsd" };

update(prod1, "price", 7);
