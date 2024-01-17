import Navigation from "./Navigation";
import './header.css';
import React from "react";

function Header() {

    return (
        // <h1>this is the header</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* <a className="navbar-brand" href="/">Your Logo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse justify-content-right" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/* Include your Navigation component here */}
              <Navigation />
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;