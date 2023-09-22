import type { ICarData } from "~/interfaces/ICarData";
import { CarInfo } from "./CarInfo";
import {
  ColorIcon,
  IntakeIcon,
  MilageIcon,
  PowerIcon,
  TransmissionIcon,
  YearIcon,
} from "./icons/CarInfoIcons";

export const CarCard = ({
  model,
  make,
  kilometer,
  transmission,
  engine,
  year,
  color,
}: ICarData) => {
  return (
    <div className="border border-gray rounded-1 bg-white mb-2 me-lg-13 p-2">
      <div className="row justify-content-start position-relative">
        <div className="col-lg-3 col-sm-12">
          <div className="border-2 rounded-2 text-center">
            <img
              src="/images/Car.png"
              width={203}
              height={143}
              alt="car_image"
            />
          </div>
        </div>
        <div className="col-lg-7 col-sm-12">
          <div className="fw-bold fs-5">{make}</div>
          <div className="row">
            <div className="col-6">
              <CarInfo
                label="Mileage"
                value={kilometer}
                icon={<MilageIcon />}
              />
              <CarInfo
                label="Transmission"
                value={transmission}
                icon={<TransmissionIcon />}
              />
              <CarInfo label="Year" value={year} icon={<YearIcon />} />
            </div>
            <div className="col-6">
              <CarInfo label="Model" value={model} icon={<IntakeIcon />} />
              <CarInfo label="Engine" value={engine} icon={<PowerIcon />} />
              <CarInfo label="Color" value={color} icon={<ColorIcon />} />
            </div>
          </div>
        </div>
        <div className="col-lg-auto position-absolute bottom-0 end-0 text-end ">
          <button className="btn btn-outline-danger">View Car</button>
        </div>
      </div>
    </div>
  );
};
