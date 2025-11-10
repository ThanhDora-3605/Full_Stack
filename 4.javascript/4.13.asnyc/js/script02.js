const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "ThanhDora",
          salary: 1000,
        },
        {
          id: 2,
          name: "ThanhDora2",
          salary: 2000,
        },
        {
          id: 3,
          name: "ThanhDora3",
          salary: 3000,
        },
        {
          id: 4,
          name: "ThanhDora4",
          salary: 4000,
        },
      ];
      const user = users.find((user) => user.id === userId);
      //   reject("User not found");
      resolve(user);
    }, Math.random() * 2000);
  });
};

const ids = [1, 2, 3, 4]; // Danh sách các userId
// const totalPromise = new Promise((resolve) => {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const userId = ids[i];
//     getUser(userId).then((data) => {
//       total += data.salary;
//       count++;
//       if (count === ids.length) {
//         resolve(total);
//       }
//     });
//   }
// });
// totalPromise.then((total) => {
//   console.log(total);
// });

// Promise 1 --> resolve --> result
// Promise 2 --> resolve --> result
// Promise 3 --> resolve --> result

//Promise.all(arrayPromise)
// const arrayPromise = ids.map((userId) => getUser(userId));
// Promise.all(arrayPromise).then((data) => {
//   const total = data.reduce((total, user) => total + user.salary, 0);
//   console.log(total);
// });

// Try...catch
/*
    try {
        // Code
    } catch (error) {
        // Code
    } finally {
        // Code
    }
*/
// console.log("Start");
// const abc = () => {};
// let a = -1;
// try {
//   abc();
//   if (a < 0) {
//     throw new Error("a is less than 0");
//   }
//   console.log("ok");
// } catch (error) {
//   console.log("Error:", error.message);
// } finally {
//   console.log("End");
// }
// console.log("Continue...");

// Async/Await

// async function
// - Luôn trả về 1 Promise Object
// - Dùng cho Await
// Await: Chờ kết quả trả về từ Promise Object
// - Await phải được sử dụng trong async function

// const doSomething = async () => {
//   try {
//     const user1 = await getUser(1);
//     console.log(user1);
//   } catch (error) {
//     console.log(error);
//   }
// };
// doSomething();

// async function doSomething2() {}

// IIFE

// (async () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const userId = ids[i];
//     const user = await getUser(userId);
//     total += user.salary;
//   }
//   console.log(total);
// })();

// Bài tập
// const myPromise = new Promise((resolve) => {
//   resolve({
//     getContent: () => new Promise((resolve) => resolve("Content")),
//   });
// });
// (async () => {
//   // Truy cập vào myPromise và log ra chữ content
//   const result = await myPromise;
//   const content = await result.getContent();
//   console.log(content); // "Content"
// })();

setTimeout(() => {
  console.log(2);
}, 0);
Promise.resolve(1).then((data) => {
  console.log(data);
});
console.log(3); // call stack
