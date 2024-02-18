import { NavLink } from "react-router-dom";

import { home } from "../assets/icons";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <div className="flex justify-center items-center">
          <img src={home} alt={"home"} className="w-12 h-12 object-contain" />
        </div>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-white"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
