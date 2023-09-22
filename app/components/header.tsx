import { AutoCarLogo } from "./icons/AutoCarLogo";
import { ProfileIcon } from "./icons/ProfileIcon";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-lg-0 px-lg-9 px-sm-1 ">
      <div className="container-fluid">
        <a href="/" className="navbar-brand me-lg-5" id="logo">
          <AutoCarLogo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerSupported"
          aria-controls="navbarTogglerSupported"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerSupported">
          <ul className="navbar-nav me-auto gap-5 ">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link py-2 active border-bottom border-2 border-danger"
                aria-current="page"
              >
                New cars
              </a>
            </li>
            <li className="nav-item ">
              <a href="#" className="nav-link py-2">
                Used cars
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark py-2">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex align-items-center gap-4 ">
          <a type="button" href="/" className="btn btn-danger text-white ">
            Find your car
          </a>
          <ProfileIcon />
        </div>
      </div>
    </nav>
  );
};
