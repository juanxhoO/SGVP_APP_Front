import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import useAuthStore from "../store/useAuthStore";

function AppLayout() {

    const isAuthenticated = useAuthStore(state => state.isAuthenticated)
    return (
        <>
            <div style={{ display: 'flex', minHeight:'88vh' }}>
                <Header />
                <div style={{ marginTop: '4rem', flexGrow: 1, overflow: 'hidden' }}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default AppLayout