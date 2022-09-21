const taxRate = 0.18;
const shippingPrice = 20;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  calculateCardPrice();
  //* set items to LocalStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
  //* set items to sessionStorage
  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (e) => {
  //* capturing vs. bubbling
  if (e.target.className == "fa-solid fa-minus") {
    // console.log("minus btn is clicked!");
    if (e.target.parentElement.querySelector(".quantity").innerText > 1) {
      e.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrice(e.target);
      calculateCardPrice();
    } else {
      if (
        confirm(
          `${
            e.target.parentElement.parentElement.querySelector("h2").innerText
          } will be removed??`
        )
      ) {
        //* remove
        e.target.parentElement.parentElement.parentElement.remove();
        calculateCardPrice(e.target);
      }
    }
  } else if (e.target.classList.contains("fa-plus")) {
    // console.log("plus btn is clicked");
    e.target.previousElementSibling.innerText++;
    calculateProductPrice(e.target);
    calculateCardPrice();
  } else if (e.target.className == "remove-product") {
    // console.log("remove btn is clicked");
    e.target.parentElement.parentElement.parentElement.remove();
    calculateCardPrice();
  } else {
    // console.log("other element is clicked");
  }
});

const calculateProductPrice = (clickBtn) => {
  const productInfoDiv = clickBtn.parentElement.parentElement;
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
  //   console.log(productTotalDiv);
};

const calculateCardPrice = () => {
  const productTotalPriceDivs = document.querySelectorAll(
    ".product-line-price"
  );
  //   const productTotalPriceDivs =
  //     document.getElementsByClassName("product-line-price");

  let subTotal = 0;
  productTotalPriceDivs.forEach((div) => {
    subTotal += parseFloat(div.innerText);
  });
  //   console.log(subTotal);
  const taxPrice = subTotal * localStorage.getItem("taxRate");
  const shippingPrice = parseFloat(
    subTotal > 0 && subTotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );
  console.log(shippingPrice);

  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subTotal.toFixed(2);
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector(
    "#cart-tax p:nth-child(1)"
  ).innerText = `Tax(%${localStorage.getItem("taxRate")})`;
  document.querySelector("#cart-shipping").children[1].innerText =
    shippingPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = (
    subTotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};
