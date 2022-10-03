const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");
const midnight = document.querySelector("#midnight");

function tiktak() {
  let second = new Date().getSeconds();
  let minute = new Date().getMinutes();
  let hour = new Date().getHours();
  //   console.log(hour, minute, second);

  sec.style.transform = `rotate(${180 + second * 6}deg)`;
  min.style.transform = `rotate(${180 + minute * 6}deg)`;
  hours.style.transform = `rotate(${180 + hour * 30}deg)`;

  //   sec.style.transform = `rotate(${1}deg)`;
}

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

setInterval(tiktak, 1000);

const clock = document.querySelector(".clock");

clock.addEventListener("mousemove", (e) => {
  clock.style.backgroundColor = `rgba(${e.clientX % 255},${e.clientY % 255},${
    (e.clientX + e.clientY) % 255
  },${Math.random().toFixed(3)})`;
  console.log(Math.random().toFixed(3));
});
