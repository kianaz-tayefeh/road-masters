import React from "react";
import { AutoCarIcon } from "./icons/AutoCarIcon";

const Footer = () => {
  return (
    <div className=" container-fluid ">
      <footer className="row border-top bg-secondary align-items-center text-white py-4 px-13 gap-md-5">
        <div className="col-md-5 me-2">
          <div className="row gap-2">
            <a
              href="/"
              className="d-flex align-items-center link-dark text-decoration-none"
            >
              <AutoCarIcon />
            </a>

            <p className="fw-normal fs-6 opacity-50 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent
            </p>
          </div>
        </div>

        <div className="col-md-1 mb-3 fw-bold fs-6">New Cars</div>
        <div className="col-md-1 mb-3 fw-bold fs-6">User Cars</div>
        <div className="col-md-1 mb-3 fw-bold fs-6">About us</div>
        <div className="col-md-1 mb-3 fw-bold fs-6">Contact</div>
      </footer>
    </div>
  );
};

export default Footer;
