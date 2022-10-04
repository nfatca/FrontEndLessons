const formJS = document.querySelector("form")[0];
//* JQUERY === $
// const formJquery = jQuery("form").eq(0);
const formJquery = $("form").eq(0);
const inputJQ = $(".top-banner input");
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);

console.log(formJS);
console.log(formJquery);
console.log(inputJQ);

//* get(index) ==> toArray(get()), eq(index)

//* load VS DOMContentLoaded

//* window.onload = () => {} ===> JS
$(window).on("load", () => {
  console.log("W Load");
});

//* document.addEventListener("DOMContentLoaded", () => {});
$(document).ready(() => {
  console.log("DOMContentLoaded");
});

formJquery.on("submit", (e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
  console.log("AJAX Func. is called");
};

//* XMLHTTPREQUEST(xhr) vs. fetch() vs. axios vs. $.ajax
