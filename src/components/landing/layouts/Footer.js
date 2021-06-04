import React from "react";
import adidas from './../../../static/logos/adidas.jpg';
import arcor from './../../../static/logos/arcor.jpg';
import faber from './../../../static/logos/faber.jpg';
import icbc from './../../../static/logos/icbc.jpg';
import santander from './../../../static/logos/santander.jpg';
import sencosud from './../../../static/logos/sencosud.jpg';
import juntos from './../../../static/juntos.svg';
import logoBlanco from './../../../static/logo_blanco.svg';
import dolarNegro from './../../../static/dolar_negro.png';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
      <>
        <div className="clientes">
            <div className="clientes__title">
                <h6>NUESTROS CLIENTES</h6>
                <h2>Confian en nosotros</h2>
            </div>
            <ul className="clientes__logos">
                <li>
                    <img src={adidas} alt="adidas" />
                </li>
                <li>
                    <img src={arcor} alt="arcor" />
                </li>
                <li>
                    <img src={faber} alt="faber" />
                </li>
                <li>
                    <img src={icbc} alt="icbc" />
                </li>
                <li>
                    <img src={santander} alt="santander" />
                </li>
                <li>
                    <img src={sencosud} alt="sencosud" />
                </li>
            </ul>
        </div>
        <footer>
            <div className="juntos">
                <img src={juntos} alt="" />
                <h2>Comencemos a trabajar juntos</h2>
                <h6>Queremos trabajar contigo para crear cosas realmente interesantes.</h6>
                <a href="#" className="btn btn-line">CONTACTAR</a>
            </div>
            <div className="foot">
                <img src={logoBlanco} alt="logoBlanco" className="foot__logo" />

                <ul className="foot__nav">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">La empresa</a>
                    </li>
                    <li>
                        <a href="#">Mercados - Segmentos</a>
                    </li>
                    <li>
                        <a href="#">Contactos</a>
                    </li>
                </ul>

                <a href="#" className="foot__btn"> <img src={dolarNegro} alt="dolarNegro" />  Cotizador online</a>
            </div>
        </footer>
    </>
  );
}
