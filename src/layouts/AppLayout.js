import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


function AppLayout() {
    return (
        <div className="App">
            <Header />

            <div style={{ display: 'flex' }}>

                <Sidebar />
                <Outlet />

            </div>
            <Footer />
        </div>
    )
}
export default AppLayout





