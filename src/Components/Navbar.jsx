import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../Scss/Navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Clearn
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            <Button variant="success" className="navbar-button">
                            Home
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            <Button variant="success" className="navbar-button">
                            About
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/learn" className="nav-links" onClick={closeMobileMenu}>
                            <Button  variant="success" className="navbar-button">
                            Learn
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
