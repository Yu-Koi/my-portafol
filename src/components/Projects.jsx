import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import github from "../img/github.png";
import deploy from "../img/deploy.png";
import redsocial from "../img/redsocial.png";
import burgerQueen from "../img/burgerQueen.png";
import movie from "../img/movie.png";

const Projects = () => {
  return (
    <Fragment>
      <div>
        <h1>
          <strike>
            <kbd>Projects</kbd>
          </strike>
        </h1>
      </div>
      <CardDeck className="gridContainer">
        <Card>
          <Card.Img variant="top" src={burgerQueen} />
          <Card.Body>
            <Card.Title>
              <strike>
                <kbd>Burger-Queen</kbd>
              </strike>
            </Card.Title>
            <Card.Text>
              Es una app en diseñada para tablet donde el o la mesero/a puede
              tomar un pedido con mayor rapidez, evitando errores de escritura y
              permitiendo agregar en segundos la comanda a la lista de pedidos
              en cola de la cocina.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <h5> Javascript - Html5 - Css3 - Firebase - Bootstrap </h5>
          </Card.Footer>
          <Card.Footer>
            <Card.Link
              href="https://github.com/Yu-Koi/SCL012-burger-queen"
              target="blank"
            >
              <img src={github} alt="Github" width={50} />
            </Card.Link>
            <Card.Link
              href="https://burger-queen-3a295.firebaseapp.com/"
              target="blank"
            >
              <img src={deploy} alt="Deploy" width={50} />
            </Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={movie} />
          <Card.Body>
            <Card.Title>
              <strike>
                <kbd>Movies-Lovers</kbd>
              </strike>
            </Card.Title>
            <Card.Text>
              Es una app diseñada para amantes de las peliculas donde podran
              encontrar informacion relevante a su pelicula favorita asi como
              tan bien unas simpaticas trivias para los amantes de Marvel y DC
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <h5> Javascript - Html5 - Css - Firebase - Figma - Loom</h5>
          </Card.Footer>
          <Card.Footer>
            <Card.Link
              href="https://github.com/Yu-Koi/SCL012-Movies-Lovers"
              target="blank"
            >
              <img src={github} alt="Github" width={50} />
            </Card.Link>
            <Card.Link
              href="https://npgonzalez.github.io/SCL012-Movies-Lovers/src/"
              target="blank"
            >
              <img src={deploy} alt="Deploy" width={50} />
            </Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={redsocial} />
          <Card.Body>
            <Card.Title>
              <strike>
                <kbd>Red Social</kbd>
              </strike>
            </Card.Title>
            <Card.Text>
              "Viviendo en Chile" es una aplicación que entrega información
              necesaria a los inmigrantes de habla hispana que recién llegan a
              Chile, esta plataforma les permite conocer ofertas de empleo,
              trámites de visa, arriendos, todo en un sólo lugar.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <h5> Javascript - Html5 - Css - Firebase - Figma - Loom</h5>
          </Card.Footer>
          <Card.Footer>
            <Card.Link
              href="https://github.com/Yu-Koi/SCL012-Social-Network"
              target="blank"
            >
              <img src={github} alt="Github" width={50} />
            </Card.Link>
            <Card.Link
              href="https://red-social-94f04.firebaseapp.com/#/SignUp"
              target="blank"
            >
              <img src={deploy} alt="Deploy" width={50} />
            </Card.Link>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Fragment>
  );
};

export default Projects;
