import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './components/Login'
import Detail from './components/Detail'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, 
  Route,
  Switch, 
  Link 
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
