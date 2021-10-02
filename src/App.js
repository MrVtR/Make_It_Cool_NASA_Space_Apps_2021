import { Home, Map } from './Pages/exportPages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" exact component={Map} />
      </Switch>
    </Router>
  );
}

export default App;
