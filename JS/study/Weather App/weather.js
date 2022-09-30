const form = document.querySelector(".top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section ul.cities");

localStorage.setItem(
  "tokenKey",
  "f5q1Iy3JjlEI4hNHVgSlJgFI/vpzdatK9hRfUAUeSLieQ/3RyfI/azrH5URFkKQq"
);
// localStorage.setItem(
//   "tokenKeyEncrypted",
//   EncryptStringAES("c1613d1a1c6327cd1ec2b3745c0efe89")
// );

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeatherDataFromApi();
});

//* get api func. (http methods == verbs)
const getWeatherDataFromApi = async () => {
  //   alert("http request");
  const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
  //   alert(tokenKey);
  const inputValue = input.value;
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;
  try {
    const response = await fetch(url).then((response) => response.json());
    //   console.log(response);
    const { main, sys, weather, name } = response;

    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    const cityNameSpans = list.querySelectorAll(".city span");
    const cityNameSpansArray = Array.from(cityNameSpans);
    if (cityNameSpansArray.length > 0) {
      const filteredArray = cityNameSpansArray.filter(
        (span) => span.innerText == name
      );
      if (filteredArray.length > 0) {
        msg.innerText = `You already know the weather fot ${name}, please search for another city`;
        setTimeout(() => {
          msg.innerText = "";
        }, 5000);
        form.reset();
        return;
      }
    }
    console.log(cityNameSpansArray);
    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${
      sys.country
    }">
  <span>${name}</span>
  <sup>${sys.country}</sup>
</h2>
<div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
<figure>
  <img class="city-icon" src="${iconUrl}">
  <figcaption>${weather[0].description}</figcaption>
</figure>`;

    //* append vs prepend
    //   list.append(createdLi);
    list.prepend(createdLi);
    form.reset();
  } catch (error) {
    msg.innerText = `404 City Not Found`;
    setTimeout(() => {
      msg.innerText = "";
    }, 5000);
    form.reset();
  }
};
