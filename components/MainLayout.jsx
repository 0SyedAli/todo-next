import React from "react";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto mt-4">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;