import './Nav.scss';
import Logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="nav">
      <img src={Logo} alt="Header Logo" />
      <h1 className="title">Make It Cool</h1>
      <div className="menu">
        <ul className="menu-list">
          <Link to={{ pathname: '/' }} className="link">
            <li>Home</li>
          </Link>
          <Link to={{ pathname: '/about-us' }} className="link">
            <li>About us</li>
          </Link>
          <Link to={{ pathname: '/map' }} className="link">
            <li>Map</li>
          </Link>
          <Link to={{ pathname: '/learn' }} className="link">
            <li>Learn</li>
          </Link>
          <Link to={{ pathname: '/game' }} className="link">
            <li>Game</li>
          </Link>
          <Link to={{ pathname: '/to-inspire' }} className="link">
            <li>To inspire</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
