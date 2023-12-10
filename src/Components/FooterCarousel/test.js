import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { card1, aboutus } from "../../config/Images/Images";
import { Typography, Box } from "@mui/material";
import "./Style.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

const FooterCash = () => {
  const [width, setWidth] = useState(0);
  const carousel1 = useRef(null);
  const controls = useAnimation();

  const cardData = [
    {
      image: card1,
      text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
      authors: "Val Racheeva + Maxi Knust",
      location: "Co-authors, Germany",
    },
    {
      image: card1,
      text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
      authors: "Val Racheeva + Maxi Knust",
      location: "Co-authors, Germany",
    },
    {
      image: card1,
      text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
      authors: "Val Racheeva + Maxi Knust",
      location: "Co-authors, Germany",
    },
    {
      image: card1,
      text: "where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result.",
      authors: "Val Racheeva + Maxi Knust",
      location: "Co-authors, Germany",
    },
  ];

  const handleSlide = async () => {
    const totalCards = cardData.length;
    const containerWidth = carousel1.current.offsetWidth;
    const cardWidth = 330; // Adjust this to match the actual card width

    if (containerWidth < totalCards * cardWidth) {
      await controls.start({ x: -(totalCards * cardWidth - containerWidth) });
    }
  };

  useEffect(() => {
    handleSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  return (
    <Box
      sx={{
        ml: {
          lg: "10rem",
          md: "2rem",
          sm: 0,
          xs: 0,
        },
        mr: {
          lg: "10rem",
          md: "2rem",
          sm: 0,
          xs: 0,
        },
      }}
    >
      <motion.div
        ref={carousel1}
        className="carousel1"
        style={{ overflow: "hidden" }}
      >
        <motion.div
          className="inner-carousel"
          animate={controls}
          style={{ display: "flex" }}
        >
          {cardData.map((data, index) => (
            // {cardData.map((data, index) => (
            <div className="item" key={index}>
              <img src={aboutus} alt={`card${index + 1}`} />
              <Typography>{data.text}</Typography>
              <Typography>{data.authors}</Typography>
              <Typography>{data.location}</Typography>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default FooterCash;
