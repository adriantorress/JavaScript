// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const toolBar = document.querySelector("#toolbar");

let oldInputValue;

// Funções
const saveTodo = (text) => {
  const todo = document.createElement("div")
  todo.classList.add("todo")

  const todoTitle = document.createElement("textarea")
  todoTitle.setAttribute("cols", 25);
  todoTitle.setAttribute("wrap", "hard");
  todoTitle.setAttribute("readonly", "readonly");
  todoTitle.classList.add("todo-title")
  todoTitle.innerText = text
  todo.appendChild(todoTitle)

  doneBtn = document.createElement("button")
  doneBtn.classList.add("finish-todo")
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
  todo.appendChild(doneBtn)

  editBtn = document.createElement("button")
  editBtn.classList.add("edit-todo")
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn)

  removeBtn = document.createElement("button")
  removeBtn.classList.add("remove-todo")
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(removeBtn)

  todoList.appendChild(todo)

  todoInput.value = "";
  todoInput.focus();
}

const toggleForms = () => {
  editForm.classList.toggle("hide")
  todoForm.classList.toggle("hide")
  todoList.classList.toggle("hide")
}

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo")
  for (const todo of todos) {
    let todoTitle = todo.querySelector("textarea")

    if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text
      break;
    }
  }
}

// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
})

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if (parentEl && parentEl.querySelector("textarea")) {
    todoTitle = parentEl.querySelector("textarea").value;
  }


  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();
  }

  if (targetEl.classList.contains("edit-todo")) {
    toggleForms();

    editInput.value = todoTitle
    oldInputValue = todoTitle
  }
})

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
})

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value

  if (editInputValue) {
    updateTodo(editInputValue)
  }
  toggleForms()
})