import React from "react";
import HeroSection from "./HeroSection";
import { homeObjOne, homeObjTwo } from "../pages/HomePage/Data";

function Services() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Services;
