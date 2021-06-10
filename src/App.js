import Navbar from './Components/SearchBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Navbar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
