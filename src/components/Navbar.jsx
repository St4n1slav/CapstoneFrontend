import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import styles from "../App.css"; //dice che non lo legge,e invece lo legge

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 sticky-top shadow-sm">
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand fw-bold fs-3 me-5" to="/">
          OUTLET
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <NavLink className="nav-link fw-medium" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link fw-medium" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link fw-medium" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link fw-medium" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <NavLink to="/login" className="btn btn-link text-dark ms-3 px-2">
              {" "}
              {/* Modificato qui */}
              <i class="bi bi-box-arrow-in-right"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-link text-dark ms-3 px-2">
              {" "}
              {/* Modificato qui */}
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-link text-dark ms-3 px-2 position-relative">
              {" "}
              {/* Modificato qui */}
              <i class="bi bi-cart-fill"></i> Cart
              {state.length > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{state.length}</span>}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
