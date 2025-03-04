import React, { useState } from "react";
import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";

const Layout = (props) => {
    const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
    const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);

    const openLeftSidebar = () => setLeftSidebarOpen(true);
    const closeLeftSidebar = () => setLeftSidebarOpen(false);

    const openRightSidebar = () => setRightSidebarOpen(true);
    const closeRightSidebar = () => setRightSidebarOpen(false);

    return (
        <>
            <div className="xn-container">
                <Header 
                    onLeftSidebarOpen={openLeftSidebar} 
                    onRightSidebarOpen={openRightSidebar} 
                />

                {isLeftSidebarOpen && <LeftSidebar onClose={closeLeftSidebar} />}
                {isRightSidebarOpen && <RightSidebar onClose={closeRightSidebar} />}

                {props.children}

                {(isLeftSidebarOpen || isRightSidebarOpen) && (
                    <div className="xn-backdrop" onClick={() => {
                        closeLeftSidebar();
                        closeRightSidebar();
                    }}></div>
                )}
            </div>
        </>
    );
};

export default Layout;
