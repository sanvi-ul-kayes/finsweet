import React from "react";
import Header from "./../ComponentsHeader/Header";
import HeaddingH5 from "../ComponentsHeader/HeaddingH5";
import HeaddingH2 from "./../ComponentsHeader/HeaddingH2";
import BlogCard from "../Components/BlogCard";
import Container from "../Components/Container";

const Blog = () => {
  return (
    <div className="mb-[128px]">
      <Container>
        <Header>
          <HeaddingH5 childern="Read our Blog" />
          <HeaddingH2 childern="SHARE, INSPIRE, INNOVATE" />
        </Header>
        <div className="flex justify-between text-center">
          <BlogCard>
            <h5 className="text-[#DC9853] text-[12px] font-bold">
              Relationship
            </h5>
            <h2 className="text-[24px] font-bold w-[218px] my-4">
              WATCH AND LISTEN TO OUR SERMONS{" "}
            </h2>
            <p className=" w-[238px] mb-[48px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div>
              <h4 className="text-[16px] font-normal leading-[24px]">
                By Mathew Johnson
              </h4>
              <h4 className="text-[16px] font-normal leading-[24px]">
                Tuesday 13 May, 2021
              </h4>
            </div>
          </BlogCard>
          <BlogCard>
            <h5 className="text-[#DC9853] text-[12px] font-bold">
              Relationship
            </h5>
            <h2 className="text-[24px] font-bold w-[218px] my-4">
              WATCH AND LISTEN TO OUR SERMONS{" "}
            </h2>
            <p className=" w-[238px] mb-[48px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div>
              <h4 className="text-[16px] font-normal leading-[24px]">
                By Mathew Johnson
              </h4>
              <h4 className="text-[16px] font-normal leading-[24px]">
                Tuesday 13 May, 2021
              </h4>
            </div>
          </BlogCard>
          <BlogCard>
            <h5 className="text-[#DC9853] text-[12px] font-bold">
              Relationship
            </h5>
            <h2 className="text-[24px] font-bold w-[218px] my-4">
              WATCH AND LISTEN TO OUR SERMONS{" "}
            </h2>
            <p className=" w-[238px] mb-[48px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div>
              <h4 className="text-[16px] font-normal leading-[24px]">
                By Mathew Johnson
              </h4>
              <h4 className="text-[16px] font-normal leading-[24px]">
                Tuesday 13 May, 2021
              </h4>
            </div>
          </BlogCard>
          <BlogCard>
            <h5 className="text-[#DC9853] text-[12px] font-bold">
              Relationship
            </h5>
            <h2 className="text-[24px] font-bold w-[218px] my-4">
              WATCH AND LISTEN TO OUR SERMONS{" "}
            </h2>
            <p className=" w-[238px] mb-[48px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div>
              <h4 className="text-[16px] font-normal leading-[24px]">
                By Mathew Johnson
              </h4>
              <h4 className="text-[16px] font-normal leading-[24px]">
                Tuesday 13 May, 2021
              </h4>
            </div>
          </BlogCard>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
