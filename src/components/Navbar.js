import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <h2>Task Manager</h2>

      <div className="nav-links">
        <Link to="/todos">Todos</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
