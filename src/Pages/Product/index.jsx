import React from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <>
            <Layout>
                <p>
                    <Link to="/">This</Link> goes to home page
                </p>
                <p>This is product page</p>
            </Layout>
        </>
    );
};
export default Product;
