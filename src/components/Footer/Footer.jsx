import './Footer.scss';
import Logo from '../../assets/images/Logo.svg';
import Github from '../../assets/images/Git.svg';
import Instagram from '../../assets/images/Insta.svg';
import Email from '../../assets/images/Email.svg';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <div className="icon-text">
          <img src={Github} alt="Github Logo" />
          <p>Github</p>
        </div>
        <div className="icon-text">
          <img src={Instagram} alt="Instagram Logo" />
          <p>Instagram</p>
        </div>
        <div className="icon-text">
          <img src={Email} alt="Email Logo" />
          <p>Contact Us</p>
        </div>
      </div>
      <div className="copyright">
        <img src={Logo} alt="Logo" />
        <p className="title">Make it Cool</p>
        <p className="subtitle">
          Copyright © 2021 Make it Cool | All rights reserved
        </p>
      </div>
      <div className="sitemap">
        <h1>Sitemap:</h1>
        <ul className="footer-list">
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

export default Footer;
