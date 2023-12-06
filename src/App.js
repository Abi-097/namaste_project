import "./App.css";
import CabCommunity from "./Components/Cabcommunity/Index";
import { CarouselTransition } from "./Components/Carousel/Index";
import Footer from "./Components/Footer/Index";
// import Navbar from "./Components/Navbar/Index";
// import NavbarWithMegaMenu from "./Components/Navbar/Index";
import { NavbarWithMegaMenu } from "./Components/Navbar/Index";
import Test from "./Components/Test/Test";
function App() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <CarouselTransition />
      <CabCommunity />
      <Footer />
    </div>
  );
}

export default App;
