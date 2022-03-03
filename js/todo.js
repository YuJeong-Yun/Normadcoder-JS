const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
// localStorage에 array값 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 삭제버튼 누르면 toDo 삭제
function deleteToDo(event) {
  // 화면에서 삭제
  const li = event.target.parentElement;
  li.remove();
  // array에서 삭제
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  // localStorage에 새로운 array 반영
  saveToDos();
}
// 화면에 toDo 리스트 출력
function paintToDo(newTodo) {
  const li = document.createElement("li");
  // id(localStorage에서 값을 삭제할 때 구별하기 위해 준 값) li에도 똑같이 추가
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  // 버튼 클릭하면 삭제 Event 추가
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
// todo form submit했을 경우
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  // toDo array에 입력한 toDo값, 랜덤한 id값 object형태로 추가
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  // localStorage에도 array값 추가
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
// 전에 입력한 값을 localStorage와 화면에 출력
if(savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // array에 넣음. 즉 새로고침했을 때 원래 있던 것을 localStorage에 다시 넣을 수 있도록
  toDos = parsedToDos;
  // 화면에 입력 값 출력
  parsedToDos.forEach(paintToDo);
}