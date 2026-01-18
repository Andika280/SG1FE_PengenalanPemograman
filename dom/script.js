const body = document.body
const switchBtn = document.getElementById("switch-mode")
const todoInput = document.getElementById("todo-input")
const addBtn = document.getElementById("add-btn")
const todoListContainer = document.getElementById("todo-list")
const sortBtn = document.getElementById("sort-btn")

let todos = [
  { id: 1, text: "Aku belajar javascript" },
  { id: 2, text: "Aku sudah makan" }
]

let isAscending = true 

switchBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode")
  const isDarkMode = body.classList.contains("dark-mode")
  switchBtn.innerText = isDarkMode ? "Light Mode" : "Dark Mode"
})

function deleteTodo(id) {

  todos = todos.filter(item => item.id !== id)
  renderTodoList()
}

sortBtn.addEventListener("click", () => {
  isAscending = !isAscending
  

  todos.sort((a, b) => isAscending ? a.id - b.id : b.id - a.id)
  
  sortBtn.innerText = isAscending ? "Sort: Ascending (ID)" : "Sort: Descending (ID)"
  renderTodoList()
})

function renderTodoList() {
  todoListContainer.innerHTML = ""

  const todoElement = todos.map((item, index) => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const delBtn = document.createElement("button") 

    span.textContent = `${item.id}. ${item.text}` 
    
    delBtn.innerText = "Delete"
    delBtn.className = "btn-delete"
    delBtn.onclick = () => deleteTodo(item.id) 

    li.appendChild(span)
    li.appendChild(delBtn)

    return li
  })

  todoListContainer.append(...todoElement)
}

addBtn.addEventListener("click", () => {
  if (todoInput.value === "") return 

  const newData = {
    id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1, 
    text: todoInput.value
  }

  todos.push(newData)
  todoInput.value = ""
  renderTodoList()
})

renderTodoList()