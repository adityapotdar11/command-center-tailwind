import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route Component={Homepage} path="/" />
                    <Route Component={Product} path="/prod" />
                </Routes>
            </Router>
        </>
    );
}

export default App;
