import React from 'react';
import './Layout_CSS/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container fluid">
                <NavLink className="navbar-brand" to ="/">
                  MyApp
                </NavLink>

                <button 
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                      <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "fw-bold text-decoration-underline" : ""}`
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "fw-bold text-decoration-underline" : ""}`
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "fw-bold text-decoration-underline" : ""}`
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                       >
                        Projects
                      </a>
                      <ul className="dropdown-menu">
                         <li>
                          <NavLink className="dropdown-item" to="/action">
                              Action
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/another-action">
                              Another action
                          </NavLink>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <NavLink className="dropdown-item" to="/something-else">
                            Something else here
                          </NavLink>
                        </li>
                     </ul>
                    </li>

                    <li className="nav-item">
                      <span className="nav-link disabled" aria-disabled="true">
                        Disabled
                      </span>
                    </li>

                  </ul>

                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                   </button>
                  </form>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;