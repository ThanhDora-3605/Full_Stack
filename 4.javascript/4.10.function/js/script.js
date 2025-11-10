//Function: Được dùng để gom các chương trình con lại, khi nào cần thì gọi ra
// Được thể hiện là 1 hành động
// Khi đặt tên hàm, dùng động từ
// Quy tắt camelCase
// ví dụ: createUser, updateUser, deleteUser
// tiền tố động từ: create, update, delete, get, set, ...
/*
Cứ pháp:
1. Đingj nghĩa hàm 
function tenham() {
    Nội dung hàm
}
Lưu ý: Tham số là không bắt buộc
2. Gọi hàm
tenham(doiso1, doiso2, ...);

Hàm có giá trị trả về: return

Hàm không có giá trị trả về: hàm không có return

Khi từ khoá return đã được gọi --> hàm sẽ thoát
*/

// function getFullName(msg, name = "DoraTeam") {
//   console.log("ThanhDora");
//   console.log(msg);
//   console.log(name);
// }
// getFullName("javascript", "Dora");

// function getTotal(a, b) {
//   const total = a + b;
//   return total;
// }

// const result = getTotal(10, 20);
// console.log(result);

//ví dụ: Viết hàm trả về số chãn đầu tiên trong mảng
// function getFirstEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(i);
//     if (arr[i] % 2 === 0) {
//       return arr[i];
//     }
//   }
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = getFirstEven(numbers);
// console.log(result);

//Ví dụ: Dùng return để hạn chế else
// function divide(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return false;
// }
// console.log(divide(10, 0));

// Expressions: Function (Hàm biểu thức)
//Cú pháp:
/*
const tenbien = function () {
    Nội dung hàm
}
*/
// function doSomething() {
//   console.log("ThanhDora");
// }
// function doSomething() {
//   console.log("F8");
// }
// doSomething();

// const doSomething = function () {
//   console.log("ThanhDora");
// };
// doSomething();

// const getMessage = "A";
// getMessage();

//Callback Function: truyền 1 hàm vào 1 hàm khác thông qua tham số
// const display = function (callback) {
//   console.log(a);
//   if (typeof callback === "function") {
//     callback();
//   }
// };
// const getMessage = function () {
//   console.log("ThanhDora");
// };
// display(getMessage);
// display(function () {
//   console.log("ThanhDora");
// });

// setTimeout(callback, time): Delay 1 hàm
// setTimeout(function () {
//   console.log("ThanhDora");
// }, 2000);

// setInterval(callback, time): Chạy lặp lại 1 hàm sau 1 khoảng thời gian
// let count = 0;
// setInterval(function () {
//   console.log("ThanhDora", ++count);
//   if (count === 5) {
//     clearInterval(idInterval);
//   }
// }, 1000);

//clearTimeout (idTimeout) -> Hủy bỏ hàm setTimeout|
// clearInterval (idTimeout) -> Hủy bỏ hàm setInterval

//Tham số còn lại (Rest Parameters)
// - Tham số còn lại phải viết cuối cùng
// - Gom tất cả các đối số còn lại vào 1 mảng
// const doSomething = function (a, b, c, ...args) {
//   console.log(a, b, c, args);
// };
// doSomething(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const doSomething = function (...args) {
//   console.log(args);
// };
// doSomething(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const doSomething = function () {
//   console.log(arguments);
// };
// doSomething(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Arrow Function (ES6): Vẫn là hàm biểu thức nhưng cú pháp ngắn gọn hơn
// const getMessage = (msg) => {
//   console.log("ThanhDora");
//   console.log(msg);
// };
// getMessage("Js");

//Return arrow function
// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;
// console.log(sum(1, 2));

//Ví dụ: áp dụng arrow function với array filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.filter((value) => value % 2 === 0);
// console.log(result);

//Tương lai:
// - Closure, Scope
// - Function
// - IIFE
// - Function Object

// const textarea = document.querySelector("textarea");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const value = textarea.value;
//   const func = new Function(`return ${value}`);
//   console.log(func());
// });
