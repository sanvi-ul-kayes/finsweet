import React from "react";

const BlogCard = ({ children }) => {
  return (
    <div className="py-8 px-12 bg-[#FFF5EB] max-w-[302px] mb-[126px] mt-[64px]">
      {children}
    </div>
  );
};

export default BlogCard;
