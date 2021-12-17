import './style-dev/nullstyle.scss'
import './App.module.scss';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./components/HomePage/Home";
import Filters from "./components/FiltersPage/Filters";
import data from "./pages/data";

const App = () => {
  return (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact render={()=><Home/>} />
        <Route path="/filters" render={()=><Filters data={data}/>}/>
        <Route path="/NotFound" render={()=><NotFound/>}/>
        <Redirect to='/NotFound' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
