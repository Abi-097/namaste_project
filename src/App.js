import "./App.css";
import { CarouselTransition } from "./Components/Carousel/Index";
import Footer from "./Components/Footer/Index";
// import Navbar from "./Components/Navbar/Index";
// import NavbarWithMegaMenu from "./Components/Navbar/Index";
import { NavbarWithMegaMenu } from "./Components/Navbar/Index";
function App() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <CarouselTransition />
      <Footer />
    </div>
  );
}

export default App;
