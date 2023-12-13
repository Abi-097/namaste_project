import {
  Rectangle,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle1,
} from "../../config/Images/Images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./Style.css";

const cardData = [
  {
    image: Rectangle,
  },
  {
    image: Rectangle2,
  },
  {
    image: Rectangle3,
  },
  {
    image: Rectangle4,
  },
  {
    image: Rectangle1,
  },
];

const FooterCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div
      style={{ marginTop: "5rem", backgroundColor: "rgba(118, 152, 99, 0.3)" }}
    >
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        containerClass="carousel-container"
        customTransition="transform 500ms ease-in"
      >
        {cardData.map((data, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "190px",
              transition: "transform 500ms ease-in",
            }}
          >
            <img
              src={data.image}
              alt={`card${index + 1}`}
              width="275px"
              height="200px"
            />
          </div>
        ))}
      </Carousel>
    </div>
    // </div>
  );
};

export default FooterCarousel;
