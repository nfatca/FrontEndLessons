const findVowel = (str) => {
  const vowels = "aeıiuüoö".split("");
  let arrStr = str.toLowerCase().split("");
  let counter = 0;

  for (let i in arrStr) {
    for (let k in vowels) {
      if (arrStr[i] === vowels[k]) {
        counter++;
      }
    }
  }
  return counter;
};

const button = document.querySelector("#check-btn");

button.addEventListener("click", () => {
  const value = document.querySelector("#textArea").value;
  if (!value) {
    alert("Please enter the text");
  } else {
    document.querySelector("#result").innerHTML = `There are ${findVowel(
      value
    )} vowels in <span style="color: red">${value}</span>`;
  }
});
