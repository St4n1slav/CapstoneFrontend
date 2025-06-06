import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <>
      <footer className="py-4 footer">
        <div className="container">
          {/* Link di navigazione */}
          <div className="row justify-content-center mb-3">
            <div className="col-auto">
              <nav className="nav">
                <a className="nav-link text-dark" href="/">
                  Home
                </a>
                <a className="nav-link text-dark" href="/about">
                  About
                </a>
                <a className="nav-link text-dark" href="/contact">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="social row justify-content-center mb-3">
          <div className="col-auto">
            <a href="https://www.facebook.com" className="text-dark mx-2">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://x.com/" className="text-dark mx-2">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.instagram.com/" className="text-dark mx-2">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="social row justify-content-center mb-3">
          <p className="mb-0 text-muted">©{new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
