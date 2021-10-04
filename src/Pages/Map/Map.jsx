import './Map.scss';
import { Nav, Footer, LoadMap } from '../../components/exportComponents';
import forest from '../../assets/images/General/MAP/FOREST FIRES.jpg';
import thermal from '../../assets/images/General/MAP/THERMAL STRESS.jpg';
function Map() {
  return (
    <>
      <Nav />
      <div className="gradient-container">
        <p className="title">Global Warming View</p>
        <p className="subtitle">Visualize the impacts on your city</p>
      </div>
      <LoadMap />
      <div className="gradient-container">
        <p className="title">Learn about each data</p>
        <p className="subtitle">
          Learn what it is, and why each impact happens
        </p>
      </div>
      <div className="container">
        <div className="home-container">
          <img src={forest} alt="" />
          <div className="text-container">
            <h1 className="title">Forest Fires</h1>
            <p className="text">
              Forest fires are burnings in large proportions whose occurrence is
              related to flammable fuels exposed to burning materials. Forest
              areas are home to a great diversity of species, in addition to
              playing an important ecological role in absorbing carbon and also
              providing oxygen to the atmosphere.
            </p>
          </div>
        </div>
        <p className="final-text">
          Thus, this is a valuable area, and it is important to control and
          prevent fires in these areas. Controlling sources of risk depends on
          knowledge of how these fires spread, when and where fires tend to
          occur, and prevention programs rely heavily on this information. The
          causes of fires may be natural, as occurs in some regions of the
          Brazilian Cerrado, but most of them are due to reckless anthropic
          action, such as the disposal of cigarette butts thrown on roadsides,
          badly extinguished bonfires or even in intentional fires.
        </p>
      </div>
      <div className="container">
        <div className="home-container">
          <img src={thermal} alt="" />
          <div className="text-container">
            <h1 className="title">Thermal Stress</h1>
            <p className="text">
              Heat stress occurs when the temperature becomes so extreme that it
              is difficult for the body to compensate for it, and it can be
              caused by both cold and heat. In the case of a reaction to
              extremely cold temperatures, the body commonly responds with a
              hypothermic situation.
            </p>
          </div>
        </div>
        <p className="final-text">
          In summer, on the other hand, heat stress is more common. Among the
          main effects of heat stress are the inability to concentrate, muscle
          cramps, intense thirst, fatigue, dizziness and nausea, headaches, dry
          skin, heat stroke, mental confusion, convulsions and eventual loss of
          consciousness.
        </p>
        <p className="final-text">
          Prolonged exposure to high heat stress can even lead to death. The
          best ways to combat the effects of heat stress are to avoid direct
          exposure to the sun, especially between 10am and 3pm; drinking cold
          drinks, especially water, while exercising; protect the skin with
          clothes and sunscreen; take cold showers; avoid too much physical
          effort, especially during hotter hours, and use fans or air
          conditioning to cool the rooms.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Map;
