import type { ReactNode } from "react";
import React from "react";

type CarInfoProps = {
  label: string;
  value: string;
  icon: ReactNode;
};

export const CarInfo: React.FC<CarInfoProps> = ({ label, value, icon }) => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center gap-2">
        {icon}
        <div className="text-muted fs-6">{label}</div>
      </div>
      <span className="text-dark fs-6 fw-semibold">{value}</span>
    </div>
  );
};
