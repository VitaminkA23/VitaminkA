import React from 'react';
import './Cardss2.scss'

const Cardss2 = ({name, image, description}) => {
    return (
        <div className={"cardss2"}>
            <img src={image} className="img" alt= "img"/>
            <p>{description}</p>
            <input className="input" type={"button"} name="More" value="More"/>
        </div>
    );
};

export default Cardss2;