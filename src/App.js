import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/App.css';
import Section from './Section';
/* import Details from './pages/Details'; */
import { Provider } from './Context';

class App extends React.Component {
  render() {
    return(
      <Provider>
        <Router>
          <Section />
        </Router>
      </Provider>
    );
  }
}

export default App;
