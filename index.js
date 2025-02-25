// 入力テキストボックス
const todoInputText = document.getElementById("input_todo");

// 追加ボタン
const todoAddButton = document.getElementById("add_todo");

// TODO一覧
const todoList = document.getElementById("todo_list");

// 追加ボタンクリック時のイベントを登録
todoAddButton.addEventListener('click', () => {
  console.log(todoInputText.value);
});

// liを作成します
const listItem = document.createElement("li");
listItem.className = "todo-li";  // liのclassを設定します
listItem.innerHTML = "hogehoge"; // liの中身を設定します

// buttonを作成します
const deleteButton = document.createElement("button");
deleteButton.innerHTML = "DELETE"; // buttonのclassを設定します
deleteButton.type = "button";      // buttonの中身を設定します

// liの子要素として、buttonを追加します
listItem.appendChild(deleteButton);
// ulの子要素として、liを追加します
todoList.appendChild(listItem);
