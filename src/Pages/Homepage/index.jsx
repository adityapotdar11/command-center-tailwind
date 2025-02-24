import React from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <>
            <Layout>
                <p>
                    <Link to="/prod">This</Link> goes to product page
                </p>
                <p>This is homepage</p>
            </Layout>
        </>
    );
};

export default Homepage;
