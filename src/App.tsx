import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Providers } from 'components/Providers';
import { Main } from 'pages/Main';

const App: FC = () => (
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

export default App;
