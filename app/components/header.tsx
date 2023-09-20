import { useState } from "react";
import { AutoCarIcon } from "./icons/AutoCarIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import MenuIcon from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid mx-5rem">
        <a className="navbar-brand" href="/">
          <AutoCarIcon />
        </a>
        <button className="navbar-toggler" onClick={toggleMenu}>
          {showMenu ? <MenuIcon /> : <CloseIcon />}
        </button>
        <div
          className={
            showMenu
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse active"
          }
        >
          <ul className="navbar-nav me-auto">
            <li className=" nav-underline ms-4 me-5">
              <a className="nav-link text-dark " href="/">
                New cars
              </a>
            </li>
            <li className=" nav-underline me-5">
              <a className="nav-link text-dark" href="/">
                Used cars
              </a>
            </li>
            <li className=" nav-underline me-5">
              <a className="nav-link text-dark" href="/">
                About us
              </a>
            </li>
            <li className=" nav-underline me-5">
              <a className="nav-link text-dark" href="/">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-4 ">
            <button type="button" className="btn btn-danger ">
              Find your car s
            </button>
            <ProfileIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};
