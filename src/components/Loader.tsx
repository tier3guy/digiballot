import { FC } from "react";

interface LoaderProps {
  color?: string;
  size?: number;
}

const Loader: FC<LoaderProps> = ({ color = "green-600", size = 8 }) => {
  const loaderClassName: string = `animate-spin rounded-full h-${size} w-${size} border-t-2 border-${color} border-opacity-50`;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={loaderClassName}></div>
    </div>
  );
};

export default Loader;
