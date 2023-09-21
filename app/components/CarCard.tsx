import React from "react";
import MilageIcon from "./icons/MilageIcon";
import TransmissionIcon from "./icons/TransmissionIcon";
import YearIcon from "./icons/YearIcon";
import IntakeIcon from "./icons/IntakeIcon";
import PowerIcon from "./icons/PowerIcon";
import ColorIcon from "./icons/ColorIcon";

export const CarCard = ({
  model,
  make,
  kilometer,
  transmission,
  engine,
  year,
  color,
}: any) => {
  return (
    <div className="rounded-1 border border-gray bg-white mb-2 me-13 p-2 ">
      <div className="row justify-content-start position-relative">
        <div className="col-3">
          <div className="border-2 rounded-2">
            <img
              src="/images/Car.png"
              width={203}
              height={143}
              alt="car-in-card"
            />
          </div>
        </div>
        <div className="col-7">
          <div className="row fw-bold fs-5 ms-0">{make}</div>
          <div className="row row-cols-lg-3">
            <RenderInfo
              label="Mileage"
              value={kilometer}
              icon={<MilageIcon />}
            />
            <RenderInfo
              label="Transmission"
              value={transmission}
              icon={<TransmissionIcon />}
            />
            <RenderInfo label="Year" value={year} icon={<YearIcon />} />
          </div>
          <div className="row row-cols-lg-3 mt-3">
            <RenderInfo label="Model" value={model} icon={<IntakeIcon />} />
            <RenderInfo label="Engine" value={engine} icon={<PowerIcon />} />
            <RenderInfo label="Color" value={color} icon={<ColorIcon />} />
          </div>
        </div>
        <div className="col-auto position-absolute bottom-0 end-0 mb-3">
          <button className="btn btn-outline-danger">View Car</button>
        </div>
      </div>
    </div>
  );
};

const RenderInfo = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: any;
}) => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center gap-2">
        {icon}
        <div className="text-muted fs-6 fw-normal">{label}</div>
      </div>
      <span className="text-dark fs-6 fw-semibold">{value}</span>
    </div>
  );
};
