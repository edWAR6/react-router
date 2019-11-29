import { Link, Route, Switch } from 'react-router-dom';

import About from './About';
import Home from './Home';
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>React Router 🚦</h1>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>             
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
