import PropTypes from "prop-types";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
import { useTodoContext } from "../context/TodoContext";

function PriorityLevel({ id }) {
	const currentUser = useAuth();
	const { state } = useTodoContext();
	const todo = state.todos.find((todo) => todo.id === id);

	async function handlePriorityChange(e) {
		try {
			const docRef = doc(db, `users/${currentUser.uid}/todos`, todo.id);
			await updateDoc(docRef, {
				priorityLevel: e.target.value,
			});
		} catch (error) {
			switch (error.code) {
				case "firestore/not-found":
					alert("The todo you're trying to update doesn't exist.");
					break;
				default:
					alert("Something went wrong. Try again later");
					console.error(error);
			}
		}
	}

	return (
		<select
			className={`${
				{
					normal: "bg-green-500",
					medium: "bg-blue-500",
					high: "bg-red-500",
				}[todo.priorityLevel]
			} text-neutral-50 px-2 py-px scale-75`}
			value={todo.priorityLevel}
			onChange={handlePriorityChange}
		>
			<option value="normal">Normal</option>
			<option value="medium">Medium</option>
			<option value="high">High</option>
		</select>
	);
}

export default PriorityLevel;

PriorityLevel.propTypes = {
	id: PropTypes.number.isRequired,
};
