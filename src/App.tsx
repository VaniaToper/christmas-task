import './style-dev/nullstyle.scss'
import './App.module.scss';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import FiltersPage from "./pages/FiltersPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import {useState} from "react";

const App = () => {
  return (
  <BrowserRouter>
      <Switch>
        <Route path="/home" render={()=><HomePage/>} />
        <Route path="/filters" render={()=><FiltersPage/>}/>
        <Route path="/NotFound" render={()=><NotFound/>}/>
        <Redirect to='/NotFound' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
