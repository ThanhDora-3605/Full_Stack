// 1. Some --> một vài
// - duyệt qua các phẩn tử (value, index)
// - trả về boolean
// - nếu có ít nhất 1 phần tử thỏa mãn điều kiện thì trả về true, ngược lại trả về false

// ví dụ: kiểm tra số chẵn trong 1 mảng
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const check = numbers.some(function (value, index) {
//   console.log(value, index);
//   if (value % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

// 2. Every --> tất cả
// - cơ chế giống như some
// - chỉ trả về true nếu tất cả đều return truthy
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const check = numbers.every(function (value, index) {
//   console.log(value, index);
//   if (value % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

// 3. find
// - cơ chế giống fillter (dựa vào điều kiện trong callback)
// - trả về phần tử đầu tiên thỏa mãn điều kiện
// 4. findLast
// - cơ chế giống find (dựa vào điều kiện trong callback)
// - trả về phần tử cuối cùng thỏa mãn điều kiện
// 5. findIndex
// - giống find nhưng trả về index
// 6. findLastIndex
// - giống findLast nhưng trả về index
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const check = numbers.find(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(check);

// const check1 = numbers.findLast(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(check1);

// const check2 = numbers.findIndex(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(check2);

// const check3 = numbers.findLastIndex(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(check3);

// 7. reduce(callback, initialValue)
// - trong callback_function có 3 tham số: accumulator và currentValue và Index

// cách hoạt động ở lần lặp đầu tiên: accumulator = giá trị khởi tạo
// Từ lần 2 trở đi: accumulator = return của callback ở lần lặp trước
// giá trị của reduce sẽ là lần return của callback ở lần lặp cuối cùng

// Lưu ý: Nếu không có giá trị khởi tạo
// - accumulator của lần lặp đầu tiên sẽ là phần tử đầu tiên của mảng
// - Vòng lặp sẽ dầu từ index = 1

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.reduce(function (accumulator, currentValue, index) {
//   console.log(accumulator, currentValue, index);
//   return currentValue;
// }, 0);
// console.log(result);

// ví dụ: tính tổng các phần tử trong mảng
// const numbers = [5, 10, 15, 20, 25, 30];
// const total = numbers.reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);
// console.log(total);

// Ví dụ: Lọc trùng mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// const uniqueArr = myArr.reduce(function (acc, cur) {
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(uniqueArr);

//Bài tập;
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
// yêu cầu: dùng reduce [[1,2], [3,4], [5,6], [7,8], [9]]
// const result = numbers.reduce(function (acc, value, index) {
//   if (index % size === 0) {
//     acc.push([]);
//   }
//   acc[acc.length - 1].push(value);
//   return acc;
// }, []);
// console.log(result);
// Tìm max (dùng reduce)
//Phân tích
// - Khởi tạo 1 biến lưu trữ giá trị max. Giả định = phần tử đầu tiên
// - Duyệt qua từng phần tử của mảng
// - So sánh giá trị của phần tử hiện tại với giá trị max. Nếu lớn hơn thì cập nhật lại giá trị max
// - Trả về giá trị max cuối cùng lớn nhất
// const numbers = [5, 2, 9, -1, 8, 3];
// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (max < numbers[i]) {
//     max = numbers[i];
//   }
// }
// console.log(max);
// const max = numbers.reduce(function (acc, cur) {
//   return acc < cur ? cur : acc;
// });
// console.log(max);

//Ví dụ: Tìm giao giữa 2 máng
// const arr1 = [5, 1, 8, 2, 9];
// const arr2 = [3, 2, 5, 10];
//Output: [5, 2]
// const intersection = arr1.reduce(function (acc, cur) {
//   if (arr2.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(intersection);

// 9. flat
// const myArr = [[1, 2], [3, 4], [5, 6], [7]];
// console.log(myArr);

// const newArr = myArr.flat(Infinity);
// console.log(newArr);
