import { useState, useRef } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";

function TodoItem({ id, title, body, isCompleted, deadline, priorityLevel }) {
	const [isTitleEditable, setIsTitleEditable] = useState(false);
	const titleInputRef = useRef(null);
	const currentUser = useAuth();

	async function handlePriorityChange(e) {
		try {
			const docRef = doc(db, `users/${currentUser.uid}/todos`, id);
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

	async function toggleComplete() {
		try {
			const docRef = doc(db, `users/${currentUser.uid}/todos`, id);
			await updateDoc(docRef, {
				isCompleted: !isCompleted,
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

	async function handleChangeNote(e) {
		try {
			const docRef = doc(db, `users/${currentUser.uid}/todos`, id);
			await updateDoc(docRef, {
				body: e.target.value,
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

	async function handleUpdateTitle(e) {
		try {
			const docRef = doc(db, `users/${currentUser.uid}/todos`, id);
			await updateDoc(docRef, {
				title: e.target.value,
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

	async function handleDeleteTodo() {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this task?"
		);
		if (confirmDelete) {
			try {
				const docRef = doc(db, `users/${currentUser.uid}/todos`, id);
				await deleteDoc(docRef);
			} catch (error) {
				switch (error.code) {
					case "firestore/not-found":
						alert(
							"The todo you're trying to update doesn't exist."
						);
						break;
					default:
						alert("Something went wrong. Try again later");
						console.error(error);
				}
			}
		}
	}

	async function selectDueDate(date) {
		try {
			const docRef = doc(db, `users/${currentUser.uid}/todos`, id);
			await updateDoc(docRef, {
				deadline: date.getTime(),
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

	function handleEditTitle() {
		setIsTitleEditable(true);

		setTimeout(() => {
			titleInputRef.current.focus();
		}, 0);
	}

	return (
		<li className="border-b border-gray-200">
			<div className="flex justify-between gap-x-1">
				<select
					className={`${
						{
							normal: "bg-green-500",
							medium: "bg-blue-500",
							high: "bg-red-500",
						}[priorityLevel]
					} text-neutral-50 px-2 py-px scale-75`}
					value={priorityLevel}
					onChange={handlePriorityChange}
				>
					<option value="normal">Normal</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
				<div>
					<DatePicker
						className="w-28 text-sm"
						selected={deadline && new Date(deadline)}
						onChange={selectDueDate}
						dateFormat="MMM d, yyyy"
						placeholderText="Select deadline"
					/>
				</div>
			</div>
			<div className="flex items-center justify-between py-4">
				<label className="flex items-center">
					<input
						type="checkbox"
						className="mr-2"
						checked={isCompleted}
						onChange={toggleComplete}
					/>
					{isTitleEditable ? (
						<input
							type="text"
							ref={titleInputRef}
							disabled={!isTitleEditable}
							onBlur={() => setIsTitleEditable(false)}
							value={title}
							onChange={handleUpdateTitle}
						/>
					) : (
						<span className={`${isCompleted && "line-through"}`}>
							{title}
						</span>
					)}
				</label>

				<div>
					<button
						className="text-red-500 hover:text-red-700
                      mr-2 delete-btn"
						onClick={handleDeleteTodo}
					>
						Delete
					</button>
					<button
						className="text-blue-500
                      hover:text-blue-700 edit-btn"
						onClick={handleEditTitle}
					>
						Edit
					</button>
				</div>
			</div>
			<textarea
				rows={1}
				placeholder="Notes..."
				className="w-full"
				value={body}
				onChange={handleChangeNote}
			/>
		</li>
	);
}

export default TodoItem;

TodoItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string,
	isCompleted: PropTypes.bool.isRequired,
	deadline: PropTypes.number,
	priorityLevel: PropTypes.string.isRequired,
};

