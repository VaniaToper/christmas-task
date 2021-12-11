import './style-dev/nullstyle.scss'
import './App.module.scss';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Filters from "./pages/Filters";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" render={()=><Home/>} />
        <Route path="/filters" render={()=><Filters/>}/>
        <Route path="/NotFound" render={()=><NotFound/>}/>
        <Redirect to='/NotFound' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
