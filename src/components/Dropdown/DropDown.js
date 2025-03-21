import React from 'react';
import './DropDown.scss';
import {Link} from "react-router";

const DropDown = () => {
    return (
        <div className={'DropDown'}>
            <div className={'kaqav'}>
                <ul>
                    <li>
                        <p className={'child1'}>
                            Home
                            <div className={'dropdown1'}>
                                <p className={'link1'}>PHP</p>
                                <p className={'link1'}>CSS</p>
                                <p className={'link1'}>HTML</p>
                                <p className={'link1'}>Javascript</p>
                            </div>
                        </p>
                    </li>
                </ul>
            </div>
            <div className={'kaqav'}>
                <ul>
                    <li>
                        <p className={'child2'}>
                            Contact
                            <div className={'dropdown2'}>
                                <p className={'link2'}>PHP</p>
                                <p className={'link2'}>CSS</p>
                                <p className={'link2'}>HTML</p>
                                <p className={'link2'}>Javascript</p>
                            </div>
                        </p>
                    </li>
                </ul>
            </div>
            <div className={'kaqav'}>
                <ul>
                    <li>
                        <p className={'child3'}>
                            Contact
                            <div className={'dropdown3'}>
                                <p className={'link3'}>PHP</p>
                                <p className={'link3'}>CSS</p>
                                <p className={'link3'}>HTML</p>
                                <p className={'link3'}>Javascript</p>
                            </div>
                        </p>
                    </li>
                </ul>
            </div>
            <div className={'kaqav'}>
                <ul>
                    <li>
                        <p className={'child4'}>
                            Contact
                            <div className={'dropdown4'}>
                                <p className={'link4'}>PHP</p>
                                <p className={'link4'}>CSS</p>
                                <p className={'link4'}>HTML</p>
                                <p className={'link4'}>Javascript</p>
                            </div>
                        </p>
                    </li>
                </ul>
            </div>
            <div className={'kaqav'}>
                <ul>
                    <li>
                        <p className={'child5'}>
                            Contact
                            <div className={'dropdown5'}>
                                <p className={'link5'}>PHP</p>
                                <p className={'link5'}>CSS</p>
                                <p className={'link5'}>HTML</p>
                                <p className={'link5'}>Javascript</p>
                            </div>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropDown;