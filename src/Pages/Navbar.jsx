import React from "react";
import Button from "../Components/Button";
import Container from "./../Components/Container";

const Navbar = () => {
  return (
    <nav className="bg-[#161722]">
      <Container>
        <div className=" flex justify-between items-center">
          <img src="/Images/Navbar.png" alt="Navbar" />

          <ul className="text-white flex gap-x-12">
            <li>Home</li>
            <li>About us</li>
            <li>Sermon</li>
            <li>Blog</li>
          </ul>
          <Button Navname="Contact us" />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
