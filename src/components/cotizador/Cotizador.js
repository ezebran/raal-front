import Navbar from './Navbar';
import { BrowserRouter as Router,Switch, Route, Link, useLocation } from "react-router-dom";
import Mas from './Mas/Mas';
import Menos from './Menos/Menos';

export default function Cotizador() {

    let location = useLocation();

    return (
      <div className="cotizador">
        <Navbar />

          <div className={location.pathname === "/cotizador" || location.pathname === "/cotizador/" ? 'welcome-cotizador' : 'd-none'}>
            <h3>¡Hola! Antes que nada contanos, <br/> ¿Qué cantidad de etiquetas querés cotizar?</h3>
            <div className="cantidades">
              <Link to="/cotizador/menos-de-mil" className="cantidad"><span>Menos</span> de 10.000 Etiquetas</Link> 
              <Link to="/cotizador/mas-de-mil" className="cantidad"><span>Mas</span> de 10.000 Etiquetas</Link>
            </div>
          </div>
          
          
          <Switch>
              <Route exact path="/cotizador/menos-de-mil">
                  <Menos />
              </Route>
              <Route exact path="/cotizador/mas-de-mil">
                  <Mas />
              </Route>
          </Switch>

      </div>
    );
}