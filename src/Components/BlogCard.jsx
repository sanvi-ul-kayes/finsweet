import React from "react";

const BlogCard = () => {
  return (
    <div className="py-8 px-12 bg-[#FFF5EB] max-w-[302px] mb-[126px] mt-[64px] relative group">
      <h5 className="text-[#DC9853] text-[12px] font-bold">Relationship</h5>
      <h2 className="text-[24px] font-bold w-[218px] my-4">
        WATCH AND LISTEN TO OUR SERMONS
      </h2>
      <p className=" w-[238px] mb-[48px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <div>
        <h4 className="text-[16px] font-normal leading-[24px]">
          By Mathew Johnson
        </h4>
        <h4 className="text-[16px] font-normal leading-[24px]">
          Tuesday 13 May, 2021
        </h4>
      </div>

      <div className=" w-full h-[16px] bg-[#DC9853] absolute left-0 bottom-0 opacity-0 duration-300 ease-in-out group-hover:opacity-100"></div>
    </div>
  );
};

export default BlogCard;
