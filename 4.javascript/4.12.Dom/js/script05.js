// DOM navigation
// - parentElement: chọn phẩn tử cha từ phần tử hiện tại
// - children: chọn danh dách phần tử con từ phần tử hiện tại
// - nextElementSibling: chọn phần tử kế tiếp từ phần tử hiện tại
// - previousElementSibling: chọn phần tử trước từ phần tử hiện tại

// const btnList = document.querySelectorAll("button");
// btnList.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     console.log(btn.parentElement);
//   });
// });

// const ul = document.querySelector("ul");
// console.log(ul.children[1].children[0].innerText);

/**
 * //Bấm vào nút next
// - Chọn phần tử kể tiếp của itemActive
// - Xóa bỏ class phần tử active cũ:
// - Thêm class vào phần tử kế tiếp

// Hàm chuyển active sang phần tử tiếp theo hoặc quay lại đầu
function moveActive(direction) {
  const currentActive = document.querySelector(".product .active");

  if (direction === "next") {
    const next = currentActive.nextElementSibling;
    currentActive.classList.remove("active");
    next
      ? next.classList.add("active")
      : document
          .querySelector(".product h2:first-child")
          .classList.add("active");
  } else {
    const prev = currentActive.previousElementSibling;
    currentActive.classList.remove("active");
    prev
      ? prev.classList.add("active")
      : document
          .querySelector(".product h2:last-child")
          .classList.add("active");
  }
}

// Gắn sự kiện click cho các nút
document
  .querySelector(".next")
  .addEventListener("click", () => moveActive("next"));
document
  .querySelector(".previous")
  .addEventListener("click", () => moveActive("previous"));

 */
