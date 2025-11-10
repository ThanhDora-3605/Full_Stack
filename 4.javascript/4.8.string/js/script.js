// //Chuỗi
// let fullname = "ThanhDora";
// let email = `td@thanhdora3605.dev`;
// console.log(fullname);
// console.log(email);

// //Kiểm tra chuỗi
// if (typeof fullname === "string") {
//   console.log("đây là ");
// }

// phương thức, thuộc tính quản lý chuỗi
// console.log(fullname.length);

//1. length: lấy độ dài của chuỗi
// let str = `ThanhDora`;
// console.log(str.length);
//2. charAt(index): lấy ký tự theo index
// let str = `ThanhDora`;
// console.log(str[1]);

//3. charCodeat(index): lấy ký tự theo index và chuyển thành mà ASCII
// let str = `ThanhDora`;
// console.log(str.charCodeAt(0));

//4. slice(start, end): cắt chuỗi tử vị trí index đến end-1
// let str = `ThanhDora`;
// console.log(str.slice(1, 5));

//5. indexOf: tìm chuỗi con có trong chuỗi cha hay ko nếu thấy thì trả về index đầu tiên tìm đc không tìm thấy trả về -1
// let str = `ThanhDora`;
// console.log(str.indexOf("Dora"));
//6. lastIndex0f (subStr): Tìm chuỗi con có trong chuỗi
// cha hay không? Nếu tìm trả về index cuối cùng tìm được,
// không tìm thấy trả về -1
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.lastIndexOf("F8"));

//7. includes(subStr): Tìm chuỗi con trong chuỗi tra, trả
// về true / false
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.includes("F88"));

// 8. replace(search, With) : Tim va thay the chuoi dau
// tiên tìm được
// let str = "Học lập trình F8 không F8 khó";
// console. log(str.replace("F8", "F88"));

//9. replaceAll (search, with): Thay thế tất cả
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.replaceAll("F8", "F88"));

//10. toUpperCase(): Chuyến thành chữ hoa
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.toUpperCase());

//11. trim(): Bo khoang trang dau va cuoi chuoi
// let fullname = " ThanhDora ";
// console.log(fullname);
// console.log(fullname.trim());

// 11. trim(): Bo khoang trang dau va cuoi chuoi
// let fullname = "  ThanhDora ";
// console.log(fullname);
// console.log(fullname.trim());

//12. trimStart(): Loai bo khoang trang dau chuỗi
// let fullname = " ThanhDora ";
// console. log (fullname) ;
// console. log (fullname.trimStart());

//13. trimEnd(): Loại bỏ khoảng trắng cuối chuỗi
// let fullname = " ThanhDora ";
// console.log(fullname);
// console.log(fullname.trimEnd());

//14. repeat (number): Lặp chuỗi
// let str = "*";
// console.log(str.repeat(10));

// 15. startsWith: Kiểm tra chuỗi con ở đầu chuỗi cha
// let pathname = "/admin/posts";
// console.log(pathname.startsWith("/admin"));

//16. endsWith: Kiểm tra chuỗi con ở cuối chuỗi cha

//17. match: Cắt chuỗi dựa vào biểu thức chính quy

// let content =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. +84388875179 Unde magnam reprehenderit animi amet ad incidunt quibusdam, 0123456789 culpa dolores porro? Ea placeat eum commodi animi explicabo soluta minima corrupti! Laborum, quos?";

// let pattern = /(\+84|0)\d{9}/g;
// let result = content.match(pattern);
// console.log(result);

// Bài 1: Lấy username của email bất kỳ
// let email = "td@thanhdora3605.dev"; // Input
// let domainPart = email.split("@")[1].split(".")[0]; // Lấy phần trước .dev: "thanhdora3605"
// let username = domainPart.replace(/\d/g, ""); // Xóa tất cả chữ số
// console.log(username); // Output: thanhdora

//Bài 2: Kiểm tra 1 chuỗi xem có phải tất cả đều viết HOA không?
// let fullname = "ThanhDora";
// let fullnameUppercase = fullname.toUpperCase();
// if (fullname === fullnameUppercase) {
//   console.log("Hợp lệ");
// } else {
//   console.log("Không hợp lệ");
// }

//Bài 3: Chuẩn hóa họ tên
let fullname = "lê thanh Đạt"; // Input
//B1: Chuyển ký tự đầu tiên của chuỗi thành chữ hoa
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
//B2: Tìm vị trí của ký tự bắt đầu mỗi từ (Dựa vào khoảng trắng)
for (let i = 0; i < fullname.length; i++) {
  const char = fullname.charAt(i);
  if (char === " ") {
    const position = i + 1; //Vị trí của ký tự cần chuyển thành chữ hoa
    //Đoạn 1: fullname.slice(0, position)
    //Đoạn 2: fullname.charAt(position).toUpperCase()
    //Đoạn 3: fullname.slice(position+1)
    fullname =
      fullname.slice(0, position) +
      fullname.charAt(position).toUpperCase() +
      fullname.slice(position + 1);
  }
  console.log(fullname);
}
