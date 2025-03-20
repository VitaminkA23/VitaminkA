import React from 'react';
import './cardsTariff.scss'

const CardsTariff = () => {
    return (
            <div className="lesson2">
                <div className="starter">
                    <div className="starter2">
                        STARTER
                    </div>
                    <div className="free">
                        FREE
                    </div>
                    <div className="more">
                        <div className="border">1GB Storage</div>
                        <div className="border">2 Clients</div>
                        <div className="border">5 Active Project</div>
                        <div className="border">5 Colors</div>
                        <div className="border">Free Goodies</div>
                        <div className="border">24/7 Email support</div>
                        <div>
                            <input className="button" type={"button"} value="BUY NOW"/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CardsTariff;