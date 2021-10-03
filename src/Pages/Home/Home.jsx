// import { Carroussel, Nav, Footer } from '../../components/exportComponents';
import { Nav, Footer } from '../../components/exportComponents';
import './Home.scss';
import Ind from '../../assets/images/individual.svg';
import Gov from '../../assets/images/gov.svg';
function Home() {
  return (
    <div className="home">
      <Nav />
      {/* <Carroussel title="Trending Trips" data={dataTop} /> */}
      <div className="carroussel" style={{ height: '950px' }}>
        Teste
      </div>
      <div className="container">
        <div className="home-container">
          <div className="image"></div>
          <div className="text-container">
            <h1 className="title">Current Global Warming Situation</h1>
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
      <div
        className="home-container"
        style={{ alignItems: 'flex-start', marginBottom: '125px' }}
      >
        <div className="text-container">
          <h1 className="title">What can we do?</h1>
          <p className="text">
            The use of renewable and reusable resources, reforestation,
            reduction in waste disposal, use of sustainable transports,
            recycling and the conscientious consumption of water, food and
            products are just some of the things we can do to reduce global
            warming. Together we can still learn many other attitudes we can
            take to change the destiny of our planet!
          </p>
        </div>
        <div className="image"></div>
      </div>
      <div className="grandient-container" style={{ height: '640px' }}>
        <h1 className="title">How to combat global warming?</h1>
        <h2 className="subtitle">
          Learn how together we can change the world!
        </h2>
        <div className="text-image">
          <div className="text-inside-image">
            <img src={Ind} alt="Snow" id="first" />
            <div className="centered">Individual Actions</div>
          </div>
          <div className="text-inside-image">
            <img src={Gov} alt="Snow" />
            <div className="centered">Government Actions</div>
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="image"></div>
        <div className="text-container">
          <h1 className="title">Current Global Warming Situation</h1>
          <p className="text">
            Global warming is the process of changing the global average
            temperature of the atmosphere and oceans where the accumulation of
            high concentrations of greenhouse gases in the atmosphere blocks the
            heat emitted by the Sun and traps it on the Earth's surface,
            increasing the Earth's average temperature.
          </p>
        </div>
      </div>
      <div
        className="home-container"
        style={{ alignItems: 'flex-start', marginBottom: '125px' }}
      >
        <div className="text-container">
          <h1 className="title">What can we do?</h1>
          <p className="text">
            The use of renewable and reusable resources, reforestation,
            reduction in waste disposal, use of sustainable transports,
            recycling and the conscientious consumption of water, food and
            products are just some of the things we can do to reduce global
            warming. Together we can still learn many other attitudes we can
            take to change the destiny of our planet!
          </p>
        </div>
        <div className="image"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
