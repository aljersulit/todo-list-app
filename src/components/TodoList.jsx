import { useReducer } from "react";
import useTodos from "../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";


function todoReducer(state, action) {
	switch(action.type) {
		case "FETCH_TODOS":
			return {
				...state,
				todos: action.payload
			}
		default:
			return state;
	}
}

function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, {todos: []});
  useTodos(dispatch);

	return (
		<>
			<div className="bg-white shadow-md rounded-lg p-6">
				<TodoForm />

				<ul id="todo-list">
          {state.todos.map((todo) => {
            return <TodoItem key={todo.id} title={todo.title} body={todo.body} isCompleted={todo.isCompleted}/>
          })}
				</ul>
			</div>
		</>
	);
}

export default TodoList;

