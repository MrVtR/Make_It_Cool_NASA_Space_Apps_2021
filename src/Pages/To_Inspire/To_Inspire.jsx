import './To_Inspire.scss';
import { Nav, Footer } from '../../components/exportComponents';
function To_Inspire() {
  function posts() {
    var indents = [];
    for (var i = 0; i < 24; i++) {
      indents.push(<div key={i} className="posts-image"></div>);
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
            <p className="text">
              Cook an organic recipe Recycle the trash of your neighbourhood
              Share your bike riding to work Make yourself a new patchwork cloth
            </p>
          </div>
          <div className="image-container">
            <div className="image" style={{ backgroundColor: 'red' }}></div>
            <div className="image" style={{ backgroundColor: 'blue' }}></div>
            <div className="image" style={{ backgroundColor: 'green' }}></div>
            <div className="image" style={{ backgroundColor: 'yellow' }}></div>
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
