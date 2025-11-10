// Kiểu dữ liệu
// number --> số
//string --> chuỗi
//boolean  --> logic
// object --. đối tượng
//null
// undefined
//bigInt --> số nguyên lưu trữ lớn (khi number ko lưu trữ đc )
// symbol

// cách kiểm tra kiểu dữ liệu --> dừng từ khoá typeof hoặc hàm typeof()

// let age = 34;
// console.log(typeof age);

// let user = null;
// console.log(typeof user);

// let price = 1200n;
// console.log(typeof price);

// 1. Toán tử số học
// Phép toán: +, -, *, /
// Chia lấy dư: %
// Luỹ thừa: **
// Tăng 1 đơn vị: ++
// Giảm 1 đơn vị: --

// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c);

// let a = 10;
// let b = 0;
// let c = a / b;
// console.log(c);

// Lưu ý: Trừ phép +, các phép toán khác trong số học sẽ tự động ép kiểu về kiểu số khi tính toán
// nếu éo kiểu thất bại --> Trả về NaN (Not a Number)

// let a = 10;
// let b = "20a";
// let c = a * b;
// console.log(c);

// Chia lấy dư:
// let a = 1.5 % 1;
// console.log(a);

// Luỹ thừa
// let a = -(10 ** 3);
// console.log(a);

// tăng, giảm 1 đơn vị
// let count = 0;
// count++;
// ++count;
// console.log(count);

// let total;
// let count = 1;
// total = count++;
// console.log("total: ", total);
// console.log("count: ", count);

// Bài Tập
// let count = 1;
// let total = count++ + ++count; // 1 + 3
// console.log(total);

// 2. Toán tử so sánh --> luôn trả về boolean
// >, >=, <, <=
// ==, ===
// !=, !==

//Lưu ý: Luôn sử dụng === và !==

// let a = 20;
// let b = "20";
// let c = a === b;
// console.log(c);

// So sánh chuỗi
// let str1 = "ThanhDora";
// let str2 = "Thanh";
// console.log(str1 > str2);

// 3. Truthy, Falsy
// Falsy: Khi đặt 1 giá trị vào 1 biểu thức logic --> Giá trị đó tự chuyển về false --> Falsy
// Các giá trị Falsy: 0, "", false, null, undfined, NaN
//Truthy: Khi đặt 1 giá trị vào trong 1 biếu thức logic -> Giá trị đó tự động chuyển về true -> Truthy

// let a = 10;
// if (a > 0) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }

// 4. Toán tử luận lý (&&, ||, !)

// cú pháp: bieuyhuc1 && bieuthuc2 || bieuthuc3 || !bieuthuc4

// &&: tìm falsy, nếu tìm thấy falsy --> Dừng lại và trả về giá trị falsy tìm đc. Nếu không tìm thấy falsy --> Trả về giá trị của biểu thức cuối cùng

// I|: Tìm truthy, nếu tìm thấy truthy -> Dừng lại và trả về giá trị truthy tìm được. Nếu không tìm thấy truthy -> Trả về giá trị của biểu thức cuối cùng

// !: Chuyển về boolean --> trả về giá trị ngược lại

// let a = 10;
// let result = a && 5 && 5 < 0 && 1 && "F8";
// console.log(result);

// let a = 10;
// let result = null || 0 || 5 < 0 || 10 || undefined;
// console.log(result);

// let a = 10;
// let result = !!a;
// console.log(result);

// 5. Toán tử nullish (??)
// cú pháp: a ?? b

// let a = 10;
// let b = 20;
// let result = a ?? b;
// console.log(result);

// 6. Toán tử 3 ngôi
//Cú pháp: bieuthuc ? giatridung : giatrisai
// let a = 10;
// let b = 20;
// let c = 30;
// let result = a ? b : c;
// console.log(result);

// let a = 10;
// let total = 1 + 2 + 3 + a >= 10 ? 20 : 10 + 5;
// console.log(total);
