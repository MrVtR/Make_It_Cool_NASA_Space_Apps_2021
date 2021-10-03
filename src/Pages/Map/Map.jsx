import './Map.scss';
import { Nav, Footer, LoadMap } from '../../components/exportComponents';
function Map() {
  return (
    <>
      <Nav />
      <div className="gradient-container">
        <p className="title">Global Warming View</p>
        <p className="subtitle">Visualize the impacts on your city</p>
      </div>
      <LoadMap />
      <Footer />
    </>
  );
}

export default Map;
