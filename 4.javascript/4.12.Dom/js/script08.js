// const app = document.querySelector("#add");
// const btn = document.querySelector("button");
// const h2 = document.querySelector("h2");

// btn.addEventListener("click", () => {
//   const h2Clone = h2.cloneNode(true);
//   app.append(h2Clone);
// });

function moveListItems() {
  const list = document.querySelector("ul");
  if (!list) return;

  // Track current selected item
  let selectedLi = null;

  // Handle selecting list items (ignore Up/Down buttons)
  list.addEventListener("click", (e) => {
    const btn = e.target.closest("span.up, span.down");
    if (btn) return; // don't change selection when clicking control buttons

    const li = e.target.closest("li");
    if (!li || !list.contains(li)) return;

    if (selectedLi && selectedLi !== li) {
      selectedLi.classList.remove("selected");
    }
    selectedLi = li;
    selectedLi.classList.add("selected");
  });

  // Clear selection when clicking outside the list
  document.addEventListener("click", (e) => {
    if (!list.contains(e.target)) {
      if (selectedLi) {
        selectedLi.classList.remove("selected");
        selectedLi = null;
      }
    }
  });

  // Move items up/down (event delegation)
  list.addEventListener("click", (e) => {
    const btn = e.target.closest("span.up, span.down");
    if (!btn || !list.contains(btn)) return;

    const li = btn.closest("li");
    if (!li) return;

    if (btn.classList.contains("up")) {
      const prev = li.previousElementSibling;
      if (prev) prev.before(li);
    } else if (btn.classList.contains("down")) {
      const next = li.nextElementSibling;
      if (next) next.after(li);
    }
  });
}

moveListItems();
