import "./App.css";
import Autism from "./Components/Autism/Index";
import CabCommunity from "./Components/Cabcommunity/Index";
import ProjectCard from "./Components/Card/Index";
import { CarouselTransition } from "./Components/Carousel/Index";
import Cara from "./Components/Carousel/test";
import Carousel from "./Components/Carousel/testing";
import Footer from "./Components/Footer/Index";
import FooterCarousel from "./Components/FooterCarousel/Index";
// import Navbar from "./Components/Navbar/Index";
// import NavbarWithMegaMenu from "./Components/Navbar/Index";
import { NavbarWithMegaMenu } from "./Components/Navbar/Index";
import WeDo from "./Components/WhatWeDo/Index";
import { Routes, Route } from "react-router-dom";
import Team from "./Pages/Team/Index";
import GlobalTeam from "./Pages/GlobalTeam/Index";
import SLTeam from "./Pages/SLTeam/Index";
import Footer1 from "./Components/Footer/test";
import Home from "./Pages/Home/Index";
import NeedJoin from "./Pages/NeedToJoin/Index";
function App() {
  return (
    <div className="App">
      <NavbarWithMegaMenu />
      {/* <CarouselTransition /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {/* <Router> */}
      <Routes>
        <Route path="/team" element={<Team />}></Route>
      </Routes>

      <Routes>
        <Route path="/global" element={<GlobalTeam />}></Route>
      </Routes>

      <Routes>
        <Route path="/SLteam" element={<SLTeam />}></Route>
      </Routes>

      <Routes>
        <Route path="/join" element={<NeedJoin />}></Route>
      </Routes>

      {/* </Router> */}

      {/* <Carousel /> */}
      {/* <ProjectCard /> */}
      {/* <Cara /> */}
      {/* <Autism />
      <WeDo />
      <CabCommunity />
      <NeedToJoin />
      <FooterCarousel /> */}
      {/* <Footer1 /> */}
      <Footer />
    </div>
  );
}

export default App;
