import React from "react";
import ImageHome from "../assets/ImageHome.png";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-bg-[#ECFAE5] to-bg-[#DDF6D2] py-0 md:py-12">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Mobile: Image on top; Desktop: Image on right */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 order-1 lg:order-2">
          <img
            src={ImageHome}
            alt="Ilustrasi Rambu Lalu Lintas"
            className="w-3/4 sm:w-2/3 lg:w-full max-w-md object-contain"
          />
        </div>

        {/* Text & Buttons */}
        <div className="w-full lg:w-1/2 text-black text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Selamat Datang di SiJala
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            Pelajari dan patuhi rambu lalu lintas untuk keselamatan
            perjalananmu. Jadilah pengemudi bijak dan bertanggung jawab!
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button>
              <FontAwesomeIcon icon={faBookOpen} className="mr-5" />
              <Link to="/BasicRules">Aturan</Link>
            </Button>
            <Button onClick={() => window.location.href = "/Quiz"}>
              <FontAwesomeIcon icon={faGamepad} className="mr-5" />
              <Link>Quiz</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
