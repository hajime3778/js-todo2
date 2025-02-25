const todoInputText = document.getElementById("input_todo");

const todoAddButton = document.getElementById("add_todo");

todoAddButton.addEventListener('click', () => {
  console.log(todoInputText.value);
});
