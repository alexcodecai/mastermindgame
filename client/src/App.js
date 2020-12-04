import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainScreen from "./Screen/MainScreen";
import GameruleScreen from "./Screen/GameruleScreen";
function App() {
  return (
    <Router>
      <Route path='/' component={MainScreen} exact></Route>
      <Route path='/rule' component={GameruleScreen} exact></Route>
    </Router>
  );
}

export default App;
