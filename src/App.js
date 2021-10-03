import {
  Home,
  Map,
  AboutUs,
  Learn,
  Game,
  To_Inspire,
} from './Pages/exportPages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" exact component={Map} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/learn" exact component={Learn} />
        <Route path="/game" exact component={Game} />
        <Route path="/to-inspire" exact component={To_Inspire} />
      </Switch>
    </Router>
  );
}

export default App;
