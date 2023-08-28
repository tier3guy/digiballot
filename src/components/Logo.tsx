import { FC } from "react";

interface LogoProps {
  label?: string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ label = "digiballot", className = "" }) => {
  const logoClassName: string = `font-bold text-3xl text-gray-400 ${className}`;
  return (
    <div>
      <h1 className={logoClassName}>{label}</h1>
    </div>
  );
};

export default Logo;
