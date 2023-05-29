import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <div onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </div>
  );
};

export default Button;
