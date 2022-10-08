//! node module import formatı
const {
  calculateTotal,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  fibonacci,
} = require("./math.js");

//! es6 module formatı
// import {
//   calculateTotal,
//   fahrenheitToCelsius,
//   celsiusToFahrenheit,
//   fibonacci,
// } from "./math";

describe("calculateTotal", () => {
  //test caselerini oluştur
  it("should exist", () => {
    expect(calculateTotal).toBeDefined();
  });
  it("should return a number", () => {
    expect(calculateTotal(100, 0.2)).toBe(120);
  });
  it("should return with default VAT", () => {
    expect(calculateTotal(200)).toBe(236);
  });
});
describe("fahrenheitToCelsius", () => {
  //
});
describe("celsiusToFahrenheit", () => {
  //
});
describe("fibonacci", () => {
  //
});
