import React from "react";
import Header from "../Header";

const Layout = (props) => {
    return (
        <>
            <div className="xn-container">
                <Header />
                {props.children}
            </div>
        </>
    );
};

export default Layout;
