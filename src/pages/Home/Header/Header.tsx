import { FaBars } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import logo from "../../../assets/logo/keyboard-icon-keyboard-icon-for-your-web-site-design-logo-app-ui-keyboard-pc-symbol-vector.jpg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Product Management</a>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <button className="btn">
          <TiShoppingCart size={30} />
          <h1 className="text-3xl">0</h1>
        </button>
      </li>
    </>
  );
  return (
    <div className="navbar flex justify-between items-center bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="navbar-start text-white">
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-[80px]" src={logo} alt="" />
          TypeMasters
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu text-white menu-horizontal px-1 pointer flex items-center">
          {navLinks}
        </ul>
      </div>
      <div className="lg:hidden ">
        <div className="drawer drawer-end ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button">
              <FaBars size={35} />
            </label>
          </div>
          <div className="drawer-side z-10">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu text-white bg-base-200 text-base-content min-h-full w-80 p-4 bg-gradient-to-r from-pink-500 to-yellow-500">
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
