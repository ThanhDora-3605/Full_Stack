// Iwhile: Lap voi so lan lap khong xac dinh trudc (Kiem
// tra điều kiện trước khi vào vòng Lap)
//do while: lặp với số lần ko xác định trc

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// let i = 100;
// do {
//   console.log(i);
//   i++;
// } while (i < 0);

// vd: Cho trước 1 số nguyên n, cần đếm thử xem số nguyên này chia hết cho 2 đc bao nhiêu lần

// let n = 10000;
// let count = 0;
// while (n % 2 === 0) {
//   n = n / 2;
//   count++;
// }
// console.log(count);

// Cho trước số nguyên n, yêu cầu: đảo ngược số nguyên và hiện thị kết quả (Không dùng xử lý chuỗi)
// let n = 532674; // Input
// let reversed = 0;

// while (n > 0) {
//   let digit = n % 10;
//   reversed = reversed * 10 + digit;
//   n = Math.floor(n / 10);
// }

// console.log(reversed); // Output: 476235

//Từ khoá:
// - break: Thoát vòng lặp
// - continue: Bỏ qua lần lặp --> chạy đến lần lặp tiếp theo

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
