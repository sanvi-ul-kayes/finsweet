import React from "react";

const HeaddingH5 = ({ childern, style }) => {
  return (
    <div>
      <h5 style={style} className="text-4 font-normal leading-6 mb-4">
        {childern}
      </h5>
    </div>
  );
};

export default HeaddingH5;
