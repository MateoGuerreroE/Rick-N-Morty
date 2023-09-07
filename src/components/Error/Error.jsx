import { useNavigate, NavLink } from "react-router-dom";
export default function Error() {
  return (
    <div>
      <h1>Error 404 NOT FOUND</h1>
      <NavLink to="/home">
        <button>Volver al home</button>
      </NavLink>
    </div>
  );
}
