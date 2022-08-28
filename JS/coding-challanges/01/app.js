// let input = [3, 2, 4];
// let target = 6;

// let targetFind = function (target) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] + input[j] == target) {
//         return `[${input[i]}, ${input[j]}]`;
//       }
//     }
//   }
// };

// console.log(targetFind(6));

let input = 121;
let numberReverse = function (input) {
  if (input < 0) return false;
  let reverseNumber = 0;
  let number = input;
  while (number > 0) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
    console.log(reverseNumber);
  }
  if (input === reverseNumber) return true;
  return false;
};

console.log(numberReverse(101));
