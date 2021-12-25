import './style-dev/nullstyle.scss';
import './App.module.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Filters from './pages/Filters';
import data from './assets/data';
import React, { FC, useState } from 'react';
import { FavContext } from './context';

const App: FC = () => {
  const [favCards, setFavCards] = useState<number[]>([]);
  return (
    <FavContext.Provider
      value={{
        favCards,
        setFavCards,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/filters" render={() => <Filters data={data} />} />
          <Route path="/NotFound" render={() => <NotFound />} />
          <Redirect to="/NotFound" />
        </Switch>
      </BrowserRouter>
    </FavContext.Provider>
  );
};

export default App;
