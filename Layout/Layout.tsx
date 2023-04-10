import Navbar from "@/components/Navbar/Navbar";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
