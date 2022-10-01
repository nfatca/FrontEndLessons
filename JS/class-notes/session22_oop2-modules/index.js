console.log("JS Modules is running");

import karesi, {
  WHW,
  WORKING_HOURS_WEEK,
  dec,
  inc,
  sum,
  counter,
} from "./mymodule.js";

// import ugurla from "./mymodule2.js";
import ugurla, { selam } from "./mymodule2.js";

// import  { default as karesi, WHW, WORKING_HOURS_WEEK, dec, inc, sum, counter } from "./mymodule.js";

// console.log("WHW :>>", WHW);
// console.log("WORKING_HOURS_WEEK :>>", WORKING_HOURS_WEEK);
// console.log("karesi(4) :>> ", karesi(4));

inc(4);
inc(6);
dec();
console.log("dec() :>> ", dec());
inc();
console.log("counter :>> ", counter);
// counter = 29; //! sabit gibi davranıyor, dışarıdan müdaehale ettirmiyor
inc();
console.log("counter :>> ", counter);

selam();
ugurla();
