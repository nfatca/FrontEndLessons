console.log(`JS running`);
/* 
let userName;
let temp = 0;
let hataDurumu = temp || 'termometre arızası';
console.log(hataDurumu);

hataDurumu = temp ?? 'termometre durumu';
console.log(hataDurumu);

let x = +prompt("Bir sayı giriniz");
let y = +prompt("Diğer sayıyı giriniz");

console.log(`x*y ${x*y}`);
console.log(`x/y ${x/y}`);


let side1 = +prompt("İlk kenar giriniz");
let side2 = +prompt("İkinci kenar giriniz");
let side3 = +prompt("Ücüncü kenar giriniz");

const perimeter = (side1+side2+side3)/2;
const area = Math.sqrt (perimeter*(perimeter-side1)*(perimeter-side2)*(perimeter-side3));

let kenar1 = +prompt("İlk kenar giriniz");
let kenar2 = +prompt("İkinci kenar giriniz");

const dAlan = kenar1*kenar2;
console.log(`Diktörtgen alan ${dAlan}`);

let yaricap = +prompt("Yarıçap giriniz :");
const uAlan = Math.PI * (yaricap**2);
const uCevre = 2 * Math.PI * yaricap;
console.log(`Ucgen alan ${uAlan}`);
console.log(`Ucgen cevre ${uCevre}`);

let c = +prompt(`C° input`);

console.log(`${c} C° ---->  ${(9*c+32*5)/5} F°`);

let f = +prompt(`F° input`);

console.log(`${f} F° ---->  ${(5*(f-32)/9)} C°`);
 */
/* 
const today = new Date();
console.log(today)
console.log(`day of month is ${today.getDate()}
month of year is ${today.getMonth()+1}
year is ${today.getFullYear()}`);
 */

let sayi1 = +prompt("birinci sayı");
let sayi2 = +prompt("ikinci sayı");
let sayi3 = +prompt("ücüncü sayı");

let karsilastir = ((sayi1%10)==(sayi2%10) || (sayi1%10)==(sayi3%10) || (sayi2%10)==(sayi3%10));
console.log(karsilastir);