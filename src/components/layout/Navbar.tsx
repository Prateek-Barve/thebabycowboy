import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="site-navbar">
      <NavLink to="/" className="site-navbar__brand">
        thebabycowboy
      </NavLink>

      <nav className="site-navbar__links" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `site-navbar__link ${isActive ? "is-active" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `site-navbar__link ${isActive ? "is-active" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `site-navbar__link ${isActive ? "is-active" : ""}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/travel"
          className={({ isActive }) =>
            `site-navbar__link ${isActive ? "is-active" : ""}`
          }
        >
          Travel
        </NavLink>
        <NavLink
          to="/shelf"
          className={({ isActive }) =>
            `site-navbar__link ${isActive ? "is-active" : ""}`
          }
        >
          Shelf
        </NavLink>
        <NavLink
          to="/writing"
          className={({ isActive }) =>
            `site-navbar__link ${isActive ? "is-active" : ""}`
          }
        >
          Writing
        </NavLink>
        
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `site-navbar__link ${isActive ? "is-active" : ""}`
          }
        >
          Contact
        </NavLink>

      </nav>
    </header>
  );
};

export default Navbar;