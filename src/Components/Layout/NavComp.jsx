import React from "react";
import { Link } from "react-router-dom";
const NavComp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                 <button className="btn btn-outline-success">UseState</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/useeffect">
                 <button className="btn btn-outline-success">UseEffect</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/usememo">
                 <button className="btn btn-outline-success">UseMemo</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/useref">
                 <button className="btn btn-outline-success">UseRef</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavComp;
