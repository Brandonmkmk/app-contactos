import "./navegacion.css";
import { Link } from "react-router-dom";
import { ADDCONTACT, HOME } from "../../config/routes/path";

export const Navegacion = () => {
  return (
    <>
      <nav className="navegacion">
        <Link className="links" to={HOME}>
          Home
        </Link>
        <Link className="links" to={ADDCONTACT}>
          Add Contact
        </Link>
      </nav>
    </>
  );
};
