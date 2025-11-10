// Thuộc tính: key trong object có kiểu dữ liệu ko phải là hàm
// Phương thức: key trong object có kiểu dữ liệu là hàm

// function SayHello() {
//   return "Hello";
// }
// const user = {
//   name: "ThanhDora",
//   email: "td@thanhdora3605.dev",
//   getName: function () {
//     return "ThanhDora";
//   },
//   doSomething: function () {
//     return "Something";
//   },
//   SayHello,
// };
// console.log(user);
// console.log(user.getName());
// console.log(user.doSomething());
// // console.log(user.SayHello());

// Từ khoá this (Hay còn gọi là ngữ cảnh, context)
// - Ám chỉ object ddang bọc hàm
// - Chỉ sử dụng trong hàm
// function Something() {
//   console.log(this);
// }
// Something();
// const user = {
//   name: "ThanhDora",
//   email: "td@thanhdora3605.dev",
//   getName: function () {
//     console.log(this.name);
//   },
//   getInfo: function () {
//     const _this = this;
//     return {
//       age: 20,
//       getEmail: () => {
//         console.log(this);
//       },
//     };
//   },
// };
// // user.getName();
// user.getInfo().getEmail();

// const f8 = {
//   start: function (value) {
//     let result = value;
//     return {
//       add(value) {
//         result += value;
//         return this;
//       },
//       minus(value) {
//         result -= value;
//         return this;
//       },
//       multi(value) {
//         result *= value;
//         return this;
//       },
//       divi(value) {
//         result /= value;
//         return this;
//       },
//       get() {
//         console.log(result);
//         return result;
//       },
//     };
//   },
// };
// f8.start(10).add(20).minus(5).multi(3).divi(2).get();

//Prototype: Object cho phép định nghĩa các thuộc tính, phương thức để tái sử dụng ở các object khác
// Object.prototype.message = "Hello";
// Object.prototype.getInfo = function () {
//   return "This is a message";
// };
// // const a = {
// //   x: 10,
// // };
// // const b = {
// //   y: 20,
// // };
// // console.log(a.message);
// // console.log(b.message);
// // console.log(a.getInfo());
// let fullname = "ThanhDora";
// // console.dir(String);
// Array.prototype.latest = "thanhdora";
// const user = [];
// console.log(user);

// console.log(fullname.message);
// console.log(user.latest);

//Object →> Constuctor -> Instance
//users = [] -> Instance của Array
//fullname = "ThanhDora" ==> Instance của String
//age = 34 ==> Instance của Number
//status = true ==> Instance của Boolean
//user = {} ==> Instance của Object (Literal Object)

//Kiểm tra Constructor của 1 instance
// const users = [];
// console.log(users.constructor.name);
// console.log(users instanceof Array);

// Optional Chaining
// const user = {
//   info: "ThanhDora",
// };
// // console.log(user.info.email.domain);
// if (user.info?.email?.domain) {
//   console.log(user.info.email.domain);
// }

// setter and getter

// const myObject = {
//   data: null,
//   get length() {
//     return this.data;
//   },
//   set length(value) {
//     this.data = value;
//   },
// };
// myObject.length = 20; //setter
// myObject.data += 30;
// console.log(myObject.length); //getter

// Mong muốn
// myObject.length --> Trả về giá trị
// myObject.length = 20; --> Thay đổi giá trị

// Constructor Function
// - function Constructor
// - Class

// Đặt tên Constructor:
// - Dùng quy tắc PascalCase
// - Sử dụng danh từ
// - không được dùng Arrow Function
// HomeConstructor, UserConstructor, ProductConstructor

// function User(name, email) {
//   // Thuộc tính
//   this.name = name;
//   this.email = email;
//   // Phương thức
//   this.getName = function () {
//     return this.name;
//   };
//   this.getEmail = function () {
//     return this.email;
//   };
// }

// Thêm phương thức, thuộc tính từ bên ngoài -> dùng Prototype
// User.prototype.message = "Hello";

// Khởi tạo instance từ Constructor
// const user = new User("ThanhDora", "td@thanhdora3605.dev");
// console.log(user);

// Class
// class User {
//   // Thuộc tính
//   name = "ThanhDora";
//   email = "td@thanhdora3605.dev";
//   // Hàm khởi tạo
//   #email; // Khai báo thuộc tính private
//   constructor(name, email) {
//     this.name = name;
//     this.#email = email;
//   }
//   // Phương thức
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.#email;
//   }
// }
// //Instance
// const user1 = new User("user1", "user1@gmail.com");
// console.log(user1);
// // console.log(user1.#email);
// console.log(user1.getEmail());
