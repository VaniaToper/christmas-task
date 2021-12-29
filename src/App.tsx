import './style-dev/nullstyle.scss';
import './App.module.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './components/HomePage/Home';
import Filters from './components/FiltersPage/Filters';
import data from './components/FiltersPage/data';
import React, { useState } from 'react';
import { FavContext } from './context';
import Game from './components/GamePage/Game';
import Header from './components/Header/Header';

const App: React.FC = () => {
  const [isFav, setIsFav] = useState([]);
  return (
    <FavContext.Provider
      value={{
        isFav,
        setIsFav,
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
    </FavContext.Provider>
  );
};

export default App;
