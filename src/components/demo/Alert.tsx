import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Alert = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div className={`alert alert-${color} alert-dismissible`}>
      {children}
      <button onClick={onClick} type="button" className="btn-close"></button>
    </div>
  );
};

export default Alert;
