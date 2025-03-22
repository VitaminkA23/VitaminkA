import React from 'react';
import './more.scss'
import backround from "../../assets/images/background.jpg";

const More = () => {
    return (
        <div className="more">
            <div className="container">
                <div className="new">
                    <p className="color">
                        NEW
                    </p>
                    <p className="color2">
                        TECHNOLOGIES
                    </p>
                </div>
                <div>
                    <img className="images" name={backround} src={backround}/>
                </div>
                <div className="info">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable.
                </div>
                <input className="button"  type={"button"} value="Read More"/>
            </div>
            <div className="container">
                <div className="new">
                    <p className="color">
                        ECO
                    </p>
                    <p className="color2">
                        SOLUTIONS
                    </p>
                </div>
                <div>
                    <img className="images" name={backround} src={backround}/>
                </div>
                <div className="info">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable.
                </div>
                <input className="button"  type={"button"} value="Read More"/>
            </div>
            <div className="container">
                <div className="new">
                    <p className="color">
                       FROST
                    </p>
                    <p className="color2">
                        PROTECTION
                    </p>
                </div>
                <div>
                    <img className="images" name={backround} src={backround}/>
                </div>
                <div className="info">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable.
                </div>
                <input className="button"  type={"button"} value="Read More"/>
            </div>
            <div className="container">
                <div className="new">
                    <p className="color">
                        PREMIUM
                    </p>
                    <p className="color2">
                        FRUITS
                    </p>
                </div>
                <div>
                    <img className="images" name={backround} src={backround}/>
                </div>
                <div className="info">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable.
                </div>
                    <input className="button" type={"button"} value="Read More"/>

            </div>
        </div>
    );
};

export default More;