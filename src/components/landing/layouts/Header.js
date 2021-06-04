import React from "react";
import logo from './../../../static/logo-home.png';
import dolar from './../../../static/dolar-icon.svg';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
		<img src={logo} alt="logo" className="logo-home" />

		<ul className="header-nav">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/empresa">La empresa</Link>
			</li>
			<li>
				<Link to="/mercados">Mercados-Segmentos</Link>
			</li>
			<li>
				<Link to="/contacto">Contacto</Link>
			</li>
		</ul>

		<Link to="/cotizador" className="coti-btn"><img src={dolar} alt="dolar" /> Cotizador online</Link>
    </header>
  );
}
