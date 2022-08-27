function reverseStr(string) {
  const reverseSplit = string.split("").reverse().join("");
  console.log(reverseSplit);
}
reverseStr("nurullah");
const word = "bugün günlerden cumartesi";
const reverseWord = word.split(" ").reverse().join(" "); //! " " ile yapınca kelime kelime çeviriyor. "" boşluk koymadan yapınca harf harf çeviriyor.
console.log(word);
console.log(reverseWord);

// function reverseStr(string) {
//   const reverseSplit = string.split("");
//   let uzunluk = reverseSplit.length;
//   let newWord = "";
//   for (let i = uzunluk - 1; i >= 0; i--) {
//     newWord += reverseSplit[i];
//   }
//   console.log(newWord);
// }
// reverseStr("Clarusway");
