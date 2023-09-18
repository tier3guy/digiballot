import { FC, ReactNode } from "react";

interface NavbarWrapperProps {
  children: ReactNode;
}

const NavbarWrapper: FC<NavbarWrapperProps> = ({ children }) => {
  return (
    <div className=" bg-opacity-30 backdrop-blur-lg border-b-[0.5px] border-gray-500">
      {children}
    </div>
  );
};

export default NavbarWrapper;
