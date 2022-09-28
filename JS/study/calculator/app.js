const buttons = document.querySelector(".calc-body");
const ekran = document.querySelector(".calc-screen");
const oparator = document.querySelector("#oparator");
let sayiEkle = false;
let esitFlag = false;
let sayi1 = 0;
let sayi2 = 0;
let islem = "";
let sayi = "";

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnNo")) {
    if (ekran.innerText == "0" || sayiEkle == true || esitFlag == true) {
      ekran.innerText = e.target.innerText;
    } else {
      ekran.innerText += e.target.innerText;
    }
    sayiEkle = false;
    esitFlag = false;
    sayi += e.target.innerText;
  } else if (e.target.classList.contains("btnIslem")) {
    console.log(sayi1, sayi2, islem);
    oparator.innerText = e.target.innerText;
    esitFlag && (sayi1 = ekran.innerText);
    console.log("sayı1 : ", sayi1);
    sayi1 ? (sayi2 = sayi) : (sayi1 = sayi);
    sayi = "";
    if (sayi1 && sayi2) {
      console.log(sayi1, sayi2, islem);
      ekran.innerText = hesapla(sayi1, sayi2, islem);
      sayi1 = "";
      sayi2 = "";
      islem = "";
    }
    islem = e.target.innerText;
    sayiEkle = true;
  } else if (e.target.classList.contains("opposite")) {
    oparator.innerText = e.target.innerText;
    sayi2 = sayi;
    if (sayi1 && sayi2) {
      ekran.innerText = hesapla(sayi1, sayi2, islem);
      sayi1 = "";
      sayi2 = "";
      islem = "";
      console.log(sayi1, sayi2, islem);
    }
    // sayi1 = "";
    sayi = "";
    esitFlag = true;
  } else if (e.target.classList.contains("btnAc")) {
    sayi1 = "";
    sayi2 = "";
    islem = "";
    ekran.innerText = "";
    oparator.innerText = "";
  }
});

function hesapla(sayi1, sayi2, islem) {
  console.log(sayi1, sayi2, islem);
  switch (islem) {
    case "+":
      return Number(sayi1) + Number(sayi2);
    case "-":
      return sayi1 - sayi2;
    case "x":
      return sayi1 * sayi2;
    case "÷":
      return sayi1 / sayi2;
    case "%":
      return (sayi1 * sayi2) / 100;
  }
}
