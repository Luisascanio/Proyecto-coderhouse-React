import Cartwidjet from "../cartwidjet/Cartwidjet";
import "./Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Hamburguesas Bash Logo" className="logo" />
        <li>Menu</li>
        <li>Acerca de nosotros</li>
        <li>Mision</li>

        <Cartwidjet />
      </nav>
    </div>
  );
};

export default Navbar;
