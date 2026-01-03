import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">UpCycle Connect</div>
      <div className="nav-links">
        <a href="#">Marketplace</a>
        <a href="#">Upload</a>
        <a href="#">Impact</a>
      </div>
    </nav>
  );
}

export default Navbar;
