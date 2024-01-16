import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


function AppLayout() {
    return (
        <>
            <Header />
            <div style={{ minHeight:'80vh', marginTop:'68px',display: 'flex' }}>
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default AppLayout





