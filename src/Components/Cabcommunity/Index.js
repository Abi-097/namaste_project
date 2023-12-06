import Paper from "@mui/material/Paper";
import { card1 } from "../../config/Images/Images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Style.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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
];

const CabCommunity = () => {
  const responsive = {
    // Define your responsive settings here
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // Number of cards to slide
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // Number of cards to slide
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // Number of cards to slide
    },
  };

  return (
    <div>
      <Typography
        variant="h1"
        className="mb-6 flex items-center DBlack"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontWeight: "700",
        }}
      >
        CAB Community
      </Typography>
      <Carousel
        //   centerMode={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        //   transitionDuration={100}
        infinite={true}
        //   customTransition={customTransition}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        containerClass="carousel-container"
        //   itemClass="carousel-item-padding-40-px"
      >
        {cardData.map((data, index) => (
          <Card
            className="mt-6 w-96 text-lightblack"
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // Centering cards only for desktop view
              margin: "0 auto", // Centering horizontally
              maxWidth: "100%", // Adjust this value based on your design
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={data.image} alt={`card${index + 1}`} width="174" />
            </div>
            <CardBody style={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                {data.text}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0" style={{ textAlign: "center" }}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {data.authors} <br /> {data.location}
              </Typography>
            </CardFooter>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default CabCommunity;
