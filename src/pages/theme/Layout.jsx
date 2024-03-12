import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import Post from "./Post";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div classNameName="container">
                <div className="header">
                    <Header />
                </div>

                <div className="main-body">
                    <div className="content">
                        {/* <Post /> */}
                        <Outlet />
                       
                    </div>
                    <div className="sidebar">
                        <SideBar />
                        
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>

            </div>
        </div>
    );
}

export default Layout;