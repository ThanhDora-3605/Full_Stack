// classList
// const contentEl = document.querySelector(".content");

// console.log(contentEl.classList);

//  1. Thêm class --> add()
// contentEl.classList.add("block-1", "block-2", "block-3");

// 2. Thay đổi class --> replace(thẻ cũ, thẻ mới)
// contentEl.classList.replace("block-1", "block-4");

// 3. Xoá
// contentEl.classList.remove("block-2");

// 4.Toggle
// - nếu chưa có class --> Thêm mới
// - Nếu có class --> Xoá
// contentEl.classList.toggle("block-5");
// contentEl.classList.toggle("block-5");

// 5. Contais() --> Trả về true nếu class tồn tại

// const allItems = document.querySelectorAll("ul li");
// console.log(allItems);

// allItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(item);
//   });
// });

// const allItems = document.querySelectorAll("ul li");
// // console.log(allItems);

// allItems.forEach((item) => {
//   const button = item.querySelector("button");
//   const span = item.querySelector("span");
//   //   console.log(button, span);
//   button.addEventListener("click", () => {
//     // Đóng tất cả content khác trước
//     const itemActive = document.querySelector("span.active");
//     if (itemActive && itemActive !== span) {
//       itemActive.classList.remove("active");
//       const buttonActive = itemActive.previousElementSibling;
//       buttonActive.innerText = "Show";
//     }

//     // Toggle item hiện tại
//     span.classList.toggle("active");
//     if (span.classList.contains("active")) {
//       button.innerText = "Hide";
//     } else {
//       button.innerText = "Show";
//     }
//   });
// });

// DOM CSS
// const contentEl = document.querySelector(".content");
// console.log(contentEl.style);
// Object.assign(contentEl.style, {
//   backgroundColor: "violet",
//   color: "white",
//   padding: "20px",
//   borderRadius: "10px",
//   border: "1px solid black",
//   textAlign: "center",
//   fontSize: "20px",
//   fontWeight: "bold",
//   fontFamily: "Arial, sans-serif",
//   fontStyle: "italic",
//   fontVariant: "small-caps",
//   fontVariantNumeric: "lining-nums",
//   fontVariantLigatures: "common-ligatures",
//   fontVariantEastAsian: "jis78",
//   fontVariantNumeric: "tabular-nums",
// });

// Event Object
// clientX: tọa độ x của chuột
// clientY: tọa độ y của chuột
// pageX: tọa độ x của chuột
// pageY: tọa độ y của chuột
// screenX: tọa độ x của chuột
// screenY: tọa độ y của chuột
// offsetX: tọa độ x của chuột
// offsetY: tọa độ y của chuột
// key --> Áp dụng cho sự kiện keydown, keyup, keypress

// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// const inputEl = document.querySelector("input");
// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

//preventDefault(): ngăn chặn hành động mặc định của trình duyệt
// const aEl = document.querySelector("a");
// aEl.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.href);
// });

// const formEl = document.querySelector("form");
// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("submit");
// });
// document.addEventListener(`contextmenu`, (e) => {
//   e.preventDefault();
//   alert("Right click is disabled");
//   console.log("contextmenu");
// });

//stopPropagation(): ngăn chặn sự lan truyền của sự kiện
const boxEl = document.querySelector(".box");
const btnEl = document.querySelector("button");
btnEl.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click");
});
boxEl.addEventListener("click", (e) => {
  console.log("box click");
});
