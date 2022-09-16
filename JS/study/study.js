const triangle = (row) => {
  let temp = [];
  arr = Array.from(row);
  console.log(arr);
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      temp.push(arr[i]);
    } else if (arr[i] === "R" && arr[i + 1] === "B") {
      temp.push("G");
    } else if (arr[i] === "B" && arr[i + 1] === "R") {
      temp.push("G");
    } else if (arr[i] === "G" && arr[i + 1] === "B") {
      temp.push("R");
    } else if (arr[i] === "B" && arr[i + 1] === "G") {
      temp.push("R");
    } else if (arr[i] === "R" && arr[i + 1] === "G") {
      temp.push("B");
    } else if (arr[i] === "G" && arr[i + 1] === "R") {
      temp.push("B");
    }
    // console.log(temp);
  }
  if (temp.length > 1) {
    // console.log(temp);
    return triangle(temp);
  } else {
    return temp;
  }
};
console.log(triangle("RGBG"));

// triangle("GB");
// triangle("RRR");
// triangle("RGBG");
// triangle("RBRGBRB");
// triangle("B");
// triangle("RBRGBRBGGRRRBGBBBGG");

// let renk = "RRGBRRBRBRGBRBGGRRRBGBBBGGGRB";
// // console.log(renk);ß
// const hesapla = (string) => {
//   let dizi = string.split("");
//   let yenidizi = [];
//   let count = 0;
//   for (i = 0; i < dizi.length; i++) {
//     yenidizi = [];
//     if (dizi[i] === dizi[i + 1]) {
//       yenidizi.push(dizi[i]);
//     } else if (dizi[i] === "R" && dizi[i + 1] === "B") {
//       yenidizi.push("G");
//     } else if (dizi[i] === "B" && dizi[i + 1] === "R") {
//       yenidizi.push("G");
//     } else if (dizi[i] === "G" && dizi[i + 1] === "B") {
//       yenidizi.push("R");
//     } else if (dizi[i] === "B" && dizi[i + 1] === "G") {
//       yenidizi.push("R");
//     } else if (dizi[i] === "R" && dizi[i + 1] === "G") {
//       yenidizi.push("B");
//     } else if (dizi[i] === "G" && dizi[i + 1] === "R") {
//       yenidizi.push("B");
//     }
//     console.log(i);
//     dizi = yenidizi;
//     console.log(yenidizi);
//   }
//   // return `${yenidizi}`;
// };
// // console.log(hesapla(renk));
// hesapla(renk);
// console.log(count);
