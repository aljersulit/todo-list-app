import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/TodoContext";

function TodoList() {
	const { state } = useTodoContext();

	return (
		<div className="bg-white shadow-md rounded-lg p-6">
			<TodoForm />

			<ul id="todo-list">
				{state.todos.map((todo) => {
					return (
						<TodoItem
							key={todo.id}
							id={todo.id}
							title={todo.title}
							body={todo.body}
							isCompleted={todo.isCompleted}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;

