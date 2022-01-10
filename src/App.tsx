import "./App.css";
import HeroandHeader from "./components/HeroandHeader";
import Feature from "./components/Feature";
import NewDrops from "./components/NewDrops";
import DualA from "./components/DualA";
import Brands from "./components/Brands";
import Gallery from "./components/Gallery";
import NoNoNo from "./components/NoNoNo";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <HeroandHeader />
      <Feature />
      <NewDrops />
      <DualA />
      <Brands />
      <Gallery />
      <NoNoNo />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
