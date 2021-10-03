// import { Carroussel, Nav, Footer } from '../../components/exportComponents';
import { Nav, Footer, Loading } from '../../components/exportComponents';
import './Home.scss';
import { useState, useEffect } from 'react';
import Ind from '../../assets/images/individual.svg';
import Gov from '../../assets/images/gov.svg';
import axios from 'axios';
function Home() {
  let [disasters, setDisasters] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const requests = [];
  //     const urls = [
  //       process.env.REACT_APP_URL_2,
  //       process.env.REACT_APP_URL_3,
  //       process.env.REACT_APP_URL_4,
  //       process.env.REACT_APP_URL_5,
  //       process.env.REACT_APP_URL_6,
  //       process.env.REACT_APP_URL_7,
  //     ];
  //     urls.forEach((url) => {
  //       requests.push(axios.get(url));
  //     });
  //     await axios
  //       .all(requests)
  //       .then(
  //         axios.spread((...responses) => {
  //           responses.forEach((element) => {
  //             setDisasters((oldArray) => [...oldArray, element.data]);
  //           });
  //         }),
  //       )
  //       .catch((errors) => {
  //         console.log(errors);
  //       });
  //   }
  //   getData();
  // }, []);

  if (disasters.length === 0) {
    console.log(disasters);
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
                temperature of the atmosphere and oceans where the accumulation
                of high concentrations of greenhouse gases in the atmosphere
                blocks the heat emitted by the Sun and traps it on the Earth's
                surface, increasing the Earth's average temperature.
              </p>
            </div>
          </div>
          <p className="final-text">
            Among its main causes are the emission of greenhouse gases such as
            CO2 and methane, deforestation, forest fires and use of fossil
            fuels. The planet's average temperature has risen 1.1 degrees since
            the second half of the 19th century and in the best-case scenario,
            it is expected to reach 1.5 degrees of warming over the next two
            decades. Things are heating up and we are the main responsible for
            this. But we can also be the solution to this problem.
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
              high concentrations of greenhouse gases in the atmosphere blocks
              the heat emitted by the Sun and traps it on the Earth's surface,
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
  } else {
    return <Loading />;
  }
}

export default Home;
