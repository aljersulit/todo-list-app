import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";

import Layout from "./components/Layout";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";
import TodoList from "./components/TodoList";
import PrivateRoute from "./components/Auth/PrivateRoute";
import NotFound from "./components/NotFound";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route
							index
							element={
								<PrivateRoute>
                  <TodoProvider>
									  <TodoList />
                  </TodoProvider>
								</PrivateRoute>
							}
						/>
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route path="recovery" element={<ForgotPassword />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
