// Object:
// - Kiểu dữ liệu tham chiếu
// - Lưu trữ dữ liệu dưới dạng key-value

// Đối tượng
// - Đặc điểm (thuộc tính)
// - Hành động (phương thức)

// Khai báo đối tượng
// const user = {
// key: value
//   name: "ThanhDora",
//   age: 20,
// };
// console.log(user);

// Truy cập vào key trong object
// console.log(user.name);
// console.log(user["age"]);

// const key = "age";
// console.log(user[key]); //Computed Property

// Thêm key-value vào object
// user.email = "thanhdora@gmail.com";
// user["address"] = "Bắc Ninh";
// console.log(user);

// Cập nhật giá trị của key
// user.name = "Lê Thanh Đạt";

// Xóa key-value trong object
// delete user.email;
// console.log(user);

// Duyệt các key trong object
// 1. for...in
// for (let key in user) {
//   const value = user[key];
//   console.log(key, value);
// }

// 2. Object.keys(object) --> trả về mảng chứa các key của object
// Object.keys(user).forEach((key) => {
//   console.log(key, user[key]);
// });

// Bài tập: Xoá các key không có giá trị trong object
// const user = {
//   name: "ThanhDora",
//   email: "td@thanhdora3605.dev",
//   age: null,
//   address: undefined,
//   position: "Full Stack Developer",
// };

// dùng for...in

// for (let key in user) {
//   const value = user[key];
//   if (!value && value !== 0) {
//     delete user[key];
//   }
// }
// console.log(user);

// function removeEmptyKey(obj) {
//   for (let key in obj) {
//     if (obj[key] === null || obj[key] === undefined) {
//       delete obj[key];
//     }
//   }
//   return obj;
// }
// const newUser = removeEmptyKey(user);
// console.log(newUser);

// dùng Object.keys
// function removeEmptyKey(obj) {
//   const entries = Object.entries(obj);
//   const newEntries = entries.filter(
//     ([key, value]) => value !== null && value !== undefined
//   );
//   return Object.fromEntries(newEntries);
// }
// const newUser2 = removeEmptyKey(user);
// console.log(newUser2);

// Bài tập 2: Nối 2 object vào nhau
// const obj1 = {
//   name: "ThanhDora",
//   email: "td@thanhdora3605.dev",
// };

// const obj2 = {
//   age: 20,
//   address: "Bắc Ninh",
// };

// const newObj = { ...obj1, ...obj2 };
// console.log(newObj);

// Các phương thức của object
// Constructor: Object
// 1. Object.keys(obj) --> Trả về 1 mảng chứa các key của object
// const error = {};
// const email = "td@thanhdora3605.dev";
// if (!email) {
//   error.email = "Email is required";
// }
// if (!Object.keys(error).length) {
//   console.log("Object is empty");
// } else {
//   console.log(error);
// }

// 2. Object.values(obj) --> Trả về 1 mảng chứa các value của object
// const myObject = {
//   name: "ThanhDora",
//   email: "td@thanhdora3605.dev",
//   age: 20,
//   address: "Bắc Ninh",
//   position: "Full Stack Developer",
// };
// console.log(Object.values(myObject));

// 3. Object.entries(obj) --> Trả về 1 mảng 2 chiều chứa các key-value và object
// const myObject = {
//   name: "ThanhDora",
//   email: "td@thanhdora3605.dev",
// };
// console.log(Object.entries(myObject));

// 4. Object.fromEntries(array) --> Chuyển đổi mảng 2 chiều thành object
// const myArray = [
//   ["name", "ThanhDora"],
//   ["email", "td@thanhdora3605.dev"],
// ];
// console.log(Object.fromEntries(myArray));

// 5. Object.assign(target, source1, source2, source3,...) --> Nối các object vào nhau và trả về object mới
// const obj1 = {
//   name: "ThanhDora",
//   email: "td@thanhdora3605.dev",
// };

// const obj2 = {
//   age: 20,
//   address: "Bắc Ninh",
// };
// const obj3 = {
//   position: "Full Stack Developer",
// };
// const newObj = Object.assign(obj1, obj2, obj3);
// console.log(newObj);

// Bài tập
// const query = {
//   keyword: "Full Stack Developer",
//   status: "active",
//   category: 1,
// };

// Chuyển thành chuỗi query string
//Output: keyword=Khóa+hoc+Fullstack&status=active&category=1
// const queryString = Object.entries(query)
//   .map((value) => {
//     return value.join("=");
//   })
//   .join("&")
//   .replace(/ /g, "+");
// console.log(queryString);

const queryString =
  "keyword=Khóa+Fullstack&status=active&category=1&category=2";
/**
 * keyword: Khóa Fullstack
 * status: active
 * category: [1,2]
 */
const array = queryString.split("&");
const query = {};
array.forEach((item) => {
  const itemArr = item.split("=");
  const key = itemArr[0];
  const value = itemArr[1];
  if (!query[key]) {
    query[key] = value.replaceAll("*", " ");
  } else {
    //Phát hiện key bị trùng trong object query
    // Sửa lại key đó bằng cách bọc 1 mảng ra bên ngoài
    query[key] = [query[key]];
    query[key].push(value);
  }
});
console.log(query);
