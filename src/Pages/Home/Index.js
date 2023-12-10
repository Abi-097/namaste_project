import React from "react";
import { CarouselTransition } from "../../Components/Carousel/Index";
import ProjectCard from "../../Components/Card/Index";
import NeedToJoin from "../../Components/NeedToJoin/Index";
import WeDo from "../../Components/WhatWeDo/Index";
import Autism from "../../Components/Autism/Index";
import CabCommunity from "../../Components/Cabcommunity/Index";
import FooterCarousel from "../../Components/FooterCarousel/Index";
import FooterCash from "../../Components/FooterCarousel/test";
const Home = () => {
  return (
    <div>
      <CarouselTransition />
      <Autism />
      <WeDo />

      <CabCommunity />
      <NeedToJoin />
      {/* <FooterCash /> */}
      <FooterCarousel />
    </div>
  );
};

export default Home;
