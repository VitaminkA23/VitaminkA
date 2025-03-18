import React from "react";
import './cards.scss'

const Cards  = ({name, image, description}) => {
    return (
        <div className="cards">
            <img src={image} className="cardsimg" alt= "product image"/>
            <p>{description}</p>
            <input className="button" type={"button"} name="More" value="More"/>
        </div>
    );
};

export default Cards;