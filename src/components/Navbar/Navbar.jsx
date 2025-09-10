import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      {/* Logo / Brand */}
      <a
        href="https://www.dauniv.ac.in/"
        target='_blank'
        rel="noreferrer"
        className='footer-text'
      >
        <img
          src="/assets/favicon.ico"
          alt="Davv Logo"
          className='footer-logo'
        />
        IIPS
      </a>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
      </div>

      {/* Links */}
      <div className={`navbar-container ${menuOpen ? 'open' : ''}`}>
        <div className='navbar-links'>
          {location.pathname === '/' ? (
            <Link className='navbar-brand' to={isAuthenticated ? '/dashboard' : '/login'}>
              Academics
            </Link>
          ) : (
            <Link className='navbar-brand' to='/'>Home</Link>
          )}

          <Link className='navbar-brand' to='/placement'>Placement</Link>
          <Link className='navbar-brand' to='/events'>Events</Link>
          <Link className='navbar-brand' to='/aboutus'>About</Link>
          <Link className='navbar-brand' to='/our-contributers'>Contributors</Link>
        </div>

        {/* Right Side (Auth) */}
        <ul className='navbar-nav'>
          {isAuthenticated ? (
            <li className='nav-item'>
              <p className='user-welcome'>
                <span className='user-name'>{user.displayName?.toUpperCase()}</span>
                <img className='user-icon' src="/assets/user-icon.png" alt="Admin" />
              </p>
            </li>
          ) : (
            <>
              <li className='nav-item'>
                <Link className='btnNew' to='/login'>Sign In</Link>
              </li>
              <li className='nav-item'>
                <Link className='btnNew' to='/register'>Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
