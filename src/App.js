import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Container} from './components/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Container />
          </Route>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
