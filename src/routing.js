import React from 'react';
import { BrowserRouter, Routes, Route } from  "react-router";
import HomePage from "./pages/HomePage";
import Positions from "./pages/Positions";
import Contact from "./pages/Contact";


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/position" element={<Positions/>} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;