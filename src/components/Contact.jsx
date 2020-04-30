import React, { Fragment } from "react";
import github from "../img/github.png";
import correo from "../img/correo.png";
import linkedin from "../img/linkedin.png";

const Contact = () => {
  return (
    <Fragment>
      <div className="flex-column">
        <h1>Contact</h1>
        <h4> If you want to know more about my professional profile ¡Contact me!</h4>

        <div className="container row">
        <div className="flex-column">
        <a href="mailto:nerymar.guarni@gmail.com" target="blank">
            <img src={correo} alt="Email" width={80}/>
            <p>Correo</p>
        </a>
        </div>
        <div className="flex-column">
        <a href="https://www.linkedin.com/in/nerymarguarnizo/" target="blank">
            <img src={linkedin} alt="Linkedin" width={80} />
            <p> LinkedIn</p>
        </a>
        </div>
        <div className="flex-column">
        <a href="https://github.com/Yu-Koi" target="blank">
          {" "}
            <img src={github} alt="Github" width={80} />
            <p>Github</p>
        </a>
        </div>
      </div>
      </div>


      
    </Fragment>
  );
};

export default Contact;
