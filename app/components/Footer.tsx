import React from "react";
import { AutoCarIcon } from "./icons/AutoCarIcon";

const Footer = () => {
  return (
    <div className=" container-fluid ">
      <footer className="row border-top bg-secondary  py-4 align-items-center text-white">
        <div className="col mb-3 ms-md-15rem">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <AutoCarIcon />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent
          </p>
        </div>
        <div className="col mb-3">New Cars</div>
        <div className="col mb-3">User Cars</div>
        <div className="col mb-3">About us</div>
      </footer>
    </div>
  );
};

export default Footer;
