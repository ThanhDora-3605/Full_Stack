// Trong js tồn tại cả đồng bộ và bất đồng bộ

// 1. Đồng bộ
// alert("Hello World");
// console.log("ok");

// 2. Bất đồng bộ
// setTimeout(() => {
//   console.log("Hello World");
// }, 2000);
// console.log("ok");

//Xử lý bất đồng bộ
// => Biến tác vụ bất đồng bộ về đồng bộ --> Giải quyết các bài toán cần chờ đợi
//ví dụ: gọi dữ liệu từ server --> chờ server trả về kết quả

// const getUser = (callback) => {
//   setTimeout(() => {
//     const user = ["ThanhDora", "ThanhDora2", "ThanhDora3"];
//     if (typeof callback === "function") {
//       callback(user);
//     }
//   }, 2000);
// };

// getUser((data) => {
//   console.log(data);
//   console.log("Lấy dữ liệu thành công");
// });

//Promise Object
//Chaining: a().b().c().d().e();

// Trạng thái của Promise
// - Pending: Chờ kết quả
// - Fulfilled: Kết quả thành công
// - Rejected: Kết quả thất bại

// Bước 1: Tạo Promise Object
// new Promise(callback)
// - resolve --> hàm
// - reject --> hàm
const getUser = (resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve là 1 hàm dùng để chứa dữ liệu khi thành công
      //reject là 1 hàm chứa dữ liệu khi thất bại
      const user = ["ThanhDora", "ThanhDora2", "ThanhDora3"];
      resolve(user);
      reject("Lỗi khi lấy dữ liệu");
    }, 2000);
  });
};
// Bước 2: sử dụng Promise Object để lấy kết quả
getUser().then((data) => {
  console.log(data);
});
