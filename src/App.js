import { Home, Map, AboutUs } from './Pages/exportPages';
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
      </Switch>
    </Router>
  );
}

export default App;
