const input = document.getElementById("input");
const addButton = document.getElementById("add");
const todoList  = document.querySelector("ul");

const storedTodos = JSON.parse(localStorage.getItem("todos"));
let todos = storedTodos || [];

todos.forEach((task) => {
    showTodo(task)
});

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(input.value.trim().length > 0) {
        const newTodo = {
            id:  Date.now(),
            text: input.value.trim(),
            completed: false
        }
        todos.push(newTodo);
        input.value = "";
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(todos)
        
    }
})


function showTodo(todo){
    const li = document.createElement("li");
    li.setAttribute("id", todo.id);
    li.innerHTML = ` <div class="todo">
                        <input type="text" readonly value="${todo.text}">
                        <button class="delete">Delete</button>
                    </div>`



      todoList.appendChild(li);
}



