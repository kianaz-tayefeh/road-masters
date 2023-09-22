const Footer = () => {
  return (
    <div className="container-fluid ">
      <footer className="row border-top bg-secondary align-items-center text-white py-lg-4 py-sm-2 px-lg-13 px-sm-7 gap-md-5">
        <div className="col-md-5 me-2">
          <div className="row">
            <div className=" fw-bold fs-5 text-danger ">
              Auto
              <span className="text-white ms-1">Car</span>
            </div>

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
