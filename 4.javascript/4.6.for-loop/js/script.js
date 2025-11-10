// Biết trước số lần lặp: for
// không biết trước số lần lặp: while, do...while

//cú pháp for
/**
for (giatrikhoitao; dieukienlap; buocnhay) {
    //khối lệnh đc chạy
}
*/
// //Vòng lặp tăng
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// //Vòng lặp giảm
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

//vòng lặp lồng nhau
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log("i = " + i + ", j = " + j);
//   }
// }

// 1. 100.000
// 2. 200.000
// 3. 400.000
// 4. 1.600.000
// let total = 100000;
// for (let i = 1; i <= 10; i++) {
//   total = total * 2;
// }
// console.log(total);

// tính giá trị biểu thức
// S = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
// let n = 5;
// let S = 0;
// let sum = 1;

// for (let i = 1; i <= n; i++) {
//   sum = sum * i;
//   S = S + sum;
// }

// console.log(S);

// let company = "F8";
// // let output = " Học lập trình tại" + company + " không khó";
// //backtick `` (dưới esc)
// let output = `Học lập trình ${company} Không khó`;
// console.log(output);

// document.body.innerHTML = output;

// Tạo bảng cửu chương giống ảnh
let heading1 = "";
let heading2 = "";
let row1 = "";
let row2 = "";
for (let i = 1; i <= 5; i++) {
  heading1 = heading1 + `<th>${i}</th>`;
  row1 = row1 + "<td>";
  for (let j = 1; j <= 10; j++) {
    row1 = row1 + `${i} x ${j} = ${1 * j} <br/>`;
  }
  row1 = row1 + "</td>";
}
for (let i = 6; i <= 10; i++) {
  heading2 = heading2 + `<th>${i}</th>`;
  row2 = row2 + "<td>";
  for (let j = 1; j <= 10; j++) {
    row2 = row2 + `${i} x ${j} = ${1 * j} <br/>`;
  }
  row2 = row2 + "</td>";
}
let html = `<table width="100%" border="1">
    ${heading1}
    <tr>
       ${row1}
    </tr>
    <tr>
    ${heading2}
    </tr>
    <tr>
       ${row2}
    </tr>
    </table>`;
document.body.innerHTML = html;
