import mysql from "mysql2/promise";
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "fullstack_k16",
  password: "123456",
  port: 3306,
});

//ORM, Query Builder
//ORM = Object Relation Mapping
//Ánh xạ object bên ngôn ngữ lập trình sang cấu trúc ở trong database (Bảng, cột)
//Lập trình viên: Chỉ cần thao tác với object bên ngông ngữ lập trình -> ORM tự động chuyển thành sql -> thông qua Driver -> Database
