// if else --> câu lệnh rẻ nhánh

/*
if (dieukien) {
    Cau lenh
}

if (dieukien) {
    Cau lenh dung
} else {
    Câu lệnh sai 
}

if (dieukien1) {
    câu lệnh 1 
} else if (dieukien2) {
    câu lệnh 2
} else if (dieukien3) {
    câu lệnh 3
} else {
    câu lệnh n
}

if (dieukien1) {
    if (dieukien2) {
        câu lệnh 1
    } else {
        câu lệnh 2
    }
} else {
 câu lệnh 3
}
 */

// let age = 20;
// if (age >= 18) {
//   console.log("Bạn đã đủ tuổi");
// } else {
//   console.log("Bạn chưa đủ tuổi");
// }

// let age = -1;
// if (age < 0) {
//   console.log("sai điều kiện");
// } else if (age < 3) {
//   console.log("Trẻ sơ sinh");
// } else if (age < 12) {
//   console.log("trẻ chưa trưởng thành");
// } else if (age < 18) {
//   console.log("trẻ vị thành niên");
// } else if (age < 40) {
//   console.log("thanh niên");
// } else if (age < 60) {
//   console.log("trung niên");
// } else {
//   console.log("người già");
// }

//Bài tập: Cho trước lương cơ bản 1 nhân viên. Yêu cầu tính lương thực nhận sau khi trừ thuế
//Bảng thuế:
//<= 5tr -→> Thuế 0%
//5tr < Lương <= 10tr -> Thuế 3%
//10tr < Lương <= 15tr -> Thuế 5%
//> 15tr -> Thuế 7%

// Công thức: luongthucnhan = luongcaban - (luongcoban * thue / 100)
// let salary = -6000000;
// let income; // lương thực nhận
// let tax; //tỷ lệ thuế
// if (salary < 0) {
//   console.log("Không hợp lệ");
// } else {
//   if (salary <= 5000000) {
//     tax = 0;
//   } else if (salary <= 10000000) {
//     tax = 3;
//   } else if (salary <= 15000000) {
//     tax = 5;
//   } else {
//     tax = 7;
//   }
//   income = salary - (salary * tax) / 100;
//   console.log("lương thực nhận:", income);
// }

//Bài tập: Tính tiền taxi khi biết số km
// - Số km <= 1: Giá 15.000
// - 1 < số km <= 5: Giá 13.500
// - Số km > 5: Giá 11.000
// - Số km > 120: Giảm 10% trên tổng tiền

// ví dụ: đi 6km
// số tiền phải trả = 1*15000 + 4*13500 + 1*11000

// const PRICE_1 = 15000;
// const PRICE_2 = 13500;
// const PRICE_3 = 11000;
// const DISCOUNT = 10;
// const DISTANCE_1 = 1;
// const DISTANCE_2 = 5;
// const DISTANCE_3 = 120;
// let km = 100;
// let total;
// if (km < 0) {
//   console.log("không hợp lệ");
// } else if (km <= DISTANCE_1) {
//   total = km * PRICE_1;
// } else if (km <= DISTANCE_2) {
//   total = DISTANCE_1 * PRICE_1 + (km - DISTANCE_1) * PRICE_2;
// } else {
//   total =
//     DISTANCE_1 * PRICE_1 +
//     (DISTANCE_2 - DISTANCE_1) * PRICE_2 +
//     (km - DISTANCE_2) * PRICE_3;
// }
// if (km > DISTANCE_3) {
//   total = total * (1 - DISCOUNT / 100);
// }
// if (total) {
//   console.log(`${km}km = ${total}đ`);
// }
