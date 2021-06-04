import cmyk from './../../../../../static/home-badges/cmyk.png'
import enroscado from './../../../../../static/home-badges/enroscado.png'
import hojas from './../../../../../static/home-badges/hojas.png'
import mira from './../../../../../static/home-badges/mira.png'
import monitor from './../../../../../static/home-badges/monitor.png'
import muestras from './../../../../../static/home-badges/muestras.png'
import rodillos from './../../../../../static/home-badges/rodillos.png'

export default function IconsInfo() {
    return (
        <ul className="icons-info">
            <li className="icon-info">
                <img src={cmyk}></img>
                <h5>OFFSET DIGITAL</h5>
            </li>
            <li className="icon-info">
                <img src={enroscado}></img>
                <h5>OFFSET DIGITAL</h5>
            </li>
            <li className="icon-info">
                <img src={hojas}></img>
                <h5>OFFSET DIGITAL</h5>
            </li>
            <li className="icon-info">
                <img src={mira}></img>
                <h5>OFFSET DIGITAL</h5>
            </li>
            <li className="icon-info">
                <img src={monitor}></img>
                <h5>OFFSET DIGITAL</h5>
            </li>
            <li className="icon-info">
                <img src={muestras}></img>
                <h5>OFFSET DIGITAL</h5>
            </li>
            <li className="icon-info">
                <img src={rodillos}></img>
                <h5>OFFSET DIGITAL</h5>
            </li>
        </ul>
    );
}