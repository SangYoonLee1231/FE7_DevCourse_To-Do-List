## To Do List DOM 없이 구현하기

- 1차 팀 - 3번째 팀 활동

<br/>

### 전체 기능

| 기능                | 함수명               | 설명                                 |
| ------------------- | -------------------- | ------------------------------------ |
| 할일 추가           | addTodo(text)        | 할일을 입력 받아서 todos 배열에 추가 |
| 할일 삭제           | deleteTodo(id)       | 등록된 할일을 삭제                   |
| 할일 수정           | modifyTodo(id, text) | 등록된 할일을 수정                   |
| 할일 완료           | toggleTodo(id)       | 등록된 할일의 완료 여부 토글         |
| 현재 할일 목록 출력 | printTodoList()      | 현재 할일 목록을 반복 콘솔 출력      |

<br/>

### 폴더 구성 예시

```bash
/todolist-headless/
│
├─ index.html          # (선택) 브라우저에서 콘솔 테스트용
├─ script.js           # Todo 모듈 (비DOM)
```

<br/>
