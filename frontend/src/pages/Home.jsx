/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";  

const Home = () => {
    const userdata = useSelector((state) => state.auth.userData);
    return (
        <div>
            <h1>Home</h1>
            <h1>user is {userdata?.isAdmin}</h1>
            <h1>Data: {userdata?.name} </h1>
        </div>
    )
}

export default Home