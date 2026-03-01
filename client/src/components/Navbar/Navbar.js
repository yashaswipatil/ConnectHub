import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyBlog</div>

      <div className="navLinks">
        <NavLink to="/" className="navLink">
          Home
        </NavLink>

        <NavLink to="/createpost" className="navLink">
          Create Post
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
