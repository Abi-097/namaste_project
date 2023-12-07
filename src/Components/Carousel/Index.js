import { Carousel1, Carousel2, Carousel3 } from "../../config/Images/Images";
import "./Style.css";
import { Carousel, Typography } from "@material-tailwind/react";
export function CarouselTransition() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src={Carousel1}
          alt="Carousel1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl sm:text-2xl"
              // style={{ fontSize: "60px", color: "#fff", fontWeight: "600" }}
            >
              NAMASTE Srilanka
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 sm:text-base"
            >
              Neurodevelopment and Autism in South Asia: <br />
              Treatment and Evidence.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Carousel2}
          alt="Carousel1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl sm:text-2xl"
              // style={{ fontSize: "60px", color: "#fff", fontWeight: "600" }}
            >
              NAMASTE Srilanka
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 sm:text-base"
            >
              Neurodevelopment and Autism in South Asia: <br />
              Treatment and Evidence.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Carousel3}
          alt="Carousel1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl sm:text-2xl"
              // style={{ fontSize: "60px", color: "#fff", fontWeight: "600" }}
            >
              NAMASTE Srilanka
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 sm:text-base"
            >
              Neurodevelopment and Autism in South Asia: <br />
              Treatment and Evidence.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
