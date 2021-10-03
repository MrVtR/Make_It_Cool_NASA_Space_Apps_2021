import './AboutUs.scss';
import { Nav, Footer } from '../../components/exportComponents';
import pixelArt1 from '../../assets/images/Thassia 1.svg';
import pixelArt2 from '../../assets/images/Ana 1.svg';
import pixelArt3 from '../../assets/images/pelizarinho 1.svg';
import pixelArt4 from '../../assets/images/show_3 1.svg';
import pixelArt5 from '../../assets/images/show 1.svg';
import pixelArt6 from '../../assets/images/show_4 1.svg';
function AboutUs() {
  return (
    <>
      <Nav />
      <div className="gradient-container">
        <p className="title">About Us</p>
        <p className="subtitle">This is Make it Cool</p>
      </div>
      <div className="team-container">
        <p className="title">Make it Cool Team</p>
        <div className="team-image">
          <figure>
            <img src={pixelArt1} alt="Thassia" />
            <figcaption>Thassia</figcaption>
          </figure>
          <figure>
            <img src={pixelArt2} alt="Ana_Clara" />
            <figcaption>Ana Clara</figcaption>
          </figure>
          <figure>
            <img src={pixelArt3} alt="Gabriel" />
            <figcaption>Gabriel</figcaption>
          </figure>
          <figure>
            <img src={pixelArt4} alt="Vitória" />
            <figcaption>Vitória</figcaption>
          </figure>
          <figure>
            <img src={pixelArt5} alt="João Pedro" />
            <figcaption>João Pedro</figcaption>
          </figure>
          <figure>
            <img src={pixelArt6} alt="Vítor" />
            <figcaption>Vítor</figcaption>
          </figure>
        </div>
      </div>
      <div className="container">
        <div className="about-container">
          <div className="text-container">
            <h1 className="title">Our History</h1>
            <h2 className="subtitle">How do we get started?</h2>
            <p className="text">
              The team was formed with the intention of participating in NASA
              Space Apps 2021. A multidisciplinary group of young people from
              different areas, graduations and states came together with a
              common goal: fight climate change and make a difference!
            </p>
          </div>
          <div className="image"></div>
        </div>
        <p className="final-text">
          Together, earth science and computer science students seek to develop
          solutions to reduce global warming.
        </p>
      </div>
      <div className="container">
        <div className="about-container">
          <div className="image"></div>
          <div
            className="text-container"
            style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
          >
            <h1 className="title">Our Projects</h1>
            <h2 className="subtitle">How can we change the world?</h2>
            <p className="text">
              Intuitive heat-related hazard prediction map; Individual and
              governmental guidance for mitigating the impacts of global
              warming;
            </p>
          </div>
        </div>
        <p className="final-text">
          Interactive and fun game to create an awareness of how each action
          influences global warming; Community where people can share their
          actions and see what other people are doing to reduce global warming.
        </p>
      </div>
      <div className="container">
        <div className="about-container">
          <div className="text-container">
            <h1 className="title">Our Goals</h1>
            <h2 className="subtitle">How do we get started?</h2>
            <p className="text">
              Using historical and real-time data about environmental and human
              factors in order to make predictions and heat stress risk
              warnings;
            </p>
          </div>
          <div className="image"></div>
        </div>
        <p className="final-text">
          Accessibly raise awareness of the risks and impacts of global warming,
          as well as actions that can be taken individually or governmentally to
          combat climate change, informing people how we can make a difference
          together.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
