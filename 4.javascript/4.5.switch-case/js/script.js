// switch case - câu lệnh rẽ nhánh chỉ chấp nhận so sánh ===
// Cú pháp
/*
switch (bieuthuc) {
    case giatri1:
    case giatri2:
    case giatri3:
    khối lệnh 1
    break;

    case giatri4:
    Khối lệnh 2
    break;

    default:
    khối lệnh n
    break;
}
 */
let action = "add";
switch (action) {
  case "create":
  case "add":
  case "insert":
    console.log("Thêm mới");
    break;
  case "update":
  case "edit":
    console.log("Cập nhật");
    break;
  case "delete":
  case "remove":
    console.log("Xóa");
    break;
  default:
    console.log("Không hợp lệ");
    break;
}
// Bài tập: chuyển đoạn code trên thành if else
let actionx = "add";
if (actionx === "create" || actionx === "add" || actionx === "insert") {
  console.log("Thêm mới");
} else if (actionx === "update" || actionx === "edit") {
  console.log("Cập nhật");
} else if (actionx === "delete" || actionx === "remove") {
  console.log("Xoá");
} else {
  console.log("không hợp lệ");
}
