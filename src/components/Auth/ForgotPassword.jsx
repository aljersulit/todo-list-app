import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../../services/authService";

function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [isRecoveryEmailSent, setIsRecoveryEmailSent] = useState(false);
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleAuth = () => {
		setError("");
		setIsSubmitting(true);
		resetPassword(email)
			.then(() => {
				setIsRecoveryEmailSent(true);
        setIsSubmitting(false);
			})
			.catch((error) => {
				switch (error.code) {
					case "auth/invalid-email":
						setError("Invalid Email");
						break;
					default:
						setError("An unknown error occurred.");
				}
				console.error("Error during account recovery:", error);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAuth();
	};

	return (
		<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Reset Password
				</h1>
				{error && <p className="text-red-600">{error}</p>}
				<form
					className="space-y-4 md:space-y-6"
					onSubmit={handleSubmit}
				>
					{!isRecoveryEmailSent ? (
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
					) : (
						<>
							<p className="text-lime-400">
								Password reset email sent successfully!{<br />}{" "}
								Please check your email.
							</p>
						</>
					)}
					<button
						type="submit"
						disabled={isSubmitting || isRecoveryEmailSent}
						className="disabled:opacity-55 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						Reset Password
					</button>
					<p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
						<Link
							to="/login"
							className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
						>
							Log In
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default ForgotPassword;

