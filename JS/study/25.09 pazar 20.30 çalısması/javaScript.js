const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

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

setInterval(tiktak, 1000);

const clock = document.querySelector(".clock");

clock.addEventListener("mousemove", (e) => {
  clock.style.backgroundColor = `rgba(${e.clientX % 255},${e.clientY % 255},${
    (e.clientX + e.clientY) % 255
  },${Math.random().toFixed(3)})`;
  console.log(Math.random().toFixed(3));
});
