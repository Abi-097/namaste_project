import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Carousel1, Carousel2, Carousel3 } from "../../config/Images/Images";
import Box from "@mui/material/Box";
import ProjectCard from "../Card/Index";
import { Typography } from "@material-tailwind/react";
// import { Typography } from "@mui/material";
const slideImages = [
  {
    image: Carousel1,
    content: {
      heading: "NAMASTE Srilanka",

      paragraph: "Neurodevelopment and Autism in South Asia:",
      paragraph2: "Treatment and Evidence.",
    },
  },
  {
    image: Carousel2,
    content: {
      heading: "NAMASTE Srilanka",

      paragraph: "Neurodevelopment and Autism in South Asia:",
      paragraph2: "Treatment and Evidence.",
    },
  },
  {
    image: Carousel3,
    content: {
      heading: "NAMASTE Srilanka",
      paragraph: "Neurodevelopment and Autism in South Asia:",
      paragraph2: "Treatment and Evidence.",
    },
  },
];

export function CarouselTransition() {
  return (
    <Box style={{ position: "relative" }}>
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl relative"
        autoplay={true}
        loop={true}
      >
        {slideImages.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index}`}
            className="h-full w-full rounded-lg object-cover object-center"
          />
        ))}
      </Carousel>
      {slideImages.map((slide, index) => (
        <figcaption
          key={index}
          style={{
            position: "absolute",
            // bottom: "-px",
            top: "34%",
            left: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div key={index}>
            <Typography
              variant="h5"
              // color="text-white"
              style={{
                color: "#FFF",
                fontFamily: "Poppins, sans-serif",
                marginLeft: "6rem",
                textShadow: "6px 6px 20px rgba(0, 0, 0, 0.40)",
                fontWeight: 600,
                fontSize: "80px",
              }}
            >
              {slide.content.heading}
            </Typography>
            <Typography
              variant="body"
              // color="blue-gray"
              style={{
                textAlign: "left",
                color: "#FFF",
                fontFamily: "Poppins, sans-serif",
                marginLeft: "6rem",
                textShadow: "6px 6px 20px rgba(0, 0, 0, 0.40)",
                fontWeight: 600,
                fontSize: "32px",
              }}
            >
              {slide.content.paragraph} <br />
              {slide.content.paragraph2}
            </Typography>
          </div>
        </figcaption>
      ))}
      <ProjectCard />
    </Box>
  );
}
