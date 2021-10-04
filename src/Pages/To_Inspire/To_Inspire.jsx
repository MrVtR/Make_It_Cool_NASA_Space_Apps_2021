import './To_Inspire.scss';
import { Nav, Footer } from '../../components/exportComponents';
import Bike from '../../assets/images/General/TO INSPIRE/BIKE RIDING.jpg';
import Organic from '../../assets/images/General/TO INSPIRE/ORGANIC RECIPE.jpg';
import PatchWork from '../../assets/images/General/TO INSPIRE/PATCHWORK CLOTH.jpg';
import Recycling from '../../assets/images/General/TO INSPIRE/RECYCLING.jpg';
import ex1 from '../../assets/images/General/TO INSPIRE/exemplos/EXEMPLO 1.jpg';
import ex2 from '../../assets/images/General/TO INSPIRE/exemplos/EXEMPLO 2.jpg';
import ex3 from '../../assets/images/General/TO INSPIRE/exemplos/EXEMPLO 3.jpg';
import ex4 from '../../assets/images/General/TO INSPIRE/exemplos/EXEMPLO 4.jpg';
import ex5 from '../../assets/images/General/TO INSPIRE/exemplos/EXEMPLO 5.jpg';
import ex6 from '../../assets/images/General/TO INSPIRE/exemplos/EXEMPLO 6.jpg';
import ex7 from '../../assets/images/General/TO INSPIRE/exemplos/EXEMPLO 7.jpg';
import ex8 from '../../assets/images/General/TO INSPIRE/exemplos/EXEMPLO 8.jpg';
import ex9 from '../../assets/images/General/TO INSPIRE/exemplos/EXEMPLO 9.jpg';
function To_Inspire() {
  function posts() {
    var imgs = [ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9];
    var indents = [];
    for (var i = 0; i < 24; i++) {
      var randomItem = imgs[Math.floor(Math.random() * imgs.length)];
      indents.push(<img src={randomItem} alt="" width="350px"></img>);
    }
    return indents;
  }
  return (
    <>
      <Nav />
      <div className="gradient-container">
        <p className="title">We Make it Cool</p>
        <p className="subtitle">
          Now is the time to use what you've learned to change the future!
        </p>
      </div>
      <div className="container">
        <div className="home-container">
          <div
            className="text-container"
            style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
          >
            <h1 className="title" style={{ textAlign: 'right' }}>
              Be a part of our community!
            </h1>
            <p className="text">
              “We Make it Cool” is a place where you can share with our
              community your actions and see what other people are doing in
              order to change the future of our planet. Together we can change
              the world!
            </p>
            <p className="text" style={{ width: '100%', textAlign: 'left' }}>
              - Cook an organic recipe
            </p>
            <p className="text" style={{ width: '100%', textAlign: 'left' }}>
              - Recycle the trash of your neighbourhood
            </p>
            <p className="text" style={{ width: '100%', textAlign: 'left' }}>
              - Share your bike riding to work
            </p>
            <p className="text" style={{ width: '100%', textAlign: 'left' }}>
              - Make yourself a new patchwork cloth
            </p>
          </div>
          <div className="image-container">
            <img src={Organic} alt="" width="400px" />
            <img src={Recycling} alt="" width="400px" />
            <img src={Bike} alt="" width="400px" />
            <img src={PatchWork} alt="" width="400px" />
          </div>
        </div>
        <p className="final-text" style={{ margin: '20px 0 0 0' }}>
          Take a picture of yourself doing anything you learned that helps
          reducing the Global Warming and post it on instagram using
          #makeitcool. We will redirect your photos to this section of the
          website where our community can see you making the difference!
        </p>
        <p className="section">Latest posts:</p>
        <div className="posts">{posts()}</div>
      </div>
      <Footer />
    </>
  );
}
export default To_Inspire;
