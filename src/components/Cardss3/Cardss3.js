import React from 'react';
import './Cardss3.scss';

const Cardss3 = ({name, image, description}) => {
    return (
        <div className={'cardss3'}>
            <div className={'child'}>
                <img src={image} className="img" alt= "img"/>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Cardss3;