import React from "react";
import Navbar from "./Pages/Navbar";
import Banner from "./Pages/Banner";
import Relevantes from "./Pages/Relevantes";
import Compassion from "./Pages/Compassion";
import Benefits from "./Pages/Benefits";
import Sermon from "./Pages/Sermon";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Relevantes />
      <Compassion />
      <Benefits />
      <Sermon />
      <Service />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
