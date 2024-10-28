/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux"
import { logout } from "../store/userSlice.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import conf from "../conf/conf.js";

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        axios.post(`${conf.backendUrl}/user/logout`, {}, { withCredentials: true })
            .then((res) => {
                if (res.status == 200) {
                    dispatch(logout());
                    navigate("/login");
                } else {
                    console.log("Failed to logout");
                    console.log(res);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <button type="button" className="text-white hover:text-blue-500" onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn
