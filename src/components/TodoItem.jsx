import PropTypes from 'prop-types';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
function TodoItem({id, title, body, isCompleted}) {

  async function toggleComplete() {
		try {
			const docRef = doc(db, 'todos', id);
			await updateDoc(docRef, {
				isCompleted: !isCompleted
			})
		} catch (error) {
			alert("Something went wrong. Try again later");
			console.error(error);
		}
	}

	return (
		<li className="border-b border-gray-200">
			<div className="flex items-center justify-between py-4">
				<label className="flex items-center">
					<input type="checkbox" className="mr-2" checked={isCompleted} onChange={toggleComplete}/>
					<span>{title}</span>
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
			<textarea
				rows={1}
				placeholder="Notes..."
				className="w-full"
        value={body}
			/>
		</li>
	);
}

export default TodoItem;

TodoItem.propTypes = {
	id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  isCompleted: PropTypes.bool.isRequired
};