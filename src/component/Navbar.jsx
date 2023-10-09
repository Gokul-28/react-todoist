import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            Todo List app using react
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/gokuls28/"
                >
                  View Linkedin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/Gokul-28">
                  View Github
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  View Portfolio
                </a>
              </li>
            </ul>

            <button type="button" className="btn btn-outline-success">
                <a className="DownloadLink" href="https://www.linkedin.com/in/gokuls28/">Download Resume</a>
              
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
