import React, { Fragment } from "react";
import html5 from "../img/html5.png";
import css from "../img/css.png";
import javaScript from "../img/javascript.png";
import firebase from "../img/firebase.png";
import git from "../img/git.png";
import github from "../img/github.png";
import react from "../img/react.png";
import visual from "../img/visual.png";
import pacman from "../img/pacman.png";
import Spinner from "react-bootstrap/Spinner";

const Skills = () => {
  return (
    <Fragment>
      <div className="flex-column gridComponent">
        <h2>
          <strike>
            <kbd>My Skills</kbd>
          </strike>
        </h2>
      </div>
      <div className="row gridComponent">
        <div className="container row gridComponent">
          <img src={pacman} alt="" height={120} width={150} />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="success" />
          <img src={javaScript} alt="" width={80} />
          <img src={react} alt="" width={70} />
          <img src={html5} alt="" width={80} />
          <img src={css} alt="" width={80} />
          <img src={git} alt="" width={70} />
          <img src={visual} alt="" width={70} />
          <img src={firebase} alt="" width={80} />
          <img src={github} alt="" width={70} />
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
