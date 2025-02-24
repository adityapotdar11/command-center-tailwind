import React, { useState } from "react";
import Header from "../Header";
import LeftSidebar from "../LeftSidebar";

const Layout = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);
    return (
        <>
            <div className="xn-container">
                <Header onSidebarOpen={openSidebar} />
                {isSidebarOpen && <LeftSidebar onClose={closeSidebar} />}
                {props.children}
                {isSidebarOpen && <div class="xn-backdrop"></div>}
            </div>
        </>
    );
};

export default Layout;
