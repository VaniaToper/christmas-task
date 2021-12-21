import './style-dev/nullstyle.scss';
import './App.module.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './components/HomePage/Home';
import Filters from './components/FiltersPage/Filters';
import data from './components/FiltersPage/data';
import React, { useState } from 'react';
import { FavContext } from './context';

const App: React.FC = () => {
  const [isFav, setIsFav] = useState([]);
  console.log('Таск не доделан, проверьте  пожалуйста на 1 день позже');
  return (
    <FavContext.Provider value={{
      isFav,
      setIsFav,
    }}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/filters' render={() => <Filters data={data} />} />
          <Route path='/NotFound' render={() => <NotFound />} />
          <Redirect to='/NotFound' />
        </Switch>
      </BrowserRouter>
    </FavContext.Provider>
  );
};

export default App;
