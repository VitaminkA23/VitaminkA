import React from 'react';
// import classes from './lesson11.module.css';
const Lesson11 = () => {
    return (
        <div className={classes.lesson11}>
            <header className={classes.header}>
                <div>
                    HOME
                </div>
                <div>
                    USER LOGIN
                </div>
            </header>
            <div className={classes.divan}>
            <div className={classes.travel}>
                <h1>
                    TrevelJoy
                </h1>
            </div>
            <div className={classes.navak}>
                <div className={classes.divik}>
                    <a href={"https://youtu.be/DksSPZTZES0?si=m1tAskGnwEaUkMvQ"} className={classes.link}>
                        HOME
                    </a>
                </div>
                <div className={classes.divik}>
                    <a href={"https://youtu.be/TOrnUquxtwA?si=54G-ocxyqs0EqshR"} className={classes.link}>
                       ABOUT
                    </a>
                </div>
                <div className={classes.divik}>
                    <a href={"https://youtu.be/5RDSkR8_AQ0?si=o-HGRgyY3nzh3fbQ"} className={classes.link} >
                      GALLERY
                    </a>
                </div>
                <div className={classes.divik}>
                    <a href={"https://youtu.be/UnTvJlQpRY0?si=f93xPxlbgHqBdA-0"} className={classes.link}>
                        BLOG
                    </a>
                </div>
                <div className={classes.contact}>
                    <a href={"https://youtu.be/JXRN_LkCa_o?si=6Q_fVUBuxUbsW5N1"} className={classes.link}>
                        CONTACTS
                    </a>
                    <div className={classes.social}>
                        <a href={"https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"}>
                            <div className={classes.fb}></div>
                        </a>
                       <a href={"https://www.instagram.com/accounts/login/"}>
                           <div className={classes.insta}></div>
                       </a>
                        <a href={"https://x.com/"}>
                            <div className={classes.twitter}></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={classes.divan2}>
                <div className={classes.ator}>
                    <div className={classes.photo}></div>
                    <div className={classes.text}>
                        <div className={classes.text2}>
                            There is no minimum
                        </div>
                        <div  className={classes.text3}>
                            Internet tend to repeat predefined chunks as necessary, making this the first true
                            generator on the Internet
                        </div>
                        <div className={classes.price}>
                            333$ <input type={"button"} name={"More"} className={classes.input} value="MORE"/>
                        </div>
                    </div>
                </div>
                <div  className={classes.ator}>
                    <div className={classes.photo4}></div>
                    <div className={classes.text}>
                        <div className={classes.text2}>
                            There is no minimum
                        </div>
                        <div  className={classes.text3}>
                            Internet tend to repeat predefined chunks as necessary, making this the first true
                            generator on the Internet
                        </div>
                        <div className={classes.price}>
                            333$ <input type={"button"} name={"More"} className={classes.input} value="MORE"/>
                        </div>
                    </div>
                </div>
                <div  className={classes.ator}>
                    <div className={classes.photo3}></div>
                    <div className={classes.text}>
                        <div className={classes.text2}>
                            There is no minimum
                        </div>
                        <div className={classes.text3}>
                            Internet tend to repeat predefined chunks as necessary, making this the first true
                            generator on the Internet
                        </div>
                        <div className={classes.price}>
                            333$ <input type={"button"} name={"More"} className={classes.input} value="MORE"/>
                        </div>
                    </div>
                </div>
                <div  className={classes.ator}>
                    <div className={classes.photo2}></div>
                    <div className={classes.text}>
                        <div className={classes.text2}>
                            There is no minimum
                        </div>
                        <div  className={classes.text3}>
                            Internet tend to repeat predefined chunks as necessary, making this the first true
                            generator on the Internet
                        </div>
                        <div className={classes.price}>
                            333$ <input type={"button"} name={"More"} className={classes.input} value="MORE"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <footer className={classes.footer}>
                TRAVEL JOY (C) 2023
            </footer>
        </div>
    );
};

export default Lesson11;