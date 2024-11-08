import { useState } from "react";
import { signup, login, passwordValidate } from "../../services/authService";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSignUp, setIsSignUp] = useState(false);
  const [errors, setErrors] = useState([]);

	const handleAuth = async () => {
		try {
      const status = await passwordValidate(password);
      if (!status.isValid) {
        setErrors(["Password must be atleast 6 characters long"]);
      } else if (isSignUp) {
				signup(email, password).then((userCredential) => {
					if (userCredential.user) {
						setEmail("");
						setPassword("");
					}
				});
			} else {
				login(email, password).then((userCredential) => {
					if (userCredential.user) {
						setEmail("");
						setPassword("");
					}
				});
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAuth();
	};

	return (
		<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					{isSignUp
						? "Sign up for new account"
						: "Sign in to your account"}
				</h1>
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
            {errors && <p style={{ color: "red" }}>{errors}</p>}
					</div>
					<div className="flex items-center justify-between">
						<a
							href="#"
							className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
						>
							Forgot password?
						</a>
					</div>
					<button
						type="submit"
						className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						{isSignUp ? "Sign Up" : "Sign In"}
					</button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Don’t have an account yet?{" "}
						<a
							onClick={() => setIsSignUp(!isSignUp)}
							className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
						>
							{isSignUp ? "Sign In" : "Sign Up"}
						</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Auth;

