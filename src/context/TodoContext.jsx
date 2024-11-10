import { createContext, useContext, useReducer } from "react";
import useTodos from "../hooks/useTodos";
import PropTypes from "prop-types";
import { useAuth } from "./AuthContext";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

const initialTodos = {
	todos: [],
	newTodo: "",
};

function todoReducer(state, action) {
	switch (action.type) {
		case "FETCH_TODOS":
			return {
				...state,
				todos: action.payload,
			};
    case "SET_NEW_TODO":
      return {
        ...state,
        newTodo: action.payload
      }
    case "ADD_NEW_TODO":
      return {
        ...state,
        newTodo: ""
      }
		default:
			return state;
	}
}

export const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const currentUser = useAuth();
	useTodos(currentUser, dispatch);

	return (
		<TodoContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};

TodoProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
