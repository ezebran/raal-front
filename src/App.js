import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Cotizador from './components/cotizador/Cotizador';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/landing/Pages/Home/Home';
import Mercados from './components/landing/Pages/Mercados/Mercados';
import Empresa from './components/landing/Pages/Empresa/Empresa';
import Contacto from './components/landing/Pages/Contacto/Contacto';
import './App.scss';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mercados">
            <Mercados />
          </Route>
          <Route exact path="/empresa">
            <Empresa />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
          <Route  path="/cotizador">
              <Cotizador />
          </Route>
          <Route path="/dashboard">
              <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}