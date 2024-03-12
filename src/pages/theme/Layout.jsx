import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div>
            <div classNameName="container">
                <div className="header">
                    <Header />
                </div>

                <div className="main-body">
                    <div className="content">
                        <div className="post">
                            <h2>Post Title</h2>
                            <p>Post Content</p>
                        </div>
                        <div className="post">
                            <h2>Post Title</h2>
                            <p>Post Content</p>
                        </div>
                        <div className="post">
                            <h2>Post Title</h2>
                            <p>Post Content</p>
                        </div>
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