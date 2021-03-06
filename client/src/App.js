import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//
import './App.css';

//
import Header from './Header';
import Fib from './Fib';
import OtherPage from './OtherPage';

//
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path={'/other-page'} component={OtherPage} />
            <Route exaxt path={'/'} component={Fib} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
