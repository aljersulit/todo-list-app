
function TodoForm() {
	return (
		<form id="todo-form">
			<div className="flex mb-4">
				<input
					type="text"
					className="w-full px-4 py-2 mr-2 rounded-lg
                              border-gray-300 focus:outline-none
                                focus:border-blue-500"
					id="todo-input"
					placeholder="Add new task"
					required
				/>
				<button
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
