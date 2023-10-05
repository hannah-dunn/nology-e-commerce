import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinkClasses = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : styles.link;
  };

  return (
    <nav className={styles.nav}>
      <NavLink className={navLinkClasses} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkClasses} to="/cart">
        Cart
        <img
          className={styles.icon}
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png"
          alt="shopping-cart--v1"
        />
      </NavLink>
    </nav>
  );
};

export default NavBar;
