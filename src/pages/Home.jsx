import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1>Thanks for dropping by</h1>
      <br />
      <p>
        Portfolio built with React, Redux, and json-server in a custom webpack
        environment.
      </p>
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>
              {" "}
              <Link to="portfolio" className="btn btn-info bg-white text-info btn-lg">
                Portfolio
              </Link>
            </th>
            <th>
              {" "}
              <Link to="about" className="btn btn-info bg-white text-info btn-lg">
                About
              </Link>
            </th>
            <th>
              {" "}
              <Link to="contact" className="btn btn-info bg-white text-info btn-lg">
                Contact
              </Link>
            </th>
            <th />
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Home;
