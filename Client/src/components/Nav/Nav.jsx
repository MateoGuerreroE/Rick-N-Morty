import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styledNav from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={styledNav.container}>
      <div className={styledNav.Bcontainer}>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>

        <NavLink to="/about">
          <button>About</button>
        </NavLink>

        <NavLink to="/favorites">
          <button>Favorites</button>
        </NavLink>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
