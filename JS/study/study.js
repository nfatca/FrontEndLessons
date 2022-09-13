const triangle = (row) => {
  let temp = "";
  arr = Array.from(row);
  console.log(arr);
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] == "GG") {
      temp += "G";
    } else if (arr[i] + arr[i + 1] == "BG" || "GB") {
      temp += "R";
      count++;
    } else if (arr[i] + arr[i + 1] == "RG" || "GR") {
      temp += "B";
    } else if (arr[i] + arr[i + 1] == "BR" || "RB") {
      temp += "G";
    } else {
      temp += arr[i];
    }

    console.log(temp);
  }
  if (temp.length > 1) {
    console.log(temp);
    return triangle(temp);
  } else {
    return temp;
  }
};
console.log(triangle("RRGBRGBB"));

// triangle("GB");
// triangle("RRR");
// triangle("RGBG");
// triangle("RBRGBRB");
// triangle("B");
// triangle("RBRGBRBGGRRRBGBBBGG");
