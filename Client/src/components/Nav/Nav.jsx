import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styledNav from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={styledNav.container}>
      <div className={styledNav.Bcontainer}>
        <NavLink to="/home">
          <button className={styledNav.button1}></button>
        </NavLink>

        <NavLink to="/about">
          <button className={styledNav.button2}></button>
        </NavLink>

        <NavLink to="/favorites">
          <button className={styledNav.button3}></button>
        </NavLink>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
