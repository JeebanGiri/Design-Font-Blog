import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  return (
    <>
      <nav className={style.navbar}>
        <span className={style.navItem}>
          <ul className={style.navItems}>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
          </ul>
        </span>
      </nav>
    </>
  );
};
export default Header;
