// Bài 1: Xây dựng chức năng highlighting
let content = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem Aperiam doloribus delectus Lorem odit sapiente dolores corrupti eius dicta nemo. Lorem Consectetur error reiciendis autem dicta tempora rem pariatur minus eius fugiat suscipit!`; // Nội dung từ hình
let keyword = "Lorem";

let count = 0;
let highlighted = content.replace(new RegExp(keyword, "gi"), (match) => {
  count++;
  return `<span style="background-color: yellow;">${match}</span>`;
});

let html = `<p>${highlighted}</p>`;
html += `<p>Đã tìm thấy ${count} kết quả với từ khóa</p>`;

document.body.innerHTML = html;

// Bài 2: Kiểm tra độ mạnh yếu mật khẩu, đáp ứng tiêu chí
// - Độ dài >= 8
// - Có ít nhất 2 chữ HOA
// - Có ít nhất 2 chữ thường
// - Có ít nhất 1 số
// - Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()

let password = "ThanDora@2025"; // ví dụ mật khẩu cẩn kiểm tra

let hasLength = password.length >= 8;
let upperCount = (password.match(/[A-Z]/g) || []).length >= 2;
let lowerCount = (password.match(/[a-z]/g) || []).length >= 2;
let digitCount = (password.match(/\d/g) || []).length >= 1;
let specialCount = (password.match(/[!@#$%^&*({})]/g) || []).length >= 1;

let isStrong =
  hasLength && upperCount && lowerCount && digitCount && specialCount;

console.log(isStrong ? "Mật khẩu mạnh" : "Mật khẩu yếu");

// Bài 3: Lọc trùng mảng
const users = ["User 1", "User 2", "User 4", "User 3", "User 2", "User 4"];

const uniqueUsers = users.filter(
  (value, index, self) => self.indexOf(value) === index
);
console.log(uniqueUsers);

// Bài 4: Tìm số lớn thứ hai trong mảng
const numbers = [5, 2, 1, 9, 8, 0, 11, 20];

const sorted = [...numbers].sort((a, b) => b - a);
const secondLargest = sorted[1];

console.log(secondLargest);

// Bài 5: Chèn phần tử vào mảng không làm thay đổi thứ tự sắp xếp
const numbersx = [1, 3, 5, 7, 9, 11];
const newNumber = 4;

const sortedInsert = [...numbersx];

let insertIndex = 0;
for (let i = 0; i < sortedInsert.length; i++) {
  if (sortedInsert[i] < newNumber) {
    insertIndex = i + 1;
  } else {
    break;
  }
}

sortedInsert.splice(insertIndex, 0, newNumber);

console.log(sortedInsert);
