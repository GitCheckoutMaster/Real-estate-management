/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Login",
            path: "/login"
        },
        {
            name: "Signup",
            path: "/signup"
        },
    ]

    return (
        <header>
            <span>Real Estate </span>
            {navItems.map((item, index) => {
                return (
                    <Link key={index} to={item.path}>{item.name} </Link>
                )
            })}
        </header>
    )
}

export default Header;