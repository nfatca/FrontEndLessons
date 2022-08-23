console.log('App js Running')


// var a = 5;
// console.log('a = ' + a);

// {
//     var a = 3;
//     console.log('a = ' + a);
// }

// console.log('a = ' + a);


// let a = 5;
// console.log('a = ' + a);

// {
//      a = 3;
//     console.log('a = ' + a);
// }

// console.log('a = ' + a);


// console.log(typeof 0);
// console.log(typeof 3.14);
// console.log(typeof 'Hello');
// console.log(typeof 8<9);

// let b = prompt('Bir şey giriniz ');

// console.log(b, typeof b);

// let age = 30;
// let myAge = age;

// age = 31

// console.log(myAge);

// let a = null;

// console.log(typeof a);

// let x = 7;
// let y= 3.3;

// let z = x+y;

// console.log(z);

// let x;

// do {
//     x= prompt('enter a Number : ');
// }while(isNaN(x));

// console.log(x, x*x);

// console.log('12' == 12);

// console.log('12'*'12');

// let g= 0.1+0.2;
// console.log(g);
// console.log(+g.toFixed(2));

// let i = 'This is\' a string';
// let j = "This is a string";
// let k = `This is a string`;

// console.log(i, typeof i);

// let userName = 'Furkan';
// console.log('Merhaba ', userName);
// console.log(`Merhaba ${userName}`);
// console.log(`2 + 3 = ${2+3}`);

// console.log(`1`+`2`);

// let x = 8>5;
// let y = 42==35;
// let z = `11` == '11' == "11"

// console.log(`x = ${x}`);
// console.log(`y = ${y}`);
// console.log(`y = ${z}`);


// let m = ``;

// let n = ' ';

// let p = 0;

// console.log(Boolean(m));
// console.log(Boolean(n));
// console.log(Boolean(p));

const myCar ={
    make: 'Ford',
    model: 'Mustang',
    year: 1965,
    color: 'Black'
}

console.log(myCar);

myCar.color = 'Green'

console.log(myCar);

myCar.sunRoof = false;

console.log(myCar);

myCar.age = function(current){
    console.log(current - this.year)
}

console.log(myCar);

myCar.age(2022);


