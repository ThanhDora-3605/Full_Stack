// Storage: Bộ nhớ lưu trữ dữ liệu trên trình duyệt
// - Chỉ lưu trữ text

// local storage: Lưu trữ dữ liệu trên trình duyệt
// - Phân biệt qua origin = scheme + host + port
// - Dung lượng lữu trữ 4 - 5mb
// - Sever không đọc được
// - Dễ bị tân công qua XSS

//Tạo script.js -> Deploy https: //f8.edu.vn/js/script.js
//localStorage getItem 'token') -> save file . txt
// localStorage-getItem ( 'key')
// localStorage. seItem( 'key', 'value')
// localStorage. removeItem ( 'key')
// localStorage.clear ()

// sessionlStorage getItem ( 'key')
//sessionStorage.seItem( 'key', 'value')
// sessionlStorage. removeItem ( 'key')
//sessionlStorage.clear ()

//localStorage: Lưu trữ vĩnh viên
//sessiobStorage: Lưu trữ theo phiên

// if (typeof Storage !== "undefined") {
//   console.log("Storage is supported");
// } else {
//   console.log("Storage is not supported");
// }

// const data = {
//   id: 1,
//   name: "ThanhDora",
// };
// localStorage.setItem("data", JSON.stringify(data));

// const user = JSON.parse(localStorage.getItem("user") || "{}");
// console.log(user);

//Cookie: Mẩu tin được chuyền qua lại giữa client và server
// - Dung lượng 4kb
// - Phân biệt theo path (sau port)

// 1. client set cookie
// document.cookie = "token=123;path=/";

// 2. server read cookie
// Server trả về Response header: Set-Cookie: token=123;path=/
