import './Footer.scss';
import Logo from '../../assets/images/Logo.svg';

function Footer() {
  return (
    <div className="gradient-container">
      <div className="copyright">
        <img src={Logo} alt="Logo" />
        <p className="title">Make it Cool</p>
        <p className="subtitle">
          Copyright © 2021 Make it Cool | All rights reserved
        </p>
      </div>
      <div className="copyright">
        <img src={Logo} alt="Logo" />
        <p className="title">Make it Cool</p>
        <p className="subtitle">
          Copyright © 2021 Make it Cool | All rights reserved
        </p>
      </div>
      <div className="copyright">
        <img src={Logo} alt="Logo" />
        <p className="title">Make it Cool</p>
        <p className="subtitle">
          Copyright © 2021 Make it Cool | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
