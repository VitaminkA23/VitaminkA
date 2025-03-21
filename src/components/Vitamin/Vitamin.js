import React from 'react';
import './vitamin.scss'
import {Link} from "react-router";

const Vitamin = () => {
    return (
        <div className="vitamin">
            <div className="container">
                <ul className="navigation">
                    <li>
                        <p>
                             HOME
                            <div className={'dropdown'}>
                                <Link className={'dropLink'} to='/'>PHP</Link>
                                <Link className={'dropLink'} to='/'> CSS</Link>
                                <Link className={'dropLink'} to='/'>HTML</Link>
                                <Link className={'dropLink'} to='/'>HTML</Link>
                            </div>
                        </p>
                    </li>
                    <li>
                        <p>
                            TUTORIALS
                            <div className={'dropdown'}>
                                <Link className={'dropLink'} to='/'>PHP</Link>
                                <Link className={'dropLink'} to='/'> CSS</Link>
                                <Link className={'dropLink'} to='/'>HTML</Link>
                                <Link className={'dropLink'} to='/'>HTML</Link>
                            </div>
                        </p>
                    </li>
                    <li>
                        <p>
                        CODING
                        <div className={'dropdown'}>
                            <Link className={'dropLink'} to='/'>PHP</Link>
                            <Link className={'dropLink'} to='/'> CSS</Link>
                            <Link className={'dropLink'} to='/'>HTML</Link>
                            <Link className={'dropLink'} to='/'>HTML</Link>
                        </div>
                    </p>
                    </li>
                    <p>
                        WORDPRESS
                        <div className={'dropdown'}>
                            <Link className={'dropLink'} to='/'>PHP</Link>
                            <Link className={'dropLink'} to='/'> CSS</Link>
                            <Link className={'dropLink'} to='/'>HTML</Link>
                            <Link className={'dropLink'} to='/'>HTML</Link>
                        </div>
                    </p>
                    <p>
                        CONTACT
                        <div className={'dropdown'}>
                            <Link className={'dropLink'} to='/'>PHP</Link>
                            <Link className={'dropLink'} to='/'> CSS</Link>
                            <Link className={'dropLink'} to='/'>HTML</Link>
                            <Link className={'dropLink'} to='/'>HTML</Link>
                        </div>
                    </p>
                </ul>
            </div>
        </div>
    );
};

export default Vitamin;