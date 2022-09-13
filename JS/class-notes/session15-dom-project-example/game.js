//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasında rasgele bir sayı tut

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
// let topScore = 0;

//? LocalStorage'de topScore adıyla bir değişken oluştur

let topScore = localStorage.getItem("topScore") || 0;

//? DOM'daki top-score değerini LocalStorage'dan okuyarak güncelle
document.querySelector(".top-score").textContent = topScore;

//* checkBtn basıldığında input sayı ile  tutulan sayıyı kontrol et
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? input girilmediyse kullanıcıya uyarı ver
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele sayı == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts"></i> `;
    body.className = "bg-success";
    document.querySelector(".check-btn").disabled = true;

    if (score > topScore) {
      //? Local Storage'taki topScore değerini güncelle
      localStorage.setItem("topScore", score);
      //? DOM'da bulunan topScore değerini güncelleme
      document.querySelector(".top-score").textContent = score;
    }

    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> INCREASE `);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//* again basildiginda oyun baslancıc degerini kur
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = "";
});

document.querySelector(".guess-input").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    document.querySelector(".check-btn").click();
  }
});

//? tebrikler bildiniz
//? bacground = green
//? eger score > topScore
//?     topScore = score
//? secret_number görünür

//! değilse
//! eger score > 0
//!     score -= 1
//? rasgele < input.valu
//? azalt
//? değilse
//? arttır
//! değilse
//? üzgünüz kaybettiniz

//! LOCALSTORAGE - SESSIONSTORAGE

// myObj = { a: 1, b: 2, c: 3 };
// localStorage.setItem("OBJ", JSON.stringify(myObj));
// const readObj = localStorage.getItem("OBJ");
// const readOBJ = JSON.parse(localStorage.getItem("OBJ"));
// console.log(typeof readObj);
// console.log(readObj);
// console.log(typeof readOBJ);
// console.log(readOBJ);
