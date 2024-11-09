import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
		e.preventDefault();
		// handleAuth();
	};

  return (
		<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign up for new account
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
            {/* {errors && <p style={{ color: "red" }}>{errors}</p>} */}
					</div>
          <div>
						<label
							htmlFor="confirm_password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Password Confirmation
						</label>
						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
            {/* {errors && <p style={{ color: "red" }}>{errors}</p>} */}
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
						Sign Up
					</button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Have an account?{" "}
						<a
							href="#"
							className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
						>
							Sign In
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Signup