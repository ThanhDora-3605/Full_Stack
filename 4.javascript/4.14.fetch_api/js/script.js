// Make HTTP Request
// - XHR
// - Fetch API

// fetch(url, options): Trả về 1 Promise

const baseUrl = "http://localhost:3000";
// fetch(`${baseUrl}/users`)
//   .then((response) => {
//     return response.json(); // Tự động parse từ json phía server thành object
//     // return response.text(); // trả về nguyên bản dữ liệu phía server
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const getUsers = async () => {
//   try {
//     const response = await fetch(`${baseUrl}/users`);
//     if (!response.ok) {
//       throw new Error("Lỗi khi lấy dữ liệu");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUsers();

const createUser = async (data) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Chuyển đổi object thành JSON
  });
  const user = await response.json();
  console.log(user);
};

createUser({
  name: "Lê Thanh Đạt",
  email: "thanhdora3605@gmail.com",
});
