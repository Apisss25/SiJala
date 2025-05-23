import React from "react";
import HeroSection from "../section/HeroSection";
import Features from "../section/Features";
import Superiority from "../section/superiority";
import EducationAnimation from "../section/EducationAnimation";

const Home = () => {
  return (
    <>
      {/* Hero - full viewport height */}
      <section className="h-screen pt-[70px] bg-[#EFEEEA]">
        <HeroSection />
      </section>

      {/* Features - auto height with padding */}
      <section className="py-16 bg-[#EFEEEA]">
        <Features />
      </section>

      {/* Superiority - auto height with padding */}
      <section className="py-16 bg-[#EFEEEA]">
        <Superiority />
      </section>
      <section className="py-10 bg-[#EFEEEA]">
        <EducationAnimation />
      </section>
    </>
  );
};

export default Home;
