import './Learn.scss';
import { Nav, Footer } from '../../components/exportComponents';
import Transportation from '../../assets/images/Transportation 1.svg';
import Consuption from '../../assets/images/Consuption 1.svg';
import Water from '../../assets/images/Water 1.svg';
import Trash from '../../assets/images/Trash 1.svg';
function Learn() {
  return (
    <>
      <Nav />
      <div className="gradient-container">
        <p className="title">Climate Change Mitigation</p>
        <p className="subtitle">See how we can combat global warming</p>
      </div>
      <div className="text-container">
        <p className="title">Individual Actions</p>
        <p className="subtitle">
          Even though we are individuals, together we can make a big difference
          in the world!
          <br />
          (Click on the rectangles to read the content)
        </p>
        <div className="text-image-container">
          <div className="text-inside-image">
            <img src={Transportation} alt="Snow" id="first" />
            <div className="centered">Means of Transportation</div>
          </div>
          <div className="text">
            <p>
              It is estimated that cars are responsible for 72.6% of the
              emission of greenhouse gases, but they transport only 30% of the
              population, which is one of the main causes of pollution in large
              cities. It is also known that to travel 1 kilometer, a popular
              gasoline car emits approximately 150 grams of carbon dioxide,
              while the subway emits only 12 grams and transports many more
              people.
            </p>
            <p>
              For these reasons, replacing the use of personal vehicles with
              public transport such as buses and subways is a very efficient way
              to reduce the emission of polluting gases. If you prefer, it is
              even possible to adopt the use of transports such as bicycles,
              electric bicycles or even short walks, since these types of
              locomotion emit absolutely no polluting gas and better yet, they
              are physical activities that greatly improve your health!
            </p>
            <p>
              In recent decades, we also have the development of many electric
              cars that have a low environmental impact, and this type of
              transport is a major trend for the future.
            </p>
          </div>
        </div>
        <div className="text-image-container">
          <div className="text-inside-image">
            <img src={Consuption} alt="Snow" id="first" />
            <div className="centered">Conscious Consumption</div>
          </div>
          <div className="text">
            <p>
              Conscious food consumption is one of the best ways to help fight
              global warming. Giving preference to organic foods over processed
              ones means consuming products that generally contain little or no
              pesticides, consume less water in their production and, in
              general, have a smaller carbon footprint.
            </p>
            <p>
              Reducing red meat consumption or even not consuming it at all may
              be one of the best ways to reduce global warming. The production
              of red meat is almost always linked to deforestation, the
              consumption of large volumes of water and the high emission of
              polluting gases. It is estimated that 500 liters of water are used
              to produce a kilo of soy, while 15 thousand liters are needed for
              a kilo of beef.
            </p>
            <p>
              Also in one hectare of land it is possible to plant 42,000 to
              50,000 tomato plants or produce only an average of 81.66 kg of
              beef per year. This doesn't mean you should go vegan, but keep in
              mind that reducing red meat consumption and consuming lightly
              processed organic foods is one of the best ways to fight global
              warming and is also good for human health. Have you thought about
              adopting some meatless meals?
            </p>
          </div>
        </div>
        <div className="text-image-container">
          <div className="text-inside-image">
            <img src={Water} alt="Snow" id="first" />
            <div className="centered">Water and Energy Use</div>
          </div>
          <div className="text">
            <p>
              A 15-minute bath with the valve half open consumes approximately
              135 liters of water, but if you close the valve while soaping and
              reduce the bath time to 5 minutes, your consumption drops to 45
              liters, a reduction of 90 liters of water, which is equivalent to
              360 glasses of water with 250ml.
            </p>
            <p>
              There are still a number of other attitudes that contribute to
              water waste such as leaving taps open, washing cars with hoses and
              the constant use of washing machines.
            </p>
            <p>
              Thus, there are a lot of actions you can take to reduce water
              consumption, such as taking shorter showers, keeping taps closed,
              taking care of leaks, using dishwashers and clothes washers less
              frequently, and washing cars using buckets instead of hoses. It is
              even possible to install cisterns systems to capture rainwater
              that can later be used to irrigate plants and wash cars and
              clothes.
            </p>
          </div>
          <div className="text" style={{ marginTop: '50px' }}>
            <p>
              Energy consumption is also a factor of great influence on global
              warming, above all when the energy matrix is ​​constituted by the
              burning of fossil fuels since this emits large amounts of carbon
              dioxide into the atmosphere.
            </p>
            <p>
              Domestic consumption can still greatly influence energy use. A
              typical household light bulb, for example, consumes about 60 watts
              of energy per hour, while an LED light bulb consumes only 9 watts
              per hour. The use of electrically resistant equipment such as
              showers and irons are also responsible for the large consumption
              of electricity.
            </p>
            <p>
              Thus, replacing light bulbs with LED ones, taking shorter showers
              and even adopting renewable energy matrices such as wind and solar
              are great ways to contribute to reducing global warming.
            </p>
          </div>
        </div>
        <div className="text-image-container">
          <div className="text-inside-image">
            <img src={Trash} alt="Snow" id="first" />
            <div className="centered">Waste Disposal</div>
          </div>
          <div className="text">
            <p>
              Landfills are one of the biggest emitters of methane in the world,
              along with other toxic substances that are dangerous to the
              environment.
            </p>
            <p>
              An average person produces 2 kilos of waste per day, which results
              in more than 700 kilos of waste per year per person. This means a
              total annual production of more than 5 trillion kilos of waste in
              the world.
            </p>
            <p>
              Reducing the amount of waste you produce is a great way to help
              the planet. It is possible to carry out composting in order to
              take advantage of organic waste and also the recycling of
              materials such as plastic and aluminum, reducing the volume of
              waste discarded into the environment and at the same time reducing
              the amount of raw material needed to manufacture new products.
            </p>
          </div>
        </div>
        <p className="title">Governmental Actions</p>
        <p className="subtitle">
          Even if you are already doing your part, what can your government
          <br /> do to fight global warming?
        </p>
      </div>
      <div className="gradient-container">
        <p className="title">Other impacts</p>
        <p className="subtitle">
          Learn about other impacts related to climate change
        </p>
      </div>
      <div className="container">
        <div className="home-container">
          <div className="text-container">
            <h1 className="title">Our Oceans</h1>
            <p className="text">
              With the increase in the concentration of carbon dioxide in the
              atmosphere and the increase of global ones, many consequences are
              verified for marine environments. These include the rising sea
              levels, melting glaciers, acidification, and changes in ocean
              salinity. Such consequences, concomitantly with others, alter the
              biological and life dynamics existing in the ecosystem.
            </p>
          </div>
          <div className="image"></div>
        </div>
        <p className="final-text">
          For example, it can lead to the coral bleaching and the extinction of
          marine animals.
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Learn;
