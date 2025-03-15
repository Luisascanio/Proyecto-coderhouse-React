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
        
        <Link to="/" className="navbarlink">Todas</Link>
        <Link to="/category/Hamburguesas" className="navbarlink">Hamburguesas</Link>
        <Link to="/category/Hotdogs" className="navbarlink">Hotdogs</Link>
        <Link to="/cart" >
        <Cartwidjet />
      </Link>
        
      </nav>
    </div>
  );
};

export default Navbar;
