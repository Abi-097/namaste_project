import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Style.css";
import Box from "@mui/material/Box";
import { Carousel1, Carousel2, Carousel3 } from "../../config/Images/Images";
import ProjectCard from "../Card/Index";
import { useState } from "react";

const spanStyle = {
  padding: "20px",
  color: "#FFF",
  textShadow: "6px 6px 20px rgba(0, 0, 0, 0.40)",
  fontFamily: "Poppins",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
};

const headingStyle = {
  fontSize: "10vh",
  fontWeight: 600,
  textAlign: "left",
};

const paraStyle = {
  fontSize: "32px",
  fontWeight: 600,
  textShadow: "5px 5px 20px rgba(0, 0, 0, 0.40)",
  textAlign: "left",
};

const imageStyle = {
  height: "100vh",
  width: "100%",
  objectFit: "cover",
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

const SlideshowIndicator = ({ currentIndex, length }) => {
  const indicatorStyle = {
    position: "absolute",
    bottom: "20px", // Adjust the position as needed
    left: "50%", // Center horizontally
    transform: "translateX(-50%)",
    zIndex: "1",
  };

  return (
    <div style={indicatorStyle}>
      {Array.from({ length }, (_, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            margin: "0 5px",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background:
              currentIndex === i ? "#FFF" : "rgba(255, 255, 255, 0.5)",
          }}
        />
      ))}
    </div>
  );
};

export function CarouselTransition() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };
  return (
    <Box style={{ position: "relative" }}>
      <Fade
        onChange={handleChange}
        infinite={true}
        duration={4000}
        transitionDuration={1000}
        indicators={true}
      >
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
                <span
                  style={{
                    ...spanStyle,
                    textAlign: "left",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <h2
                    style={{
                      ...headingStyle,
                      textAlign: "left",
                      fontFamily: "Poppins, sans-serif",
                      marginLeft: "6rem",
                      textShadow: "6px 6px 20px rgba(0, 0, 0, 0.40)",
                      fontWeight: 600,
                      fontSize: "80px",
                    }}
                  >
                    {slideImage.content.heading}
                  </h2>
                  <p
                    style={{
                      ...paraStyle,
                      textAlign: "left",
                      fontFamily: "Poppins, sans-serif",
                      marginLeft: "6rem",
                      textShadow: "6px 6px 20px rgba(0, 0, 0, 0.40)",
                      fontWeight: 600,
                      fontSize: "32px",
                    }}
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
      <SlideshowIndicator
        currentIndex={currentIndex}
        length={slideImages.length}
      />
      <ProjectCard />
    </Box>
  );
}
