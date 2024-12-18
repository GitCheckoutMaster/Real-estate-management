/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useDispatch } from "react-redux";
import { logout } from "./store/userSlice.js";
import axios from "axios";
import conf from "./conf/conf.js";
import {jwtDecode} from 'jwt-decode';
import Cookies from "js-cookie";


function isTokenExpired(token) {
	if (!token) return true;

	try {
		const { exp } = jwtDecode(token); // Decode token to get exp
		const currentTime = Date.now() / 1000; // Current time in seconds
		return exp < currentTime; // Check if token is expired
	} catch (error) {
		return true; // Any error decoding implies expired or invalid token
	}
}

function App() {
	const dispatch = useDispatch();

	// axios.interceptors.response.use(
	// 	(response) => response,
	// 	(error) => {
	// 		if (error.response && error.response.status === 405) {
	// 			dispatch(logout());
	// 		}
	// 		return Promise.reject(error);
	// 	}
	// );

	useEffect(() => {
		const token = Cookies.get("token");
		if (isTokenExpired(token) || !token) {
			dispatch(logout());
		}
	}, [dispatch]);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
