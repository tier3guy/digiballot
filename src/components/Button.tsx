import React from "react";

interface ButtonProps {
  label: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
  secondary?: boolean;
  className?: string;
}

const Button = ({
  label = "Button",
  action = () => {},
  className = "",
  secondary,
}: ButtonProps) => {
  return (
    <button
      className={`py-3 px-5 text-center text-gray-100 ${
        secondary
          ? "bg-gray-600 cursor-not-allowed"
          : "bg-green-600 cursor-pointer"
      } ${className}`}
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;
