console.log("Module 2 is running");

import { inc } from "./mymodule.js";

console.log("inc(100) :>> ", inc(100));

export function selam() {
  console.log("Selamlar");
}

export default function () {
  console.log("güle güle");
}
