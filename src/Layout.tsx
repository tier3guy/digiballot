import { FC, ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-800 text-gray-500 w-[100vw] h-[100vh] overflow-hidden border-t-4 border-green-600">
      {children}
    </div>
  );
};

export default Layout;
