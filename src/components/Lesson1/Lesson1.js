import React from 'react';
import './lesson1.scss'
import GrowMax from "../Grow/GrowMax";
import Nav from "../Nav/Nav";
import Img from "../Img/Img";
import Feature from "../Feature/Feature";
import Fruits from "../Fruits/Fruits";
import More from "../More/More";

const Lesson1 = () => {
    return (
        <div className='lesson1'>
            <div>
                <GrowMax />
                <Nav/>
                <Img/>
                <Feature/>
                <Fruits/>
                <More/>
            </div>
        </div>
    );
};

export default Lesson1;