import { NavLink } from "react-router-dom";
import styledError from "./Error.module.css";
export default function Error() {
  return (
    <div className={styledError.container}>
      <h1>Error 404 NOT FOUND</h1>
      <NavLink to="/home">
        <button>Volver al home</button>
      </NavLink>
    </div>
  );
}
