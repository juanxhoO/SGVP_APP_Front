import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import useAuthStore from "../store/useAuthStore";

function AppLayout() {

    const isAuthenticated = useAuthStore(state => state.isAuthenticated)
    return (
        <>
            <Header />
            <div style={{ minHeight: '80vh', display: 'flex' }}>
                {isAuthenticated ? <Sidebar /> : null}
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default AppLayout