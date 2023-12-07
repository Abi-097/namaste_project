import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Carousel1, Carousel2, Carousel3 } from "../../config/Images/Images";
import "./Style.css";
import Paper from "@mui/material/Paper";
import "./Style.css";

const Cara = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <Carousel
          transition={{ duration: 2 }}
          className="curved-carousel"
          autoplay={true}
        >
          <img
            src={Carousel1}
            alt="Carousel1"
            className="h-full w-full object-cover rounded-lg"
          />
          <img
            src={Carousel2}
            alt="Carousel2"
            className="h-full w-full object-cover rounded-lg"
          />
          <img
            src={Carousel3}
            alt="Carousel3"
            className="h-full w-full object-cover rounded-lg"
          />
        </Carousel>
      </div>
      <div className="curved-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="527"
          viewBox="0 0 1440 527"
          fill="none"
        >
          <path
            d="M0 0C0 0 371.524 32.095 720 32.095C1068.48 32.095 1440 0 1440 0V527H0V0Z"
            fill="blue" // Change the color here
          />
        </svg>
      </div>
    </div>
  );
};

export default Cara;
