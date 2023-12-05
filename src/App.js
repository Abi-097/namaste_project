import "./App.css";
import { CarouselTransition } from "./Components/Carousel/Index";
// import Navbar from "./Components/Navbar/Index";
// import NavbarWithMegaMenu from "./Components/Navbar/Index";
import { NavbarWithMegaMenu } from "./Components/Navbar/Index";
function App() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <CarouselTransition />
    </div>
  );
}

export default App;
