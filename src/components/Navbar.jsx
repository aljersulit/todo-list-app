import { useAuth } from "../context/AuthContext";
import { logout } from "../services/authService";
import todoLogo from "../assets/todoLogo.png";

function Navbar() {
  const currentUser = useAuth();
  
  async function handleLogout() {
    try {
        await logout();
    } catch (error) {
      switch(error.code) {
        case "auth/network-request-failed":
          alert("Request Failed. Please check your internet connection");
          break;
        case "auth/operation-not-allowed":
          alert("Operation not allowed");
          break;
        default:
          alert("Sign-out failed. Please try again later.");
      }
      console.error('Error signing out:', error);
    }
  }

	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900 absolute w-full">
			<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
				<a
					href="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img
						src={todoLogo}
						className="h-8 scale-150"
						alt="Todo Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white translate-x-4">
						My Todo App
					</span>
				</a>
				<div className="flex items-center space-x-6 rtl:space-x-reverse">
					{currentUser && (
            <>
              <a
                href="tel:5541251234"
                className="text-sm  text-gray-500 dark:text-white hover:underline"
              >
                {currentUser.email}
              </a>
              <button
                onClick={handleLogout}
                className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Logout
              </button>
            </>
          )}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
