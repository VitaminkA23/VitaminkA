import React from 'react';
// import "./lesson4.css"

const Lesson4 = () => {
    return (
        <div className="back">
        <div className="back2">
            <div className="divan">
                First Name
                <div>
                    <input type={"text"} placeholder={"First Name"} />
                </div>
            </div>
            <div className="divan">
                Last Name
                <div>
                     <input type={"text"} placeholder={"Last Name"}/>
                </div>
            </div>
            <div className={"divan"}>
                Passwoord
                <div>
                     <input type={"password"} placeholder={"Password"}/>
                </div>
            </div>
            <div className={"divan"}>
                Yes or No?
                <div>
                    <label className={"yes"}>
                     Yes <input type={"radio"} name={"no"} value={"yes"} id={"Yes"}/>
                     No <input type={"radio"} name={"no"} value={"no"} id={"No"}/>
                    </label>
                </div>
            </div>
            <div className={"divan"}>
                No or Yes?
                <div>
                    <label className={"yes"}>
                    Yes <input type={"checkbox"} name={"no"} />
                    No <input type={"checkbox"} name={"yes"} />
                    Maybe <input type={"checkbox"} name={"maybe"}/>
                    </label>
                </div>
            </div>
            <div className={"divan"}>
                Select Item
                <div>
                <select name={"Lorem"}>
                    <option>Lorem</option>
                    <option>Ipsum</option>
                </select>
                </div>
            </div>
        </div>
        </div>




    );
};

export default Lesson4;