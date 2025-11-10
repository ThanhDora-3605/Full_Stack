/*
Bài 1

Cho trước mảng:

const arr = [1, 2, 3, 4, 5, 6];

- Tạo mảng mới chứa bình phương của từng phần tử.

- Tạo mảng mới chứa các số chẵn trong mảng.

- Tạo mảng mới chứa các số bình phương nhưng chỉ lấy số lẻ.
*/
const arr = [1, 2, 3, 4, 5, 6];
// - Tạo mảng mới chứa bình phương của từng phần tử
const squareArr = arr.map(function (value) {
  return value * value;
});

// - Tạo mảng mới chứa các số chẵn trong mảng.
const evenArr = arr.filter(function (value) {
  return value % 2 === 0;
});

// - Tạo mảng mới chứa các số bình phương nhưng chỉ lấy số lẻ.
const oddSquareArr = arr
  .map(function (value) {
    return value * value;
  })
  .filter(function (value) {
    return value % 2 !== 0;
  });
console.log(`Mảng Bình Phương: ${squareArr}`);
console.log(`Mảng Số Chẵn: ${evenArr}`);
console.log(`Mảng Số Bình Phương Lẻ: ${oddSquareArr}`);

/**
Bài 2

Cho trước mảng:

const names = ["   hoang ", "AN", "  f8   ", "Education"];

- Tạo mảng mới chứa các phần tử đã được xoá khoảng trắng thừa và viết thường toàn bộ.

Kết quả: `["hoang", "an", "f8", "education"]`

- Tạo mảng mới viết chữ cái đầu hoa (Hoang, An, F8, Education)
*/

const names = ["   hoang ", "AN", "  f8   ", "Education"];

// - Tạo mảng mới chứa các phần tử đã được xoá khoảng trắng thừa và viết thường toàn bộ.
const newNames = names.map(function (value) {
  return value.trim().toLowerCase();
});

// - Tạo mảng mới viết chữ cái đầu hoa (Hoang, An, F8, Education)
const newNames2 = names.map(function (value) {
  const trimmed = value.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
});
console.log(`Mảng viết thường: `, newNames);
console.log(`Mảng chữ cái đầu hoa: `, newNames2);

/**
 * Bài 3

 * Cho trước mảng:

const nums = [3, 7, 2, 9, 12, 15, 18];

- Lấy ra mảng mới chỉ chứa số lớn hơn hoặc bằng 10.

- Từ mảng mới trên, tạo mảng chỉ chứa số chia hết cho 3.

- Với mảng ban đầu, tạo mảng mới tăng gấp đôi nhưng chỉ giữ lại số lẻ.
*/

const nums = [3, 7, 2, 9, 12, 15, 18];
// - Lấy ra mảng mới chỉ chứa số lớn hơn hoặc bằng 10.
const numsGe10 = nums.filter(function (value) {
  return value >= 10;
});

// - Từ mảng mới trên, tạo mảng chỉ chứa số chia hết cho 3.
const numsDiv3 = numsGe10.filter(function (value) {
  return value % 3 === 0;
});

// - Với mảng ban đầu, tạo mảng mới tăng gấp đôi nhưng chỉ giữ lại số lẻ.
const numsDoubleOdd = nums
  .map(function (value) {
    return value * 2;
  })
  .filter(function (value) {
    return value % 2 !== 0;
  });
console.log(`Mảng số lớn hơn hoặc bằng 10: `, numsGe10);
console.log(`Mảng số chia hết cho 3: `, numsDiv3);
console.log(`Mảng số tăng gấp đôi nhưng chỉ giữ lại số lẻ: `, numsDoubleOdd);

/**
 * Bài 4

Cho trước mảng

const words = ["javascript", "php", "css", "html", "python", "java"];

- Lọc ra các từ có độ dài >= 5.

- Tạo mảng mới viết hoa toàn bộ.

- Tạo mảng mới viết ngược từng chuỗi (tpircsavaj, avaj...)
*/
const words = ["javascript", "php", "css", "html", "python", "java"];
// - Lọc ra các từ có độ dài >= 5.
const wordsLong = words.filter(function (value) {
  return value.length >= 5;
});
console.log(`Mảng từ có độ dài >= 5: `, wordsLong);

// - Tạo mảng mới viết hoa toàn bộ.
const wordsUpper = words.map(function (value) {
  return value.toUpperCase();
});

// - Tạo mảng mới viết ngược từng chuỗi (tpircsavaj, avaj...)
const wordsReversed = words.map(function (value) {
  return value.split("").reverse().join(""); // dùng split để tách từng ký tự thành mảng, reverse để đảo ngược mảng, join để nối lại thành chuỗi
});
console.log(`Mảng từ có độ dài >= 5: `, wordsLong);
console.log(`Mảng từ viết hoa: `, wordsUpper);
console.log(`Mảng từ viết ngược: `, wordsReversed);

/**
 * Bài 5

  Cho trước mảng

 const myArr = [ 

  [1, 2, 3], 

  [4, 5, 6], 

  [7, 8, 9] 

];

- Tạo mảng chứa tổng từng hàng => [6, 15, 24]

- Tạo mảng chứa tổng từng cột => [12, 15, 18]

- Lọc ra các hàng có tổng > 10.
*/
const myArr = [
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9],
];
// - Tạo mảng chứa tổng từng hàng => [6, 15, 24]

const rowSums = myArr.map(function (row) {
  return row.reduce(function (sum, nums) {
    return sum + nums;
  });
});
// - Tạo mảng chứa tổng từng cột => [12, 15, 18]
const colSums = [];
for (let i = 0; i < myArr[0].length; i++) {
  // Duyệt qua các cột
  let sum = 0;
  for (let j = 0; j < myArr.length; j++) {
    // Duyệt qua các hàng
    sum += myArr[j][i]; // Lấy phần tử ở vị trí [hàng][cột]
  }
  colSums.push(sum);
}
// - Lọc ra các hàng có tổng > 10.
const filteredRows = rowSums.filter(function (value) {
  return value > 10;
});
console.log(`Mảng chứa tổng từng hàng: `, rowSums);
console.log(`Mảng chứa tổng từng cột: `, colSums);
console.log(`Mảng chứa các hàng có tổng > 10: `, filteredRows);

/**
 * Bài 6

Cho trước mảng

const myArr = [ 

  ["hello", "world"], 

  ["javascript", "php"], 

  ["css", "html"] 

]

- Tạo mảng mới viết hoa tất cả từ.

- Lọc ra các từ có độ dài > 4.

- Ghép tất cả thành 1 mảng 1 chiều.
*/

const myArr2 = [
  ["hello", "world"],

  ["javascript", "php"],

  ["css", "html"],
];
// - Tạo mảng mới viết hoa tất cả từ.
const arrUpper = myArr2.map(function (value) {
  return value.map(function (row) {
    return row.toUpperCase();
  });
});

// Lọc ra các từ có độ dài > 4.
const flatArr = myArr2.flat(); // chuyển đổi mảng 2 chiều thành 1 chiều
const wordsLong2 = flatArr.filter(function (value) {
  return value.length > 4;
});

// Ghép tất cả thành 1 mảng 1 chiều.
const newArr = flatArr.join(",");
console.log(`Mảng mới viết hoa tất cả từ: `, arrUpper);
console.log(`Mảng lọc ra các từ có độ dài > 4: `, wordsLong2);
console.log(`Mảng ghép tất cả thành 1 mảng 1 chiều: `, newArr);

/**
 * Bài 7

const myArr = [ 

  [2, 4, 6], 

  [8, 10, 12], 

  [14, 16, 18] 

]

- Lấy ra các phần tử trên đường chéo chính => [2, 10, 18].

- Lấy ra các phần tử trên đường chéo phụ => [6, 10, 14].

- Tính tổng của đường chéo chính và phụ.
*/
const myArr3 = [
  [2, 4, 6],

  [8, 10, 12],

  [14, 16, 18],
];
// - Lấy ra các phần tử trên đường chéo chính => [2, 10, 18].
const diagonalMain = myArr3.map(function (value, index) {
  return value[index];
});
// const diagonalMain = [];
// for (let i = 0; i < myArr3.length; i++) {
//   let j = i;
//   diagonalMain.push(myArr3[i][j]);
// }

// - Lấy ra các phần tử trên đường chéo phụ => [6, 10, 14].
const diagonalSub = [];
for (let i = 0; i < myArr3.length; i++) {
  let j = myArr3.length - 1 - i;
  diagonalSub.push(myArr3[i][j]);
}
// - Tính tổng của đường chéo chính và phụ.
let sum = 0;
const diagonalMainSum = diagonalMain.reduce(function (sum, value) {
  return sum + value;
});
const diagonalSubSum = diagonalSub.reduce(function (sum, value) {
  return sum + value;
});
console.log(`Mảng lấy ra các phần tử trên đường chéo chính: `, diagonalMain);
console.log(`Mảng lấy ra các phần tử trên đường chéo phụ: `, diagonalSub);
console.log(`Tổng của đường chéo chính: `, diagonalMainSum);
console.log(`Tổng của đường chéo phụ: `, diagonalSubSum);
console.log(
  `Tổng của đường chéo chính và phụ: `,
  diagonalMainSum + diagonalSubSum
);

/**
 * Bài 8
 * Cho mảng 2 chiều (điểm số của học sinh):

const scores = [ 

  [8, 9, 7],   // học sinh 1 

  [6, 5, 7],   // học sinh 2 

  [10, 9, 8]   // học sinh 3 

]

- Tính điểm trung bình của từng học sinh => [8, 6, 9].

- Lọc ra những học sinh có điểm trung bình >= 8.

- Tạo mảng mới tăng tất cả điểm thêm 1 (nếu chưa vượt quá 10).
*/

const scores = [
  [8, 9, 7], // học sinh 1

  [6, 5, 7], // học sinh 2

  [10, 9, 8], // học sinh 3
];
// - Tính điểm trung bình của từng học sinh => [8, 6, 9].
const averages = scores.map(function (student) {
  return (
    student.reduce(function (sum, score) {
      return sum + score;
    }) / student.length
  );
});
averages.forEach(function (average, index) {
  console.log(`Điểm trung bình của học sinh ${index + 1}: ${average}`);
});
// - Lọc ra những học sinh có điểm trung bình >= 8.
const goodStudents = averages.filter(function (value) {
  return value >= 8;
});
console.log(`Những học sinh có điểm trung bình >= 8: `, goodStudents);
// - Tạo mảng mới tăng tất cả điểm thêm 1 (nếu chưa vượt quá 10).
const increasedScores = scores.map(function (student) {
  return student.map(function (score) {
    return score < 10 ? score + 1 : score;
  });
});
console.log(
  `Mảng mới tăng tất cả điểm thêm 1 (nếu chưa vượt quá 10): `,
  increasedScores
);
