import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <h1>MainLayout</h1>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
