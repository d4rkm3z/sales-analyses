import React, { FC, useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from 'components/Header';
import { Providers } from 'components/Providers';
import { useVScrollListener } from 'hooks/useVScrollListener';
import { Main } from 'pages/Main';
import { HeaderType } from 'pages/Main/enums';

import { routes } from './routes';

const App: FC = () => {
  const [verticalOffset, setVerticalOffset] = useState(0);
  const getHeaderType = useCallback(() => {
    return verticalOffset > 60 ? HeaderType.PINNED : HeaderType.DEFAULT;
  }, [verticalOffset]);

  useVScrollListener(setVerticalOffset);

  return (
    <Providers>
      <Router>
        <Header menuItems={routes} type={getHeaderType()} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {routes.map(({ component, link }) => (
            <Route path={link}>{component}</Route>
          ))}
        </Switch>
      </Router>
    </Providers>
  );
};

export default App;
