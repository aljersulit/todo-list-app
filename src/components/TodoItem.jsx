import PropTypes from 'prop-types';


function TodoItem({title, body, isCompleted}) {
	return (
		<li className="border-b border-gray-200">
			<div className="flex items-center justify-between py-4">
				<label className="flex items-center">
					<input type="checkbox" className="mr-2" checked={isCompleted}/>
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
  title: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  isCompleted: PropTypes.node.isRequired
};