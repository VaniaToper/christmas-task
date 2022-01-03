import './style-dev/reset.scss';
import './App.module.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Filters from './pages/Filters';
import data from './assets/data';
import React, { FC, useState } from 'react';
import { FavoriteContext } from './context';
import Game from './pages/Game';

const App: FC = () => {
  const [favoriteCards, setFavoriteCards] = useState<number[]>([]);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteCards,
        setFavoriteCards,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/filters" render={() => <Filters data={data} />} />
          <Route path="/game" render={() => <Game />} />
          <Route path="/NotFound" render={() => <NotFound />} />
          <Redirect to="/NotFound" />
        </Switch>
      </BrowserRouter>
    </FavoriteContext.Provider>
  );
};

export default App;
