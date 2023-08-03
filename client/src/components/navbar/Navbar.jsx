import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Yatra_Krro</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <a href="/register">
              <button className="navButton">Register</button>
            </a>
            <a href="/login">
              <button className="navButton">Login</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
