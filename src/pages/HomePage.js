import React from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import HomepageContent from "../components/HomePageContent/HomePageContent"

const HomePage = () => {
    return (
        <div>
            <Header />
            <HomepageContent />
            <Footer />
        </div>
    );
};

export default HomePage;