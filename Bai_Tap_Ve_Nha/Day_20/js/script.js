function showGreeting(title) {
  console.log(title);
}
/**
 * Bài 1

Cho trước mảng sau:

const users = [ 

  { name: "An", age: 25 }, 

  { name: "Bình", age: 30 }, 

  { name: "Chi", age: 22 }, 

];

Yêu cầu:

- In ra tên của tất cả người dùng.

- Tìm người có tuổi lớn nhất.

- Tính tuổi trung bình của tất cả người dùng.
 */
showGreeting("bài 1: ");
const users = [
  { name: "An", age: 26 },
  { name: "Bình", age: 30 },
  { name: "Chi", age: 22 },
];

//In ra tên của tất cả người dùng.
const newUsers = users.map((users) => users.name);
//Tìm người có tuổi lớn nhất.
const maxAge = users.reduce((maxUser, users) => {
  return users.age > maxUser.age ? users : maxUser;
}, users[0]);
// Tính tuổi trung bình của tất cả người dùng.
const sumAge = users.reduce((sum, users) => sum + users.age, 0);
const averageAge = users.length > 0 ? sumAge / users.length : 0;
console.log(newUsers);
console.log(maxAge);
console.log(averageAge);

/**
 * Bài 2

Cho trước mảng sau:

const products = [ 

  { name: "Laptop", price: 15000000 }, 

  { name: "Mouse", price: 250000 }, 

  { name: "Keyboard", price: 800000 }, 

];

Yêu cầu:

- Tạo mảng mới chỉ chứa tên sản phẩm.

- Tính tổng giá trị tất cả sản phẩm.

- Lọc ra sản phẩm có giá lớn hơn 1 triệu.


 */
showGreeting("bài 2: ");
const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Mouse", price: 250000 },
  { name: "Keyboard", price: 800000 },
];
// Tạo mảng mới chỉ chứa tên sản phẩm.
const newProducts = products.map((products) => products.name);
// Tính tổng giá trị tất cả sản phẩm.
const sumPrice = products.reduce((sum, products) => sum + products.price, 0);
// Lọc ra sản phẩm có giá lớn hơn 1 triệu.
const filteredProducts = products.filter(
  (products) => products.price > 1000000
);
console.log(newProducts);
console.log(sumPrice);
console.log(filteredProducts);

/**
 * Bài 3

Cho trước mảng sau

const students = [ 

  { name: "Lan", scores: [8, 9, 7] }, 

  { name: "Huy", scores: [6, 5, 7] }, 

  { name: "Minh", scores: [9, 8, 10] }, 

];

Yêu cầu:

- Tính điểm trung bình của từng học sinh.

- Trả về danh sách học sinh đạt loại giỏi (điểm TB >= 8).

- Sắp xếp học sinh theo điểm trung bình giảm dần.
 */
showGreeting("bài 3: ");
const students = [
  { name: "Lan", scores: [8, 9, 7] },
  { name: "Huy", scores: [6, 5, 7] },
  { name: "Minh", scores: [9, 8, 10] },
];
// Tính điểm trung bình của từng học sinh.
const studentsAverage = students.map((student) => {
  const average =
    student.scores.reduce((sum, score) => sum + score, 0) /
    student.scores.length;
  return { name: student.name, average };
});

// Trả về danh sách học sinh đạt loại giỏi (điểm TB >= 8).
const studentsGood = studentsAverage.filter(
  (students) => students.average >= 8
);

// Sắp xếp học sinh theo điểm trung bình giảm dần.
const studentsSort = studentsAverage.sort((a, b) => b.average - a.average);
console.log(studentsAverage);
console.log(studentsGood);
console.log(studentsSort);

/**
 * Bài 4

Cho trước mảng sau:

const posts = [ 

  { 

    id: 1, 

    title: "JavaScript cơ bản", 

    tags: ["js", "basic"], 

    comments: [ 

      { user: "An", text: "Hay quá!" }, 

      { user: "Bình", text: "Rất dễ hiểu" }, 

    ], 

  }, 

  { 

    id: 2, 

    title: "Học React không khó", 

    tags: ["react", "js"], 

    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }], 

  }, 

];

Yêu cầu:

- In ra tất cả title kèm số lượng comments của từng bài viết.

- Tạo mảng mới chứa tất cả tags (không trùng lặp).

- Tìm tất cả các bình luận của user "An".
 */
showGreeting("bài 4: ");
const posts = [
  {
    id: 1,
    title: "JavaScript cơ bản",
    tags: ["js", "basic"],
    comments: [
      { user: "An", text: "Hay quá!" },
      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },
  {
    id: 2,
    title: "Học React không khó",
    tags: ["react", "js"],
    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }],
  },
];
// In ra tất cả title kèm số lượng comments của từng bài viết.
const postsTitle = posts.map((post) => {
  return {
    id: post.id,
    title: post.title,
    comments: post.comments.length,
  };
});
// Tạo mảng mới chứa tất cả tags (không trùng lặp).
const postsTags = posts.map((post) => post.tags).flat();
const uniquePostsTags = postsTags.filter(
  (tag, index, self) => self.indexOf(tag) === index
);
// Tìm tất cả các bình luận của user "An".
const postsCommentsUser = posts.flatMap((posts) => posts.comments);
const postsCommentsUserAn = postsCommentsUser.filter(
  (comments) => comments.user === "An"
);
console.log(postsTitle);
console.log(uniquePostsTags);
console.log(postsCommentsUserAn);
