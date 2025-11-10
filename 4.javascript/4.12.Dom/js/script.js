// - Học cách sử dụng và thay đổi các key trong DOM Object
// - Học cách sử dụng những phương thức có sẵn để thay đổi DOM Object

//Truy cập phẩn tử html vào trong DOM

// TH1: truy cập vào các phẩn tử đặc biệt
// document.title = "ThanhDora";
// document.body.innerHTML = "<h1>ThanhDora</h1>";

// TH2: truy cập vào các phẩn tử thông thường
// 1. Truy cập thông qua id
// const titleElement = document.getElementById("title");
// console.log(titleElement);

// 2. Truy cập thông qua class
// => Trả về 1 danh sách
// const titleList = document.getElementsByClassName("sub-title");
// console.log(titleList);

// 3. Truy cập thông qua tagname
// const titleList = document.getElementsByTagName("h1");
// console.log(titleList);

// 4. Truy cập thông qua css selector
// const titleEl = document.querySelector(".box .sub-title");
// console.log(titleEl);

// 5. Truy cập thông qua css selector all
// const titleList = document.querySelectorAll(".box .sub-title");
// console.log(titleList);

// Event = sự kiện
// - Hành động của người dùng tác động lên trang html
// - JS hỗ trợ các sự kiện --> Chỉ việc dùng và viết logic của nó

//Cách lắng nghe sự kiện
// - Xác định tên sự kiện
// - xác định phần tử tác động
// - viết logic của sự kiện
//vd:
// - Tên sự kiện: click
// - Phần tử tác động: button
// - Logic của sự kiện: khi click vào button thì hiển thị thông báo "Hello World"
// const btnEl = document.querySelector(".btn");
// btnEl.onclick = function () {
//   console.log("Thank you for clicking me");
// };
// btnEl.ondblclick = function () {
//   console.log("Double click");
// };
// btnEl.onmouseover = function () {
//   console.log("Mouse over");
// };
// btnEl.onmouseout = function () {
//   console.log("Mouse out");
// };

// Danh sách các sự kiện hay dùng
// - click: nhấp chuột trái 1 lần vào phần tử
// - mousedown: nhấn giữ nút chuột xuống (chưa thả)
// - mouseup: thả nút chuột ra sau khi đã nhấn
// - mouseover: trỏ chuột đi vào vùng của phần tử
// - mouseout: trỏ chuột rời khỏi vùng phần tử
// - mousemove: di chuyển chuột bên trong phần tử (gọi liên tục khi di chuyển)
// - keyup: nhả phím ra sau khi bấm
// - keydown: nhấn phím xuống (kích hoạt liên tục khi giữ phím)
// - input: nội dung ô nhập thay đổi (input, textarea,...)
// - submit: gửi biểu mẫu (xảy ra trên thẻ form)
// - change: giá trị thay đổi và rời focus (input/select/checkbox/radio)
// - focus: phần tử nhận tiêu điểm (được chọn để nhập)
// - blur: phần tử mất tiêu điểm
// - scroll --> Kéo thanh cuộn

//Thao tác với thẻ html
const contentEle = document.querySelector(".content");

//1. lấy toàn bộ nội dung bên trong của thẻ html
// console.log(contentEle.innerHTML);

//2. Cập nhật nội dung bên trong của html
// contentEle.innerHTML = `<h1><i>ThanhDora</i></h1>`;

//3. lấy nội dung ko có html
// console.log(contentEle.innerText);

//4. Cập nhật nội dung (không có html)
// contentEle.innerText = `<h1><i>ThanhDora</i></h1>`;

//5. Lấy nội dung (không có html, giữa khoảng cách ban đầu)
// console.log(contentEle.textContent);

//6. Cập nhật nội dung (ko  có html, giữ khoảng cách)
// contentEle.textContent = `<h1>
//         <i>ThanhDora</i>
// </h1>`;

//7. lấy nội dung bên trong và chính nó của thẻ html
// console.log(contentEle.outerHTML);

//8. Cập nhật nội dung bên trong và chính nó
// contentEle.outerHTML = `<h1>
//          <i>ThanhDora</i>
//  </h1>`;

//9. Xoá phẩn tử html
// contentEle.innerHTML = "";
// contentEle.remove();

//Thao tác với thuộc tính của thẻ html
const imgEl = document.querySelector("img");
// console.log(imgEl.src);
// console.log(imgEl.id);
// console.log(imgEl.className);
// console.log(imgEl.width);
// console.log(imgEl.alt);
// console.log(imgEl.title);

// imgEl.src = "https://x.com/bllus3/status/1979858584738689231/photo/1";

//Truy cập vào data-attribute
// console.log(imgEl.getAttribute("data-id"));
// imgEl.setAttribute("data-id", "123454");
// imgEl.setAttribute("data-thanh", "fede-in");

// console.log(imgEl.dataset);
console.log(imgEl.dataset.id);
imgEl.dataset.anema = "fafe-in";
imgEl.dataset.animationTimingFunction = "thamk";
