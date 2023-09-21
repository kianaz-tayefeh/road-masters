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

      <div className="card-img-overlay text-white ">
        <div className="row-cols-2 ms-12 mt-11">
          <p className="card-title fs-0 fw-bold">New BMW Cars</p>
          <p className="card-text fs-6 fw-bold w-50 lh-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </div>
      </div>
    </div>
  );
};
