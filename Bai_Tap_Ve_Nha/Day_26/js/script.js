// Lấy tất cả các phần tử cần dùng
const ul = document.querySelector("ul");
const menu = document.querySelector("#menu");
const overlay = document.querySelector("#overlay");
const nameInput = document.querySelector("#nameInput");
const saveRenameBtn = document.querySelector("#saveRename");
const renameBtn = document.querySelector("#rename");
const delBtn = document.querySelector("#delete");

let selectedItem = null;

// Di chuyển item (Up/Down)
ul.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  // Di chuyển xuống
  if (e.target.classList.contains("down")) {
    const nextElement = li.nextElementSibling;
    if (nextElement) {
      li.parentElement.insertBefore(nextElement, li);
    }
    return;
  }

  // Di chuyển lên
  if (e.target.classList.contains("up")) {
    const prevElement = li.previousElementSibling;
    if (prevElement) {
      li.parentElement.insertBefore(li, prevElement);
    }
    return;
  }
});

// Chọn item
ul.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("up") ||
    e.target.classList.contains("down")
  ) {
    return;
  }

  const li = e.target.closest("li");
  if (!li) return;

  // Bỏ chọn item cũ
  const oldSelected = document.querySelector("li.selected");
  if (oldSelected) {
    oldSelected.classList.remove("selected");
  }

  // Chọn item mới
  li.classList.add("selected");
});

// Click ra ngoài để bỏ chọn
document.addEventListener("click", (e) => {
  menu.style.display = "none";

  if (!e.target.closest("li")) {
    const active = document.querySelector("li.selected");
    if (active) {
      active.classList.remove("selected");
    }
  }
});

// Context menu (Click chuột phải)
ul.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  const li = e.target.closest("li");
  if (!li) return;

  // Lưu item được chọn và hiển thị menu tại vị trí chuột
  selectedItem = li;
  menu.style.display = "block";
  menu.style.left = `${e.clientX}px`;
  menu.style.top = `${e.clientY}px`;
});

// Xóa item
delBtn.addEventListener("click", () => {
  if (selectedItem) {
    selectedItem.remove();
    selectedItem = null;
    menu.style.display = "none";
  }
});

// Đổi tên item
// Mở form đổi tên
renameBtn.addEventListener("click", () => {
  if (!selectedItem) return;

  const itemText = selectedItem.cloneNode(true);
  const spans = itemText.querySelectorAll("span");
  spans.forEach((span) => span.remove());
  const oldName = itemText.textContent.trim();

  overlay.style.visibility = "visible";
  nameInput.value = oldName;
  nameInput.focus();
});

// Lưu tên mới
saveRenameBtn.addEventListener("click", () => {
  if (!selectedItem) return;

  const newName = nameInput.value.trim();
  if (!newName) return;

  const newItem = selectedItem.cloneNode(true);

  newItem.innerHTML = "";

  newItem.textContent = newName + " ";

  const upSpan = document.createElement("span");
  upSpan.className = "up";
  upSpan.textContent = "Up";

  const downSpan = document.createElement("span");
  downSpan.className = "down";
  downSpan.textContent = "Down";

  newItem.appendChild(upSpan);
  newItem.appendChild(downSpan);

  selectedItem.replaceWith(newItem);
  selectedItem = newItem;

  // Ẩn overlay
  overlay.style.visibility = "hidden";
});

// Đóng overlay khi click ra ngoài hoặc nhấn Escape
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.visibility = "hidden";
  }
});

document.addEventListener("keydown", (e) => {
  // Nhấn Escape để đóng overlay
  if (e.key === "Escape") {
    overlay.style.visibility = "hidden";
  }

  // Alt + Shift + Arrow: Nhân đôi item
  if (e.altKey && e.shiftKey) {
    const selectedLi = document.querySelector("li.selected");
    if (!selectedLi) return;

    const itemClone = selectedLi.cloneNode(true);
    itemClone.classList.remove("selected");

    if (e.key === "ArrowDown") {
      // Nhân đôi và đặt xuống dưới
      const nextElement = selectedLi.nextElementSibling;
      if (nextElement) {
        ul.insertBefore(itemClone, nextElement);
      } else {
        ul.appendChild(itemClone);
      }
    } else if (e.key === "ArrowUp") {
      // Nhân đôi và đặt lên trên
      ul.insertBefore(itemClone, selectedLi);
    }
  }
});
