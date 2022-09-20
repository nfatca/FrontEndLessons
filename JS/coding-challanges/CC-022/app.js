const starCharter = (num) => {
  let temp = "";
  let icBs = -1;
  let disBs = num - 1;

  for (i = 1; i <= num; i++) {
    for (j = 1; j <= disBs; j++) {
      temp += " ";
    }
    temp += "*";
    if (i != 1) {
      for (j = 1; j <= icBs; i++) {
        temp += " ";
      }
      temp = "*";
    }
    temp += "\n";
    icBs += 2;
    disBs -= 1;
    // console.log(temp);
  }
  icBs -= 4;
  disBs = 1;
  for (i = 1; i < num; i++) {
    for (j = 1; j <= disBs; j++) {
      temp += " ";
    }
    temp += "*";

    if (i != sayi - 1) {
      for (j = 1; j < icBs; j++) {
        temp += " ";
      }
      temp += "*";
    }
    temp += "\n";
    icBs -= 2;
    disBs++;
  }
  return temp;
};

console.log(starCharter(5));
