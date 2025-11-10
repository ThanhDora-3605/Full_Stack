// get DOM elements
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = [];
let editingIndex = -1;

// Toggle completed status
function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

//  functions
const createElement = (tag, className, textContent) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;
  return el;
};

const createButton = (className, iconClass) => {
  const btn = createElement("button", className);
  const icon = createElement("i", iconClass);
  btn.appendChild(icon);
  return btn;
};

// hiển thị danh sách
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = createElement(
      "li",
      "bg-custom-item p-3 rounded-l-none flex justify-between items-center mb-2.5 cursor-pointer"
    );

    const span = createElement("span", null, todo.text);
    if (todo.completed) {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
    }
    span.style.cursor = "pointer";
    const buttonContainer = createElement("div", "flex gap-2");

    const editBtn = createButton(
      "edit text-white",
      "fa-solid fa-pen-to-square cursor-pointer hover:text-gray-300"
    );
    const deleteBtn = createButton(
      "delete text-white",
      "fa-solid fa-trash cursor-pointer hover:text-gray-300"
    );

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);

    // event listeners
    span.addEventListener("click", () => {
      toggleCompleted(index);
    });

    editBtn.addEventListener("click", () => {
      editingIndex = index;
      editTodo(li, todo.text);
    });
    // delete
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos();
    });

    todoList.appendChild(li);
  });
}

// edit todo content
function editTodo(li, currentText) {
  li.className = "flex";

  const editInput = createElement(
    "input",
    "flex-1 p-3 border rounded-l-none border-[#8758FF] bg-custom-input text-gray-300 text-base focus:outline-none"
  );
  editInput.type = "text";
  editInput.id = "editInput";
  editInput.value = currentText;

  const saveBtn = createElement(
    "button",
    "px-6 py-3 bg-[#8758FF] rounded-l-none text-white font-medium hover:bg-[#5a2de6] transition-colors cursor-pointer",
    "Add Task"
  );
  saveBtn.type = "button";
  saveBtn.id = "saveBtn";

  li.innerHTML = "";
  li.appendChild(editInput);
  li.appendChild(saveBtn);

  editInput.focus();
  editInput.select();

  // save edit now
  saveBtn.addEventListener("click", () => {
    const newText = editInput.value.trim();
    if (newText !== "") {
      // Kiểm tra task đã tồn tại chưa
      const isDuplicate = todos.some(
        (todo, index) =>
          index !== editingIndex &&
          todo.text.toLowerCase() === newText.toLowerCase()
      );

      if (isDuplicate) {
        alert("Task này đã tồn tại");
        return;
      }

      todos[editingIndex].text = newText;
      editingIndex = -1;
      renderTodos();
    }
  });

  editInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") saveBtn.click();
  });
}

// init todo new
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newText = todoInput.value.trim();
  if (newText !== "") {
    // Kiểm tra task đã tồn tại chưa
    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === newText.toLowerCase()
    );

    if (isDuplicate) {
      alert("Task này đã tồn tại");
      return;
    }

    todos.push({ text: newText, completed: false });
    todoInput.value = "";

    // Nếu đang edit, chỉ render todo mới thay vì render lại toàn bộ
    if (editingIndex !== -1) {
      const li = createElement(
        "li",
        "bg-custom-item p-3 rounded-l-none flex justify-between items-center mb-2.5 cursor-pointer"
      );
      const span = createElement("span", null, newText);
      span.style.cursor = "pointer";
      const buttonContainer = createElement("div", "flex gap-2");

      const editBtn = createButton(
        "edit text-white",
        "fa-solid fa-pen-to-square cursor-pointer hover:text-gray-300"
      );
      const deleteBtn = createButton(
        "delete text-white",
        "fa-solid fa-trash cursor-pointer hover:text-gray-300"
      );

      buttonContainer.appendChild(editBtn);
      buttonContainer.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(buttonContainer);

      // Event listeners cho todo mới
      span.addEventListener("click", () => {
        toggleCompleted(todos.length - 1);
      });

      editBtn.addEventListener("click", () => {
        editingIndex = todos.length - 1;
        editTodo(li, newText);
      });

      deleteBtn.addEventListener("click", () => {
        todos.splice(todos.length - 1, 1);
        li.remove();
      });

      todoList.appendChild(li);
    } else {
      renderTodos();
    }
  }
});

// enter to add
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

// init todo
renderTodos();
