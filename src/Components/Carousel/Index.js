import { Carousel } from "@material-tailwind/react";
import { Carousel1, Carousel2, Carousel3 } from "../../config/Images/Images";
import "./Style.css";
import Paper from "@mui/material/Paper";
export function CarouselTransition() {
  return (
    <div>
      <Paper sx={{ MaxHeight: "80%" }} className="curved-paper">
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
      </Paper>
    </div>
  );
}
