import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";


function AppLayout() {
    return (
        <>
            <Header />
            <div style={{ minHeight: '80vh', display: 'flex' }}>
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default AppLayout





