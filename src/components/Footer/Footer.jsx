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
        <a
          href="https://github.com/MrVtR/Make_It_Cool_NASA_Space_Apps_2021"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div className="icon-text">
            <img src={Github} alt="Github Logo" />
            <p>Github</p>
          </div>
        </a>

        <div className="icon-text">
          <img src={Instagram} alt="Instagram Logo" />
          <p>Instagram</p>
        </div>
        <a
          href="https://2021.spaceappschallenge.org/challenges/statements/warning-things-are-heating-up/teams/make-it-cool/project"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div className="icon-text">
            <img src={Email} alt="Email Logo" />
            <p>Contact Us</p>
          </div>
        </a>
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
          <Link
            to={{ pathname: '/' }}
            className="link"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to={{ pathname: '/about-us' }}
            className="link"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <li>About us</li>
          </Link>
          <Link
            to={{ pathname: '/map' }}
            className="link"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <li>Map</li>
          </Link>
          <Link
            to={{ pathname: '/learn' }}
            className="link"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <li>Learn</li>
          </Link>
          <Link
            to={{ pathname: '/game' }}
            className="link"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <li>Game</li>
          </Link>
          <Link
            to={{ pathname: '/to-inspire' }}
            className="link"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <li>To inspire</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
