import React from 'react';
import './lup.scss';

const Lup = () => {
    return (
        <div className={'parent'}>
            <div className={'child'}>
                STARTER
            </div>
            <div className={'child2'}>
                FREE
            </div>
            <div className={'child3'}>
                <div className={'children'}>
                    1GB Storage
                </div>
                <div className={'children'}>
                    2 Clients
                </div>
                <div className={'children'}>
                    5 Active Projects
                </div>
                <div className={'children'}>
                    5 Colors
                </div>
                <div className={'children'}>
                    Free Goodies
                </div>
                <div className={'children'}>
                    24/7 Email support
                </div>
                <div className={'children'}>
                    <input className={'button'} type={'button'} value={'BUY NOW'}/>
                </div>
            </div>

        </div>
    );
};

export default Lup;