import { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Style.css";
import Box from "@mui/material/Box";
import { Carousel1, Carousel2, Carousel3 } from "../../config/Images/Images";
import ProjectCard from "../Card/Index";

const spanStyle = {
  padding: "20px",
  color: "#FFF",
  textShadow: "6px 6px 20px rgba(0, 0, 0, 0.40)", // Updated text shadow
  fontFamily: "Poppins", // Updated font family
  display: "flex",
  flexDirection: "column", // Set to column
  justifyContent: "center", // Set to center
  alignItems: "flex-start",
};

const headingStyle = {
  fontSize: "10vh",
  fontWeight: 600,
  textAlign: "left", // Align text to left
};

const paraStyle = {
  fontSize: "32px",
  fontWeight: 600,
  textShadow: "5px 5px 20px rgba(0, 0, 0, 0.40)", // Updated text shadow
  textAlign: "left", // Align text to left
};

const imageStyle = {
  height: "100vh", // Set image height to 150% viewport height
  width: "100%", // Ensure image takes up full width
  objectFit: "cover", // Maintain image aspect ratio and cover container
};

const slideImages = [
  {
    image: Carousel1,
    content: {
      heading: "NAMASTE Srilanka",
      paragraph:
        "Neurodevelopment and Autism in South Asia: <br /> Treatment and Evidence.",
    },
  },
  {
    image: Carousel2,
    content: {
      heading: "NAMASTE Srilanka",
      paragraph:
        "Neurodevelopment and Autism in South Asia: <br /> Treatment and Evidence.",
    },
  },
  {
    image: Carousel3,
    content: {
      heading: "NAMASTE Srilanka",
      paragraph:
        "Neurodevelopment and Autism in South Asia: <br /> Treatment and Evidence.",
    },
  },
];

export function CarouselTransition() {
  return (
    <Box>
      <Fade infinite={true} duration={4000} transitionDuration={1000}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="slide-item">
            <div
              className="h-97 w-full rounded-lg overflow-hidden relative"
              style={{
                backgroundImage: `url(${slideImage.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src={slideImage.image}
                alt={slideImage.image}
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
                <span style={{ ...spanStyle, textAlign: "left" }}>
                  <h2 style={{ ...headingStyle, textAlign: "left" }}>
                    {slideImage.content.heading}
                  </h2>
                  <p
                    style={{ ...paraStyle, textAlign: "left" }}
                    dangerouslySetInnerHTML={{
                      __html: slideImage.content.paragraph,
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </Fade>
      <ProjectCard />
    </Box>
  );
}
