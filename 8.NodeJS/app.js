// console.log("Hello World");

//Module 
// - Mặc định: commonjs (require)
// - có thể dùng ES Module
// const a = require("./modules/modules.js");
// console.log(a);

// Module có sẵn của nodejs
// 1. path
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//__filename: đường dẫn của file hiện tại (Chỉ hoạt động ở CommonJS)
//__dirname: đường dẫn của thư mục hiện tại (Chỉ hoạt động ở CommonJS)

// const demoPath = "D:/NodeJS/8.NodeJS/modules/modules.js";
// console.log(path.basename(demoPath));
// console.log(path.dirname(demoPath));
// console.log(path.extname(demoPath));
// console.log(path.join(__dirname, "modules", "modules.js"));
// console.log(path.resolve(__dirname, "modules", "modules.js"));
// console.log(path.resolve(__dirname, "modules", "modules.js"));

// 2. url
// import { URL } from "url";
// const demoUrl = "https://thanhdora3605.dev/admin/posts";
// const pathUrl = new URL(demoUrl);
// console.log(pathUrl);

// 3. file system (fs)
// import fs from "fs";
// const data = fs.readFileSync("D:/NodeJS/8.NodeJS/modules/modules.js", "utf8");
// console.log(data);