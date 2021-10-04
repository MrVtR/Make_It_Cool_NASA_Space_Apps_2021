// import { Carroussel, Nav, Footer } from '../../components/exportComponents';
import { Nav, Footer } from '../../components/exportComponents';
import Carousel from 'react-elastic-carousel';
import './Home.scss';
import Ind from '../../assets/images/individual.svg';
import Gov from '../../assets/images/gov.svg';
import pic1 from '../../assets/images/Wellcome.svg';
import pic2 from '../../assets/images/Global.svg';
import pic3 from '../../assets/images/Study.svg';
import pic4 from '../../assets/test/30.png';
import alerts from '../../assets/images/General/HOME/alerts.PNG';
import global from '../../assets/images/General/HOME/current.jpg';
import not from '../../assets/images/General/HOME/not.PNG';
import weDo from '../../assets/images/General/HOME/weDo.jpg';
import pt from '../../assets/images/Parte de trás.svg';
import gif from '../../assets/images/hi2.gif';
function Home() {
  const items = [
    {
      id: 1,
      source: <img src={pic1} alt="pic1" height="500px" />,
    },
    { id: 2, source: <img src={pic2} alt="pic2" height="500px" /> },
    { id: 3, source: <img src={pic3} alt="pic3" height="500px" /> },
    {
      id: 4,
      source: (
        <div className="gif">
          <img src={pt} alt="" className="food-img" />
          <img src={gif} alt="" className="gif-img" />
          <div className="text-gif">
            <p className="title">Make it Cool Game</p>
            <p className="subtitle">
              Play our game and learn about global
              <br />
              warming in a fun and interactive way!
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="home">
      <Nav />
      <div className="carroussel">
        <Carousel>
          {items.map((item) => (
            <div key={item.id}>{item.source}</div>
          ))}
        </Carousel>
      </div>
      <div className="container">
        <div className="home-container">
          <img src={global} alt="" height="350px" />
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

      <div className="home-container">
        <div className="text-container" style={{ alignItems: 'flex-end' }}>
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
        <img src={weDo} alt="" />
      </div>
      <div className="grandient-container" style={{ height: '440px' }}>
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
      <div className="container">
        <h1 className="title">Make it Cool App</h1>
        <h2 className="subtitle">
          Check out the beta of our application, soon to be available for
          download!
        </h2>
        <div className="home-container">
          <div className="text-container">
            <p className="text">
              In our mobile app, we will provide alerts of future heat-stressed
              environments to make you prepared and informed.
            </p>
            <p className="text">
              Also, after informing us of your location through your account
              registration, you will have access to a chat with people living in
              the same area. This chat will serve for alerts of other impacts by
              message, such as forest fire warnings.
            </p>
          </div>
          <img src={not} alt="" height="350px" className="mobile" />
          <img src={alerts} alt="" height="350px" className="mobile" />
        </div>
        <p className="final-text">
          Feel free to check out our world map impact visualization area and
          other sections that contain text to inform you about these issues.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
