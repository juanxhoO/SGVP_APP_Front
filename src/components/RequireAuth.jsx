import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

 
const RequireAuth = () => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated)

    const location = useLocation();

    return (
        isAuthenticated
            ? <Outlet />
            : <Navigate to='/authentication/sign-in' state={{ from: location }} replace />
    )
}

export default RequireAuth