import Navigation from "./Navigation";
import './Header.css';
// Header component
function Header() {
 /* Start of the navigation bar */ 

    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ fontSize: '28px', color: '#090623' }}>Jeff Schori</a>
          {/* Navigation bar toggle button for mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navigation menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Render the Navigation component */}
              <Navigation />
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;