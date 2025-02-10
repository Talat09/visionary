import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => navigate("/")}>
        <span className="brand-name">Your Brand</span>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
        <span className={`bar ${isOpen ? "active" : ""}`}></span>
      </div>

      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <div className="nav-links">
          <a
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            Home
          </a>
         
        </div>

        <div className="nav-auth">
          {user ? (
            <div className="user-menu">
              <div
                className="user-profile"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className="user-initial">
                  {user.name ? user.name[0].toUpperCase() : "U"}
                </span>
                <span className="user-name">{user.name || "User"}</span>
              </div>
              {showDropdown && (
                <div className="dropdown-menu">
                  <a
                    onClick={() => navigate("/profile")}
                    className="dropdown-item"
                  >
                    Profile
                  </a>
                  <a onClick={handleLogout} className="dropdown-item">
                    Logout
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button
                className="register-btn"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
