import React from 'react';
import './img.scss'
import red from "../../assets/images/red.jpg";

const Img = () => {
    return (
        <div className="responsive">
            <img className="img" src={red} alt="Red Image" />
        </div>
    );
};

export default Img;