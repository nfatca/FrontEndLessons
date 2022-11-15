import logo from "../img/logo.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="/people" className="nav-link" aria-current="page">
                People
              </a>
            </li>

            <li className="nav-item">
              <a href="/paths" className="nav-link" aria-current="page">
                Paths
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link" aria-current="page">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
