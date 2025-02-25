const todoInputText = document.getElementById("input_todo");

const todoAddButton = document.getElementById("add_todo");

const todoList = document.getElementById("todo_list");

todoAddButton.addEventListener('click', () => {
  console.log(todoInputText.value);
});

const listItem = document.createElement("li");
listItem.className = "todo-li";
listItem.innerHTML = "hogehoge";

const deleteButton = document.createElement("button");
deleteButton.innerHTML = "DELETE";
deleteButton.type = "button";

listItem.appendChild(deleteButton);
todoList.appendChild(listItem);
