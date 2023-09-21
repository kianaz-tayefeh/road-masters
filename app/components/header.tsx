import { AutoCarIcon } from "./icons/AutoCarIcon";
import { ProfileIcon } from "./icons/ProfileIcon";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  px-9">
      <div className="container-fluid">
        <a href="/" className="navbar-brand me-5" id="logo">
          <AutoCarIcon />
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
                href="#"
                className="nav-link active border-bottom border-2 border-danger"
                aria-current="page"
              >
                New cars
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ">
                Used cars
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark ">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark ">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-4 ">
            <a type="button" href="/" className="btn btn-danger ">
              Find your car s
            </a>
            <ProfileIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};
