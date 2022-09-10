let doRoma = (number) => {
  let arr = ("" + number).split("");
  while (arr.length < 4) {
    arr.splice(0, 0, "0");
  }
  let birler = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let onlar = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let yuzler = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let binler = ["", "M", "MM", "MMM"];
  return binler[arr[0]] + yuzler[arr[1]] + onlar[arr[2]] + birler[arr[3]];
};

console.log(doRoma(34));
