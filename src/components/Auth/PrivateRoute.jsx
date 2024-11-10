import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { useAuth } from "../../context/AuthContext";

function PrivateRoute({ children }) {
	const { currentUser } = useAuth();

	return currentUser ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
