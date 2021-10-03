import './Game.scss';
import { Nav, Footer } from '../../components/exportComponents';
import Space from '../../assets/images/Space key.svg';
import Arrow from '../../assets/images/Arrow.svg';
import Pipe from '../../assets/images/pipe.svg';
import Meat from '../../assets/images/meat.svg';
import Recycle from '../../assets/images/recycle.svg';
import Buy from '../../assets/images/Buy.svg';
function Game() {
  return (
    <>
      <Nav />
      <div className="data-container">
        <div className="game"></div>
        <div className="container">
          <div className="home-container">
            <div
              className="text-container"
              style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
            >
              <h1 className="title">How to Play?</h1>
              <p className="subtitle">
                The game is simples yet challenging!
                <br />
                These are the controls:
              </p>
              <div className="command">
                <img src={Space} alt="Space key" />
                <img
                  src={Pipe}
                  alt="pipe key"
                  style={{ marginRight: '15px' }}
                />
                <p>Select</p>
              </div>
              <div className="command">
                <img src={Arrow} alt="Arrow" />
                <img
                  src={Pipe}
                  alt="pipe key"
                  style={{ marginRight: '15px' }}
                />
                <p>Jump</p>
              </div>
            </div>
            <div className="image"></div>
          </div>
        </div>
        <div className="container">
          <div className="home-container">
            <div className="image"></div>
            <div className="text-container">
              <h1 className="title">Game Goal</h1>
              <p className="text">
                The main goal of the game is to make people conscious in an
                intuitive, visual and interactive way about how they can
                influence the current state of the environment and help improve
                the future of our planet. Each of your actions and choices
                directly influence the game results and can help save the world
                from global warming, just like in the real world!
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home-container" style={{ alignItems: 'flex-end' }}>
            <div
              className="text-container"
              style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
            >
              <h1 className="title">Transport</h1>
              <p className="text">
                Transportation is responsible for 24% of direct CO2 emissions
                from fuel combustion. Road vehicles – cars, trucks, buses and
                two- and three-wheelers – account for nearly three-quarters of
                transport CO2 emissions, and emissions from aviation and
                shipping continue to rise [1].
              </p>
            </div>
            <div className="image"></div>
          </div>
          <p className="final-text" style={{ margin: '20px 0 0 0' }}>
            Per passenger, a domestic flight emits 133 grams of carbon dioxide
            and an additional 121 grams of non-carbon dioxide gases, formed by
            effects from high altitude. A car with one passenger emits 171 grams
            of carbon dioxide. For a bus, there is an emission of 104 grams of
            carbon dioxide per passenger. A car with four passengers emits 43
            grams each [2]. Make good choices about how to get around. Let's
            ride a bike and save the planet?
          </p>
        </div>
        <div className="container">
          <div className="home-container" style={{ alignItems: 'center' }}>
            <div className="image"></div>
            <div className="text-container">
              <h1 className="title">Conscious vote</h1>
              <p className="text">
                Stay tuned in politics! What bills are under debate? What laws
                are being passed? When choosing your candidates, look for people
                and proposals that reflect the changes you want in the world.
              </p>
              <p className="text">
                Make sure your candidates are aligned with the truth, there is
                no room for misinformation and denial.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home-container" style={{ alignItems: 'center' }}>
            <div className="text-container">
              <h1 className="title">Meat X Vegetables</h1>
              <p className="text">
                A quarter of global emissions come from food. The production of
                food of animal origin, like meat and dairy, is largely
                responsible for climate change. Around 58% of food emissions
                come from animal products [3]. In according to a major report by
                UN's Intergovernmental Panel on Climate Change (IPCC), the
                West's high consumption of meat and dairy is fuelling global
                warming [4].
              </p>
            </div>
            <img src={Meat} alt="Meat_image" />
          </div>
          <div className="home-container" style={{ alignItems: 'center' }}>
            <div className="image"></div>
            <div className="text-container">
              <p className="text">
                Plant-based foods are more environmentally friendly, as there is
                less use of energy, land and water, with less greenhouse gas
                emissions. Examples of these foods are vegetables, fruits, whole
                grains, legumes, nuts, and seeds [5].
              </p>
            </div>
          </div>
          <div className="home-container">
            <div className="text-container">
              <p className="text">
                A quarter of global emissions come from food. The production of
                food of animal origin, like meat and dairy, is largely
                responsible for climate change. Around 58% of food emissions
                come from animal products [5]. In according to a major report by
                UN's Intergovernmental Panel on Climate Change (IPCC), the
                West's high consumption of meat and dairy is fuelling global
                warming [3].
              </p>
            </div>
            <div className="image"></div>
          </div>
        </div>
        <div className="container">
          <div className="home-container" style={{ alignItems: 'center' }}>
            <img src={Buy} alt="Buy_icon" />
            <div className="text-container">
              <h1 className="title">Fashion</h1>
              <p className="text">
                Annually, about 10% of greenhouse gases and 20% of global
                wastewater are produced by the fashion industry (clothing and
                footwear) [6].
              </p>
            </div>
          </div>
          <p className="final-text" style={{ margin: '20px 0 0 0' }}>
            A single pair of jeans it takes about 1000 liters of water to just
            grow the one kilo of cotton needed for the garment [7]. Its produce
            more than 33 kilograms of carbon dioxide equivalent across its
            entire lifespan - about the same as driving 69 miles in the average
            US car [8] [9].
          </p>
          <p className="final-text" style={{ margin: '20px 0 0 0' }}>
            Another harmful trend followed by this industry and its consumers is
            consumerism associated with the constant search for the latest items
            to stay in fashion every season. Even when most of materials could
            be reused, 85% of textiles end up in landfills or are incinerated
            [10]. Every second, the equivalent of one garbage truck of textiles
            is landfilled or burned [11].
          </p>
          <p className="final-text" style={{ margin: '20px 0 0 0' }}>
            Instead of buying, buying and buying, you should recycle and reuse.
            You can donate your clothes, turn old clothes into new ones, buy
            clothes at thrift stores and always think "I need more clothes?"
          </p>
        </div>
        <div className="container">
          <div className="home-container">
            <div className="text-container">
              <h1 className="title">Green Certification</h1>
              <p className="text">
                Big companies have the money necessary to make significant
                changes in the production systems. But how can we make them
                adopt more sustainable practices? When we, as consumers, choose
                to buy green certificated products this creates a demand for
                more sustainable products in the market, thus when there is a
                high demand for this type of products the bigger companies have
                to adapt and become more sustainable. It’s a small change of
                habit, just check for certifications before deciding to buy.
              </p>
            </div>
            <img src={Recycle} alt="Recycle logo" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Game;
