import React, { Fragment } from "react";
import github from "../img/github.png";
import correo from "../img/correo.png";
import linkedin from "../img/linkedin.png";
import cel from "../img/cel.jpg";

const Contact = () => {
  return (
    <Fragment>
      <div className="flex-column gridComponent">
        <h1>
          <strike>
            <kbd>Contact:</kbd>
          </strike>
        </h1>
        <h4>
          {" "}
          If you want to know more about my professional profile ¡Contact me!
        </h4>
        <div className="row">
          <div className="flex-column"></div>
          <div className="flex-column">
            <a href="mailto:nerymar.guarni@gmail.com" target="blank">
              <img src={correo} alt="Email" width={80} />
              <p>
                <strike> Email</strike>
              </p>
            </a>
          </div>
          <div className="flex-column">
            <a
              href="https://www.linkedin.com/in/nerymarguarnizo/"
              target="blank"
            >
              <img src={linkedin} alt="Linkedin" width={80} />
              <p>
                <strike> LinkedIn</strike>
              </p>
            </a>
          </div>
          <div className="flex-column">
            <a href="https://github.com/Yu-Koi" target="blank">
              {" "}
              <img src={github} alt="Github" width={80} />
              <p>
                <strike> Github</strike>
              </p>
            </a>
          </div>
        </div>
        <div className="flex-column">
          {" "}
          <img src={cel} alt="Phone" width={80} />
          <span>Phone: +56 930336505</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
