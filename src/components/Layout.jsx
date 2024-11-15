import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
	return (
		<section className="bg-gray-50 dark:bg-gray-900 relative">
			<Navbar />
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
					Todo List App
				</h1>
				<Outlet />
			</div>
		</section>
	);
}

export default Layout;

