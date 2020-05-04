import React, { useState, Fragment } from "react";
import sliderUno from "../img/sliderUno.jpg";
import { Carousel } from "react-bootstrap";
import laboratoria from "../img/laboratoria.png";
import CVNerymarGuarnizo from "../img/CVNerymarGuarnizo.pdf";

const Carrusell = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Fragment>
      <div className=" gridComponent">
        <Carousel
          className=" gridComponent"
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={sliderUno} alt="First slide" />
            <Carousel.Caption>
              <h4>Hi!</h4>
              <h5>I'm Nerymar Guarnizo</h5>
              <a href={CVNerymarGuarnizo} target="blank">
                <button>Download CV</button>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderUno} alt="Second slide" />
            <Carousel.Caption>
              <h4>I am</h4>
              <h5>a Front-end Developer</h5>
              <a
                href="https://app.talento.laboratoria.la/profile/Eg3ZA1pb4IhU5bZ3iqRfi5lOs1q1"
                target="blank"
              >
                <button>
                  <img src={laboratoria} alt="icono" width={100} />
                </button>
              </a>
              <p>Talent Lab</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Carrusell;
