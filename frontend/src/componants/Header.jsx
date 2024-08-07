/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const navItems = [
		{
			name: "Home",
			path: "/",
			active: true,
		},
		{
			name: "Login",
			path: "/login",
			active: true,
		},
		{
			name: "Signup",
			path: "/signup",
			active: true,
		},
	];

	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    <span>Real</span>
                    <span className="font-bold text-blue-300">Estate</span>
                </span>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="flex px-3 gap-6">
						{
                            navItems.map((item, index) => {
								if (!item.active) {
									return null;
								}
                                return (
									<li key={index}>
										<Link to={item.path} className="text-white hover:text-blue-500">
											{item.name}
										</Link>
                                	</li>
								)
							})
                        }
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
