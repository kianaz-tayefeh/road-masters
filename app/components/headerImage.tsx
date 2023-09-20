export const HeaderImage = () => {
  return (
    <div className="card">
      <img
        src="/images/Rectangle.png"
        alt="Rectangle"
        className=" card-img-top position-absolute img-fluid"
      />
      <img
        src="/images/CarHeader.png"
        alt="CarImage"
        className="card-img-top bg-opacity-10 img-fluid"
      />
      <div className="card-img-overlay text-white ms-md-15rem mt-13rem">
        <h4 className="card-title fs-7 fw-bold text-uppercase">New BMW Cars</h4>
        <p className="card-text fs-6 fw-bold w-65 lh-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>
    </div>
  );
};
