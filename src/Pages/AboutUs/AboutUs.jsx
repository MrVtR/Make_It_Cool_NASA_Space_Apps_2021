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
        <div className="home-container">
          <div className="text-container">
            <h1 className="title">Current Global Warming Situation</h1>
            <h2 className="subtitle">Teste</h2>
            <p className="text">
              Global warming is the process of changing the global average
              temperature of the atmosphere and oceans where the accumulation of
              high concentrations of greenhouse gases in the atmosphere blocks
              the heat emitted by the Sun and traps it on the Earth's surface,
              increasing the Earth's average temperature.
            </p>
          </div>
          <div className="image"></div>
        </div>
        <p className="final-text">
          Among its main causes are the emission of greenhouse gases such as CO2
          and methane, deforestation, forest fires and use of fossil fuels. The
          planet's average temperature has risen 1.1 degrees since the second
          half of the 19th century and in the best-case scenario, it is expected
          to reach 1.5 degrees of warming over the next two decades. Things are
          heating up and we are the main responsible for this. But we can also
          be the solution to this problem.
        </p>
      </div>
      <div className="container">
        <div className="home-container">
          <div className="image"></div>
          <div className="text-container">
            <h1 className="title">Current Global Warming Situation</h1>
            <h2 className="subtitle">Teste</h2>
            <p className="text">
              Global warming is the process of changing the global average
              temperature of the atmosphere and oceans where the accumulation of
              high concentrations of greenhouse gases in the atmosphere blocks
              the heat emitted by the Sun and traps it on the Earth's surface,
              increasing the Earth's average temperature.
            </p>
          </div>
        </div>
        <p className="final-text">
          Among its main causes are the emission of greenhouse gases such as CO2
          and methane, deforestation, forest fires and use of fossil fuels. The
          planet's average temperature has risen 1.1 degrees since the second
          half of the 19th century and in the best-case scenario, it is expected
          to reach 1.5 degrees of warming over the next two decades. Things are
          heating up and we are the main responsible for this. But we can also
          be the solution to this problem.
        </p>
      </div>
      <div className="container">
        <div className="home-container">
          <div className="text-container">
            <h1 className="title">Current Global Warming Situation</h1>
            <h2 className="subtitle">Teste</h2>
            <p className="text">
              Global warming is the process of changing the global average
              temperature of the atmosphere and oceans where the accumulation of
              high concentrations of greenhouse gases in the atmosphere blocks
              the heat emitted by the Sun and traps it on the Earth's surface,
              increasing the Earth's average temperature.
            </p>
          </div>
          <div className="image"></div>
        </div>
        <p className="final-text">
          Among its main causes are the emission of greenhouse gases such as CO2
          and methane, deforestation, forest fires and use of fossil fuels. The
          planet's average temperature has risen 1.1 degrees since the second
          half of the 19th century and in the best-case scenario, it is expected
          to reach 1.5 degrees of warming over the next two decades. Things are
          heating up and we are the main responsible for this. But we can also
          be the solution to this problem.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
