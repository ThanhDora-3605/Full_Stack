// mảng: Lưu trự danh sách nhiều giá trị trong 1 biến
//vd: Danh sách học viên, danh sách sản phẩm,...
//2. Phần:
// - Element --> Giá trị của phẩn tử
// - index --> Chỉ số để truy cập vào phẩn tử

// Khai báo mảng
const myArr = ["Thanh", "Dora"];
console.log(myArr);

// Truy cập vào 1 phẩn tử theo index
console.log(myArr[1]);

// Cập nhật giá trị phẩn tử theo index
myArr[0] = "ThanhDora";

// Thêm phẩn tử ở cuối mảng
myArr[myArr.length] = "Lê Thanh Đạt";
console.log(myArr);

// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

//for.. in trả về index của array
// for (let index in myArr) {
//   console.log(myArr[index]);
// }

//for...of chỉ trả về Element của array
// for (let Element of myArr) {
//   console.log(Element);
// }

// vd:
const number = [1, 2, 5, 9, 4, 8];
//yêu cầu: lấy tât cả số chẵn trong mảng number và thêm vào mảng mới
const output = [];
for (let i = 0; i < number.length; i++) {
  const value = number[i];
  if (value % 2 === 0) {
    output[output.length] = value;
  }
}
console.log(output);

//array →> object -> string | number | boolean
