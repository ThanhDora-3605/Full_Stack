// Bài tập 1
// Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau
// Input: Số điện tiêu thụ hàng tháng
// Output: Hiển thị số tiền phải đóng
// Chi tiết giá điện theo bậc

const ELECTRO_Price_1 = 1678; //Bậc 1
const ELECTRO_Price_2 = 1734; //Bậc 2
const ELECTRO_Price_3 = 2014; //Bậc 3
const ELECTRO_Price_4 = 2536; //Bậc 4
const ELECTRO_Price_5 = 2834; //Bậc 5
const ELECTRO_Price_6 = 2927; //Bậc 6
const ENERGY_CONS_1 = 50;
const ENERGY_CONS_2 = 100;
const ENERGY_CONS_3 = 200;
const ENERGY_CONS_4 = 300;
const ENERGY_CONS_5 = 400;
const ENERGY_CONS_6 = 500;

let Input = 700; // Số điện tiêu thụ hàng tháng
let Output; // số điện phải trả

if (Input < 0) {
  console.log("Không hợp lệ");
} else if (Input <= ENERGY_CONS_1) {
  // Bậc 1: 0-50 kWh
  Output = Input * ELECTRO_Price_1;
} else if (Input <= ENERGY_CONS_2) {
  // Bậc 2: 51-100 kWh
  Output =
    ENERGY_CONS_1 * ELECTRO_Price_1 + (Input - ENERGY_CONS_1) * ELECTRO_Price_2;
} else if (Input <= ENERGY_CONS_3) {
  // Bậc 3: 101-200 kWh
  Output =
    ENERGY_CONS_1 * ELECTRO_Price_1 +
    (ENERGY_CONS_2 - ENERGY_CONS_1) * ELECTRO_Price_2 +
    (Input - ENERGY_CONS_2) * ELECTRO_Price_3;
} else if (Input <= ENERGY_CONS_4) {
  // Bậc 4: 201-300 kWh
  Output =
    ENERGY_CONS_1 * ELECTRO_Price_1 +
    (ENERGY_CONS_2 - ENERGY_CONS_1) * ELECTRO_Price_2 +
    (ENERGY_CONS_3 - ENERGY_CONS_2) * ELECTRO_Price_3 +
    (Input - ENERGY_CONS_3) * ELECTRO_Price_4;
} else if (Input <= ENERGY_CONS_5) {
  // Bậc 5: 301-400 kWh
  Output =
    ENERGY_CONS_1 * ELECTRO_Price_1 +
    (ENERGY_CONS_2 - ENERGY_CONS_1) * ELECTRO_Price_2 +
    (ENERGY_CONS_3 - ENERGY_CONS_2) * ELECTRO_Price_3 +
    (ENERGY_CONS_4 - ENERGY_CONS_3) * ELECTRO_Price_4 +
    (Input - ENERGY_CONS_4) * ELECTRO_Price_5;
} else {
  // Bậc 6: >400 kWh
  Output =
    ENERGY_CONS_1 * ELECTRO_Price_1 +
    (ENERGY_CONS_2 - ENERGY_CONS_1) * ELECTRO_Price_2 +
    (ENERGY_CONS_3 - ENERGY_CONS_2) * ELECTRO_Price_3 +
    (ENERGY_CONS_4 - ENERGY_CONS_3) * ELECTRO_Price_4 +
    (ENERGY_CONS_5 - ENERGY_CONS_4) * ELECTRO_Price_5 +
    (Input - ENERGY_CONS_5) * ELECTRO_Price_6;
}
console.log(`Bài 1: Số tiển điện phải đóng là: ${Output} VNĐ`);

// Bài tập 2
// Viết chương trình kiểm tra 1 số có phải số nguyên tố hay không?
let number = 7;
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else if (number <= 3) {
  isPrime = true;
} else if (number % 2 === 0 || number % 3 === 0) {
  // kiểm tra nếu number chia hết cho 2 hoặc 3 thì trả về false
  isPrime = false;
} else {
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      // kiểm tra nếu number chia hết cho i hoặc (i + 2) thì isPrime = false và thoát vòng lặp
      isPrime = false;
      break;
    }
    i += 6; //Tăng i lên 6 đơn vị mỗi lần kiểm tra
  }
}

if (isPrime) {
  console.log(`Bài 2: ${number} Là số nguyên tố`);
} else {
  console.log(`Bài 2: ${number} Không phải là số nguyên tố`);
}

// Bài tập 3
// Cho 1 số nguyên bất kỳ, hiển thị danh sách các số chẵn và số lẻ
// Input:
// var n = 10;
// Output:
// Số lẻ: 1, 3, 5, 7, 9
// Số chẵn: 2, 4, 6, 8, 10
var n = 10;
let evenNumber = "";
let oddNumber = "";
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    evenNumber = evenNumber + i + ", ";
  } else {
    oddNumber = oddNumber + i + ", ";
  }
}
// xoá dấy phẩy ở cuối
evenNumber = evenNumber.slice(0, -2);
oddNumber = oddNumber.slice(0, -2);

console.log(`Bài 3: \nDãy số chẵn: ${evenNumber}\nDãy số lẻ: ${oddNumber}`);

// Bài tập 4
// Cho trước số nguyên n. Tính giá trị biểu thức sau
// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

let x = 10;
let S = 0;

for (let i = 1; i <= x; i++) {
  S += i * (i + 1);
}

console.log(`Bài 4: Giá trị của S là: ${S}`);

// Bài tập 5
// Cho trước 2 số a, b. Tính tổng số chẵn và số lẻ trong khoảng từ a đến b

var a = 5,
  b = 9;

let sumOdd = 0;
let sumEven = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}

console.log(`Bài 5: \nTổng số lẻ: ${sumOdd} \nTổng số chẳn: ${sumEven}`);

//Bài 6: vẽ bàn cờ vua bằng vòn lặp
let chessBoard = 8;
let html = `<h2>Bài tập 6</h2>`;
html = html + `<table>`;
for (let i = 1; i <= chessBoard; i++) {
  html = html + `<tr>`;
  for (let j = 1; j <= chessBoard; j++) {
    if ((i + j) % 2 === 0) {
      html = html + `<td class="square_even"></td>`;
    } else {
      html = html + `<td class="square_odd"></td>`;
    }
  }
  html = html + `</tr>`;
}
html = html + `</table>`;
document.body.innerHTML = html;

// Bài tập 8
// Vẽ tam giác số với n dòng
let k = 5;
let num = 1;
let line = " ";

for (let i = 1; i <= k; i++) {
  for (let j = 1; j <= i; j++) {
    line += num + " ";
    num++;
  }
  line += "\n";
}
console.log(line);
