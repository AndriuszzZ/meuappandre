export default function Header() {
  return (
    <nav className="navbar navbar-espand-ig">
      <ul className="navbar-nav">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Inicial</Link>
        </li>
        <li>
          <Link to="/sobre" className="nav-link">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
