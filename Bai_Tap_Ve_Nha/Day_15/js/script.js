// Bài tập 1: Viết chương trình khai báo một biến age và gán giá trị số tuổi của bạn.
let age = 20;
console.log(`Tôi năm nay ${age} tuổi.`);

// Bài tập 2: Khai báo hằng số PI = 3.14159. Tính diện tích hình tròn với bán kính r = 5.
const PI = 3.14159;
let r = 5;
let S = PI * r ** 2;
console.log(S);

// Bài tập 3: Viết chương trình tính:
// Tổng 2 số a = 7, b = 3
// Hiệu, tích, thương, số dư
let a = 7;
let b = 3;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
console.log(`Tổng: ${sum}`);
console.log(`Hiệu: ${difference}`);
console.log(`Tích: ${product}`);
console.log(`Thương: ${quotient}`);
console.log(`Số Dư: ${remainder}`);

// Bài tập 4: Cho các biến
// let name = "";
// let defaultName = "Khách";
// Hãy gán cho biến displayName giá trị name nếu name có nội dung, ngược lại là defaultName
let name = "";
let defaultName = "Khách";
let displayName = name ? name : defaultName;
console.log(displayName);

// Bài Tập 5: Viết chương trình kiểm tra một người có đủ điều kiện lái xe không. Điều kiện:
// Tuổi ≥ 18 (age)
// Có bằng lái (hasLicense = true)
// Nếu đủ điều kiện thì in "Đủ điều kiện", ngược lại "Không đủ điều kiện".

let ageT = 18;
let hasLicense = true;
if (ageT >= 18 && hasLicense) {
  console.log("Đủ điều kiện");
} else {
  console.log("Không đủ điều kiện");
}

// Bài tập 6: Cho 2 biến username và password. Dùng toán tử đã học để kiểm tra xem username và password khác rỗng không (In ra giá trị boolean)
let username = "";
let password = "";
let isValid = username !== "" && password !== "";
console.log(isValid);

// Bài tập 7: Cho trước giá khuyến mãi (salePrice), tỷ lệ giảm giá (discountRate). Tính giá gốc của sản phẩm (price)
let salePrice = 1000;
let discountRate = 0.5;
let price = salePrice / (1 - discountRate);
console.log(price);

// Bài tập 8: Cho trước 2 biến a, b. Gán giá trị số cho 2 biến.
// Yêu cầu: Hoán vị giá trị biến nhưng không được dùng biến trung gian
let ax = 10;
let bx = 20;
ax = ax + bx; // 30
bx = ax - bx; // 10
ax = ax - bx; // 20
console.log(`ax = ${ax}, bx = ${bx}`);
