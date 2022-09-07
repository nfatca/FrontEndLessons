// const word = "JavaScript coding ChAlLenge";
// const splited = word.split(" ");
// console.log(splited); //! boşluklara göre ayırarak Array'e çevirdi.

// const lower = splited.map((x) => x.toLowerCase());
// const lower1 = lower.map((x) => x.charAt(0).toUpperCase() + x.slice(1));

// const newWord = "";
// // for (let index = 0; index < lower1.length; index++) newWord += lower1[index];

// // console.log(lower[0].charAt(0).toUpperCase() + lower[0].slice(1));
// lower1.forEach((x) => (newWord = x));

// console.log(newWord);

let input1 = "JavaScript coding ChAlLenge";
let input2 = "JavaScript-coding-challenge";
let input3 = "JavaScriptCodingChallenge";
// javaScriptCodingChallenge

function camelCase(input) {
  let arr = [],
    result = "";

  if (input.includes("-")) {
    arr = input.split("-");
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        result += arr[i][0].toLowerCase() + arr[i].slice(1);
      } else {
        result += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
      }
    }
    return result;
  } else if (input.includes(" ")) {
    arr = input.split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        result += arr[i][0].toLowerCase() + arr[i].slice(1);
      } else {
        result += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
      }
    }
    return result;
  } else return input[0].toLowerCase() + input.slice(1);
}
function passwordGenerator() {
  let password = [];
  let specialCharacters = "!@#$%^&*(_+~|}{[]:;?><,./-=";
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let randomPassword = "";

  for (let i = 0; i < 3; i++) {
    password.push(Math.floor(Math.random() * 10));
  }
  for (let i = 0; i < 2; i++) {
    password.push(specialCharacters[Math.floor(Math.random() * 27)]);
  }
  password.push(letters[Math.floor(Math.random() * 26)]);
  password.push(letters[Math.floor(Math.random() * 26) + 26]);
  for (let i = 0; i < 3; i++) {
    password.push(letters[Math.floor(Math.random() * 52)]);
  }
  console.log(password.join(""));
  for (let i = password.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = password[i];
    password[i] = password[j];
    password[j] = temp;
  }
  return password.join("");
}

console.log(passwordGenerator());
