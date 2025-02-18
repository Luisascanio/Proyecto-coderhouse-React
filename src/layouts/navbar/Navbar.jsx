import Cartwidjet from "../../common/cartwidjet/Cartwidjet";
import "./navbar.css";
import logo from '../../assets/images/logo.png';
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
        <img src={logo} alt="Hamburguesas Bash Logo" className="logo" />
        </Link>
        <li>Menu</li>
        <li>Acerca de nosotros</li>
        <li>Mision</li>

        <Cartwidjet />
      </nav>
    </div>
  );
};

export default Navbar;
