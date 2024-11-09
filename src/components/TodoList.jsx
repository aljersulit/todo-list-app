// import { useReducer } from "react";
// import { todoReducer, initialState } from "../constants/todoReducer";
import useTodos from "../hooks/useTodos";
import TodoForm from "./TodoForm";

function TodoList() {
  // const [state, dispatch] = useReducer(todoReducer, initialState);
  const todos = useTodos();
  console.log(todos);

	return (
		<>
			<div className="bg-white shadow-md rounded-lg p-6">
				<TodoForm />

				<ul id="todo-list">
					<li className="border-b border-gray-200">
						<div className="flex items-center justify-between py-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Task 1</span>
              </label>
              
              <div>
                <button
                  className="text-red-500 hover:text-red-700
                      mr-2 delete-btn"
                >
                  Delete
                </button>
                <button
                  className="text-blue-500
                      hover:text-blue-700 edit-btn"
                >
                  Edit
                </button>
              </div>
            </div>
            <textarea rows={1} placeholder="Notes..." className="w-full"></textarea>
					</li>
          <li className="border-b border-gray-200">
						<div className="flex items-center justify-between py-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Task 2</span>
              </label>
              
              <div>
                <button
                  className="text-red-500 hover:text-red-700
                      mr-2 delete-btn"
                >
                  Delete
                </button>
                <button
                  className="text-blue-500
                      hover:text-blue-700 edit-btn"
                >
                  Edit
                </button>
              </div>
            </div>
            <textarea rows={1} placeholder="Notes..." className="w-full"></textarea>
					</li>
				</ul>
			</div>
		</>
	);
}

export default TodoList;

