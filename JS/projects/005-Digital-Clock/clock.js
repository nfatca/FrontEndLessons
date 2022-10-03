const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");
const midnight = document.querySelector("#midnight");

function digitalClock() {
  hour.innerText = new Date().getHours();
  minute.innerText = new Date().getMinutes();
  second.innerText = new Date().getSeconds();
  if (Number(hour.innerText) >= 0 && Number(hour.innerText) < 13) {
    hour.innerText = "0" + hour.innerText;
    midnight.innerText = " AM";
  }
  if (Number(minute.innerText) <= 9) {
    minute.innerText = "0" + minute.innerText;
  }
  if (Number(second.innerText) <= 9) {
    second.innerText = "0" + second.innerText;
  }
}

setInterval(digitalClock, 1000);
