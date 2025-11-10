//1. some --> Mội vài
// - Duyệt qua các phần tử (value, index)
// - Trả về boolean
// - Trả về true nếu hàm callback trả về truthy ít nhất 1 lần

//Ví dụ: Kiểm tra số chẵn trong 1 mảng
// const numbers = [5, 2, 9, 3, 11];
// const check = numbers.some(function (value, index) {
//   //   console.log(value, index);
//   if (value % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

//2. every --> Tất cả
// - Cơ chế giống như some
// - Chỉ trả về true nếu tất đều return truthy

//Ví dụ: Kiểm tra mảng xem tất cả có phải số chẵn không?
// const numbers = [2, 4, 6, 8, 11];
// const check = numbers.every(function (value, index) {
//   //   console.log(value, index);
//   if (value % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

//3. find
// Cơ chế giống filter (Dựa vào giá trị truthy của hàm callback)
// Trả về phần tử đầu tiên thỏa mãn

//4. findLast
// Trả về phần tử cuối cùng thỏa mãn

//5. findIndex
// Giống find nhưng trả về index

//6. findLastIndex
// Giống findLast nhưng trả về index
// const numbers = [1, 2, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// const result1 = numbers.filter(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(result1);

// const result2 = numbers.find(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(result2);

// const result3 = numbers.findLast(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(result3);

// const result4 = numbers.findIndex(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(result4);

//7. reduce(callback_function, initialValue)
// Trong callback_function có 3 tham số
// - accumulator
// - currentValue
// - index

//Cách hoạt động
// Ở lần lặp đầu tiên: accumulator = giá trị khởi tạo
// Từ lần 2 trở đi: accumulator sẽ là return của lần trước (Mỗi lần callback return --> lưu vào accumulator)
// Giá trị của hàm reduce sẽ là lần return cuối cùng

//Lưu ý: Nếu không có giá trị khởi tạo
// - accumulator của lần lặp đầu tiên sẽ là phần tử đầu tiên của mảng
// - Vòng lặp sẽ bắt đầu từ index = 1

// const numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);
// const result = numbers.reduce(function (acc, cur, index) {
//   console.log(`acc: ${acc}`, `cur: ${cur}`, `index: ${index}`);
//   return cur;
// }, 0);
// console.log(result);

//Ví dụ: Tính tổng các phần tử trong mảng
// const numbers = [5, 10, 15, 20, 25, 30];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total = total + numbers[i];
// }
// console.log(total);

// const total = numbers.reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);
// console.log(total);

//1. 0 + 5 = 5
//2. 5 + 10 = 15
//3. 15 + 15 = 30
//4. 30 + 20 = 50
//5. 50 + 25 = 75
//6. 75 + 30 = 105

//Ví dụ: Lọc trùng mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// //Output: ["Item 1", "Item 2", "Item 3", "Item 4"]
// const newArr = myArr.reduce(function (acc, cur) {
//   //   console.log(acc);
//   if (!acc.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(newArr);

//Bài tập: Chunk array (Dùng reduce)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
// // [[1,2], [3,4], [5,6], [7,8], [9]]
// const result = numbers.reduce(function (acc, cur, index) {
//   if (index % size === 0) {
//     const chunk = numbers.slice(index, index + size);
//     acc.push(chunk);
//   }
//   return acc;
// }, []);
// console.log(result);

//Tìm max (Dùng reduce)
//Phân tích:
// - Khởi tạo 1 biến lưu trữ giá trị max. Giả định = phần tử đầu tiên
// - Duyệt qua từng phần tử của mảng
// - So sánh max với từng phần tử. Nếu max < phần tử nào thì gán max bằng phần tử đó
// - Giá trị max cuối cùng sẽ là giá trị lớn nhất
// ==> Kỹ thuật đặt lính canh
// const numbers = [5, 2, 9, -1, 8, 3];
// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (max < numbers[i]) {
//     max = numbers[i];
//   }
// }
// console.log(max);
// const max = numbers.reduce(function (acc, cur) {
//   //   if (acc < cur) {
//   //     return cur;
//   //   } else {
//   //     return acc;
//   //   }
//   return acc < cur ? cur : acc;
// });
// console.log(max);

//Ví dụ: Tìm giao giữa 2 mảng
//Phân tích:
// - Duyệt qua từng phần tử của mảng 1
// - Kiểm tra phần tử đó có nằm trong mảng 2 không? (includes)
// - Nếu có --> push vào mảng mới
// const arr1 = [5, 1, 8, 2, 9];
// const arr2 = [3, 2, 5, 10];
// //Output: [5,2]
// const diff = arr1.reduce(function (acc, cur) {
//   if (arr2.includes(cur)) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(diff);

//8. flat
// const myArr = [[1, 2], [3, 4], 5, [6, [7]]];
// console.log(myArr);

// const newArr = myArr.flat(Infinity);
// console.log(newArr);
