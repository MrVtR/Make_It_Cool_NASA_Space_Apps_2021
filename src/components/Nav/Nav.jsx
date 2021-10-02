import './Nav.scss';
import Logo from '../../assets/images/Logo.svg';
function Nav() {
  return (
    <div className="nav">
      <img src={Logo} alt="Header Logo" />
      <h1 className="title">Make It Cool</h1>
      <div className="menu">
        <ul className="menu-list">
          <li>Home</li>
          <li>About us</li>
          <li>Map</li>
          <li>Learn</li>
          <li>Game</li>
          <li>To inspire</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
