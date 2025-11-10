// Chọn tất cả menu items
const menuItems = document.querySelectorAll(".menu-item");

// Lặp qua mỗi menu item
menuItems.forEach((menuItem) => {
  const submenu = menuItem.querySelector(".submenu");
  const arrow = menuItem.querySelector(".arrow");

  // Nếu không có submenu thì bỏ qua
  if (!submenu) return;

  // Click vào menu item
  menuItem.addEventListener("click", () => {
    const isOpen = !submenu.classList.contains("hidden");

    // Nếu đang mở thì đóng lại, không đóng menu khác
    if (isOpen) {
      submenu.classList.add("hidden");
      arrow.classList.remove("open");
      return;
    }

    // Nếu đang đóng thì đóng hết menu khác rồi mở menu này
    closeAllMenus();
    submenu.classList.remove("hidden");
    arrow.classList.add("open");
  });
});

// Hàm đóng tất cả menu
function closeAllMenus() {
  menuItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");
    const arrow = item.querySelector(".arrow");
    if (submenu) {
      submenu.classList.add("hidden");
      arrow.classList.remove("open");
    }
  });
}
