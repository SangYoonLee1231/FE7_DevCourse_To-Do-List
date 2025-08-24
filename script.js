let id = 0;
const todoList = [];

// 할일 객체 생성
function createTodo() {
  return { id: id++, data: "", isCompleted: false };
}

// id 기반 할일 검색
function searchTodo(id) {
  return todoList.findIndex((todo) => todo.id === id);
}

//

// 할일 추가
function addTodo(text) {
  const newTodo = createTodo();
  newTodo.data = text;
  todoList.push(newTodo);
}

// 할일 삭제
function deleteTodo(id) {
  const index = searchTodo(id);
  if (index !== -1) {
    todoList.splice(index, 1);
  } else {
    console.log("할일을 찾을 수 없습니다.");
  }
}

// 할일 수정
function modifyTodo(id, text) {
  const index = searchTodo(id);
  if (index !== -1) {
    todoList[index].data = text;
  } else {
    console.log("할일을 찾을 수 없습니다.");
  }
}

// 할일 완료
function toggleTodo(id) {
  const index = searchTodo(id);
  if (index !== -1) {
    todoList[index].isCompleted = !todoList[index].isCompleted;
  } else {
    console.log("할일을 찾을 수 없습니다.");
  }
}

// 현재 할일 목록 출력
function printTodoList() {
  if (todoList.length === 0) {
    console.log("할일 목록이 비어 있습니다.");
    return;
  }
  todoList.forEach((todo) => {
    console.log(
      `ID: ${todo.id}, 할일: ${todo.data}, 완료여부: ${todo.isCompleted}`
    );
  });
}

export { addTodo, deleteTodo, modifyTodo, toggleTodo, printTodoList };
