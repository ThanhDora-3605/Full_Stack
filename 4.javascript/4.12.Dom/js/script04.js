const sidebarEl = document.querySelector(".js-sidebar");
const resizeEl = document.querySelector(".js-resize");
//1. mousedown -> flag
//2. mousemove -> check flag
//3. mouseup --> flag = false

// removeEventListener(`event-name`, hendler)
resizeEl.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", handler);
  document.body.classList.add("select-none");
});
document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", handler);
  document.body.classList.remove("select-none");
});
const handler = (e) => {
  let x = e.clientX;
  if (x < 180) {
    x = 180;
  }
  if (x > 350) {
    x = 350;
  }
  sidebarEl.style.width = `${x}px`;
};
