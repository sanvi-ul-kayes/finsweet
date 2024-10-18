import React from "react";

const RIcone = ({ children }) => {
  return (
    <div className="absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]">
      {children}
    </div>
  );
};

export default RIcone;
