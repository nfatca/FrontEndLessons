const tax = 0.08;
const shippingPrice = 22;
const shippingFreePrice = 500;

window.addEventListener("load", () => {
  calculateCardPrice();
  localStorage.setItem("tax", tax);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
  localStorage.setItem("shippingPrice", shippingPrice);
});

const products = document.querySelector(".products");

products.addEventListener("click", (e) => {
  if (e.target.className == "fa-solid fa-minus") {
    // console.log("minus button pushed");
    if (e.target.parentElement.querySelector(".quantity").innerText > 1) {
      e.target.parentElement.querySelector(".quantity").innerText--;
    } else {
      if (confirm("Do you want remove this product ??")) {
        e.target.parentElement.parentElement.parentElement.remove();
      }
    }
    calculateProductPrice(e.target);
    calculateCardPrice();
  } else if (e.target.className == "fa-solid fa-plus") {
    // console.log("plus button pushed");
    e.target.parentElement.querySelector(".quantity").innerText++;
    calculateProductPrice(e.target);
    calculateCardPrice();
  } else if (e.target.className == "remove-product") {
    // console.log("remove button pushed");
    if (confirm("Do you want remove this product ??")) {
      e.target.parentElement.parentElement.parentElement.remove();
    }
    calculateCardPrice();
  } else {
    // console.log("other button pushed");
  }
});

const calculateProductPrice = (prdct) => {
  const item = prdct.parentElement.parentElement;
  const price = item.querySelector(".product-price strong").innerText;
  const quantity = item.querySelector(".quantity").innerText;
  const prdctTotal = item.querySelector(".product-line-price");
  prdctTotal.innerText = (price * quantity).toFixed(2);
};

const calculateCardPrice = () => {
  const productTotal = document.querySelectorAll(".product-line-price");
  let totalPrice = 0;
  productTotal.forEach((div) => {
    totalPrice += parseFloat(div.innerText);
  });
  const taxPrice = totalPrice * localStorage.getItem("tax");
  const shippinpPrice = parseFloat(
    totalPrice > 0 && totalPrice < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );
  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    totalPrice.toFixed(2);
  document.querySelector("#cart-tax").lastElementChild.innerText =
    taxPrice.toFixed(2);
  document.querySelector(
    "#cart-tax"
  ).firstElementChild.innerText = `Tax(${localStorage.getItem("tax")})`;
  document.querySelector("#cart-shipping").lastElementChild.innerText =
    shippinpPrice;
  document.querySelector(
    "#cart-shipping"
  ).firstElementChild.innerText = `Shipping (up to ${localStorage.getItem(
    "shippingFreePrice"
  )}$ is free )`;
  document.querySelector("#cart-total").lastElementChild.innerText = (
    totalPrice +
    shippinpPrice +
    taxPrice
  ).toFixed(2);
};
