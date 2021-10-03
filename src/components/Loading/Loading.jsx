import logo from '../../assets/images/logo.gif';
import './Loading.scss';
function Loading() {
  return (
    <div className="loading">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
