// import a, { b as _b, c, doSomething } from "./Utils/home.js";
// console.log(a);
// console.log(_b);
// console.log(c);
// doSomething();

// import * as home from "./Utils/home.js";

// const { doSomething } = home;
// doSomething();

import { doSomething, a, b, c } from "./Utils/product.js";
doSomething();
console.log(a);
console.log(b);
console.log(c);
