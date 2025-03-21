import React from 'react';
import './growMax.scss'
import red from "../../assets/images/lo.png";
import fb from "../../assets/images/fb.jpg";
import insta from "../../assets/images/insta.png";
import telegram from "../../assets/images/telegram.png";


const GrowMax = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo' src={red} alt='GrowMax' />
                GROWMAX
            </div>
            <div className='social'>
                <img className="media" src={fb} alt='GrowMax' />
                <img className="media" src={insta} alt='GrowMax' />
                <img className="media" src={telegram} alt='GrowMax' />
            </div>
        </div>
    );
};

export default GrowMax;