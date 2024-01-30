import Navigation from "./Navigation";
import './header.css';
import React from "react";

function Header() {

    return (
        // <h1>this is the header</h1>
        <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ fontSize: '28px', color: '#09235D' }}>Jeff Schori</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <Navigation />
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;