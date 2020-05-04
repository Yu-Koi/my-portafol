import React, { Fragment } from "react";
import avatarr from "../img/avatarr.png";

const AboutMe = () => {
  return (
    <Fragment>
      <div className="gridComponent container flex-column">
        <h2>
          <strike>
            <kbd>Who Am I?</kbd>
          </strike>
        </h2>
        <div className="card">
          <img className="card-img-top" alt="" src={avatarr} />
          <div className="card-body">
            <p>
              <kbd className="card-text">
                I am Front-end Developer, I really like technology, learning
                from new trends, which motivates me to research and be in
                constant learning, I like being able to contribute and acquire
                knowledge when working as a team.
              </kbd>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
