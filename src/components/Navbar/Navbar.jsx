import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/actionCreators/authActionCreator';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const [isPanelOpen, setPanelOpen] = useState(false);
  const dispatch = useDispatch();

  // Close panel on route change
  useEffect(() => {
    setPanelOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(signOutUser());
    setPanelOpen(false);
  };

  const NavLinks = ({ className, onLinkClick }) => (
    <div className={className}>
      {location.pathname === '/' ? (
        <Link to={isAuthenticated ? '/dashboard' : '/login'} onClick={onLinkClick}>
          Academics
        </Link>
      ) : (
        <Link to='/' onClick={onLinkClick}>
          Home
        </Link>
      )}
      <Link to='/placement' onClick={onLinkClick}>Placement</Link>
      <Link to='/events' onClick={onLinkClick}>Events</Link>
      <Link to='/aboutus' onClick={onLinkClick}>About</Link>
      <Link to='/our-contributers' onClick={onLinkClick}>Contributors</Link>
    </div>
  );

  return (
    <>
      <div className={`overlay ${isPanelOpen ? 'open' : ''}`} onClick={() => setPanelOpen(false)}></div>
      <nav className='navbar'>
        <a href="https://www.dauniv.ac.in/" target='_blank' rel="noopener noreferrer" className='footer-text'>
          <img src="/assets/favicon.ico" alt="Davv Logo" className='footer-logo' />
          <span>IIPS</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className='nav-desktop'>
          <NavLinks className="navbar-links" />
        </div>
        
        {/* Desktop Auth Buttons */}
        <div className='auth-desktop'>
          {isAuthenticated ? (
            <div className='user-welcome'>
              Welcome, <span className='user-name'>{user.displayName?.split(' ')[0]}</span>
              <button onClick={handleLogout} className='btnNew outline'>Logout</button>
            </div>
          ) : (
            <div className='auth-btns'>
              <Link className='btnNew outline' to='/login'>Sign In</Link>
              <Link className='btnNew' to='/register'>Sign Up</Link>
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <button className={`hamburger ${isPanelOpen ? 'open' : ''}`} onClick={() => setPanelOpen(!isPanelOpen)} aria-label="Open menu">
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </button>
      </nav>

      {/* Side Panel for Mobile */}
      <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        
        
        <NavLinks className="panel-links" onLinkClick={() => setPanelOpen(false)} />

        <div className="panel-auth">
          {isAuthenticated ? (
            <>
              <div className='user-welcome-mobile'>
                <p>Welcome,</p>
                <p className='user-name'>{user.displayName}</p>
              </div>
              <button onClick={handleLogout} className='btnNew outline'>Logout</button>
            </>
          ) : (
            <>
              <Link className='btnNew' to='/login' onClick={() => setPanelOpen(false)}>
                Sign In
              </Link>
              <Link className='btnNew ' to='/register' onClick={() => setPanelOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
