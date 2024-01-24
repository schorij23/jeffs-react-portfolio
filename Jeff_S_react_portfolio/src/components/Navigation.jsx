import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './header.css';
function Navigation() {
    const currentPage = useLocation().pathname;

    const linkStyle = {
        fontSize: '24px',
        color: '#007bff'
    };
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                style={linkStyle}
                >
                Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/About'
                className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                style={linkStyle}
                >
                About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Contact'
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                style={linkStyle}
                >
                Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Portfolio'
                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                style={linkStyle}
                >
                Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Resume'
                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                style={linkStyle}
                >
                Resume
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;