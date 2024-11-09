import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

function Login() {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const navigate = useNavigate();

  const handleAuth = async () => {
    try {
			setError("");
			setIsSubmitting(true);
			await login(email, password);
			navigate('/');
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-credential':
          setError("User doesn't exist");
          break;
				default:
					setError('An unknown error occurred.');
			}
			console.error("Error during account creation:", error);
    }
  }

  const handleSubmit = (e) => {
		e.preventDefault();
		handleAuth();
	};

  return (
		<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
				</h1>
				{error && <p className="text-red-600">{error}</p>}
				<form
					className="space-y-4 md:space-y-6"
					onSubmit={handleSubmit}
				>
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Your email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="name@company.com"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div className="flex items-center justify-between">
						<Link
							to="/recovery"
							className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
						>
							Forgot password?
						</Link>
					</div>
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						Sign In
					</button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Don’t have an account yet?{" "}
						<Link
							to="/signup"
							className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
						>
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login