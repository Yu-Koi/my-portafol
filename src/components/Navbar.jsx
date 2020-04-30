import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../img/nerymarg.jpg";


const Navbar = () => {
  return (
    <Fragment>
    <div className="navbar nav flex-column navbar-dark bg-dark">
      {/* navbar-light bg-light */}
     
      <div className="nav flex-column">
        <div className="nav flex-column">
        <img className="avatar" alt="" src={avatar} />
        </div>
        <Link to="/" className="navbar-brand">
            Nerymar Guarnizo
        </Link>
        <Link to="/" className="navbar-brand">
            Front-end Developer
        </Link>
        <div className="nav nav-pills nav-fill flex-column">
          <NavLink className="nav-link btn btn-dark mr-2 my-1" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav-link btn btn-dark mr-2 my-1" to="/about">
            About Me
          </NavLink>
          <NavLink className="nav-link btn btn-dark mr-2 my-1" to="/skills">
            Skills
          </NavLink>
          <NavLink className="nav-link btn btn-dark mr-2 my-1" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-link btn btn-dark mr-2 my-1" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Navbar;
