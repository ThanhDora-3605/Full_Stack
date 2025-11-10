// Các phương thức xử lý mảng
console.log(Array.prototype);

//1. Kiểm tra biến có phải là mảng không?
//Arrav. isArrav(bienMang)
// const myArr = [];
// console.log(Array.isArray(myArr));

// 2. length --> lấy số trung bình của mảng
// const myArr = ["Item 1", "Item 2", "item 3"];
// myArr.length = 2;
// // console.log(myArr.length);
// console.log(myArr);

// 3. concat(arr1, arr2, arr3,...) --> Nối tất cả các mảng lại và trả về mảng mới
// const myArr = [1, 2, 3];
// const arr1 = [4, 5, 6];
// const arr2 = ["Item 1", "Item 2"];
// // const newArr = myArr.concat(arr1, arr2);
// const newArr = myArr.concat("new item", 99); // nhận kiểu dữ liệu bất kỳ
// console.log(newArr);

// 4. inđexOf(value) --> tìm value có tồn tại trong mảng ko và trả về index đầu tiên tìm đc
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.indexOf("Item 2"));

//5. lastIndex0f(value) -> Tìm value có tồn tại trong mảng không và trả về index cuối cùng tìm được
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.lastIndexOf("Item 2"));

//6. includes(value) -> Tìm phần tử trong mảng và trả về true / false;
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.includes("Item 2"));

// 7. slice(start, end) --> Cắt mảng tử start đến end-1 và trả về mảng mới
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr);
// console.log(myArr.slice(1, 3));
// console.log(myArr.slice(1));
// console.log(myArr.slice(-1));

// 8. splice(index, count): Xoá count phần tử từ index (Thay đổi magr ban đầu)
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const newArr = myArr.splice(1, 0, `new item 1`, `new item 2`);
// console.log(myArr);
// console.log(newArr); // trà về phần tử bị xoá

// 9. push(value1, value2, value3,...) --> thêm nhiều phẩn tử vào cuối mảng
// - Thay đổi mảng ban đầu
// - Trả tổng số lượng phần tử khi đã thêm
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const count = myArr.push(`new item1`, `new item2`);
// console.log(myArr);
// console.log(count);

// 10. unshift(value1, value2, value3,...) --> thêm nhiều phẩn tử vào cuối mảng
// - Thay đổi mảng ban đầu
// - Trả tổng số lượng phần tử khi đã thêm
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const count = myArr.unshift(`new item1`, `new item2`);
// console.log(myArr);
// console.log(count);

// 11. pop() --> xoá phẩn tử ở cuối mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const deleteValue = myArr.pop();
// console.log(myArr);
// console.log(deleteValue);

// 12. shift() --> xoá phẩn tử đầu mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const deleteValue = myArr.shift();
// console.log(myArr);
// console.log(deleteValue);

// 13. fill() --> Cập nhật tất cả các phẩn tử thành 1 giá trị
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.fill(1);
// console.log(myArr);

// 14. reverse() --> Đảo ngược mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.reverse();
// console.log(myArr);

// 15. join(string) --> Nối các phẩn tử mảng thành 1 chuỗi
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.join("_")); // không chuyển đối số mặc định là dấu phẩy (join())

// Mối quan hệ với string
// const fullname = "Lê Thanh Đạt"; //string
// const fullnameArr = fullname.split(" ");
// console.log(fullnameArr);

// ví dụ đảo ngược số
// let number = 6874326;
// let result = +number.toString().split("").reverse().join(""); //number chuyển thành string --> tách từng phẩn tử --> đảo ngược --> join lại
// console.log(result);

// 16. sort() --> Sắp xếp mảng theo thứ tự tăng dần (Sắp xếp chuỗi)
// const fruits = ["banana", "apple", "date", "cherry", "elderberry"];
// fruits.sort();
// console.log(fruits);

// const number = [5, 3, 7, 8, 100, 6];
// number.sort(function (a, b) {
//   //console.log(`a = ${a}`, `b = ${b}`);
//   //Nguyên tắc:
//   // - Nếu hàm này trả về giá trị âm --> Đổi chỗ a và b
//   // - b phẩn tử trước
//   // - a phẩn tử sau
//   //Muốn sắp xếp tăng dần
//   // - Tìm điều kiện: b > a
//   // - Đổi chỗ
//   //   if (b > a) {
//   //     return -1; // Trả về hàm
//   //   }
//   return a - b;
// });
// console.log(number);

//Sắp xéteen theo độ dài tăng dần
// const users = ["Khiêm", "Tuấn", "Sơn", "Anh", "An"];
// users.sort(function (a, b) {
//   return a.length - b.length;
// });
// console.log(users);

//Bài tập:
// const arr1 = [5, 2, 9, 1, 8];
// const arr2 = [2, 5, 1, 10];

// //Yêu cầu: Tìm giao giữa 2 mảng: [5, 2, 1]

// const intersection = [];
// for (let value of arr1) {
//   if (arr2.includes(value)) {
//     intersection.push(value);
//   }
// }

// console.log(intersection); // Output: [5, 2, 1]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
// //Yêu cầu: Chunk array theo size
// //Output: [[1,2], [3,4], [5,6], [7,8], [9]

// let result = [];
// for (let i = 0; i < numbers.length; i += size) {
//   result.push(numbers.slice(i, i + size));
// }
// console.log(result);

//forEach (callback)
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.forEach(function (value, index) {
//   console.log(value, index);
// });

//map (callback)
// - Duyệt giống như forEach
// - Trả về mảng mới có số lượng phần tử giống mảng ban đầu;
// - Giá trị từng phần tử của mảng sẽ là return của callback;
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const newArr = myArr.map(function (value, index) {
//   console.log(value, index);
//   return `${index}, ${value}`;
// });
// console.log(newArr);

//Ví dụ: Cho trước mảng number. tạo mảng mới có số lượng giống mảng cũ. Tuy nhiên, phần tử nàop là số chắn thì nhân đôi
// const numbers = [5, 2, 7, 10, 15]; //[5, 4, 7, 20, 15]
// const newArr = numbers.map(function (number) {
//   if (number % 2 === 0) {
//     return number * 2;
//   }
//   return number;
// });
// console.log(newArr);

// filter(callback): Lọc dữ liệu theo điều kiện trong callback
//Nếu callback return về truethy --> thêm phẩn tử đó vào mảng mới
// const numbers = [5, 2, 7, 10, 15];
// const result = numbers.filter(function (value, index) {
//   //   if (value % 2 === 0) {
//   //     return true;
//   //   }
//   //   return value % 2 === 0;
//   return index;
// });
// console.log(result);

//ví dụ:Dùng filter để giải quyết bài toán tìm kiếm
// const users = [
//   "Tạ Hoàng An",
//   "Nguyễn Văn Sơn",
//   "Hoàng Anh Tuần",
//   "Đặng Ngọc Sơn",
// ];
// let keyword = "sơn";
// const result = users.filter(function (value) {
//   return value.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(result);

const myArr = ["item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
const newArr = myArr.filter(function (value, index) {
  //   console.log(myArr.indexOf(value), index);
  return myArr.indexOf(value) === index;
});
console.log(newArr);

//Tìm hiểu trước:
// - find
// - findLast
// - findIndex
// - findLastIndex
// - some
// - every
// - reduce
// - flat
