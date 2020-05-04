import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const activeStyle = { color: "#ffffff" };
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
        <NavLink to="/" className="navbar-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="193"
            height="25"
            viewBox="0 0 193 25"
            {...props}
          >
            <text
              fill="#FFF"
              fillRule="evenodd"
              fontFamily="CircularStd-Bold, Circular Std"
              fontSize="28"
              fontWeight="bold"
              transform="translate(-180 -384)"
            >
              <tspan x="180" y="408">
                Andrew Ross
              </tspan>
            </text>
          </svg>
        </NavLink>
        {/* <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              activeStyle={activeStyle}
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          &nbsp;|&nbsp;
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              activeStyle={activeStyle}
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </NavLink>
          </li>
          &nbsp;|&nbsp;
          <li className="nav-item">
            <NavLink
              to="/about"
              activeStyle={activeStyle}
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          &nbsp;|&nbsp;
          <li className="nav-item">
            <NavLink
              to="/contact"
              activeStyle={activeStyle}
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* </div> */}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

/* <div className="header" style={{height: '75px', position: 'relative'}}>
<Layout fluid>
    <Header transparent >
      <Navigation className="Navbar">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/portfolio">Portfolio</a>
      </Navigation>
    </Header>
    <Content />
</Layout>
</div> */
