import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useTodoContext } from "../context/TodoContext";
import { useAuth } from "../context/AuthContext";

function TodoForm() {
	const { state, dispatch } = useTodoContext();
  const currentUser = useAuth();

	function handleChange(e) {
		dispatch({ type: "SET_NEW_TODO", payload: e.target.value });
	}

	async function handleSubmitTodo(e) {
		e.preventDefault();
		if (state.newTodo !== "") {
			try {
				const newTodo = {
					title: state.newTodo,
					body: "",
					isCompleted: false,
					deadline: null,
					createdAt: Date(),
				}
				
				const todosCollectionRef = collection(db, `users/${currentUser.uid}/todos`);
				dispatch({type: "ADD_NEW_TODO"});
				await addDoc(todosCollectionRef, newTodo);
			} catch (error) {
				alert("Something went wrong. Try again later");
				console.error(error);
			}
		}
	}

	return (
		<form id="todo-form" onSubmit={handleSubmitTodo}>
			<div className="flex mb-4">
				<input
					type="text"
					className="w-full px-4 py-2 mr-2 rounded-lg
                              border-gray-300 focus:outline-none
                                focus:border-blue-500"
					id="todo-input"
					placeholder="Add new task"
					onChange={handleChange}
					value={state.newTodo}
				/>
				<button
					type="SUBMIT"
					className="bg-blue-500 hover:bg-blue-700 
                              text-white font-bold py-2 px-4 rounded"
				>
					Add
				</button>
			</div>
		</form>
	);
}

export default TodoForm;

