import React, { Fragment } from "react";
import avatar from "../img/anime.jpg";


const AboutMe = () => {

  return (
    <Fragment>

      {/* <div className="nav flex-column">
        <div>
          <img className="about" alt="" src={avatar} />
        </div>
        <div className="nav flex-column">
          <h2>Hi! I'm Nerymar Guarnizo</h2>
          <p>
          I am Front-end Developer, I really like technology, learning from new trends, which motivates me to research and be in constant learning, I like being able to contribute and acquire knowledge when working as a team.
          </p>
        </div>
      </div> */}

      <div className="flex-column">
        <h2>Who Am I?</h2>
        <div className="card">
          <img className="card-img-top" alt="" src={avatar}/>
          <div className="card-body">
          <p className="card-text">I am Front-end Developer, I really like technology, learning from new trends, which motivates me to research and be in constant learning, I like being able to contribute and acquire knowledge when working as a team.</p>
          </div>
        </div>
      </div>

   

    </Fragment>
  );
};

export default AboutMe;
