import React from 'react';
import './ComponenttP.scss';


const ComponenttP = () => {
    return (
        <div className={'componentP'}>
            <nav className={'navak'}>
                <div className={'div'}>
                    <a>
                       Home
                    </a>
                </div>
                <div className={'div'}>
                    <a>
                       Blog
                    </a>
                </div>
                <div className={'div'}>
                    <a>
                        Features
                    </a>
                </div>
                <div className={'div'}>
                    <a>
                        Contact
                    </a>
                </div>
            </nav>
            <nav className={'navak2'}>
                <div className={'div2'}>
                    <a>
                        PC
                    </a>
                </div>
                <div className={'div2'}>
                    <a>
                        XBOX360
                    </a>
                </div>
                <div className={'div2'}>
                    <a>
                        Ps3
                    </a>
                </div>
                <div className={'div2'}>
                    <a>
                        PSP
                    </a>
                </div>
                <div className={'div'}>
                    <a>
                        MOBILE
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default ComponenttP;