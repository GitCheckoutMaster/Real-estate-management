/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn.jsx";

const Header = () => {
	const status = useSelector((state) => state.auth.status)

	const navItems = [
		{
			name: "Home",
			path: "/",
			active: true,
		},
		{
			name: "Projects",
			path: "/list",
			active: true
		},
		{
			name: "Login",
			path: "/login",
			active: status ? false : true,
		},
		{
			name: "Signup",
			path: "/signup",
			active: status ? false : true,
		},
		{
			name: "Profile",
			path: '/profile',
			active: status,
		},
	];

	return (
		<nav className="bg-gray-50 border-gray-200 text-black">
			<div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 text-lg tracking-wider">
                <span className="self-center text-4xl font-semibold whitespace-nowrap">
                    <span>Aashray</span>
                    <span className="font-bold text-blue-300">Realty</span>
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
										<Link to={item.path} className="hover:text-blue-500">
											{item.name}
										</Link>
                                	</li>
								)
							})
                        }
						{status && <LogoutBtn />}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
