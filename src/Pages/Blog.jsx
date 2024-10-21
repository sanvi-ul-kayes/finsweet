import React from "react";
import Container from "../Components/Container";
import Header from "./../ComponentsHeader/Header";
import HeaddingH5 from "../ComponentsHeader/HeaddingH5";
import HeaddingH2 from "./../ComponentsHeader/HeaddingH2";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
  return (
    <div className="mb-[128px]">
      <Container>
        <Header>
          <HeaddingH5 childern="Read our Blog" />
          <HeaddingH2 childern="SHARE, INSPIRE, INNOVATE" />
        </Header>

        <div className="flex justify-between">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
