import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const userData = useSelector((state) => state.auth.userData);
    console.log(userData);

    return (
        userData ? <Outlet /> : <Navigate to="signup/" />
    );
};

export default PrivateRoute;