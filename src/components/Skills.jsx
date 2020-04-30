import React, { Fragment } from 'react'
// import ScrollableAnchor from "react-scrollable-anchor"
import html5 from "../img/html5.png"
import css from "../img/css.png"
import javaScript from "../img/javascript.png"
import firebase from "../img/firebase.png"
import git from "../img/git.png"
import github from "../img/github.png"
import react from "../img/react.png"
import visual from "../img/visual.png"



const Skills = () => {
    return ( 
        <Fragment>
         

            <div className="flex-column" >
            <h1>My Skills</h1>
                <div className="generalContainer">
                    <div className="oneContainer alignCenterColumn noPadding">
                        <div className="iconosContainer">
                        <img src={html5} alt="" width={80}/>
                        <img src={css} alt="" width={80}/>
                        <img src={javaScript} alt="" width={80}/>
                        <img src={firebase} alt="" width={80}/>
                        </div>
                        <div className="iconosContainer">
                        <img src={git} alt="" width={80}/>
                        <img src={github} alt="" width={80}/>
                        <img src={react} alt="" width={80}/>
                        <img src={visual} alt="" width={80}/>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
     );
}
 
export default Skills;