import "./App.css";
import Autism from "./Components/Autism/Index";
import CabCommunity from "./Components/Cabcommunity/Index";
import { CarouselTransition } from "./Components/Carousel/Index";
import Footer from "./Components/Footer/Index";
// import Navbar from "./Components/Navbar/Index";
// import NavbarWithMegaMenu from "./Components/Navbar/Index";
import { NavbarWithMegaMenu } from "./Components/Navbar/Index";
import NeedToJoin from "./Components/NeedToJoin/Index";
import Test from "./Components/Test/Test";
import WeDo from "./Components/WhatWeDo/Index";
function App() {
  return (
    <div className="App">
      <NavbarWithMegaMenu />
      <CarouselTransition />
      <Autism />
      <WeDo />
      <CabCommunity />
      <NeedToJoin />
      <Footer />
    </div>
  );
}

export default App;
