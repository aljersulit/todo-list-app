// import { useReducer } from "react";
// import { todoReducer, initialState } from "../constants/todoReducer";
import { useState } from "react";
import useTodos from "../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  // const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todos, setTodos] = useState([]);
  useTodos(setTodos);

	return (
		<>
			<div className="bg-white shadow-md rounded-lg p-6">
				<TodoForm />

				<ul id="todo-list">
          {todos.map((todo) => {
            return <TodoItem key={todo.id} title={todo.title} body={todo.body} isCompleted={todo.isCompleted}/>
          })}
				</ul>
			</div>
		</>
	);
}

export default TodoList;

