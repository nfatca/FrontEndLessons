//! Q-1
/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/
//? solution 1

function dontGiveMeFives(start, end) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (!i.toString().includes(5)) {
      count++;
    }
  }
  return count;
}

//? solution 2

function dontGiveMeFives1(start, end) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (i.toString().search(5) == -1) {
      count++;
    }
  }
  return count;
}

// console.log(dontGiveMeFives(1, 9));
// console.log(dontGiveMeFives1(4, 17));

//! Q-2
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

//? solution

function maxOutput(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// console.log(typeof maxOutput(42145), maxOutput(42145));

//! Q-3
/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
Indices in sequence start from 0.
If the sequence is empty, you should return 0.
*/

//? solution

function evenLast(numbers) {
  return numbers.length
    ? numbers.reduce((x, y, z) => x + (z % 2 === 0 ? y : 0), 0) *
        numbers[numbers.length - 1]
    : 0;
}

// console.log(evenLast([1, 2, 3, 4, 5]));

//? solution 2

function evenLast1(numbers) {
  if (!numbers[0]) return 0;

  let count = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    count += numbers[i];
  }
  return count * numbers[numbers.length - 1];
}

// console.log(evenLast1([1, 2, 3, 4, 5]));

//! Q-4
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3,3])       == [1,2,3]
*/

//? solution 1

// let x = "Hello World";
// let y = [1, 2, 3, 4, 5];

// console.log([...x]); //* diziyi stringe çevirme

function uniqueInOrder(iterable) {
  return [...iterable].filter((el, i, arr) => el !== arr[i - 1]);
}

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder("ABBCcAD"));
// console.log(uniqueInOrder([1, 2, 2, 3, 3, 3]));

//! Q-5
/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
An example:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
*/

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine(...obj) {
  let result = {};

  for (const x of obj) {
    for (const [key, value] of Object.entries(x)) {
      if (!result.hasOwnProperty(key)) {
        result[key] = value;
      } else {
        result[key] += value;
      }
    }
  }
  return result;
}
console.log(combine(objA, objB));
