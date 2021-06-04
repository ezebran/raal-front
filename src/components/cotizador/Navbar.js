import logo from './../../static/white-logo.png';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <Link to="/" className="btn btn-line">Volver al home</Link>
        </div>
    );
}