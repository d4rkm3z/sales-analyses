import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from 'pages/Main';
import { Providers } from 'components/Providers';

function App() {
  return (
    <Providers>
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Providers>
  );
}

export default App;
