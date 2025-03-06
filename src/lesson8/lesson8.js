import React from 'react';
import classes from './lesson8.module.css';
const Lesson8 = () => {
    return (
        <div>
            <div className={classes.kmaxq}>
                <div className={classes.blog}>
                    <h1>
                        Blog
                    </h1>
                </div>
                <div className={classes.divan}>
                    <div className={classes.esim}></div>
                    <div className={classes.text}>
                        <div>
                            <h1 className={classes.text2}>
                            Why do we use it?
                            </h1>
                        </div>
                        <div>
                            <p className={classes.text3}>
                                It is a long established fact that a reader will be distracted by the readable content
                                a page when looking at its layout. There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected humour,
                                or randomised words which don't
                                look even slightly believable.
                            </p>
                        </div>
                        <div>
                            <input type={"button"} name={"More"} className={classes.input} value="MORE"/>
                        </div>
                    </div>
                </div>
                <div className={classes.divan}>
                    <div className={classes.esim2}></div>
                    <div className={classes.text}>
                        <div>
                            <h1 className={classes.text2}>
                            Why do we use it?
                            </h1>
                        </div>
                        <div>
                            <p className={classes.text3}>
                                It is a long established fact that a reader will be distracted by the readable content
                                a page when looking at its layout. There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some form, by injected humour,
                                or randomised words which don't
                                look even slightly believable.

                            </p>
                        </div>
                        <div>
                            <input type={"button"} name={"More"} className={classes.input} value="MORE" />
                        </div>
                    </div>
                </div>
                <div className={classes.ulik}>
                    <ul className={classes.ul}>
                        <li className={classes.li2}>START</li>
                        <li className={classes.li}>PREV</li>
                        <li className={classes.li}>1</li>
                        <li className={classes.li}>2</li>
                        <li className={classes.li}>3</li>
                        <li className={classes.li}>NEXT</li>
                        <li className={classes.li1}>END</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Lesson8;